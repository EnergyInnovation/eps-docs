EPS Repeal Scenario Guide
==============
**April 21, 2025**
## Modeled Scenario
The US national and state models now feature a Repeal scenario representing the potential emissions, economic, and health impacts of repealing federal policies. The scenario is measured against the Current Policies scenario, which includes the Inflation Reduction Act (IRA), the Infrastructure Investment and Jobs Act (IIJA) and the CHIPS and Science Act, as well as finalized rules from the U.S. Environmental Protection Agency, including oil and gas methane standards; tailpipe CO2 standards for light-, medium-, and heavy-duty vehicles; and power plant CO2, mercury, and effluent rules. It also includes any state-level renewable portfolio or clean energy standards; state carbon pricing schemes; building electrification, appliance, and efficiency standards; low carbon fuel standards; EV rebates and subsidies; and adoption of Advanced Clean Cars I and II and Advanced Clean Trucks.

This guide details how each of the Repeal Scenario model settings correspond to individual policies. Users exploring variations of the Repeal Scenario can start with the full scenario available on the publicly available web application, then toggle off any policy settings they would like to maintain rather than repeal. To toggle off policy settings, navigate to the policy names identified below and move the slider bar to a value of 0 or OFF. The value selected in the policy slider bar represents the maximum policy setting over the course of the model run (with the values in all other model years set by the *Customize Implementation Schedule* dropdown for that policy). **A value of 0 represents no policy impact relative to the Current Policies scenario.**

Alternatively, users can refer to the settings from any of the policies outlined below to help build a new scenario – for example if they want to examine the impact of only one or two of the modeled provisions. To do this, users should copy in both the slider bar settings for the policies of interest and the policy implementation schedule values, which can be found under each policy’s *Customize implementation schedule* feature.

