---
title: Industry & Agriculture Sector (main)
---
## General Notes

### Industry Categories

In the Energy Policy Simulator (EPS), the Industry Sector tracks emissions from the following specific industries or industry categories:

* agriculture and forestry
* coal mining
* oil and gas extraction
* other mining and quarrying
* food, beverage, and tobacco
* textiles, apparel, and leather
* wood products
* pulp, paper, and printing
* refined petroleum and coke
* chemicals
* rubber and plastic products
* glass and glass products
* cement and other nonmetallic minerals
* iron and steel
* other metals
* metal products except machinery and vehicles
* computers and electronics
* appliances and electrical equipment
* other machinery
* road vehicles
* nonroad vehicles
* other manufacturing
* energy pipelines and gas processing
* water and waste
* construction

Note that 'agriculture and forestry' is treated as a specific industry.  Though this industry category does include the economic activity related to forestry, it is distinct from the emissions and cash flow calculations in the Land Use, Land Use Change, and Forestry (LULUCF), which is handled on its own [LULUCF Sector](lulucf) page.

Not every industry category listed above will be used in every region depending on data availability. Where data for not all 25 industries is available, data for multiple categories may be grouped together (for example, some regions may group 'road vehicles' and 'nonroad vehicles' together into a single 'vehicles' category).

### Industrial Fuels

We track the consumption of several industrial fuels and energy carriers in the industrial sector, including:

* electricity
* coal
* natural gas
* biomass
* petroleum diesel
* heat
* crude oil
* heavy or residual fuel oil
* LPG, propane and butane
* hydrogen (green, low-carbon, other)

Other fuels (e.g., naphtha, ethanol, biogas) not listed explicitly above are accounted for in the category whose properties and applications are most similar. 


### Industrial Processes

We break down fuel use in industry among various energy-consuming processes:

* boilers
* nonboiler low-temp process heat (<165 °C)
* nonboiler med-temp process heat (165–400 °C)
* nonboiler high-temp process heat (>400 °C)
* process cooling
* machine drive
* electrochemical
* other

We break out each of these processes because the technical and policy-based solutions needed to address energy use from each differs widely. For example, while many boilers and non-boiler, low-temperature process heat applications can be replaced by industrial heat pumps, higher temperature applications might require induction heating equipment or electric-arc furncaces and very different financial measures to make electrification feasible. 

### Types of Emissions

Two types of emissions are tracked in the Industry Sector: energy-related emissions and process emissions.  Energy-related emissions are similar to emissions from other sectors in the model; they come from the combustion of fuel to generate energy that is used to provide specific services (in this case, to manufacture industrial products).  It does not matter if the fuel is combusted to create usable heat, on-site electricity, or some other form of energy: this is considered fuel use by industry.  This means that the electricity use by industry shown in the EPS refers to electricity obtained from the grid, not electricity generated on-site using fuels, waste heat, or other means.

Process emissions refer to the emissions of any of the twelve tracked pollutants that occur as a result of industry operations and which were not related to the combustion of fuel for energy.  For example, when limestone is chemically broken down as part of the cement-manufacturing process, the CO<sub>2</sub> that is released is an example of process emissions.  Similarly, when methane leaks from wells or pipes, the leaked methane is process emissions.  Sometimes a high-GWP gas is itself an industrial product, such as various hydrofluorocarbons (HFCs) that are used as solvents, fire suppressants, refrigerants, and propellants; these also count as process emissions.

### Foreign Leakage

The EPS considers policies only on a regional scale.  Typically, a unilateral policy that lowers emissions from industry will lead to an increase in emissions in other nations.  This can happen because some companies move their operations overseas, or because companies that are already overseas scale up production (to export to the modeled country -- in this case, to the U.S.) and domestic manufacturers reduce production.

In certain cases, leakage can be negative.  That is, a reduction in emissions from the modeled country also leads to a reduction of emissions from other countries.  This is most likely to happen if the modeled country (the U.S., in this case) is a major player in setting the market price for a globally traded commodity.  When policies within the U.S. cause the U.S. to reduce production, the global price for the good increases due to the reduction in supply.  As a result of the higher prices, consumers in other countries reduce demand for the product.  In the case of the U.S., production of coal, oil, and gas all have negative leakage rates, whereas nearly all other products have positive leakage rates.

Emissions due to leakage are estimated by the model but are not added to total emissions, since that total is meant to reflect only emissions from the modeled country.

## Changes in Industrial Production Levels

### Changes in Imports and Production for Nonfuel Industries

