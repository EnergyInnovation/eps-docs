EPS January 2025 Frozen Policies Scenario Guide for State Models
==============
**October 2026**

## Modeled Scenarios

Each U.S. State Energy Policy Simulator's business-as-usual (BAU) baseline represents **current policies** as they stood in October 2026, including the One Big Beautiful Bill Act (OBBBA), the U.S. Environmental Protection Agency (EPA) regulatory actions that followed it, and the administrative actions taken over 2025–2026, together with the state's own policies in effect at that time. This is the baseline against which all policy scenarios in the state models are measured.

Against that baseline, the state models also feature a **January 2025 Frozen Policies** scenario, representing the federal and state policy environment as it stood in January 2025 — before those legislative and regulatory changes. It includes the Inflation Reduction Act (IRA), the Infrastructure Investment and Jobs Act (IIJA), and the CHIPS and Science Act, along with the finalized EPA rules in effect at that time and the state tailpipe standards then covered by Clean Air Act §177 waivers.

The January 2025 Frozen Policies scenario serves as a counterfactual: comparing it against the current-policies baseline isolates the combined emissions, economic, and health impacts of the 2025–2026 changes.

## How the State Scenarios Differ from the National Scenario

The state models run the same January 2025 Frozen Policies counterfactual as the U.S. national model. The table below summarizes each modeled policy area: the **Current Policies** column describes each state model's business-as-usual baseline as of October 2026, the **January 2025 Frozen Policies** column describes the counterfactual, and the **State model treatment** column records how that policy is applied in the state models, which is one of:

- **Same as federal** — the national lever setting is applied to every state model without modification.
- **Scaled to state** — the national quantity is allocated across states, and each state model receives its own share.
- **State-specific** — the state model uses its own underlying data rather than any national quantity.
- **Not included** — the policy is not represented in the state scenarios.

Sections below cover only the policy areas whose state treatment differs from the national one. For everything else, the full methodology is on the [national scenario guide](january-2025-frozen-policies).

**State policies are largely held constant across both scenarios.** State-level policies — renewable and clean electricity standards, energy storage targets, building and appliance standards, oil and gas methane rules, electric vehicle rebates, and carbon pricing programs — are identical in the January 2025 Frozen Policies scenario and in the current-policies baseline. The single exception is the Congressional Review Act resolutions overturning the Clean Air Act §177 waivers: ACC II and ACT are enforced in the January 2025 Frozen Policies scenario and are not enforced under current policies. Every other difference between the two scenarios is a federal policy.

Dates below are statutory where a provision has one. Where a credit phased out on a trigger rather than a fixed date, the schedule shown is the one assumed in the model.

