---
title:  "Colorado Energy Policy Simulator"
---

The Colorado Energy Policy Simulator (EPS) is a free and open-source computer model created by [Energy Innovation LLC](https://energyinnovation.org/) and [RMI](https://rmi.org/).  It is adapted from software originally created by Energy Innovation LLC.

[Click here](https://energypolicy.solutions/home/colorado-cdphe/en) for access to the latest version (4.0.4) of the public model that was refined and developed in collaboration with the Colorado Department of Public Health and Environment to inform the state's 2025 [Greenhouse Gas (GHG) Inventory](https://cdphe.colorado.gov/environment/air-pollution/climate-change/GHG-inventory). This version includes three customized state scenarios: Business as Usual (BAU), Roadmap Baseline (RBL), and Near-Term Actions (NTA). 

A prior version of the model was used for the Roadmap 2.0 Project. This version is now archived. [Click here](https://eps-app-git-develop-energy-innovation.vercel.app/simulator/colorado/en/6e7743c) for access to the previous version (3.4.3) of the public model, which was developed for and calibrated to the state's 2023 GHG Inventory, and used to inform the state's [GHG Pollution Reduction Roadmap](https://energyoffice.colorado.gov/ghg-pollution-reduction-roadmap) (Roadmap 2.0). 

## Model Download

The Colorado Energy Policy Simulator may be used on this website through your web browser, or the full version may be downloaded to your computer by clicking the button below.  Note that you will need to follow the steps on the [EPS download page](../download) in order to install the required software and use the downloadable version of the model.

<p><a href="https://github.com/EnergyInnovation/eps-colorado-cdphe/archive/refs/tags/4.0.4.zip" class="btn">Download the Colorado Energy Policy Simulator</a></p>


## U.S. State EPS Methodology

The [U.S. State EPS Methodology](../us-state-eps-methodology) page details our basic modeling assumptions, data sources, and methodology by sector. Additionally, we include information on the business-as-usual (BAU) and nationally determined contribution (NDC) scenario assumptions.
Note that there may be assumptions or methods in this methodology that were modified for the 2025 Colorado GHG Inventory. 


## Colorado 2025 GHG Inventory

The documentation below summarizes the policy modeling completed for Colorado’s 2025 [GHG Inventory](https://cdphe.colorado.gov/environment/air-pollution/climate-change/GHG-inventory). This work used version 4.0.4 of the tool.

### 2025 Business As Usual Scenario Documentation

The Business as Usual (BAU) scenario aims to project current trends, while ignoring state policy actions and incorporating publicly available forecasts of energy demand and economic behavior. This scenario also reflects some Inflation Reduction Act (IRA) tax credits and major formula-funded provisions in the IRA and Infrastructure Investment and Jobs Act (IIJA).

The steps below summarize the actions taken to build the BAU scenario for the 2025 Colorado GHG Inventory on top of the BAU developed by EI as described above. 

1. **Update to energy consumption data**: Input data files that use the EIA’s State Energy Data System (SEDS) were updated to reference the 2023 release. This primarily impacted fuel use and emissions for transportation, buildings (residential and commercial), and industrial fuel use. 
1. **Removal of state policies**: Some inputs and assumptions were removed from input data files that reflected state policy actions. By removing these actions from the BAU, the policies could be modeled using levers in the Roadmap Baseline and Near-Term Actions scenarios (see below). Input data was modified related to the following policies: Clean Energy Plans, Comanche unit 3 closure, Advanced Clean Cars (ACC) and Advanced Clean Trucks (ACT), Hydrofluorocarbon (HFC) phaseout, and oil and gas methane rules under Air Quality Control Commission (AQCC) Regulation 7 and Regulation 22.
1. **Calibration to the state inventory**: Input data files were modified in order to better align the EPS data to the 2025 Colorado GHG Inventory. The calibration process compared emissions estimates in 2023, the latest year of data available in the Inventory. Emission sources were calibrated differently according to their representation in the EPS. Calibration was applied to: electric power, buildings (residential and commercial), industrial energy, industrial processes, oil and gas operations, and waste. The BAU scenario for agriculture and land use, land-use change, and forestry (LULUCF) was built from emissions and sinks projected by RTI International using the Forestry and Agricultural Sector Optimization Model with Greenhouse Gases (FASOM-GHG). 

### 2025 Roadmap Baseline Scenario Documentation

The Roadmap Baseline (RBL) scenario factors in state policy actions that were "on the books" as of the end of 2023, in alignment with [Roadmap 2.0](https://energyoffice.colorado.gov/ghg-pollution-reduction-roadmap). Most of these policies have since been partially or fully implemented. Thus, the RBL scenario should be interpreted as including policies “on the books” as of December 2023. It should not be construed as comprehensively including policies “on the books” as of December, 2025.

The table below documents the policies modeled in the RBL scenario and their respective modeling approaches for the 2025 [Colorado GHG Inventory](https://cdphe.colorado.gov/environment/air-pollution/climate-change/GHG-inventory). 

Note that in some cases, policies were translated into representative uses or proxy levers, so the text in the "Modeled as…" column may not perfectly reflect the policy mechanism that exists in Colorado. However, the goal is to use EPS policy levers to reasonably reflect the effect of the Colorado-specific mechanism.

| **Sector**   | **Policy/Strategy** | **Modeled as...**   |
| --- | --- | --- |
| **Buildings** | Clean Heat Plan legislation (SB21-264), assuming the 2030 gas consumption reduction is less than the 22% emissions target but above what would likely occur if all utilities reduced emissions in line with the cost cap established by the law | As proxies to represent the mix of gas consumption and emissions reduction strategies possible under Clean Heat Plans (CHPs), the Building Component Electrification lever is set to 65% for all appliances, and the Building Energy Efficiency lever is set to 25% for all building types, with the implementation schedule for both ramping up fully from 2021 to 2030. The modeling assumes that other major buildings sector policies (including HB22-1362, Building Performance Colorado, Building Electrification Plans, and HB23-1161) do not lead to substantial additional emissions impacts, but instead contribute to and enable CHP achievement. Under that assumption, the Roadmap Baseline Scenario does not directly include building sector policies other than CHPs. |
| **Electricity** | Resource usage necessary to achieve sector targets in HB21-1266 | As a proxy and to match the state’s modeled emission reductions as a result of Clean Energy Plans using data available in mid-2023, Clean Electricity Standard lever is set to 80%, with the implementation schedule ramping up fully from 2022 to 2030. <br> To represent the ramp-down of coal and ensure the model also captures the complete absence of coal generation after 2030, it is necessary to set the Early Retirement of Coal lever to 50 MW annually from 2025 through 2030. <br> Note: This retirement lever is also pulled to model the retirement of Comanche Unit 3.  |
| **Electricity** | Xcel retirement of Comanche Unit 3 | Additional early retirement of 0.25 GW of coal in 2031 (additional to the resource usage modeled for Clean Energy Plans - see above) using the Early Retirement of Power Plants lever for Hard Coal set to 250 MW/yr and full implementation in 2031. |
| **Electricity** | Funding for geothermal electricity from HB23-1252 grant program and HB23-1272 tax credits | Funding modeled through the subsidy for geothermal electricity capacity construction set to 14% between 2023 and 2025 and through the subsidy for electricity production from geothermal set to $3/MWh for 2024–2032. |
| **Industry** | Strong compliance with requirements for oil and gas in AQCC Regulation 7, extrapolating impacts from APCD and EDF analysis;<br> SB22-198 and Financial Assurance Rules, which provide funding mechanisms for the remediation of orphaned wells; <br> IIJA Section no. 40601 funds remediation and plugging of orphaned well sites | To match expected abatement from compliance with the Upstream Intensity Standard and other oil and gas regulations, the Methane Capture and Methane Destruction levers for Oil and Gas Extraction is set to 74%, with implementation of 0% in 2021, 50% in 2025, 82% in 2027, and 100% in 2030. The Industry Energy Efficiency Standards lever for Oil and Gas Extraction is set to 25%, with implementation of 0% in 2021 and 100% in 2030. |
| **Industry** | State hydrofluorocarbon (HFC) regulations | Aligning with expected abatement from APCD’s economic impact analysis on Regulation 22, Part (B), F-Gas Substitution, Destruction, and Recovery levers set to 90%, with implementation schedule starting at 20% in 2021 and increasing to 100% in 2027. It is assumed that beyond 2027, Regulation 22’s impact will not be additional to the impacts of the federal AIM Act (even if AIM goes away). |
| **Industry** | GEMM Phase I rulemaking, which requires four heavy-emitting industrial facilities to demonstrate compliance with emission reduction targets through an audit process | Industry Energy Efficiency lever set to 20% for industrial categories impacted by GEMM Phase I with implementation schedule increasing from 0% in 2022 to 100% in 2030. These levers are set to match expected abatement based on reported data trends and reductions already achieved through 2024. |
| **Industry** | GEMM Phase II rulemaking, which requires about 20 facilities to demonstrate compliance with 20% emissions reduction by 2030 relative to 2015 | Industry Energy Efficiency lever set to 20% for industrial categories impacted by GEMM Phase II, with implementation schedule increasing from 0% in 2022 to 100% in 2030. These levers are set to match expected abatement based on reported data trends and reductions already achieved through 2024. |
| **Industry** | HB23-1281 tax credit for clean hydrogen | Incentive assumed to create demand pull that leads to an industry shift to hydrogen aligned with 33% achievement of NDC pathway and on the same timeline. Hydrogen Combustion lever for medium- and high-temperature nonboilers is set for select industries (Refined Petroleum and Coke, Chemicals, Rubber and Plastic Products, Cement and Other Nonmetallic Minerals, Iron and Steel), with an implementation schedule starting at 0% in 2029 and increasing to 100% in 2050. |
| **Industry** | HB23-1272 tax credits for industrial facility clean energy investments | Industry Energy Efficiency lever set to 6% for Industry Categories not covered by GEMM Phase I and GEMM Phase II, with implementation schedule increasing from 0% in 2023 to 100% in 2032. |
| **Industry** | HB22-1355 Extended Producer Responsibility program, which requires companies that sell paper products to fund statewide recycling program to recycle those materials | Material Efficiency, Longevity and Reuse for Water and Waste set to 3% and implementation schedule increased from 0% in 2022 to 100% in 2027 to match analysis from the EPA WARM model. Modeling attributes 10% of abatement to avoided emissions that would have otherwise resulted from landfill disposal/degradation into landfill gas. |
| **Transportation** | Existing state EV tax credit and HB23–1272 extension | Electric vehicle subsidy lever set to 5,000 (max value) for passenger cars and SUVs with an implementation schedule that matches tax credit values from 2023 through 2028. |
| **Transportation** | Compliance with 2021 Colorado Department of Transportation (CDOT) rulemaking | To align with CDOT analysis of a 9% LDV vehicle miles traveled (VMT) reduction below BAU by 2050, the Mode Shifting lever for passenger vehicles is set to 12%, with the implementation schedule increasing from 0% in 2021 to 81% in 2030 and 100% in 2050. |
| **Transportation** | ACT and Low NOx rules for medium and heavy-duty vehicles; <br> IRA Section no. 60101 supports addition of clean heavy-duty vehicles;<br> IIJA Section no. 30018, 71101 supports replacement and addition of school buses with clean vehicles | Zero Emission Vehicle Sales Standard lever for Buses and Light Commercial Trucks set to 46%. Implementation schedule aligns with Energy Innovation’s modeling of ACT through 2025 then falls to zero in 2026 (commercial clean vehicle credits no longer available after Sep 30 2025). |
| **Transportation** | Advanced Clean Cars (LEV/ZEV) | Following modeling done for California's ACCI rule, Colorado ACC I is modeled using the Zero Emission Vehicle Sales Standard lever for passenger cars and SUVs set to 22%, with implementation of 54.6% in 2021, 65.9% in 2022, 77.3% in 2023, 88.6% in 2024, 74.8% in 2025 and 0% in 2026 onward. <br> ACC I is also modeled using the Fuel Economy Standard lever for passenger cars and SUVs set to 68% with an implementation schedule starting at 3.7% in 2021 to 18.4% in 2025 held through 2050. |
| **Transportation** | HB23-1272 tax credit for sustainable aviation fuel | Linear decrease in aviation emissions by approximately 5% by 2032 (using mode shifting lever as a proxy for sustainable aviation fuel impact and assuming 50% of sustainable aviation fuel produced in-state will be consumed in-state). Implementation increases from 0% in 2023 to 100% by 2032. |
| **Agriculture, Forestry, and Land Use** | Support for Colorado's healthy soils programs via SB21-235 and HB21-1181 | Cropland and Rice Measures lever set to 25%, with implementation of 0% in 2021 and 100% in 2050. |


### 2025 Near-Term Actions Scenario Documentation

The Near-Term Actions (NTA) scenario builds on the RBL scenario and reflects policies in process and pending adoption as of December 2023, as well as those the State proposed in [Roadmap 2.0](https://energyoffice.colorado.gov/ghg-pollution-reduction-roadmap) to pursue additional statewide emissions reductions. The NTA scenario also includes uptake of new and pending funding opportunities. Though some of these policies have since been partially or fully implemented, the scenario was maintained for alignment with and comparability to Roadmap 2.0 and the previous inventory.

The table below documents the policies modeled in the NTA scenario and their respective modeling approaches for the 2025 [Colorado GHG Inventory](https://cdphe.colorado.gov/environment/air-pollution/climate-change/GHG-inventory). 

Note that in some cases, policies were translated into representative uses or proxy levers, so the text in the "Modeled as…" column may not perfectly reflect the policy mechanism that exists in Colorado. However, the goal is to use EPS policy levers to reasonably reflect the effect of the Colorado-specific mechanism.

| **Sector**   | **Policy/Strategy** | **Modeled as...**   |
| --- | --- | --- |
| **Buildings** | Current zoning and higher prices under current land use policies result in a decrease in single-family dwellings and an increase in multifamily complexes, which consume less fuel and are more energy efficient | To match original modeling for Roadmap 2.0, the lever for Building Energy Efficiency Standards for rural and urban residential housing is set to 30%. The implementation schedule ramps up to 82% in 2030 and 100% in 2050. |
| **Buildings** | Develop 2035 Clean Heat Targets | The Building Component Electrification lever is adjusted to represent progress toward the adopted 2035 CHP reduction target of 41% along a pathway to achieve a 90% reduction in gas consumption by 2050 for the buildings sector. This reduction was modeled with the Building Component Electrification lever set at 73% with 93% implementation in 2035 and 100% in 2050. The modeling assumes that the other major buildings sector Near-Term Actions do not lead to substantial additional emissions impacts but instead contribute and enable the achievement of the CHP targets. |
| **Electricity** | Update Clean Energy Planning for 2040;<br> 2030 Clean Energy Plans and other resource plans in process but not finalized | To build on existing modeling for 2030 Clean Energy Plans, the Clean Electricity Standard lever is set at 100% in 2040. 2030 implementation is set at 86% in order to represent state analysis on 2030 electricity sector emissions projected using most recent utility plans submitted as of December 2025 and increases to 100% in 2040. |
| **Industry** | Expand Funding for Voluntary Industrial Decarbonization Projects | Modeled expected abatement of 18 million dollars in Clean Air Program grant funding using dollars per emissions from eleven projects. Electrification lever for boilers & steam and low-temperature nonboiler equipment set to 58% for all industries except for oil and gas extraction, with an implementation schedule 0% in 2023 and 100% by 2028. |
| **Industry** | Net-GHG-Neutral Oil and Gas Development and Operations | Assuming oil and gas operations become more efficient and electrify, the electrification lever for oil and gas extraction low-, medium-, and high-temperature nonboilers was set to 100%, with implementation increasing from 0% in 2023 to 100% in 2050. |
| **Industry** | Comprehensive Regulatory Regime to Support CCUS | Matched abatement from CCS projects that are planned for ethanol facilities. Pulled the Carbon Capture and Sequestration lever (for food, beverage, and tobacco) to 69%, with implementation increasing from 0% in 2025 to 15% in 2026 and 100% in 2028. |
| **Industry** | Expanded Methane Regulations for Waste and Coal Mining | Matched expected reduction in emissions from coal mining by 2030 relative to the Roadmap Baseline by pulling the Methane Destruction lever for Coal Mining to 30%, with implementation increasing from 0% in 2023 to 100% in 2030. <br> Matched expected reduction in emissions from landfills from the proposed rulemaking by 2030 relative to the Roadmap Baseline by pulling the Methane Capture lever for Water and Waste to 85%, with implementation increasing from 0% in 2026 to 100% in 2033. |
| **Industry** | Lead a Regional Strategy on Direct Air Capture (DAC) | Matched annual abatement of 1,000 metric tons expected from the Global Thermostat's DAC facility in Colorado. Note that the actual impact of DAC will scale with purchase of carbon offsets. Research and Development: Direct Air Capture lever is set to 1%, with implementation schedule increasing from 0% in 2023 to 100% in 2024 and onward. |
| **Transportation** | Enact land use policies that increase access to public transit, particularly at reduced and waived fees | Mode shifting lever for passenger vehicles set to 21% to model LDV vehicle miles traveled (VMT) reduction below BAU by 2050 in alignment with CDOT analysis. The implementation schedule ramps up nonlinearly from 0% 2021 to 100% 2050. |
| **Transportation** | Clean Miles Standard, which will require transportation network companies and potentially other high-mileage fleets to achieve 80% electric vehicle stock by 2030 and 100% by 2035 | Zero Emission Vehicle Sales Standard lever pulled to 22% for passenger cars and SUVs, with the implementation schedule adjusted slightly from the RBL to account for additional electrification of Colorado’s fleet by 2035 due to this policy. The implementation schedule is extended past 2025 at 50% in 2026, 25% in 2027, 12% in 2028, 5% in 2029, and 0% in 2030 onward. |
| **Agriculture, Forestry, and Land Use** | Increasing Soil Health | Modeled abatement of approximately 470,000 metric tons of CO2e annually through 2026, which reflects CDA’s estimate for abatement levels if 10% of Colorado’s farms were managed for healthy soils using Cropland and Rice Measures (100% with full implementation in 2026) and Shift to Non-Animal Products (7% with full implementation by 100%) levers as proxies to model expected reductions (not behavior change). |
| **Agriculture, Forestry, and Land Use** | Increasing Funding for ACRE3 program (which targets agriculture efficiency) | Extrapolated 2022-2023 level of ACRE funding through 2025 and modeled expected abatement using Industry Efficiency lever (agriculture and forestry) set at 20%, with implementation schedule increasing from 0% in 2023 to 100% in 2025 |


## Acknowledgement of Contributors and Reviewers

We would like to acknowledge the following people who helped adapt the Energy Policy Simulator for Colorado.  Individuals are listed alphabetically.

* Center for New Energy Economy
* Energy Foundation
* Shannon Hill, CDPHE
* Olivia Ashmoore, Energy Innovation LLC
* Wendy Jaglom, RMI
* Megan Mahajan, Energy Innovation LLC
* Robbie Orvis, Energy Innovation LLC
* Kayleigh Rubin, RMI
* Addy Sonaike, RMI

## Version History

### **4.0.4 - January 30, 2026**
* Launch of the custom Colorado EPS
* Scenarios
  * RBL and NTA scenarios added to model the active and planned policy actions identified in the Colorado 2025 GHG Inventory and the second GHG Pollution Reduction Roadmap
* Calibration of source emissions to the Colorado 2025 GHG Inventory
  * Industry process emissions modified by GHG for: cement, iron and steel, chemicals, other manufacturing, glass, waste and water, oil and gas extraction, energy pipelines and gas processing, coal mining
  * Industrial fuel use across all industry categories and fuels
  * Commercial buildings energy consumption 
  * Agriculture and land use emissions aligned with RTI International’s modeled emissions projections
* Removal of assumptions in input data related to key state policies in order to model them using policy levers
  * Clean Energy Plan assumptions modified in BAU RPS Data by Subregion and RPS Qualifying Source Definitions
  * Comanche 3 retirement assumptions modified in BAU Cap Retirements before Quantization and in Cap Ret per Unit Net Loss
  * Colorado’s oil and gas methane rules assumptions modified in BAU Process Emissions 
  * Colorado’s HFC phaseout rule assumptions modified in BAU Process Emissions
  * ACC and ACT rule assumptions modified in BAU Required ZEV Sales Perc by Subregion
* Data updates
  * Energy consumption data updated to 2023 SEDS release (BAU Components Energy Use, BAU Industrial Fuel Use before CCS, and BAU Cargo Distance Transported Relative to Start Year)

## Software License

The Energy Policy Simulator (EPS) is released under the GNU General Public License version 3 (GPLv3) or any later version and is free and open-source software.  Refer to the [Software License](../software-license) page for full details.

## Image Credits
xx<br/>
xx<br/>
xx<br/>
License: x
Changes: Image has been cropped and a fade has been applied to the left side.<br/>