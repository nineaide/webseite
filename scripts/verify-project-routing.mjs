import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const code = ts.transpileModule(
  readFileSync('lib/project-routing.ts', 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.ES2022 } },
).outputText;
const { recommendProject } = await import(
  'data:text/javascript;base64,' + Buffer.from(code).toString('base64')
);
const cases = [
  ['Website', '6.000–15.000 €', [], 'Nine Launch'],
  ['Website', '15.000–30.000 €', [], 'Nine Growth'],
  ['Website', '15.000–30.000 €', ['Buchungen'], 'Platform Discovery'],
  ['Plattform', '30.000–60.000 €', [], 'Platform Discovery'],
  ['KI & Automation', 'Noch offen', [], 'Automation Sprint'],
  ['Growth', 'Noch offen', [], 'Nine Scale'],
  ['Noch unklar', 'Noch offen', [], 'Orientierungsgespräch'],
  [
    'Plattform',
    'Unter 6.000 €',
    ['Login & Rollen'],
    'Scope verkleinern und den wichtigsten ersten Schritt klären',
  ],
];
for (const [service, budget, features, expected] of cases)
  assert.equal(recommendProject(service, budget, features), expected);
console.log(
  'PASS: all 8 project recommendations, including low-budget and complex-scope routing.',
);
