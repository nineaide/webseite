import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Six calendar months, clamped at the end of the target month, in UTC.
export function sixMonthCutoff(now = new Date()) {
  if (!Number.isFinite(now.getTime())) throw new Error('Invalid date');
  const cutoff = new Date(now);
  const day = cutoff.getUTCDate();
  cutoff.setUTCDate(1);
  cutoff.setUTCMonth(cutoff.getUTCMonth() - 6);
  const lastDay = new Date(
    Date.UTC(cutoff.getUTCFullYear(), cutoff.getUTCMonth() + 1, 0),
  ).getUTCDate();
  cutoff.setUTCDate(Math.min(day, lastDay));
  return cutoff.toISOString();
}

export function retentionSql(action, { id, status, now = new Date() } = {}) {
  const cutoff = sixMonthCutoff(now);
  const eligible = `retention_status = 'no_contract' AND julianday(created_at) <= julianday('${cutoff}')`;
  if (action === 'list')
    return `SELECT id, created_at, retention_status FROM website_leads WHERE julianday(created_at) <= julianday('${cutoff}') ORDER BY created_at`;
  if (action === 'preview')
    return `SELECT id, created_at, retention_status FROM website_leads WHERE ${eligible} ORDER BY created_at`;
  if (action === 'purge') return `DELETE FROM website_leads WHERE ${eligible}`;
  if (action === 'mark') {
    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        id || '',
      )
    )
      throw new Error('Eine gültige Anfrage-ID ist erforderlich.');
    if (!['no_contract', 'contract', 'legal_hold'].includes(status))
      throw new Error('Zulässige Status: no_contract, contract, legal_hold.');
    // The tool cannot remove a contract or legal hold classification.
    const guard =
      status === 'no_contract'
        ? " AND retention_status IN ('unreviewed', 'no_contract')"
        : '';
    return `UPDATE website_leads SET retention_status = '${status}' WHERE id = '${id}'${guard}`;
  }
  throw new Error('Aktionen: list, preview, mark, purge.');
}

function main(args) {
  const [action = 'preview', ...options] = args;
  const flags = new Map();
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    if (['--local', '--remote', '--execute'].includes(option))
      flags.set(option, true);
    else if (
      ['--id', '--status', '--persist-to'].includes(option) &&
      options[i + 1] &&
      !options[i + 1].startsWith('--')
    )
      flags.set(option, options[++i]);
    else throw new Error('Unbekannte oder unvollständige Option: ' + option);
  }
  if (flags.has('--local') && flags.has('--remote'))
    throw new Error('Nur --local oder --remote verwenden.');
  const remote = flags.has('--remote');
  if (remote && flags.has('--persist-to'))
    throw new Error('--persist-to ist nur für lokale Datenbanken zulässig.');
  const sql = retentionSql(action, {
    id: flags.get('--id'),
    status: flags.get('--status'),
  });
  const mutating = ['mark', 'purge'].includes(action);
  if (mutating && !flags.has('--execute')) {
    console.log(
      'Vorschau; keine Änderung. Ziel: ' + (remote ? 'REMOTE' : 'LOKAL'),
    );
    console.log(sql);
    console.log(
      'Erst nach manueller Prüfung mit --execute ausführen. Datenbankmigration 0001 ist erforderlich.',
    );
    return;
  }
  const command = [
    'node_modules/wrangler/bin/wrangler.js',
    'd1',
    'execute',
    'DB',
    '--config',
    'wrangler.cloudflare.json',
    remote ? '--remote' : '--local',
    '--command',
    sql,
    '--json',
  ];
  if (flags.has('--persist-to'))
    command.push('--persist-to', flags.get('--persist-to'));
  const result = spawnSync(process.execPath, command, { stdio: 'inherit' });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
