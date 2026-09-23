# January 2025 Frozen Policies — federal vs. state lever inventory

Working note for the 4.0.6 docs update. Source: `State Biden Scenario Levers.xlsx`
(Policy Shared Projects > US State Models > 4.0.6 Release > Jan 2025 Frozen Policy Scenario -
States), read 2026-09-18, supplemented by `plan.md`, `decisions.md`,
`Solar_for_All_capacity_allocation.xlsx` and `OilGasLeasing_Calculations_States_406.xlsx` in the
same folder.

This is the triage behind the comparison tables on the two scenario guide pages. It is a working
note, not documentation — everything here needs verifying against the workbooks and the model
before it goes on a public page.

## Treatment counts

Of the 75 lever rows in the workbook:

| Treatment | Rows | Policy areas |
|---|---|---|
| Copy national (some with a currency-year update) | 62 | 48E, 45Y, 45W, 30D, 25D, ZEV sales percentages, all `Policy Driven Change in Fuel Price` entries, onshore wind (`Use Alternate CSC`) |
| Scaled / otherwise different from national, approach defined | 4 | Solar for All (2 rows), offshore wind construction schedule, oil & gas leasing production |
| Different from national, approach NOT yet defined | 4 | CAA §111 / MATS / ELG capacity retirement (3 rows) and retrofit (1 row) |
| Different from national, approach recorded as needed but status "done" | 1 | Hydrogen — `Fraction of Hydrogen Production Pathways Shifted` |
| Left out of state scenarios | 1 | Forestry — `Fraction of Improved Forest Management Achieved` |
| Control setting, not a policy | 1 | `Policy Implementation Schedule Selector = 3` |

The 62 "copy national" rows collapse to a handful of doc table rows, because one policy (e.g.
45W) covers six subscripted levers and the fuel price block covers 39.

## Levers that differ, in detail

### Solar for All — scaled to state
`Boolean Use Non BAU Distributed Solar Capacity[urban residential]` and `[rural residential]`.
State-specific distributed solar capacity enters through `bldgs/CiDESCTY`.

Allocation: each state's MW = its EPA grant award × a single national factor of 4,000 MW /
$7.0B (≈ $1.75/W of grant, not installed cost). Nine multistate / tribal / nationwide awards
($1,383.9M, ≈791 MW) are apportioned across member states by 2020 Census population. Sums to
4,000 MW by construction.

Caveats recorded in the workbook's methodology tab: the uniform factor ignores state-to-state
differences in installed cost and capacity factor; population weighting of the multistate awards
is a convention; EPA never published per-state capacity.

### Offshore wind — scaled to state
`Boolean Use Non BAU Mandated Capacity Construction Schedule[offshore wind es]`. Approach:
attribute the individual project lines in the national PMCCS to each state.
**Not yet verified by me** — I have not seen the project-to-state attribution file.

### Oil & gas leasing — production scaled to state, prices national
`Boolean Increase in Fuel Production from Oil and Gas Leasing This Year`; state models read
BTU from `fuels/IiFPfOaGL`, negative values (the frozen-policy world leases less).
The 39 `Policy Driven Change in Fuel Price` levers are copied national — so **state runs are
not additive on the price side**, only on production.

Gulf allocation by BOEM active lease count in the GOM region: LA 80.054%, TX 19.356%,
AL 0.499%, MS 0.091% (1766 / 427 / 11 / 2 of 2,206). Cook Inlet → AK. Only AL, LA, MS, TX
carry non-zero production. Basis chosen for comparability with the deployed OBBBA-baseline
state runs, not on methodological grounds; `decisions.md` §4.2 flags lease *count* (ignoring
lease size and productivity) as the known weakness.

Federal offshore production is absent from every state's BAU, so a state's own BAU is not a
meaningful denominator — this is why the state build emits absolute BTU rather than the
federal file's percent-of-BAU.

### Forestry — not included
`Fraction of Improved Forest Management Achieved = 0.1959` is left out of the state scenarios.

## Open items blocking the remaining table rows

