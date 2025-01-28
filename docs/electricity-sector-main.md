---
title: Electricity Sector (main)
---
## General Notes

The Electricity Sector of the EPS is the most structurally complex sector in the model. In this sector, the model aggregates annual electricity demand from across the other sectors in the model, converts it to hourly electricity demand, adjusts demand based on losses, imports/exports, and load modifying technologies, and then calculates retirements, new capacity, and dispatch. Unlike other sectors of the model, the Electricity Sector has hourly temporal resolution, with the model estimating demand and generation across 24 hours in six different timeslices. It also calculates market dynamics unlike that in other sectors, including the use of multiple optimization loops. As such it is far more structuraly detailed than other sectors.

While other sectors in the model rely on input data to specify energy or service demand, in the Electricity Sector the EPS constructs its own BAU scenario inclusive of existing policies. This different approach increaeses the complexity of the sector as it must be well calibrated in BAU even without the addition of policies.

The structure in the EPS attempts to mimic the behavior of other types of models that are dedicated electricity sector models, the most common of which is the "capacity expansion model." These models use linear programming to identify the least cost mix of resources that satisfy grid and policy constraints based on an objective function to minimized total system costs. 

Vensim does not have the capability to use linear programming and its ability to incorporate market clearing dynamics is extremely limited. As such, we built a structure that produces similar results to capacity expansion models with a simlar underlying market theory that is aligned with real world dynamics. In particular, the model will build new capacity if that capacity is profitable over a time period (meaning its anticipated revenues exceed its costs) and also if additional capacity is needed for reliability purposes, subject to a capacity price. Each component of the Electricity Sector is discussed in this section.

In general terms, the "Electricity Supply - Main" sheet determines hourly electricity demand, accounting for trade, losses, and load modifying resources. Then, it determines power plant retirements based on policy and profitability. It then runs through a series of capacity expansion steps that build new capacity, including storage capacity, based on policy, cost, or reliability, accounting for hourly demand and supply constraints. It next moves through a multi-stage dispatch mechanism, producing hourly dispatch and associated market prices. Lastly, it aggregates generation and calculates associated energy use and emissions. Each of these steps is explained in more detail below.

## Power Plant Technologies

The model includes twenty four types of power plants (note: not all of these are used in every geography the EPS covers):

* hard coal
* hard coal with CCS
* lignite 
* lignite with CCS
* natural gas steam turbine
* natural gas combined cycle
* natural gas combined cycle with CCS
* natural gas peaker
* nuclear
* small modular reactor
* hydroelectric
* onshore wind
* offshore wind
* solar PV
* solar thermal
* biomass
* biomass with CCS
* geothermal
* petroleum
* crude oil
* heavy or residual fuel oil
* municipal solid waste
* hydrogen combustion turbine
* hydrogen combined cycle

In order to represent differences in characteristics between plants of the same type (say, between an older and a newer coal plant), the model uses vintaging. Data for historical capacity is ordered by vintage and the model tracks vintages as power plants are added and retired. This allows the model to account for changes in technologies, such as improved heat rates or operating costs, over time. Generally speaking the model will order retirements from oldest to newest (more detail on retirements below). To improve runtime, the model collapses the vintages into weighted averages for the fleet as far upstream as possible.

## Temporal Resolution

The model includes six electricity timeslices, each with 24 hours:

* average winter day
* average spring day
* average summer day
* average fall day
* peak summer day
* peak winter day

Input data determine the number of days in each electricity timeslice. Peak days are used only in reliability calculations in the model and input data is meant to represent the worst system conditions in each hour on those days, i.e. lowest capacity factor for resources and highest demand hours. The peak hours are generally not used for computing dispatch, prices, or revenues, other than for reliability calculations.

## Hourly Electricity Demand

The first stage of the power sector calculates the hourly electricity demand, which is used throughout the power sector to calculate dispatch, capacity additions, and market prices. In this stage, total annual demand across the various sectors of the model is converted to hourly demand, adjusted to account for trade and losses, and further modified by load modifying technologies, before finally yielding a total hourly electricity demand value for each electricity timeslice.

### Net Imports

The EPS reads in electricity exports (total) and imports (by fuel type) and calculates any changes to the BAU data based on exogenous GDP adjustments determined by input data and policy levers. These adjustments vary imports and exports based on changes in GDP outside of the underlying projection data. This structure is configured to allow for estimation of COVID-induced changes in demand from data sets pre-dating 2020. The final output is total net imports (positive for imports, negative for exports).

![net imports of electricity](/img/electricity-sector-main-NetImports.png)

### Calculating Hourly Electricity Demand from Annual Electricity Demand including Own Use and Transmission and Distribution Losses

The model then moves to compute total hourly final electricity demand. In other sectors of the model, electricity demand is tracked annually, for example total annual cooling demand in buildings or demand for electric vehicle charging. Input data relating annual demand to hourly demand (load factors) is used to convert the annual values to hourly values aligned with the electricity timeslices used by the model. 

Due to differences in data alignment, i.e. some end uses don’t directly overlap with input data, an adjustment can be necessary to ensure the computed peak and minimum demand values align with historical data. In this step, the model multiplies the computed hourly demand by an Hourly Variance Multiplier that is estimated such that the peak annual demand in the EPS aligns with historically observed values.

In this step, the model adjusts load to account for transmission and distribution losses based on input data, adding demand in each hour to cover the estimated losses. Policies can be used to improve the loss percentages as well.

Finally, the model can incorporate own use on site as part of the total demand. In most regions, own use is accounted for through lower heat rates in the power sector, i.e. less power generation per unit of fuel input. But in some regions, own use is included in calculations of electricity demand, and the model can support either approach through input data modifications.

The final result is total electricity demand by hour before accounting for distributed generation.

![electricity demand before distributed generation](/img/electricity-sector-main-TotalDemandBeforeDG.png)

### Hourly Demand after Distributed Generation

Next, the model computes the contribution of distributed resources using hourly capacity factors from input data and total installed capacity of distributed resources. Electricity supplied by distributed resources is subtracted from the total hourly demand.

