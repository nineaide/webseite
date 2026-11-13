import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';

// Run only against a local build without mail credentials.
const origin = process.argv[2] || 'http://localhost:3017';
assert.ok(['localhost', '127.0.0.1'].includes(new URL(origin).hostname));
const contact = {
  kind: 'contact', requestId: randomUUID(),
  firstName: 'Kontakt', lastName: 'Test',
  email: `contact-${randomUUID()}@example.test`,
  message: 'Lokale Prüfung der Kontaktsektion.',
  company: 'Testfirma', phone: '', callback: false, fax: '',
};
async function send(body, source = origin) {
  return fetch(origin + '/api/website-anfrage', {
    method: 'POST', headers: { Origin: source, 'Content-Type': 'application/json' },
    body: JSON.stringify(body), signal: AbortSignal.timeout(15000),
  });
}
for (const patch of [
  { firstName: '' }, { lastName: ' ' }, { message: ' ' }, { email: 'invalid' },
  { phone: 'abc' }, { callback: true }, { callback: 'true' },
  { fax: 'bot' }, { message: 'x'.repeat(2001) }, { company: 'line\nbreak' },
]) assert.equal((await send({ ...contact, ...patch })).status, 400, JSON.stringify(patch));
assert.equal((await send(contact, 'https://outside.example')).status, 403);
const first = await send(contact);
assert.equal(first.status, 201, await first.clone().text());
assert.deepEqual(await first.json(), { accepted: true, id: contact.requestId });
assert.equal((await send(contact)).status, 200, 'Identical retry is deduplicated');
assert.equal((await send({ ...contact, message: 'Changed' })).status, 409);
assert.equal((await send({ ...contact, company: 'Changed' })).status, 409);
assert.equal((await send({ ...contact, requestId: randomUUID(), callback: true, phone: '+49 170 1234567' })).status, 201);
assert.equal((await send({ ...contact, requestId: randomUUID(), phone: '+49 170 1234567' })).status, 201);
assert.equal((await send({ ...contact, requestId: randomUUID() })).status, 429);

// General contact must not relax the existing project inquiry validation.
const inquiry = { requestId: randomUUID(), goal: 'relaunch', package: 'nine-start',
  name: 'Projekt Test', email: `project-${randomUUID()}@example.test`, message: '', phone: '' };
assert.equal((await send(inquiry)).status, 400, 'Project phone remains required');
assert.equal((await send({ ...inquiry, phone: '+49 170 1234567', package: 'invalid' })).status, 400);
assert.equal((await send({ ...inquiry, phone: '+49 170 1234567' })).status, 201);
console.log('PASS: contact validation, callback, storage receipt, retries, rate limit and existing project inquiries');
console.log('Stored contact fixture:', contact.requestId);
