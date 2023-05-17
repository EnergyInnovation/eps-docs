---
title:  "China (2023, iGDP) Energy Policy Simulator"
---

The China (2023, iGDP) Energy Policy Simulator (EPS) is a free and open-source computer model created by [Energy Innovation (EI)](https://energyinnovation.org/) and [innovative Green Development Program (iGDP)](http://www.igdp.cn/).  It is adapted from software originally created by EI.

## Model Download

The China (2023, iGDP) Energy Policy Simulator may be used on this website through your web browser, and a download of the full version is available upon request. Please submit your request through this [online form](https://wkf.ms/3hIh7YF).

## Acknowledgement of Contributors and Reviewers
The China (2023, iGDP) Energy Policy Simulator was adapted by iGDP and Energy Innovation. It is one of two national-level China Energy Policy Simulators.

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
* Xi Xi, iGDP

## Version History

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
