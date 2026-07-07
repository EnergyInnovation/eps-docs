#!/bin/bash
# Print human-readable text from an EPS input data .xlsx (About / Notes / Sources content).
# Filters out URLs and EIA AEO API key noise so the meaningful prose floats to the top.
# Usage: read_xlsx_about.sh <xlsx_path>
set -e
xlsx="$1"
[ -n "$xlsx" ] || { echo "usage: read_xlsx_about.sh <xlsx_path>" >&2; exit 2; }
[ -f "$xlsx" ] || { echo "Not found: $xlsx" >&2; exit 1; }
tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT
unzip -p "$xlsx" xl/sharedStrings.xml > "$tmp" 2>/dev/null || { echo "No sharedStrings.xml inside $xlsx" >&2; exit 1; }
# Extract content of every <t>...</t> tag, one per line, then filter source-citation noise.
sed -e 's|<si>|\n|g' -e 's|</t>|</t>\n|g' "$tmp" \
  | sed -n 's|.*<t[^>]*>\(.*\)</t>.*|\1|p' \
  | awk 'length($0) > 25 \
       && !/^https?:\/\// \
       && !/^AEO\./ \
       && !/^Light-Duty Vehicle Sales:/ \
       && !/^Source: U\.S\. Energy/ \
       && !/GMT[+-]/'