1. **Power-sector regulation (CAA §111 / MATS / ELG).** Three `Boolean Use Non BAU Capacity
   Retirement Schedule` levers (hard coal, lignite, hard coal w CCS) and one
   `Boolean Use Non BAU Mandated Capacity Retrofit Schedule` lever are marked "different from
   national, need an approach" with status blank. The workbook note raises the difficulty that
   aligning to a fixed coal phase-out year is hard because economic retirements move.
   **No doc text can be written until this is settled.**
2. **Hydrogen.** `Fraction of Hydrogen Production Pathways Shifted = 1` is marked "different
   from national, need an approach" with status "done" and owner "tbd". The two are
   contradictory; needs a one-line answer on what the state models actually do.
3. **Currency year.** Many tax credit levers are noted "copy national, update currency year."
   Confirm whether this is worth stating on a public page — it is a units convention, not a
   scenario difference.
4. **Alaska.** Out of scope for 4.0.6 per `decisions.md` §4.1, but Cook Inlet production is
   still allocated to AK in the source files. Decide what, if anything, the public page says.
5. **Offshore wind project attribution.** Need the file that maps national PMCCS project lines
   to states, to confirm the doc language.

## Things noticed in passing (not acted on)

- Neither scenario guide is linked from any of the 50 state model pages; only `docs/models/us.md`
  links to the federal guide.
- Both pages are dated **July 2026**; the 4.0.6 release date on the state model pages is
  September 28, 2026.
- `decisions.md` §8a notes the federal `OilGasLeasing_Calculations.xlsx` does not yet carry the
  BBG3 sale that the state workbook does, so the two are out of sync by design pending the same
  edit federally. If the federal doc page is going to quote sale-level detail, it should reflect
  whichever state the federal file ends up in.

## Decisions taken 2026-09-22

- **State policies are constant across both scenarios**, with the single exception of the CRA
  resolutions overturning the CAA §177 waivers (ACC II and ACT). Confirmed by Dan; a partner
  asked that this be unmissable, so it is stated in a bold callout above the table on both pages
  and the Transportation row is split into a federal row and a §177 row.
- **Table dates are statutory where a provision has one.** Where a credit phased out on a trigger
  rather than a date (45Y/48E), the table gives the schedule assumed in the model. Rationale: the
  FoPITY schedule-3 fractions for the vehicle credits reflect the loss of the federal credit
  against a total incentive that includes state programs, so they are not a policy schedule and
  would mislead if presented as one.
- Safe harbor is included in the current-policies baseline, which is why the 45Y/48E scenarios do
  not diverge until 2028.

## Source of truth for modeled policy timing

`Models\EPS\US\eps-us-analysis`, branch `Jan25Frozen_4.0.6`, file
`InputData/plcy-schd/FoPITY/FractionOfPolicyImplementedThisYear.py`. The scenario sets scalar
lever values in `Jan25_FrozenPolicies.cin` plus `Policy Implementation Schedule Selector = 3`,
so all modeled timing is FoPITY schedule 3 in that generator.

