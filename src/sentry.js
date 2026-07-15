import * as Sentry from '@sentry/browser';

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
const SENTRY_ENVIRONMENT =
  import.meta.env.VITE_SENTRY_ENVIRONMENT || import.meta.env.MODE || 'production';
const SENTRY_RELEASE = import.meta.env.VITE_SENTRY_RELEASE;

let initialized = false;

export function initSentry() {
  if (initialized) return;
  if (typeof window === 'undefined') return;
  if (!SENTRY_DSN) return;

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: SENTRY_ENVIRONMENT,
    release: SENTRY_RELEASE,
    sendDefaultPii: false,
    initialScope: {
      tags: {
        app: 'edgevector-website',
        service: 'edgevector-website',
      },
    },
  });

  initialized = true;
}
