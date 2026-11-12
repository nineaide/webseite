import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { sixMonthCutoff, retentionSql } from './lead-retention.mjs';

assert.equal(
  sixMonthCutoff(new Date('2026-11-12T12:34:56.000Z')),
  '2026-05-12T12:34:56.000Z',
);
assert.equal(
  sixMonthCutoff(new Date('2026-08-31T00:00:00.000Z')),
  '2026-02-28T00:00:00.000Z',
);
assert.equal(
  sixMonthCutoff(new Date('2024-08-31T00:00:00.000Z')),
  '2024-02-29T00:00:00.000Z',
);
assert.throws(() =>
  retentionSql('mark', {
    id: "'; DROP TABLE website_leads;--",
    status: 'no_contract',
  }),
);
assert.throws(() =>
  retentionSql('mark', {
    id: '00000000-0000-4000-8000-000000000001',
    status: 'unknown',
  }),
);
const db = new DatabaseSync(':memory:');
try {
  db.exec(readFileSync('drizzle/0000_milky_boomerang.sql', 'utf8'));
  // An existing row must remain unreviewed when the migration is applied.
  db.exec(
    `INSERT INTO website_leads VALUES ('existing','hash','2025-01-01','Test','example@example.test','neu','nine-start','','','','{}','pending',0)`,
  );
  db.exec(readFileSync('drizzle/0001_lead_retention.sql', 'utf8'));
  assert.equal(
    db
      .prepare("SELECT retention_status FROM website_leads WHERE id='existing'")
      .get().retention_status,
    'unreviewed',
  );
  const insert = db.prepare(
    'INSERT INTO website_leads (id,payload_hash,created_at,name,email,goal,package,website,phone,message,campaign,retention_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
  );
  const rows = [
    [
      '00000000-0000-4000-8000-000000000001',
      '2026-01-01T00:00:00.000Z',
      'no_contract',
    ],
    [
      '00000000-0000-4000-8000-000000000002',
      '2026-01-01T00:00:00.000Z',
      'contract',
    ],
    [
      '00000000-0000-4000-8000-000000000003',
      '2026-01-01T00:00:00.000Z',
      'legal_hold',
    ],
    [
      '00000000-0000-4000-8000-000000000004',
      '2026-11-01T00:00:00.000Z',
      'no_contract',
    ],
    ['00000000-0000-4000-8000-000000000005', 'invalid date', 'no_contract'],
  ];
  for (const [id, date, status] of rows)
    insert.run(
      id,
      'hash',
      date,
      'Test',
      'example@example.test',
      'neu',
      'nine-start',
      '',
      '',
      '',
      '{}',
      status,
    );
  const now = new Date('2026-11-12T00:00:00.000Z');
  assert.equal(db.prepare(retentionSql('preview', { now })).all().length, 1);
  for (const id of [rows[1][0], rows[2][0]]) {
    db.exec(retentionSql('mark', { id, status: 'no_contract' }));
    assert.notEqual(
      db
        .prepare('SELECT retention_status FROM website_leads WHERE id=?')
        .get(id).retention_status,
      'no_contract',
    );
  }
  const result = db.prepare(retentionSql('purge', { now })).run();
  assert.equal(result.changes, 1);
  assert.equal(
    db.prepare('SELECT COUNT(*) AS n FROM website_leads').get().n,
    5,
  );
  assert.equal(
    db.prepare('SELECT * FROM website_leads WHERE id=?').get(rows[0][0]),
    undefined,
  );
  console.log(
    'PASS: calendar cutoff, migration defaults, explicit review, contract/legal hold protection, recent and invalid dates, complete row deletion.',
  );
} finally {
  db.close();
}
