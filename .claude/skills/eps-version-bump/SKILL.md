---
name: eps-version-bump
description: Phased workflow for updating EPS Energy Policy Simulator documentation when bumping from one model version to the next (e.g., 4.0.4 to 4.0.5, or 4.0.5 to 4.1). Use whenever the user asks to update EPS docs for a new model version, work on a develop_<version> branch, or run any of the three doc-update phases (mapping, diffing, drafting). Invoke this skill when the conversation involves editing files under EPS/docs that reference Vensim variables, views, or the .mdl files.
---

# EPS Documentation Version-Bump Workflow

This skill captures the **reusable** workflow for keeping the EPS docs in sync with new versions of the Vensim model. It is paired with a per-pass `CLAUDE.md` in the docs repo that holds the version-specific configuration (current source/target versions, paths, working branch, staff contacts).

Read both this skill and `CLAUDE.md` at the start of any session that touches the EPS docs.

## When to use

- The user asks to update docs for a new EPS release.
- The user asks about Phase 1 / Phase 2 / Phase 3 of a doc-update pass.
- A new `develop_<version>` branch needs the documentation brought current.
- The user wants a sector reviewed for changes between two `.mdl` files.

## Three phases — do not skip ahead

Each phase produces a deliverable in `notes/`. Those files are the project's working memory across sessions; future Claude sessions read them to pick up where the last left off.

### Phase 1 — Doc-to-code mapping

For each in-scope sector:

1. Walk the markdown sector files (`docs/<sector>-sector-main.md`, `docs/<sector>-sector-cash.md`, plus the relevant Policy Design Guide pages from `sidebars.js`).
2. Identify which Vensim views correspond to which doc sections. Image filename stems (e.g., `transportation-sector-main-CargoDistTDM`) are usually a reliable anchor.
3. Spot-verify variables named in the prose against the new .mdl file with `grep`.
4. Surface ambiguities honestly — orphan files, sidebar gaps, prose that doesn't tie cleanly to model structure.

**Output:** `notes/doc_to_code_map.md`. Append new sectors to this file rather than starting separate files.

**Stop and surface for staff review.** Do not move to Phase 2 without explicit confirmation.

### Phase 2 — Model diff

1. **Once per pass:** run `notes/.tools/extract_all_views.sh <old_mdl> <new_mdl>` to pre-extract variable lists from every view's sketch section in both files. This populates `notes/.tools/views/old/` and `notes/.tools/views/new/`.
2. **Subscript-range diff first.** Compare `Vehicle Type:`, `Cargo Type:`, etc. between the two files. Subscript additions/removals are structural and can ripple across many doc pages — flag them prominently.
3. **Per sector:** call `notes/.tools/diff_views.sh "<View Name>"` for each in-scope view. Read added/removed variable lists.
4. For each new variable, get its equation with `find_equation.js`. Read the input data `.xlsx` About tab with `read_xlsx_about.sh` for sourcing context.
5. For shared variables that the docs walk through, run `diff_equation.sh "<Variable>" <old_mdl> <new_mdl>` to confirm whether the equation actually changed (often it hasn't; that's a useful negative result).
6. Group changes into themes by sector subsystem.

**Output:** `notes/<old>_to_<new>_changes.md` (e.g., `4.0.4_to_4.0.5_changes.md`). For each change, include: what changed, where it lives, which doc sections are affected, and a confidence flag — 🟢 confident or 🟡 needs staff input.

**Stop and surface for staff review.** Resolve 🟡 questions before drafting prose.

### Phase 3 — Draft updates

1. Edit only the doc sections where Phase 2 identified substantive changes. Match existing tone and structure.
2. Verify factual claims (variable names, default values, equation forms, units, subscripts) directly against the new .mdl. If unsure, leave a `<!-- TODO: verify ... -->` comment rather than writing a confident-but-unchecked claim.
3. Make small, reviewable commits — one logical change per commit, prefixed `docs(<sector>): <summary> (<new_version>)`.
4. Existing `![...](...)` image references stay in place even when the underlying screenshot is now stale; add a `<!-- TODO: screenshot may need replacement — ... -->` marker near each.
5. For sections that describe entirely new structure with no existing screenshot, add a structured marker: `<!-- TODO: SCREENSHOT NEEDED: View "..." in <new_mdl>, showing ... Suggested filename: <section>_<view>_<new_version>.png -->`.
6. Bump `*This page was last updated in version <new>.*` only on pages with substantive content changes.
7. **Do not push to remote.** All commits stay local on `develop_<new_version>` for staff review.