The EPS reads in input data on industrial production, imports, and exports to help construct its BAU case.  However, it is important to track any policy-induced changes to these amounts, particularly for domestic production (which causes changes in domestic fuel consumption and industrial emissions).  The model allows policies to influence the level of industrial production via several mechanisms. The first mechanism works by changing nonenergy industrial production in response to changes in industry expenses due to policy. When an industry's expenses increase or decrease, it will often "pass through" those expenses to buyers, either increasing or decreasing the cost of industrial goods to reflect the new cost to produce those goods. Policy-induced changes in industrial expenses in the EPS are due to changes in spending on fuels (through policies like industrial efficiency that lead to reduced fuel consumption or policies that adjust fuel prices like a carbon or fuel tax), carbon taxes on process emissions, capital expenses due to efficiency or fuel shifting policies, implementation costs of process emissions policies, carbon capture equipment and O&M costs, and any carbon tax rebate from carbon capture. To find the percent change in costs for each ISIC code, we divide by industrial output, which is calculated in the [Input-Output Model](io-model) (we implement a one year delay in output to avoid circularity). Because our input data on industrial output does not include value-added tax (VAT) or sales tax, we remove any VAT or sales tax from the expenses passed through to buyers before dividing by output. 

![change in passthrough costs as a share of output by ISIC code](/img/industry-ag-main-PassthroughCostsISIC.png)

We then map the changes in expenses for each ISIC code onto the relevant industry category. In general, the industry categories tracked in the EPS align directly with one of the tracked ISIC codes. However, the full list of ISIC codes is broader than the tracked industries, since ISIC codes include services such as education and human health and social work. 

![change in passthrough costs as a share of output by industry category](/img/industry-ag-main-PassthroughCostsInd.png)

The EPS allows for a Carbon Tax Border Adjustment, which applies fees on imported goods based on their carbon content. If the Carbon Tax Border Adjustment is enabled, then we remove any carbon tax effects on industry expenditures from the change in passthrough expenses calculated above. This is because when calculating changes in industrial production, we want domestically produced goods competing equally with imported goods, and we don't have the necessary input data to calculate the carbon content of all imported goods (which may come from many different countries with different carbon intensities of production). We therefore need to calculate the carbon tax effects on industry expenditures. To do this, we first sum the change in carbon tax levied on fuels, change in carbon tax on process emissions (if the carbon tax applies to these emissions), the costs to industry from implementing process emissions measures due to a carbon tax, and any carbon tax rebate due to carbon capture and sequestration. 

![change in carbon tax levied on industrial fuels](/img/industry-ag-main-CarbonTax.png)

We then multiply the calculated carbon tax effects by the "Share of Change in Industry Expenses Passed Through to Buyers," which is read in as input data. By default, we set this value to 1 to represent full passthrough of changes in expenses to buyers based on the literature. 

![change in carbon tax levied on industrial fuels passed through to buyers](/img/industry-ag-main-CarbonTaxPassthrough.png)

We can now remove the calculated carbon tax effects from the industry's change in passthrough expenses, if relevant. We check to see whether the Carbon Tax Border Adjustment is disabled in each year. Whether or not the Carbon Tax Border Adjustment is enabled by default is set through the control setting "BDCTBA Boolean Disable Carbon Tax Border Adjustment," and users can then decide whether to toggle the adjustment on or off through a policy lever. This behavior can be customized through implementation schedules, meaning a user could institute a Carbon Tax Border Adjustment partway through the model run. 

![check for carbon tax border adjustment](/img/industry-ag-main-CBAMToggle.png)

If the Carbon Tax Border Adjustment is enabled in a given year, the calculated carbon tax effects are removed from change in passthrough expenses as a share of output. Two input files allow the user to define the share of each industrial sector's output that are covered by CBAM and to change these values in the policy scenario through a boolean lever. This might help a user reflect the EU's CBAM better, for example, as only fuels used for production of certain chemicals are covered by the CBAM.  In effect, then, only a share of the carbon tax's effects on that industry would be removed from passthrough expenses. 

![check for carbon tax border adjustment](/img/industry-ag-main-CBAMAdj.png)

Next, we calculate the effects of the Buy In-Region Products policy. This policy shifts the specified fraction of imported industrial output to in-region suppliers.  Before we calculate the effect of import substitution due to changes in price, we need to remove the fraction of imports shifted in-region. 

![calculating effect of buy in-region policy](/img/industry-ag-main-BuyInRegion.png)

We now apply 'IESE Import Export Substitution Elasticities,' also known as Armington elasticities.  These elasticities are set for each nonenergy industry and represent the elaticity of substitution between goods produced in different countries, meaning we calculate the percent of domestically produced goods shifted to imports in response to higher or lower prices. When applying the elasticities to the calculated portion of passthrough expenses affecting imports and exports, we make sure the domestic content share of production is between 0 and 100 percent.  We will use this calculated 'Percent of Purchases of Domestically Produced Goods Shifted to Purchases of Imports' below when calculating the total change in imports and production. 

![applying import export substitution elasticities](/img/industry-ag-main-IESE.png)

For our next step, we first need to calculate the 'Weighted Average Percent Change in Cost of Goods by Industry Category,' accounting for the change in passthrough expenses for domestically produced goods and the carbon tax effects (if applicable) for imported goods. 

![weighted average change in cost of goods](/img/industry-ag-main-WghtChangeCosts.png)

