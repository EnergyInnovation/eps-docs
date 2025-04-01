---
title: Geoengineering
---

## Defining Geoengineering and Direct Air Capture

According to the IPCC, the term "geoengineering" encompasses two core strategies: carbon dioxide removal and solar radiation management ([AR5 Summary for Policymakers](https://www.ipcc.ch/site/assets/uploads/2018/02/WG1AR5_SPM_FINAL.pdf), p. 29).

Carbon dioxide removal involves capturing CO<sub>2</sub> molecules from the atmosphere, as opposed to capturing them from a smokestack or other concentrated exhaust stream.  In the Energy Policy Simulator (EPS), this technique can take two forms. The first is **Direct Air Capture (DAC)**.  DAC refers specifically to using artificial means, such as machines or chemical processes, to remove CO<sub>2</sub> from the air.  DAC does not include afforestation or reforestation, which the EPS handles in the [Land Use, Land Use Change, and Forestry](lulucf) sector. Similarly, DAC does not include growing biomass, burning it, and capturing the resulting emissions from the exhaust stream, since the step of capturing CO<sub>2</sub> from the atmosphere is done by trees, not by technology, and the capture from the exhaust stream is handled by the [Carbon Capture and Sequestration](ccs) module within the EPS).

The second carbon dioxide removal option in the EPS is enhanced rock weathering, which involves finely crushing silicate rocks such as basalt and distributing them over the land surface. These reactive particles combine with CO<sub>2</sub> to form carbonate rock, sequestering the CO<sub>2</sub> from the atmosphere.

Solar radiation management include techniques to reduce incoming light and heat without reducing carbon dioxide concentrations, such as injecting reflective particles into the stratosphere or placing objects to block or deflect light in space and is not covered in the EPS.

At present, DAC and enhanced rock weathering are the only geoengineering strategies implemented in the EPS.  This is for several reasons:

- The EPS models emissions of greenhouse gases (GHGs), not planetary temperatures or radiative forcing.  DAC and enhanced rock weathering can be represented as negative emissions, which can be graphed with and compared against emissions sources.  There is no satisfactory way to represent solar radiation management without introducing calculations of global concentrations and warming to the EPS, which might be a poor fit with the EPS's usual national or sub-national scope.

- Solar radiation management is unlikely to be technolically ready or commercially mature on the timeframe modeled by the EPS.  It might be possible for DAC and enhanced rock weathering to be ready to begin deployment at scale before the end of the EPS model run.

- DAC and enhanced rock weathering are less likely than solar radiation management to have unexpected, negative environmental consequences, since they simply removing excess CO<sub>2</sub> that humans added to the atmosphere, instead of introducing a new dynamic that aims to counter the warming effects of the CO<sub>2</sub>.

## Technology Modeled

A number of technological pathways have been proposed for DAC.  The EPS input data assumes the use of hydroxide sorbent-based technology, because this is the most mature technology.  It is primarily suitable for large-scale plants and has a high input temperature requirement (>800 C).  Other proposed technologies, such as those based on amines, could potentially be made more modular and require much lower temperatures (able to be supplied by waste heat), but they are unlikely to be deployed meaningfully prior to the end of the EPS model run timeframe.

All data associated with DAC can be edited in `geoeng/DACD` to allow the user to represent different technology options.

The input data on enhanced rock weathering effectiveness and cost is flexible but is set up to represent basalt by default.

## Model Structure

No geoengineering occurs in the BAU case, so there is no BAU structure for the Geoengineering sector.

The technical potential for each technology, in mass of carbon captured from the atmosphere per year, is taken in as time-series input data.  Policy levers specify what share of the technical potential of each policy option is realized.

![CO2 captured via geoengineering](/img/geoengineering-Potential.png)

The energy used in each DAC process is calculated by multiplying input data on energy intensity per unit CO<sub>2</sub> captured by the quantity of CO<sub>2</sub> captured in each year. DAC is much more energy intensive than enhanced rock weathering, though the rock weathering process does irequire electricity for grinding the rock. Electricity demand for both options is separated out and is summed with other sectors' electricity demand on the [Cross-Sector Totals](cross-sector-totals) sheet.

![geoengineering energy use](/img/geoengineering-EnergyUse.png)

The pollutant emissions associated with the energy used for geoengineering are calculated using industrial emissions intensities.

![geoengineering pollutant emissions](/img/geoengineering-PollutantEmissions.png)

The CO<sub>2</sub> removed from the atmosphere is subtracted from the emissions caused by energy use in the geoengineering sector to find the final, net emissions from the sector. These emissions will be negative for CO<sub>2</sub> but positive for other pollutants (unless only emissions-free fuels are used).

![geoengineering net emissions](/img/geoengineering-NetEmissions.png)

Capital, operations, and maintenance costs (not including energy costs) are calculated using a single, lumped figure in currency units per mass of captured CO<sub>2</sub>. This figure amortizes the capital cost of DAC equipment over the life of that equipment, providing for an even flow of expenses and allowing for a simpler structure that does not need to track specific quantities or vintages of equipment.

![geoengineering capital and OM costs](/img/geoengineering-Costs.png)

Fuel costs are calculated by multiplying fuel use by the cost per unit energy. Taxes on those fuels are calculated by multiplying the amount of tax per unit fuel by the quantity of fuel used.  The difference in amount spent on fuels and taxes paid represents the cash flows to the fuel suppliers.

![geoengineering fuel costs](/img/geoengineering-FuelCosts.png)

We assume all geoengineering is funded by government, since geoengineering on the required scale would produce far more CO<sub>2</sub> than there is any commercial market for, and we are assuming this CO<sub>2</sub> is securely stored for the long-term, preventing its use in most products. Accordingly, we assign all expenditures to the "government" cash flow entity.

![geoengineering expenditure assignment](/img/geoengineering-ExpenditureAssignment.png)

All revenues from the capital and operational expenditures are assigned to the non-energy industries, and all are assigned to ISIC 28 (Machinery and equipment not otherwise classified).  Portions of this payment going to labor and taxes are separated out on the [Cross-Sector Totals](cross-sector-totals) sheet. Energy expenditures are assigned to the appropriate energy-supplying industries, and tax revenues are assigned to the government.

![geoengineering revenue assignment](/img/geoengineering-RevenueAssignment.png)

---
*This page was last updated in version 4.0.4.*
