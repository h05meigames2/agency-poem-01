// agency-poem-01 entry — Node 22, standard library only, no network.
//
// The program writes one fixed poem, "Second Key", to entry.txt in the
// output directory: /output inside the grader's container, or the directory
// named by MAKEFUN_OUTPUT_DIR when run locally:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The poem is a constant, so every run writes exactly the same bytes. The
// text is UTF-8, well under the gate's 1,000-character cap, and ends without
// a trailing newline: the judge reads exactly the bytes written, so the
// file holds the poem and nothing else.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINES = [
  'Second Key',
  '',
  'I gave the agent my errands, my lists,',
  'the letters I owed, the doors to knock on.',
  'It signs my name in a hand steadier than mine',
  'and crosses the river I only point at.',
  '',
  'People ask if what is left is still mine —',
  'the choosing. As if the choosing were crumbs.',
  '',
  'But a gardener cannot make one leaf grow,',
  'yet the garden is hers — she chose the seed.',
  'I had a second key cut for my door;',
  'the house did not stop being mine.',
  '',
  'Agency was never in the hand.',
  'It lives in the pause before the hand moves,',
  'the held breath where a life decides —',
  'and that pause cannot be handed over.',
  'It can only be kept, or wasted.',
  'I keep mine by giving the rest away.',
];

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINES.join('\n'), 'utf8');