![electricity demand after distributed generation](/img/electricity-sector-main-TotalDemandAfterDG.png)

### Hourly Demand after Optimizing Dispatch of Net Imports

After computing net hourly demand, the model then allocates annual net imports to hours in each timeslice. The structure proportionally allocates imports (if net imports is positive) based on the total daily share of demand in a given hour. It allocates exports (if net imports is negative) similarly, but based on the hours of least demand. Both imports and exports are subject to minimum and maximum constraints, and the model will assign all of the net imports to the next set of hours that satisfy the constraints. The model loops through 20 optimization passes to allocate imports or exports proportionally without exceeding hourly maximums and minimums, which are provided in input data.

As an example, consider a day with equal electricity demand in every hour and positive net imports. The model would allocate the same imports in every hour. Next consider a case where 23 of the 24 hours contain 70% of the daily demand, and the final hour contains 30% of the daily demand. In this case, assuming no maximum or minimum constraints, the model would apportion 30% of the expected daily import value to the worst hour and assign the remaining imports evenly across the remaining hours. Although this is a very simplified approach to estimating exports and imports, it helps maximize their utility.

![electricity demand after transmission and distribution losses](/img/electricity-sector-main-TotalDemandAfterNetImports.png)

### Potential Load Modification from Storage, Demand Response, Pumped Hydro, and Other Load Modifying Resources

Next, the model estimates demand modifications from load modifying resources, including demand response, EV batteries,  grid storage, and pumped hydro. Note that for hybrid power plants (i.e. power plants with battery storage), the impact of the onsite storage is handled through modifications to the hourly demand given limitations of programming in Vensim. This approach is discusssed in more detail below where applicable.

#### Grid Batteries Excluding Hybrid Batteries

The model estimates the total daily shifting potential of grid batteries. The model tracks the total MW*hr of battery capacity based on input data and calculated additions to compute a total potential. Adjustments for round trip efficiency losses are handled later in the code. The capacity additions of storage are on a one year time delay so the model adds the prior year's capacity additions in here. These calculations do not include the capacity of storage on hybrid power plants, which are handled later on.

![potential daily max shifting from grid batteries](/img/electricity-sector-main-GridBatteriesDailyMax.png)

#### Pumped Hydro

Next the model estimates the potential day contribution of pumped hydro. Due to structural limitations in the model, pumped hydro is treated like demand response, i.e. it can be discharged daily during periods of maximum net load, and not handled as a power plant type. The model estimates daily contributions from pumped hydro by multiplying the capacity by hourly capacity factors provided in input data and assuming these rates are fixed.

![daily load reductions from pumped hydro](/img/electricity-sector-main-PumpedHydro.png)

#### EV Batteries

EV batteries can contribute to load shifting in the EPS based on input data and policy settings. The model aggregates the total amount of battery capacity from the existing stock of vehicles and then applies a BAU share of the EV battery capacity that can be used for grid balancing based on input data (in many countries this is set to zero as there is no vehicle-to-grid availability yet). Users can modify this through a policy lever which allows for increasing the share of total EV battery capacity that can be used for grid balancing. The model computes the final maximum amount of daily shifting that can be utilized from the EV batteries (round trip losses are accounted for later).

![potential daily max shifting from EV batteries](/img/electricity-sector-main-EVBatteries.png)

#### Demand Response

Total demand response capacity (in MW) is aggregated based on BAU input data and policy settings and multiplied by an average hours per day that can be called for DR to estimate the total daily contribution of DR. Note that demand response capacity is not endogenously added in the EPS but additions are specified through input data and user policy settings. The model computes a total amount of hourly load shedding by electricity timeslice that is possible from DR.

![potential daily max load shedding from demand response](/img/electricity-sector-main-DemandResponse.png)

#### Total Diurnal Balancing Potential

The model totals the amount of load shedding and shifting available accounting for losses. Because technologies are aggregated into capacity values, the model computes a weighted average round trip efficincy across all the different resources for use in the load shifting and shedding calculations. We also discount the availability of some resources to reflect the "copper sheet" nature of the EPS, in that it does not have subregional detail. These are incorporated via the Regional Availability Factor input data. The final outputs of this steps are weighted average round trip efficiencies and total availability capacity for daily load balancing.

![total diurnal balancing potential without hybrid battery storage](/img/electricity-sector-main-TotalDiurnalBalancingBeforeHybridBatteries.png)

Though there are few technologies readily available, the model is structured to allow for seasonal load shifting and balancing. Input data can be configured to allow for seasonal storage capacity and to specify the annual charge and discharge cycles and round trip efficiencies. These technologies are used later on to seasonally shift resources. 

![total seasonal balancing potential](/img/electricity-sector-main-TotalSeasonalBalancing.png)

### Modifying Load before Accounting for Hybrid Battery Storage

The model next builds on the calculations of load modifying resources to compute changes in load. To estimate these changes in demand, the model starts by estimating the surplus capacity in each hour. This calculation subtracts net load from available capacity in each hour, yielding surplus capacity available, which is assumed to be a good indicator of when the grid is most and least constrained. The model subtracts from this value the average for each timeslice, meaning the most constrained hours have negative values (less surplus capacity than average) and the least constrained hours have the highest positive values (more surplus capacity than average). The model then allocates net seasonal peak load reduction from the load modifying resources proportionally based on the size of the hours with less surplus capacity than average, i.e. the hours with the least surplus capacity have the highest net peak load reduction from load modifying resources. For storage resources, charging hours are proportionally allocated to those hours with the most surplus capacity, accounting for round trip efficiency losses.

![shifting seasonal net peak load and demand](/img/electricity-sector-main-NetPeakLoadShift1of2.png)

After calculating the seasonal load shifting, the model then calculates diurnal load shifting and shedding based on the resource availability calculated earlier.The model then aggregates the total load shed and shifting across seasonal and diurnal resources and computes a total amount of hourly electricity demand after demand altering technologies.

![shifting diurnal net peak load and demand](/img/electricity-sector-main-NetPeakLoadShift2of2.png)

