---
title: "Canada Energy Policy Simulator"
---
**Page last updated: June 2023**

The Energy Policy Simulator (EPS) is a free and open-source computer model originally created by Energy Innovation LLC and adapted for Canada in partnership with the Pembina Institute.
## Model Download
The Canada Energy Policy Simulator may be used on this website through your web browser, or the full version may be downloaded to your computer by clicking the button below. Note that you will need to go through the steps explained on the **EPS download page** in order to install the required software and make use of the full version of the model.
## Business As Usual (BAU) – Baseline 
### Overarching Assumptions
* The BAU scenario only includes policies fully developed and legislated into law by the end of 2021. Any announced, developing, or developed but not legislated policies were not included in the BAU, but will be reflected in incremental policy scenarios 

* The model assumes policies in Canada are applied nationally.

* The full carbon price (e.g. increasing by $15 per year starting in 2023 until reaching $170/tonne in 2030) is applied to the transportation and buildings sector, but not in other sectors, where the carbon price was left at zero. This is because carbon pricing for the other sectors includes free allocations, and is applied differently across different provinces. 

  * The user can change the national “simplified carbon price” lever to apply an additional carbon price (beyond the initial assumption) to any sector. For example, adding a $10 carbon price in the buildings and transportation sectors yields a carbon price of $180/tonne, whereas applying $10 in the industry sector will only apply $10/tonne for the entire sector. See policy description for more details. 

* Projections to the year 2050 were based on sources that use legislated policies at the end of 2021.

* Existing legislated policies were assumed to remain unchanged between 2030 and 2050 (e.g. Clean Fuel Regulations, carbon tax). 

* Where variable-specific forecasts were unavailable, forecasts for related variables were used as proxies to model change in future years. For data with gaps between years, we linearly interpolated between datapoints and held it constant beyond the final datapoint.  

* Reporting structures vary significantly between sources, so when data was taken from different sources, mappings would need to be done to see how the data most accurately translated to our model. As such, sector, file, and variable-specific data may not match up exactly with other sources.

* Canada Energy Futures 2021 was used as a primary input for forecasts to 2050 unless a more detailed dataset exists.

* Where provincial data showed significant variations, a weighted average was used to represent values for Canada. 

* The model BAU inputs were completed using data from Canada, except where Canadian data does not exist in the public domain. In these cases, U.S. data was used, as it is expected to be similar to Canadian data. 

* Emissions results for years 2019-2021 were matched with Canada’s National Inventory Report (NIR-2021) on a sector-by-sector basis.  
## Key Data Sources
* Canada Energy Regulator

* Natural Resources Canada

* Stats Canada

* Transport Canada

* Environment and Climate Change Canada

* U.S. Energy Information Administration

* U.S. Environmental Protection Agency 

* U.S. National Renewable Energy Laboratory
## Sector Assumptions 


