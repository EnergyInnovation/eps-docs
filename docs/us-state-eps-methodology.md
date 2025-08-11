State EPS Methodology
==============
**Updated: September 2024**

The state Energy Policy Simulators (EPS) account for emissions produced in the following sectors: electricity generation, building energy consumption, industrial energy consumption, industrial process emissions, agriculture process emissions, land use change, and transportation. Our primary sources are federal data sets from the Environmental Protection Agency (EPA), Energy Information Administration (EIA), and the National Renewable Energy Lab (NREL).

The information below details our basic modeling assumptions, data sources, and methodology by sector. Additionally, we include information on the business-as-usual (BAU) and Nationally Determined Contribution (NDC) scenario assumptions.

## Basic Model Assumptions
--------

- AR5 GWP Values
- Model runs from 2021-2050
- Policies can be applied starting in 2024
- State models account for funding and tax credits included in the Inflation Reduction Act.
- We have tried to incorporate the latest state policy but some specific sectoral policies may be missing, especially if they principally affect energy demand. All Clean Energy Standards (including electricity standards and renewable portfolio standards), Advanced Clean Cars, Advanced Clean Cars II, Advanced Clean Trucks, carbon pricing, and electric vehicle subsidies policies passed before August 2024 have been included in the model.
- State models include a 'Federal Policy Repeal and Rollback' scenario to model the repeal of the Inflation Reduction Act and select EPA rules affecting greenhouse gas emissions. Documentation on the policy settings included in this scenario is forthcoming.