### Modifying Load after Accounting for Hybrid Battery Storage

The model next passes through another round of load modification using the adjusted load as a starting point. This part of the model also integrates with the capacity expansion structure to optimize the deployment of hybrid storage resources (i.e. wind and solar with storage) based on when they would charge and discharge and modifies the load accordingly. This approach is somewhat unique in that it modifies load to reflect charging and discharging of hybrid resources given constraints in the structure of Vensim. This step of the model is co-optimized with hybrid power plant capacity expansion so that the capacity and load impact is optimized. 

First, the model calculates an updated amount of battery storage for load shifting inclusive of hybrid batteries. The model does this in 20 optimization passes which are synced with capacity additions and in each pass further refines the storage capcaity based on the calculated storage additions in the current pass. 

![total battery balancing potential with hybrid battery storage](/img/electricity-sector-main-TotalDiurnalBalancingIncludingHybridBatteries.png)


The model follows the same approach as before, moving through load modification from seasonal storage and diurnal storage, but using the values calculated in the first load modification bass for resources other than battery storage.

![shifting seasonal net peak load and demand including hybrid battery storage](/img/electricity-sector-main-NetPeakLoadShiftHybrid1of2.png)

The model incorporates the new load shifting amounts into demand and produces final hourly electricity demand using the storage additions from the final optimization pass.

![shifting diurnal net peak load and demand including hybrid battery storage](/img/electricity-sector-main-NetPeakLoadShiftHybrid2of2.png)

At the end of this calculation flow, the model has determined the final hourly electricity demand that must be met by generation resources and accounts for all load reduction and shifting that occurs from distributed resources, imports and exports, load modifying resources, and hybrid power plants.

### Summing Charging and Discharging from Batteries

Finally, the model sums the total amount of battery capacity and the total charging and discharging of batteries, inclusive of hybrid batteries, for use in other places throughout the model.

![total hourly and annual charging and discharging of battery storage](/img/electricity-sector-main-HourlyBatteryChargeDischarge.png)

## Revenues, Costs, Retirements, and Max Build Rates

This stage of the model calculates revenues for new and existing resources, uses this information to estimate retirements, and calculates maximum build rates based on technical potential for different resources.

### Annual Energy Market Revenues for Existing Resourcces

To estimate energy market revenues for existing resources, the model calculates total revenue per unit capacity by summing the hourly generation from all resources of a certain type (e.g. natural gas combined cycle power plants) and the marginal dispatch cost in that hour and dividing by total installed capacity, yielding estimated annual energy market revenue per unit capacity. 

![Annual energy market revenues for existing resources](/img/electricity-sector-main-EnergyRevenuesExisting.png)

### Projected Annual Revenues for New Resources

For new resources, the model estimates potential energy market revenues for plants with and without existing capacity. For plants with existing capacity, the model estimates potential dispatch and energy market revenues use a five-year average of energy prices for various resources, in order to average out annual fluctuations in resource costs. 

![Annual energy market revenues for new resources with existing capacity](/img/electricity-sector-main-EnergyRevenuesNew.png)

For plants without existing capacity, the model calculates a hypothetical dispatch amount in each hour as if that resource had been available using the calculated hourly energy market prices for existing resources (discussed later). This allows us to estimate potential dispatch and revenue from plant types with no existing capacity in the model but which may become profitable and be built in later years, such as hydrogen-based plants.

![Annual hypothetical dispatch for resources with no existing capacity](/img/electricity-sector-main-HypotheticalDispatch.png)

The model combines the hypothetical dispatch for new resouces with no existing capacity and the five year average marginal dispatch costs to produce esitmated annual energy market revenues for planning new capacity. This is combined with the five year estimated energy market revenues for resources with existing capacity to produce a value for all new resources. Costs are divided by expected capacity factors to levelize them into a $/MW*hr value for all plant types. 

Given the structure of the EPS and that it calculates load dynamically, it does not have foresight. To make future planning decisions in the electricity sector, the model therefore relies on a rolling average of energy market revenue. The model calculates a rolling four year average of anticipated energy market revenue (using five year averages for fuel prices as outlined above) for guiding investment decisions. In the first several years of the model run, prior to enough years being run to produce a four year average, the model wil use the most number of years possible to create the average, i.e. one in year one, two in year two, three in year three, and four in all subsequent years.

![Annual energy market revenues for all new resources](/img/electricity-sector-main-EnergyRevenuesNewAll.png)

The model has to calculate projected energy market revenues for hybrid power plants separately because they are able to optimize discharging and charging of the battery to maximize energy market revenues. To calculate the revenues the model applies input data on the average battery capacity per unit power plant capacity to compute the storage amount per MW of power plant capacity. It then calculates the share of daily expected output that can be shifted, which varies across electricity timeslice because of varying capacity factors by timeslice. The model computes the revenue from shifted generation based on availability and battery size and adds to it the revenue from unshifted generation to compute a total levelized energy revenue per unit output. This value will be higher than for plants without storage, particularly when there is a significant spread in marginal dispatch costs. These revenues also use the five year fuel price avearaging and rolling four year energy market revenue averaging outlined above.

![Annual energy market revenues for new hybrid resources](/img/electricity-sector-main-EnergyRevenuesHybrids.png)

### Annual Recurring Costs

Annual recurring costs are calculated as an input into the retirement decision-making framework. These costs are the sum of dispatch costs (which include fuel and variable O&M), annual capital costs (from input data) needed to maintain plants' operability, and ongoing fixed O&M costs. The model computes these costs on a $/MW basis for use downstream in retirement calculations

![Annual recurring costs](/img/electricity-sector-main-AnnualRecurringCosts.png)

### Clean Electricity Standard and Zero Emission Credit Revenue

Input data can specify any credits specifically for nuclear power plant owners. The model calculates a credit price from the clean electricity standard (discussed later) which is used here. Total revenue from these credits is calculated for use in the retirement calculations.

![Revenues from CES and ZEC programs](/img/electricity-sector-main-CESandZECRevenues.png)

