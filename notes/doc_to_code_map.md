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

# Section II — Electricity Supply (Phase 1)

**Status:** Draft for staff review. The transport-pilot mapping format (above) is reused here. Sized for the much larger volume of electricity content: 502 lines / 63 images in `electricity-sector-main.md`, 247 lines / 28 images in `electricity-sector-cash.md`, plus 14 short policy pages.

## E1. Vensim views in scope

| Vensim view | 4.0.4 vars | 4.0.5 vars | Net | Added | Removed |
| --- | --- | --- | --- | --- | --- |
| `Electricity Supply - Main` | 745 | 754 | +9 | 212 | 203 |
| `Electricity Supply - BAU` | 672 | 687 | +15 | 219 | 204 |
| `Electricity Supply - Cash Flow` | 430 | 425 | −5 | 86 | 91 |

**The +9 / +15 / −5 net deltas hide a major refactor.** ~30 % of the variables on the Main and BAU views are added or removed (or, very often, renamed via removal+addition pairs). This sector pass will be substantially larger than the transport pilot — the mapping below is unchanged in spirit but the Phase 2 change list is going to be long.

## E2. Section-by-section mapping for `electricity-sector-main.md`

The doc has 19 second- and third-level subsections. Each row below ties one or more h3 subsections to the relevant region of the `Electricity Supply - Main` view via the image filenames.

