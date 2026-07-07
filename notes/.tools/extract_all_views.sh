#!/bin/bash
# Pre-extract variable lists for every view in two .mdl files.
# Output: <out_dir>/old/<safe_view_name>.txt and <out_dir>/new/<safe_view_name>.txt
# Usage: extract_all_views.sh <old_mdl> <new_mdl> [out_dir]
set -e
old="$1"
new="$2"
out="${3:-notes/.tools/views}"
script_dir="$(cd "$(dirname "$0")" && pwd)"
[ -f "$old" ] || { echo "Not found: $old" >&2; exit 1; }
[ -f "$new" ] || { echo "Not found: $new" >&2; exit 1; }
mkdir -p "$out/old" "$out/new"
{ "$script_dir/list_views.sh" "$old"; "$script_dir/list_views.sh" "$new"; } \
  | sort -u | while IFS= read -r view; do
    [ -z "$view" ] && continue
    safe=$(printf '%s' "$view" | tr -c 'A-Za-z0-9' '_')
    node "$script_dir/extract_view_vars.js" "$old" "$view" > "$out/old/$safe.txt" 2>/dev/null || true
    node "$script_dir/extract_view_vars.js" "$new" "$view" > "$out/new/$safe.txt" 2>/dev/null || true
done
# Print a quick summary of view counts and per-view delta size
echo "View                                          | old | new | delta"
echo "----------------------------------------------+-----+-----+------"
for f in "$out/new"/*.txt; do
    safe=$(basename "$f" .txt)
    new_count=$(wc -l < "$f" 2>/dev/null || echo 0)
    old_count=$(wc -l < "$out/old/$safe.txt" 2>/dev/null || echo 0)
    printf "%-46s| %3d | %3d | %+4d\n" "$safe" "$old_count" "$new_count" "$((new_count - old_count))"
done | sort -t'|' -k4 -nr