### CCUS Retrofitting Costs

CCUS retrofitting costs are calculated using estimated capital costs and a capital recover factor, and incremental variable and fixed O&M costs from converting to CCUS. This yields an estimated retrofitting cost per unit electricity output. CCUS plants can have higher capacity factors than non-CCUS equipped plants, which can contribute to lowering the incremental cost difference.

![CCUS Retrofit Costs](/img/electricity-sector-main-CCUSRetrofitCost.png)

### Annualized Cost per Unit Output for New Capacity (i.e. LCOE)

Annualized costs per unit new electricity output, the EPS version of an LCOE, is calculated next. These costs start with capital costs based on input data and endogenous learning of capital costs for certain technologies. The model starts by splitting soft costs and hard costs and applying an endogenous learning rate to the capital cost portion where that structure is used (discussed in the endogenous learning section of model documentation). Policies can be used to further lower soft costs. Research and development policies can also be used to further lower the total construction costs (sum of hard and soft costs). 

![Construction costs per unit capacity before subsidies](/img/electricity-sector-main-LCOE1.png)

The model then applies any subsidies for capacity construction (e.g. investment tax credit), which can be modified by user set policies. The model also adds in spur line costs at this point, which vary by technology and region. After computing the construction cost after subsidies and spur line costs, the model estimates an annual repayment of these costs per MW using a capital recovery factor calculated upstream. Each plant type can have a its own capital recovery factor which is based on the weighted average cost of capital and assumed financing lifetimes for power plant types. The application of the capital recovery factor converts the construction costs into an annualized payment.

![Annual financing repayment per unit capacity](/img/electricity-sector-main-LCOE2.png)

For hybrid power plants, the model calculates the incremental annualized financing payment from the additional storage at the power plant.

![Annual financing repayment for hybrid plant battery storage per unit capacity](/img/electricity-sector-main-LCOE3.png)

Next, the model adds annual fixed operating and maintenance (O&M) costs to the annualized financing repayment, then converts the annualized costs to levelized costs based on the achieved capacity factors of various types, yielding a $/MW*hr value for all plants types.The anticipated capacity factors utilize historical three year data calculated in the model to adjust capacity factors as the grid evolves, i.e. if natural gas combined cycle units dispatch less because there is more clean electricity on the system, the capacity factors reflect this evolution, and the levelized costs increase.

![Annual fixed costs per unit new electricity output](/img/electricity-sector-main-LCOE4.png)

The model then estimates total variable costs and subsidies. Electricity production subsidy amounts CCUS subsidy amounts are calculated here, including an adjustment based on the lifetime of the credit (i.e. for credits that are only available for a portion of the financial lifetime of the power plant, their value has to be adjusted to account for the limited duration of their availability). The model adjusts the incentive amounts by calculating a duration multiplier for instances where the duration is shorter than the financial lifetime of the plant. Users can also modify the electricity production and CCUS incentives, which change the subsidy per unit electricity output. Carbon pricing credits are also calculated at this stage for plants equipped with CCUS. The model sums total variable costs, including fuel costs (which include carbon pricing impacts), variable O&M costs, CO2 transport and storage costs per MW*hr for plants with CCUS, electricity production subsidies, carbon price credits, and CCUS subsidies. Variable costs are added to the levelized fixed costs to produce a total cost per unit new elec output and several variations on this variable used throughout the model. Storage costs are added to these values for hybrid power plants.

![Cost per unit new electricity output](/img/electricity-sector-main-LCOE5.png)

### Economic, Policy-Driven, and Planned Retirements

The model next moves on to calculating total annual retirements. Total revenues are calculated, including capacity market revenue or capacity contract revenue (discussed later), energy market revenue, revenue from clean electriicty credits, and revenue from zero emissions credits, yielding a total revenue per unit capacity. 

![Total revenue per unit capacity for existing plants](/img/electricity-sector-main-Retirements1.png)

For each power plant type, annual revenues are compared against going forward costs, calculated earlier, to estimate a net loss per unit electricity capacity. Power plants must be uneconomic (have net losses) for at least three consecutive years to be deemed uneconomic. If there are net losses for at least three years, the model calculates the rolling average three-year net loss and multiplies this by a calibrated parameter to determine the total cost driven retirements in a given year. 

To this, the model adds capacity retirements specificed in input data and finally adds capacity retirements from any policy lever settings to determine total retiring generation capacity.

![Calculated total retiring generation capacity](/img/electricity-sector-main-Retirements2.png)

### Maximum Buildable Capacity

The model accounts for technical potential for various power plant types and will not allow capacity to be built in excess of maximum technical potential, particularly for renewable resoures. In addition, policy levers can be used to restrict the construction of certain capacity types. If a power plant type has been fully retired from the model, it is not allowed to be built again in later years. Collectively these calculations yield a maximum capacity buildable in a given year. The model includes other annual restrictions for new capacity, which are discussed below in the section on new capacity construction.

![Maximum buildable capacity](/img/electricity-sector-main-MaxBuildableCapacity.png)

## New Capacity Construction

In this stage, the model calculates new capacity additions across multiple mechanisms. The first of these is a mandated capacity and retrofit mechanism that uses input data and policy levers to add capacity and retrofit plants with CCUS. Next the model will add clean firm capacity if needed to comply with a clean electricity standard. After this step, the model moves into adding economic capacity, which is co-optimized with the clean electricity standard policy. Lastly, the model moves through a two stage reliability capacity addition mechanism, which ensures there is sufficient capacity installed to meet reliability requirements.

### Policy Mandated Capacity Additions and Retrofits

Mandated capacity additions and CCUS retrofits in the BAU and policy scenarios can be specified in the input data and policy levers. The model starts by reading in these values and adding them to new capacity built and retrofits in future years. 

![Policy mandated capacity additions and retrofits](/img/electricity-sector-main-PolicyMandatedAdditionsRetrofits.png)

### Flexible Clean Capacity Additions and Retrofits Required for Clean Electricity Standard Compliance