We can now calculate the change in overall product demand, which will flow through to both the demand for domestically produced and imported goods.  Here, we use a separate set of elasticities that reflect the change in demand for industrial products in response to price (rather than the elasticity that reflects import substitution for domestic products to meet demand).

![applying elasticity of demand for industrial products](/img/industry-ag-main-ElasDemand.png)

We then use this calculated change in demand along with the percent of domestically produced purchases shifted to imports to find the change in imports and the change in production.  We assume that reductions in demand affect domestic production and imports equally (meaning each is reduced by the same percentage).

![calculating change in imports and production](/img/industry-ag-main-CngImportsProd.png)

We now have the information we need to calculate the total imports of nonenergy products.  We calculated the change in imports as a share of domestic production above, so we can multiply by domestic output to find the total change in imports in dollar terms.  We can also add that to BAU imports to find 'Imports of Nonenergy Products.'

![calculating change in imports](/img/industry-ag-main-Imports.png)

However, there are a few more required steps before finalizing the total change in domestic production.  First, we adjust production for macroeconomic effects from the [Input-Output Model](io-model) (see the [Macroeconomic Feedbacks page](macro-feedbacks) for a detailed discussion).  This step implements a one-year time delay to avoid circularity when adjusting demand for nonenergy products by indirect and induced economic contribution to Gross Domestic Product.  The 'Boolean Disable Macroeconomic Feedback Loops' control setting shown below can be used for debugging purposes, but most users will not need to disable this feature and will want to inlcude its effects.  

![incorporating macroeconomic feedbacks](/img/industry-ag-main-MacroFeedbacks.png)

We then apply two policies that affect demand for nonenergy industrial products.  The first is the Shift to Non-Animal Products policy, which works by setting a percentage shift away from animal products and toward plant-based replacements.  This involves both a reduction in animal agriculture and an increase in other agricultural goods to replace that lost nutrition.  To account for this, we use input data on the share of the agriculture industry made up of animal products and the 'Ratio of Nutritionally Equivalent Plant to Animal Products Produced per Unit Land Area.'  This input data will vary by region, as it uses historical data on the types of animal products produced and a study that reports the opportunity food loss from production to final consumption for the five major animal product categories and their plant-based replacement diets. 

![incorporating macroeconomic feedbacks](/img/industry-ag-main-AnmlProducts.png)

The final adjustment is for the Material Efficiency, Longevity, and Re-Use policy, which buckets several approaches such as producing the same products using less material, reusing materials, and reducing the need for new industrial products.  It is likely most relevant for industries like cement and iron and steel, which provide the raw materials for a large portion of construction and have significant potential for material efficiency.  Users set the desired percentage reduction in production by industry category, which is directly applied on top of the changes in production calculated above. 

![calculating percent change in production due to policies](/img/industry-ag-main-CngProd.png)

The final variable 'Percent Change in Nonfuel Production due to Policies' will be used later in the Industry and Agriculture - Main sheet to adjust industrial energy use and emissions in response to policy.

### Changes in Exports and Domestic Consumption for Nonfuel Industries

The Armington elasticities we use in the input data variable 'Import Export Substitution Elasticities' can be used to calculate both changes in imports and exports, since a change in the price of exported goods will affect demand for those goods abroad.  As we did for imports, we can also multiply the change in industry passthrough expenses by the Armington elasticities to find the 'Percent Change in Exports of Nonenergy Products.'  We have input data on the amount of BAU exports by industry category, which allows us to also calculate the change in exports in dollar terms as well as the total amount of exports. 

![calculating change in exports](/img/industry-ag-main-Exports.png)

Finally, we know that domestic consumption of goods will always equal domestic production + imports - exports.  We have already calculated changes in production, imports, and exports, meaning we have enough information to calculate both Domestic Consumption of Nonenergy Products and the Change in Domestic Consumption of Nonenergy Products.  Note that the variables for production shown in the screenshot below are sourced from the [Input-Output Model sheet](io-model), where a full accounting of changes in output by ISIC code occurs. 

![calculating change in domestic consumption](/img/industry-ag-main-Consumption.png)

### Change in Production for Fuel Industries

The [Fuels page](fuels) includes a detailed accounting of production, imports, and exports of each fuel type tracked by the model.  We want to add the calculated change in domestic fuel production to our calculated changes in nonenergy production so that we have a variable that tracks all 25 industry categories, which we label 'Percent Change in Production due to Policies.'  The screenshot below shows the relevant structure.  Note that the 'Percent Change in Domestic Fuel Production by Fuel' variable contains the change in electricity production even though it is not used in the Industry and Agriculture - Main sheet.  This is because it is used in the [Industry and Agriculture - Cash Flow sheet](industry-ag-cash).

![percent change in domestic fuel production by fuel](/img/industry-ag-main-CngFuelProd.png)

We then map the changes in production by fuel type to the relevant fuel producing industry categories, which are coal mining, oil and gas extraction, refined petroleum and coke, and energy pipelines and gas processing. 

