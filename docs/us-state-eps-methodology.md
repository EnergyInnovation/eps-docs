---
title: U.S. State EPS Methodology
---

**February 2023**

The U.S. State Energy Policy Simulators (EPS) account for emissions produced in the following sectors: electricity generation, building energy consumption, industrial energy consumption, industrial process emissions, agriculture process emissions, land-use change, and transportation. Our primary sources are data sets from the U.S. Environmental Protection Agency (EPA), U.S. Energy Information Administration (EIA), and National Renewable Energy Laboratory (NREL).

The information below details our basic modeling assumptions, data sources, and methodology by sector. Additionally, we include information on the business-as-usual (BAU) and nationally determined contribution (NDC) scenario assumptions.


## Basic Model Assumptions
- AR5 GWP values
- Model runs from 2020 to 2050
- Policies can be applied starting in 2023
- State models do not account for the new funding and tax credits included in the Inflation Reduction Act 
- We have tried to incorporate the latest state policy but some specific sectoral policies may be missing, especially if they principally affect energy demand

The following information supplements the general EPS model information by summarizing sources for state energy consumption and emissions data in the state versions of the EPS tool.<sup>[i](#myfootnotei)</sup> 

## Data Sources Summary

| Sector | Subsectors | Source |
|---|---|---|
| Electricity | In-state capacity and generation                                              | [EIA's Form 923](https://www.eia.gov/electricity/data/eia923/) and [EIA's Form 860](https://www.eia.gov/electricity/data/eia860/) <br/> EIA's [State Electricity Profiles](https://www.eia.gov/electricity/state/) |
| Building Energy Use | All energy use, all building components, residential and commercial buildings | EIA's [State Energy Data Sytems](https://www.eia.gov/state/seds/) from 2020 & <br/>[NREL Electrification Futures Study](https://www.nrel.gov/analysis/electrification-futures.html) - Reference Scenario |
| Industrial Energy Use | All fuel use for industrial sector | EIA’s [Annual Energy Outlook](https://www.eia.gov/outlooks/aeo/) tables on Industrial Energy Use & <br/> EIA's [State Energy Data Sytems](https://www.eia.gov/state/seds/) from 2020 |
| Industrial Process Emissions | Agriculture and industrial process emissions | [U.S. State-level Non-CO2 GHG Mitigation Report](https://www.epa.gov/global-mitigation-non-co2-greenhouse-gases/us-state-level-non-co2-ghg-mitigation-report) |
| Land Use | Natural carbon sinks and sources (LULUCF) | [EPA State GHG Emissions and Removals 2020 Inventory Report](https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals) |
| Transportation | All energy use, vehicle miles | EIA's [State Energy Data Sytems](https://www.eia.gov/state/seds/) from 2020,<br/>EIA's [Annual Energy Outlook](https://www.eia.gov/outlooks/aeo/) tables on Industrial Energy Use &<br/>[NREL Electrification Futures Study](https://www.nrel.gov/analysis/electrification-futures.html) - Reference Scenario |


## Methods by Sector

### Buildings
**Source**: Total building sector energy consumption data for all fuels was obtained from the EIA State Energy Data System (SEDS) 2020 estimates for residential and commercial building energy use.<sup>[ii](#myfootnoteii)</sup> 

**Methods**: To split total energy consumption among different building end uses such as heating, lighting, and cooking, we used the energy consumption estimates by end use from the 2017 NREL Electrification Futures Study. That study’s reference scenario was also used to forecast future energy use. Total energy flows in the start year (2020) for each energy type (e.g., electricity, natural gas) are aligned to the SEDS’ most updated values for energy consumption in the residential/commercial building sectors.<sup>[iii](#myfootnoteiii)</sup> 

**BAU Policy Assumptions**: NREL’s reference scenario includes some business-as-usual fuel switching from gas to electric appliances, and those assumptions are built into the model. It also includes some estimated improvements in technological efficiency. As we rely on NREL data for scaling future consumption, state policy may not always be incorporated. See the NREL study for more information.<sup>[iv](#myfootnoteiv)</sup> 

**Calibration**: Building sector energy consumption was checked against the EIA’s estimates for 2020. Emissions were calibrated using the EPA’s 2020 State Inventories and Rhodium’s Climate Deck.<sup>[v,vi](#myfootnotev)</sup> 

### Industry Energy
**Source**: Total industry sector energy consumption data for all fuels was obtained from the EIA SEDS 2020 estimates for fuel type by industrial sector.<sup>[vii](#myfootnotevii)</sup> 

**Methods**: To split SEDS value (fuel type by industrial sector) into industrial subsector, we proportion it using the product of (1) the EPS variable “BAU Output by ISIC Code,” which gives monetized industrial output for each ISIC code, and (2) Energy Intensity Manufacturing Energy Consumption Survey data. We develop regional energy intensity multipliers that convert output to energy inputs, which are then scaled to align with the SEDS data.<sup>[viii](#myfootnoteviii)</sup> 

**BAU Policy Assumptions**: We use the Annual Energy Outlook Reference Case to project annual growth rates for industrial energy use by industry.

**Calibration**: Industry sector energy consumption was checked against EIA estimates for 2020. Emissions were calibrated using the EPA’s 2020 State Inventories and Rhodium’s Climate Deck. Note that differences between EPA and EPS findings for total energy-related industrial emissions may be due to differing assumptions regarding the percentage of industrial fuels used for non-energy purposes. A detailed breakdown of assumptions regarding non-energy fuel use can be found by downloading the state EPS model data.<sup>[ix,x](#myfootnoteix)</sup> 

### Industry Process
**Source**: Industrial process emissions estimates for CH4, N2O, and F-gases are taken directly from the EPA’s State-level Non-CO2 Greenhouse Gas Mitigation Report. The report includes forecasted estimates of both emissions and mitigation potential. CO2 process emissions data is taken from the EPA’s 2020 state inventory data and held constant through 2050. Some customizations were required to address data issues flagged by the EPA.<sup>[xi,xii](#myfootnotexi)</sup> 

**Methods**: 2020 process emissions data is from the EPA’s 2020 state inventory, and all future years are from the EPA’s State-level Non-CO2 Greenhouse Gas Mitigation Report. We hold CO2 process emissions constant from 2020 to 2050. For iron and steel emissions, we found EPA data to be inaccurate when compared to state-level inventories. Iron and steel emissions were calculated by taking total U.S. iron and steel GHG emissions and dividing them among states using facility-level emissions reported in the FLIGHT tool.<sup>[xiii](#myfootnotexiii)</sup> 

**BAU Policy Assumptions**:  F-gas emissions are assumed to be reduced in compliance with the AIM Act.<sup>[xiv](#myfootnotexiv)</sup> 

**Calibration**: Emissions were calibrated using the EPA’s 2020 State Inventories and Rhodium’s Climate Deck.<sup>[xv,xvi](#myfootnotexv)</sup> 

### Electric Power
**Source**: Electricity capacity is from the EIA’s 860 report on state generators from 2019. Forecasted capacity retirements and new construction are from the EIA’s Electric Power Monthly. Capacity factors are derived from the EIA’s 860 and 923 reports for existing power plants. For new power plants, the model uses capacity factor data from Gridlab. Estimated imports and exports are from the EIA’s State Electricity Profiles from 2020.<sup>[xvii,xviii,xix,xx,xxi](#myfootnotexvii)</sup> 

**Methods**: Electricity generation is forecasted endogenously by the EPS model based on existing capacity, estimated demand, and electricity generation costs.

**BAU Policy Assumptions**: Individual state renewable portfolio standards are included in the state models. Federal tax credits (prior to the Inflation Reduction Act) are included as well.

**Calibration**: Emissions were calibrated using the EPA’s 2020 State Inventories and Rhodium’s Climate Deck.<sup>[xxii,xxiii](#myfootnotexxii)</sup> 

### Transportation
**Source**: Total transportation sector energy consumption data for all fuels was obtained from the EIA’s SEDS 2020 estimates for transportation energy use. Start-year vehicles by vehicle type are from NREL’s Electrification Futures Study.<sup>[xxiv,xxv](#myfootnotexxiv)</sup> 

**Methods**: To split total energy consumption among different vehicle types such as passenger light-duty vehicles, buses, freight trucks, and rail, RMI used the energy consumption estimates by end use from the 2017 NREL Electrification Futures Study. Future demand was forecasted using the EIA’s 2022 Annual Energy Outlook. Note that natural gas use in the SEDS transportation data is predominantly due to oil and gas pipeline transport and was reallocated to the industrial sector.<sup>[xxvi,xxvii](#myfootnotexxvi)</sup> 

**BAU Policy Assumptions**: Fuel economy assumptions account for the most recent EPA/National Highway Traffic Safety Administration tailpipe CO2 and fuel economy standards. If a state has an existing zero-emission vehicle subsidy, those subsidies are included in the BAU modeling. Vehicle sales are estimated using forecasted vehicle prices, which results in some economic adoption of electric vehicles. Modeling includes states with zero-emission vehicle sales requirements. 

**Calibration**: Transportation sector energy consumption was checked against the EIA’s estimates for 2020. Emissions were calibrated using the EPA’s 2020 State Inventories and Rhodium’s Climate Deck.<sup>[xxviii,xxix](#myfootnotexxviii)</sup> 

### Land Use
**Source**: Total land-use emissions estimates are from the EPA’s 2020 State Inventory data.<sup>[xxx](#myfootnotexxx)</sup> 

**Methods**: Values are held constant.

**BAU Policy Assumptions**: None

**Calibration**: Emissions were calibrated using the EPA’s 2020 State Inventories and Rhodium’s Climate Deck.<sup>[xxxi,xxxii](#myfootnotexxxi)</sup> 

## NDC Scenario
The state models include a default version of the U.S. NDC scenario. This scenario includes the following policies:

### Policy Assumptions in the U.S. NDC Scenario

| Sector  | U.S. NDC Scenario | 
| --- | --- | 
| Electricity      | • Clean electricity standard of 80% by 2030, and 100% by 2035<br/>• Accelerated deployment of storage, transmission, and demand response<br/>• No new construction of coal and natural gas plants<br/>• Power plant retirements eliminate coal by 2030<br/>• Electricity sector carbon capture and sequestration applied to remaining gas plants run for occasional balancing and reliability by 2050 | 
| Buildings     |• 100% of electric new appliances and buildings by 2030 (“building component electrification”)<br/>• 15% of existing buildings are retrofit by 2050, in addition to natural turnover<br/>• Efficiency improvements with ambition extended to 2050, plus additional efficiency improvements for building heating equipment and appliances | 
| Transportation      | • 100% electric new light-duty vehicle, motorbike, and bus sales by 2035<br/>• 100% electric new medium- and heavy-duty truck sales by 2045<br/>• 60% improvement in fuel economy standards for internal combustion engine light-duty vehicles by 2035, as well as a 50% improvement for buses, a 50% improvement for medium- and heavy-duty freight vehicles, a 60% improvement for aircraft, and a 25% improvement for rail and ships<br/>• 10% light-duty vehicle miles traveled reduced or shifted from BAU by 2050<br/>• 3% reduction in truck freight transport by 2050 | 
| Industry      | • 100% achievement of cement clinker substitution by 2030<br/>• 100% achievement of hydrofluorocarbon emissions reductions from the Kigali Amendment to the Montreal Protocol<br/>• 14% improvement in industrial energy intensity/efficiency by 2050<br/>• 100% shift from fossil fuels to a mix of electricity and hydrogen, varying by industrial potential for each fuel type, by 2050<br/>• 10% reduction in cement demand and 15% reduction in iron and steel demand from improved material efficiency policies by 2050<br/>• 100% achievement of potential emissions reductions from methane capture and destruction in natural gas and oil, coal mining, water, and waste sectors by 2030<br/>• 100% of hydrogen is produced via electrolysis by 2050<br/>• Industrial CO2 emissions captured and sequestered by 2050 for refining, chemicals, cement, iron and steel, and energy processing sectors | 
| Land Use & Agriculture      | • 100% achievement of potential additional carbon uptake from afforestation/reforestation measures by 2030<br/>• 100% achievement of improved soil measures, cropland measures, and livestock measures (such as requiring anaerobic digesters) by 2050<br/>• 50% achievement of carbon reduction from improved forest management by 2050 | 

*Linear implementation of policy requirements unless noted otherwise starting in 2023.*

## State-Specific Customizations
Due to requests from partners in the following states, we have made customizations to our default energy and emissions data.

### Customizations by State
**Colorado**
- Customized coal plant retirement schedule based on state Integrated Resource Plans
- E3 Pathways data as basis for energy consumption estimates and process emissions

**New Mexico**
- E3 Pathways data as basis for energy consumption estimates and process emissions

**Michigan**
- Customized coal plant retirement schedule based on state Integrated Resource Plans

**Minnesota**
- Customized land-use emissions data from Minnesota’s reported GHG inventory

**Oregon**
- Customized land-use emissions data from state inventory

**California**
- The California model has a largely independent data set based on the state inventory and scoping plan modeling

## About Us

The EPS is a non-partisan, open-source, and peer-reviewed model. The EPS was developed to evaluate the impacts of climate and energy policies on emissions, costs and savings, and fuel consumption. It is used by policymakers to select and refine climate legislation and standards. For example, the EPS model was used to assess the impact of climate policies for the U.S. House Select Committee on the Climate Crisis.<sup>[xxxiii](#myfootnotexxxiii)</sup>  EPS users input climate policies and the model then analyzes interacting policy impacts to forecast environmental and economic outcomes. The model generates a variety of data outputs, including GHG emissions, criteria pollutant emissions, capital and operating cash flow changes, and macroeconomic changes to gross domestic product and jobs. RMI and Energy Innovation are releasing EPS models for all 48 contiguous U.S. states. 

## Contact Us
If you have questions about using the EPS, we recommend first watching our video series, available [here](https://docs.energypolicy.solutions/video-series). For further information on the EPS, contact us at <policy@energyinnovation.org>. For more information on RMI analysis and our state advocacy support network, contact us at <USAnalysis@rmi.org>. 

The U.S. state EPS models were developed as a partnership between Energy Innovation and RMI, with RMI work supported by Bloomberg Philanthropies.






***

<a name="myfootnotei">i</a>: “Energy Policy Simulator Documentation,” Energy Innovation Policy & Technology LLC, accessed January 5, 2023, https://docs.energypolicy.solutions/.<br/>
<a name="myfootnoteii">ii</a>: “U.S. States State Profiles and Energy Estimates,” U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/state/seds/.<br/>
<a name="myfootnoteiii">iii</a>: Trieu Mai et al., “Electrification Futures Study: Scenarios of Electric Technology Adoption and Power Consumption for the United States” (National Renewable Energy Laboratory, 2018), https://www.nrel.gov/docs/fy18osti/71500.pdf.<br/>
<a name="myfootnoteiv">iv</a>: Mai, “Electrification Futures Study.”<br/>
<a name="myfootnotev">v</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/ghgemissions/state-ghg-emissions-and-removals.<br/>
<a name="myfootnotevi">vi</a>: “Climate Deck,” Rhodium Group, accessed January 5, 2023, https://rhg.com/data_story/climate-deck/.<br/>
<a name="myfootnotevii">vii</a>: “U.S. States State Profiles and Energy Estimates,” U.S. Energy Information Administration.<br/>
<a name="myfootnoteviii">viii</a>: “Manufacturing Energy Consumption Survey (MECS)” (U.S. Energy Information Administration, 2018), https://www.eia.gov/consumption/manufacturing/.<br/>
<a name="myfootnoteix">ix</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency.<br/>
<a name="myfootnotex">x</a>: “Climate Deck,” Rhodium Group.<br/>
<a name="myfootnotexi">xi</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency.<br/>
<a name="myfootnotexii">xii</a>: “U.S. State-level Non-CO2 GHG Mitigation Report,” U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/global-mitigation-non-co2-greenhouse-gases/us-state-level-non-co2-ghg-mitigation-report.<br/>
<a name="myfootnotexiii">xiii</a>: “Facility Level Information on GreenHouse gases Tool (FLIGHT),” U.S. Environmental Protection Agency, accessed January 5, 2023, https://ghgdata.epa.gov/ghgp/main.do?site_preference=normal.<br/>
<a name="myfootnotexiv">xiv</a>: “Protecting Our Climate by Reducing Use of HFCs,” U.S. Environmental Protection Agency, accessed January 5, 2023, https://www.epa.gov/climate-hfcs-reduction.<br/>
<a name="myfootnotexv">xv</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency.<br/>
<a name="myfootnotexvi">xvi</a>: “Climate Deck,” Rhodium Group.<br/>
<a name="myfootnotexvii">xvii</a>: Form EIA-860 detailed data with previous form data (EIA-860A/860B), U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/data/eia860/.<br/>
<a name="myfootnotexviii">xviii</a>: “Electric Power Monthly,” U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/monthly/.<br/>
<a name="myfootnotexix">xix</a>: Form EIA-923 detailed data with previous form data (EIA-906/920), U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/data/eia923/.<br/>
<a name="myfootnotexx">xx</a>: Amol Phadke et al., “2035 The Report” (Goldman School of Public Policy, June 2020), https://www.2035report.com/electricity/downloads/.<br/>
<a name="myfootnotexxi">xxi</a>: “State Electricity Profiles,” U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/electricity/state/.<br/>
<a name="myfootnotexxii">xxii</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency.<br/>
<a name="myfootnotexxiii">xxiii</a>: “Climate Deck,” Rhodium Group.<br/>
<a name="myfootnotexxiv">xxiv</a>: “U.S. States State Profiles and Energy Estimates,” U.S. Energy Information Administration.<br/>
<a name="myfootnotexxv">xxv</a>: Mai, “Electrification Futures Study.”<br/>
<a name="myfootnotexxvi">xxvi</a>: Mai, “Electrification Futures Study.”<br/>
<a name="myfootnotexxvii">xxvii</a>: “Annual Energy Outlook 2022,” U.S. Energy Information Administration, accessed January 5, 2023, https://www.eia.gov/outlooks/aeo/.<br/>
<a name="myfootnotexxviii">xxviii</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency.<br/>
<a name="myfootnotexxix">xxix</a>: “Climate Deck,” Rhodium Group.<br/>
<a name="myfootnotexxx">xxx</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency.<br/>
<a name="myfootnotexxxi">xxxi</a>: “State GHG Emissions and Removals,” U.S. Environmental Protection Agency.<br/>
<a name="myfootnotexxxii">xxxii</a>: “Climate Deck,” Rhodium Group.<br/>
<a name="myfootnotexxxiii">xxxiii</a>: “Hal Harvey’s Insights and Updates: Congressional Climate Plan Is a Bet Your Country Moment” (Energy Innovation Policy & Technology LLC, July 28, 2020), https://energyinnovation.org/2020/07/28/hal-harveys-insights-and-updates-congressional-climate-plan-is-a-bet-your-country-moment/.<br/>

