# Doc-to-Code Mapping — Transportation Sector (Phase 1 pilot)

**Status:** Draft for staff review. Pilot scope: transportation sector only. Other sectors will be added in subsequent Phase 1 passes after staff confirms this mapping format and content.

**Reference files used:** `EPS-4.0.4.mdl` (locked 4.0.4 source) and `EPS.mdl` (in-development 4.0.5). Mapping is anchored to 4.0.4 variable/view names; Phase 2 will check whether any names changed in 4.0.5.

---

## 1. Vensim views in scope

The 4.0.4 model contains three views whose names match the transport documentation pages:

| Vensim view | Sketch line (4.0.4) | Sketch line (4.0.5) | Notes |
| --- | --- | --- | --- |
| `Transportation - Main` | 51798 | 53690 | Cargo distance, vehicle stock, fuel economy, vehicle choice, LCFS, emissions |
| `Transportation - BAU` | 52542 | 54519 | BAU-case mirrors of fuel cost / fuel economy / cargo distance calculations |
| `Transportation - Cash Flow` | 52961 | 54986 | Vehicle, fuel, subsidy, fare, and charger expenditures and revenues by entity / ISIC |

No transport view appears to have been added or removed between 4.0.4 and 4.0.5 (same three view headers, in the same order). Phase 2 will check whether the view *contents* changed substantively.

The BAU-mirror view (`Transportation - BAU`) is not separately documented; the main page mentions it parenthetically (e.g., "On the 'Transportation - BAU' sheet, we perform a similar calculation"). This is intentional — BAU mirrors policy-case structure with BAU inputs.

---

## 2. Section-by-section mapping for `transportation-sector-main.md`

The main doc is a long technical walk-through built around 41 inline screenshots. Each `(image filename)` below ties a doc subsection to the corresponding region of the `Transportation - Main` Vensim view and its key variables.

### General Notes / Vehicle Types / Vehicle Technologies
- **Subscripts referenced:** `Vehicle Type` (11 categories listed), `Cargo Type` (passenger / freight), and the implicit "Vehicle Technology" subscript (BEV, NGV, gasoline, diesel, PHEV, LPG, hydrogen).
- **Code anchor:** Subscript ranges are defined in the equation section near the top of the file (not inside the Transportation views). Phase 2 must scrutinize any subscript changes here — these are structural per CLAUDE.md.

### Calculating Cargo Distance Transported
- Image refs: `CargoDistCalc`, `TranspMacroFeedback`, `CargoDistTDM`, `FuelCostPerCargoDist`, `PercChangeFuelCost`, `ExogenousGDP`.
- **Key variables (verified in 4.0.4):**
  - `BCDTRtSY BAU Cargo Dist Transported Relative to Start Year[Vehicle Type, Cargo Type]`
  - `EoDfVUwFC Elasticity of Demand for Vehicle Use wrt Fuel Cost[Vehicle Type]`
  - `RTMF Recipient Transportation Mode Fractions[Cargo Type, Vehicle Type, Target Vehicle Type]`
  - `Perc Change in Fuel Cost per Unit Cargo Dist`
  - `Fuel Cost per Unit Cargo Dist`
  - `Perc Change in Sectoral Energy Use due to Exogenous GDP Adjustment[transportation sector]` (referenced from many sectors)
- **Policy levers touched:** Transportation Demand Management, fuel taxes (indirectly via fuels page), carbon tax (indirectly).

### Calculating New Cargo Distance Transported
- Image ref: `NewCargoDist`.
- **Key variables:** input variable controlling share of cargo-distance attributable to new vehicles each year. Exact name to be confirmed in Phase 2 via grep within the view region.

### Calculating New Vehicle Fuel Economy
- Image refs: `ChngFuelEcon`, `FeebateEffect`, `FuelEconStds`, `RnDEffect`.
- **Key variables (partial, verified):**
  - `BNVFE BAU New Vehicle Fuel Economy`
  - `New Vehicle Fuel Economy`
  - `EoNVFEwFC Elasticity of New Veh Fuel Economy wrt Fuel Cost`
  - `EoFoNVFE Effect of Feebate on New Veh Fuel Economy`
  - `Perc Change in New LDV Fuel Economy due to Feebate`
