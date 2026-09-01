State EPS Methodology
==============
**Updated: August 2026**

The state Energy Policy Simulators (EPS) account for emissions produced in the following sectors: electricity generation, building energy consumption, industrial energy consumption, industrial process emissions, agriculture process emissions, land use change, and transportation. Our primary sources are federal data sets from the Environmental Protection Agency (EPA), Energy Information Administration (EIA), and the National Renewable Energy Lab (NREL).

The information below details our basic modeling assumptions, data sources, and methodology by sector. Additionally, we include information on the business-as-usual (BAU) and Nationally Determined Contribution (NDC) scenario assumptions.

## Basic Model Assumptions
--------

- AR5 GWP Values
- Model runs from 2025-2050

The business-as-usual baseline reflects federal and state policy as currently enacted. Federal policy enters the models through the EIA Annual Energy Outlook 2026 Alternative Electricity and Transportation case, which carries the tax credit, efficiency standard and vehicle standard assumptions behind our demand and price forecasts; EIA's [documentation for that case](https://www.eia.gov/outlooks/aeo/) describes those assumptions in full. State policies, like renewable portfolio standards or zero-emission vehicle subsidies, are included whenever the model can represent them. See below for a comprehensive list of included state-specific policies.

## Data Sources Summary
--------

The state models are anchored to the most recent published state-level data for each sector. Energy demand is anchored to **EIA's State Energy Data System (SEDS) 2024**, the electric sector to **EIA Form 860 and Form 923 for 2024**, process emissions to the **EPA state greenhouse gas inventory (1990-2022)**, and all forecasts to the **EIA Annual Energy Outlook (AEO) 2026**, Alternative Electricity and Transportation case.