![percent change in domestic fuel production by industry](/img/industry-ag-main-CngFuelProdbyInd.png)

Because changes in production by fuel industries affect electricity demand and therefore which plant type are built in the [Electricity Sector](electricity-sector-main), they also affect domestic fuel use.  We resolve this circularity with a one-year delay in this feedback, using 'Last Year Percent Change in Domestic Fuel Industry Production.'  We add this to the 'Percent Change in Nonfuel Production due to Policies' to find 'Percent Change in Production due to Policies' for all 25 industry categories. 

![percent change in domestic production by industry](/img/industry-ag-main-CngProdbyInd.png)

The one exception is for the "energy pipelines and gas processing industry," where we base changes in production on the change in demand for natural gas, not the change in production of natural gas.  This is because there are EPS regions (such as U.S. states) which produce little or no gas, but can still have methane leaks from natural gas transmission systems.  Using changes in natural gas demand better reflects changes in leakage from these transmission systems.  As above, we institute a one-year time delay for this feedback. 

![tracking change in natural gas demand](/img/industry-ag-main-NGDemand.png)

## Equipment Vintaging and Economic Output ($) Tracking

Now that we understand any policy-induced changes in industrial production, we can begin to calculate industrial fuel use and emissions from that production.  We calculate fuel use, allowing the user to enable a variety of policies that can affect the amount of industrial fuel consumption. 

### Apportioning BAU Fuel Use by Industrial Process

As of EPS version 4.1, we explicitly track the vintages and stock of industrial equipment to better account for the long lifetimes and turnover rate of equipment. We use input data to establish a baseline energy intensity of industrial production across the various processes used in industrial production, the first steps of which are documented in this section. 

First, we read in projections of industrial fuel use from input data for both feedstock (non-energy) and energy purposes. We track these two quantities separately so that we can correctly calculate emissions from fuels that are combusted for energy purposes and can properly tie process emissions to feedstock consumption where appropriate. Here, we omit the feedstock portion which is handled later. The portion used for energy purposes is multiplied by the percent change in production, the calculation of which is described above. This section also adjusts BAU fuel use for the 'Exogenous GDP Adjustment,' which is no longer used in the U.S. model. This feature can be used to adjust energy and service demand for the COVID-19 induced recession or other economic shocks that are not reflected in collected input data. Because the U.S. EPS input data already reflects COVID-19, we no longer rely on this feature. However, it is still in use in certain international EPS models. 

![fuel use for energy purposes before fuel shifting](/img/industry-ag-main-FuelUseEnergyPurposes.png)

This fuel use is apportioned across eight industrial processes according to input data, then converted to "electricity equivalent" units, representing the reduction in energy intensity of electric applications compared with those powered by combustion. For example, industrial heat pumps require ~70 percent less input energy than low-temperature boiler and furnace applications. 

![fuel use by process](/img/industry-ag-main-HeatDemand.png)

### Industrial Output with Produced Energy Quantities for Producing ISIC Codes

An industry's energy consumption and equipment needs depend on its economic output, which we calculate as described above. Here, for fuel-producing industries (e.g., oil and gas extraction, refining, and coal mining), we use the quantity of produced energy rather than economic output in dollars to remove the effects of fuel price fluctuations on revenue (output) and better reflect equipment needs. 

![domestically produced energy breakdown](/img/industry-ag-main-DomesticEnProd.png)

We use "Last Year" versions of "Output by ISIC Code by Year" and "Percent Change in Domestically Produced Energy Producing ISIC Code Relative to Initial Time" because they both rely on outputs of the I/O model, which is affected by industrial production and fuel choices.

![last year output with produced energy](/img/industry-ag-main-LYDomesticEnProd.png)

### Tracking Industrial Output by Equipment Vintage

We track stock and output of industrial equipment across industrial subsectors, fuels, and processes. We track preexisting equipment separately from new equipment installed during the model run, and address the former first. 

Preexisting equipment can be retired two ways: either naturally by age or by an early retirement policy lever that allows the user to define the share of preexisting equipment retired early. Input data defines what fuel types are retired early. In the U.S. model, this is typically fossil-fueled equipment that could be retired early to accelerate industry decarbonization. 

We use input data to define retirement profiles for equipment that is retired naturally by age (as in the BAU). For most industries in most regions, we use retirement curves for equipment of each industrial process (from the indst/IESD input file). For example, industrial boilers often remain online for over 40 years, resulting in a slow retirement profile. On the other hand, machine drive applications like motors, compressors, and pumps often retire within 20 years of installation. 

In some regions, certain industries may be small and output may come from a few or only one facility. For example, some U.S. states might have a single steel mill. Therefore, using a gradual retirement profile might not reflect how equipment investments may only occur in specific years (e.g., a blast furnace re-lining across two years from 2031-32). The input file indst/BIISRP allows the user to define retirement profiles for specific industries, not subscripted by industrial process. The boolean variable from the BIISRP input file is used to choose which industries, if any, should use site-specific retirement profiles. 

