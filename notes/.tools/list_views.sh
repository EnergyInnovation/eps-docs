#!/bin/bash
# Print all Vensim view names in an EPS .mdl file (one per line, no leading asterisk).
# Usage: list_views.sh <mdl_path>
grep -E "^\*[A-Za-z]" "$1" | sed 's/^\*//'
