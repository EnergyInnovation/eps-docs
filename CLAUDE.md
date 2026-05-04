# EPS Documentation Update Project

> **Reusable workflow.** The version-agnostic methodology (phased approach, file-handling rules, gotchas, conventions) lives in the `eps-version-bump` skill at `.claude/skills/eps-version-bump/SKILL.md`. Helper scripts live in `notes/.tools/` (see `notes/.tools/README.md`). This `CLAUDE.md` holds the **per-pass configuration** (current versions, paths, working branch, contacts) below; for the next bump (e.g. 4.0.5 → 4.1), update the version numbers and `.mdl` paths here without modifying the skill or scripts.

## Context

The Energy Policy Simulator (EPS) is a system dynamics model maintained by Energy Innovation. Its public documentation lives at https://docs.energypolicy.solutions/ and is built from markdown files in this repository (`C:\Users\DanOBrien\Models\EPS\docs`), which is connected to a remote.

The EPS model itself is written in Vensim (`.mdl` files). Version 4.0.4 is the current public release; version 4.0.5 is in development. The goal of this project is to update the markdown documentation to reflect changes made between 4.0.4 and 4.0.5, so that when 4.0.5 is released, the docs are accurate.

All output from this project is a **draft for staff review**. Nothing produced here is a final or published version of the documentation. Treat every change as a proposal that a human will review, refine, and approve before it goes live.

## Project setup

- **Working branch:** All work happens on the `develop_4.0.5` branch of this repo. Do not push commits to the remote — leave them local for staff review.
- **Point of contact:** Dan O'Brien is the staff contact for clarifying questions during all phases. When in doubt, surface the question rather than guessing.
- **Reference files:** `EPS_4.0.4.mdl` and `EPS.mdl` (the in-development 4.0.5 file) have been placed inside the working directory for reference. They are gitignored and should not be committed.

## Inputs

1. **The current docs repository** — local at `C:\Users\DanOBrien\Models\EPS\docs`, with markdown source files. This is the working repo.
2. **The published documentation site** — https://docs.energypolicy.solutions/ — useful for seeing how rendered pages map to the markdown source. If web access fails, work from the local markdown alone; the markdown is authoritative.
3. **`EPS_4.0.4.mdl`** — the locked public 4.0.4 Vensim source file, in the working directory.
4. **`EPS.mdl`** — the in-development 4.0.5 Vensim source file, in the working directory.
5. **Screenshots embedded in the documentation** — these illustrate model structure (Vensim views, equations, sliders) and are an important bridge between the docs and the code.

## Working with Vensim `.mdl` files

A few technical notes about the source files before you start:

- `.mdl` files have two main sections separated by `\\\---///`: an **equation section** (variable definitions, equations, units, comments) and a **sketch section** (visual layout coordinates for the Vensim canvas). For this project, the equation section is what matters. Sketch-section changes usually reflect a modeler rearranging variables visually and rarely indicate substantive model behavior changes. Filter sketch noise out of any diff.
- The files may use Windows-1252 encoding rather than UTF-8, and CRLF line endings. Expect this and handle it explicitly when reading.
- These files are large — likely tens of thousands of lines. Do not attempt to read them fully into context. Use grep/search to locate specific variables or views, and read targeted line ranges as needed.
- Subscripts (by sector, fuel, region, etc.) are extensive in EPS. A small textual change to a subscript range can have large structural meaning. Subscript changes deserve extra scrutiny — flag them prominently rather than treating them as routine edits.

## Phased Approach

This project has three phases. Do not skip ahead. Complete each phase, summarize findings, and wait for staff confirmation before moving to the next. The deliverables from each phase are not optional documentation — they are the project's working memory across Claude Code sessions.

### Phase 1: Understand the documentation and its mapping to the code

Before making any edits, build a working understanding of how the documentation is organized and how each section corresponds to specific areas of the EPS Vensim model.

Specifically:

- Walk the directory structure of the docs repo. Identify the top-level sections and their organization.
- For each section, read the markdown and note: which subsystem of the EPS does it document? What variables, equations, lookup tables, or input levers does it reference by name?
- Examine the screenshots in each section. Note what each one depicts and which part of the model it points to. Use screenshots to understand which model area a doc section covers — not to extract precise variable lists, since fine detail in Vensim screenshots may not be reliably readable.
- Open `EPS_4.0.4.mdl` and locate the corresponding views, variables, and subscripts referenced in each documentation section. Build a section-by-section mapping between docs pages and code locations.
- The mapping will be messy. One doc page may cover multiple Vensim views; a single view may be split across pages. Surface the messiness honestly rather than forcing a clean correspondence.