The following information supplements the general EPS model information by summarizing sources for state energy consumption and emissions data in the state versions of the EPS tool.<sup>[1](#myfootnote1)</sup> 

## Data Sources Summary
--------
| Sector | Subsectors | Source |
|---|---|---|
| Electricity | In-state capacity and generation ; out of state imports | For capacity and generation: EIA's [Form 923](https://www.eia.gov/electricity/data/eia923/) and EIA's [Form 860](https://www.eia.gov/electricity/data/eia860/). <br/> For imports/exports: EIA's State Electricity Profiles (https://www.eia.gov/electricity/state/) |
| Building Energy Use | All energy use, all building components, residential and commercial buildings | EIA's [State Energy Data Systems](https://www.eia.gov/state/seds/seds-data-fuel.php?sid=NV) from 2021 | [NREL Electrification Futures Study - Reference Scenario](https://www.nrel.gov/analysis/electrification-futures.html) |  
|Industrial Energy Use | All fuel use for industrial sector |EIA's [Annual Energy Outlook tables on Industrial Energy Use](https://www.eia.gov/outlooks/aeo/tables_ref.php) & EIA's [State Energy Data Systems](https://www.eia.gov/state/seds/seds-data-fuel.php?sid=US) |  
| Industrial Process Emissions | Agriculture and industrial process emissions | [U.S. State-level Non-CO2 GHG Mitigation Report](https://www.epa.gov/global-mitigation-non-co2-greenhouse-gases/us-state-level-non-co2-ghg-mitigation-report) |  
| Land Use | Natural carbon sinks and sources (LULUCF) | EPA's [State GHG Emissions and Removals 2021 Inventory Report](https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals) |  
| Transportation | All energy use, vehicle miles | EIA's [State Energy Data Systems](https://www.eia.gov/state/seds/seds-data-fuel.php?sid=NV) from 2021, [Energy Information Association's Annual Energy Outlook tables on Industrial Energy Use](https://www.eia.gov/outlooks/aeo/tables_ref.php) & [NREL Electrification Futures Study - Reference Scenario](https://www.nrel.gov/analysis/electrification-futures.html) |

<br/>

## Methods by Sector  
--------
### Buildings

**Source**:Total building sector energy consumption data for all fuels was obtained from the U.S. Energy Information Association's State Energy Data System (SEDS) 2021 estimates for residential and commercial building energy use.<sup>[2](#myfootnote2)</sup>

**Methods**: To split total energy consumption among different building end uses, including heating, lighting, cooking, etc, we used the energy consumption estimates by end use from the 2017 NREL Electrification Futures Study.<sup>[3](#myfootnote3)</sup> The 2017 NREL study's reference scenario was also used to forecast future energy use. Total energy flows in the start year (2021) for each energy type (e.g. electricity, natural gas) are aligned to the SEDS most updated values for energy consumption in the residential/commercial buildings sectors.

**BAU Policy Assumptions**:NREL's reference scenario includes some business-as-usual fuel switching from gas to electric appliances and those assumptions are built into the model. It also includes some estimated improvements in technological efficiency. See the NREL study for more information.<sup>[4](#myfootnote4)</sup> As we rely on NREL data for scaling future consumption, state policy may not always be incorporated.

**Calibration**:Building sector energy consumption was checked against EIA's estimates for 2021. Emissions were calibrated using EPA's 2010 State Inventories and Rhodium's Climate Deck.<sup>[5](#myfootnote5),</sup><sup>[6](#myfootnote6)</sup>


### Industry Energy

**Source**: Total industry sector energy consumption data for all fuels was obtained from the U.S. Energy Information Administration's SEDS 2021 estimates for fuel type by industrial sector. <sup>[7](#myfootnote7)</sup>

**Methods**: To split SEDS value (fuel type by industrial sector) to industrial subsector, we proportion it using the product of (1) the EPS variable "BAU Output by ISIC Code," which gives monetized industrial output for each ISIC code, and (2) Energy Intensity Manufacturing Energy Consumption Survey (MECS) data<sup>[8](#myfootnote8)</sup>. We develop regional energy intensity multipliers that convert output to energy inputs, which are then scaled to align with the SEDS data.

**BAU Policy Assumptions**: We use the Annual Energy Outlook Reference Case to project annual growth rates for industrial energy use by industry.

**Calibration**: Industry sector energy consumption was checked against EIA's estimates for 2021. Emissions were calibrated using EPA's 2021 State Inventories and Rhodium's Climate Deck.<sup>[9](#myfootnote9),</sup><sup>[10](#myfootnote10)</sup> Note that differences between EPA and EPS findings for total energy-related industrial emissions may be due to different assumptions regarding the percent of industrial fuels used for non-energy purposes. A detailed breakdown of assumptions regarding non-energy fuel use can be found by downloading the state EPS model data.


### Industry Process

**Source**: Industrial process emissions estimates for CH4, N2O, and F-gasses are taken directly from EPA's State-level Non-CO2 Greenhouse Gas Mitigation Report.<sup>[11](#myfootnote11)</sup> The report includes forecasted estimates of both emissions and mitigation potential. CO2 process emissions data is taken from EPA's 2021 state inventory data and held constant through 2050.<sup>[12](#myfootnote12)</sup> Some customizations were required to address data issues flagged by EPA.

**Methods**: 2021 process emissions data is from EPA's 2021 state inventory and all future years are from EPA's State-level Non-CO2 Greenhouse Gas Mitigation Report. We hold CO2 process emissions  constant from 2021-2050. For iron and steel emissions, we found EPA data to be inconsistent when compared to state-level inventories. Iron and steel emissions were calculated by taking total US iron and steel GHG emissions and dividing them among states using facility level emissions reported in the FLIGHT tool.<sup>[13](#myfootnote13)</sup>

**BAU Policy Assumptions**: F-gas emissions are assumed to be reduced in compliance with the American Innovation and Manufacturing Act.<sup>[14](#myfootnote14)</sup>

**Calibration**: Emissions were calibrated using EPA's 2021 State Inventories and Rhodium's Climate Deck.<sup>[15](#myfootnote15),</sup><sup>[16](#myfootnote16)</sup>

### Electric Power  

**Source**: Electricity capacity is from EIA's 860 report on state generators from 2019.<sup>[17](#myfootnote17)</sup> Forecasted capacity retirements and new construction are from EIA's Electric Power Monthly.<sup>[18](#myfootnote18)</sup> Capacity factors are derived from EIA's 860 and EIA's 923 reports for existing power plants.<sup>[19](#myfootnote19)</sup> For new power plants, the model uses capacity factor data from Gridlab.<sup>[20](#myfootnote20)</sup> Estimated imports and exports are from EIA's State Electricity Profiles from 2021.<sup>[21](#myfootnote21)</sup>

**Methods**: Electricity generation is forecasted endogenously by the EPS model based on existing capacity, estimated demand, and electricity generation costs.

**BAU Policy Assumptions**:Individual state renewable portfolio standards are included in the state models. Federal tax credits (prior to IRA) are included as well.

**Calibration**:Emissions were calibrated using EPA's 2021 State Inventories and Rhodium's Climate Deck.<sup>[22](#myfootnote22),</sup><sup>[23](#myfootnote23)</sup>


### Transportation

**Source**:Total transportation sector energy consumption data for all fuels was obtained from the U.S. Energy Information Association's State Energy Data System 2021 estimates for transportation energy use.<sup>[24](#myfootnote24)</sup> Start year vehicles by vehicle type are from NREL's Electrification Futures Study.<sup>[25](#myfootnote25)</sup>

**Methods**: To split total energy consumption among different vehicle types, including passenger LDVs, buses, freight trucks, rail, etc, RMI used the energy consumption estimates by end use from the 2017 NREL Electrification Futures Study.<sup>[26](#myfootnote26)</sup> Future demand was forecasted using EIA's 2022 Annual Energy Outlook.<sup>[27](#myfootnote27)</sup> Note that natural gas use in the SEDS transportation data is predominately due to oil and gas pipeline transport and was reallocated to the industrial sector.

**BAU Policy Assumptions**: Fuel economy assumptions account for the most recent EPA/NHTSA tailpipe CO2 and fuel economy standards. If a state has an existing zero emissions vehicle subsidy, those subsidies are included in the BAU modeling. Vehicle sales are estimated using forecasted vehicle prices which results in some economic adoption of electric vehicles. Modeling includes states with ZEV sales requirements.

**Calibration**: Transportation sector energy consumption was checked against EIA's estimates for 2021. Emissions were calibrated using EPA's 2021 State Inventories and Rhodium's Climate Deck.<sup>[28](#myfootnote28),</sup><sup>[29](#myfootnote29)</sup>


### Land Use  

**Source**: Total land use emissions estimates are from EPA's 2021 State Inventory data.<sup>[30](#myfootnote30)</sup>

**Methods**: Values are held constant.

**BAU Policy Assumptions**: None

**Calibration**: Emissions were calibrated using EPA's 2021 State Inventories and Rhodium's Climate Deck.<sup>[31](#myfootnote31),</sup><sup>[32](#myfootnote32)</sup>

<br/>

## Inflation Reduction Act/ Bipartisan Infrastructure Law Assumptions  
--------
| Provision Location | Provision Name | Methods |
|---|---|---|
| 13101 | Extension and Modification of Credit for Electricity Produced from Certain Renewable Resources | The estimated total expenditures per kilowatt of plant capacity (CAPEX) was decreased for each state to account for the ITC and PTC. To account for the ITC, the state CAPEX was decreased by 35%, which represents the average percentage of project cost that ITC is expected to cover. To account for the PTC, we assume an average subsidy of 3.035 cents/kWh. The credits are applied to hydro, onshore wind, solar PV, geothermal, and offshore wind projects. It is also applied to nuclear projects beginning after 2025. |
| 13102 | Extension and Modification of Energy Credit | See 13101 |  
| 13103 | Increase in Energy Credit for Solar and Wind Facilities Placed in Service in Connection with Low Income Communities | We downscale the annual growth of 1.8 GW by the ratio of distributed solar in the state in 2020 to distributed solar nationally in 2020. We apply the increase in distributed solar MW beginning in 2023. |  
| 13104 | Extension and Modification of Credit for Carbon Oxide Sequestration | We found the percentage growth of carbon capture relative to BAU from a Rhodium study that evaluated extended 45Q tax credits to model the potential in industry. We then linearly phase in the growth rates from Rhodium's "Low Scenario" between 2023 and 2035 at the national level. For the industry sector, we increase direct air capture potential (metric tons/year) in the state by the ratio of state to national industrial energy use. |
| 13201 | Extensions of Incentives for Biodiesel, Renewable Diesel and Alternative Fuels | We assume that applicable fuelswill be 50% less carbon intensive and apply the following schedule in economy-wide MMT reductions for each state:<br/> • 2023: 0.03 <br/> • 2024: 0.06 <br/> • 2025: 0.09 <br/> • 2026: 0.11 <br/> • 2027: 0.05 |  
| 13202 | Extension of Second Generation Biofuel Incentives | See 13201 |  
| 13203 | Sustainable Aviation Fuel Credit |See 13201 |  
| 13204 | Clean Hydrogen | Beginning in 2023, shifted production share of natural gas reforming to electrolysis according to EI's growth across industries for their low scenario. |  
| 13301 | Extensions, Increase, and Modifications of Nonbusiness Energy Property Credit (25C) | We reference ACEEE research on the number of heat incremental heat pumps that would be deployed in a scenario with unconstrained rebates for heat pumps (through 2032, the last year of available credits). We adjust that value by the ratio of the $2,000 incentive cap for heat pumps in this section to ACEEE's assumed incentive value. We then calculate the average natural gas consumption per unit using data from EIA's Annual Energy Outlook and apply these savings in the model. Finally, we implement the additional electricity demand (calculated using the average efficiency of heat pumps).<br/> We then scale energy savings to the state by applying the fraction of state residential building consumption in 2020 (TBtu) to national residential building consumption in 2020 (TBtu). Natural gas and electricity values are mapped to urban and residential heating. |  
| 13302 | Residential Clean Energy Credit (25D) | At the national level, we directly implement ACEEE research on expected natural gas and electricity savings from this program. <br/> We then scale energy savings to the state by applying the fraction of state residential building consumption in 2020 (TBtu) to national residential building consumption in 2020 (TBtu). Electricity savings were mapped to urban and rural residential cooling. Natural gas savings were mapped to urban and rural residential heating. <br/> We also scale energy savings to the state aby applying the fraction of state commercial building consumptionin 2020 (TBtu) to national commercial building consumption in (2020). Electricity savings were mapped to commercial cooling and natural gas savings were mapped to commercial heating. |  
| 13303 | Energy Efficient Commercial Buildings Deduction (179D) | See 13302 |
| 13304 | Extensions, Increase, and Modifications of New Energy Efficient Home Credit (45L) | See 13302 |  
| 13401 | Clean Vehicle Credit | Added the weighted average difference between BAU and IRA low scenario to increase sales of passenger LDVs beginning in 2023. Low scenario taken from Energy Innovation's National Analysis. |  
| 13403 | Qualified Commercial Clean Vehicles | Applied credit caps directly to sale of all commercial vehicles. The credit caps are $7500 for freight LDVs and $40000 for freight HDVs. |  
| 13404 |Alternative Fuel Refueling Property Credit | Changes made: adjusted trans/BRAaCTSC to drop the shadow cost of in $/vehicle according to EI's low reduction from the Senate Reconciliation spreadsheet. No downscale of shadow costbecause it's a percentage reduction |  
| 13701 | Clean Electricity Production Credit | See 13101 |  
| 13702 | Clean Electricity Investment Credit | See 13101 |  
| 13703 | Cost Recovery for Qualified Facilities, Qualified Property, and Energy Storage Property | See 1301 |  
| 13704 | Clean Fuel Production Credit | See 13201 |  
| 50121 | Home Energy Performance-Based, Whole-House Rebates | At the national level, we directly implement ACEEE research on expected natural gas and electricity savings from this program, scaling by the ratio of actual funding to ACEEE's funding assumptions and adjusting so that total spend occurs across 2023-2031. <br/> We then scale energy savings to the state by applying the fraction of state residential building consumption in 2020 (TBtu) to national residential building consumption in 2020 (TBtu). Electricity savings were mapped to urban and rural residential cooling. Natural gas savings were mapped to urban and rural residential heating. |  
| 50122 | High-Efficiency Electric Home Rebate Program | At the national level, we directly implement ACEEE research on expected natural gas and electricity savings from this program, scaling by the ratio of actual funding to ACEEE's funding assumptions and adjusting so that total spend occurs across 2023-2031. <br/> We then scale energy savings to the state by applying the fraction of state residential building consumption in 2020 (TBtu) to national residential building consumption in 2020 (TBtu). Natural gas and electricity values are mapped to urban and residential heating. |

## NDC Scenario
The state models include a default version of the US Nationally Determined Contribution (NDC) scenario. This scenario includes the following policies:

### Policy Assumptions in the US NDC Scenario

| Sector  | NDC Scenario | 
| --- | --- |
| Electricity | • Clean Electricity Standard of 80% by 2030, 100% by 2035 <br/> • Accelerated deployment of storage, transmission, and demand response <br/> • No new construction of coal and natural gas plants <br/> • Power plant retirements eliminate coal by 2030 <br/> • Electricity Sector CCS applied to remaining gas plants run for occasional balancing and reliability by 2050 |  
| Buildings | <br/> • 100% electric new appliances and buildings by 2030 ("building component electrification") <br/> • 15% of existing buildings are retrofit by 2050, in addition to natural turnover <br/> • Efficiency improvement with ambition extended to 2050, plus additional efficiency improvements for building heating equipment and appliances |  
| On-Road Transportation | <br/> • 100% electric new light-duty vehicle, motorbike, and bus sales by 2035 <br/> • 100% electric new medium- and heavy-tuy truck sales by 2045 <br/> • 60% improvement in fuel economy standards for internal combustion engine light-duty vehicles by 2035, as well as a 50% improvement for buses, a 50% improvement for medium- and heavy-duty freight vehicles, a 60% improvement for aircraft, and a 25% improvement for rail and ships <br/> • 10% light-duty vehicle miles traveled reduced or shifted from BAU by 2050 <br/> • 3% reduction in truck freight transport by 2050 |  
| Industry | <br/> • 100% achievement of cement clinker substitution by 2030 <br/> • 100% achievement of HFC emissions reductions from the Kigali Amendment to the Montreal Protocol <br/> • 14% improvement in industrial energy intensity/efficiency by 2050 <br/> • 100% by 2050 shift from fossil fuels to a mix of electricity and hydrogen, varying by industrial potential for each fuel type, by 2050 <br/> • 10% reduction in cement demand and 15% reduction in iron and steel demand from improved material efficiency policies by 2050 <br/> • 100% achievement of potential emissions reductions from methane capture and destruction in natural gas and oil, coal mining, water, and waste sectors by 2030 <br/> • 100% of hydrogen is produced via electrolysis by 2050 <br/> • Industrial CO2 emissions captured and sequestered through CCS by 2050 for refining, chemicals, cement, iron and steel, and energy processing sectors |  
| Land use/ Agriculture | <br/> • 100% achievement of potential additional carbon uptake from afforestation/reforestation measures by 2030 <br/> • 100% achievement of improved soil measures, cropland measures, and livestock measures (such as requiring anaerobic digesters) by 2050 <br/> • 50% achievement of carbon reduction from improved forest management by 2050 |

Linear implementation of policy requirements unless noted otherwise starting in 2023.

## Federal Policy Repeal and Rollback Scenario
### Policy Assumptions in the Repeal Scenario

The state models now feature a Repeal scenario representing the potential emissions, economic, and health impacts of repealing federal policies. The scenario is measured against the Current Policies scenario, which includes the Inflation Reduction Act (IRA), the Infrastructure Investment and Jobs Act (IIJA) and the CHIPS and Science Act, as well as finalized rules from the U.S. Environmental Protection Agency. 
Guidance on the repeal documentation is available, [here](https://docs.energypolicy.solutions/repeal-documentation). 
Policies rolled back or repealed in the Repeal Scenario include the following:

| Inflation Reduction Act | 
|----------|
| 30D passenger vehicle tax credits | 
| 30D passenger vehicle tax credits |
| 45W commercial vehicle tax credits |
| 45Y/48E tax credits for clean electricity |
| 45U zero-emission nuclear power production tax credit |
| 45Q tax credits for carbon capture and sequestration |
| 45X advanced manufacturing production tax credit |
| 45V clean hydrogen production tax credit |
| Support for distributed solar (Solar for All program and 25D rooftop solar tax credit) |
| 30C alternative fuel vehicle refueling property tax credit |

| EPA Rules  |
|----------|
| 111 Clean Air Act rules, Mercury and Air Toxics standards, and Steam Electric Power Generating Effluent Guidelines for power plants |
| Tailpipe emission standards for light-, medium-, and heavy-duty vehicles (model years 2027 and later) |
| California’s waiver to set its own tailpipe emission standards under the Clean Air Act |
| Methane emission rules for oil and natural gas operations |

## State-level Policies Included in State Models
| Sector | Policies | State(s) |
|---|---|---|
| Electricity | Clean Energy and Electricity Standards/Plans | CA - SB 100 <br/> CO - Clean Energy Plan <br/> NC - Clean Energy Plan <br/> NJ - Executive Oder No. 28 <br/> NY - 10-Point Action Plan <br/> RI - Clean Energy Plan <br/> WI - Energy Plan and Executive Order #38 |
| Electricity | Geothermal | CO - HB23-1272|
| Buildings | Appliance and Equipment Energy and Efficiency Standards, and Energy Code | CA - Code of Regulations Title 20 <br/> CO - HB23-1161 and HB22-1362 <br/> MA - MA S9 <br/> MD - HB 772 <br/> MN - HF 3911 <br/> NH - NH Rev Stat § 339-G:3 <br/> NJ - A5160 <br/> NY - NY A 10439 and A3006 <br/> NV - AB 383 <br/> RI - S 0339A <br/> VT - 9 V.S.A. chapter 74 <br/> WA - Washington State 2021 Energy Code, Clean Buildings Performance Standard, and Appliance Efficiency Standards |
| Buildings | Building Performance Standard | CO - HB21-1286 <br/> MD - SB 528 <br/> NY - NYC Local Law 97 and Build Smart 2025 |
|Transportation | Low Carbon Fuel Standard | CA - SB 348 <br/> OR - SB 324 <br/> WA - Washington Clean Fuel Standard |
| Industry | Oil, Gas, Methane | CA - SB 613 <br/> CO - AQCC regulations 7 and 22, SB22-198 <br/> LA - LAC 43:XIX.103, 3503, 3507, 3509, and 3511 <br/> MA - 310 CMR 7.73 <br/> MD - COMAR 26.11.41 and COMAR 26.11.42 <br/> NM - 19.15.27 NMAC <br/> OR - DEQ 16-2021 <br/> PA - Regulation #7-580 <br/> WA - 173-408 WAC | 
| Industry | HFCs | CA - SB 1206 <br/> CO - AQCC Regulation 22 <br/> MA - 310 CMR 7.76 <br/> NJ - NJ A5583 <br/> WA - HB 1112, HB 1050 |
| Industry | Cement and Concrete | CA - SB 596 | 
| Industry | Industrial Facilities | CO - GEMM Phase I & II rulemaking, HB21-1272 |
| Industry | Hydrogen | CO - HB23-1281 |
| Industry | Supply Chain | CO - HB22 – 1355 |
| Land Use, Agriculture, Waste | Agriculture | WA - SB 5947 &  SB 6306 |




## About Us  
--------

The Energy Policy Simulator is a non-partisan, open-source, and peer-reviewed model. The EPS was developed to evaluate the impacts of climate and energy policies on emissions, costs and savings, and fuel consumption. It is used by policymakers to select and refine climate legislation and standards. For example, the EPS model was used to assess the impact of climate policies for the U.S. House Select Committee on the Climate Crisis.<sup>[33](#myfootnote33)</sup> EPS users input climate policies and the model then analyzes interacting policy impacts to forecast environmental and economic outcomes. The model generates a variety of data outputs including greenhouse gas emissions, criteria pollutant emissions, capital and operating cash flow changes, and macroeconomic changes to GDP and jobs. RMI and Energy Innovation Policy & Technology LLC® are releasing EPS models for all 48 contiguous U.S. states.

The EPS model is available for download online [here](https://us.energypolicy.solutions/docs/download.html).<sup>[34](#myfootnote34)</sup> Full documentation on methodology and assumptions are available online [here](https://us.energypolicy.solutions/docs/index.html).<sup>[35](#myfootnote35)</sup>

Contact Us  
----------

If you have questions about using the EPS, we recommend first watching our video series, available [here](https://us.energypolicy.solutions/docs/video-series.html).<sup>[36](#myfootnote36)</sup> For further information on the EPS, contact us at <policy@energyinnovation.org>. For more information on RMI analysis and our state advocacy support network contact us at <USAnalysis@rmi.org>.

The US state EPS models were developed as a partnership between Energy Innovation® and Rocky Mountain Institute (RMI), with RMI work supported by Bloomberg Philanthropies.

* * * * *

<a name="myfootnote1">1</a>: "Energy Policy Simulator Documentation," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://docs.energypolicy.solutions/.<br/>
<a name="myfootnote2">2</a>: "State Energy Data System (SEDS)," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/state/seds/.<br/>
<a name="myfootnote3">3</a>: "Electrification Futures Study: End-Use Electric Technology Cost and Performance Projections through 2050," National Renewable Energy Laboratory, 2017, https://www.nrel.gov/docs/fy18osti/71500.pdf.<br/>
<a name="myfootnote4">4</a>: "Electrification Futures Study: End-Use Electric Technology Cost and Performance Projections through 2050," National Renewable Energy Laboratory, 2017, https://www.nrel.gov/docs/fy18osti/71500.pdf.<br/>
<a name="myfootnote5">5</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote6">6</a>: "The Climate Deck," Rhodium Group, accessed January 5, 2023, https://rhg.com/data_story/climate-deck/.<br/>
<a name="myfootnote7">7</a>: "State Energy Data System (SEDS)," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/state/seds/.<br/>
<a name="myfootnote8">8</a>: "Manufacturing Energy Consumption Survey (MECS)," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/consumption/manufacturing/.<br/>
<a name="myfootnote9">9</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote10">10</a>: "The Climate Deck," Rhodium Group, accessed January 5, 2023, https://rhg.com/data_story/climate-deck/.<br/>
<a name="myfootnote11">11</a>: "U.S. State-level Non-CO2 Greenhouse Gas Mitigation Report," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/global-mitigation-non-co2-greenhouse-gases/us-state-level-non-co2-ghg-mitigation-report.<br/>
<a name="myfootnote12">12</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote13">13</a>: "Facility Level Information on GreenHouse gases Tool (FLIGHT)," U.S. Environmental Protection Agency, accessed January 5, 2023, https://ghgdata.epa.gov/ghgp/main.do?site_preference=normal.<br/>
<a name="myfootnote14">14</a>: "Phasedown of Hydrofluorocarbons: Establishing the Allowance Allocation and Trading Program under the American Innovation and Manufacturing Act," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/climate-hfcs-reduction.<br/>
<a name="myfootnote15">15</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote16">16</a>: "The Climate Deck," Rhodium Group, accessed January 5, 2023, https://rhg.com/data_story/climate-deck/.<br/>
<a name="myfootnote17">17</a>: "Form EIA-860 detailed data with previous form data (EIA-860A/860B)," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/data/eia860/.<br/>
<a name="myfootnote18">18</a>: "Electric Power Monthly," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/monthly/.<br/>
<a name="myfootnote19">19</a>: "Form EIA-923 detailed data with previous form data (EIA-906/920)," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/data/eia923/.<br/>
<a name="myfootnote20">20</a>: "The 2035 Report: Plummeting Solar, Wind, and Battery Costs Can Accelerate Our Clean Electricity Future," Goldman School of Public Policy, University of California Berkeley, June 2020, https://www.2035report.com/electricity/downloads/.<br/>
<a name="myfootnote21">21</a>: "State Electricity Profiles," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/state/.<br/>
<a name="myfootnote22">22</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote23">23</a>: "The Climate Deck," Rhodium Group, accessed January 5, 2023, https://rhg.com/data_story/climate-deck/.<br/>
<a name="myfootnote24">24</a>: "State Energy Data System (SEDS)," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/state/seds/.<br/>
<a name="myfootnote25">25</a>: "Electrification Futures Study: End-Use Electric Technology Cost and Performance Projections through 2050," National Renewable Energy Laboratory, 2017, https://www.nrel.gov/docs/fy18osti/71500.pdf.<br/>
<a name="myfootnote26">26</a>: "Electrification Futures Study: End-Use Electric Technology Cost and Performance Projections through 2050," National Renewable Energy Laboratory, 2017, https://www.nrel.gov/docs/fy18osti/71500.pdf.<br/>
<a name="myfootnote27">27</a>: "Annual Energy Outlook 2022," U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/outlooks/aeo/.<br/>
<a name="myfootnote28">28</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote29">29</a>: "The Climate Deck," Rhodium Group, accessed January 5, 2023, https://rhg.com/data_story/climate-deck/.<br/>
<a name="myfootnote30">30</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote31">31</a>: "State Greenhouse Gas Emissions and Removals," U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnote32">32</a>: "The Climate Deck," Rhodium Group, accessed January 5, 2023, https://rhg.com/data_story/climate-deck/.<br/>
<a name="myfootnote33">33</a>: "Congressional Climate Plan Is a 'Bet Your Country' Moment," Energy Innovation Policy & Technology LLC, July 28, 2021, https://energyinnovation.org/2021/07/28/hal-harveys-insights-and-updates-congressional-climate-plan-is-a-bet-your-country-moment/.<br/>
<a name="myfootnote34">34</a>: "Download the Energy Policy Simulator," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://us.energypolicy.solutions/docs/download.html.<br/>
<a name="myfootnote35">35</a>: "Energy Policy Simulator Documentation," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://us.energypolicy.solutions/docs/index.html.<br/>
<a name="myfootnote36">36</a>: "Energy Policy Simulator Video Series," Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://us.energypolicy.solutions/docs/video-series.html.<br/>