- **Policy levers touched:** feebate, fuel economy standards, R&D.

### Calculating NPV of Lifetime Vehicle Cost
- Image refs: `FuelCostPerCargDist`, `AnnFuelCost`, `NPVFuelCost`, `BatteryCost`, `EndogenousEVLearning`, `BatterySize`, `FuelEconPriceEffect`, `RnDPriceEffect`, `SubsidyEffect`, `RngAnxiety`.
- **Subsection coverage:**
  - **NPV of Lifetime Annual Expenditures** → fuel-cost-per-distance, annual O&M, ownership-period discounting
  - **New Vehicle Price** → input vehicle prices, endogenous battery learning curve (links to `endogenous-learning.md`), 45X / IRA-style battery production subsidy with pass-through fraction, battery size by vehicle type, vehicle-price adjustment for fuel economy and R&D, carbon-tax embedded-emissions adjustment, BAU + policy subsidies
  - **Range Anxiety and Charging Time Shadow Cost** → applied only to electric passenger LDVs
- **Policy levers touched:** EV subsidy, battery production subsidy, R&D, carbon tax, reduce range anxiety / charging time, endogenous battery learning.
- **Cross-page reference:** "endogenous learning curves" — see `endogenous-learning.md`. This page will need a parallel Phase 1 review when scope expands beyond transport.

### Calculating Number of New Vehicles
- Image refs: `NewVehDemanded`, `CurvesAllocation`, `VehTechAllocation`, `ZEVMandate`, `QualifyingZEVs`, `ZEVSalesShare`, `OffRoadZEVs`, `SummingSales`.
- **Mechanism:** logit choice over technologies, then ZEV-standard adjustment by subregion (up to 60; U.S. uses 51).
- **Policy levers touched:**
  - Subregional ZEV sales standard ("Advanced Clean Cars and Trucks" follower-state setting)
  - Region-wide ZEV sales standard (federal-tailpipe-style)
  - Use Non BAU ZEV Qualifying Vehicles (changes which technologies count as ZEV)
- **Subscript note:** subregion subscript (51 in U.S. model). Phase 2 must check whether this changed.

### Tracking the Vehicle Fleet
- Image ref: `TrackVehFleet`.
- **Key variable (level):** `Vehicles` — the level/stock variable for fleet composition by type and technology. Inflows = new vehicles; outflows = retiring vehicles. Doc explicitly notes the manual current-year inflow/outflow adjustment (Vensim level-update timing).

### Tracking Fleet Average Fuel Economy
- Image ref: `TrackFleetFuelEcon`.
- **Mechanism:** percentage-change accumulation each year, anchored on lifetime-delayed historical new vehicle fuel economy.

### Calculating Fuel Shifts Caused by the Low Carbon Fuel Standard (LCFS)
- Image refs: `FuelBeforeLCFS`, `VehTypeFilter`, `ElecEffAdj`, `CFEAdjustment`, `ReqdCFEInc`, `AssigningCFEByVehByFuel`, `AssigningCFEByVehTech`, `ConvToEnergy`, `TotFuelUsed`.
- **Mechanism:** four-stage filter chain (vehicle-type filter → electricity-efficiency adjustment → CFE conversion → required-CFE-increase calculation), then reverse the chain. Doc explicitly references the blue / orange / green color-coded bars on the Vensim canvas.
- **Policy levers touched:** LCFS percentage, non-BAU LCFS vehicle types lever, BAU LCFS settings, biofuel CFE assumption (input data, EPA-default).

### Calculating Emissions and Electricity Use
- Image ref: `EmisElecDmd`.
- **Key variables (verified):**
  - `Transportation Sector Pollutant Emissions`
  - `Transportation Sector Electricity Demand`
  - `Transportation Electricity Demand by Vehicle Type`
  - `Transportation Pollutant Emissions Disaggregated`
- **Policy levers touched:** Conventional Pollutant Standard (separately-regulated non-GHG pollutants).
- **Cross-page reference:** emissions intensities live on the Fuels page (`fuels.md`).

### LCFS Credit Estimates
- Image refs: `FuelPerCredit`, `CreditPrice`.
- **Mechanism:** estimate LCFS credits generated, derive an LCFS credit price from the incremental cost of low-carbon fuel relative to the reference fuel, with optional cap.

