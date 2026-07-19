// Hand-authored architectural line drawing (Tom's draftsman diagram style —
// see the /diagram skill): thin uniform strokes, shape-per-type vocabulary,
// poché hatch for stored data, dashed outlines for remote, joints, a side
// dimension line, one accent (the database). Colors ride the theme variables
// via CSS classes in styles.css (.arch-fig ...), so every theme re-inks it.

const SVG = `
<svg viewBox="0 0 680 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture: your files and permissioned third-party writes flow through ingestion into LastDB, your database; your apps, delivery slices, and the optional Exemem cloud rail are clients of it; slices reach the people and apps you choose.">
  <defs>
    <pattern id="poche" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" class="faint"/>
    </pattern>
  </defs>

  <!-- ROW 1 · sources -->
  <polygon points="140,24 236,24 250,38 250,84 140,84" fill="url(#poche)" class="ink"/>
  <polyline points="236,24 236,38 250,38" fill="none" class="ink"/>
  <text x="195" y="58" text-anchor="middle" class="txt" font-size="10.5" letter-spacing="1">YOUR FILES</text>
  <text x="195" y="100" text-anchor="middle" class="dim" font-size="9">records on disk</text>

  <circle cx="485" cy="54" r="30" fill="none" class="ink" stroke-dasharray="3 3"/>
  <text x="485" y="51" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">3RD-PARTY</text>
  <text x="485" y="63" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="0.5">WRITES</text>
  <text x="485" y="100" text-anchor="middle" class="dim" font-size="9">with your permission</text>

  <polyline points="195,84 195,132 300,132 300,148" fill="none" class="ink"/>
  <polyline points="485,84 485,132 380,132 380,148" fill="none" class="ink"/>
  <polygon points="300,150 296,142 304,142" class="arrow"/>
  <polygon points="380,150 376,142 384,142" class="arrow"/>
  <rect x="298" y="146" width="4" height="4" class="joint"/>
  <rect x="378" y="146" width="4" height="4" class="joint"/>

  <!-- ROW 2 · ingestion (process) -->
  <rect x="260" y="150" width="160" height="42" fill="none" class="ink"/>
  <text x="340" y="169" text-anchor="middle" class="txt" font-size="12" letter-spacing="1.5">INGESTION</text>
  <text x="340" y="184" text-anchor="middle" class="dim" font-size="9">files &#8594; structured records</text>
  <line x1="340" y1="192" x2="340" y2="218" class="ink"/>
  <polygon points="340,222 336,214 344,214" class="arrow"/>
  <rect x="338" y="218" width="4" height="4" class="joint"/>

  <!-- ROW 3 · LastDB (accent cylinder, poché) -->
  <path d="M 270 232 A 70 10 0 0 1 410 232 L 410 312 A 70 10 0 0 1 270 312 Z" fill="url(#poche)" class="accentline"/>
  <ellipse cx="340" cy="232" rx="70" ry="10" class="accentline paper"/>
  <text x="340" y="268" text-anchor="middle" class="atxt" font-size="13" letter-spacing="2">LASTDB</text>
  <text x="340" y="284" text-anchor="middle" class="txt" font-size="9.5" letter-spacing="1">YOUR DATABASE</text>
  <text x="340" y="340" text-anchor="middle" class="dim" font-size="9">one process &#183; your machine</text>

  <!-- side dimension line: the local span -->
  <line x1="34" y1="150" x2="48" y2="150" class="ink"/>
  <line x1="34" y1="312" x2="48" y2="312" class="ink"/>
  <line x1="41" y1="150" x2="41" y2="312" class="ink"/>
  <text x="28" y="231" class="dim" font-size="9" letter-spacing="1.5" transform="rotate(-90 28 231)" text-anchor="middle">YOUR MACHINE</text>

  <!-- fan-out spine -->
  <polyline points="340,322 340,352" fill="none" class="ink"/>
  <line x1="130" y1="352" x2="550" y2="352" class="ink"/>
  <polyline points="130,352 130,376" fill="none" class="ink"/>
  <polyline points="340,352 340,376" fill="none" class="ink"/>
  <polyline points="550,352 550,368" fill="none" class="ink"/>
  <polygon points="130,380 126,372 134,372" class="arrow"/>
  <polygon points="340,380 336,372 344,372" class="arrow"/>
  <polygon points="550,372 546,364 554,364" class="arrow"/>
  <rect x="338" y="318" width="4" height="4" class="joint"/>

  <!-- ROW 4 · clients: apps (process), slices (envelope), exemem (dashed remote) -->
  <rect x="60" y="380" width="140" height="52" fill="none" class="ink"/>
  <text x="130" y="402" text-anchor="middle" class="txt" font-size="11" letter-spacing="1">YOUR APPS</text>
  <text x="130" y="418" text-anchor="middle" class="dim" font-size="9">brain &#183; kanban &#183; yours</text>

  <rect x="285" y="380" width="110" height="52" fill="url(#poche)" class="ink"/>
  <polyline points="285,380 340,410 395,380" fill="none" class="ink"/>
  <text x="340" y="425" text-anchor="middle" class="txt" font-size="10" letter-spacing="0.5">DELIVERY SLICES</text>
  <text x="340" y="448" text-anchor="middle" class="dim" font-size="9">your terms &#183; you keep the source</text>

  <rect x="470" y="372" width="170" height="68" fill="none" class="ink" stroke-dasharray="4 3"/>
  <text x="555" y="388" text-anchor="middle" class="txt" font-size="10" letter-spacing="0.5">EXEMEM CLOUD</text>
  <path d="M 520 402 A 35 6 0 0 1 590 402 L 590 428 A 35 6 0 0 1 520 428 Z" fill="url(#poche)" class="ink"/>
  <ellipse cx="555" cy="402" rx="35" ry="6" class="ink paper"/>
  <text x="555" y="456" text-anchor="middle" class="dim" font-size="9">optional &#183; backup &#183; sync &#183; rail</text>

  <!-- ROW 5 · recipients -->
  <line x1="340" y1="432" x2="340" y2="512" class="ink"/>
  <polygon points="340,516 336,508 344,508" class="arrow"/>
  <rect x="338" y="428" width="4" height="4" class="joint"/>
  <polyline points="555,440 555,541 390,541" fill="none" class="ink" stroke-dasharray="4 3"/>
  <polygon points="386,541 394,537 394,545" class="arrow"/>

  <circle cx="315" cy="532" r="8" fill="none" class="ink"/>
  <path d="M 301 554 A 14 11 0 0 1 329 554" fill="none" class="ink"/>
  <circle cx="365" cy="541" r="17" fill="none" class="ink"/>
  <text x="365" y="545" text-anchor="middle" class="txt" font-size="8.5">APP</text>
  <text x="340" y="582" text-anchor="middle" class="txt" font-size="10" letter-spacing="1">PEOPLE &#38; APPS YOU CHOOSE</text>

  <!-- legend -->
  <rect x="60" y="606" width="20" height="14" fill="none" class="ink"/>
  <text x="86" y="617" class="dim" font-size="8.5">PROCESS</text>
  <path d="M 150 609 A 10 3 0 0 1 170 609 L 170 620 A 10 3 0 0 1 150 620 Z" fill="none" class="ink"/>
  <text x="176" y="617" class="dim" font-size="8.5">DATABASE</text>
  <polygon points="250,605 268,605 274,611 274,622 250,622" fill="none" class="ink"/>
  <text x="280" y="617" class="dim" font-size="8.5">RECORDS</text>
  <rect x="350" y="606" width="22" height="14" fill="none" class="ink"/>
  <polyline points="350,606 361,614 372,606" fill="none" class="ink"/>
  <text x="378" y="617" class="dim" font-size="8.5">SLICE</text>
  <circle cx="448" cy="613" r="7" fill="none" class="ink"/>
  <text x="459" y="617" class="dim" font-size="8.5">PARTY</text>
  <rect x="520" y="606" width="20" height="14" fill="none" class="ink" stroke-dasharray="3 3"/>
  <text x="546" y="617" class="dim" font-size="8.5">REMOTE</text>
</svg>`;

export default function ArchDiagram() {
  return (
    <figure className="arch-fig">
      <div dangerouslySetInnerHTML={{ __html: SVG }} />
      <figcaption className="arch-fig-caption">Fig. 1 &mdash; one database, many thin clients; slices out on your terms</figcaption>
    </figure>
  );
}