The Current Policies and Repeal scenarios do not capture every provision of the Inflation Reduction Act, though we believe we have included all components that, standalone, have a material effect on emissions and spending. For a full accounting of the methodology for the Inflation Reduction Act in both scenarios, see the [Appendix](https://energyinnovation.org/wp-content/uploads/IRA-Repeal-Update-March-2025-Appendix-A-FINAL.pdf) to EI’s Inflation Reduction Act Repeal report. 

## Inflation Reduction Act
### 30D passenger vehicle tax credits
Passenger vehicle tax credits are modeled with the EPS Transportation policy *Passenger Vehicle Subsidy* for the *Cars and SUVs* vehicle type. The Repeal Scenario settings are negative because the incentive per vehicle is less than in the Current Policies scenario. The Repeal Scenario values represent a weighted average tax credit each year based on what fraction of new passenger car and SUV sales would meet the applicability and eligibility requirements for the 30D credit. In addition, the Repeal Scenario value for passenger Cars and SUVs includes the 45W tax credit for the share of new electric vehicles that are leased (see below). Because roughly 40 percent of new electric vehicles are now leased, and because the 30D credits have more stringent applicability and eligibility requirements than the 45W credits, the 45W contribution to the weighted average tax credit value used in the Repeal Scenario is larger than the 30D contribution.

If you wish to turn off only 30D credit repeal assumptions and not modify 45W tax credits for commercial vehicles, be sure to leave the checkboxes checked for only *Cars and SUVs* before moving the policy slider bar and implementation schedule values to those shown in the *Modeling 45W repeal only* case below. To turn off both 30D and 45W tax credits for passenger Cars and SUVs, move the policy slider bar to a value of $0. A value of 0 represents no policy impact relative to the Current Policies scenario.

|                |Policy Slider Bar Setting for Passenger Cars and SUVs|
|----------------------------|:---------------------------------------:|
| Modeling 30D repeal only             | -$1164 |
| Modeling 45W repeal only                      | -$2306 |

| Year | Implementation Schedule Value: Modeling 30D Repeal Only | Implementation Schedule Value: Modeling 45W Repeal Only |
|------|----------------------------------------------------------|----------------------------------------------------------|
| 2021 | 0%                                                       | 0%                                                       |
| 2024 | 0%                                                       | 0%                                                       |
| 2025 | 100%                                                     | 100%                                                     |
| 2026 | 86.6%                                                    | 100%                                                     |
| 2027 | 27.0%                                                    | 100%                                                     |
| 2028 | 37.2%                                                    | 100%                                                     |
| 2029 | 48.0%                                                    | 100%                                                     |
| 2030 | 59.5%                                                    | 100%                                                     |
| 2031 | 70.4%                                                    | 100%                                                     |
| 2032 | 81.7%                                                    | 100%                                                     |
| 2033 | 0%                                                       | 0%                                                       |
| 2050 | 0%                                                       | 0%                                                       |


### 45W commercial vehicle tax credits
Commercial vehicle tax credits for leased passenger vehicles are modeled as part of the EPS Transportation policy *Passenger Vehicle Subsidy* for the *Cars and SUVs* vehicle type (see above for how this is combined with the 30D vehicle tax credits), and credits for buses use the *Buses* vehicle type. Credits for trucks are modeled with the *Freight Vehicle Subsidy* for the *Light and Medium Commercial Trucks* and *Heavy Duty Trucks* vehicle types. The Repeal Scenario settings are negative because the incentive per vehicle is less than in the Current Policies scenario. We weight the credit for the light and medium duty truck vehicle types based on the share of new sales that qualify for a $40,000 vs. $7,500 credit.

If you wish to turn off only 45W credit repeal assumptions and not modify 30D tax credits for commercial vehicles, be sure to leave the checkboxes checked for only *Cars and SUVs* before moving the policy slider bar and implementation schedule to the values listed to those shown in the table above for the *Modeling 30D repeal only case*. Then separately, uncheck *Cars and SUVs* and select only the *Buses* vehicle type before moving the policy slider bar to $0. A value of 0 represents no policy impact relative to the Current Policies scenario.

### 45Y/48E tax credits for clean electricity
The Current Policies scenario includes 45Y clean electricity production tax credits for onshore wind and for solar PV (after 2024), and 48E investment tax credits for solar PV (through 2024), solar thermal, offshore wind, geothermal, and grid battery storage. The Repeal Scenario uses the Cross-Sector policy *End Exisiting Subsidies* to remove 100 percent of the tax credit value for each of the EPS power plant types. Because grid battery storage is handled separately in the EPS, those credits are removed using a negative value for the Electricity Supply policy *Subsidy for Grid Battery Capacity*. If you wish to turn off only these credits, be sure to leave the checkbox checked for only Wind, Solar, and Geothermal before moving the policy slider bar to 0. Note that for the Wind toggle includes both 45Y for onshore wind and 48E for offshore wind, and the Solar toggle includes both 45Y for solar PV and 48E for solar thermal. A value of 0 represents no policy impact relative to the Current Policies scenario.

### 45U zero-emission nuclear power production tax credit
The Current Policies scenario includes support for existing nuclear power plants through the tax credit window of 2024 to 2032. The Repeal Scenario removes these credits with the Cross-Sector policy *End Exisiting Subsidies*. If you wish to turn off only this credit, be sure to leave the checkbox checked for only Nuclear before moving the policy slider bar to 0. A value of 0 represents no policy impact relative to the Current Policies scenario.

### 45Q tax credits for carbon capture and sequestration
The Current Policies scenario includes 45Q tax credits for CCS, which affects both the electricity and industry sectors in the model. The Repeal Scenario removes 45Q tax credits for electricity using negative values for the Electricity Supply policy *Electricity CCS Subsidy*. 

The EPS does not endogenously deploy cost-effective CCS in the industry sector like it does in the electricity sector. Therefore, the model removes 45Q tax credits by substituting in alternate input data files for the amount of CCS achieved by industry category and the incentive amount that is used for cash flow tracking. You may toggle this assumption on and off by using the Industry policy *Non BAU Industry CCS Subsidy*. Note that the Repeal Scenario only uses settings for the industry categories that use CCS in the Current Policies scenario, which are Oil and Gas Extraction, Refined Petroleum and Coke, Cement and Other Nonmetallic Minerals, and Iron and Steel. The OFF setting represents no policy impact relative to the Current Policies scenario.

### 45X advanced manufacturing production tax credit
The Current Policies scenario includes special handling for battery production tax credits in both the electricity and transportation sectors, and also manually adjusts energy demand from the Annual Energy Outlook based on our own calculations for all other technologies.

The Repeal Scenario uses negative values for the Electricity Supply policy *Subsidy for Grid Battery Production* and for the Transportation policy *Subsidy for Vehicle Battery Production*. A value of 0 represents no policy impact relative to the Current Policies scenario.

The scenario does not attempt to remove tax credits for the other technologies as they do not map cleanly onto an existing model policy lever. However, the effect of these credits is relatively small within the modeled repeal package.

### 45V clean hydrogen production tax credit
The Current Policies scenario handles clean hydrogen production tax credits by reading in external calculations estimating the share of existing hydrogen production that is shifted to electrolysis due to tax credits and the associated change in hydrogen price. The model assumes that to be eligible for the credit, hydrogen electrolysis must be powered by dedicated, newly-built renewables.

The Repeal Scenario removes the tax credits via a few different levers. First, the Cross-Sector policy *End Existing Subsidies* lever corrects the hydrogen price for cash flow tracking. If you wish to turn off only this credit, be sure to leave the checkbox checked for only Hydrogen before moving the policy slider bar to 0.  Together, the District Heat and Hydrogen policies; *Shift Hydrogen Production Pathways* and *Non BAU Hydrogen Production Shifting* set the additional electrolysis incentivized by 45V tax credits back to the default assumption of steam methane reforming.

### Support for distributed solar (Solar for All program and 25D rooftop solar tax credit)
The Current Policies scenario handles expected distributed solar deployment attributed to the IRA in a single input data file and therefore a single policy lever. Therefore, removing the Repeal Scenario settings will cover distributed solar deployment from both the Solar for All component of the Greenhouse Gas Reduction Fund and 25D rooftop solar tax credits.

Distributed solar is not a dedicated power plant type in the electricity sector and is handled in the EPS buildings sector instead. The amount of distributed solar in the Current Policies scenario is dictated through external input data, and so the most accurate way to remove this deployment is by substituting in an alternate input data file. You can revert to the default Current Policies level of distributed solar deployment with the Buildings and Appliances policy *Non BAU Distributed Solar Capacity*. The OFF setting represents no policy impact relative to the Current Policies scenario.

### 30C alternative fuel vehicle refueling property tax credit
The Current Policies scenario takes in expected charger deployment due to 30C credits, which we calculate outside the model, using input data. This value is fed into the model’s calculations on the shadow cost applied to passenger electric vehicles, which represents a penalty in the vehicle choice calculations for range and charging availability concerns. 

The Repeal scenario removes the additional charger deployments with a negative setting for the Transportation policy *Electric Vehicle Charger Deployment*. A value of 0 represents no policy impact relative to the Current Policies scenario.

### Agricultural conservation investments and conservation technical assitance

The Current Policies uses marginal abatement cost curve data from the EPA to translate IRA funding for agricultural programs into expected GHG abatement, which is then removed from agricultural emissions.

The Repeal Scenario removes this support by reading in an alternate input data file that specifies the amount of increased agricultural process emissions relative to the Current Policies scenario in each cost tier, which modifies both agricultural emissions and cash flows. This is handled in the Industry policy *Non BAU Increase in Process Emissions*. If you wish to turn off only this program, be sure to leave the checkbox checked for only Cropland and Rice Measures and Livestock Measures before moving the policy slider bar to 0. The OFF setting represents no policy impact relative to the Current Policies scenario.

Note the we do not have the necessary data to incorporate these agricultural programs into the state level EPS models and therefore only include these in the national U.S. model.

### Forest system restoration and forestry conservation programs

The Current Policies scenario uses marginal abatement cost curve data from the EPA to translate IRA funding for forestry programs into expected GHG abatement, which is then removed from LULUCF emissions.

The Repeal Scenario removes this support by reading in negative values for the Agriculture, Land Use, and Forestry policies *Afforestation and Reforestation and Improved Forest Management*. A value of 0 represents no policy impact relative to the Current Policies scenario.

Note the we do not have the necessary data to incorporate these agricultural programs into the state level EPS models and therefore only include these in the national U.S. model.

## EPA Rules
### 111 Clean Air Act rules, Mercury and Air Toxics standards, and Steam Electric Power Generating Effluent Guidelines for power plants
The Current Policies scenario incorporates recent EPA 111, MATS, and ELG rules by reading in expected coal retirements and retrofits using EPA’s Integrated Planning Model analysis used in its 111 Regulatory Impact Assessment. It also modifies the expected capacity factor for new natural gas combined cycle plants starting in 2032.

The Repeal Scenario reads in alternate data files for expected coal retirements and retrofits using the Electricity Supply policies *BAU Non BAU Capacity Retirement Schedule* and *Non BAU Mandated Capacity CCUS Retrofits*. Setting these levers to OFF represents no policy impact relative to the Current Policies scenario.It also removes capacity factor requirements for new gas using a negative value for the Electricity Supply policy *Reduce Plant Downtime*. A value of 0 represents no policy impact relative to the Current Policies scenario.

### Tailpipe emission standards for light-, medium-, and heavy-duty vehicles (model years 2027 and later)

The Current Policies scenario incorporates EPA’s recent tailpipe emission standards by reading in zero-emission vehicle (ZEV) sales requirements for the relevant EPS vehicle types, and uses EPA’s Regulatory Impact Assessments to find the binding ZEV requirements in each year.

The Repeal Scenario removes these federal requirements with negative values for the Transportation policy *Federal Zero-Emission Vehicle Sales Standard*. A value of 0 represents no policy impact relative to the Current Policies scenario. Note that state-level ZEV requirements are handled separately, as shown in the California’s Clean Air Act waiver section below. 

### California’s waiver to set its own tailpipe emission standards under the Clean Air Act

The EPA granted California a waiver to set its own, stricter vehicle tailpipe emission standards, which other states can opt to follow. To date, twelve additional states and the District of Columbia have adopted California’s Advanced Clean Cars II rules, and nine additional states have adopted California’s Advanced Clean Trucks rules.

The EPS reads in input data capturing ZEV requirements for each vehicle type and the share of national sales for each U.S. state in the Current Policies scenario. The Repeal scenario uses an alternate input data files that sets the state level ZEV requirements for all vehicle types to 0 for every state. This is handled with the Transportation policy *Non-BAU Zero-Emission Vehicle Sales Standard by State*. Note that federal tailpipe emission standards are handled separately. The OFF setting represents no policy impact relative to the Current Policies scenario.

### Methane emission rules for oil and natural gas operations

The EPA issued rules limiting methane emissions from new and existing oil and natural gas operations. The Current Policies scenario uses EPA’s Regulatory Impact Assessment and its separate marginal abatement cost curve data set to translate these rules into expected GHG abatement and costs, which is then removed from baseline emissions.

The Repeal Scenario removes these rules by reading in an alternate input data file that specifies the amount of increased methane emissions for both the Oil and Gas Production and Oil and Gas Processing industry categories relative to the Current Policies scenario in each cost tier, which modifies both agricultural emissions and cash flows. This is handled in the Industry policy *Non BAU Increase in Process Emissions*. If you wish to turn off only this program, be sure to leave the checkbox checked for only the Oil and Gas boxes before moving the policy slider bar to OFF.

---
*This page was last updated in version 4.0.4.*