| Sector | Assumption|
| --- | --- |
| Buildings | <ul><li>Urban and rural residential ownership percentages assumed to be the same to 2050.</li><li>Carbon pricing is assumed to be unchanged beyond 2030 to 2050 at $170/tonne for the applicable sectors.</li></ul>|
| Carbon Capture and Storage| <ul><li>Used the U.S. model approach, applying calculated Capacity Factors for CCS plants to their capacities to find the amount of CO<sub>2</sub> captured.</li></ul>|
| District Heat | <ul><li>Fraction of heat provided by each fuel remains constant (in the absence of available future projections).</li></ul>|
| Electricity | <ul><li>The model simplifies Canada as one grid and doesn’t allow for sub-grids to be modelled.</li><li>The model uses annual time series for electricity which may not reflect sub-grid seasonal peaks. </li><li>U.S. data (2022 NREL ATB data) used for Capacity Construction and Maintenance Costs, as well as Heat Rates. The Canada Energy Regulator Modelling team uses the same dataset, as they determined this was more representative of Canada than the limited Canadian data available. </li><li>Coal retirement schedule was adjusted in the model to reflected planned retirements. This is not reflected in the input files due to limitations of how the input files reflect these changes, but has been matched with the output of the BAU scenario. </li><li>Endogenous learning is used for some variables (e.g., battery, wind, and solar costs). See model documentation for details on [endogenous learning](https://docs.energypolicy.solutions/endogenous-learning).</li><li>Hydroelectricity is treated as a plant that provides flexibility to the grid (unlike in the U.S. model) since Canada has large hydroelectric capacity.</li><li>No transmission capacity additions included in the BAU scenario.</li><li>Electricity imports assumed to have the same generation mix as the U.S. since it is the only country Canada imports electricity from. Average U.S. electricity price also used as the price on electricity imports.</li></ul>|
| Fuels | <ul><li>Where some fuel data could not be found for Canada, U.S. fuel data used  (e.g., biomass fuel prices).</li><li>Fuel taxes were averaged for all provinces/territories (since it varies) and applied to fuels.</li></ul>|
| Direct Air Capture| <ul><li>Direct Air Capture (DAC) scaled by GDP from IEA DAC data, based on 1.5<sup>o</sup>C warming scenario.</li></ul>|
| Hydrogen | <ul><li>The share of blue vs. green hydrogen production is taken from Canada’s Energy Future 2021. It starts with 10% green/90% blue in 2029, changing to 20% green/80% blue in 2050.</li></ul>|
| Industry | <ul><li>BAU Industrial Fuel Use before CCS does not include fuels transformed into electricity. 100% of the waste industry energy use is assumed to be electricity. </li><li>Energy demand from industry includes producer use.</li></ul>|
| Land | <ul><li>The share of forest that is suitable for improved forest management was assumed to be 10%.</li><li>LULUCF Anthropogenic Pollutant Emissions projections were from Canada’s 5th Bi-Annual emissions, from 2015 to 2019.</li><li>A straight line method to fill the values from 2020 to 2030 were used to reach the -30 MT CO<sub>2</sub>e target from Canada’s ERP2030.</li></ul>|
| Transportation | <ul><li>Light Duty Vehicles (LDV) PHEVs have gasoline engines and Heavy-Duty Vehicles (HDV) PHEVs have diesel engines.</li><li>The model does not have a specific parameter for Medium Duty Vehicles (MDVs); instead the “Motorcycle-Freight” (typically insignificant) parameter was used as a work-around to represent MDVs in the model. Lumping MDVs with HDVs or LDVs did not yield representative results with referenced datasets.</li><li>The full carbon price (e.g. increasing by $15 per year starting in 2023 until reaching $170/tonne in 2030) is applied to the transportation sector.</li></ul>|



# Illustrative Scenarios

Two scenarios are included with the simulator as an example of policy packages. 

**“Path to 2030”** 
scenario models a combination of policies that shows Canada achieving its 2030 goal. This includes an approximation of many policies in the Federal 2030 Emission Reduction Plan (ERP), but is not limited to only the policies in the ERP. 

**“Path to 2050”** 
scenario builds upon the Path to 2030 scenario by increasing ambition of the policies implemented from Canada’s ERP2030 plan by either increasing the magnitude of change created, accelerating the proposed implementation schedule, or extending the policy trend to the year 2050.  
For a more detailed explanation of these scenarios, and answers to other common questions, please email policysolutions@pembina.org.

# Acknowledgement of Contributors and Reviewers
We would like to acknowledge the following people who helped adapt the Energy Policy Simulator for Canada. Individuals are listed alphabetically.

* Andre Dixon, Pembina Institute

* Eyab Al-Aini, Pembina Institute

* Jared Connoy, Pembina Institute

* Jason Lam, Pembina Institute

* Olivia Ashmoore, Energy Innovation LLC

* Robbie Orvis, Energy Innovation LLC

# Version History
## 3.4.7 – June 13, 2023
* Updated model platform to 3.4.7 from 1.4.3
## 1.4.3 – June 26, 2019
* Updated core files to 1.4.3
* Updated Canada data for compatibility with 1.4.3
* Various other Canada data updates
* Updated scenarios, added youth policy design contest winner's scenario
## 1.4.2 – January 29, 2019
* Updated core files to 1.4.2
* Updated Canada input data for compatibility with 1.4.2
* Updated scenarios
## 1.3.2 – March 26, 2018
* Initial public release
# Software License
The Energy Policy Simulator (EPS) is released under the GNU General Public License version 3 (GPLv3) or any later version and is free and open-source software. Refer to the Software License page for full details.

## Image Credits
Ottawa Parliament at Night<br/>
Doug Tanner<br/>
[https://www.flickr.com/photos/dougtanner/12688950314/](https://www.flickr.com/photos/dougtanner/12688950314/)<br/>
License: Attribution-NonCommercial-NoDerivs 2.0 Generic (CC BY-NC-ND 2.0)<br/>
Changes: Image has been cropped and a fade has been applied to the left side.<br/>