**Outputs:**
- Local commits on `develop_<new_version>`.
- `notes/<new>_doc_updates_summary.md` — files changed, mapping back to Phase 2 themes, TODOs, out-of-scope observations.
- `notes/<new>_screenshots_needed.md` — every screenshot needing capture or recapture, with view, intended content, and suggested filename. One file lets a staff member sit down with Vensim and work through the list.

## File handling rules

- **`.mdl` file size.** Each is 50,000–55,000 lines. **Never `Read` one whole.** Use `grep`, `extract_view_vars.js`, or `find_equation.js`.
- **`.mdl` structure.** Equations occupy lines 1 through the first `\\\---/// Sketch information` separator. Each Vensim view's sketch section follows, headed by `*ViewName`.
- **Encoding.** `.mdl` files may be Windows-1252 with CRLF. The Node tooling reads them as `latin1` to be safe.
- **Subscript ranges** (`Vehicle Type:`, `Cargo Type:`, `Subregion:`, etc.) live alphabetically near the bottom of the equation section. Always diff these first.
- **`:EXCEPT:` clauses.** Many EPS equations are defined for a subscript range with `:EXCEPT:` carving out one combination, which then has a separate special-case definition. Read both blocks together.

## Gotchas — lessons from past passes

1. **Sketch-section variable diffs can produce false positives.** A sketch label change (e.g., `RZSPbS BAU Required ZEV Sales Percentage by Subregion` in 4.0.4 → `RZSPbS Required ZEV Sales Percentage by Subregion` in 4.0.5) shows as one removal + one addition in a sketch-only diff but is actually a single rename of one variable. Before claiming a variable is genuinely new in the new version, grep its short-name prefix (e.g., `RZSPbS`) in the old file. Use `diff_equation.sh` to confirm.
2. **`Last Year X` companions.** Many EPS levels have parallel `Last Year X` variants. These often pre-date the current release. Check the equation section directly before flagging as new.
3. **About-tab text in input data `.xlsx`.** When narrating a new input variable, read its source spreadsheet's About / Notes / Sources content first. Use `read_xlsx_about.sh`. The About text often gives the exact sourcing language to mirror in prose.
4. **Variables can be added to the *equation* section without appearing on any view's sketch.** A variable that's purely intermediate (referenced in equations but not visualized) won't show up in `diff_views.sh`. If Phase 2 prose suggests something is missing, do a separate equation-section grep for the term.
5. **`MAX(...)` and floor adjustments matter.** Old equations frequently used `MAX(1, expr)` or similar floors that quietly changed in the new version. Read equation diffs in full, not just headlines.
6. **Don't push to remote.** Ever. Even when a commit succeeds and feels final, it stays local.

## Conventions

- **Working branch:** `develop_<new_version>` (e.g., `develop_4.0.5`, `develop_4.1`).
- **Commit format:** `docs(<sector>): <imperative summary> (<new_version>)` with a Co-Authored-By line.
- **Notes filenames:** version-stamped — `<old>_to_<new>_changes.md`, `<new>_doc_updates_summary.md`, `<new>_screenshots_needed.md`.
- **Screenshot filenames:** `<section>_<view>_<new_version>.png` for new captures; for replacements, suffix with `_<new_version>.png` rather than overwriting so reviewers can compare.
- **Scope discipline.** Don't opportunistically rewrite unrelated content. Note out-of-scope improvements in the Phase 3 summary as observations, not edits.

## Cross-version replicability

This skill is **deliberately version-agnostic.** When the next bump starts (say, 4.0.5 → 4.1):

1. The user updates `CLAUDE.md` with the new versions, paths, branch name, and contacts.
2. The user puts the new `.mdl` files in the docs working directory (gitignored — see `.gitignore`).
3. The next Claude session reads this skill plus `CLAUDE.md`, runs `extract_all_views.sh` against the new file pair, and starts Phase 1 against any unchanged sector docs.
4. Notes from the previous bump (`4.0.4_to_4.0.5_changes.md`, etc.) remain as historical context but do not need to be edited or migrated.

The `notes/.tools/` scripts and this skill should not need changes between bumps. If they do, that's a signal the workflow itself has evolved and the skill should be amended.

## Output sizing budget

A typical sector pass produces:

- Phase 1 mapping addition: 5–15 KB.
- Phase 2 change list addition: 10–30 KB.
- Phase 3 commits: 5–15 commits per sector at 2–10 lines each.
- Phase 3 summary: 3–8 KB.
- Screenshot inventory: 3–8 KB.

If a sector has very few changes (single-digit added variables, no subscript changes), collapse Phase 2 + 3 into a single short pass and label it "small-change sector" in the summary.