Next, the model calculates whether or not new clean dispatchable resources are needed to meet the clean electricity standard and will build new clean resources or retrofit existing ones if capacity is needed. We use a simplified assumption that 5% of peak demand at a 100% clean electricity standard value must be met with clean dispatchable resources in order to ensure the model builds sufficient clean dispatchable resources given its other constraints. In years leading up to the 100% clean electricity standard, the annual amount of clean dispatchable capacity required is determined by an s-curve defined in input data.

Each capacity mechanism, exclucing mandated additions, uses a structure that computes the cost-effectiveness of resources and determines a mount to be built if they are cost-effective. This structure is covered i more detail in the next sectrion.

If new clean dispatchable capacity is needed that would not otherwise be built, the model computes a credit price for new resources that drives sufficient new capacity to meet the demand. The model will increase the credit price until sufficient resources are built, based on the total revenue of various technologies, to meet the requirement. It adds this revenue to the estimated revenue for different plant types and then computes the amount of capacity added. The cost of this credit is added to the total costs of the clean electricity standard program. 

![Flexible clean firm capacity additions](/img/electricity-sector-main-FlexibleCleanFirm.png)

### Cost Effectiveness Additions and Retrofits

The core logic underpinning each element of the capacity expansion structure operates by evaluating whether not power plant types are profitable and estimating additions based on their level of profitability. Policies can affect this profitability through adding revenue to specific power plant plants types.

This mechanism operates simultaneously for new resources without storage, new resources with storage, and CCUS retrofits of existing resources.

The model begins by cumulating the total anticipated revenue by resource type. This relies on the rolling four year energy market revenue, discussed earlier and any anticipated policy revenue, particularly credits for the Clean Electricity Standard, which is co-optimized with economic capacity expansion (discussed later). Revenue is normalized into $/MW*hr based on achieved capacity factors by resource in the model. Subsidies for electricity generation are added.

The model then compares anticipated revenue against the anticipcated levelized cost of building new resources, not includeing variable subisidies (these are considered a revenue stream). Resources that are profitable will have revenues that exceed costs while unprofitable resrouces will not. This results in a profit value, i.e. revenues-costs.

The model then plots the expected profit against a curve that is defined in input data and calibrated against historical data and other models. The curve plots profit against a share of existing capacity, translating the profit amount to a share of existing capacity. This curve defines how much capacity is built for a given profit margin based on the total installed capacity of each resource. This prevents the model from overbuilding novel resources and let's the model deploy incremntally capacity at a given profit level as the total installed capacity of that resource grows and the knowledge, labor force, and materials become more widely available

![Share of exisitng capacity installed per unit profit](/img/electricity-sector-main-ProfitExistingCapacity.png)

For example, if a resource type has a profit of $10/MW*hr, it would cause new builds of roughly 13% of existing capacity. For a resource with an installed based of 50 GW, this would yield 6.5 GW of new builds. But over time as more of that resource is built, if it gets to 100 GW, then the same profit level would result in 13 GW being built. (This is balanced in the model by evolving market revenue as the system is satuated with resources).

The model then computes the total new capacity added using this computed value and several input data files which let users change the share of costs that have to be covered to be deemed profitable and the share of cost-effective capacity that is actually built (sometimes there are market dynamics that significantly limit what can be built, even if it is profitable) The model also uses a minimum value for resources that do not yet exist so that it is always capable of building them if they are profitable. 

![Cost effective capacity additions and retrofits](/img/electricity-sector-main-CostEffectiveAdditions.png)

### Clean Electricity Standard Additions

The EPS includes the clean electricity standard (sometimes referred to as renewable portfolio satndard) as one of the key power setor policies. The application of the CES/RPS is co-optimized with the cost-effectiveness additions to identify a credit price that generates sufficient revenue to add or retrofit resources for cost-effectiveness that leads to compliance with the CES/RPS setting. In each optimization pass, the model checks to see whether or not the anticipated amount of existing and new or retrofit clean electricity is sufficient to meet the standard. It will raise the credit price until this share is met and converge on a credit price that gets just the right amount of new clean capacity built and/or retrofit. 

The first stage of the CES is to compute the weighted average national CES/RPS value. The model allows for different resources to be included as part of the RPS/CES and also aggregates subnational data provided in the input data to estimate a binding CES/RPS value. For example, many states have existing RPS/CES values and collectively they form a national floor the CES, below which a user policy setting would not be binding. This first set of strecture computes the effective RPS/CES value that model will achieve.

![Calculating RPS/CES percentage to seek](/img/electricity-sector-main-CESTarget.png)


The optimization structure utilizes a special type of capacity factor, the marginal capacity factor, in order to properly incent and build the right resources. This is needed because once certain hours are saturated with clean electricity, adding more clean electricity in those hours does not help increase the total share of clean electricity over the year. The marginal capacity factor captures the diminishing value of resources as the grid gets cleaner and certain hours are saturated. 

![Calculating marginal capacity factors](/img/electricity-sector-main-MarginalCapacityFactor.png)

One drawback to this approach is that it can make the credit price seems unnecessarily high. This can occur because the model computes revenue as the CES credit price multiplied by the marginal capacity factor for a given hour, summed over the year. As the grid approaches 100% clean, marginal capacity factors for all resources decrease and a higher price is needed to drive clean adoption. On the other hand, this ensures the model is only paying for completely additive clean resources and it helps shift CES revenue to dispatchable resources as the grid gets close to 100% clean.

Hybrid resources are included in the optimization loop and the model will tend to move towards them in years with higher clean shares to reallocate the clean supply to the hours when it is needed.

The CES also allows users to set an Alternative Compliance Payment in the input data that sets a cap on the credit price. Once the cap is hit, the model will not continue to increase the credit price, even if it cannot hit the CES target. 

![Calculating marginal capacity factors](/img/electricity-sector-main-CES.png)

The CES optimization works together with the clean dispatchable mechanism so that the model doesn’t overbuild clean resources but builds adequate flexible clean resources.

### Additions to Support Green Hydrogen Production

