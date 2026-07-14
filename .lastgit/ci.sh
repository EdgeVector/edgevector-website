#!/usr/bin/env bash
# LastGit merge gate for edgevector-website.
set -euo pipefail
cd "$(dirname "$0")/.."
export npm_config_cache="${npm_config_cache:-${TMPDIR:-/tmp}/edgevector-website-npm-cache}"

echo "== install =="
npm ci

echo "== build =="
npm run build

echo "lastgit ci gate PASSED"
