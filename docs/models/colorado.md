---
title:  "Colorado Energy Policy Simulator"
---

The Colorado Energy Policy Simulator (EPS) is a free and open-source computer model created by [Energy Innovation LLC](https://energyinnovation.org/) and [RMI](https://rmi.org/).  It is adapted from software originally created by Energy Innovation LLC.

## Model Download

The Colorado Energy Policy Simulator may be used on this website through your web browser, or the full version may be downloaded to your computer by clicking the button below.  Note that you will need to go through the steps explained on the [EPS download page](../download) in order to install the required software and make use of the downloadable version of the model.

<p><a href="https://github.com/EnergyInnovation/eps-colorado/archive/refs/tags/4.0.4.zip" class="btn">Download the Colorado Energy Policy Simulator</a></p>

[Click here](https://energypolicy.solutions/simulator/colorado/en/5b26453) for access to the previous version of the public model, including access to saved scenarios.

[Click here](https://eps-app-git-develop-energy-innovation.vercel.app/simulator/colorado/en/6e7743c) for access to the previous version of the public model, which was recalibrated to the state's emissions inventory, and used to inform the state's emissions reductions roadmap. 

## U.S. State EPS Methodology

The [U.S. State EPS Methodology](../us-state-eps-methodology) page details our basic modeling assumptions, data sources, and methodology by sector. Additionally, we include information on the business-as-usual (BAU) and nationally determined contribution (NDC) scenario assumptions.

## Acknowledgement of Contributors and Reviewers

We would like to acknowledge the following people who helped adapt the Energy Policy Simulator for Colorado.  Individuals are listed alphabetically.

* Center for New Energy Economy
* Energy Foundation
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

### **3.4.3.10 – February 23, 2024**
* Pre-loaded the Near Terms Action scenario, which builds on progress represented in the Roadmap Baseline scenario with the addition of “Near Term Actions” listed in the CO Roadmap.

### **3.4.3.9 – February 6, 2024**
* Additional updates to the Roadmap Baseline scenario to more accurately represent the impact of policies across sectors.

### **3.4.3.8 – December 14, 2023**
* Data updates to emissions from industrial energy to match inventory data provided by the Colorado Department of Public Health and the Environment.
* Minor adjustments to the emissions reduction targets based on latest inventory data.

### **3.4.3.7 – October 19, 2023**
* Decreasing the buildings electrification lever for heating appliances in tthe Roadmap Baseline Scenario to 90% to model the combined impact of clean heat plans and HB23-1161

### **3.4.3.6 – September 22, 2023**
* Data updates to retire the coal plant, Comanche 3, in 2030 due to an existing retirement plan by the utility, Xcel. Additional minor tweaks were made to the hydrogen vehicle sales standard lever to model the state's hydrogen end-use tax credits

### **3.4.3.5 – September 7, 2023**
* Data updates to industry process emission reduction potential to increase the value of the methane capture and destruction policy levers in order to capture the impact of Colorado's oil and gas regulations to date

### **3.4.3.4 – September 1, 2023**
* Calibration to Colorado’s emissions inventory
  * Colorado EPS emissions are now calibrated to the state’s latest inventory. The input data remains calibrated to U.S. State Energy Data System (SEDS) data where possible.
* Incorporating federal funding
  * Federal funding from tax credits in the Inflation Reduction Act (IRA), and major formula-funded provisions from the IRA and Infrastructure and Investment Jobs Act (IIJA) are now included in Business-as-Usual. To do this, [Energy Innovation’s national model of the IRA](https://energyinnovation.org/wp-content/uploads/2022/08/Updated-Inflation-Reduction-Act-Modeling-Using-the-Energy-Policy-Simulator.pdf) was downscaled to Colorado using the “Low” scenario. 
* Roadmap Baseline scenario
  * This is now pre-loaded into the tool. This scenario reflects the state’s current policies, state policies expected to be in place by the end of 2023, and major provisions in the IRA and IIJA where Colorado expects to receive funds.

### **3.4.3.3 - June 9, 2023**

* Bug fix
  * Prevent rare Vensim error caused by negative ppriority values in ALLOCATE AVAILABLE function

### **3.4.3.2 - May 19, 2023**

* Bug fix
  * Allow changes in capacity construction subsidies to affect electricity prices
### **3.4.3.1 - February 6, 2023**

* Update model to version 3.4.3

### **3.1.1.2 - November 9, 2021**

* Update with additional scenarios showcasing 2021 legislative session and add 2030 target.

### **3.1.1.1 - May 20, 2021**

* Update coal power plant retirement dates from Xcel Energy's recently announced Clean Energy Plan for Colorado. 

### **3.1.1 - Feb 19, 2021**

* Official launch of the Colorado EPS

## Software License

The Energy Policy Simulator (EPS) is released under the GNU General Public License version 3 (GPLv3) or any later version and is free and open-source software.  Refer to the [Software License](../software-license) page for full details.

## Image Credits
Fall Color at Dallas Divide near Ridgway, Colorado<br/>
Thomas Morse<br/>
[https://unsplash.com/photos/cuKKa0vWZSY](https://unsplash.com/photos/cuKKa0vWZSY)<br/>
License: Unsplash<br/>
Changes: Image has been cropped and a fade has been applied to the left side.<br/>