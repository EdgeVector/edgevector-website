// Hand-authored architectural line drawing (Tom's draftsman diagram style —
// see the /diagram skill). Current architecture (2026-07): one local daemon
// over a unix socket — document store + semantic index inside it — apps and
// agents as thin clients, ingestion feeding it, published schemas resolved
// locally, the optional Exemem rail, and delivery slices out. Colors ride the
// theme variables via CSS classes in styles.css (.arch-fig ...).

const SVG = `
<svg viewBox="0 0 680 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture: your files flow through ingestion into lastdbd, one process on your machine holding the document store and semantic index; apps and agents attach over the unix socket; published schemas resolve locally; the optional Exemem cloud provides backup, sync, and a delivery rail; delivery slices go out to the people and apps you choose.">
  <defs>
    <pattern id="poche" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" class="faint"/>
    </pattern>
  </defs>

  <!-- ROW 1 · files → ingestion; schemas from the registry -->
  <polygon points="60,28 156,28 170,42 170,84 60,84" fill="url(#poche)" class="ink"/>
  <polyline points="156,28 156,42 170,42" fill="none" class="ink"/>
  <text x="115" y="60" text-anchor="middle" class="txt" font-size="10" letter-spacing="0.5">YOUR FILES</text>

  <line x1="170" y1="56" x2="206" y2="56" class="ink"/>
  <polygon points="210,56 202,52 202,60" class="arrow"/>
  <rect x="168" y="54" width="4" height="4" class="joint"/>

  <rect x="210" y="32" width="150" height="46" fill="none" class="ink"/>
  <text x="285" y="52" text-anchor="middle" class="txt" font-size="11" letter-spacing="1.5">INGESTION</text>
  <text x="285" y="67" text-anchor="middle" class="dim" font-size="8.5">files &#8594; structured records</text>
  <line x1="285" y1="78" x2="285" y2="126" class="ink"/>
  <polygon points="285,130 281,122 289,122" class="arrow"/>

  <polygon points="520,28 606,28 620,42 620,84 520,84" fill="none" class="ink"/>
  <polyline points="606,28 606,42 620,42" fill="none" class="ink"/>
  <text x="570" y="53" text-anchor="middle" class="txt" font-size="10" letter-spacing="0.5">SCHEMAS</text>
  <text x="570" y="67" text-anchor="middle" class="dim" font-size="8.5">published vocabulary</text>
  <polyline points="570,84 570,108 420,108 420,126" fill="none" class="ink"/>
  <polygon points="420,130 416,122 424,122" class="arrow"/>
  <rect x="568" y="82" width="4" height="4" class="joint"/>

  <!-- CENTER · the daemon: one process, document store + semantic index -->
  <rect x="200" y="130" width="280" height="200" fill="none" class="ink"/>
  <text x="340" y="150" text-anchor="middle" class="txt" font-size="11" letter-spacing="1.5">LASTDBD &#183; ONE PROCESS</text>

  <path d="M 235 196 A 55 9 0 0 1 345 196 L 345 276 A 55 9 0 0 1 235 276 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="290" cy="196" rx="55" ry="9" class="accentline paper"/>
  <text x="290" y="234" text-anchor="middle" class="atxt" font-size="10.5" letter-spacing="1">DOCUMENT</text>
  <text x="290" y="248" text-anchor="middle" class="atxt" font-size="10.5" letter-spacing="1">STORE</text>
  <text x="290" y="302" text-anchor="middle" class="dim" font-size="8.5">records &#183; blobs &#183; encrypted at rest</text>

  <rect x="372" y="206" width="92" height="56" fill="none" class="ink"/>
  <text x="418" y="230" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">SEMANTIC</text>
  <text x="418" y="243" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">INDEX</text>
  <text x="418" y="280" text-anchor="middle" class="dim" font-size="8.5">search built in</text>
  <line x1="345" y1="232" x2="372" y2="232" class="faint"/>

  <!-- apps & agents attach over the unix socket -->
  <rect x="36" y="196" width="132" height="72" fill="none" class="ink"/>
  <text x="102" y="218" text-anchor="middle" class="txt" font-size="10.5" letter-spacing="0.5">APPS &#38; AGENTS</text>
  <text x="102" y="234" text-anchor="middle" class="dim" font-size="8.5">brain &#183; kanban &#183; yours</text>
  <text x="102" y="248" text-anchor="middle" class="dim" font-size="8.5">over the unix socket</text>
  <line x1="168" y1="232" x2="200" y2="232" class="ink"/>
  <rect x="166" y="230" width="4" height="4" class="joint"/>
  <rect x="196" y="228" width="8" height="8" class="joint"/>

  <!-- side dimension line: the local span -->
  <line x1="16" y1="130" x2="30" y2="130" class="ink"/>
  <line x1="16" y1="330" x2="30" y2="330" class="ink"/>
  <line x1="23" y1="130" x2="23" y2="330" class="ink"/>
  <text x="10" y="230" class="dim" font-size="9" letter-spacing="1.5" transform="rotate(-90 10 230)" text-anchor="middle">YOUR MACHINE</text>

  <!-- optional cloud rail -->
  <rect x="540" y="196" width="122" height="90" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="601" y="214" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">EXEMEM CLOUD</text>
  <path d="M 573 230 A 28 5 0 0 1 629 230 L 629 256 A 28 5 0 0 1 573 256 Z" fill="url(#poche)" class="ink"/>
  <ellipse cx="601" cy="230" rx="28" ry="5" class="ink paper"/>
  <text x="601" y="276" text-anchor="middle" class="dim" font-size="8.5">backup &#183; sync &#183; rail</text>
  <line x1="480" y1="240" x2="540" y2="240" class="ink" stroke-dasharray="4 3"/>
  <rect x="478" y="238" width="4" height="4" class="joint"/>
  <rect x="538" y="238" width="4" height="4" class="joint"/>
  <text x="510" y="232" text-anchor="middle" class="dim" font-size="8.5">optional</text>

  <!-- slices out -->
  <line x1="340" y1="330" x2="340" y2="368" class="ink"/>
  <polygon points="340,372 336,364 344,364" class="arrow"/>
  <rect x="338" y="328" width="4" height="4" class="joint"/>

  <rect x="285" y="372" width="110" height="50" fill="url(#poche)" class="ink"/>
  <polyline points="285,372 340,400 395,372" fill="none" class="ink"/>
  <text x="340" y="415" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">DELIVERY SLICES</text>
  <text x="340" y="438" text-anchor="middle" class="dim" font-size="8.5">your terms &#183; you keep the source</text>

  <line x1="340" y1="448" x2="340" y2="478" class="ink"/>
  <polygon points="340,482 336,474 344,474" class="arrow"/>

  <circle cx="315" cy="498" r="8" fill="none" class="ink"/>
  <path d="M 301 520 A 14 11 0 0 1 329 520" fill="none" class="ink"/>
  <circle cx="365" cy="507" r="17" fill="none" class="ink"/>
  <text x="365" y="511" text-anchor="middle" class="txt" font-size="8.5">APP</text>
  <text x="340" y="548" text-anchor="middle" class="txt" font-size="10" letter-spacing="1">PEOPLE &#38; APPS YOU CHOOSE</text>

  <!-- legend -->
  <rect x="60" y="572" width="20" height="14" fill="none" class="ink"/>
  <text x="86" y="583" class="dim" font-size="8.5">PROCESS</text>
  <path d="M 150 575 A 10 3 0 0 1 170 575 L 170 586 A 10 3 0 0 1 150 586 Z" fill="none" class="ink"/>
  <text x="176" y="583" class="dim" font-size="8.5">DATABASE</text>
  <polygon points="250,571 268,571 274,577 274,588 250,588" fill="none" class="ink"/>
  <text x="280" y="583" class="dim" font-size="8.5">RECORDS</text>
  <rect x="350" y="572" width="22" height="14" fill="none" class="ink"/>
  <polyline points="350,572 361,580 372,572" fill="none" class="ink"/>
  <text x="378" y="583" class="dim" font-size="8.5">SLICE</text>
  <circle cx="448" cy="579" r="7" fill="none" class="ink"/>
  <text x="459" y="583" class="dim" font-size="8.5">PARTY</text>
  <rect x="520" y="572" width="20" height="14" fill="none" class="ink" stroke-dasharray="3 3"/>
  <text x="546" y="583" class="dim" font-size="8.5">REMOTE</text>
</svg>`;

export default function ArchDiagram() {
  return (
    <figure className="arch-fig">
      <div dangerouslySetInnerHTML={{ __html: SVG }} />
      <figcaption className="arch-fig-caption">Fig. 1 &mdash; one process on your machine; apps on the socket; slices out on your terms</figcaption>
    </figure>
  );
}