---

## 3. Section-by-section mapping for `transportation-sector-cash.md`

### Change in Fuel Spending
- Image ref: `Fuels`.
- BAU-vs-policy delta of `(transport fuel use × fuel cost per unit energy)`, separated into fuel-tax delta and fuel-industry cash flow delta.

### Change in Spending on Vehicles
- Image refs: `VehPrice`, `EVSubsidy`, `BatterySubsidies`, `VehMaintenance`, `TransFares`, `ChargerCosts`.
- Components:
  - **Vehicle costs** — battery vs. non-battery split (battery flows to electrical equipment industry, markups to auto manufacturers).
  - **EV subsidy payments** — uses subsidy values × vehicle counts in policy and BAU.
  - **Vehicle battery subsidy payments** — uses battery-subsidy value × vehicles × battery capacity, with explicit pass-through-share break-out.
  - **Other transportation costs** — maintenance, insurance, parking, licensing/registration/property tax. Applied to fleet count, not new sales.
  - **Transport fares** — fares-per-cargo-distance × cargo distance.
  - **EV chargers** — charger cost × deployed chargers.

### Allocating Changes in Expenditures and Revenue
- Image refs: `VehbyEntity`, `EnergyExpbyEntity`, `NonenergyExpbyEntity`, `SubsidyandFareRevenue`, `RevenuebyISIC`, `RevenuebyEntity`.
- **Cash flow entities:** government, labor, consumers, energy industries, non-energy industries, transport suppliers (for fares).
- **ISIC mapping:** road vehicles → "motor vehicles, trailers, semi-trailers"; non-road vehicles → "other transportation equipment"; fares → "transportation and storage"; subsidies allocated by share of nonenergy-industry output (cross-references the Input-Output Model in `io-model.md`).

---

## 4. Mapping for transport-related policy pages

These pages live under "Policy Design Guide → Transportation Policies" (per `sidebars.js`). They are short, prose-only policy-design write-ups. They do not directly walk through Vensim structure; instead, the technical implementation of each lever lives on `transportation-sector-main.md` or `transportation-sector-cash.md`. The mapping below is therefore lever-name → primary doc anchor in the main/cash docs.

| Policy page | Vensim implementation lives in | Notes |
| --- | --- | --- |
| `transportation-demand-management.md` | Main doc, "Calculating Cargo Distance Transported" (image `CargoDistTDM`) | Uses RTMF Recipient Transportation Mode Fractions input data |
| `feebate.md` | Main doc, "Feebate" subsection (image `FeebateEffect`) | LDV-only |
| `fuel-economy-standard.md` | Main doc, "Fuel Economy Standards" subsection (image `FuelEconStds`) | Subscript-controlled vehicle-technology applicability |
| `ev-subsidy.md` | Main doc, "New Vehicle Price" → `SubsidyEffect`; cash doc, `EVSubsidy` | |
| `ev-mandate.md` (Zero-Emission Vehicle Sales Standard) | Main doc, ZEV subsection (`ZEVMandate`, `QualifyingZEVs`, `ZEVSalesShare`, `OffRoadZEVs`) | Two levers: subregional and region-wide |
| `hydrogen-vehicle-mandate.md` | Same ZEV machinery as `ev-mandate`, with hydrogen included via "Use Non BAU ZEV Qualifying Vehicles" | Confirm in Phase 2 — doc page is concept-only |
| `low-carbon-fuel-standard.md` | Main doc, "Calculating Fuel Shifts Caused by the LCFS" (10 images) and "LCFS Credit Estimates" | |
| `ev-charger-deployment.md` | Cash doc only (`ChargerCosts`); main doc uses charger count via range-anxiety shadow cost | Charger deployment also affects range-anxiety lever — confirm in Phase 2 |
| `reduce-range-anxiety-charging-time.md` | Main doc, "Range Anxiety and Charging Time Shadow Cost" (image `RngAnxiety`) | LDV-passenger-EV-only shadow cost |
| `conventional-pollutant-standards.md` | Main doc, "Calculating Emissions and Electricity Use" (image `EmisElecDmd`) | Listed under Transportation Policies in sidebar but applies only to non-GHG pollutants from vehicles |
| `fuel-taxes.md` | Cross-sector — implementation lives on Fuels page (`fuels.md`); transport-side effect flows through "Calculating Cargo Distance Transported" via `Perc Change in Fuel Cost per Unit Cargo Dist` | Listed under "Cross-Sector Policies" in sidebar, not Transportation |
| `ev-perks.md` | **Not in sidebar** — `sidebars.js` does not reference this file under any category | See "Ambiguities" below |