**Do not use the copy in the OneDrive scenario folder** (`Policy Shared Projects > US State
Models > 4.0.6 Release > Jan 2025 Frozen Policy Scenario - States`). Checked 2026-09-22: it is
stale relative to the repo and disagrees on the 45Y/48E phase-down years. Schedule revisions
landed in the repo that the OneDrive copy predates (see commit "Adds battery storage credit taper
and updates schedules to move two years earlier and add battery taper").

Differences found, repo vs OneDrive copy:

| Policy element | OneDrive copy | Repo (canonical) |
|---|---|---|
| `elec generation subsidy, solar PV es` | full 2031, hold to 2038, zero 2041 | full 2031, hold to 2036, zero 2039 |
| `elec generation subsidy, onshore wind es` | hold to 2040, zero 2043 | hold to 2038, zero 2041 |
| `elec capacity construction subsidy, solar thermal es` / `offshore wind es` | hold to 2040, zero 2043 | hold to 2038, zero 2041 |
| `elec capacity construction subsidy, geothermal es` | trailing `(2050,1)`, subsidy interpolates back to full after 2042 | `(2038,0.837),(2039,0.631),(2040,0),(2050,0)`, clean |
| `bldgs distributed solar subsidy` (all three), `trans psgr subsidy` | identical | identical |

The geothermal trailing-value problem exists **only in the OneDrive copy** and is not a model
defect. An earlier version of this note recorded it as a possible defect; that was wrong. The doc
pages were corrected on 2026-09-22 to the repo's phase-down years.

## Oil & gas leasing inputs — vintage check, 2026-09-23

Three artifacts, two vintages. The Aug 28 workbook produces materially lower production than the
Aug 26 outputs from 2029 onward (Louisiana 24–44% lower; ratio falls from 1.00 at 2028 to 0.56 at
2050). Cause of the Aug 28 change not identified — it is NOT BBG3, whose calibration multipliers
are unchanged and whose documented effect has the opposite time shape.

| Artifact | Vintage | Status |
|---|---|---|
| `OilGasLeasing_Calculations_States_406.xlsx` (OneDrive) | 2026-08-28 16:54 | current |
| `IiFPfOaGL_output\csv\*.csv` (OneDrive) | 2026-08-26 10:44 | **stale** |
| `State Data @ frozen-policy-jan25`, LA/TX/AL/MS | 2026-08-28 17:11–17:19 | current, matches workbook to rounding |
| `State Data @ frozen-policy-jan25`, AK and HI | 2026-08-26 12:55 | **wrong — hold the national series** |

Verified: the four Gulf state files reproduce the documented BOEM active-lease allocation exactly
(LA 80.05%, TX 19.36%, AL 0.499%, MS 0.091% of the Gulf total), and LA matches the workbook's
`EPS_OUTPUT` to ~5e8 BTU on values of ~1e14.

Alaska and Hawaii in that branch still carry the national series rather than state values.
Per Dan (2026-09-23) those files are not used, so this is recorded only so a later session does not
re-flag it.

**Consequence for the docs:** the Cook Inlet share of incremental production cannot be computed at a
single vintage until Alaska is regenerated. The 12.0% oil / 3.7% gas figure derived on 2026-09-22
came from the superseded Aug 26 CSVs and must not be published.

### Cook Inlet share — resolved 2026-09-23

Computed from `OilGasLeasing_Calculations_States_406.xlsx` (2026-08-28) recalculated on the AK
selector, on a scratch copy; the shared file was not modified.

| | national Gulf | Cook Inlet | Cook Inlet share |
|---|---|---|---|
| crude oil | −8.900e15 BTU | −2.021e15 BTU | **18.51%** (annual 17.5–22.1%) |
| natural gas | −2.099e15 BTU | −1.353e14 BTU | **6.06%** |

Vintage confirmed two ways: national Gulf equals the sum of the live `frozen-policy-jan25` files for
LA+TX+AL+MS exactly, and Cook Inlet is unchanged from the superseded 2026-08-26 value (−2.021e15).
The Aug 28 workbook change therefore affected the Gulf only, which is why the share moved from
12.0% to 18.5% — the denominator shrank, the numerator did not.

`Oil & Gas Methodology.docx` (2025-06-08) states "92 percent of the incremental oil production and
97 percent of the incremental gas production comes from Gulf leases" — i.e. Cook Inlet 8% and 3%.
That document is superseded (Dan, 2026-09-23) and is not a reconciliation target. The same sentence
is repeated in the Results section of the federal docs page, where it is now flagged for recompute
along with the rest of that paragraph.

## Forestry — verified against the scenario calcs workbook, 2026-09-23

Source: `Calibration Resources\US\4.0.5\Jan 2025 Frozen Policy Scenario\Jan 25 Frozen Policy Scenario Calcs.xlsx`, `Forestry` tab.

Confirmed: the CBO 2022 estimate is the outlay source (URL cited at row 41, matching the docs link);
outlays are compared against IRA budget authority by section (23001, 23002, 23003, rows 59–61);
mitigation is filled lowest to highest marginal cost across $5/$20/$35/$50/$100 per ton buckets
(rows 79–83 — bucket 5 saturates before 20 is drawn on, 20 before 35); and the lever value
`Fraction of Improved Forest Management Achieved = 0.1959` traces to `0.195874` at rows 246/248.

Corrected in the docs: the outlay schedule does not stop at 2031. CBO's runs through 2031, and the
workbook then tapers it 0.75 / 0.5 / 0.25 / 0 across 2032–2035 (row 65), so modeled outlays run
through 2034.

**Afforestation is calculated but not implemented.** The tab computes both forest management
($1.3B target spend) and afforestation and reforestation ($1.5B, the larger line, rows 39 and
88–103). Only forest management is turned on in the scenario:
`Fraction of Afforestation and Reforestation Achieved` defaults to 0 in `EPS.mdl` (line 30422) and
is absent from `Jan25_FrozenPolicies.cin`, while `US_ClimateAmbition.cin` sets it to 0.5 — so it is
a live lever deliberately left unset here. The docs correctly describe forestry as one policy.
Worth a staff question: was leaving afforestation out intended, given the workbook sizes it larger
than forest management?

Two items flagged and not acted on:
- The workbook heads this block "Sec. 10105. Secure Rural Schools; Forestry"; the docs pages say
  "Sec. 10201. Forestry". Likely House vs enacted numbering — confirm before publishing.
- RESOLVED 2026-09-23. The docs attributed the cost buckets to "EPA's non-CO2 emissions report";
  that was wrong and both references have been corrected to EPA's **Forestry and Agriculture Sector
  Mitigation Analysis** (Climate Economic Analysis). The calcs workbook's Forestry tab cites nothing
  for the buckets, but the same bucketed potential drives the EPS land inputs, and those carry the
  citation: `InputData/land/PLANAbPiaSY` About tab states "Our main data source is EPA's 2024 report
  which compiles an integrated abatement potential across the agriculture and forestry sectors",
  with the same URL in `ICoLUPpUA`; both hold a tab named "EPA land and ag potential". The "non-CO2"
  wording appears to have come from the calcs workbook's **Ag** tab, which does cite EPA's non-CO2
  report and MACC data - but agriculture is not modeled in this scenario - and from "Cropland
  Non-CO2" rows inside the EPA forestry/ag dataset itself.

## 45Y/48E — how the phase-outs actually work (verified 2026-09-23)

Sources: `eps-us-analysis@Jan25Frozen_4.0.6` — `Jan25_FrozenPolicies.cin`, FoPITY schedule 3,
`InputData/fuels/BS/BS-BSpUECB.csv` and `BS-BSpUEO.csv`, and `EPS.mdl:50572`.

The combination rule is `total = BAU + policy - BAU x policy`, so the scenario lever is a **top-up**
on whatever the BAU subsidy still pays, not a replacement. The FoPITY schedule-3 fractions are
calibrated to hold the combined credit at exactly its full value while the BAU credit declines:

| tech | year | BAU | policy | combined |
|---|---|---|---|---|
| solar thermal | 2029 | 0.27764 | 0.19189 | **0.41625** = full |
| geothermal | 2036 | 0.31219 | 0.15110 | 0.41612 = full |
| nuclear | 2040 | 0.31219 | 0.15110 | 0.41612 = full |

Once the BAU credit hits zero the scenario carries the whole credit and runs the statutory
step-down 100 / 75 / 50 / 0.

**The differing end dates are not construction lead times.** They track when each technology's BAU
credit expires under current policies (`BS-BSpUECB.csv`): solar thermal and offshore wind end 2031,
geothermal 2038, nuclear and SMR 2042 — i.e. OBBBA terminated wind and solar credits early while
other technologies stayed on the original emissions-trigger schedule. Frozen-scenario credits
therefore end 2039 (utility solar PV), 2041 (onshore/offshore wind, solar thermal, commercial
distributed solar), 2040 (geothermal), 2044 (nuclear, SMR).

A corollary: a FoPITY fraction below 1 does NOT mean a reduced credit. An earlier draft of the docs
said geothermal and nuclear "never reach full credit value", which was wrong — that was reading the
schedule without the BAU file.

### Possible defect — geothermal's taper

Every other technology steps down 1 / 0.75 / 0.5 / 0 once its BAU credit is exhausted. Geothermal
instead runs 0.837 / 0.631 / 0, giving 83.7% and 63.1% of full credit where 75% and 50% would be
expected. The values 0.363 and 0.631 are the BAU-complement numbers used on the way *up*, so this
looks like the ramp sequence reused on the way down rather than the statutory taper. Flagged
2026-09-23, not investigated. Not the same issue as the stale OneDrive copy's trailing `(2050,1)`.
