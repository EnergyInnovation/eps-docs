---
title:  California Energy Policy Simulator
---

The California Energy Policy Simulator (EPS) is a free and open-source computer model created by [Energy Innovation LLC](https://energyinnovation.org/) and [Rocky Mountain Institute](https://rmi.org/).  It is adapted from software originally created by [Energy Innovation LLC](https://energyinnovation.org/).

## Model Download

The California Energy Policy Simulator may be used on this website through your web browser, or the full version may be downloaded to your computer by clicking the button below.  Note that you will need to go through the steps explained on the [EPS download page](../download) in order to install the required software and make use of the downloadable version of the model.

<p><a href="https://github.com/EnergyInnovation/eps-california/archive/refs/tags/4.0.4.zip" class="btn">Download the California Energy Policy Simulator</a></p>

[Click here](https://energypolicy.solutions/simulator/california/en/932e552) for access to the previous version of the public model, including access to saved scenarios.

## U.S. State EPS Methodology

The [U.S. State EPS Methodology](../us-state-eps-methodology) page details our basic modeling assumptions, data sources, and methodology by sector. Additionally, we include information on the business-as-usual (BAU) and nationally determined contribution (NDC) scenario assumptions.

## Acknowledgement of Contributors and Reviewers

We would like to acknowledge the following people who made the U.S. State Energy Policy Simulators possible.

* Ashna Aggarwal, RMI
* Olivia Ashmoore, Energy Innovation LLC
* Kyle Clark-Sutton, RMI
* Rachel Goldstein, Energy Innovation LLC
* Nathan Iyer, RMI
* Wendy Jaglom, RMI
* Megan Mahajan, Energy Innovation LLC
* Robbie Orvis, Energy Innovation LLC
* Kayleigh Rubin, RMI
* Addy Sonaike, RMI

## Version History

### **4.0.4 - April 1, 2025**
* New Features
  * Updated to 4.0.4 EPS model platform
  * Adds a 'Federal Policy Repeal and Rollback' scenario to model the repeal of the Inflation    Reduction Act and select EPA rules affecting greenhouse gas emissions
* Data updates
  * Updates calculations for BAU vehicle tax credits 
  * Fixes to BAU clean electricity tax credit calculations and CCS tax credit calculations
  * Updates all policy implementation schedules to start in 2025
  * Updates output currency year to 2024
  * Recalibrates the share of costs that to be covered to be considered profitable and capacity supply curves for the electricity sector
  * Updates BAU planned capacity additions to use latest EIA data on plants that have received regulatory approval
  * Updates natural gas prices based on latest gas futures data
  * Updates government revenue accounting settings to use deficit spending for all government cash flow types
  * Updates to capacity factors for new onshore wind
  * Changes the repayment period for capacity market changes to 3 years
  * Updates transmission construction costs to exlucde spur line costs, which are captured separately
  * Updates input-output data to use values from the Economic Census for some states and sectors
  * Fixes mistake in process emissions file to calculate methane emissions

### **4.0.2 - September 17, 2024**

* Updated to 4.0.2 EPS model platform
* Data Updates
  * Updated BAU to reflect components of the Inflation Reduction Act and latest EPA rules (see documentation)
  * Updated input data to the latest available version from data sources, including the U.S. Energy Information Administration and the 
    U.S. Environmental Protection Agency

### **3.3.1.1 - October 7, 2022**

CHANGES RELEVANT TO BAU SCENARIO

1.	Inclusion of Advanced Clean Cars policy by the California Air Resources Board. 

In August 2022, the state set the goal of reaching 100 percent zero emission vehicles for sales of new cars and SUVs sales – technically, light duty vehicles – by 2035. Previously, this Advanced Clean Cars strengthening was included in the Committed Policies Scenario, since officials were still finalizing the policy setting process. As an implemented policy, this is now included in the BAU Scenario, reflected in changes to the BAU electric vehicle minimum sales standard variable.  

2.	Delayed Diablo Canyon nuclear plant retirement per Senate Bill 846

The update accounts for passage of Senate Bill 846, with the BAU scenario setting retirement of California’s nuclear generation capacity for 2030 and 2031. This modification is straightforwardly accomplished through changes to the BAU capacity retirements input variable. 

Endogenous adjustments related to this change in nuclear capacity as well as greater electricity demand from inclusion of Advanced Clean Cars in the BAU Scenario necessitates an update to electricity sector BAU policy. The variable defining BAU renewable portfolio policy is reset to stay on track for the current targets of 38 MMT for 2030 and 32 MMT for 2032.

3.	Changes related to the federal Inflation Reduction Act

The newly released version updates BAU incentives for electricity generation (EPS variable BS) and electric vehicles (EPS variable BESP) to account for measures in the federal Inflation Reduction Act.

4.	Refinements to transportation sector inputs 

The September 2022 update makes minor changes transportation sector input data.

a.	Sets shorter average lifetime for freight trucks to better reflect the California vehicle population. For more information, review the file “Avg Vehicle Lifetime.xlxs” in the “trans” folder (short for transportation folder) within the “InputData” folder included with downloaded model. The “Avg Vehicle Lifetime.xlxs,” like other input data files, provides more detail about the reference. The change to average vehicle life necessitates recalibration of the variable Share of Cargo Distance Transported that is New This Year to rebalance sales and retirements consistent with overall travel demand. 
b.	Another change relates to the small amount of natural gas used for freight trucks, which is treated as biogas, i.e., methane gas derived from biogenic sources. This updated biogas assumption applies only to natural gas used in light, medium and heavy-duty motor vehicles for freight transport. Conventional natural gas and emission factors are used for marine, rail, or aviation transportation. This updated input variable is similar 2022 Scoping Plan modeling with further details in Appendix H: Table H-12. Biomass feedstocks, fuels, and sectoral allocation.  Under standard emission accounting practices, combustion of biogas and other methane from plant matter is assigned a carbon dioxide emission factor of zero, under the convention that land-based accounting should capture these effects. For some context about the magnitude of this change, it has the effect of reducing emissions by 0.3 million metric tons of carbon dioxide equivalent (CO2e) in 2030.

CHANGE RELEVANT TO COMMITTED POLICIES SCENARIO
 
With this update, the Committed Policies Scenario no longer includes strengthening EV sales standards for light-duty passenger vehicles, an adjustment necessitated by Inclusion of Advanced Clean Cars strengthening in the BAU Scenario, discussed above. Previously, in the original release, the Committed Policies Scenario had included Advanced Clean Cars strengthening.

CHANGE RELEVANT TO DEEPER DECARBONIZATION SCENARIO

Like the Committed Policies Scenario, the Deeper Decarbonization Scenario requires adjustment due of EV policies due to the inclusion of the Advanced Clean Cars update in the BAU Scenario. In the updated model, setting the additional minimum requires sales of LDV passenger EVs to 34 percent reached in 2030. 

Additionally, the updated Deeper Decarbonization Scenario adds a policy reducing imported electricity generated from natural gas and petroleum fuels, starting in 2026, reaching zero in 2035. This is done to achieve power sector carbon neutrality in 2035. For the EPS to model carbon neutrality before 2045 requires such an accommodation for two reasons. First, as discussed, the BAU Scenario assumes imported electricity generated by fossil combustion reaches zero in 2045.  Second, at present, imported electricity is not affected by changes to renewable or clean energy standards in the EPS. (There are few other major economies in which imported electricity is such a large share.) This policy change lowers emissions about 1.5 million metric tons of carbon dioxide equivalent (CO2e) in 2030 and 2.5 million metric tons of carbon dioxide equivalent (CO2e) in 2035.

### **3.3.1 - June 16, 2022**

* New Input Data
  * Completely updated the input data and extended the time horizon from 2030 to 2050
  * New data uses a mix of CEC projections, E3 Pathways data, and other publicly available sources to project future energy demand and emissions.

* New Input-Output Model
  * An economic input/output (I/O) model has been added as a component of the Energy Policy Simulator.
  * New output metrics include the change in gross domestic product (GDP), employment (jobs), total employee compensation, average compensation per employee, number of union and non-union jobs, government spending, budget deficit/surplus, household tax revenue, payroll tax revenue, corporate income tax revenue, size of the national debt, and interest paid on the national debt.
  * Changes in GDP, jobs, and compensation can also be visualized disaggregated by economic sector or by their direct, indirect, and induced components.
  * Respending of changes in cash flow for government, households, and industries is now accounted for, providing a holistic look at policy impacts on economic activity.
  * New Government Revenue Accounting (GRA) settings allows the user to specify how government raises or spends changes in revenue caused by the policy package.  Options include changes in regular spending, deficit spending, household taxes, payroll taxes, and corporate income taxes.
  * Feedback loops from the I/O model to the Transportation, Buildings, and Industry sectors capture the energy demand and emissions associated with indirect and induced economic activity.
  * A new [documentation page](../io-model) explains the I/O model in detail.
  * We gratefully acknowledge the invaluable contributions of the [American Council for an Energy-Efficient Economy](https://www.aceee.org/) (ACEEE), [Jim Barrett](https://www.barretteconomics.com/), and [Skip Laitner](https://www.linkedin.com/in/skip-laitner-746b124/) for their guidance and advice in implementing this feature, and for allowing us to learn from the [DEEPER I/O model](https://www.aceee.org/files/pdf/fact-sheet/DEEPER_Methodology.pdf), originally created by Skip Laitner.

* Improved Public Health Calculations
  * In addition to the policy package's effects on premature mortality (introduced in version 1.0.3), the EPS now calculates impacts on 10 additional health outcomes, including lost workdays, hospital admissions, non-fatal heart attacks, asthma attacks, respiratory symptoms and bronchitis.

* New Features
  * Added capability to simulate COVID-19 recession impacts, adjustable in the web interface via a policy-like slider and implementation schedule.  This simulates effects of exogenous GDP changes on demand for energy, energy-using services, and products.  It can be adapted for different countries or reconfigured to represent other economic recessions (or booms) via updated input data.
  * New Policy: Buy In-Region Products allows the user to specify a percentage of imported products (in the BAU case) that are shifted to domestic suppliers (in the policy case) for each individual industry.
  * Added demographic breakdowns disaggregating changes in lives saved due to reduced pollution by sex, race, and Hispanic or Latino status.  New graphs show results as absolute numbers and as percent changes relative to BAU.
  * The EPS core model structure now supports model run end dates as far out as 2100.  Each EPS region's developers may choose their preferred model run end date.  (The U.S. national model's end date remains 2050.)
  * New Policy: N<sub>2</sub>O abatement (from the chemicals industry, primarily from nitric and adipic acid production)
  * New policy lever to enable mandated power plant retirement schedule 
  * New Policy: Subsidize electricity capacity construction
  * New Policy: Shift Hydrogen Production Pathway (e.g. in the U.S., from steam reforming of natural gas to electrolysis)
  * New Policy: Reduce EV Range Anxiety and Charging Time (with support variable trans/BRAaCTSC)
  * New Policy: EV Charger Deployment (with support variable trans/EoCSoEVMS)
  * New Policy: Hydrogen Vehicle Sales Minimum
  * New Policy: reduction in non-energy, non-agriculture industry product demand (e.g. material efficiency, product longevity, re-use, intensification of product use, etc.)
  * New Policy: reduction in fossil fuel exports
  * New Policy: shift animal product use to non-animal product use
  * New Policy: Fuel Price Deregulation
  * A new control lever, plcy-ctrl-ctr/BENCEfCT, allows non-CO2 emissions to be exempted from the carbon tax
  * New Policy: Toggle Whether Carbon Tax Affects Process Emissions (reverses the behavior of the corresponding control lever in the policy case)
  * New Policy: Toggle Whether Carbon Tax Affects Non CO2 Emissions (reverses the behavior of the corresponding control lever in the policy case)
  * A new control lever, plcy-ctrl-ctr/BAEPAbCiGC, controls whether policy-driven changes in electricity generators' costs affect electricity prices
  * Projected future changes in BAU Output, BAU Employment, BAU Value Added, and BAU Employee Compensation disaggregated by ISIC code improve the accuracy of some input/output model results
  * Added more detail to the Industry Category subscript, increasing the number of separately broken out industries from 8 to 25

* New Sectors
  * Geoengineering.  Currently, the geoengineering sector includes one technology, direct air capture (DAC), and its associated policy.
  * New Hydrogen Supply Sector
	* There now exists a new sector in the EPS that calculates hydrogen production (in response to hydrogen demand from other sectors) and associated energy use, emissions, costs/savings, electricity demand response potential, etc.
	* New Policy: Shift Hydrogen Production Pathway (e.g. in the U.S., from steam reforming of natural gas to electrolysis)
	* District Heating Sector renamed District Heat and Hydrogen Sector, grouping these energy carriers in various totals and output graphs

* Fuels
  * Five new fuel types have been added: (1) crude oil, (2) heavy or residual fuel oil, (3) LPG / propane / butane, (4) municipal solid waste, and (5) hydrogen.  Each of these fuels has been added to each sector that can use it.

* Financial Calculations and Outputs
  * The Cash Flow Entity subscript has been redesigned.  It now contains the following nine entities: government, nonenergy industries, labor and consumers, foreign entities, electricity suppliers, coal suppliers, natural gas and petroleum suppliers, biomass and biofuel suppliers, other energy suppliers.  This helps with tracking cash flow allocations more uniformly and allows handling of imports and exports to/from the modeled region.

* Web Interface
  * Added a new user interface (UI) for setting policy values and implementation schedules for multiple subscripted elements of the same policy.  Updates to WebAppData.xlsx format support the improved UI.
  
### **1.4.3 - January 15, 2020**
* Official launch of the California EPS

## Software License

The Energy Policy Simulator (EPS) is released under the GNU General Public License version 3 (GPLv3) or any later version and is free and open-source software.  Refer to the [Software License](../software-license) page for full details.

## Image Credits
Southern California Wind Turbines<br/>
Altus<br/>
[https://www.flickr.com/photos/altus/36035669116/](https://www.flickr.com/photos/altus/36035669116/)<br/>
License: Attribution-NonCommercial-NoDerivs 2.0 Generic (CC BY-NC-ND 2.0)<br/>
Changes: Image has been cropped and a fade has been applied to the left side.<br/>