| Doc subsection (h2 / h3) | Image filename stem(s) | Notes |
| --- | --- | --- |
| Power Plant Technologies | (none) | Lists the `Electricity Source` subscript values. Phase 2 must check this subscript range. |
| Temporal Resolution | (none) | Describes `Electricity Timeslice`, `Hour`, day-types. Phase 2 must check these subscripts. |
| Hourly Electricity Demand → Net Imports | `NetImports` | |
| Hourly Electricity Demand → Calculating Hourly from Annual | `TotalDemandBeforeDG` | Cross-references buildings, transport, and industry electricity demand. The transport-side electricity feed has already changed in 4.0.5 (see transport pilot, §4 — fuel cost subscript expansion). Likely affects this subsection. |
| Hourly Demand after Distributed Generation | `TotalDemandAfterDG` | |
| Hourly Demand after Optimizing Dispatch of Net Imports | `TotalDemandAfterNetImports` | |
| Potential Load Modification → Grid Batteries | `GridBatteriesDailyMax` | |
| Potential Load Modification → Pumped Hydro | `PumpedHydro` | |
| Potential Load Modification → EV Batteries | `EVBatteries` | Cross-references transport sector (V2G / managed charging). Likely touches the new `AVCC Average Vehicle Charger Capacity` variable seen in the diff. |
| Potential Load Modification → Demand Response | `DemandResponse` | |
| Potential Load Modification → Total Diurnal Balancing Potential | `TotalDiurnalBalancingBeforeHybridBatteries` / `TotalDiurnalBalancingIncludingHybridBatteries` | |
| Modifying Load before / after Accounting for Hybrid Battery Storage | `NetPeakLoadShift1of2`, `NetPeakLoadShift2of2`, `NetPeakLoadShiftHybrid1of2`, `NetPeakLoadShiftHybrid2of2`, `TotalSeasonalBalancing` | |
| Summing Charging and Discharging from Batteries | `HourlyBatteryChargeDischarge` | Phase 2 diff already shows new variables `Battery Charge Parameters`, `Battery Charging Allocation`, `Battery Discharge Parameters`, `Battery Discharging Allocation` — battery dispatch was refactored. |
| Revenues, Costs, Retirements, Max Build Rates → Annual Energy Market Revenues for Existing | `EnergyRevenuesExisting`, `ProfitExistingCapacity` | |
| Revenues, Costs, Retirements → Projected Annual Revenues for New Resources | `EnergyRevenuesNew`, `EnergyRevenuesNewAll`, `EnergyRevenuesHybrids`, `BidCFs`, `HypotheticalDispatch` | |
| Revenues, Costs, Retirements → Annual Recurring Costs | `AnnualRecurringCosts` | |
| Revenues, Costs, Retirements → Clean Electricity Standard and ZEC Revenue | `CESandZECRevenues`, `CES` | **Major rename impact:** in 4.0.4 this section is "RPS Revenue"; in 4.0.5 the model adds a `Clean Elec Requirement: {RPS, CES}` subscript and renames many `RPS X` variables to `Elec Portfolio Std X[Clean Elec Requirement]`. See E5 §1. |
| Revenues, Costs, Retirements → CCUS Retrofitting Costs | `CCUSRetrofitCost` | |
| Revenues, Costs, Retirements → LCOE | `LCOE1`–`LCOE5` | |
| Revenues, Costs, Retirements → Economic, Policy-Driven, and Planned Retirements | `Retirements1`, `Retirements2` | **Phase 2 already shows new variables:** `Capacity Retirements Based on Economic Lifetime`, `BUCLfCR Boolean Use Capacity Lifetimes for Capacity Retirements`, `BGCL BAU Generation Capacity Lifetime` — economic-lifetime-based retirement is a new mechanism. |
| Revenues, Costs, Retirements → Maximum Buildable Capacity | `MaxBuildableCapacity` | |
| New Capacity Construction → Policy Mandated Capacity Additions and Retrofits | `PolicyMandatedAdditionsRetrofits` | Phase 2 shows new `BPMGBSA BAU Policy Mandated Grid Battery Storage Additions`, `Boolean Use Non BAU Mandated Capacity Construction Schedule This Year`, `Boolean Use Non BAU Mandated Grid Battery Capacity Construction Schedule This Year`. New levers / split between generation and grid-battery mandates. |
| New Capacity Construction → Flexible Clean Capacity for CES Compliance | `FlexibleCleanFirm` | |
| New Capacity Construction → Cost Effectiveness Additions and Retrofits | `CostEffectiveAdditions` | |
| New Capacity Construction → Clean Electricity Standard Additions | `CESTarget` | Renamed/restructured via the `Clean Elec Requirement` subscript — see E5 §1. |
| New Capacity Construction → Additions to Support Green Hydrogen Production | `GreenH2Additions` | |
| New Capacity Construction → Reliability Additions | `DispatchableReliability`, `ResidualReliability` | Phase 2 shows new `Binding Peak Hour for Clean Dispatchable Reliability`, `Binding Peak Hour for Reliability Additions` — reliability machinery refactored. Many "Seasonal Dispatchable Reliability" / "Seasonal Residual Reliability" variables were removed in 4.0.5. See E5 §3. |
| New Capacity Construction → Total New and Retrofit Capacity | `TotalNewCapacity` | |
| Tracking Electricity Stock → Tracking the Electricity Fleet | `StockTracking` | |
| Tracking Electricity Stock → Capacity Factors | `ThreeYearAverageAchievedCF`, `ThreeYearAverageAchievedCFbyHour`, `ExpectedCFs`, `MarginalCapacityFactor` | |
| Tracking Electricity Stock → Other Weighted Average Fleet Properties | `WeightedAverageCFs` | |
| Tracking Electricity Stock → Available and Expected Capacity by Hour | (no new image — likely shares prior frame) | |
| Electricity Dispatch → Guaranteed Dispatch | `GuaranteedDispatch` | |
| Electricity Dispatch → Dispatch of RPS Qualifying Resources | `RPSDispatch` | **Image filename retains "RPS"** even though the model has renamed/expanded the framework. Phase 3 needs to decide whether to rename the screenshot or update the prose without renaming the image. |
| Electricity Dispatch → Dispatch of Remaining Zero- and Negative-Cost Resources | `NegAndZeroDispatch` | |
| Electricity Dispatch → Least Cost Dispatch | `LeastCostDispatch` | |
| Electricity Dispatch → Summing Total Dispatch and Estimating Market Prices | `TotalDispatchAndMarketPrices` | |
| Economic Storage Additions | `GridStorageAdditions`, `GridStorageSubsidies` | |
| Total Emissions | `TotalEmissions` | |
| Additional Electricity Outputs | `AdditionalOutputs` | |

## E3. Section-by-section mapping for `electricity-sector-cash.md`