---

## 5. Cross-sector pages that touch transport

- **`fuels.md`** — fuel cost per unit energy, emissions intensities, biofuel share assumptions. Transport docs reference this page repeatedly. Will be its own Phase 1 mapping section.
- **`io-model.md`** and **`macro-feedbacks.md`** — drive the GDP-weighted freight cargo-distance adjustment shown in image `TranspMacroFeedback`.
- **`endogenous-learning.md`** — contains the battery learning curve referenced by image `BatteryCost` / `EndogenousEVLearning`.
- **`carbon-tax.md`** — embeds in vehicle price via "embedded carbon" adjustment shown in image `RnDPriceEffect`.

---

## 6. Ambiguities and open questions for staff

1. **`ev-perks.md` not in sidebar.** The file exists in `docs/` but no sidebar entry references it. Is it intentionally orphaned (legacy / deprecated)? Should it be:
   (a) removed,
   (b) re-added to the Transportation Policies sidebar group, or
   (c) folded into another page (e.g., `reduce-range-anxiety-charging-time.md`)?
   No 4.0.5 doc edit decision is needed unless the underlying lever changed.

2. **`transportation-sector-cash copy.md`.** A stray duplicate of `transportation-sector-cash.md` is present in `docs/`. Looks like an accidental copy (filename includes a literal " copy"). Recommend deletion before Phase 3 begins to avoid editing the wrong file. **Confirming with staff before deleting.**

3. **`hydrogen-vehicle-mandate.md`** is conceptually a separate policy page, but the model implementation appears to be the same ZEV machinery with hydrogen toggled on as a qualifying technology. Phase 2 should confirm whether 4.0.5 introduced a separate hydrogen-vehicle lever or kept the unified ZEV mechanism.

4. **`ev-charger-deployment.md`** describes a charger-count input but the docs do not clearly tie this to a specific Vensim variable. Phase 2 should grep for charger-deployment input variables (likely `Number of EV Chargers` or similar) and verify whether they feed only the cash doc's `ChargerCosts` calc, or also the range-anxiety shadow cost in the main doc.

5. **Subregion count** — main doc says "Up to 60 subregions can be defined; in the U.S. model there are 51." Phase 2 should verify the subscript range in 4.0.5 and flag any change as structural.

6. **45X / IRA battery production subsidy framing.** The main doc explicitly references the U.S. Inflation Reduction Act 45X credit and notes the structure can be adapted to other regions. Phase 2 should check whether 4.0.5 has changed the default pass-through fraction, the domestic-production fraction, or the subsidy magnitude assumptions.

7. **"Last updated in version 4.0.4" footers** appear on both `transportation-sector-main.md` and `transportation-sector-cash.md`. Phase 3 will need to bump these to 4.0.5 only on pages where substantive content actually changed.

---

## 7. Notes on mapping fidelity

- This mapping is anchored to image filenames (e.g., `transportation-sector-main-CargoDistTDM.png`) rather than to Vensim x/y coordinates. That keeps the mapping stable as Vensim views are visually rearranged (CLAUDE.md treats sketch-section moves as noise).
- Variable-name verifications above were spot-checked against `EPS-4.0.4.mdl`. Phase 2 must repeat these greps against `EPS.mdl` (4.0.5) to detect renames, as a renamed variable in 4.0.5 invalidates the corresponding doc paragraph.
- The mapping does not yet enumerate every variable inside each subsection — it lists the variables actually named in the prose, plus enough adjacent variables to anchor the section. A full variable-inventory-per-view is overkill for the doc-update task; Phase 2 will surface only the variables that actually changed.

---

*This file is project memory. Update or extend it (rather than rewriting) as later phases reveal new context. Pilot scope: transportation only — non-transport sectors will be appended once staff confirms the format above.*
