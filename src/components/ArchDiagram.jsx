// Hand-authored architectural line drawing (Tom's draftsman diagram style —
// see the /diagram skill). v4, simplified for clarity per Tom: one enclosing
// YOUR MACHINE box (no dimension bracket, no daemon box-in-box), ingestion
// folded into the apps list, SCHEMA SERVICE cloud directly above with a
// straight vertical drop, Exemem drawn as a cloud too. Colors ride the theme
// variables via styles.css (.arch-fig ...).

const SVG = `
<svg viewBox="0 0 680 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture: on your machine, apps and agents — brain, kanban, ingestion, yours — attach to LastDB over the unix socket; LastDB is one process holding records, blobs, and the semantic index; published schemas come from the schema service cloud and resolve locally; the optional Exemem cloud provides backup and sync; delivery slices go out to the people and apps you choose.">
  <defs>
    <pattern id="poche" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" class="faint"/>
    </pattern>
  </defs>

  <!-- SCHEMA SERVICE · cloud, straight above the database -->
  <path d="M 361 90 A 20 20 0 0 1 345 56 A 24 24 0 0 1 379 28 A 28 28 0 0 1 433 20 A 24 24 0 0 1 481 34 A 18 18 0 0 1 495 68 A 16 16 0 0 1 477 90 Z" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="420" y="50" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">SCHEMA SERVICE</text>
  <polygon points="401,58 431,58 439,66 439,80 401,80" fill="none" class="ink"/>
  <polyline points="431,58 431,66 439,66" fill="none" class="ink"/>

  <line x1="420" y1="90" x2="420" y2="146" class="ink" stroke-dasharray="4 3"/>
  <polygon points="420,150 416,142 424,142" class="arrow"/>
  <rect x="418" y="88" width="4" height="4" class="joint"/>
  <text x="432" y="122" class="dim" font-size="8.5">published schemas &#183; resolve locally</text>

  <!-- YOUR MACHINE · the one enclosure -->
  <rect x="30" y="150" width="475" height="230" fill="none" class="ink"/>
  <text x="46" y="172" class="txt" font-size="10" letter-spacing="1.5">YOUR MACHINE</text>

  <rect x="55" y="225" width="145" height="90" fill="none" class="ink"/>
  <text x="127" y="250" text-anchor="middle" class="txt" font-size="10.5" letter-spacing="0.5">APPS &#38; AGENTS</text>
  <text x="127" y="270" text-anchor="middle" class="dim" font-size="8.5">brain &#183; kanban</text>
  <text x="127" y="284" text-anchor="middle" class="dim" font-size="8.5">ingestion &#183; yours</text>
  <text x="127" y="302" text-anchor="middle" class="dim" font-size="8.5">thin clients</text>

  <line x1="200" y1="268" x2="255" y2="268" class="ink"/>
  <rect x="198" y="266" width="4" height="4" class="joint"/>
  <rect x="251" y="264" width="8" height="8" class="joint"/>
  <text x="227" y="296" text-anchor="middle" class="dim" font-size="8.5">unix socket</text>

  <path d="M 255 212 A 45 8 0 0 1 345 212 L 345 302 A 45 8 0 0 1 255 302 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="300" cy="212" rx="45" ry="8" class="accentline paper"/>
  <text x="300" y="262" text-anchor="middle" class="atxt" font-size="9.5" letter-spacing="0.5">RECORDS</text>

  <path d="M 360 226 A 30 6 0 0 1 420 226 L 420 294 A 30 6 0 0 1 360 294 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="390" cy="226" rx="30" ry="6" class="accentline paper"/>
  <text x="390" y="266" text-anchor="middle" class="atxt" font-size="9" letter-spacing="0.5">BLOBS</text>

  <rect x="430" y="228" width="70" height="60" fill="none" class="ink"/>
  <text x="465" y="253" text-anchor="middle" class="txt" font-size="9" letter-spacing="0.5">SEMANTIC</text>
  <text x="465" y="266" text-anchor="middle" class="txt" font-size="9" letter-spacing="0.5">INDEX</text>
  <line x1="420" y1="258" x2="430" y2="258" class="faint"/>

  <text x="380" y="336" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="1">LASTDB &#183; ONE PROCESS</text>
  <text x="380" y="352" text-anchor="middle" class="dim" font-size="8.5">document store &#183; encrypted at rest</text>

  <!-- EXEMEM · cloud, remote, optional -->
  <path d="M 546 296 A 20 20 0 0 1 530 262 A 24 24 0 0 1 564 234 A 28 28 0 0 1 618 226 A 24 24 0 0 1 666 240 A 18 18 0 0 1 674 274 A 16 16 0 0 1 662 296 Z" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="602" y="256" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">EXEMEM</text>
  <text x="602" y="270" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">CLOUD</text>
  <text x="602" y="314" text-anchor="middle" class="dim" font-size="8.5">optional &#183; backup &#183; sync &#183; rail</text>
  <line x1="505" y1="264" x2="532" y2="264" class="ink" stroke-dasharray="4 3"/>
  <rect x="503" y="262" width="4" height="4" class="joint"/>
  <rect x="530" y="262" width="4" height="4" class="joint"/>

  <!-- slices out -->
  <line x1="380" y1="380" x2="380" y2="410" class="ink"/>
  <polygon points="380,414 376,406 384,406" class="arrow"/>
  <rect x="378" y="378" width="4" height="4" class="joint"/>

  <rect x="325" y="414" width="110" height="50" fill="url(#poche)" class="ink"/>
  <polyline points="325,414 380,442 435,414" fill="none" class="ink"/>
  <text x="380" y="457" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">DELIVERY SLICES</text>
  <text x="380" y="480" text-anchor="middle" class="dim" font-size="8.5">your terms &#183; you keep the source</text>

  <line x1="380" y1="490" x2="380" y2="516" class="ink"/>
  <polygon points="380,520 376,512 384,512" class="arrow"/>

  <circle cx="355" cy="536" r="8" fill="none" class="ink"/>
  <path d="M 341 558 A 14 11 0 0 1 369 558" fill="none" class="ink"/>
  <circle cx="405" cy="545" r="17" fill="none" class="ink"/>
  <text x="405" y="549" text-anchor="middle" class="txt" font-size="8.5">APP</text>
  <text x="380" y="586" text-anchor="middle" class="txt" font-size="10" letter-spacing="1">PEOPLE &#38; APPS YOU CHOOSE</text>

  <!-- legend -->
  <rect x="40" y="608" width="20" height="14" fill="none" class="ink"/>
  <text x="66" y="619" class="dim" font-size="8.5">PROCESS</text>
  <path d="M 128 611 A 10 3 0 0 1 148 611 L 148 622 A 10 3 0 0 1 128 622 Z" fill="none" class="ink"/>
  <text x="154" y="619" class="dim" font-size="8.5">STORE</text>
  <polygon points="212,607 230,607 236,613 236,624 212,624" fill="none" class="ink"/>
  <text x="242" y="619" class="dim" font-size="8.5">RECORDS</text>
  <rect x="308" y="608" width="22" height="14" fill="none" class="ink"/>
  <polyline points="308,608 319,616 330,608" fill="none" class="ink"/>
  <text x="336" y="619" class="dim" font-size="8.5">SLICE</text>
  <circle cx="402" cy="615" r="7" fill="none" class="ink"/>
  <text x="413" y="619" class="dim" font-size="8.5">PARTY</text>
  <path d="M 474 622 A 7 7 0 0 1 469 610 A 9 9 0 0 1 483 603 A 10 10 0 0 1 500 606 A 7 7 0 0 1 505 618 A 6 6 0 0 1 498 622 Z" fill="none" class="ink"/>
  <text x="512" y="619" class="dim" font-size="8.5">CLOUD SVC</text>
  <rect x="592" y="608" width="20" height="14" fill="none" class="ink" stroke-dasharray="3 3"/>
  <text x="618" y="619" class="dim" font-size="8.5">REMOTE</text>
</svg>`;

export default function ArchDiagram() {
  return (
    <figure className="arch-fig">
      <div dangerouslySetInnerHTML={{ __html: SVG }} />
      <figcaption className="arch-fig-caption">Fig. 1 &mdash; one process on your machine; apps on the socket; slices out on your terms</figcaption>
    </figure>
  );
}
