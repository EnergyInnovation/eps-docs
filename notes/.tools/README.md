# `notes/.tools/` — EPS docs version-bump helpers

Helpers for the phased workflow described in the `eps-version-bump` skill (`.claude/skills/eps-version-bump/SKILL.md`).

All scripts are **parametric on `.mdl` paths** so the same tooling carries forward to future version bumps (4.0.5 → 4.1, 4.1 → 4.2, …) without modification. Run from the docs repo root.

## At-a-glance

```bash
# Phase 2 cold start — pre-extract variable lists for every view in both files.
notes/.tools/extract_all_views.sh EPS-4.0.4.mdl EPS.mdl
# Prints a sorted view-by-view delta summary at the end.

# Per-sector Phase 2 — added/removed variables on one view.
notes/.tools/diff_views.sh "Transportation - Main"

# Equation-level diff for one variable.
notes/.tools/diff_equation.sh "Vehicles" EPS-4.0.4.mdl EPS.mdl

# Read About-tab prose from an input data .xlsx.
notes/.tools/read_xlsx_about.sh "/c/Users/.../InputData/trans/ANVCV/Additional New Vehicles Calibration Variable.xlsx"

# Lay out a screenshot before writing the prose: get the bounding box of the
# variables a doc paragraph cites, plus any neighbors that fall inside it.
node notes/.tools/cluster_vars.js bbox EPS.mdl "Transportation - Main" \
  "BPM Battery Pack Markup" "BPPM Battery Pack Price Multiplier" \
  "This Year Battery Manufacturing Price After Subsidies"
```

## Reference

| Script | Purpose | Inputs |
| --- | --- | --- |
| `extract_view_vars.js` | Print variable names on one Vensim view's sketch section | `<mdl>` `<view_name>` |
| `list_views.sh` | Print every view name in an `.mdl` file | `<mdl>` |
| `extract_all_views.sh` | Pre-extract per-view variable lists for both files into `views/old/` and `views/new/` | `<old_mdl>` `<new_mdl>` `[out_dir]` |
| `diff_views.sh` | Show added/removed variables for one view across the pre-extracted lists | `"<view_name>"` `[base_dir]` |
| `find_equation.js` | Print the equation block(s) for one variable from one file | `"<var>"` `<mdl>` |
| `diff_equation.sh` | Diff one variable's equation between the two files | `"<var>"` `<old_mdl>` `<new_mdl>` |
| `read_xlsx_about.sh` | Print human-readable text from an EPS input `.xlsx` | `<xlsx_path>` |
| `cluster_vars.js` | Inspect Vensim sketch coordinates: bounding box of N variables, region listing, or nearest-neighbor lookup. Use this to lay out screenshot bounding boxes before drafting Phase 3 prose | `bbox <mdl> "<view>" "<var1>" ...` / `region <mdl> "<view>" <x1> <y1> <x2> <y2>` / `near <mdl> "<view>" "<var>" [k]` |

## Output / cache directories

These are working-memory caches, gitignored via the docs `.gitignore`:

- `notes/.tools/views/` — per-view variable lists from `extract_all_views.sh`.
- `notes/.tools/xlsx_extract/` — unzipped `.xlsx` dirs from past `read_xlsx_about.sh` exploration. Safe to delete.

## Future-bump checklist

When the next version bump arrives:

1. Update `CLAUDE.md` with the new versions, paths, and branch name.
2. Drop the new `.mdl` file alongside the old one (both gitignored).
3. Re-run `extract_all_views.sh <old> <new>` to refresh the per-view caches.
4. Use the same scripts unchanged. If a script needs editing, that's a signal the workflow has evolved and the skill should be amended too.
