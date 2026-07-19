import { useEffect, useRef } from 'react';

// Animated ASCII migration: apps, then the database, then the models each
// LEAVE the cloud box (their line empties), travel across, and accumulate in
// the machine box. Ends with an empty cloud and a full machine, holds, then
// restarts. Every row is built from fixed-width cells so borders align.
// Honors prefers-reduced-motion (renders the final state, statically).

const CLOUD_W = 22;   // includes both border columns
const MACH_W = 24;    // includes both border columns
const LANE_W = 50;    // columns between the boxes
const TOKEN_PAD = 8;  // travel span reserve (longest token + margin)
const D = LANE_W - TOKEN_PAD;  // ticks (== columns) each item travels
const GAP = 8;        // idle ticks between one landing and the next departure
const HOLD_END = 30;  // ticks to hold the fully-migrated end state

const ITEMS = [
  { token: '[DB]',   cls: 'mig-db',   cloud: 'database', mach: 'lastdb' },
  { token: '[APPS]', cls: 'mig-apps', cloud: 'apps', mach: 'brain / kanban' },
  { token: '[LLM]',  cls: 'mig-llm',  cloud: 'models', mach: 'local llms' },
];
const DEPART = ITEMS.map((_, i) => i * (D + GAP));
const TOTAL = DEPART[ITEMS.length - 1] + D + HOLD_END;

// Fixed-width cell builders — the alignment contract lives here: every row is
// exactly CLOUD_W + LANE_W + MACH_W characters.
const cloudEdge = () => '+' + '-'.repeat(CLOUD_W - 2) + '+';
const machEdge = () => '+' + '-'.repeat(MACH_W - 2) + '+';
const cloudCell = (s) => '| ' + s.padEnd(CLOUD_W - 4).slice(0, CLOUD_W - 4) + ' |';
const machCell = (s) => '| ' + s.padEnd(MACH_W - 4).slice(0, MACH_W - 4) + ' |';
const center = (s, w) => s.padStart(Math.floor((w + s.length) / 2)).padEnd(w);
const lane = (s) => s.padEnd(LANE_W).slice(0, LANE_W);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function itemState(i, tc) {
  if (tc < DEPART[i]) return { at: 'cloud' };
  if (tc < DEPART[i] + D) return { at: 'lane', pos: tc - DEPART[i] };
  return { at: 'machine' };
}

function frameHtml(tick) {
  const tc = tick % TOTAL;
  const rows = [];
  rows.push(esc(cloudEdge() + lane('') + machEdge()));
  rows.push(esc('|' + center('CLOUD', CLOUD_W - 2) + '|' + lane('') + '|' + center('YOUR MACHINE', MACH_W - 2) + '|'));
  rows.push(esc(cloudCell('') + lane('') + machCell('')));
  for (const [i, item] of ITEMS.entries()) {
    const st = itemState(i, tc);
    if (st.at === 'lane') {
      // dotted trail back to the cloud edge, token at the head
      const trail = '·'.repeat(st.pos);
      const rest = lane(trail + item.token).slice(st.pos + item.token.length);
      rows.push(
        esc(cloudCell('')) + esc(trail) +
        '<span class="' + item.cls + '">' + esc(item.token) + '</span>' +
        esc(rest) + esc(machCell(''))
      );
    } else if (st.at === 'machine') {
      rows.push(
        esc(cloudCell('') + lane('')) +
        esc('| ') + '<span class="' + item.cls + '">' + esc(item.mach.padEnd(MACH_W - 4).slice(0, MACH_W - 4)) + '</span>' + esc(' |')
      );
    } else {
      rows.push(esc(cloudCell(item.cloud) + lane('') + machCell('')));
    }
    rows.push(esc(cloudCell('') + lane('') + machCell('')));
  }
  rows.push(esc(cloudEdge() + lane('') + machEdge()));
  return rows.join('\n');
}

export default function AsciiMigration() {
  const preRef = useRef(null);

  useEffect(() => {
    const el = preRef.current;
    if (!el) return;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.innerHTML = frameHtml(TOTAL - 1); // final state: everything migrated
      return;
    }
    let tick = 0;
    el.innerHTML = frameHtml(tick);
    const timer = setInterval(() => {
      tick += 1;
      el.innerHTML = frameHtml(tick);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  // Static fallback content for no-JS / crawlers.
  return (
    <pre className="ascii-diagram" ref={preRef} aria-label="Apps, the database, and models leaving the cloud and arriving on your machine">
      {'CLOUD  --[APPS]--[DB]--[LLM]-->  YOUR MACHINE'}
    </pre>
  );
}
