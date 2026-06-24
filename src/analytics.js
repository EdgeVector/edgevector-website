// PostHog analytics for the EdgeVector corporate/marketing site.
//
// Mirrors the org's exemem web wiring (exemem-infra/web/landing/index.html) and
// the sibling LastDB site (fold_db_website/src/analytics.js): same project
// 310814, US Cloud, write-only project token. The token is a public/write-only
// key and is safe to embed in this public bundle. We prefer the build-time env
// vars (VITE_POSTHOG_KEY / VITE_POSTHOG_HOST) so Vercel can override, but
// default to the known values so it works with no extra config.
import posthog from 'posthog-js';

const POSTHOG_KEY =
  import.meta.env.VITE_POSTHOG_KEY || 'phc_gMzYLqfT6baay4Ve4q00PVRcCy4xUv3pCsQjreIt5aS';
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

let initialized = false;

// Respect the browser's Do-Not-Track signal. A full consent banner is out of
// scope (follow-up: EU/GDPR opt-in); default-on / opt-out matches the org
// telemetry posture, but DNT users are never tracked.
function doNotTrackEnabled() {
  if (typeof navigator === 'undefined' && typeof window === 'undefined') return false;
  const dnt =
    (typeof navigator !== 'undefined' && (navigator.doNotTrack || navigator.msDoNotTrack)) ||
    (typeof window !== 'undefined' && window.doNotTrack);
  return dnt === '1' || dnt === 'yes';
}

export function initAnalytics() {
  if (initialized) return;
  if (typeof window === 'undefined') return;
  if (doNotTrackEnabled()) return;
  if (!POSTHOG_KEY) return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    // We capture SPA route changes manually (see capturePageview) so PostHog's
    // own history listener isn't needed; autocapture stays on for clicks/forms.
    capture_pageview: false,
    respect_dnt: true,
  });
  initialized = true;
  installOutboundClickTracking();
}

// Manually record a $pageview. Called on initial load and on every client-side
// route change so SPA navigation is counted.
export function capturePageview() {
  if (!initialized) return;
  posthog.capture('$pageview');
}

// Generic capture passthrough (no-op until init / when DNT opted-out).
export function capture(event, props) {
  if (!initialized) return;
  posthog.capture(event, props);
}

// Conversion click on an outbound link / CTA (GitHub, folddb.com, exemem.com,
// the LastDB repo, contact, paper/whitepaper downloads). `target` is the
// destination, `page` the current path it was clicked from.
export function captureOutboundClick({ target, page }) {
  capture('outbound_click', { source: 'edgevector-site', target, page });
}

// Delegated capture for every outbound / download link on the site, so we don't
// have to hand-wire each <a> across the pages. Records an `outbound_click` for
// any anchor whose href leaves the site (different origin), is a mailto:, or is
// a PDF/asset download. Registered once at init from a single document listener.
function isOutbound(anchor) {
  const href = anchor.getAttribute('href') || '';
  if (!href || href.startsWith('#')) return false;
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return true;
  try {
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return true;
    // Same-origin asset downloads (PDFs, etc.) still count as conversions.
    if (/\.(pdf|zip|dmg|tar\.gz|tgz)$/i.test(url.pathname)) return true;
  } catch {
    return false;
  }
  return false;
}

function installOutboundClickTracking() {
  if (typeof document === 'undefined') return;
  document.addEventListener(
    'click',
    (e) => {
      const anchor = e.target?.closest?.('a[href]');
      if (!anchor || !isOutbound(anchor)) return;
      captureOutboundClick({
        target: anchor.getAttribute('href'),
        page: window.location.pathname,
      });
    },
    // Capture phase so we record the click even if a handler stops propagation.
    true
  );
}

export default posthog;