![preexisting industrial equipment retirement](/img/industry-ag-main-preexistingEqptRetirement.png)

Now that we know the share of preexisting industrial equipment retired in each year, we can track the output from the total stock of preexisting equipment. Since demand can go down and then recover, we work in terms of "potential output." We assume equipment can be idled in a given year if there is more equipment than necessary to meet demand in that year. Potential output refers to the output that the equipment is capable of producing. All equipment is idled proportionately, since older and younger equipment may be mixed among production lines, making it impossible to selectively idle only the oldest equipment. 

![preexisting industrial equipment stock tracking](/img/industry-ag-main-preexistingEqptStock.png)

Next, we calculate the output from equipment installed during the model run. These equipment are retired strictly based on age; that is, we assume there is no policy mechanism for driving early retirement of equipment installed during the model run. The profiles for retirement, therefore, simply depend on the number of years since equipment installation. 

![new industrial equipment retirement](/img/industry-ag-main-newEqptRetirement.png)

Lastly, potential output of equipment installed during the model run is tracked in the same way as for preexisting equipment. It is converted to real output by dividing potential output from equipment by Last Year Output by ISIC with Fuels Based on Energy Content, which was calculated above. 

![new industrial equipment stock tracking](/img/industry-ag-main-newEqptStock.png)


## Equipment Efficiency and Fuel Choice

### Calculating Industrial Process Energy Intensity

We continue to work in units of "electricity equivalent" to make the output of equipment of varying fuel types comparable (since electricity is used more efficiently than combustible fuels are). This helps facilitate cost-based fuel choice calculations later on. 

We start with BAU Industrial Equipment Energy Use from Input Data by Industrial Process in Electricity Equivalent and sum across industrial fuel type and process, then divide by BAU Last Year Output by ISIC Code to yield a "raw" industrial energy intensity — that is, the BTU of fuel required to produce a $ of output. 

![BAU raw industrial energy intensity](/img/industry-ag-main-RawEnergyIntensity.png)

However, this is an energy intensity read explicitly from input data. We want energy intensity to evolve endogenously as equipment choice changes and the industry sector evolves in the model. We will return to this "raw" quantity later. 

Next up, we calculate the "unit energy factor," or the energy intensity of new industrial equipment as BTUs of input energy per BTUs of output energy. For example, a natural gas boiler might have an efficiency of 0.85, meaning it produces 0.85 BTU of heat for each 1 BTU of input gas. The energy intensity of this equipment is 1/0.85 or 1.18. On the other hand, an industrial heat pump with a coefficient of performance (COP) of 3 produces 3 BTU of heat for each BTU of input electricity, resulting in an energy intensity of 1/3 or 0.33. 

We read in a start year equipment unit energy factor from input data for each industrial process and fuel type. This value is scaled each year by the BAU improvement in equipment efficiency improvement, also sourced from input data, which should correspond to the assumed new equipment efficiency improvement in indst/BIFU. The resulting unit energy factor is limited to a theoretical minimum defined in indst/IEMUEF. For the same natural gas equipment described above, the value in this file might represent a modulating condensing boiler, the efficiency of which can approach 99% (for an intensity of 1.01).

![BAU industrial energy intensity](/img/industry-ag-main-BAUEnergyIntensity.png)

Next, we account for how industrial equipment efficiency can change in a policy scenario. This can happen two ways. 

First, we account for how new equipment efficiency changes with fuel prices. Consider a factory manager in a region who needs to replace an old gas boiler. If the price of gas is very low, she may choose a less efficient boiler model with lower upfront costs. But if the price of gas is high, she might instead spend a bit more for a more efficient boiler, knowing that the difference in upfront spending will pay off quickly given the high fuel prices. This relationship between fuel prices and equipment efficiency happens automatically in the model with changes in fuel prices in the policy scenario. 

The second mechanism by which industrial equipment efficiency can change is in response to an efficiency standard policy. We include separate policy levers for equipment powered by electricity and by combustible fuels as a government may pass different efficiency requirements for electric motors vs. diesel generators, or heat pumps vs. solid-fuel furnaces. 

![industrial energy intensity change](/img/industry-ag-main-EnergyIntensityChange.png)

These two mechanisms for efficiency changes in a policy scenario are then applied to the BAU industrial equipment energy intensity, then converted into electricity equivalent. 

![industrial energy intensity](/img/industry-ag-main-EnergyIntensity.png)

We return to the Raw BAU Industrial Energy Intensity in Electricity Equivalent, which measures the energy input needed per unit output (BTU/$) and scale this by the ratio of the policy scenario new equipment energy intensity (BTU/BTU) to the start year value from input data. This adjusts the energy input per unit output for new equipment, which is then tracked across the model run. 

![energy intensity of industrial production](/img/industry-ag-main-EnergyIntensityIndstProd.png)

