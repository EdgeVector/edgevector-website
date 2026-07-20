// Hand-authored architectural line drawing (Tom's draftsman diagram style —
// see the /diagram skill). v6 per Tom: inside YOUR MACHINE, an AI-agent
// robot glyph drives a row of separate mini app boxes (brain · kanban ·
// ingestion · yours), which all attach over the unix socket to a boxed
// LASTDB process containing the records/blobs cylinders and semantic index.
// The cloud column stays on the right. Colors ride the theme variables.

const SVG = `
<svg viewBox="0 0 680 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture: on the left, your machine — AI agents drive separate apps (brain, kanban, ingestion, yours), which attach over the unix socket to the LastDB process holding records, blobs, and the semantic index. On the right, the cloud column — the schema service publishing schemas that resolve locally, the optional Exemem cloud for backup and sync, and delivery slices going out to the people and apps you choose.">
  <defs>
    <pattern id="poche" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" class="faint"/>
    </pattern>
  </defs>

  <!-- LEFT · YOUR MACHINE -->
  <rect x="30" y="40" width="370" height="376" fill="none" class="ink"/>
  <text x="46" y="62" class="txt" font-size="10" letter-spacing="1.5">YOUR MACHINE</text>

  <!-- the agent: a little robot driving the apps -->
  <line x1="218" y1="78" x2="218" y2="72" class="ink"/>
  <circle cx="218" cy="69" r="2.5" fill="none" class="ink"/>
  <rect x="204" y="78" width="28" height="24" fill="none" class="ink"/>
  <rect x="211" y="86" width="4" height="4" class="joint"/>
  <rect x="221" y="86" width="4" height="4" class="joint"/>
  <text x="240" y="90" class="txt" font-size="9.5" letter-spacing="0.5">AI AGENTS</text>
  <text x="240" y="104" class="dim" font-size="8.5">driving your apps</text>

  <line x1="218" y1="102" x2="218" y2="122" class="ink"/>
  <line x1="95" y1="122" x2="341" y2="122" class="ink"/>
  <line x1="95" y1="122" x2="95" y2="136" class="ink"/>
  <line x1="177" y1="122" x2="177" y2="136" class="ink"/>
  <line x1="259" y1="122" x2="259" y2="136" class="ink"/>
  <line x1="341" y1="122" x2="341" y2="136" class="ink"/>
  <polygon points="95,140 91,132 99,132" class="arrow"/>
  <polygon points="177,140 173,132 181,132" class="arrow"/>
  <polygon points="259,140 255,132 263,132" class="arrow"/>
  <polygon points="341,140 337,132 345,132" class="arrow"/>
  <rect x="216" y="100" width="4" height="4" class="joint"/>

  <!-- separate mini apps -->
  <rect x="60" y="140" width="70" height="32" fill="none" class="ink"/>
  <text x="95" y="159" text-anchor="middle" class="txt" font-size="8.5" letter-spacing="0.5">BRAIN</text>
  <rect x="142" y="140" width="70" height="32" fill="none" class="ink"/>
  <text x="177" y="159" text-anchor="middle" class="txt" font-size="8.5" letter-spacing="0.5">KANBAN</text>
  <rect x="224" y="140" width="70" height="32" fill="none" class="ink"/>
  <text x="259" y="159" text-anchor="middle" class="txt" font-size="8.5" letter-spacing="0.5">INGESTION</text>
  <rect x="306" y="140" width="70" height="32" fill="none" class="ink"/>
  <text x="341" y="159" text-anchor="middle" class="txt" font-size="8.5" letter-spacing="0.5">YOURS</text>

  <!-- apps onto the socket bus, into the boxed LastDB process -->
  <line x1="95" y1="172" x2="95" y2="186" class="ink"/>
  <line x1="177" y1="172" x2="177" y2="186" class="ink"/>
  <line x1="259" y1="172" x2="259" y2="186" class="ink"/>
  <line x1="341" y1="172" x2="341" y2="186" class="ink"/>
  <line x1="95" y1="186" x2="341" y2="186" class="ink"/>
  <line x1="218" y1="186" x2="218" y2="200" class="ink"/>
  <rect x="214" y="196" width="8" height="8" class="joint"/>
  <text x="230" y="198" class="dim" font-size="8.5">unix socket</text>

  <rect x="60" y="204" width="316" height="196" fill="none" class="ink"/>
  <text x="218" y="224" text-anchor="middle" class="txt" font-size="10" letter-spacing="1">LASTDB &#183; ONE PROCESS</text>

  <path d="M 88 246 A 42 8 0 0 1 172 246 L 172 330 A 42 8 0 0 1 88 330 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="130" cy="246" rx="42" ry="8" class="accentline paper"/>
  <text x="130" y="292" text-anchor="middle" class="atxt" font-size="9.5" letter-spacing="0.5">RECORDS</text>

  <path d="M 197 258 A 28 6 0 0 1 253 258 L 253 322 A 28 6 0 0 1 197 322 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="225" cy="258" rx="28" ry="6" class="accentline paper"/>
  <text x="225" y="294" text-anchor="middle" class="atxt" font-size="9" letter-spacing="0.5">BLOBS</text>

  <rect x="268" y="258" width="80" height="60" fill="none" class="ink"/>
  <text x="308" y="282" text-anchor="middle" class="txt" font-size="9" letter-spacing="0.5">SEMANTIC</text>
  <text x="308" y="295" text-anchor="middle" class="txt" font-size="9" letter-spacing="0.5">INDEX</text>
  <line x1="253" y1="288" x2="268" y2="288" class="faint"/>

  <text x="218" y="368" text-anchor="middle" class="dim" font-size="8.5">document store &#183; encrypted at rest</text>

  <!-- RIGHT · the cloud column -->
  <text x="555" y="26" text-anchor="middle" class="dim" font-size="9" letter-spacing="2">THE CLOUD</text>

  <path d="M 496 118 A 20 20 0 0 1 480 84 A 24 24 0 0 1 514 56 A 28 28 0 0 1 568 48 A 24 24 0 0 1 616 62 A 18 18 0 0 1 630 96 A 16 16 0 0 1 612 118 Z" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="555" y="78" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">SCHEMA SERVICE</text>
  <polygon points="536,86 566,86 574,94 574,108 536,108" fill="none" class="ink"/>
  <polyline points="566,86 566,94 574,94" fill="none" class="ink"/>

  <line x1="480" y1="94" x2="404" y2="94" class="ink" stroke-dasharray="4 3"/>
  <polygon points="400,94 408,90 408,98" class="arrow"/>
  <rect x="478" y="92" width="4" height="4" class="joint"/>
  <text x="442" y="86" text-anchor="middle" class="dim" font-size="8.5">published schemas</text>
  <text x="442" y="108" text-anchor="middle" class="dim" font-size="8.5">resolve locally</text>

  <path d="M 496 258 A 20 20 0 0 1 480 224 A 24 24 0 0 1 514 196 A 28 28 0 0 1 568 188 A 24 24 0 0 1 616 202 A 18 18 0 0 1 630 236 A 16 16 0 0 1 612 258 Z" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="555" y="224" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">EXEMEM CLOUD</text>
  <text x="555" y="272" text-anchor="middle" class="dim" font-size="8.5">optional &#183; backup &#183; sync &#183; rail</text>

  <line x1="480" y1="234" x2="400" y2="234" class="ink" stroke-dasharray="4 3"/>
  <rect x="478" y="232" width="4" height="4" class="joint"/>
  <rect x="398" y="232" width="4" height="4" class="joint"/>
  <text x="440" y="226" text-anchor="middle" class="dim" font-size="8.5">optional</text>

  <rect x="500" y="320" width="110" height="50" fill="url(#poche)" class="ink"/>
  <polyline points="500,320 555,348 610,320" fill="none" class="ink"/>
  <text x="555" y="363" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">DELIVERY SLICES</text>
  <text x="555" y="386" text-anchor="middle" class="dim" font-size="8.5">your terms &#183; you keep the source</text>

  <line x1="400" y1="345" x2="496" y2="345" class="ink"/>
  <polygon points="500,345 492,341 492,349" class="arrow"/>
  <rect x="398" y="343" width="4" height="4" class="joint"/>
  <text x="448" y="337" text-anchor="middle" class="dim" font-size="8.5">slices out</text>

  <line x1="555" y1="370" x2="555" y2="404" class="ink"/>
  <polygon points="555,408 551,400 559,400" class="arrow"/>

  <circle cx="530" cy="424" r="8" fill="none" class="ink"/>
  <path d="M 516 446 A 14 11 0 0 1 544 446" fill="none" class="ink"/>
  <circle cx="580" cy="433" r="17" fill="none" class="ink"/>
  <text x="580" y="437" text-anchor="middle" class="txt" font-size="8.5">APP</text>
  <text x="555" y="474" text-anchor="middle" class="txt" font-size="10" letter-spacing="1">PEOPLE &#38; APPS YOU CHOOSE</text>

  <!-- legend -->
  <rect x="40" y="526" width="20" height="14" fill="none" class="ink"/>
  <text x="66" y="537" class="dim" font-size="8.5">PROCESS</text>
  <path d="M 128 529 A 10 3 0 0 1 148 529 L 148 540 A 10 3 0 0 1 128 540 Z" fill="none" class="ink"/>
  <text x="154" y="537" class="dim" font-size="8.5">STORE</text>
  <polygon points="212,525 230,525 236,531 236,542 212,542" fill="none" class="ink"/>
  <text x="242" y="537" class="dim" font-size="8.5">RECORDS</text>
  <rect x="308" y="526" width="22" height="14" fill="none" class="ink"/>
  <polyline points="308,526 319,534 330,526" fill="none" class="ink"/>
  <text x="336" y="537" class="dim" font-size="8.5">SLICE</text>
  <circle cx="402" cy="533" r="7" fill="none" class="ink"/>
  <text x="413" y="537" class="dim" font-size="8.5">PARTY</text>
  <path d="M 474 540 A 7 7 0 0 1 469 528 A 9 9 0 0 1 483 521 A 10 10 0 0 1 500 524 A 7 7 0 0 1 505 536 A 6 6 0 0 1 498 540 Z" fill="none" class="ink"/>
  <text x="512" y="537" class="dim" font-size="8.5">CLOUD SVC</text>
  <rect x="592" y="526" width="20" height="14" fill="none" class="ink" stroke-dasharray="3 3"/>
  <text x="618" y="537" class="dim" font-size="8.5">REMOTE</text>
</svg>`;

export default function ArchDiagram() {
  return (
    <figure className="arch-fig">
      <div dangerouslySetInnerHTML={{ __html: SVG }} />
      <figcaption className="arch-fig-caption">Fig. 1 &mdash; your machine on the left; the cloud, and what you choose to send it, on the right</figcaption>
    </figure>
  );
}
