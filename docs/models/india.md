---
title:  "India Energy Policy Simulator"
---

The Energy Policy Simulator (EPS) is a free and open-source computer model originally created by [Energy Innovation LLC](https://energyinnovation.org/) and adapted for India in partnership with [World Resources Institute India](http://wri-india.org/).

## Model Download

The India Energy Policy Simulator may be used on this website through your web browser, or the full version may be downloaded to your computer by clicking the button below.  Note that you will need to go through the steps explained on the [EPS download page](https://docs.energypolicy.solutions/download) in order to install the required software and make use of the full version of the model.

<p><a href="https://github.com/Energy-Innovation/eps-india/archive/3.1.3.5.zip" class="btn">Download the Energy Policy Simulator, India Version</a></p>

## Documentation

Documentation of the model is available [here](https://docs.energypolicy.solutions/).  Documentation is not specific to any model version and therefore applies to both U.S. and India versions of the Energy Policy Simulator.

## Acknowledgement of Contributors and Reviewers
We would like to acknowledge the following people who helped adapt the Energy Policy Simulator for India.  Individuals are listed alphabetically.

* Apurba Mitra, WRI India
* Emily Mangan, WRI
* Jeffrey Rissman, Energy Innovation LLC
* Megan Mahajan, Energy Innovation LLC
* Kamna Mahendra, TERI
* Robbie Orvis, Energy Innovation LLC
* Deepthi Swamy, WRI India

## Version History

### **3.1.3.5 - September 2, 2022**

* Updates to energy and service demand to reflect the low GDP growth pathway from the India Energy Security Scenarios rather than the higher GDP growth pathway used previously
* Various data improvements, including an updated methodology to calibrate start year energy consumption in the transportation and industry sectors
* Minor edits to web app guidance text and updated NDC targets

### **3.1.3.4 - August 5, 2021**

* Updates to default scenarios
* Change output units on several graphs from crores to lakh crores
* Minor edits to web app guidance text

### **3.1.3.3 - July 19, 2021**

* Bug fix to currency conversion for output graphs
* Bug fix to hydrogen BTU conversion factor
* Bug fix to projected coal production, imports, and exports calculations in fuels/BFPIaE
* Update fuel prices in fuels/BFPaT based on more recent data and to better reflect the contribution of higher-priced imports
* Update to mode shifting assumptions in trans/RTMF

### **3.1.3.2 - April 6, 2021**

* Edit to NDC target displayed in the web app
* Bug fix for district heat and hydrogen sector fuel prices

### **3.1.3.1 - April 1, 2021**

* Bug fix to clean up overlapping text on EPS.vpmx file
* Update to BAU GDP projections

### **3.1.3 - March 15, 2021**

* Updated to model platform 3.1.3
* Added pumped hydro as a power plant type
* Various input data updates, such as power plant costs, demand response and battery storage potential, and COVID-19 recession impacts 

### **2.1.2 - July 10, 2020**

* Fixed minor formula error in variable "Potential RPS Qualifying Electricity Output" and its BAU equivalent
* Updated scaling methodology in indst/BIFUbC and bldgs/BCEU
* Adjusted values in elec/SYC, elec/BCRbQ, elec/BPMCCS, and elec/BRPSPTY to align model outputs with historical 2018 and 2019 data
* Adjusted qualifying sources for the Clean Electricity Standard policy and enabled the "Expand Carbon-free Electricity Standard Qualifying Definitions"

### **2.1.1 - June 9, 2020**

* Updated to version 2.1.1

### **1.4.2-v3 - June 10, 2019**

* Fixed an error where building components energy use was under-reported (bldgs/BCEU)
* Fixed transposed "Consumers" and "Other Industries" labels on "Direct Cash Flow Changes (by Actor)" graph in web app 

### **1.4.2-v2 - Dec 21, 2018**

* Fixed error in fuel economy of passenger and freight LDVs due to misinterpretation of unit definition in source data (trans/BNVFE, trans/SYFAFE, trans/BHNVFEAL)
* Added open burning of agricultural residues to the model (indst/BIFUbC)
* Removed erroneous value for biomass combustion in “other industries” category (indst/BIFUbC)
* Pollutant emissions intensities for biomass burned in industry now are used to represent open burning of agricultural residues (fuels/PEI)
* Pollutant emissions intensities for industry, buildings, and electricity updated to use better, India-specific values (fuels/PEI)
* Quantity of biomass use in buildings updated to use better source (bldgs/BCEU)
* Removed web app policy lever for energy efficiency standards policy applied to agriculture, as agriculture energy use now is used to represent open burning of agricultural residues rather than fuel use by the agriculture industry

### **1.4.2 - Oct 29, 2018**

* Initial Release

## Software License

The Energy Policy Simulator (EPS) is released under the GNU General Public License version 3 (GPLv3) or any later version and is free and open-source software.  The full license text is available [in English](http://www.gnu.org/licenses/gpl-3.0.en.html) and in [many other languages](http://www.gnu.org/licenses/translations.html).  A simple, easy-to-read, unofficial guide to the main attributes of the GPLv3 is available <a href="https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)">here</a>.

Note that this license applies to the EPS, not to Vensim.  Vensim is commercial software and is owned by Ventana Systems.  We recommend the use of Vensim Model Reader to run the model.  You may change the input data using Microsoft Excel or any program capable of reading Excel files, such as [Open Office](https://www.openoffice.org/).

## Image Credits

Tuk Tuk on streets of Delhi, India

PIVISO

[https://commons.wikimedia.org/wiki/File:Tuk_Tuk_on_streets_of_Delhi,_India_(26661971496).jpg](https://commons.wikimedia.org/wiki/File:Tuk_Tuk_on_streets_of_Delhi,_India_(26661971496).jpg)

License: Creative Commons CC0 1.0 Universal Public Domain Dedication

Changes: Image has been cropped and a fade has been applied to the left side.
