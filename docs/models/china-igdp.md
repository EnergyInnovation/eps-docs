---
title:  "China (iGDP) Energy Policy Simulator"
---

The China (iGDP) Energy Policy Simulator (EPS) is a free and open-source computer model created by [Energy Innovation (EI)](https://energyinnovation.org/) and the [Institute for Global Decarbonization Progress (iGDP)](http://www.igdp.cn/).  It is adapted from software originally created by EI.

## Model Download

The China (iGDP) Energy Policy Simulator may be used on this website through your web browser, and a download of the full version is available upon request. Please submit your request through this [online form](https://wkf.ms/3hIh7YF).

## Note on Different Versions of the China EPS

The EPS software is free and open-source, and the China (iGDP) EPS is built with publicly available data. It is one of two national-level China EPSs. The other model is the [China (NCSC) EPS](https://energypolicy.solutions/home/china/en), which contains some proprietary input data that are not available for download. Model results differ between the NCSC and iGDP versions of the China EPS due to differences in the proprietary input data used in the NCSC EPS and the public inputs used in the iGDP EPS.

## Acknowledgement of Contributors and Reviewers

We would like to acknowledge the following people who helped adapt the Energy Policy Simulator for China. Individuals are listed alphabetically by first name.

* Jeffrey Rissman, Energy Innovation LLC
* Li Yang, iGDP
* Lynn Price, Lawrence Berkeley National Laboratory
* Megan Mahajan, Energy Innovation LLC
* Meian Chen, iGDP
* Min Hu, iGDP
* Minshu Deng, Energy Innovation LLC
* Nan Zhou, Lawrence Berkeley National Laboratory
* Nina Khanna, Lawrence Berkeley National Laboratory
* Olivia Ashmoore, Energy Innovation LLC
* Robbie Orvis, Energy Innovation LLC
* Todd Fincannon, Energy Innovation LLC
* Xi Xi, iGDP
* Xiaoxue Hou, Energy Innovation LLC
* Xindi Li, iGDP
* Xiuli Zhang, Energy Innovation LLC

## Version History

### **3.4.9.3 - March 28, 2025**

* Bug Fix
  *  Corrections to the conversion factor in web-app/OCCF.
  *  Adjustments to the output graph units for hydrogen consumption, LCOE, and electricity fuel cost.
* Data Updates
  *  Revisions to process emissions in indst/BPE and indst/PERAC.

### **3.4.9.2 - December 16, 2024**

* Data Updates
  * Updated io-model/BPCiObIC to align projected changes in output with assumptions used in industry energy consumption calculations.
  * Adjusted energy intensity projections in bldgs/BCEU, bldgs/SYCEU, and indst/BIFUbC based on a more recent version of China's energy balance.
  * Modified process CO2 emissions in indst/BPE and indst/PERAC.
  * Updated trans/BAADTbVT, trans/BCDTRtSY, and trans/SYVbT to align with a more recent version of China's energy balance.
  * Increased travel by rail in trans/BAADTbVT and trans/SYVbT.
  * Updated policy scenarios, including a new iGDP carbon neutrality scenario, and policy scenario documentation.

### **3.4.9.1 - June 14, 2024**

* Data Updates
  * Modified other rural energy consumption structure in bldgs/BCEU to avoid negative values in 2059 and 2060.
  * Round passenger LDV lifetime to an integer value in trans/AVL.
  * Update maintenance costs for freight LDVs and freight HDVs in trans/AVMC.
  * Correct vehicle purchase price calculations in trans/BNVP.

### **3.4.9 - April 15, 2024**

* Updated model platform to 3.4.9 from 3.4.8
* Bug Fix
  * Prevent double counting in increases in fuel use for certain use cases of the industrial fuel shifting policy.
* Data Updates
  * Added nuclear to non-BAU RPS definition in elec/RQSD.
  * Updated policy scenarios and policy scenario documentation.
  * Revised fuel use reduction from building electrification in bldgs/PCFURfE to match China's energy consumption pattern.
  * Updated demand response and grid battery storage capacities in elec/DRC and GBSC using more recent outlooks.
  * Switched to more recent data sources and China multipliers for non-CO2 emissions in indst/BPE and PERAC.
* Web Application Data Updates
  * Corrected BTU to MWh conversion factor in web-app/BCF.

### **3.4.8.1 - March 1, 2024**

* Removed old electricity variables from input data.

### **3.4.8 - January 23, 2024**

* Updated model platform to 3.4.8 from 3.4.7
* New Features
  * The Zero-Emission Vehicle Sales Standard can now be applied to nonroad vehicles in Vensim.
* Bug Fix
  * Prevent rare Vensim error affecting total available capacity by source type caused by a missing MAX function in an electricity sector variable.
* Data Updates
  * Updated capacity additions in elec/BPMCCS and PMCCS.
  * Calibrated transportation stock and sales by adjusting trans/AVL, BCDTRtSY, BMRESP, and SoCDTtiNTY.
  * Updated GDP data in io-model/BGDP with the most recent World Bank historical statistics and OECD forecasts.
  * Recalibrated historical industrial fuel use in indst/BIFUbC against 2019-22 energy balance data.
  * Updated future industrial energy consumption projections in indst/BIFUbC and BPoIFUfE using iGDP methodology.
  * Added conversion losses back into indst/BIFUbC to ensure correct accounting for fuel imports and exports.
  * Adjusted fraction of heat provided by fuel and fraction of heat from CHP in dist-heat/BFoHPbF and BFoHfC, respectively.
  * Set pre-determined capacity retirements to zero after 2030 in elec/BCRbQ and instead allow the model to endogenously calculate retirements.
  * Recalibrated historical buildings energy use and updated future projections with iGDP methodology in bldgs/BCEU, SYCEU, BDEQ, and SoCEUtiNTY.
  * Updated lignite values in elec/BECF and MPCbS to represent peaker coal.
  * Recalculated heat rate for coal in elec/BHRbEF to account for units smaller than 6000 kW and self-consumption.
  * Turn off COVID-related GDP adjustments in ctrl-setting/EGGRA since transportation, buildings, and industry energy use have all been updated to reflect historical data.
* Web Application Data Updates
  * Correct name and description for district heat fuel shifting policy lever to align with previous data update to dist-heat/RHFF.
  

### **3.4.7 - July 26, 2023**

* Updated model platform to 3.4.7 from 3.4.3
* New Features
  * The EV Minimum and Hydrogen Vehicle Minimum policies have been replaced with a single Zero-Emissions Vehicle (ZEV) standard policy. Which vehicle technologies qualify as ZEVs can be customized in trans/BVTQaZ and trans/VTQaZ for a policy scenario that differs. The EPS selects between qualifying vehicle technologies via economic factors. The new ZEV standard policy only applies to road vehicles, not aicraft, rail, or ships.
  * BAU ZEV standards may be specified separately for up to 60 subregions (such as U.S. states within the national-scale U.S. model), and the EPS will increase ZEV sales to meet BAU ZEV standards or user-specified ZEV standards only in subregions where the standard is not already being met. This improves accuracy relative to using national, sales-weighted averages.
* Bug Fixes
  * Allow changes in capacity construction subsidies to affect electricity prices
  * Prevent rare Vensim error caused by negative priority values in ALLOCATE AVAILABLE function
* Data Updates
  * Changed to linear projection trends in io-model/BPCiObIC
  * Replaced US data with China data in io-model/TLIM
  * Update labor productivity growth rates to converge with US values in io-model/LPGRbIC
  * Minor corrections to transportation fuel economy variables BHNVFEAL, BNVFE, and SYFAFE
  * Shift coal to biomass and electricity instead of biomass and hydrogen in dist-heat/RHFF


### **3.4.3.2 - May 17, 2023**
* Bug Fixes
  * Fixed minor formula errors in fuels/BFPaT, elec/BGDPbES, indst/BPoIFUfE.
* Data Updates
  * Recalibrated elec/PMCCS to match actual solar and wind capacity development.
  * Updates to elec/ARpUIiRC to reflect that China does not always retire capacity early for economic reasons.
  * Adjusted technology shareweights for MSW and hydro to 0.1 and 1, respectively, in elec/ETS.
  * Updates to coal values in elec/BHRbEF, elec/BPaFF, elec/BECF, fuels/BFPaT, elec/BDSBaPCF.
  * Include self-use electricity for wind and solar in elec/BECF.
  * Refine policy scenario guaranteed dispatch, mandated hydro and nuclear capacity construction, and EV deployment.
  * Updated indst/BIFUbC calculations and added in processing loss as a feedstock.
  * Updated methodology and data source to calculate elec/BHRbEF.
  * Increased gas guaranteed dispatch rate to 40% in elec/BGDPbES to avoid under-dispatch.
  * Lowered capacity factors for wind in elec/BECF to avoid over-dispatch.
  * Added additional non-coal capacity for 2020 in elec/BPMCCS, based on calculations in elec/PMCCS.
  * Updated indst/BPoIFUfE to align with updated indst/BIFUbC data.
  * Updated data source and values for hydgn/EHPpUC.
  * Remove carbon tax from electricity sector in fuels/BCTR to better represent free emissions allowances.
  * Correct conversion factors for hydrogen production in fuels/BFPIaE.

### **3.4.3.1 - February 6, 2023**
* Bug fix
  * Correction to calculations for policy-driven amount of CCS

### **3.4.3 - January 23, 2023**

* Accuracy Improvements
  * BAU output for fuel-supplying ISIC codes is now based on fuel sales and price data from elsewhere in the model rather than taken as input data from I/O data sources, helping to ensure consistency of fuel revenue estimates across different parts of the model
  * BAU jobs and BAU employee compensation in fuel-supplying ISIC codes are now linked to the physical quantity of fuel produced, not revenue, to avoid unrealistic changes in BAU employment and BAU employee compensation when BAU projected fuel prices vary from year to year.
  * Change in employee compensation due to policies is now linked to changes in the physical quantity of fuel produced, not changes in revenue.  (This was already true of jobs but, until now, not employee compensation.)
* Bug Fixes
  * Fixed minor formula errors in trans/BNVP.
* Data Updates
  * Updates in fuels/FPIEBP, fuels/PoFDCtAE, indust/BIFUbC, and indst/BPoIFUfE to fix crude oil fuel export issues.
  
### **3.4.2 - October 10, 2022**

* Initial Release

## Software License

The Energy Policy Simulator (EPS) is released under the GNU General Public License version 3 (GPLv3) or any later version and is free and open-source software.  Refer to the [Software License](../software-license) page for full details.

## Image Credits
Intricate Chinese Architectural design Of A Colorful Temple<br/>
Magda Ehlers<br/>
[https://www.pexels.com/photo/intricate-chinese-architectural-design-of-a-colorful-temple-2846001/](https://www.pexels.com/photo/intricate-chinese-architectural-design-of-a-colorful-temple-2846001/)<br/>
License: Pexels License<br/>
Changes: Image has been cropped and a fade has been applied to the left side.<br/>
