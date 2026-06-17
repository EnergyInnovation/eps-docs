EPS January 2025 Frozen Policies Scenario Guide
==============
**July 2026**

## Modeled Scenario

The U.S. Energy Policy Simulator features a **January 2025 Frozen Policies** scenario, representing the federal and state policy environment as it stood in January 2025 — before the legislative and regulatory changes enacted over 2025–2026. It includes the Inflation Reduction Act (IRA), the Infrastructure Investment and Jobs Act (IIJA), and the CHIPS and Science Act, along with the finalized U.S. Environmental Protection Agency (EPA) rules and state-level standards in effect at that time.

This scenario serves as a counterfactual. The model's business-as-usual baseline reflects current policies as of June 2026 — including the One Big Beautiful Bill Act (OBBBA) and subsequent regulatory actions — and the analysis compares that current-policies baseline against the January 2025 policy counterfactual to isolate the combined emissions, economic, and health impacts of the 2025–2026 changes.

This guide details how each modeled policy change is represented in the EPS.

## One Big Beautiful Bill Act (OBBBA)

To model OBBBA, we take a similar methodology to that used in prior analyses, laid out in Appendix A of our [House OBBBA report](https://energyinnovation.org/wp-content/uploads/Impacts-Of-The-One-Big-Beautiful-Bill-On-U.S.-Energy-Costs-Jobs-Health-And-Emissions_FINAL.pdf). However, we model only select provisions included in the final version of the bill that was passed into law. These include the following.

### Sec. 10201. Forestry
We follow a similar approach to our original OBBBA analysis, calculating the change in annual outlays due to rescissions and comparing it with the total IRA budget authority under each section. We then assign outlays to various mitigation opportunities from lowest to highest marginal cost using cost estimates from EPA's non-CO2 emissions report, and sum to estimate the change in forest management emissions over the program lifetime.

### Sec. 10601. Conservation
We do not model changes in agricultural conservation funding in this report.

### Sec. 50102. Offshore oil and gas leasing
We follow a similar approach to our original OBBBA modeling and substitute in actual leased acreage for the Big Beautiful Gulf 1 & 2 auctions and the Big Beautiful Cook Inlet auction. Unlike in the original OBBBA modeling, we do not model royalty rate cuts as producing pass-through reductions to consumer fuel prices. See the Oil & Gas Leasing section below for details.

### Sec. 60012. Rescission of funding for the methane emissions and waste reduction incentive program for petroleum and natural gas systems
We do not model this provision in this report.

### Sec. 70506. Termination of residential clean energy credit
In the original OBBBA modeling, we relied on forecasted changes in solar deployment from external modeling (AEO 2023 and an analysis from REPEAT). Here we instead endogenously model the loss of 25D tax credits for residential solar using the credit value and an elasticity of deployment with respect to solar incentives.

### Sec. 70510. Modifications of zero-emission nuclear power production credit
As in the original OBBBA modeling, we assume that the limited foreign entities provisions will have no impact on the collection of the credit, due to the nature of the taxpayers producing nuclear power. We assume the credit terminates in line with the schedule established in §112012(b), with no credits issued in 2032.

### Sec. 70511. Termination of clean hydrogen production credit
See the Hydrogen section below.

### Sec. 70512. Termination and restrictions on clean electricity production credit
We assume a shortening of wind and solar tax-credit eligibility in line with the July 2026 start-construction date. We assume 2/3 of projects that begin operation in 2029 and 1/3 of projects that begin operation in 2030 will receive the credit, as the stock of safe-harbored capacity is gradually brought online.

For 48E, we also endogenously model the loss of credits for commercial building installations using the credit value and an elasticity of deployment with respect to solar incentives.

### Sec. 70513. Termination and restrictions on clean electricity investment credit
Modeled together with the 45Y production credit; see Sec. 70512 above.

### Sec. 70514. Phase-out and restrictions on advanced manufacturing production credit
Unlike in the original OBBBA analysis, we do not model this provision here.

### Sec. 70522. Restrictions on carbon oxide sequestration credit
As in the original OBBBA analysis, we assume changes to this tax credit's structure — including foreign entities restrictions and transferability — will not restrict eligibility, and therefore do not model changes to CCS deployment here.

## Solar for All
We model a full loss of the [expected 4 GW](https://www.epa.gov/greenhouse-gas-reduction-fund/solar-all-fast-facts) of distributed solar from the Solar for All program termination. Only [one percent](https://www.epa.gov/system/files/documents/2026-01/_epaoig_20260107-26-p-0008_cert.pdf) of the obligated funds were drawn down by grantees before the program was canceled by the EPA and funds were frozen.

## Hydrogen
We model the impact of three changes to clean hydrogen production capacity deployment in parallel: OBBBA's early termination of the 45V tax credit for clean hydrogen; DoE's cancellation of two of the seven regional hydrogen hubs; and DoE's easing of the qualification of blue hydrogen for 45V credits.

We source pre-Trump production forecasts from Evolved Energy's [2024 Annual Decarbonization Perspective](https://www.evolved.energy/us-adp-2024) report, which found low-carbon production reaching approximately 65 percent of U.S. output. However, we believe electrolysis' share of clean production is too high under the Evolved forecast. Other 2024/2025 forecasts from [BloombergNEF](https://efiling.energy.ca.gov/GetDocument.aspx?tn=265044) (BNEF) and the [Export and Investment Fund of Denmark](https://ekfs-quiet-skunk.euwest01.umbraco.io/media/kfjjd5fm/20241220-investment-pipeline-for-low-carbon-hydrogen-master-v2.pdf) point toward an approximately 80/20 split of blue/green hydrogen production in the U.S. We apply this split to the 65 percent clean share to find grey/blue/green splits of approximately 35/52/13 percent in 2035.

Following the hydrogen policy changes of the last three years, we use BNEF's more recent [offtake and production estimates](https://efiling.energy.ca.gov/GetDocument.aspx?tn=265044) from BNEF's April 2026 [Hydrogen Supply Outlook Update](https://www.bnef.com/insights/38875). This update reflects many of the trends discussed above, wherein the number of eligible projects is stunted by the shorter timeline for tax credits and nearly all green hydrogen projects are eliminated. We assume 92 percent of clean projects brought online by 2030 are blue hydrogen.

## Power-sector Regulation
We model the aggregate effects of reconsideration and repeal of CAA §111 GHG Standards, MATS, and ELGs for electric power plants. Power plant retirements are sourced from an EPA [analysis](https://www.epa.gov/power-sector-modeling/analysis-final-greenhouse-gas-standards-and-guidelines) of the GHG Standards / MATS / ELG final rules sensitivity run. These replace baseline capacity retirements and retrofit projections from EIA's Electric Power Monthly forecast.

## Wind Restrictions
Administrative actions to limit development of renewables, especially onshore and offshore wind plants, have slowed deployment. For onshore wind, we lower the share of cost-effective capacity built in the model from 80% to 10% from 2026 to 2030, then ease the restriction linearly to 80% by 2033, under the assumption that subsequent administrations will be less hostile toward wind as it continues to decline in cost. For offshore wind, in the 2026 scenario we limit new capacity deployment to plants that are either under construction or have completed construction. In the January 2025 Frozen Policies scenario, on the other hand, we add in a number of projects that have either 1) been cancelled or halted citing federal actions as a reason, or 2) cancelled as a result of a joint settlement with the Trump administration. These projects would have added approximately 20 GW to the grid from 2028 to 2035.

## Transportation Policies
We model both the EPA's repeal of the Endangerment Finding and federal tailpipe emissions standards, and the passage of CAA §177 Congressional Review Act resolutions overturning approvals for state-level tailpipe emissions standards. The January 2025 Frozen Policies scenario uses national vehicle sales shares from EPA's Regulatory Impact Assessments. We remove the binding sales-share requirements from the 2026 forecast to represent repeal of the rules. We also enforce ACC II and ACT standards in the January 2025 Frozen Policies scenario.

## Energy Prices
The EPS tracks changes to the price of fuel associated with some policies, but it does not endogenously update the price of non-electricity fuels in response to supply and demand changes. For the purposes of this study, we source changes in prices for most fuels from EIA's [Annual Energy Outlook 2026](https://www.eia.gov/outlooks/aeo/), using the difference between two of its cases: the Counterfactual Baseline case and the Alternative Electricity and Transportation case (which includes the repeal of EPA tailpipe and §111 rules — our new baseline). For gasoline, we use these two cases to generate a long-run elasticity tying a change in demand to a change in price, then use the change in demand from our scenario to calibrate prices.

For natural gas, we translate the modeled change in power-sector gas demand between the BAU and policy scenarios into a price impact using price adders calculated from EPA IPM natural gas supply curves ([Table 8-8](https://www.epa.gov/power-sector-modeling/documentation-2023-reference-case)). To convert price changes in the power sector to other sectors (industrial, commercial, residential), we scale by the ratio of each sector's price to Henry Hub prices from EIA.

For natural gas and petroleum fuels, we layer in the modeled effects of the oil & gas leasing provisions in OBBBA; see the Oil & Gas Leasing section below.

Broader market conditions affecting prices over this period — such as global oil-market disruptions, the gas-turbine supply shortage, and rising data-center electricity demand — are not modeled as policies in this analysis; they are captured in the model's business-as-usual baseline.

## The Economy & Labor Market
The EPS translates the 2025/26 policies into labor-market effects through its integrated economic [input-output (I/O) model](https://docs.energypolicy.solutions/io-model). The model first computes the direct, first-order cash-flow changes each policy produces — the changes in the price or physical quantity of fuel, equipment, and labor purchased, together with associated taxes and subsidies. It then traces how government, households, and each industry re-spend those dollars (or make up the shortfall where cash flow falls), capturing the indirect activity along supplier chains and the induced activity from changed household and government spending. Applying industry-specific labor shares of output and wage rates to these output changes, the I/O model resolves the package into direct, indirect, and induced impacts on jobs, GDP, and employee compensation, disaggregated across economic categories and into union and non-union jobs. For the fuel-supplying industries we retain the EPS's separate energy-supplier accounting, in which both jobs and the change in employee compensation are tied to the physical quantity of fuel produced rather than to revenue, so that year-to-year price swings do not distort modeled employment. These macroeconomic results are fed back into the energy-demand sectors in the following time-step, allowing labor and GDP effects to influence subsequent-year emissions.

## Healthcare Costs
The EPS quantifies the change in health outcomes and associated costs that result from policy-induced changes in air pollution, as documented on the [Additional Outputs](https://docs.energypolicy.solutions/additional-outputs) page. In the U.S. model, we source concentration-response multipliers from EPA's [COBRA model](https://www.epa.gov/cobra). These data quantify the incremental number of health endpoints of various types (premature mortality, hospital admissions, etc.) that occur or are avoided when emissions of any of three pollutants tracked by the EPS — fine particulate matter (PM2.5), nitrogen oxides (NOx), and sulfur oxides (SOx) — from any particular sector are increased or decreased by one metric ton.

We then translate health endpoints to spending using unit values for economic valuation from the [COBRA user manual](https://www.epa.gov/system/files/documents/2024-06/cobra-user-manual-v5.1.pdf), Exhibit F-1. We use 2028 valuation rather than 2023 or 2018 because the EPS is a forward-looking model; since pollution increases most significantly from the 2030s on in this study, and economic valuations increase over time, these results should be considered conservative.

## Oil & Gas Leasing

### Offshore Leasing (OBBBA Sec. 50102)
In 2023, the Bureau of Ocean Energy Management (BOEM) published the [2024–2029 National Outer Continental Shelf Oil and Gas Leasing Proposed Final Program](https://www.boem.gov/sites/default/files/documents/oil-gas-energy/leasing/2024-2029_NationalOCSProgram_PFP_Sept_2023.pdf). The proposal included a total of three oil and gas lease auctions in the Gulf of Mexico over five years.

Section 50102 of the OBBBA requires not fewer than 30 lease sales in the Gulf of America through 2040 and not fewer than 6 lease sales in the Cook Inlet between 2026 and 2032. Each Gulf sale must offer not fewer than 80 million acres (or all available unleased acreage if less than 80 million is available), and each Cook Inlet sale must offer at least 1 million acres. Three sales have now occurred: [Big Beautiful Gulf 1](https://www.boem.gov/oil-gas-energy/big-beautiful-gulf-1-bbg1-oil-gas-lease-sale) (BBG1; December 10, 2025), which offered roughly 80 million acres and generated $300 million in high bids on 181 blocks; [Big Beautiful Gulf 2](https://www.boem.gov/oil-gas-energy/leasing/big-beautiful-gulf-2-bbg2-oil-gas-lease-sale) (BBG2; March 11, 2026), which offered approximately 15,000 unleased blocks and generated $47 million in high bids; and [Big Beautiful Cook Inlet 1](https://www.boem.gov/oil-gas-energy/national-program/big-beautiful-cook-inlet-bbc1-oil-and-gas-lease-sale) (March 2026), the first of six required Cook Inlet sales, which yielded no bids.

### Modeling Summary
We developed two scenarios to determine the incremental impact of expanded oil and gas drilling under OBBBA against the federal policy environment that prevailed before its enactment.

- **OBBBA Baseline (current policies):** Reflects offshore leasing at OBBBA-mandated levels, with the three completed sales (BBG1, BBG2, and BBC1) incorporated as actual events and semi-annual, 80-million-acre Gulf auctions and annual 1-million-acre Cook Inlet auctions continuing on the statutory schedule through 2040.
- **January 2025 Frozen Policies:** Assumes the 2024–2029 five-year offshore plan is implemented through 2029, and biannual, 60-million-acre auctions continue through 2050.

Our treatment of the royalty-rate change differs from the analytical approach in our original modeling of OBBBA (see Appendix C [here](https://energyinnovation.org/wp-content/uploads/Impacts-Of-2025-House-Reconciliation-Bill-On-U.S.-Energy-Costs-Jobs-Health-Emissions.pdf)), which treated reduced royalty rates as a tax cut on federal production with attendant price effects. On further analysis, we find that royalty rate cuts function primarily as a rent transfer to leaseholders rather than a mechanism for inducing additional production. Most federal wells are economic at prior royalty rates and would be drilled regardless. The peer-reviewed literature finds that U.S. oil and gas supply responds to price mainly through new drilling investment rather than output from existing wells, and that the resulting supply response takes months to years to come online ([Newell and Prest 2019](https://doi.org/10.5547/01956574.40.3.rnew); [Newell, Prest, and Vissing 2019](https://www.journals.uchicago.edu/doi/abs/10.1086/701531)). Modeling the royalty cut directly with long-run U.S. supply elasticities of 0.68 for oil and 0.28 for gas, Prest finds the induced production increase is too small to offset the direct revenue loss from lower rates ([Prest, Resources for the Future, 2025](https://www.resources.org/common-resources/if-then-new-cuts-to-oil-and-gas-royalty-rates-in-budget-reconciliation-will-reduce-federal-revenues/)) — implying a negligible effect on output and, in turn, on consumer prices. Because consumer prices respond to quantity changes rather than to producer-cost changes, this small induced production translates to a negligible price effect. We therefore set royalty pass-through to consumer prices to zero in this analysis.

### Results
We calculated the incremental change in production attributable to the expanded leasing required by OBBBA — that is, the difference between the OBBBA Baseline and the January 2025 Frozen Policies scenario — and fed this difference into the EPS. Oil production in the OBBBA Baseline is approximately five percent higher than in the January 2025 Frozen Policies scenario by 2050, with natural gas production approximately one percent higher. 92 percent of the incremental oil production and 97 percent of the incremental gas production comes from Gulf leases.

This incremental production lowers oil and gas prices in the OBBBA Baseline relative to the January 2025 Frozen Policies counterfactual, before accounting for demand-side effects. WTI prices are about 0.07 percent lower in 2030, with the difference widening to roughly 1.3 percent by 2050. Henry Hub prices are unchanged in 2030 but fall to about 2.4 percent below the counterfactual by midcentury. Overall, these price effects are small in absolute terms and far below typical year-to-year volatility. In the broader OBBBA Baseline, they are more than offset by larger increases in oil, natural gas, and petroleum product prices as demand shifts toward fossil fuels and away from electrification and low-cost renewable generation.

### Methodology
We begin by determining the number of leases in each scenario, applying the auction schedules defined in the Modeling Summary above. In the OBBBA Baseline this comprises the three completed sales plus the remaining 27 Gulf sales (2026–2040) and five remaining Cook Inlet sales (2027–2032) on the §50102 statutory schedule; the five sales in the 2024–2029 OCS Proposed Final Program are assumed to remain in place as well.

We then calculate production intensities to convert these land offerings to estimated lease sales. We source program area sizes from Table 5-2 in the [2023–2028 Proposed Program](https://www.boem.gov/sites/default/files/documents/oil-gas-energy/national-program/2023-2028_Proposed%20Program_July2022.pdf) and Table 11-2 in the [2017–2022 Proposed Program](https://www.boem.gov/sites/default/files/oil-and-gas-energy-program/Leasing/Five-Year-Program/2017-2022/2017-2022-OCS-Oil-and-Gas-Leasing-PFP.pdf), and source anticipated production levels from Table 5-2 in the former. This yields production intensity by area, which we divide by the number of lease sales proposed in each program area to yield the per-lease estimated ultimate recovery (EUR) per unit land area leased.

Next, we produce well-drilling profiles for new leases using BOEM data on the timeline of well completions for a given area of development. Typically, wells on leased land are drilled over a period of approximately 30 years, peaking after about 15 to 20 years. We take the average of the Low and High Production Scenarios from the BOEM data.

We then estimate production depletion profiles to reflect the varying amount of product produced over the lifetime of each well. For example, around half of an average well's total product is produced in the first year after drilling. We averaged production profiles from EIA's AEO 2021 and then used curve fitting to find decline parameters matching the average profile. Multiplying this depletion curve by the BOEM drilling profile and dividing by the average total number of drills results in the cumulative production profile that determines the share of EUR recovered by age of the lease.

Next, we reduce our calculated incremental production to account for rebound effects on state and private land. Data from [Resources for the Future](https://www.rff.org/publications/working-papers/supply-side-reforms-oil-and-gas-production-federal-lands/) indicates that 52 to 72 percent of emissions from increased production on public lands is offset by decreases in production elsewhere. 30 percent of this rebound effect is due to decreases in production on state and private land — i.e., other domestic production decreases. As a result, we reduce our estimated incremental production values by 19 percent (62 percent of 30 percent).

We then calculate the change in domestic fuel prices resulting from the incremental increase in production under the OBBBA Baseline relative to the January 2025 Frozen Policies counterfactual. To do so, we estimate the percent price impact per percent change in U.S. production using data from EIA's AEO 2025 Reference and High Oil and Gas Supply scenarios, computed year-by-year and averaged across the mid- to long-run horizon. A 10-percent increase in U.S. crude production corresponds to approximately a 4-percent decline in WTI prices; a 10-percent increase in U.S. natural gas production corresponds to approximately a 30-percent decline in Henry Hub prices. The much larger response for natural gas reflects the regionally segmented structure of North American gas markets compared with the globally integrated oil market.

Lastly, we reduce the cost of petroleum-derived fuels in line with the share of each fuel's cost that comes from crude oil — these shares range from approximately 40 to 60 percent. We combine these supply-driven fuel price changes with the demand-driven changes discussed above.

