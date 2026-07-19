import { useRef, useEffect } from 'react';

// Ported from fold_db_website's AsciiTitle: rasterize text to a canvas, sample
// pixels, emit ASCII art into a <pre>. Here the glyph source is Anton (the
// hero font), the title stacks multiple lines left-aligned, and each line gets
// a 3D extrusion: the white '#' face sits on a diagonal depth layer rendered
// as accent-colored spans (.ascii-depth).

function fontString(fontSize) {
  return '400 ' + fontSize + "px 'Anton', monospace";
}

function depthFor(fontSize) {
  return Math.max(3, Math.round(fontSize * 0.14));
}

// Two raster passes over identical canvas dims: one with only the extruded
// stack, one with only the face, so the sampler can tell them apart.
function rasterize(text, fontSize, pass) {
  const depth = depthFor(fontSize);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = fontString(fontSize);
  const metrics = ctx.measureText(text);

  canvas.width = Math.ceil(metrics.width) + 8 + depth;
  canvas.height = Math.ceil(fontSize * 1.3) + depth;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontString(fontSize);
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'top';
  const y0 = Math.floor(fontSize * 0.1);
  if (pass === 'depth') {
    for (let d = depth; d >= 1; d--) ctx.fillText(text, 4 + d, y0 + d);
  } else {
    ctx.fillText(text, 4, y0);
  }
  return {
    data: ctx.getImageData(0, 0, canvas.width, canvas.height).data,
    width: canvas.width,
    height: canvas.height,
  };
}

// Returns { rows, classes }: rows is an array of char strings, classes a
// parallel array marking 'd' where the char belongs to the depth layer.
function generateAsciiGrid(text, fontSize) {
  const face = rasterize(text, fontSize, 'face');
  const ext = rasterize(text, fontSize, 'depth');
  const width = face.width;
  const height = face.height;

  const rows = [];
  const classes = [];
  for (let y = 0; y < height; y += 2) {
    let line = '';
    let cls = '';
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const f = face.data[i];
      const e = ext.data[i];
      // Binary thresholds: mid-tone chars from two interleaved color layers
      // read as speckle, so each cell is solid face, solid depth, or empty.
      if (f > 140) { line += '#'; cls += ' '; }
      else if (e > 140) { line += '#'; cls += 'd'; }
      else { line += ' '; cls += ' '; }
    }
    rows.push(line);
    classes.push(cls);
  }

  const blank = (s) => s.trim() === '';
  while (rows.length > 0 && blank(rows[rows.length - 1])) { rows.pop(); classes.pop(); }
  while (rows.length > 0 && blank(rows[0])) { rows.shift(); classes.shift(); }

  let maxRight = 0;
  let minLeft = Infinity;
  for (let k = 0; k < rows.length; k++) {
    const trimmed = rows[k].replace(/\s+$/, '');
    if (trimmed.length > maxRight) maxRight = trimmed.length;
    const match = rows[k].match(/\S/);
    if (match && match.index < minLeft) minLeft = match.index;
  }
  if (minLeft === Infinity) minLeft = 0;
  for (let k = 0; k < rows.length; k++) {
    rows[k] = rows[k].substring(minLeft, maxRight);
    classes[k] = classes[k].substring(minLeft, maxRight);
  }

  return { rows, classes };
}

// Chars are only '#', ':', ' ' — nothing needs HTML-escaping. Depth runs get
// wrapped in <span class="ascii-depth">.
function gridToHtml(grid) {
  const out = [];
  for (let k = 0; k < grid.rows.length; k++) {
    const line = grid.rows[k];
    const cls = grid.classes[k];
    let html = '';
    let x = 0;
    while (x < line.length) {
      const inDepth = cls[x] === 'd';
      let end = x;
      while (end < line.length && (cls[end] === 'd') === inDepth) end++;
      const run = line.substring(x, end);
      html += inDepth ? '<span class="ascii-depth">' + run + '</span>' : run;
      x = end;
    }
    out.push(html);
  }
  return out.join('\n');
}

function getResponsiveFontSize(el, widestLine) {
  // el.clientWidth is the pre's own content width (parent clientWidth would
  // include the page's horizontal padding and overshoot the usable columns).
  const containerWidth = el.clientWidth || (el.parentElement ? el.parentElement.clientWidth : window.innerWidth);
  const style = window.getComputedStyle(el);

  const span = document.createElement('span');
  span.style.font = style.font;
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'pre';
  span.textContent = 'M';
  document.body.appendChild(span);
  const charWidth = span.getBoundingClientRect().width;
  document.body.removeChild(span);

  const availableCols = Math.floor(containerWidth / charWidth);

  const refSize = 48;
  const refGrid = generateAsciiGrid(widestLine, refSize);
  let refMaxCols = 0;
  for (let i = 0; i < refGrid.rows.length; i++) {
    if (refGrid.rows[i].length > refMaxCols) refMaxCols = refGrid.rows[i].length;
  }

  if (refMaxCols === 0) return refSize;
  const scaledSize = Math.floor(refSize * (availableCols / refMaxCols));
  return Math.max(10, Math.min(120, scaledSize));
}

export default function AsciiTitle({ lines = ['EDGE', 'VECTOR'] }) {
  const preRef = useRef(null);

  useEffect(() => {
    const el = preRef.current;
    if (!el) return;
    let cancelled = false;

    function render() {
      // Size off the widest line so every line fits the container width.
      let widest = lines[0];
      const probe = document.createElement('canvas').getContext('2d');
      probe.font = fontString(48);
      for (const l of lines) {
        if (probe.measureText(l).width > probe.measureText(widest).width) widest = l;
      }
      const fontSize = getResponsiveFontSize(el, widest);
      el.innerHTML = lines
        .map((l) => gridToHtml(generateAsciiGrid(l, fontSize)))
        .join('\n');
    }

    render();
    // Re-render once webfonts land, so the art uses Anton's real metrics.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) render();
      });
    }

    let resizeTimer;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(render, 150);
    }

    window.addEventListener('resize', onResize);
    return () => {
      cancelled = true;
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, [lines]);

  // SSR / agent-readable fallback: canvas art only runs in the browser.
  return (
    <pre className="ascii-title" ref={preRef} aria-label={lines.join(' ')}>
      {lines.join('\n')}
    </pre>
  );
}