The EPS also tracks green hydrogen demand and will build off-grid renewables to support the production of green hydrogen. This part of the model uses a logit choice function to assign the demand for electricity to different resource types based on their costs. The exponents and shareweights for logit are included as part of input data. The model then builds sufficient capacity to electricity demand for green hydrogen production and tracks this stock over time.

![Additions for green hydrogen production](/img/electricity-sector-main-GreenH2Additions.png)

### Reliability Additions

At this point the model has built capacity as mandated in input data, for cost-effectiveness, to comply with an RPS or CES including if flexible clean resources are needed, and for off-grid green hydrogen production. The final set of capacity mechanisms ensure there are sufficient resources online to meet reliability in every hour, including a reserve margin. 

The reliability mechanism is broken into two steps due to limitations in Vensim. The model cannot optimize a resource mix across multiple hours and resource types at the same time given the structural limitations of Vensim (this would require a linear program). So, the EPS first does a reliability optimization limiting the model to building dispatchable resources. In the second optimization, the model adds the resources from the first optimization to the supply mix and then fills in the rest of what is needed from any resources. An example helps illustrate why this approach is necessary.

Consider a system with a summer peak at 2 PM and a winter peak at 10 PM and where the summer peak is higher than the winter peak. If the model optimize around the single maximum peak, it might want to build solar to meet the 2 PM peak, but this solar would be unavailable for the winter peak. This could lead to situations where the model is unable to meet winter demand. On the other hand, the model was allowed to build all it wanted for both peaks, for example solar for the summmer peak and gas for the winter peak, and it just summed the additions from the two peaks, this would add too much capacity, because some of the gas winter peaking capacity could be used for the 2 PM summer peak. The best way to address this challenge is through the use of a linear program, however Vensim is not configured for this. So, the EPS addresses this challenge by splitting the reliability mechanism into two pieces. It first computes the dispatchable capacity, and then fills in the remainder with any kind of capacity.

The model determines capacity additions by first estimating how much is needed in each hour and computing a capacity price that increases revenue such that sufficient capacity is added to the system, using the same cost-effectiveness structure used elsewhere in the model. The single highest hour is identified and used as the price for all resources. Resources’ total revenue from the capacity price is discounted by their hourly availability in the binding hour. For example, if a winter 10 PM peak is the binding hour, solar PV would not receive any capacity revenue, but onshore wind would at its estimated capacity factor.

To estimate how much is needed in each hour, the model uses a peak winter and a peak summer timeslice. These are meant to represent the worst system conditions during the worst five days of each season in terms of demand and potential output from variable resources. The input data looks at the maximum demand during each hour of the top five days and the minimum capacity factor for variable resources. The model adds a reserve margin on top of this, to ensure sufficient supply. These approaches try to mimic planning procedures by real world utilities and grid operators.

![Dispatchable-only reliability additions](/img/electricity-sector-main-DispatchableReliability.png)

![Residual reliability additions](/img/electricity-sector-main-ResidualReliability.png)

Because the reliability mechanisms are downstream of the cost-effectiveness mechanism, including for the CES/RPS, the reliability mechanism can result in additional clean capacity being built that causes the model to exceed the CES/RPS value in certain years. The only way to fully address would be through a linear program where the model could optimize capacity against multiple constraints at once, but Vensim is unable to do this.

If the model has a CES/RPS of 100%, the reliability mechanism will not allow non-qualifying resources to be built. However, in the years leading up to the 100% value, the model can still build non-qualifying resources, which may not be run or may not be allowed to run shortly after. This is a known issue using a model without perfect foresight, but we are again constrained by our ability to model this given Vensim’s structure. A future area for enhancement might be to integrate the future year RPS value into the reliability structure to prevent the model from building resources that would never or only scarcely be used.

### Total New and Retrofit Capacity

Lastly, the model sums the total capacity additions and retrofits for input into the stock and flow tracking.

![Total capacity additions and retrofits](/img/electricity-sector-main-TotalNewCapacity.png)

## Tracking Electricity Stock and Average Power Plant Fleet Properties

This part of the model tracks fleetwide properties of power plants, such as installed capacity, weighted average heat rates, and operating costs. The model collapses the vintaging here into a single weighted average value to minimize runtime impacts and carry through a single value for each power plant type.

### Tracking the Electricity Fleet

Existing capacity, retirements, new capacity, and retrofits are combined to produce key outputs for use across the electricity sector.

![Total installed power plant capacity](/img/electricity-sector-main-StockTracking.png)

### Capacity Factors

Various capacity factor calculations are used through the electricity sector. These include achieved capacity factors (annual and by hour), three year average achieved capacity factors, expected capacity factors, start year capacity factors, and bid capacity factors. Each of these has a different use in the structure to reflect different situations and calculations.

Three year average achieved capacity factors by hour are used in the RPS mechanism to ensure compliance will be met at a given RPS price and deployment. Achieved capacity factors by hour are important for measuring hourly output, which in turn is used to estimate annual output and compliance with an annual RPS. Achieved capacity factors differ from expected capacity factors because the account for real world (in the model) operating conditions and things that may cause expected output to deviate from actual output, such as curtailment. Achieved capacity factors are calculated using a three year rolling average of the model's calculated capacity factor by plant type by hour.

![Three year average achieved capacity factors by hour](/img/electricity-sector-main-ThreeYearAverageAchievedCFbyHour.png)

These values are also used to calculate average annual achieved capacity factors. We use achieved capacity factors because they can reflect the evolving nature of the power system and the impact to plant run times. For example, in a power sector decarbonization scenario, the achieved capacity factors for fossil thermal plants will decrease significantly. If we used a static capacity factor, then when computing anticipated revenue and costs for new power plant types, we would fail to capture the fewer hours those plants run. With achieved capacity factors, the model correctly tracks the evolution of the power sector composition and the impact this has on cost recovery for new power plant types. To calculate achieved capacity factors for new plants, we discount the expected capacity factor by the proportion of the three year average achieved capacity factor to expected. For example, if natural gas combined cycle plants have a three year average achieved capacity factor of 25% but their expected capacity factor is 50%, we reduce the achieved capacity factor for new plants by 50% (25% divided by 50%) to 25%. 

