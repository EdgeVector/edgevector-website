import { useState, useEffect } from 'react';

// Order matters: clicking [Theme] cycles through this list. The empty id is
// the default palette (no data-theme attribute). Persisted as 'ev-theme';
// index.html re-applies it before first paint.
const THEMES = [
  { id: '', label: 'Paper' },
  { id: 'gruvbox-paper', label: 'GB Paper' },
  { id: 'gruvbox-light-hard', label: 'GB Light+' },
  { id: 'gruvbox-light', label: 'GB Light' },
  { id: 'gruvbox', label: 'Gruvbox' },
  { id: 'solarized', label: 'Solarized' },
  { id: 'dracula', label: 'Dracula' },
  { id: 'nord', label: 'Nord' },
  { id: 'monokai', label: 'Monokai' },
];

function savedIndex() {
  try {
    const saved = localStorage.getItem('ev-theme') || '';
    const i = THEMES.findIndex((t) => t.id === saved);
    return i >= 0 ? i : 0;
  } catch {
    return 0;
  }
}

export default function ThemeSwitcher() {
  const [idx, setIdx] = useState(savedIndex);

  useEffect(() => {
    const t = THEMES[idx];
    if (t.id) document.documentElement.setAttribute('data-theme', t.id);
    else document.documentElement.removeAttribute('data-theme');
  }, [idx]);

  // Persist only on user action — a mount-time write can clobber the saved
  // theme (e.g. an HMR remount racing localStorage).
  function cycle() {
    const next = (idx + 1) % THEMES.length;
    setIdx(next);
    try {
      localStorage.setItem('ev-theme', THEMES[next].id);
    } catch {
      // private mode etc. — theme still applies for this page view
    }
  }

  return (
    <button className="link-btn theme-btn" onClick={cycle} title="Cycle color theme">
      [Theme: {THEMES[idx].label}]
    </button>
  );
}
