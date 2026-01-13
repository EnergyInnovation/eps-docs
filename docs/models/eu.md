---
title:  "European Union Energy Policy Simulator"
---

The Energy Policy Simulator (EPS) is a free and open-source computer model originally created by [Energy Innovation LLC](https://energyinnovation.org/) and adapted for the European Union (EU) in partnership with [Agora Energiewende](https://www.agora-energiewende.org/).

## Model Download

The EU EPS may be used on this website through your web browser, or the full version may be downloaded to your computer by clicking the button below.  Note that you will need to go through the steps explained on the [EPS download page](../download) in order to install the required software and make use of the downloadable version of the model.

<p><a href="https://github.com/EnergyInnovation/eps-eu/archive/refs/tags/4.0.2.zip" class="btn">Download the European Union Energy Policy Simulator</a></p>

## Acknowledgement of Contributors and Reviewers
We acknowledge the following organizations who helped develop the business-as-usual baseline of the EU EPS.

* [Artelys](https://www.artelys.com/)
* [TEP Energy](https://www.tep-energy.ch/en/home/)

Additionally, we acknowledge the work of the following Energy Innovation staff who contributed significantly to the development of the EU model:

* Rachel Goldstein
* Megan Mahajan
* Daniel O'Brien
* Robbie Orvis
* Mary Francis Swint
* Claire Trevisan
* Alex Urquhart

## Methodology

The EU EPS aims to help the user find and understand the most important policies to decarbonize the EU’s economy in an effective and equitable way. The model includes two reference scenarios, a business-as-usual (BAU) and a Fit for 55 "core policies" scenario. 

The BAU scenario simulates the energy landscape of the EU as it was in 2020, before the introduction of the European Green Deal and the passage of the subsequent Fit for 55 policy package. The Fit for 55 core policies scenario captures the energy impacts of EU-level climate policy passed during the 2019-24 legislative cycle. 

### Business-as-usual scenario

In the BAU scenario, we include all policies in place before the introduction of the European Green Deal. For example, although the EPS is not an optimization model that simply assigns an emissions target and finds the pathway to meet it, it does include a representation of carbon pricing. In the BAU, we include the impacts of the Emissions Trading System (EU ETS) as it stood before the 2023 revision to align with the Green Deal’s 55 percent emissions reductions target.

The data underlying the BAU scenario largely comes from a combination of the Commission’s Joint Research Centre’s POTEnCIA Central Scenario, IDEES database, and 2020 Reference Scenario, alongside projections from Agora and two consultants: Artelys and TEP Energy. 

### Core Fit for 55 policies scenario

Building atop the BAU, we include a scenario capturing the impacts of the European Green Deal and subsequent Fit for 55 package. This includes EU-level climate policy passed during the 2019-24 legislative cycle with explicit, black-and-white pathways for technological change. For example, while the zero-emissions building standards from the Energy Performance of Buildings Directive (EPBD) are included, high-level renewables targets from the Renewable Energy Directive (RED) are not included as they lack explicit policy pathways to drive electrification and renewables buildout to meet targets. The policies included in this scenario are listed below:

**Revised and expanded EU ETS**: The linear reduction factor of the EU ETS’ emissions cap was revised in 2023 to align the system with the 2030 target of a 55-percent net emissions reduction compared with 1990 levels. Additionally, the scope of the System was expanded from only targeting the power, industry, aviation, and maritime sectors to also include fuel consumed in on-road transportation and buildings. Lastly, a Carbon Border Adjustment Mechanism (CBAM) was added to address the risk of carbon leakage from specific sectors under the ETS, replacing free allocation. 
Each of these modifications is captured by the EPS – we add new sectoral coverage and increase the pricing of allowances to align with expert projections. Additionally, although we do not track leaked emissions explicitly, we account for how CBAM will keep domestic industry onshore and its impact domestically. 
Additionally, since – as of platform 4.0 – EPS’ carbon pricing module lacks the ability to induce cost-driven fuel switching, we feed fuel prices for non-ETS, ETS 1, and ETS 2 industries into an external tool to project ETS’ impact on fuel efficiency and electrification measures due to increased fuel costs. Data on capital equipment and efficiency measure costs largely come from Agora Industry’s Power-2-Heat transformation cost calculator<sup>[1](#myfootnote1)</sup> and from Kermeli et al.<sup>[2](#myfootnote2)</sup>
We also track the announcement of fossil-fuel power plant closures, most of which are due to the revised EU ETS. All newly announced power plant closures since the introduction of the Green Deal are added atop BAU closures, “forced” by the model’s early power plant retirement policy.

**Revised light-duty vehicle (LDV) CO2 standards**: In 2023, the EU amended its CO2 standards for cars and vans, introducing a 100-percent emission reduction target for new vehicles from 2035 onwards, while also strengthening the 2030 targets for both cars and vans. 
As the EPS does not currently have a CO2-standard policy lever, we model the policy through a combination of zero-emissions vehicle (ZEV) mandates and internal combustion engine (ICE) efficiency improvement standards. We assign stringencies to these two levers to align with projections from the International Council on Clean Transportation (ICCT).<sup>[3](#myfootnote3)</sup>

**Revised heavy-duty vehicle (HDV) CO2 standards**: In 2024, the EU revised its CO2 standards for medium- and heavy-duty trucks, trailers, coaches, and buses. This revision expanded the scope of covered vehicles and assigned heavy-duty vehicles into various groups depending on body characteristics. 
We take a similar approach to modeling HDV standards as to LDV standards, using a combination of ZEV mandates and ICE efficiency improvements to align with projections from ICCT. 

**Renewable Energy Directive**: Although we do not model the economy-wide and sector-specific renewables targets in RED, we include Article 22a of the Directive, its Renewable Fuels of Non Biological Origins (RFNBO) requirement that 42 percent of industrial hydrogen demand come from renewables by 2030 and 60 percent by 2035. 
EPS handles production pathways for hydrogen demand from each sector through a single module. In this module, a specified share of all hydrogen production can be shifted to electrolysis with guaranteed clean dispatch, representing the impact of shifting from BAU hydrogen production (mostly steam methane reforming) to electrolysis in line with the three pillars criteria defining clean hydrogen. We shift industrial hydrogen to clean in line with the RFNBO requirements, as well as all hydrogen demanded by the transportation sector, under the assumption that only green hydrogen combustion will allow fuel-cell vehicles to qualify as zero-emission.

**Energy Performance of Buildings Directive**: The EPBD is a directive with numerous policies intended to speed the decarbonization of the EU’s building stock. We model three core policies of the EPBD. 
First, we include Article 7 of the EPBD, which ensures new buildings are zero-emission buildings by 2028 for new public buildings and 2030 for all new buildings. We represent this policy through the EPS’ building component electrification lever, with the share of newly sold non-electric building components being shifted to electricity representing the share of newly sold components being sold to new construction in each year. 
Second, we include Article 9 of EPBD, which sets minimum energy performance standards for existing non-residential buildings and renovation requirements for the residential building stock. We model these requirements through the EPS’ retrofit existing buildings stock lever, accounting for the share of buildings that are new vs. existing in the model run.
Third, we include Article 10 of EPBD, which ensures that new buildings are designed to accommodate solar energy equipment and optimize solar generation potential, with varying schedules for the deployment of equipment between 2026 and 2030 onwards. We align our projections with analysis by Solar Power Europe, who estimate that EPBD could drive the installation of 150 to 200 GW of additional rooftop solar between 2026 and 2030.<sup>[4](#myfootnote4)</sup> We utilize EPS’ distributed solar capacity requirement lever to align with Solar Power Europe’s projections for rooftop solar deployment by 2030. 

**ReFuelEU Aviation and FuelEU Maritime regulations**: The ReFuelEU Aviation regulation requires aircraft fuel suppliers at EU airports to supply progressively increasing shares of sustainable aviation fuels (SAFs) to aircraft, up from 2 percent in 2025 to 70 percent in 2050. 
The FuelEU Maritime regulation requires progressively strengthening reductions in carbon intensity of shipping by vessels over 5,000 gross tonnes internal volume, from 2 percent in 2025 to 80 percent in 2050. 
The EPS can address these policies through its low-carbon fuel standard lever, which can shift a share of a desired vehicle type’s fuel consumption to alternative sources. We shift aircraft and ships from jet fuel and petroleum oil products, respectively, to consume biodiesel instead. The EPS does not yet have representation of synthetic transportation fuels such as e-kerosene, so we use biodiesel as a stand in at present. 

**Non-CO2 industrial emissions policies**: In early 2024, the EU adopted a new F-gas regulation to build on a 2014 regulatory framework. This measure would reduce hydrofluorocarbons (HFCs) by expanding its quota system, strengthening rules, and capping HFC production in the EU. 
We align the model baseline with projections from the Regulation’s Impact Assessment.<sup>[5](#myfootnote5)</sup> We then align the EPS’ f-gas substitution, destruction, and recovery levers with the preferred "Option 2" from this assessment, which requires moderate costs and effort by industrial producers to reduce emissions, but "only to the point where a sub-sector would not have to pay more than the marginal sectoral abatement costs expected for the economy overall to reach carbon neutrality in 2050." According to the assessment, this scenario would reduce emissions by a cumulative 310 Mt CO2e by 2050.
Also in 2024, the EU passed into legislation its first-ever rules to curb methane emissions from the energy sector, obliging various industries to measure, monitor, report, and verify their emissions, and to take action to reduce them. While the Commission has not yet established a maximum methane intensity associated with the production of fossil fuels placed in EU markets, it is believed this will be in line with net-zero pathways. We assume that this maximum intensity will place the EU in line with the IEA’s Net Zero Emissions Scenario, with a 75 percent reduction in methane emissions from fossil fuels by 2030. We use a combination of methane capture and destruction levers in EPS for energy sectors to align with this goal.

## Version History

### **4.0.3 - December 16, 2024**

* Updates model version to 4.0.3
* Updates IO database to account for JRC's industrial aggregation
* Calibrates historical power generation, vehicle sales, energy demand to 2022 and 2023 reports
* Adjusts core Fit for 55 policies scenario to reflect updated projections

### **4.0.2 - September 25, 2024**

* Initial Release

## Software License

The Energy Policy Simulator (EPS) is released under the GNU General Public License version 3 (GPLv3) or any later version and is free and open-source software.  Refer to the [Software License](../software-license) page for full details.

## Image Credits
Wooden signpost near a path and sunrays<br/>
Mimadeo<br/>
[https://www.istockphoto.com/photo/wooden-signpost-near-a-path-gm478576202-67456029](https://www.istockphoto.com/photo/wooden-signpost-near-a-path-gm478576202-67456029)<br/>
License: iStock License<br/>
Changes: Image has been cropped and a fade has been applied to the left side.<br/>

* * * * *

<a name="myfootnote1">1</a>: https://www.agora-industry.org/data-tools/power-2-heat-transformation-cost-calculator#downloads.<br/>
<a name="myfootnote2">2</a>: https://link.springer.com/article/10.1007/s12053-022-10071-8#Sec15.<br/>
<a name="myfootnote3">3</a>: https://theicct.org/wp-content/uploads/2021/06/EU-vehicle-standards-green-deal-mar21.pdf.<br/>
<a name="myfootnote4">4</a>: https://www.solarpowereurope.org/press-releases/eu-rooftop-solar-standard-alone-could-solar-power-56-million-homes.<br/>
<a name="myfootnote5">5</a>: https://climate.ec.europa.eu/document/download/9013881e-8d5d-429e-9112-c908f127c833_en?filename=f-gases_impact_assessment_en.pdf.<br/>