| Sector | Subsectors | Source |
|---|---|---|
| Electricity | Existing capacity, generation, and capacity factors | EIA's [Form 860](https://www.eia.gov/electricity/data/eia860/) and [Form 923](https://www.eia.gov/electricity/data/eia923/), 2024 (net summer capacity basis). Hourly profile shapes from NREL's [Cambium 2022](https://www.nrel.gov/analysis/cambium.html) Mid-Case dataset; annual capacity factors from observed Form 860/923 fleet performance |
| Electricity | Imports and exports | EIA's [State Electricity Profiles](https://www.eia.gov/electricity/state/), Table 10 |
| Electricity | Resource limits and build rates | NREL's [2024 renewable energy supply curves](https://www.nrel.gov/gis/renewable-energy-supply-curves) (onshore wind, offshore wind, solar PV, geothermal) and [Annual Technology Baseline 2024](https://atb.nrel.gov/); [EIA Form 860](https://www.eia.gov/electricity/data/eia860/) build history; EPA's [Integrated Planning Model](https://www.epa.gov/power-sector-modeling) documentation for geologic CO2 storage; EIA's [Annual Coal Report](https://www.eia.gov/coal/annual/); EPA's [Advancing Sustainable Materials Management](https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling) data; Census [population estimates](https://www.census.gov/programs-surveys/popest.html) |
| Electricity | Renewable portfolio and clean electricity standards | Lawrence Berkeley National Laboratory's [RPS and CES percentage tables](https://emp.lbl.gov/projects/renewables-portfolio); state statutes and public utility commission orders |
| Electricity | Distributed (behind-the-meter) solar | EIA's [Form 861M](https://www.eia.gov/electricity/data/eia861m/) net-metered PV capacity and [Form 861](https://www.eia.gov/electricity/data/eia861/) non-net-metered distributed PV, with growth from [AEO 2026](https://www.eia.gov/outlooks/aeo/) |
| Electricity | Data center load | [EPRI](https://www.epri.com/) state data center load estimates (2026), with sector assignment derived from EIA [Form 861](https://www.eia.gov/electricity/data/eia861/) retail sales by customer class |
| Building Energy Use | All energy use, all building components, residential and commercial buildings | EIA's [SEDS](https://www.eia.gov/state/seds/) 2024 (state totals by fuel); EIA's [Residential Energy Consumption Survey (RECS) 2020](https://www.eia.gov/consumption/residential/) and [Commercial Buildings Energy Consumption Survey (CBECS) 2018](https://www.eia.gov/consumption/commercial/) (end-use detail and intensities); BLS [QCEW](https://www.bls.gov/cew/) (commercial floorspace); Census [American Community Survey](https://www.census.gov/programs-surveys/acs) (households, urban/rural split); [NOAA climate normals](https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals); [AEO 2026](https://www.eia.gov/outlooks/aeo/) Tables 2, 4 and 5 (forecast) |
| Industrial Energy Use | All fuel use for industrial sector | EIA's [SEDS](https://www.eia.gov/state/seds/) 2024; EIA's [Manufacturing Energy Consumption Survey (MECS) 2022](https://www.eia.gov/consumption/manufacturing/), Tables 1.2, 2.2 and 3.2; BLS [QCEW](https://www.bls.gov/cew/) state-by-NAICS employment; EPA's [Greenhouse Gas Reporting Program](https://www.epa.gov/ghgreporting) facility data; EIA coal, oil and gas, and refinery series; [AEO 2026](https://www.eia.gov/outlooks/aeo/) industrial demand module |
| Industrial and Agricultural Process Emissions | Process CO2, CH4, N2O and F-gases; abatement cost curves | EPA's [State GHG Emissions and Removals](https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals) inventory (1990-2022) for levels; EPA's [U.S. State-level Non-CO2 GHG Mitigation Report](https://www.epa.gov/global-mitigation-non-co2-greenhouse-gases/us-state-level-non-co2-ghg-mitigation-report) July 2025 data annex for non-CO2 trajectories and marginal abatement cost curves |
| Land Use | Natural carbon sinks and sources (LULUCF) | EPA's [State GHG Emissions and Removals](https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals) inventory (1990-2022) |
| Transportation | All energy use, vehicle stocks, vehicle miles | EIA's [SEDS](https://www.eia.gov/state/seds/) 2024; [AEO 2026](https://www.eia.gov/outlooks/aeo/) transportation supplement tables 37, 39, 41 and 45-49; FHWA's [Highway Statistics](https://www.fhwa.dot.gov/policyinformation/statistics.cfm) (registrations by class, VMT); DOE's [Alternative Fuels Data Center](https://afdc.energy.gov/data) alternative-fuel vehicle registrations; [Alliance for Automotive Innovation](https://www.autosinnovate.org/) state electric vehicle sales shares; FAA, APTA, AAR and BTS counts for non-road modes |

## Methods by Sector
--------

Each sector below follows the same pattern. We start from the most recent published data on how much energy a state actually used, or how much pollution it actually emitted. We break that total into the categories the model needs — end uses, industries, vehicle types, power plant types. We then project it forward using national forecasts from EIA. Where a state's own data is good enough to use directly, we use it; where it is not, we use national or regional data adjusted to fit the state total.

### Buildings

**Source**: How much energy each state's homes and businesses use, by fuel, comes from EIA's State Energy Data System (SEDS) for 2024. The breakdown by activity — heating, cooling, lighting, water heating, appliances and so on — comes from two EIA surveys of actual buildings: the 2020 Residential Energy Consumption Survey (RECS) and the 2018 Commercial Buildings Energy Consumption Survey (CBECS). Future growth comes from EIA's Annual Energy Outlook (AEO) 2026, Alternative Electricity and Transportation case.

**Methods**: We build each state's starting point from the ground up, then check it against the state total EIA reports.

For homes, RECS tells us how much energy a typical household uses for each activity and fuel. RECS reports 40 states individually; for the rest we use the average of that state's census division. We multiply those per-household numbers by the number of households in the state, from the Census American Community Survey, and split the result between urban and rural homes. For commercial buildings, CBECS tells us energy use per square foot by activity, and we multiply that by an estimate of each state's commercial floorspace built from Bureau of Labor Statistics employment data by industry. Heating and cooling are adjusted for how cold or hot each state actually is, using NOAA climate data. Finally, every number is scaled proportionally so that each state's total for each fuel matches what SEDS reports. Two things are handled separately rather than being buried in the buildings total: electricity used by data centers, and electricity produced by rooftop solar. The model adds both through their own inputs.

To project forward, each activity-and-fuel combination grows at its own national rate from AEO 2026, adjusted for whether a state's population and household count are growing faster or slower than the country as a whole.

**BAU Policy Assumptions**: The AEO forecast already includes federal appliance and equipment standards, steady improvement in equipment efficiency, and some switching from gas to electric appliances that is happening anyway. State-level appliance standards, building energy codes and building performance standards are entered as policies in the model rather than being built into this baseline.

**Calibration**: Each state's starting energy use by fuel matches SEDS 2024 exactly, because we scale it to match. Emissions are compared against EPA's state greenhouse gas inventory. One caveat worth knowing: the models start in 2025, but 2024 is the most recent year EIA has published, so the starting point carries 2024 energy use. We will update this when EIA publishes 2025.

### Industry Energy

**Source**: How much energy each state's industry uses, by fuel, comes from SEDS 2024. The split across specific industries comes from EIA's 2022 Manufacturing Energy Consumption Survey (MECS) combined with Bureau of Labor Statistics employment data. Individual large facilities come from EPA's Greenhouse Gas Reporting Program. Future growth comes from AEO 2026, Alternative Electricity and Transportation case.

**Methods**: SEDS reports one industrial total per state per fuel. Our job is to divide that total among the 25 industries the model tracks.

For manufacturing, MECS tells us how much energy each industry uses per unit of activity, by region of the country. We apply those rates to each state's employment in that industry, then scale the results so they add back up to the SEDS state total. Industries MECS does not survey — mining, agriculture, construction, water and waste treatment, and pipelines — are built instead from SEDS series, EIA production data, and the Economic Census. Where a single large plant accounts for much of a state's energy use in an industry, we use that plant's own reported data from EPA instead of dividing up a state total; this is how coal and natural gas use is set for the heaviest industries, and how cement and steel production are measured. MECS also tells us how much of each fuel is burned for energy versus used as a raw material — plastics made from natural gas, for example — and the model needs both numbers. Data center electricity is assigned to industry in states whose utilities bill data centers as industrial customers, and to commercial buildings everywhere else.

**BAU Policy Assumptions**: Growth rates by industry and fuel come from the AEO 2026 forecast.

**Calibration**: Each state's starting industrial energy use by fuel matches SEDS 2024 exactly. Emissions are compared against EPA's state inventory. As in earlier versions, EPA and EPS totals for industrial emissions can differ because of different assumptions about how much industrial fuel is used as raw material rather than burned. Those assumptions are visible in the model's input data.

### Industry Process

Some industrial emissions come from chemical reactions rather than from burning fuel — the carbon dioxide released when limestone is turned into cement, for example, or the methane that escapes from a coal mine. Those are covered here; emissions from burning fuel are covered in the section above.

**Source**: Two EPA products. Process carbon dioxide comes from EPA's State GHG Emissions and Removals inventory, which now covers 1990 through 2022. Methane, nitrous oxide and fluorinated gases, along with estimates of how much of each can be cut and at what cost, come from EPA's State-level Non-CO2 Greenhouse Gas Mitigation Report, July 2025 edition.

**Methods**: Carbon dioxide is taken straight from the inventory's non-combustion categories and assigned to the matching industry in the model — cement and lime, steel, glass, aluminum, chemicals, coal mining, waste incineration, oil and gas systems, and agricultural liming and fertilizer use.

For the other gases we use EPA's mitigation report for the detail and projection, and the inventory for the level: emissions are scaled so each state's total by gas matches the 2022 inventory. Fluorinated gases and steel emissions previously came from other sources and now come from the inventory directly. Local air pollutants, which neither EPA product reports by state, are estimated from national totals using each state's share of industrial natural gas use. The abatement estimates in EPA's report are sorted into the price ranges the model uses and matched to the policy each belongs to.

**BAU Policy Assumptions**: Fluorinated gas emissions fall in line with the [American Innovation and Manufacturing Act](https://www.epa.gov/climate-hfcs-reduction), and current federal standards for oil and gas methane and for landfills are included. Because EPA's baseline already assumes those rules are followed, the measures they require no longer appear as available abatement, which keeps the model from counting the same emission cut twice.

**Calibration**: Each state's totals by gas match EPA's 2022 inventory, because we scale them to match.

### Electric Power

**Source**: Existing power plants — what they are, how big, how old, and when they are scheduled to close — come from EIA Form 860 for 2024. How much each generated, and how hard each was run, come from EIA Form 923 for 2024. Hourly load and generation profiles for every type of plant come from NREL's Cambium dataset. Electricity traded between states comes from EIA's State Electricity Profiles. How much wind, solar and geothermal each state could build, and how well new plants perform, come from NREL's 2024 supply curves and 2024 Annual Technology Baseline. State clean electricity and renewable requirements come from Lawrence Berkeley National Laboratory's tracking tables, checked against the statutes themselves.

**Methods**: The model decides for itself which plants run and which get built, based on the plants that exist, how much electricity is needed, and what each plant costs to run. We supply the data behind those decisions: each state's existing fleet, hourly load and generation profiles, how hard each type of plant actually ran, how much new wind, solar and geothermal the state could physically build, and how fast it has added capacity in the past.

**BAU Policy Assumptions**: State renewable portfolio standards and clean electricity standards are included, with their required percentages taken from LBNL and checked against statute. Each requirement starts from the share of clean electricity that state already generates, so that a target written for 2040 does not act as though it applies in 2025. Federal tax credits under current law are included, as are state restrictions on building new coal plants.

**Calibration**: First-year generation and capacity by plant type are compared against EIA Forms 923 and 860, electricity sales against SEDS, and emissions against EPA's state inventory.

### Transportation

**Source**: How much fuel each state's vehicles use comes from SEDS 2024. National figures for how many vehicles of each type exist, how far they drive, and how much fuel they use come from AEO 2026. State detail comes from state data: vehicle registrations and miles driven from the Federal Highway Administration, alternative fuel vehicle counts from the Department of Energy's Alternative Fuels Data Center, and aircraft, transit, rail and marine counts from the relevant federal and industry sources. Electric vehicle sales shares by state come from the Alliance for Automotive Innovation, the only published source for the share of *new* vehicle sales that are electric in each state, as opposed to the share of vehicles on the road.

**Methods**: Starting vehicle counts are built from state data directly: registrations by vehicle class from FHWA, electric and plug-in hybrid counts from the Alternative Fuels Data Center, and gasoline vehicles as whatever is left over. Fuel use is built from national figures for vehicle counts, miles driven and fuel economy, divided among states using registrations and miles driven, then scaled so each state's total by fuel matches SEDS. For modes where the national forecast does not break vehicles out by technology — rail, ships, motorbikes and buses — we carry forward the detail from the national model. As in earlier versions, most of the natural gas that SEDS reports under transportation is fuel burned to push oil and gas through pipelines, so we move it to the industrial sector.

**BAU Policy Assumptions**: Fuel economy reflects the most recent EPA and NHTSA tailpipe and fuel economy standards. State zero-emission vehicle sales requirements are no longer included: neither the Advanced Clean Cars nor the Advanced Clean Trucks program is in the baseline, following the 2025 federal action withdrawing the authority states relied on to enforce them. Existing state electric vehicle incentives are included, as are the clean fuel standards in California, Oregon, Washington and New Mexico. Vehicle purchases also respond to projected vehicle prices, so the model shows some electric vehicle adoption on cost grounds beyond what any policy requires.

**Calibration**: Each state's starting fuel use matches SEDS 2024 exactly. Emissions are compared against EPA's state inventory.

### Land Use

**Source**: Carbon absorbed and released by forests, farmland and other land comes from EPA's State GHG Emissions and Removals inventory, covering 1990 through 2022.

**Methods**: Values are held constant at the most recent inventory year through 2050.

**BAU Policy Assumptions**: None.

**Calibration**: Compared against EPA's state inventory.

## State-level Policies Included in State Models
| Sector | Policies | State(s) |
|---|---|---|
| Electricity | Clean Energy and Renewable Portfolio Standards | CA - SB 1020 <br/> CO - SB 19-236 <br/> CT - Public Act 25-173 (SB 4) <br/> DE - SB 33 <br/> IL - SB 2408 <br/> MA - S.9 <br/> MD - Executive Order 01.01.2024.19 <br/> ME - LD 1868 <br/> MI - SB 271 <br/> MN - HF 7 <br/> MO - Mo. Rev. Stat. § 393.1020 <br/> NH - N.H. Rev. Stat. Ann. § 362-F <br/> NJ - Executive Order 315 <br/> NM - 17.9.571 NMAC <br/> NV - SB 358 <br/> NY - S6599 (Climate Leadership and Community Protection Act) <br/> OH - HB 6 <br/> OR - SB 1547 <br/> PA - Pa. Cons. Stat. tit. 66 § 2814 <br/> RI - HB 7277A <br/> VA - SB 1284 <br/> VT - Act 179 <br/> WA - SB 5116 <br/> WI - Executive Order 38 |
| Electricity | Distributed Generation Carve-out | AZ - distributed renewables carve-out (4.5% of retail sales by 2025) <br/> VT - distributed renewables carve-out (5.8% by 2025, 20% by 2035) |
| Electricity | Coal Retirements | CO - Comanche Unit 3 retirement (Xcel Energy, by 2031) <br/> WA - SB 5116 (100% coal phase-out by 2025) |
| Electricity | Energy Storage Targets | IL - Public Act 104-0458 (SB 25), 3 GW by 2030 <br/> MI - SB 271, 2,500 MW by 2030 <br/> NJ - A3723, 2,000 MW by 2030 <br/> NY - CASE 18-E-0130, 6,000 MW by 2030 <br/> RI - S 2499 A, 90 MW by 2026 / 195 MW by 2028 / 600 MW by 2033 <br/> VA - HB895, 16 GW by 2045 |
| Buildings | Building Performance Standards | CO - HB 25-1269 (Building Performance Colorado) <br/> MD - SB 528 (Building Energy Performance Standards) <br/> WA - Clean Buildings Performance Standard |
| Buildings | Appliance and Equipment Efficiency Standards | MA - MA S9 <br/> MD - HB 772 <br/> NH - NH Rev Stat § 339-G:3 <br/> NJ - A5160 <br/> NY - NY A 10439 <br/> RI - S 0339A <br/> VT - 9 V.S.A. chapter 74 <br/> WA - Appliance Standards (2022) |
| Buildings | All-Electric Buildings | CA - 2025 Building Energy Efficiency Standards (2022 Scoping Plan Reference Scenario) |
| Buildings | Lighting Standard | MN - Clean Lighting Bill |
| Buildings | Data Center Bans and Moratoriums | NY - Executive Order No. 62 |
| Industry | Oil, Gas, Methane | CA - SB 1137 <br/> CO - Regulation Number 7 <br/> LA - LAC 43:XIX.103, 3503, 3507, 3509, and 3511 <br/> MA - 310 CMR 7.73 <br/> MD - COMAR 26.11.41 <br/> NM - 20.2.50 NMAC <br/> NY - 6 NYCRR Part 203 <br/> PA - Regulation #7-580 |
| Industry | Industrial Emissions Regulation | CO - GEMM I and II |
| Transportation | Electric Vehicle Rebates | CA - Consumer Assistance Program <br/> CO - Vehicle Exchange Colorado (VXC) Program <br/> CT - Connecticut Hydrogen and Electric Automobile Purchase Rebate (CHEAPR) Program <br/> DE - Delaware Clean Vehicle Rebate Program <br/> IL - Electric Vehicle Rebate Program <br/> MA - Ride Clean Mass (MOR-EV) <br/> ME - Off-Peak Charging Electric Vehicle Rebates <br/> NJ - Charge Up New Jersey <br/> NY - Drive Clean Rebate <br/> PA - Alternative Fuel Vehicle Rebate Program <br/> RI - DRIVE+ Program |
| Transportation | Low-Emission Vehicle (LEV) Standards | CA (originating standard), adopted by CO, CT, DE, MA, MD, ME, MN, NJ, NM, NV, NY, OR, PA, RI, VA, VT, WA - Advanced Clean Cars I / LEV III GHG standard, converted to an equivalent mpg fuel-efficiency standard |
| Cross Sector | Carbon Pollution Pricing | CA - Cap-and-Trade Program <br/> CO - AQCC Regulation Number 27, Part D <br/> CT, DE, MA, MD, ME, NH, NJ, RI, VT - Regional Greenhouse Gas Initiative (RGGI) <br/> NY - RGGI (developing an economywide cap-and-invest program) <br/> OR - Climate Protection Program <br/> WA - Cap-and-Invest Program (HB 1975) |

## About Us  
--------

The Energy Policy Simulator is a non-partisan, open-source, and peer-reviewed model. The EPS was developed to evaluate the impacts of climate and energy policies on emissions, costs and savings, and fuel consumption. It is used by policymakers to select and refine climate legislation and standards. For example, the EPS model was used to assess the impact of climate policies for the U.S. House Select Committee on the Climate Crisis.<sup>[2](#myfootnote2)</sup> EPS users input climate policies and the model then analyzes interacting policy impacts to forecast environmental and economic outcomes. The model generates a variety of data outputs including greenhouse gas emissions, criteria pollutant emissions, capital and operating cash flow changes, and macroeconomic changes to GDP and jobs. RMI and Energy Innovation Policy & Technology LLC® are releasing EPS models for all 48 contiguous U.S. states.

The EPS model is available for download online [here](https://us.energypolicy.solutions/docs/download.html).<sup>[3](#myfootnote3)</sup> Full documentation on methodology and assumptions are available online [here](https://us.energypolicy.solutions/docs/index.html).<sup>[4](#myfootnote4)</sup>

Contact Us  
----------

If you have questions about using the EPS, we recommend first
watching our video series, available [here](https://us.energypolicy.solutions/docs/video-series.html).<sup>[5](#myfootnote5)</sup>
For further information on the EPS, contact us at
[policy@energyinnovation.org](mailto:policy@energyinnovation.org).
For more information on RMI analysis and our state advocacy
support network contact us at
[USAnalysis@rmi.org](mailto:USAnalysis@rmi.org).

The US state EPS models were developed as a partnership between Energy Innovation® and Rocky Mountain Institute (RMI), with RMI work supported by Bloomberg Philanthropies.

* * * * *

<a id="myfootnote1">1</a>: "Energy Policy Simulator Documentation," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://docs.energypolicy.solutions/.<br/>
<a id="myfootnote2">2</a>: "Congressional Climate Plan Is a 'Bet Your Country' Moment," Energy Innovation Policy & Technology LLC, July 28, 2021, https://energyinnovation.org/2021/07/28/hal-harveys-insights-and-updates-congressional-climate-plan-is-a-bet-your-country-moment/.<br/>
<a id="myfootnote3">3</a>: "Download the Energy Policy Simulator," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://us.energypolicy.solutions/docs/download.html.<br/>
<a id="myfootnote4">4</a>: "Energy Policy Simulator Documentation," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://us.energypolicy.solutions/docs/index.html.<br/>
<a id="myfootnote5">5</a>: "Energy Policy Simulator Video Series," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://us.energypolicy.solutions/docs/video-series.html.<br/>
