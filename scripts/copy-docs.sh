#!/bin/bash
# Copy .md docs from workspace into public/ so the website can fetch them at runtime.
# Source of truth is always the .md files in docs/ — this just makes them serveable.
#
# On Vercel (or any CI where the workspace can't be found), the committed
# public/docs/ is used as-is — we skip the copy so we don't delete it.

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SITE_DIR="$(dirname "$SCRIPT_DIR")"
SITE_PARENT="$(dirname "$SITE_DIR")"

# Resolve the workspace directory (the one containing docs/). Try, in order:
#   1. $WORKSPACE_DIR override (env var) — must contain a docs/ subdirectory.
#   2. Sibling exemem-workspace/ — current layout
#      (edgevector/exemem-workspace/docs/, edgevector/edgevector-website/).
#   3. Parent directory itself — older flat layout where docs/ was a direct
#      sibling of edgevector-website/.
WORKSPACE=""
for candidate in "${WORKSPACE_DIR:-}" "$SITE_PARENT/exemem-workspace" "$SITE_PARENT"; do
  if [ -n "$candidate" ] && [ -d "$candidate/docs" ]; then
    WORKSPACE="$candidate"
    break
  fi
done

DEST="$SITE_DIR/public/docs"

if [ -z "$WORKSPACE" ]; then
  echo "Workspace docs/ not found — using committed public/docs/ as-is."
  echo "  Looked in: \$WORKSPACE_DIR, $SITE_PARENT/exemem-workspace, $SITE_PARENT"
  exit 0
fi

echo "Using workspace: $WORKSPACE"

rm -rf "$DEST"
mkdir -p "$DEST/product" "$DEST/design" "$DEST/corporate" "$DEST/progress"

# Product docs
cp "$WORKSPACE/docs/product/WHITEPAPER.md" "$DEST/product/"
cp "$WORKSPACE/docs/product/PRD.md" "$DEST/product/"

# Design docs
cp "$WORKSPACE/docs/design/SYSTEMS_OVERVIEW.md" "$DEST/design/"

# Corporate
cp "$WORKSPACE/docs/corporate/nonprofit_edge_vector_foundation.md" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/filing_checklist.md" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/articles_of_incorporation.md" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/bylaws.md" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/conflict_of_interest_policy.md" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/patent_vectorized_discovery.md" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/patent_vectorized_discovery.pdf" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/patent_schema_canonical_service.md" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/patent_schema_canonical_service.pdf" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/patent_verified_function_execution.pdf" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/patent_fold_access_architecture.pdf" "$DEST/corporate/"
cp "$WORKSPACE/docs/corporate/patent_agent_code_promotion.pdf" "$DEST/corporate/"

# Progress
cp "$WORKSPACE/docs/progress/roadmap.md" "$DEST/progress/"


echo "Copied docs to $DEST"
