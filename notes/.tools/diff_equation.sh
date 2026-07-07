#!/bin/bash
# Diff one variable's equation between two .mdl files.
# Usage: diff_equation.sh "<variable_name>" <old_mdl> <new_mdl>
set -e
var="$1"
old="$2"
new="$3"
[ -n "$var" ] || { echo 'usage: diff_equation.sh "<variable_name>" <old_mdl> <new_mdl>' >&2; exit 2; }
[ -f "$old" ] || { echo "Not found: $old" >&2; exit 1; }
[ -f "$new" ] || { echo "Not found: $new" >&2; exit 1; }
script_dir="$(cd "$(dirname "$0")" && pwd)"
diff -u \
  --label "$old" <(node "$script_dir/find_equation.js" "$var" "$old") \
  --label "$new" <(node "$script_dir/find_equation.js" "$var" "$new") \
  || true