| Doc subsection | Image filename stem(s) |
| --- | --- |
| Cost Components → Generation Construction Costs | `Generation` |
| Cost Components → Ongoing Capital Costs | `ongoingcapital` |
| Cost Components → CCS Transportation and Storage Costs | `CCSTransportStorage` |
| Cost Components → Spending on Batteries | `Batteries` |
| Cost Components → Fuel Costs | `Fuels` |
| Cost Components → Generation O&M Costs | `OnM` |
| Cost Components → Rebate for Sequestered CO2 | `CCSRebate` |
| Cost Components → Decommissioning Costs | `decommissioning` |
| Cost Components → Generation and Grid Battery Electricity Supply Subsidies | `Subsidies` / `generationsubsidies` / `batterygenerationsubsidies` |
| Cost Components → Other Grid Battery Subsidies | (no listed image) |
| Cost Components → Zero Emission Credit Subsidies | `ZECs` |
| Cost Components → Construction and CCS Subsidy Payments | `CCSSubsidies` |
| Cost Components → Transmission System Costs | `transmission` |
| Cost Components → Spur Line Construction Costs | `spurlines` |
| Cost Components → Distribution System Costs | `distribution` |
| Cost Components → Demand Response Costs | `demandresponse` |
| Cost Components → Electricity Import and Export Costs | `elecimportcash` |
| Cost Components → Energy Market Costs | `energymarket` |
| Cost Components → Clean Electricity Standard Costs | `CES` | 
| Cost Components → Capacity Market Costs | `capacity` | **Phase 2 shows the seasonal capacity market machinery was simplified — see E5 §4.** |
| Allocating Changes → Changes in Expenditures | `expenditures` |
| Allocating Changes → Changes in Revenue | `revenuebyentity`, `revenuebyisic` |
| Electricity Rates | `ratesOM`, `ratescapital`, `ratesother` |

## E4. Mapping for electricity policy pages (concept-only)

| Policy page | Implementation page anchor |
| --- | --- |
| `least-cost-dispatch.md` | Main doc, "Least Cost Dispatch" subsection (image `LeastCostDispatch`) |
| `clean-energy-standard.md` | Main doc, "CES Additions" + "CES and ZEC Revenue" subsections; cash doc, "Clean Electricity Standard Costs" |
| `renewable-portfolio-standard.md` | Same machinery as `clean-energy-standard.md` after the 4.0.5 refactor — both are now configurations of the unified `Clean Elec Requirement` framework. **Phase 3 should confirm both concept pages still read correctly.** |
| `ban-new-capacity.md` | Main doc, "Policy Mandated Capacity Additions and Retrofits" |
| `demand-response.md` | Main doc, "Demand Response" subsection; cash doc, `demandresponse` |
| `early-retirement-of-power-plants.md` | Main doc, "Economic, Policy-Driven, and Planned Retirements" |
| `grid-scale-electricity-storage.md` | Main doc, "Economic Storage Additions"; cash doc, `Batteries` / `batterygenerationsubsidies` |
| `increase-transmission.md` | Cash doc, "Transmission System Costs" |
| `nuclear-lifetime-extension.md` | Main doc, "Retirements" |
| `reduce-downtime.md` | Main doc, "Capacity Factors" |
| `reduce-soft-costs.md` | Main doc, "LCOE" sequence (cost component reduction) |
| `reduce-tnd-losses.md` | Main doc, "Calculating Hourly from Annual" (T&D loss factor in the demand-derivation chain); cash doc, "Distribution System Costs" |
| `subsidy-for-electricity-production.md` | Main doc, "CES and ZEC Revenue"; cash doc, `generationsubsidies` |
| `electricity-imports-exports.md` | Main doc, "Net Imports"; cash doc, `elecimportcash` |

## E5. Major change themes spotted in Phase 1 (preview for Phase 2)

These five themes already stand out from the variable-name diff and a couple of targeted greps. Phase 2 will deepen each, but they're noted here so staff can review the framing before equation-level drafting begins:

1. **`Clean Elec Requirement: {RPS, CES}` — new subscript.** A new top-level subscript range was added in 4.0.5. Many 4.0.4 variables named `... RPS ...` (e.g., `Actual RPS Qualifying Electricity Generation`, `Available Capacity After RPS Dispatch`, `Electricity Dispatch Required to Satisfy RPS`) were renamed to `... Elec Portfolio Std ...[Clean Elec Requirement]` in 4.0.5. Other variables retain `RPS` in their name but now sit *inside* the new subscript. **This is a structural change** affecting the whole framework around clean-electricity standards. The doc currently has both `clean-energy-standard.md` and `renewable-portfolio-standard.md` policy pages — Phase 3 must confirm both still read correctly as configurations of the new unified framework, and the main doc's "Clean Electricity Standard" subsection prose needs updating.
2. **Data center load (new).** `Adjusted Load Factors for Data Centers`, `BAU Data Center Load`, and likely related variables. New load category, probably feeds into the "Calculating Hourly Electricity Demand" subsection. The doc may need a new paragraph or a brief mention.
3. **Reliability machinery refactor.** Many "Seasonal Dispatchable Reliability" / "Seasonal Residual Reliability" / "Capacity Market Optimization Step Size for Seasonal X" variables removed; new `Binding Peak Hour for Clean Dispatchable Reliability`, `Binding Peak Hour for Reliability Additions` added. Affects "Reliability Additions" subsection of the main doc.
4. **Capacity market simplification.** `Capacity Market Price for Seasonal Dispatchable Reliability`, `Capacity Market Price for Seasonal Residual Reliability`, `Capacity Market Optimization Step Size for Seasonal Residual Reliability`, etc. removed in 4.0.5. The cash doc's "Capacity Market Costs" subsection probably needs updating; need to check what replaced these.
5. **Battery dispatch / charge-discharge refactor.** New `Battery Charge Parameters`, `Battery Charging Allocation`, `Battery Discharge Parameters`, `Battery Discharging Allocation`. Likely affects "Summing Charging and Discharging" subsection of the main doc.
6. **Economic-lifetime-based retirement** (likely a new policy lever). `BUCLfCR Boolean Use Capacity Lifetimes for Capacity Retirements`, `BGCL BAU Generation Capacity Lifetime`, `Capacity Retirements Based on Economic Lifetime` are all new. Affects "Economic, Policy-Driven, and Planned Retirements" subsection.
7. **EV battery integration / `AVCC Average Vehicle Charger Capacity`.** Cross-references the transport sector. Affects "EV Batteries" subsection of the main doc.
8. **Capacity construction split between generation and grid batteries.** New `BPMGBSA BAU Policy Mandated Grid Battery Storage Additions` and twin booleans for "this year" mandate-override toggles. Affects "Policy Mandated Capacity Additions and Retrofits" subsection.

## E6. Ambiguities / open questions for staff (electricity)

1. **`renewable-portfolio-standard.md` and `clean-energy-standard.md` overlap.** With the unified `Clean Elec Requirement: {RPS, CES}` framework in 4.0.5, both concept pages may need light updates to acknowledge they're configurations of the same machinery. Should they be merged, kept separate but cross-referenced, or left untouched if the policy concepts themselves haven't changed? Same kind of decision as `ev-mandate.md` vs `hydrogen-vehicle-mandate.md` in the transport pilot.
2. **`RPSDispatch.png` filename.** The image filename retains "RPS" but the underlying machinery now spans both RPS and CES. Phase 3 should decide whether to rename the screenshot (and the markdown reference) or leave the filename and update prose to clarify the broader scope.
3. **Capacity Market section.** The 4.0.4 cash doc has a "Capacity Market Costs" subsection. Phase 2 needs to confirm what replaced the seasonal-residual-reliability machinery — if the capacity market mechanism in the cash doc is now obsolete, that subsection may need to be rewritten or removed entirely.
4. **Data centers.** Are there user-facing assumptions (e.g., a separate `data-centers.md` policy page, or a top-level `assumptions.md` callout) that staff would expect new docs prose for? Phase 1 found nothing in the docs file list that obviously corresponds to data-center load.

## E7. Notes on scope

Given the change volume (~30 % of variables added/removed on each main view), the Phase 2 change list for electricity will be substantially larger than transport. I'll structure it the same way (themes 1-N, confidence flags), but staff should expect Phase 2 review of electricity to take noticeably more time than transport did.

---

*This file is project memory. Update or extend it (rather than rewriting) as later phases reveal new context. Sections covered so far: transportation (Phase 1-3 done), electricity (Phase 1 done). Other sectors will be appended as they enter Phase 1.*