![Three year average achieved capacity factors](/img/electricity-sector-main-ThreeYearAverageAchievedCF.png)

These rely on weighted average data across the whole fleet by power plant type.

![Three year average achieved capacity factors](/img/electricity-sector-main-WeightedAverageCFs.png)

We also use expected capacity factors where there is no existing capacity from which to calculate an achieved capacity factor, for example novel technologies like hydrogen combustion turbines or small modular reactors. In these cases we compute a hypotehtical capacity factor as if one megawatt of that power plant type had been available for dispatch. 

![Expected capacity factors](/img/electricity-sector-main-ExpectedCFs.png)

In the start year we also compute start year capacity factors based on input data, since there is no historical year data to start calculating from.

![Start year capacity factors](/img/electricity-sector-main-StartYearCFs.png)

Bid capacity factors are used in the dispatch mechanisms to reflect the available capacity in a given hour available to dispatch. They incorporate several limitations, including a maximum capacity factor, i.e. the maximum share of potential output that is available in each hour. Because the EPS is also a single-region model, we also include the ability to discount the available output to account for the regionality of the grid. If we didn't include this, the model would operate as a copper sheet with a power plant in one region being able to supply power in a wholly different region. These parameters are set through RAF Regional Availability Factor for Generation and are generally handled through calibration. Non-dispatchable renewables are not typically affected by this calibration. Capacity factors used for reliability calculations (i.e that reflect an equivalent to effective load carrying capacity) are calculated here as well. 

![Bid capacity factors](/img/electricity-sector-main-BidCFs.png)


### Other Weighted Average Fleet Properties

We compute values for new plants, including fixed O&M, variable O&M, and heat rates. We use this to also compute the fuel cost for newly built power plants.

![Other new plant properties](/img/electricity-sector-main-OM_fuel_heatrate.png)

The model next moves to computing properties for the existing fleet on a weighted average basis to collapse plant vintage down into a single element for model runtime.

First we compute the weighted average heat rate for the fleet and generation costs per unit output.

![Weighted average heat rate](/img/electricity-sector-main-weighted_avg_heatrate.png)

Next we compute the remaining properties for the existing fleet.

![Other weighted average fleet properties](/img/electricity-sector-main-weighted_avg_properties.png)

The model also calculates subsidies for electricity generation on a weighted average basis. We account for the duration of subsidies here as well, since some regions have subsidies that are limited in duration. We then have a weighted average across all the vintages for a single value by power plant type.

![Subsidies per unit output](/img/electricity-sector-main-subsidies_per_output.png)

### Available and Expected Capacity by Hour

Lastly, we compute the expected and available capacity by hour. Available capacity reflects the maximum available while expected reflects expected output, for example from hydro facilities where expected output is often far below maximum potential output.

![Available and expected capacity by hour](/img/electricity-sector-main-available_expected_capacity.png)

## Electricity Dispatch

At this point, the model has now estimated load, costs, retirements, capacity additions and retrofits and fleetwide properties, such as dispatch costs. The next step is to compute what is dispatched.

There are multiple dispatch mechanisms in the EPS, each with a specific purpose. The dispatch process begins with guaranteed dispatch, which is not price-based but rather is based on input data and policy drivers. This can be used to reflect, for example, equal shares dispatch. It can also be used for plant types that are typically price-insensitive, such as nuclear and on-site cogeneration facilties, such as biomass combined heat and power plants. 

Following guarnateed dispatch is dispatch of RPS qualifying resources. This happens upstream of economic dispatch because there are instances where high-priced clean energy sources are needed to comply with the CES that may not dispatch if left solely to market dynamics.

Next the model has a dispatch mechanism for negative- or zero-cost resources, i.e. those resources that have zero or lower disptach costs. This step is need due to mathematical limitations in the least cost dispatch step. 

Finally, the model estimates least cost dispatch based on the maringal dispatch cost of resources. 

The model does this using annual fuel price data to estimate actual dispatch and also using five year average dispatch data to estimate a long run average dispatch amount for use in planning new resources.

The model combines all the dispatch data at the end of the dispatch process to compute a market price in each hour on an annual and five year average basis.

### Guaranteed Dispatch

The model begins by dispatching resources that are guaranteed, as specified in input data. Based on this data, the model dispatches a fixed amount of the expected capacity of a resource in every hour. Expected capacity factors are based on input data and calculations described above for expected capacity factors. The input data can be configured to have two priority tiers so that in instances where the total amount of demand would be exceeded by guaranteed dispatch, it will first curtail resources in the lower tier and then the higher tier. In instances where guaranteed dispatch and the RPS mechanism conflict, the RPS mechanism will take precedence to ensure compliance.

![Guaranteed dispatch](/img/electricity-sector-main-GuaranteedDispatch.png)

### Dispatch of RPS Qualifying Resources

Next the model will dispatch RPS qualifying resources, starting with zero and negative cost resources and then moving to positive cost resources. This step helps ensure that these resources are appropriately used even if their costs might exceed other resources. It also ensures alignment with the projected clean share as part of the CES/RPS optimization. The model uses expected capacity factors for dispatch here. Because the expected and available capacity factors for variable renewables are the same, and most clean resources today are variable, this is generally not an important distinction, but it matters for certain resources like hydro, which can be used flexibly but otherwise generally run at a near constant capacity factor.

![RPS dispatch](/img/electricity-sector-main-RPSDispatch.png)

### Dispatch of Remaining Zero and Negative Cost Resources

The model then moves to dispatching other zero and negative cost resources, since the least cost dispatch mechanism is not able to accomodate resources with negative or zero marginal costs. They are dispatched at expected capacity factors. In instances where dispatching these resources would exceed demand, they are proportionally reduced so that supply and demand are in balance.

![Negative and zero cost resource dispatch](/img/electricity-sector-main-NegAndZeroDispatch.png)

### Least Cost Dispatch

