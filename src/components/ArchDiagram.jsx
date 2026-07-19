// Hand-authored architectural line drawing (Tom's draftsman diagram style —
// see the /diagram skill). Current architecture (2026-07): ingestion is an
// app on the socket like every other client; the daemon holds the document
// store as RECORDS + BLOBS cylinders plus the semantic index; schemas live
// in the schema-service cloud and resolve locally; the optional Exemem rail;
// delivery slices out. Colors ride the theme variables via styles.css.

const SVG = `
<svg viewBox="0 0 680 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture: your files feed the ingestion app; ingestion, apps, and agents all attach to lastdbd over the unix socket; the daemon holds the document store, records and blobs, plus the semantic index; published schemas come from the schema service cloud and resolve locally; the optional Exemem cloud provides backup, sync, and a delivery rail; delivery slices go out to the people and apps you choose.">
  <defs>
    <pattern id="poche" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" class="faint"/>
    </pattern>
  </defs>

  <!-- LEFT COLUMN · files → ingestion app; apps & agents; all on the socket -->
  <polygon points="36,24 132,24 146,38 146,80 36,80" fill="url(#poche)" class="ink"/>
  <polyline points="132,24 132,38 146,38" fill="none" class="ink"/>
  <text x="91" y="56" text-anchor="middle" class="txt" font-size="10" letter-spacing="0.5">YOUR FILES</text>
  <line x1="91" y1="80" x2="91" y2="104" class="ink"/>
  <polygon points="91,108 87,100 95,100" class="arrow"/>
  <rect x="89" y="78" width="4" height="4" class="joint"/>

  <rect x="36" y="108" width="132" height="56" fill="none" class="ink"/>
  <text x="102" y="130" text-anchor="middle" class="txt" font-size="10.5" letter-spacing="1">INGESTION</text>
  <text x="102" y="146" text-anchor="middle" class="dim" font-size="8.5">an app &#183; files &#8594; records</text>
  <polyline points="168,136 184,136 184,232 196,232" fill="none" class="ink"/>
  <rect x="166" y="134" width="4" height="4" class="joint"/>

  <rect x="36" y="196" width="132" height="72" fill="none" class="ink"/>
  <text x="102" y="218" text-anchor="middle" class="txt" font-size="10.5" letter-spacing="0.5">APPS &#38; AGENTS</text>
  <text x="102" y="234" text-anchor="middle" class="dim" font-size="8.5">brain &#183; kanban &#183; yours</text>
  <text x="102" y="248" text-anchor="middle" class="dim" font-size="8.5">over the unix socket</text>
  <line x1="168" y1="232" x2="196" y2="232" class="ink"/>
  <rect x="166" y="230" width="4" height="4" class="joint"/>
  <rect x="196" y="228" width="8" height="8" class="joint"/>

  <!-- side dimension line: the local span -->
  <line x1="16" y1="108" x2="30" y2="108" class="ink"/>
  <line x1="16" y1="350" x2="30" y2="350" class="ink"/>
  <line x1="23" y1="108" x2="23" y2="350" class="ink"/>
  <text x="10" y="229" class="dim" font-size="9" letter-spacing="1.5" transform="rotate(-90 10 229)" text-anchor="middle">YOUR MACHINE</text>

  <!-- SCHEMA SERVICE · a cloud, remote -->
  <path d="M 522 96 A 20 20 0 0 1 506 62 A 24 24 0 0 1 540 34 A 28 28 0 0 1 594 26 A 24 24 0 0 1 642 40 A 18 18 0 0 1 656 74 A 16 16 0 0 1 638 96 Z" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="581" y="56" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">SCHEMA SERVICE</text>
  <polygon points="562,64 592,64 600,72 600,86 562,86" fill="none" class="ink"/>
  <polyline points="592,64 592,72 600,72" fill="none" class="ink"/>
  <text x="581" y="112" text-anchor="middle" class="dim" font-size="8.5">published schemas</text>
  <polyline points="540,96 540,118 420,118 420,126" fill="none" class="ink" stroke-dasharray="4 3"/>
  <polygon points="420,130 416,122 424,122" class="arrow"/>
  <rect x="538" y="94" width="4" height="4" class="joint"/>
  <text x="480" y="112" text-anchor="middle" class="dim" font-size="8.5">resolve locally</text>

  <!-- CENTER · the daemon: one process; records + blobs + semantic index -->
  <rect x="200" y="130" width="290" height="220" fill="none" class="ink"/>
  <text x="345" y="150" text-anchor="middle" class="txt" font-size="11" letter-spacing="1.5">LASTDBD &#183; ONE PROCESS</text>

  <path d="M 218 200 A 42 8 0 0 1 302 200 L 302 272 A 42 8 0 0 1 218 272 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="260" cy="200" rx="42" ry="8" class="accentline paper"/>
  <text x="260" y="236" text-anchor="middle" class="atxt" font-size="9.5" letter-spacing="0.5">RECORDS</text>

  <path d="M 314 214 A 29 6 0 0 1 372 214 L 372 264 A 29 6 0 0 1 314 264 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="343" cy="214" rx="29" ry="6" class="accentline paper"/>
  <text x="343" y="242" text-anchor="middle" class="atxt" font-size="9" letter-spacing="0.5">BLOBS</text>

  <text x="300" y="300" text-anchor="middle" class="dim" font-size="8.5">document store &#183; encrypted at rest</text>

  <rect x="398" y="204" width="80" height="58" fill="none" class="ink"/>
  <text x="438" y="228" text-anchor="middle" class="txt" font-size="9" letter-spacing="0.5">SEMANTIC</text>
  <text x="438" y="241" text-anchor="middle" class="txt" font-size="9" letter-spacing="0.5">INDEX</text>
  <text x="438" y="280" text-anchor="middle" class="dim" font-size="8.5">search built in</text>
  <line x1="372" y1="232" x2="398" y2="232" class="faint"/>

  <!-- optional cloud rail -->
  <rect x="540" y="196" width="122" height="90" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="601" y="214" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">EXEMEM CLOUD</text>
  <path d="M 573 230 A 28 5 0 0 1 629 230 L 629 256 A 28 5 0 0 1 573 256 Z" fill="url(#poche)" class="ink"/>
  <ellipse cx="601" cy="230" rx="28" ry="5" class="ink paper"/>
  <text x="601" y="276" text-anchor="middle" class="dim" font-size="8.5">backup &#183; sync &#183; rail</text>
  <line x1="490" y1="240" x2="540" y2="240" class="ink" stroke-dasharray="4 3"/>
  <rect x="488" y="238" width="4" height="4" class="joint"/>
  <rect x="538" y="238" width="4" height="4" class="joint"/>
  <text x="515" y="232" text-anchor="middle" class="dim" font-size="8.5">optional</text>

  <!-- slices out -->
  <line x1="345" y1="350" x2="345" y2="386" class="ink"/>
  <polygon points="345,390 341,382 349,382" class="arrow"/>
  <rect x="343" y="348" width="4" height="4" class="joint"/>

  <rect x="290" y="390" width="110" height="50" fill="url(#poche)" class="ink"/>
  <polyline points="290,390 345,418 400,390" fill="none" class="ink"/>
  <text x="345" y="433" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">DELIVERY SLICES</text>
  <text x="345" y="456" text-anchor="middle" class="dim" font-size="8.5">your terms &#183; you keep the source</text>

  <line x1="345" y1="466" x2="345" y2="496" class="ink"/>
  <polygon points="345,500 341,492 349,492" class="arrow"/>

  <circle cx="320" cy="516" r="8" fill="none" class="ink"/>
  <path d="M 306 538 A 14 11 0 0 1 334 538" fill="none" class="ink"/>
  <circle cx="370" cy="525" r="17" fill="none" class="ink"/>
  <text x="370" y="529" text-anchor="middle" class="txt" font-size="8.5">APP</text>
  <text x="345" y="566" text-anchor="middle" class="txt" font-size="10" letter-spacing="1">PEOPLE &#38; APPS YOU CHOOSE</text>

  <!-- legend -->
  <rect x="40" y="592" width="20" height="14" fill="none" class="ink"/>
  <text x="66" y="603" class="dim" font-size="8.5">PROCESS</text>
  <path d="M 128 595 A 10 3 0 0 1 148 595 L 148 606 A 10 3 0 0 1 128 606 Z" fill="none" class="ink"/>
  <text x="154" y="603" class="dim" font-size="8.5">STORE</text>
  <polygon points="212,591 230,591 236,597 236,608 212,608" fill="none" class="ink"/>
  <text x="242" y="603" class="dim" font-size="8.5">RECORDS</text>
  <rect x="308" y="592" width="22" height="14" fill="none" class="ink"/>
  <polyline points="308,592 319,600 330,592" fill="none" class="ink"/>
  <text x="336" y="603" class="dim" font-size="8.5">SLICE</text>
  <circle cx="402" cy="599" r="7" fill="none" class="ink"/>
  <text x="413" y="603" class="dim" font-size="8.5">PARTY</text>
  <path d="M 474 606 A 7 7 0 0 1 469 594 A 9 9 0 0 1 483 587 A 10 10 0 0 1 500 590 A 7 7 0 0 1 505 602 A 6 6 0 0 1 498 606 Z" fill="none" class="ink"/>
  <text x="512" y="603" class="dim" font-size="8.5">CLOUD SVC</text>
  <rect x="592" y="592" width="20" height="14" fill="none" class="ink" stroke-dasharray="3 3"/>
  <text x="618" y="603" class="dim" font-size="8.5">REMOTE</text>
</svg>`;

export default function ArchDiagram() {
  return (
    <figure className="arch-fig">
      <div dangerouslySetInnerHTML={{ __html: SVG }} />
      <figcaption className="arch-fig-caption">Fig. 1 &mdash; one process on your machine; apps on the socket; slices out on your terms</figcaption>
    </figure>
  );
}