**Deliverable for Phase 1:** A markdown file at `/notes/doc_to_code_map.md` (create the `/notes/` directory if it doesn't exist) listing each documentation section alongside the EPS model views, key variables, and subscripts it covers. Flag any sections where the mapping is unclear or ambiguous — do not guess.

Stop here and surface the mapping for staff review before proceeding.

### Phase 2: Diff the model files to identify what changed in 4.0.5

Once the mapping is confirmed, compare `EPS.mdl` (4.0.5) against `EPS_4.0.4.mdl` to identify what has changed.

Approach:

- Diff the **equation sections** only. Sketch-section changes are noise for this purpose.
- Focus on substantive changes: new variables, removed variables, changed equations, changed default values, changed lookup table data, new or modified subscript ranges, and changed units.
- Group changes by EPS subsystem using the Phase 1 mapping. This makes Phase 3 tractable.
- For each substantive change, note: what changed, which view/section it lives in, and which documentation section(s) the mapping says are affected.
- Subscript changes get their own callouts — they often have structural implications larger than they appear.
- If a change appears significant but its purpose is unclear from the code alone, flag it rather than inferring intent. Staff will clarify.

**Deliverable for Phase 2:** A change log at `/notes/4.0.4_to_4.0.5_changes.md` organized by subsystem. For each substantive change, list what changed, where it lives in the model, which docs sections are affected, and your confidence level. Distinguish clearly between (a) changes you are confident about and (b) changes that need staff input before any doc edits are made.

Stop here and surface the change log for staff review before proceeding.

### Phase 3: Draft documentation updates

Once the change log is reviewed and approved, edit the relevant markdown files to reflect the 4.0.5 changes.

Conventions for edits:

- Match the existing tone, structure, and formatting of each documentation section. Do not restructure pages unless explicitly asked.
- Verify factual claims — variable names, default values, equation forms, units, subscript ranges — against `EPS.mdl` directly. Do not rely on memory or inference. If unsure, leave a `<!-- TODO: verify -->` comment rather than writing a confident-but-unchecked claim.
- Keep edits focused on what changed between 4.0.4 and 4.0.5. Do not opportunistically rewrite unrelated content. If you notice unrelated improvements that could be made, surface them in the Phase 3 summary as observations, not edits.
- Make edits in small, reviewable commits — one logical change per commit, with clear messages (e.g., `docs(transportation): update EV adoption variables for 4.0.5`). Do not push to the remote. Leave commits local for staff review on the `develop_4.0.5` branch.
- You cannot run the EPS model. If a 4.0.5 change alters model output in a way that should be described narratively (e.g., "this lever now produces stronger emission reductions because…"), you can describe the mechanism from the equations but cannot verify the empirical result. Flag these places for staff to fill in based on actual model runs.

### Handling screenshots

Screenshots are produced by staff opening Vensim and capturing images. Claude Code cannot create, modify, or capture screenshots. The documentation workflow depends on text and screenshots staying coherent, so:

- **Preserve all existing image references.** Do not delete `![...](...)` markdown image links during edits, even if surrounding text is being rewritten. If you believe an image is no longer relevant, leave the reference in place and add a comment: `<!-- TODO: screenshot may need replacement — view shown is from 4.0.4 -->`.

- **Do not move image references to different positions** unless the rewrite genuinely requires it. Screenshots are anchored to specific paragraphs of explanatory text; relocating them silently breaks that anchoring.

- **Do not introduce new image references pointing to imaginary files.** If a section describes a 4.0.5 change that would benefit from a new screenshot, leave a structured comment at the location where the new screenshot would belong:

  ```
  <!-- SCREENSHOT NEEDED: View "EV Adoption Submodel" in EPS.mdl,
  showing the three new input levers added in 4.0.5. Suggested
  filename: ev_adoption_submodel_4.0.5.png -->
  ```

- **Describe what an eventual screenshot should show, but do not assert it as already visible.** Avoid "as shown in the figure below" for screenshots that don't yet exist. Write self-contained prose that makes sense whether or not the screenshot is present.

- **Flag stale screenshots.** When a section's existing screenshot depicts a model view that has changed in 4.0.5, add a TODO comment immediately above the image reference noting what changed and what a new screenshot should show. Do not remove the existing image — staff need to see what was there to reproduce or replace it.

- **Use a consistent filename convention** for any suggested new screenshots: `<section>_<view>_<version>.png` (e.g., `transportation_ev_adoption_4.0.5.png`).

**Deliverable for Phase 3:**
1. Local commits on the `develop_4.0.5` branch, ready for staff to review via `git diff`.
2. A summary file at `/notes/4.0.5_doc_updates_summary.md` listing every file changed, the nature of each change, and any open TODOs or flagged uncertainties.
3. **A screenshot TODO inventory at `/notes/4.0.5_screenshots_needed.md`** listing every screenshot that needs to be captured or recaptured, with: the markdown file it belongs in, the Vensim view it should depict, what specifically it should illustrate, and the suggested filename. This file lets a staff member sit down with Vensim once and work through the list efficiently rather than discovering missing screenshots one at a time during review.

## Working principles

- **Drafts for review.** Every output is a proposal, not a finished product. Use TODO comments liberally where uncertainty exists.
- **Verify against primary sources.** The `.mdl` files are the source of truth for what the model does. The docs are downstream. When they disagree, surface the disagreement — do not silently align one to the other.
- **Acknowledge limits.** If a change in the model is outside what can be understood from the code alone, say so and stop. Don't invent rationale.
- **Pause between phases.** Each phase produces a deliverable that staff will review before the next begins.
- **No remote pushes.** All work stays local on `develop_4.0.5` until staff approval.
- **Working notes are project memory.** The files in `/notes/` are how the next Claude Code session picks up where the last one left off. Keep them current.

## Suggested pilot

Before running the full project, pick one documentation section that has clear 4.0.5 changes and walk all three phases on just that section. This will surface workflow issues — screenshot handling, mapping ambiguity, diff noise, commit conventions — at small scale before they compound across the whole docs site. Refine these instructions based on what the pilot reveals.