Finally, the model calculates remaining dispatch through the least cost dispatch mechanism. This structure iteratively converges on an electricity market price that dispatches the right amount of electricity to meet remaining demand. 

To do this, we start by representing each power plant type as a Weibull distribution. In reviewing real world data, we observed that dispatch costs most commonly represent different forms of Weibull distributions. We calculate the relevant parameters for each power plant type in the input data and use this, along with the dispatch cost per unit output (itself one of the parameters for a Weibull distribution) to compute a distribution for each resource. The model uses this information to estimate the share of each resource type that is dispatched at a given price, and multiplies this by the remaining available capacity to estimate the output in any given hour for a given price. The mechaism runs through 20 optimization passes to converge on a market price where supply meets demand. This section also accounts for resources dispached elsewhere so that the marginal dispatch cost reflects the marginal amount of supply available by resource type.

We limit the least cost dispatch mechanism only to resources identified in the input data as participating in least cost dispatch to significantly reduce the computational requirements, which are otherwise very high. Care is required to ensure that resources not flagged as participating in least cost dispatch are correctly dispatched elsewhere.

We also separately account for hydro dispatch as part of this mechanism by adding a “hydro opportunity cost” and allowing it to economically dispatch. This is required because while hydro plants have no fuel costs, they do have real opportunity costs they have to balance in determining whether or not to increase their dispatch and they are also a core part of flexible supply in certain geographies. 

![Least cost dispatch](/img/electricity-sector-main-LeastCostDispatch.png)

As mentioned earlier, we do least cost dispatches twice: once using annual dispatch costs and once using five year average dispatch costs. The latter approach and accompanying market prices is used elsewhere in the power sector for determining future market revenues for new power plants. This avoids having a single year with high market prices used to represent anticipate future revenues.

### Summing Total Dispatch and Estimating Market Prices

Total electricity dispatched is summed across each of the elements of the dispatch pass. Dispatch estimates are used to compute market prices for every hour on an annual and five-year basis. In hours when there is electricity dispatched through least cost dispatch, the model has a calculated price from the least cost dispatch mechanism to use and will use the output of the least dispatch mechanism. However, there can be other hours in which there is no least cost dispatch, especially as the grid approaches 100% clean and most or all dispatch happens through the other dispatch mechanisms. In these hours, the model calculates a weighted average marginal dispatch cost of other resources to determine an “average” market price. Separately, particularly in small geographies, there can be hours in which all of the in-region supply is provided by imports. In these hours, we use the imported electricity price specified in input data.

![Total generation and market prices](/img/electricity-sector-main-TotalDispatchAndMarketPrices.png)

## Economic Storage Additions

The electricity sector estimates economic storage additions based on anticipated market revenues, incentives, and battery costs.

To estimate storage additions the model starts by calculating anticipated market revenues. Unlike for power plants, the model does not directly compare anticipated revenues and against costs to estimate additions, but rather looks only at the anticipated net revenue. This approach is necessary because the EPS omits several sources of revenue for storage, notably including ancillary services like frequency response, and comparing against costs would yield far lower profitability than in reality. Additionally, while the EPS now has hourly granularity for six electricity timeslices, to fully capture the revenue potential for storage would required sub-hourly detail, in addition to grid services. If we directly compared costs and revenues, we would miss a large source of revenue and significantly underestimate anticipated storage additions.

To estimate market revenues, the model compares the highest and lowest priced hours and computes an estimated daily profit by arbitraging these hours based on the duration of the storage (four years hours by default in the US model). This allows the model to determine an estimated annual average charging and discharging profit per MWh of battery capacity. Incentive policies add to the profitability and drive additional storage capacity. Revenues from the reliability mechanism are integrated as well in this step. Declines in battery costs are modeled as a form of revenue as well to reflect increasing profitability of batteries. Together these elements comprise a "net revenue" estimate.

The total net revenue is multiplied by a calibrated input parameter (the MWh of storage added per $/MWh profit) to estimate battery additions.  The storage additions are added to the model’s capacity on a one year delay. Storage additions for the US and state models approximate those observed from other dedicated power system models, e.g. the National Renewable Energy Lab's ReEDS model.

![Battery storage additions](/img/electricity-sector-main-GridStorageAdditions.png)

## Total Emissions

Next, we determine the pollutant emissions based on the generation by type, as shown in the following screenshot:

![electricity sector pollutant emissions](/img/electricity-sector-main-TotalEmissions.png)

We use emissions indices (per unit energy in the fuel) and heat rates (energy units of fuel per MWh of electricity) to obtain pollutant emissions indices per MWh of electricity.  We also apply any carbon capture and sequestration that is performed by the electricity sector, reducing CO<sub>2</sub> emissions but also increasing fuel consumption (to power the CCS process).  We apply the emissions indices per MWh to the total generation and add in the CCS effects to obtain an emissions total for the electricity sector by pollutant. The EPS also include the ability to include or exclude emissions from either imported electricity or from exported electricity. These are control levers that are separately through input data.

## Additional Electricity Outputs

This section includes a few calculated variables that may be of interest in evaluating the electricity sector's performance or characteristics.  Some of these values can be useful for debugging or evaluating the realism of the model's response to a given set of input data or policy settings.

![Additional outputs](/img/electricity-sector-main-AdditionalOutputs.png)

We calculate the amount of curtailed electricity output (based on the reduction in expected capacity factors) from each variable electricity source. These calculations are based on the expected output at expected capacity factors for these resources compared to their actual output. Curtailment can happen when supply is greater than demand or when other resources are guarnateed ahead of variable renewable resources. 

We also track compliance with the RPS, which is used the RPS mechanism and accompany graphs. Conversions to other other outputs, such as the percentage generation from clean sources and renewable electricity generation in primary energy units is also handled here.

The EPS also tracks water withdrawn and used by power plants based on input data on power plants types and generation by power plant types. 

Finally, the model aggregates pollutant emissions into estimate of CO<sub>2</sub>e and computes a few additional metrics used throughout the electricity sector.

---
*This page was last updated in version 4.0.3.*