Lastly, as noted briefly above, more efficient equipment often comes with a price premium. For example, applications for industrial pumps or compressors that operate with fluctuating load might be made much more efficient by use of a variable-speed drive (VSD). While making a motor more expensive, VSDs allow the motor speed to adjust to match demand, reducing its energy consumption. We use elasticities from input data to define the relation between efficiency and price. The resulting price change is applied to new equipment cost in the upcoming equipment choice step. 

![energy intensity of industrial production](/img/industry-ag-main-EfficiencyUpgradePrice.png)

### Fuel Choice for New Industrial Equipment

Now that we have calculated the demand for industrial output and the energy intensity of production, we can estimate what technologies will be chosen to meet that demand. For example, if a specific industry requires 10^10 BTU of medium-temperature boiler equipment, we model what share of that demand will be powered by electric resistance vs. gas vs. biomass ovens and so forth. To do so, we use economic choice functions via a similar approach as is used in the [Transportation Sector](transportation-sector-main). 

We want to base our technology choice on cost, with cheaper options being more widely adopted. However, we don't want to simply allocate all demand to the cheapest option. While we track average equipment capital costs in the model, in reality each technology spans a range of costs. The image below represents a simplified example of prices for gas- and electrically powered boilers, where each technology has its own price distribution with a unique mode on the horizontal axis (where the distributions peak). The vertical axis represents the quantity of boilers of a given technology that can be sold in this year at a given cost. The volume underneath these curves corresponds to a quantity of vehicles sold: cost (X) multiplied by quantity per unit cost (Y). We know the total amount of vehicles we need to sell, which is the volume under a portion of the black “Total” curve. Accordingly, demand is satisfied from left to right on the cost axis, filling in the volume under each individual vehicle technology's bell curve, until a total amount of volume has been filled in equal to the quantity of new vehicles needed this year. If this point is reached at a price between $125,000 and $300,000, then a non-trivial number of gas boilers and a non-trivial number of electric boilers will be sold, and neither gas boilers nor electric boilers will be sold at the maximum possible rate this year.

![logit choice example](/img/industry-ag-main-logitExample.png)

However, while the upfront cost of some industrial equipment can be significant, the overwhelming share of expenditures made during its lifetime is typically spending on energy. Therefore, we instead base our economic choice on the present value of all expenditure types, not just capital costs, discounting future spending by an industry's cost of capital. Costs are calculated in dollars per unit annual energy use so we can standardize across industrial processes and shift to "electricity equivalent" again to standardize across fuel types. 

To start, we read capital costs from input data for both stationary and mobile equipment. Energy use by offroad mobile equipment like agricultural tractors and heavy construction equipment is often accounted for in the industrial sector, rather than in the transportation sector, but the costs, annual energy use of, and policies for decarbonizing these equipment differ from other industrial equipment significantly. Thus we use different capital cost assumptions.  

The equipment cost change caused by efficiency adjustments calculated above is then added in.

![pre-subsidy industrial equipment capital costs](/img/industry-ag-main-eqptCapitalCostsPreSubsidy.png)

Since lower-emission industry equipment often cost more than their fossil-fueled equivalents, governments can help make clean alternatives more competitive through incentives. One example is a clean-heat investment subsidy. A majority of fuel used for energy in industry is used to generate heat, so decarbonizing industrial heat is a key policy for a clean economy. A clean-heat investment subsidy policy is one mechanism for leveling the upfront costs of clean vs polluting technologies. We include a BAU clean heat investment subsidy rate read in from input data, and the user can define an additional subsidy for subsidy representing the percentage of the upfront price of the equipment paid for by the government. This yields a final upfront capital cost per unit annual energy use.

![industrial equipment capital costs](/img/industry-ag-main-eqptCapitalCosts.png)

Industrial equipment typically come with high upfront costs of tens to hundreds of thousands of dollars or more. Cement kilns can cost tens of millions of dollars and blast furnace linings over 100 million. As a result, capital expenditures are not typically paid upfront but financed via loans and similar mechanisms. We convert the capital cost per annual energy use into an annual financing repayment amount that depends on the cost of capital and repayment period of the loan. The capital recovery factor is a measure used to convert an upfront cost into a series of annual cash flows over the financing repayment period and . Financing repayments are then discounted over the this period to yield a present value of annual repayments. 

![industrial equipment financing](/img/industry-ag-main-eqptCapitalFinancing.png)

Next, we calculate the present value of other future costs including fuel, fuel taxes, carbon taxes, and clean heat production subsidies. The latter is similar to a clean industrial heat investment subsidy, but incentivizes the production of clean heat, rather than incentivizing the equipment that produces the heat. In this way, it addresses the "spark gap" present in most regions — that is, the cost ratio between cheap combustible fuels and more expensive electricity. Depending on the region and the industrial process of interest, this gap may be outweighed by the higher efficiency of electrically powered equipment. 

We read in any BAU clean heat production subsidy from input data, then apply additional subsidies from a policy lever. The fuel types qualifying for clean heat production subsidies are specified in input data and should typically include electricity (and if relevant to the policy being probed, potentially green hydrogen for higher heat applications). The clean heat subsidy value is projected to future years based on a subsidy duration also defined by input data, then discounted to the current year using the industry's cost of capital. 

