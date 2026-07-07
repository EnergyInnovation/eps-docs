#!/bin/bash
# Show added/removed variables for one view across the two pre-extracted lists.
# Run extract_all_views.sh first.
# Usage: diff_views.sh "<view_name>" [base_dir]
set -e
view="$1"
base="${2:-notes/.tools/views}"
[ -n "$view" ] || { echo 'usage: diff_views.sh "<view_name>" [base_dir]' >&2; exit 2; }
safe=$(printf '%s' "$view" | tr -c 'A-Za-z0-9' '_')
old="$base/old/$safe.txt"
new="$base/new/$safe.txt"
[ -f "$old" ] || { echo "Missing $old. Run extract_all_views.sh first." >&2; exit 1; }
[ -f "$new" ] || { echo "Missing $new. Run extract_all_views.sh first." >&2; exit 1; }
old_count=$(wc -l < "$old")
new_count=$(wc -l < "$new")
echo "=== $view ==="
echo "  old=$old_count  new=$new_count  delta=$((new_count - old_count))"
echo "--- ADDED in new ---"
comm -13 <(sort "$old") <(sort "$new")
echo "--- REMOVED in new ---"
comm -23 <(sort "$old") <(sort "$new")