| Policy area | Current Policies (BAU, October 2026) | January 2025 Frozen Policies | State model treatment |
|---|---|---|---|
| **Forestry (OBBBA Sec. 10201)** | IRA forest management funding is rescinded, removing the outlays projected for 2026–2031. | IRA forest management funding remains in place. Outlays follow the schedule projected in CBO's [2022 estimate](https://www.cbo.gov/system/files/2022-08/hr5376_IR_Act_8-3-22.pdf) of the Act, which runs through 2031, and are then tapered to zero across 2032–2035. | **Not included.** Changes in forest management emissions are not modeled in the state scenarios. |
| **Clean vehicle credits (OBBBA Sec. 70502, 70503)** | The 30D clean vehicle credit and the 45W qualified commercial clean vehicle credit terminate for vehicles acquired after September 30, 2025. | Both credits remain available through December 31, 2032 — 30D and 45W for passenger LDVs, and 45W for freight LDVs and HDVs. | **Same as federal.** |
| **Residential clean energy credit (OBBBA Sec. 70506)** | The 25D residential clean energy credit terminates for expenditures after December 31, 2025. | 25D remains available at 30 percent through 2032, stepping down to 26 percent in 2033 and 22 percent in 2034 before expiring. | **Same as federal.** |
| **Clean electricity production and investment credits (OBBBA Sec. 70512, 70513)** | 45Y and 48E eligibility is shortened in line with the July 2026 start-construction date. Two-thirds of projects entering service in 2029 and one-third of those entering service in 2030 still receive the credit, as safe-harbored capacity is gradually brought online, in line with safe-harbored capacity estimates from Crux Climate and Wood Mackenzie. | 45Y and 48E remain available. The pre-OBBBA phase-out was tied to an emissions trigger rather than a fixed date, so the model assumes a schedule: each technology holds full credit until its phase-down begins, then steps to 75 percent, 50 percent, and zero. Credits end in 2039 for utility-scale solar PV; 2040 for geothermal; 2041 for onshore and offshore wind, solar thermal, and commercial distributed solar; and 2044 for nuclear and small modular reactors. The scenarios diverge only once current policies begin withdrawing each credit — 2028 for wind and solar, 2035 for geothermal, 2039 for nuclear. | **Same as federal.** |
| **Zero-emission nuclear power production credit (OBBBA Sec. 70510)** | The credit terminates in line with the schedule established in §112012(b), with no credits issued in 2033. Foreign-entity provisions are assumed not to affect collection of the credit, given the nature of the taxpayers producing nuclear power. | No change is modeled. The credit follows the same schedule as in the baseline. | **Same as federal.** |
| **OBBBA provisions not modeled (Sec. 10601, 60012, 70514, 70522)** | Agricultural conservation funding changes, rescission of the methane emissions and waste reduction incentive program, phase-out of the advanced manufacturing production credit, and restrictions on the carbon oxide sequestration credit. | These provisions are not in effect. | **Not included**, as in the national scenario. |
| **Solar for All** | The program is terminated by EPA and funds are frozen, with only [one percent](https://www.epa.gov/system/files/documents/2026-01/_epaoig_20260107-26-p-0008_cert.pdf) of obligated funds drawn down by grantees. | The program proceeds, delivering its expected 4 GW of distributed solar, entering service evenly across 2025–2029 at 800 MW per year. | **Scaled to state.** Each state receives its own share of the 4 GW, in proportion to EPA grant awards. See [Solar for All](#solar-for-all) below. |
| **Hydrogen (OBBBA Sec. 70511 and DoE actions)** | 45V is available only to facilities beginning construction before January 1, 2028. Two of the seven regional hydrogen hubs are cancelled, and DoE eases qualification of blue hydrogen for 45V. Following BNEF's April 2026 outlook, 92 percent of clean projects brought online by 2030 are blue hydrogen. | 45V is available to facilities beginning construction before January 1, 2033, and all seven hubs proceed. Low-carbon production reaches approximately 65 percent of U.S. output, with an approximately 80/20 blue/green split — grey/blue/green shares of roughly 35/52/13 percent in 2035. | **Same as federal.** The state models apply the national production technology shares to each state's hydrogen production. |
| **Power-sector regulation (CAA §111, MATS, ELGs)** | The GHG standards, MATS, and ELGs for electric power plants are reconsidered and repealed. Retirements follow baseline capacity projections from EIA's Electric Power Monthly forecast. | The rules remain in effect, with additional retirements taking place across 2025–2035. Plant retirements and retrofits follow EPA's [analysis](https://www.epa.gov/power-sector-modeling/analysis-final-greenhouse-gas-standards-and-guidelines) of the final rules sensitivity run. | **State-specific.** Each state model carries its own coal retirement and retrofit schedules, built from the plants in that state rather than from a share of a national total. See [Power-Sector Regulation](#power-sector-regulation) below. |
| **Onshore wind** | Administrative actions slow permitting and development, lowering the share of cost-effective capacity built from 80% to 10% for 2026–2030, then easing linearly back to 80% by 2033. | No administrative restriction on development; cost-effective capacity is built at the model's default share throughout. | **Same as federal.** Applied identically in every state model. |
| **Offshore wind** | New offshore capacity is limited to plants already under construction or completed. | Projects cancelled or halted citing federal action, or cancelled under a joint settlement with the administration, are restored to the build — approximately 20 GW entering service between 2028 and 2035. | **Scaled to state.** Each restored project is attributed to the state that hosts it, so a state model restores only its own projects. |
| **Federal tailpipe standards** | The Endangerment Finding and the federal tailpipe emissions standards are repealed, and the binding sales-share requirements are removed from the forecast. | The federal tailpipe standards remain in effect, using national vehicle sales shares from EPA's Regulatory Impact Assessments. | **Same as federal.** |
| **State tailpipe standards (CAA §177)** | Congressional Review Act resolutions overturn the waivers for state-level tailpipe emissions standards, so ACC II and ACT are not enforced. | The waivers stand, and ACC II and ACT are enforced. | **Same as federal.** This is the only state policy that differs between the two scenarios. |
| **Energy prices** | Fuel prices reflect EIA [AEO 2026](https://www.eia.gov/outlooks/aeo/)'s Alternative Electricity and Transportation case, which includes repeal of the EPA tailpipe and §111 rules. | Fuel prices largely reflect EIA AEO 2026's Counterfactual Baseline case, though not exactly — several are derived from that case rather than taken from it directly. | **Same as federal.** The state models use the national price levers unchanged. |
| **Offshore oil & gas leasing (OBBBA Sec. 50102)** | OBBBA-mandated leasing: not fewer than 30 Gulf sales through 2040 at 80 million acres each, and 6 Cook Inlet sales between 2026 and 2032 at 1 million acres each. Sales already held are entered at their actual leased acreage. | The 2024–2029 five-year OCS Proposed Final Program is implemented through 2029, with biannual 60-million-acre auctions continuing through 2050. | **Scaled to state, production only.** Incremental production is allocated to adjacent states; fuel price effects and royalties remain national. See [Oil & Gas Leasing](#oil--gas-leasing) below. |

Tax credit values in the state models are expressed in 2025 dollars; this is a units convention rather than a difference in scenario design.



## Solar for All

The national scenario models a full loss of the [expected 4 GW](https://www.epa.gov/greenhouse-gas-reduction-fund/solar-all-fast-facts) of distributed solar from the Solar for All program termination. Only [one percent](https://www.epa.gov/system/files/documents/2026-01/_epaoig_20260107-26-p-0008_cert.pdf) of the obligated funds were drawn down by grantees before the program was canceled by the EPA and funds were frozen.

### State allocation

The 4 GW program total is distributed across states in proportion to EPA grant awards. Every recipient's capacity is its award amount multiplied by a single national factor of 4,000 MW per $7.0 billion — equivalently, about $1.75 of grant per watt unlocked. Because the factor is uniform, the recipient allocations sum to the program total by construction. The $1.75/W figure is grant dollars per watt unlocked, not an installed cost, and the uniform factor deliberately ignores state-to-state differences in installed cost and capacity factor.

Nine of the sixty awards — roughly $1.38 billion, or about 791 MW — went to multistate, tribal, or nationwide grantees rather than to a single state. Each of these is apportioned across the jurisdictions it serves by 2020 Census population. Population weighting is a modeling convention rather than a reflection of how the grantees intended to deploy funds.

Award names, geographies, and amounts are taken from EPA's January 2025 Solar for All award listing; program totals are taken from EPA's Solar for All fact sheet.

The largest allocations go to Texas (194 MW), New York (190 MW), California (187 MW), Florida (156 MW), and Michigan (129 MW).

## Offshore Wind

The national scenario restores approximately 20 GW of offshore wind projects that were cancelled or halted citing federal actions, or cancelled as a result of a joint settlement with the administration, entering service between 2028 and 2035.

### State allocation

The state models use the same mechanism, with each project in the national mandated capacity construction schedule attributed to the state that hosts it. A state model therefore restores only the projects in its own waters, and states with no affected projects see no change from this policy.

## Oil & Gas Leasing

The national scenario compares two offshore leasing schedules: the 2024–2029 five-year OCS Proposed Final Program continuing through 2050 under the January 2025 Frozen Policies counterfactual, against the leasing required by OBBBA Sec. 50102 in the current-policies baseline. The full methodology, including the auction schedules, the treatment of sales already held, and the decision to set royalty pass-through to consumer prices to zero, is on the [national scenario guide](january-2025-frozen-policies).

### State allocation

Only the **production quantities** are downscaled to states. Fuel price effects and royalty treatment remain national, and the state models use the national price levers unchanged. State results are therefore not additive on the price side: summing the fuel-price impacts across states does not reproduce the national result, because a single state's incremental production does not move the price it faces.

Incremental offshore production is assigned to the adjacent state. Gulf of Mexico production is allocated by BOEM active lease count in the GOM region — Louisiana 80.1 percent, Texas 19.4 percent, Alabama 0.5 percent, Mississippi 0.1 percent. Cook Inlet production is assigned to Alaska, and because no Alaska state model is published, that production is not represented in any state result.

Among the state models, then, only Alabama, Louisiana, Mississippi, and Texas show non-zero incremental production, and every other state's is zero. Summing the state models falls short of the national incremental by the Cook Inlet share — about 19 percent of the cumulative incremental oil and about 6 percent of the cumulative incremental gas — which is why state results should not be added up to reconstruct the national total.

<!-- Cook Inlet shares above (18.5% of cumulative incremental oil, 6.1% of gas) were computed
     2026-09-23 from OilGasLeasing_Calculations_States_406.xlsx recalculated on the AK selector.
     National Gulf from that recalc matches the live State Data frozen-policy-jan25 files
     (LA+TX+AL+MS) exactly. -->

This allocation basis is used because the OBBBA baseline state runs that this scenario is differenced against use the same basis. Allocating the counterfactual on a different basis than its baseline would inject an allocation artifact into the state-level difference — apparent shifts of production between states that are pure bookkeeping. Lease count is an imperfect proxy: it weights all leases equally regardless of size or productivity, and a production- or acreage-weighted basis would be closer to the quantity actually being distributed.

One caveat matters for interpreting state results: federal offshore production is not represented in any state's business-as-usual baseline, which reflects onshore and state-waters production only. A state's own BAU is therefore not a meaningful denominator for this incremental production, and the change is reported in absolute energy terms rather than as a percentage of baseline production. Assigning offshore production to the adjacent state is a convention — the production lands onshore for processing and the economic activity accrues regionally — not a finding.

## Power-Sector Regulation

The national scenario models the aggregate effect of reconsidering and repealing the CAA §111 GHG standards, MATS, and the ELGs, with plant retirements and retrofits sourced from EPA's [analysis](https://www.epa.gov/power-sector-modeling/analysis-final-greenhouse-gas-standards-and-guidelines) of the final rules.

### State allocation

Nothing is allocated across states. Each state model carries its own pair of retirement schedules built from the units located in that state: one for the current-policies baseline, holding announced and planned retirements from EIA's Electric Power Monthly and EPA's National Electric Energy Data System, and one for the January 2025 Frozen Policies scenario, which adds the retirements EPA's IPM run attributes to the §111 rules. The two are then combined and capped so that cumulative retirements never exceed the 2024 fleet.

The two schedules differ only in coal. Only coal and lignite retirements are taken from the EPA run; the combined-cycle, combustion-turbine, oil- and gas-steam, and biomass retirements in that file reflect IPM's own economics rather than the rules, and the EPS calculates economic retirements itself, so including them would count the same closures twice.

Retirements attributed to the rules land in IPM's run years — 2030, 2035, 2040, 2045 — with one deliberate exception. IPM's 2028 run year stands for more than one calendar year, and placing the whole block in 2028 produced implausible single-year swings in states with large coal fleets. That block is therefore divided evenly across 2026, 2027, and 2028. Only the §111 retirements are spread this way; announced retirements keep their stated dates.

Coal units that IPM retrofits with carbon capture and later retires are routed to the coal-with-CCS categories rather than counted twice, since the model has already moved that capacity into the CCS stocks through the separate retrofit schedule. Those retirements appear in 2040 and 2045.

## Economic, Labor Market, and Health Outcomes

The state models translate policy into labor-market and health outcomes through the same machinery as the national model — the integrated input-output model and the COBRA-derived concentration-response multipliers — using each state's own input data. These are not scenario settings, so they are not listed in the table above; see the [national scenario guide](january-2025-frozen-policies) for the method.