![clean industrial heat subsidy](/img/industry-ag-main-cleanIndustrialHeatSubsidy.png)

The clean heat subsidy value is then combined with the present value of future fuel and tax costs, which are reduced for select industries that consume significant shares of byproduct and secondary fuel types (for example, black liquor and hog fuel in the pulp and paper industry). The present value of future fuel, fuel tax, and carbon tax costs per unit energy is calculated on the [Fuels](fuels) page. In short, BAU pretax fuel prices and fuel taxes are read in from input data for all model run years, then discounted to the present year using a cost of capital from input data. 

The present value of capital and operational expenditures are then summed and converted to electricity equivalent. Lastly, this value is multioplied by the energy intensity of industrial production to move to units of $ input per $ of economic output.

![industrial equipment present value](/img/industry-ag-main-indstEqptPresentValue.png)

Finally, we have standardized, discounted lifetime costs per unit economic output that can be compared across various industrial equipment technologies. We use the standard logit formulation described by [JGCRI](https://jgcri.github.io/gcam-doc/choice.html) to allocate new equipment demand across the industrial fuel categories. Logit shareweights and coefficients are sourced from input data. 

With new equipment demand allocated economically, we turn to the implementation of fuel-shifting policies. Users can specify the amount of desired fuel shifting in each industry category and process. Fuel shifting will be applied to all fuels labeled as eligible in the input data variable 'Industrial Fuels Subject to Fuel Shifting.' Users can also specify that a portion of thermal fuel use be shifted to hydrogen combustion.

![industrial fuel choice and shifting](/img/industry-ag-main-FuelShifting.png)

Lastly, the share of new indsutrial equipment by fuel type is converted to economic output from new industrial equipment and summed to useful quantities for stock and energy use tracking purposes. 

![industrial fuel choice and shifting](/img/industry-ag-main-eqptOutputEnergyUse.png)

## Process Emissions

### Policies

All but two policies affecting process emissions are represented as a fraction of the total potential abatement from that policy that is achieved (based on the user's policy setting and policy implementation schedule), so they are all handled via a similar calculation flow, as shown in the following screenshot:

![process emissions policies](/img/industry-ag-main-ProcEmisPols.png)

Each policy setting at its current year value is multiplied by the total potential reduction (in CO<sub>2</sub>e terms) in that year year to obtain reductions due to that policy (in CO<sub>2</sub>e).  The total potential reduction is defined by the input file "PERAC Mass CO2e Avoidable by Marginal Cost", which projects the process emissions that can be abated by policy in the BAU. 

Emissions reductions are disaggregated by industry and by policy.  We include a helper variable 'Industry Process Emissions Policy to Pollutant Mappings' to assign the emissions abatement from each policy to the correct pollutant. Generally, each process emissions policy targets a single pollutant, for example substitution of f-gases in the chemicals industry or methane capture for natural gas and petroleum systems.  The exceptions are the agricultural policies targeting cropland and rice and livestock, which include abatement of both CH<sub>4</sub> and N<sub>2</sub>O.  We apportion emissions reductions between these pollutants based on their share of BAU agricultural emissions.

Our sources for potential percentage reductions achievable also break down the abatement potential into cost buckets, and the cheapest options are implemented first (see the [Industry - Cash Flow sheet](industry-ag-cash).  If a carbon tax is enabled and applies to a source of emissions (which depends on whether the carbon tax is set to apply to process emissions and/or to non-CO<sub>2</sub> gases), we also calculate the process emissions abated due to the tax.  We assume that any abatement potential at a cost less than or equal to the carbon tax is implemented (including any potential that is negatively prices, or cost-saving).  Emissions abated due to the carbon tax are then added to the variable 'This Year Change in Process Emissions by Policy and Industry.'  

![process emissions abated due to carbon tax](/img/industry-ag-main-ProcEmisCarbonTax.png)

Next, we implement the Shift to Non-Animal Products policy.  We multiply the user's setting for the percent of animal products shifted to non-animal products in each year by the share of agricultural process emissions from animals (specified via input data).  Any emissions increases due to additional production of non-animal products is already covered in the Changes in Industrial Production Levels section above.

![reduction in agriculture process emissions from shifting to non-animal products](/img/industry-ag-main-AnimalProdShifting.png)

### Calculation of Process Emissions

Now that we have calculated the change in process emissions from all relevant policies, we calculate the total change subscripted by industry category, process emissions policy, and pollutant.  We ensure that reductions do not exceed BAU process emissions of a given pollutant for a given industry, which can happen if input data for BAU process emissions and abatement potential use different sources.  The exception is the Improved Soil Measures policy, which can sequester CO<sub>2</sub> in soils and therefore result in negative emissions.  The relevant structure is shown below.

![change in process emissions in CO2e](/img/industry-ag-main-CngProcessCO2e.png)

We then use global warming potential (GWP) factors to convert BAU Process Emissions in CO<sub>2</sub>e to BAU process emissions in units of each specific pollutant.  (Here, we use the 100-year GWP timeframe, rather than the user-selected GWP timeframe, because the EPA source used 100-year GWP values when converting to CO<sub>2</sub>e, and we are simply undoing their conversion.)

![change in process emissions in grams pollutant](/img/industry-ag-main-CngProcessPollutant.png)

Next, we account for any changes in process emissions due to feedstock shifting. While all fuel-related policies to this point have tackled the impact of fuel use for energy purposes, we also include a policy -- described in the next section -- for reducing fossil feedstocks.  This policy can represent the impact of a shift from oil and gas feedstocks in the chemicals sector (some carbon from which is are released as the feedstocks are chemically converted into other products) to hydrogen or biofuel feeds. It can also represent a shift from the use of metallurgical coal for iron reduction in primary steelmaking to direct iron reduction with hydrogen feedstock. In both cases, emissions arising during the production processes can be prevented by a change in feedstock. We use the change in fuel consumption for non-energy purposes and each fuel's representative CO2 emissions intensity to determine feedstock shifting's imapct on process emissions.

![total change in process emissions](/img/industry-ag-main-ProcEmisFeedstockShift.png)

Then, we explicitly calculate non-BAU process emissions from input data, which can be enabled if a boolean policy lever is turned on by the user. This allows the user to explore differing projections of process emissions from various sources or the rollback of policies included in a BAU projection that would otherwise have lowered emissions and is subscripted by process emissions policy. 

![alternative process emissions](/img/industry-ag-main-AlternativePEAAC.png)

Finally, we apply the percent change in production due to policies (the calculation of which is explained above) to adjust both the process emissions and the change in process emissions to reflect increases or decreases in industry production levels.  The 'Process Emissions before CCS' variable is used later on this sheet as a component of total Industry sector emissions, while the 'Change in Process Emissions due to Policies' variable is used on the [Industry - Cash Flow sheet](industry-ag-cash). We add in the non-BAU additions afterwards such that their cash flows can be calculated separately. 

![total change in process emissions](/img/industry-ag-main-ProcEmisTotal.png)

## Totaling Fuel Use and Emissions

### Fuel Use

First, we find the total industrial fuel use for energy purposes.  The calculations for most industrial fuel use are outlined above, but we need to add in two additional components.  One is to add in the fuel used to power carbon capture and sequestration equipment in the industry sector, which is calculated separately on the [Carbon Capture and Sequestration](ccs) sheet.  We also subtract out any methane captured through the Methane Capture policy (part of the process emissions calculations), since captured methane can be used to reduce that industry's non-feedstock natural gas usage (to a minimum of zero). 

![fuel use for energy purposes](/img/industry-ag-main-FuelForEnergy.png)

We then add back in the industrial fuel use for non-energy purposes (feedstocks), adjusting for the percent change in production due to policies and any shifting to alternative feedstocks, as defined by a policy lever and input data determining the recipient fuel and shifting ratio.  This gives us our total 'Industrial Fuel Use.'

![industrial fuel use](/img/industry-ag-main-FuelUse.png)

### Electricity Demand

From the total industrial fuel use, we separate out the electricity demand and convert it to MWh.  This refers to the electricity drawn from the grid (electricity that is generated and consumed on-site is not tracked as part of the "electricity" total because it does not require more power to be generated by the electricity sector).  The following structure shows the reporting of electricity use:

![electricity demand from the industry sector](/img/industry-ag-main-ElecUse.png)

### Total Emissions from Industry (not including leakage)

Next, we convert fuel use for both industrial fuels used for energy purposes and fuels used to power industry CCS to emissions using the emissions intensities from the [Fuels sheet](fuels).

![total industry sector emissions](/img/industry-ag-main-EmisBeforeCCS.png)

We then add process emissions and subtract the quantity of CO<sub>2</sub> that is sequestered via CCS to give us total emissions from industry in the modeled region, as shown below. The structure separately subtracts CO<sub>2</sub> sequestration from both energy related and process emissions before arriving at 'Industrial Sector Pollutant Emissions.'

![total industry sector emissions](/img/industry-ag-main-EmisTotal.png)

Finally, we also create a variable that tracks industrial pollutant emissions in terms of CO<sub>2</sub>e for use in an output graph. 

![total industry sector emissions in CO2e](/img/industry-ag-main-EmisTotalCO2e.png)

### Foreign Leakage

The model calculates foreign leakage (emissions induced in foreign countries in response to unilateral implementation of policies in the model) via the following structure:

![foreign leakage](/img/industry-ag-main-ForeignLeakage.png)

The difference between BAU and policy case emissions by industry are multiplied by the foreign leakage rate (by industry) to obtain the total induced foreign emissions.  These emissions are not added into the totals for the modeled country or region- they are simply reported here.  More information about the calculation of foreign leakage appears above on this page, under the "General Notes" header.

---
*This page was last updated in version 4.0.4.*
