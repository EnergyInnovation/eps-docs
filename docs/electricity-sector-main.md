---
title: Electricity Sector (main)
---
## General Notes

The Electricity Sector of the EPS is the most structurally complex sector in the model. In this sector, the model aggregates annual electricity demand from across the other sectors in the model, converts it to hourly electricity demand, adjusts demand based on losses, imports/exports, and load modifying technologies, and then calculates retirements, new capacity, and dispatch. Unlike other sectors of the model, the Electricity Sector has hourly temporal resolution, with the model estimating demand and generation across 24 hours in six different seasonal timeslices. It also calculates market dynamics unlike in other sectors, including the use of multiple optimization loops (iterative processes used to help a system approach a target). As such it is far more structurally detailed than other sectors.

While other sectors in the model rely on input data to specify energy or service demand, in the Electricity Sector the EPS constructs its own BAU scenario inclusive of existing policies. This different approach increases the complexity of the sector as it must be well calibrated in BAU even without the addition of policies.

The structure in the EPS attempts to mimic the behavior of other types of models that are dedicated electricity sector models, the most common of which is the "capacity expansion model." These models use linear programming to identify the least cost mix of resources that satisfy grid and policy constraints based on an objective function to minimize total system costs. 

Vensim does not have the capability to use linear programming and its ability to incorporate market clearing dynamics is extremely limited. As such, we built a structure that produces similar results to capacity expansion models with a similar underlying market theory that is aligned with real world dynamics. In particular, the model will build new capacity if that capacity is profitable over a time period (meaning its anticipated revenues exceed its costs) and also if additional capacity is needed for reliability purposes, subject to a capacity price. Each component of the Electricity Sector is discussed in this section.

In general terms, the "Electricity Supply - Main" sheet determines hourly electricity demand, accounting for trade, losses, and load modifying resources. Then, it determines power plant retirements based on policy and profitability. It then runs through a series of capacity expansion steps that build new capacity, including storage capacity, based on policy, cost, or reliability, accounting for hourly demand and supply constraints. Next, it moves through a multi-stage dispatch mechanism, producing hourly dispatch and associated market prices. Lastly, it aggregates generation and calculates associated energy use and emissions. Each of these steps is explained in more detail below.

## Power Plant Technologies

The model includes 24 types of power plants (note: not all of these are used in every geography the EPS covers):

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

In order to represent differences in characteristics between plants of the same type (say, between an older and a newer coal plant), the model uses vintaging (that is, we track when each power plant came online). Data for historical capacity is ordered by vintage and the model tracks vintages as power plants are added and retired. This allows the model to account for changes in technologies, such as improved heat rates or operating costs, over time. Generally speaking the model will order retirements from oldest to newest (more detail on retirements below). To improve runtime, the model collapses the vintages into weighted average characteristics for the fleet as far upstream as possible.

## Temporal Resolution

The model includes six seasonal electricity timeslices, each with 24 hours:

* average winter day
* average spring day
* average summer day
* average fall day
* peak summer day
* peak winter day

Input data determine the number of days in each electricity timeslice. Peak days are used only in reliability calculations in the model and input data is meant to represent the worst system conditions in each hour on those days, i.e. lowest capacity factor for resources and highest demand hours. The peak hours are generally not used for computing dispatch, prices, or revenues, other than for reliability calculations.

## Hourly Electricity Demand

The first stage of the power sector calculates the hourly electricity demand, which is used throughout the power sector to calculate dispatch, capacity additions, and market prices. In this stage, the model calculates the total annual demand across the various sectors and converts it to hourly demand. Then, the model adjusts hourly demand to account for trade, losses, and load modifying technologies, before finally yielding a total hourly electricity demand value for each electricity timeslice.

### Net Imports

The EPS reads electricity exports (total) and imports (by fuel type) from input data and calculates any changes to the BAU data based on exogenous GDP adjustments determined by input data and policy levers. These adjustments vary imports and exports based on changes in GDP outside of the underlying projection data. This structure is configured to allow for estimation of COVID-induced changes in demand from data sets pre-dating 2020. The final output is total net imports (positive for imports, negative for exports).

![net imports of electricity](/img/electricity-sector-main-NetImports.png)

### Calculating Hourly Electricity Demand from Annual Electricity Demand including Own Use and Transmission and Distribution Losses

The model then moves to compute total hourly final electricity demand. In other sectors of the model, electricity demand is tracked annually; for example, total annual cooling demand in buildings or demand for electric vehicle charging. Input data relating annual demand to hourly demand (load factors) are used to convert the annual values to hourly values aligned with the electricity timeslices used by the model. 

Due to differences in data alignment, i.e. some end uses don’t directly overlap with input data, an adjustment can be necessary to ensure the computed peak and minimum demand values align with historical data. In this step, the model multiplies the computed hourly demand by an Hourly Variance Multiplier that is estimated such that the peak annual demand in the EPS aligns with historically observed values.

Electricity demand from data centers is tracked as its own demand category. Annual data center load comes from input data, which provides low, medium, and high growth trajectories, and a control setting (the Data Center Load Growth Assumption) selects which trajectory is used. Because no policy lever affects it, data center load is the same in the BAU and policy cases. It is converted to hourly demand using its own load factors from input data, with their variation around the daily mean scaled by the commercial buildings Hourly Variance Multiplier.

In this step, the model adjusts load to account for transmission and distribution losses based on input data, adding demand in each hour to cover the estimated losses. Policies can be used to improve the loss percentages as well.

Finally, the model can incorporate own use -- when some of a plant's power is used on site and never makes it to the grid -- as part of the total demand. In most regions, own use is accounted for through lower heat rates in the power sector, i.e. less power generation per unit of fuel input. But in some regions, own use is included in calculations of electricity demand, and the model can support either approach through input data modifications.

The final result is total electricity demand by hour before accounting for distributed generation.

![electricity demand before distributed generation](/img/electricity-sector-main-TotalDemandBeforeDG.png)

### Hourly Demand after Distributed Generation

Next, the model computes the contribution of distributed resources using hourly capacity factors from input data and total installed capacity of distributed resources. This is calculated separately for each building type, and output from distributed solar is capped at the electricity demand of the building type where it is installed. Electricity supplied by distributed resources is subtracted from the total hourly demand.

![electricity demand after distributed generation](/img/electricity-sector-main-TotalDemandAfterDG.png)

### Hourly Demand after Optimizing Dispatch of Net Imports

After computing net hourly demand, the model then allocates annual net imports to hours in each timeslice based on net load. For each hour the model estimates the net supply position as the potential output of last year's fleet (capacity times hourly bid capacity factors) minus demand in that hour. Imports (if net imports is positive) are weighted toward the hours with the least net supply relative to the timeslice's most-surplus hour, and exports (if net imports is negative) toward the hours with the greatest net surplus; in both cases an allocation breadth factor adds a uniform component so that some of the volume is spread evenly across all hours rather than concentrated in the extreme hours. Both imports and exports are subject to minimum and maximum constraints from input data, and imports in an hour are additionally capped at that hour's demand before net imports. The model loops through 20 optimization passes to allocate imports or exports without exceeding these hourly maximums and minimums, and hours that reach their limit drop out of later passes so the remaining volume is assigned to the next set of hours that satisfy the constraints.

As an example, consider a day with positive net imports in which supply comfortably exceeds demand in the overnight hours but is tight in the evening. The model would assign most of the day's imports to the tight evening hours, with the breadth factor spreading a smaller share evenly across all hours. If net imports were instead negative, the exports would be concentrated in the surplus overnight hours. Although this is a simplified approach to estimating exports and imports, it helps maximize their utility by directing trade to the hours where it is most valuable.

![electricity demand after net imports](/img/electricity-sector-main-TotalDemandAfterNetImports.png)

### Potential Load Modification from Storage, Demand Response, Pumped Hydro, and Other Load Modifying Resources

Next, the model estimates demand modifications from load modifying resources, including demand response, EV batteries,  grid storage, and pumped hydro. Note that for hybrid power plants (i.e. power plants with battery storage), the impact of the onsite storage is handled through modifications to the hourly demand given limitations of programming in Vensim. This approach is discussed in more detail below where applicable.

#### Grid and Hybrid Batteries

The model estimates the total daily shifting potential of battery storage, pooling standalone grid batteries and the batteries at hybrid power plants. The model tracks the total megawatt-hours of battery capacity based on input data and calculated additions to compute a total potential. Standalone grid battery capacity (last year's capacity plus this year's policy-mandated additions) is discounted by a usage factor from input data, while hybrid battery capacity is counted in full. Adjustments for round trip efficiency losses are handled later in the code. Economic storage and hybrid capacity additions are on a one-year time delay, so the model uses the prior year's capacity here.

![potential daily max shifting from grid and hybrid batteries](/img/electricity-sector-main-GridBatteriesDailyMax.png)

#### Pumped Hydro

Next the model estimates the potential day contribution of pumped hydro. Due to structural limitations in the model, pumped hydro is treated like demand response, i.e. it can be discharged daily during periods of maximum net load, and not handled as a power plant type. The model estimates daily contributions from pumped hydro by multiplying the capacity by hourly capacity factors provided in input data and assuming these rates are fixed.

![daily load reductions from pumped hydro](/img/electricity-sector-main-PumpedHydro.png)

#### EV Batteries

EV batteries can contribute to load shifting in the EPS based on input data and policy settings. The model tracks two related but distinct measures of available EV-battery contribution to grid balancing:

* The **daily energy budget** (in MW·hr) that can be charged or discharged for diurnal balancing — the measure used in the load-shifting calculations described in this section. It is computed from the existing fleet's total battery energy capacity multiplied by the BAU share of EV battery capacity available for grid balancing (in many countries this is set to zero today as there is no vehicle-to-grid availability yet).
* The **instantaneous power capacity** (in MW) that EVs can supply to the grid as a demand-shifting resource. It is computed by multiplying the number of battery electric vehicles in each vehicle and cargo type by the average vehicle charger capacity (in kW per vehicle), summed across the fleet, and then multiplied by the same grid-balancing share. This MW figure is combined with demand response, pumped hydro, and non-hybrid battery storage in `Non Hybrid Demand Shifting Capacity in MW`.

Users can modify the grid-balancing share through a policy lever which allows for increasing the share of total EV battery capacity that can be used for grid balancing. The model computes the final maximum amount of daily shifting that can be utilized from the EV batteries (round trip losses are accounted for later).

![potential daily max shifting from EV batteries](/img/electricity-sector-main-EVBatteries.png)

#### Demand Response

Total demand response (DR) capacity (in MW) is aggregated based on BAU input data and policy settings and multiplied by an average hours per day that can be called for DR to estimate the total daily contribution of DR. Note that demand response capacity is not endogenously added in the EPS. Instead, additions are specified through input data and user policy settings. The model computes a total amount of hourly load shedding by electricity timeslice that is possible from DR.

![potential daily max load shedding from demand response](/img/electricity-sector-main-DemandResponse.png)

#### Total Diurnal Balancing Potential

The model totals the amount of load shedding and shifting available accounting for losses. Because technologies are aggregated into capacity values, the model computes a weighted average round-trip efficiency across all the different resources for use in the load shifting and shedding calculations. We also discount the availability of some resources to reflect the "copper sheet" nature of the EPS, with a power plant in one region being able to supply power in a wholly different region.  Such is the limitation of a single-region model.  The limiting of particular resources is incorporated via the Regional Availability Factor input file. The final outputs of this step are weighted average round trip efficiencies and total availability capacity for daily load balancing.

![total diurnal balancing potential including hybrid battery storage](/img/electricity-sector-main-TotalDiurnalBalancing.png)

Though there are few technologies readily available, the model is structured to allow for seasonal load shifting and balancing. Input data can be configured to allow for seasonal storage capacity and to specify the annual charge and discharge cycles and round-trip efficiencies. These technologies are used later on to seasonally shift resources. 

![total seasonal balancing potential](/img/electricity-sector-main-TotalSeasonalBalancing.png)

### Modifying Load with Demand Altering Technologies

The model next builds on the calculations of load modifying resources to compute changes in load. To estimate these changes in demand, the model starts by estimating the surplus capacity in each hour. This calculation subtracts net load from available capacity in each hour, yielding surplus capacity available, which is assumed to be a good indicator of when the grid is most and least constrained. The model subtracts from this value the average for each timeslice, meaning the most constrained hours have negative values (less surplus capacity than average) and the least constrained hours have the highest positive values (more surplus capacity than average). The model then allocates net seasonal peak load reduction from the load modifying resources proportionally based on the size of the hours with less surplus capacity than average, i.e. the hours with the least surplus capacity have the highest net peak load reduction from load modifying resources. For storage resources, charging hours are proportionally allocated to those hours with the most surplus capacity, accounting for round trip efficiency losses.

![shifting seasonal net peak load and demand](/img/electricity-sector-main-NetPeakLoadShift1of2.png)

![allocating seasonal net peak load reduction by hour](/img/electricity-sector-main-SeasonalNetPeakLoadAllocation.png)

After calculating the seasonal load shifting, the model then calculates diurnal load shifting and shedding based on the resource availability calculated earlier. The model then aggregates the total load shedding and shifting across seasonal and diurnal resources and computes a total amount of hourly electricity demand after demand altering technologies.

![shifting diurnal net peak load and demand](/img/electricity-sector-main-NetPeakLoadShift2of2.png)

![allocating diurnal net peak load reduction and totaling demand after demand altering technologies](/img/electricity-sector-main-DiurnalNetPeakLoadAllocation.png)

At the end of this calculation flow, the model has determined the final hourly electricity demand that must be met by generation resources and accounts for all load reduction and shifting that occurs from distributed resources, imports and exports, load modifying resources, and hybrid power plant batteries.

### Summing Charging and Discharging from Batteries

The model sums the total amount of battery capacity and the total charging and discharging of batteries, inclusive of hybrid batteries, for use in other places throughout the model. Batteries at existing hybrid power plants (those paired with a renewable resource at the same plant) are pooled with standalone grid batteries, so both charge and discharge through the load-shifting allocation mechanism described in the diurnal-balancing sections above. The price-based charging and discharging used to value prospective hybrid power plants is described under projected revenues for new resources below.

![total hourly and annual charging and discharging of battery storage](/img/electricity-sector-main-HourlyBatteryChargeDischarge.png)

## Revenues, Costs, Retirements, and Max Build Rates

This stage of the model calculates revenues for new and existing resources, uses this information to estimate retirements, and calculates maximum build rates based on technical potential for different resources.

### Annual Energy Market Revenues for Existing Resources

To estimate energy market revenues for existing resources, the model calculates net energy market revenue per unit capacity for each power plant type (e.g. natural gas combined cycle power plants). In each hour, revenue is the plant type's total generation multiplied by the marginal dispatch cost in that hour. The model subtracts the expected dispatch costs (before subsidies) of the generation that ran. Because each plant type's costs are represented as a distribution in dispatch (see Least Cost Dispatch below), when only part of a fleet runs it is the lower-cost portion of that distribution that dispatches, and the model uses the average cost of that portion rather than the fleet average. The hourly net revenues are summed over the year and divided by installed capacity, with capacity that came online during the year counted at a time-adjustment fraction, yielding annual net energy market revenue per unit capacity.

![expected dispatch cost of the dispatched portion of each plant type's fleet](/img/electricity-sector-main-ExpectedDispatchCostDispatched.png)

![Annual energy market revenues for existing resources](/img/electricity-sector-main-EnergyRevenuesExisting.png)

### Projected Annual Revenues for New Resources

For new resources, the model estimates potential energy market revenues for plants with and without existing capacity. For plants with existing capacity, the model estimates potential dispatch and energy market revenues use a five-year average of energy prices for various resources, in order to average out annual fluctuations in resource costs. 

![five-year average expected dispatch cost of the dispatched portion of each plant type's fleet](/img/electricity-sector-main-FiveYearExpectedDispatchCostDispatched.png)

![Annual energy market revenues for new resources with existing capacity](/img/electricity-sector-main-EnergyRevenuesNew.png)

For plants without existing capacity, the model calculates a hypothetical dispatch amount in each hour as if that resource had been available using the calculated hourly energy market prices for existing resources (discussed later). This allows us to estimate potential dispatch and revenue from plant types with no existing capacity in the model but which may become profitable and be built in later years, such as hydrogen-based plants.

![Annual hypothetical dispatch for resources with no existing capacity](/img/electricity-sector-main-HypotheticalDispatch.png)

The model combines the hypothetical dispatch for new resources with no existing capacity and the five-year average marginal dispatch costs to produce estimated annual energy market revenues for planning new capacity. This is combined with the five-year estimated energy market revenues for resources with existing capacity to produce a value for all new resources. Revenue per unit capacity is found by dividing total net revenue (energy market revenue less dispatch costs, including CO2 transport and storage costs for plants with CCS) by installed capacity, with capacity that came online during the year counted at a time-adjustment fraction (one half in the U.S. model) to reflect partial-year operation. Because the incumbent fleet's average output can differ from what a new plant would achieve, the entry test then scales this revenue by the ratio of the new plant's expected capacity factor to the fleet's average available capacity factor (see the cost-effectiveness section below). 

The fleet's revenue also reflects the fleet's own dispatch costs, which can differ from those of a new plant of the same type (for example, a new combined cycle plant has a better heat rate than the average existing one). The entry test therefore credits each new plant with its dispatch-cost advantage over the fleet: the difference between last year's five-year-average fleet dispatch cost and the new plant's own dispatch cost (fuel at the new plant's heat rate, variable O&M for the current vintage, and CO2 transport and storage costs for plants with CCS), multiplied by the new plant's expected generating hours, is added to its energy market revenue per unit capacity. The credit is negative when a new plant's dispatch costs exceed the fleet's. It applies to new standalone plants in the cost-effectiveness, portfolio-standard, and reliability additions, but not to hybrid power plants or CCUS retrofits. 

![new entrant dispatch cost](/img/electricity-sector-main-EntrantDispatchCredit.png)

Given the structure of the EPS and that it calculates load dynamically, it does not have foresight. To make future planning decisions in the electricity sector, the model therefore relies on a rolling average of energy market revenue. The model calculates a rolling four-year average of anticipated energy market revenue (using five-year averages for fuel prices as outlined above) for guiding investment decisions. In the first several years of the model run, prior to enough years being run to produce a four year average, the model will use the highest number of years possible to create the average, i.e. one in year one, two in year two, three in year three, and four in all subsequent years.

![Annual energy market revenues for all new resources](/img/electricity-sector-main-EnergyRevenuesNewAll.png)

The model has to calculate projected energy market revenues for hybrid power plants separately because they are able to optimize discharging and charging of the battery to maximize energy market revenues. Using input data on battery capacity per unit power plant capacity, the model builds an hourly output profile for a prospective hybrid plant. It starts from the expected hourly output of a new plant of that type, then uses a Vensim allocation function to move a daily amount of output out of the lowest-priced hours (charging) and into the highest-priced hours (discharging), with last year's five-year average marginal dispatch cost by hour serving as the price signal. Charging in each hour is limited by the plant's own output and the battery's size, and the daily amount is limited by the battery's storage duration and by the plant's expected daily output, including output the battery can save from curtailment. The model values this hourly profile at the five-year average prices and subtracts the plant type's expected dispatch costs, yielding net energy market revenue per unit capacity. This value will be higher than for plants without storage, particularly when there is a significant spread in marginal dispatch costs. As for other new resources, the model uses a rolling four-year average of this value.

![hybrid power plant battery charging and discharging allocation](/img/electricity-sector-main-HybridBatteryChargeDischarge.png)

![Annual energy market revenues for new hybrid resources](/img/electricity-sector-main-EnergyRevenuesHybrids.png)

### Annual Recurring Costs

Annual recurring costs are calculated as an input into the retirement decision-making framework. These costs are the sum of the annual capital costs (sustaining capital expenditures) needed to maintain plants' operability and ongoing fixed O&M costs; dispatch costs (fuel and variable O&M) are instead netted out of energy market revenue when plant economics are evaluated. Sustaining capital expenditures per unit capacity are computed each year from the age of each vintage: a base value for each plant type from input data, plus an age slope, plus additional adders once a vintage passes 30 and 40 years of age. A plant's annual capital costs therefore rise as it ages, and the fleetwide weighted average reflects the age mix of the surviving fleet. The model computes these costs on a $/MW basis for use downstream in retirement calculations.

![Annual recurring costs](/img/electricity-sector-main-AnnualRecurringCosts.png)

![sustaining capital expenditures by vintage age](/img/electricity-sector-main-SustainingCapexByAge.png)

### Clean Electricity Standard and Zero Emission Credit Revenue

Input data can specify any credits specifically for nuclear power plant owners. The model calculates credit prices from the clean electricity portfolio standard (discussed later) which are used here. The portfolio standard is represented as a unified framework that can simultaneously enforce a Renewable Portfolio Standard (RPS) and a Clean Energy Standard (CES) -- the two are configured independently with their own qualifying-resource definitions and percentage targets, and a separate credit price is computed for each. Total revenue from these credits, summed across the RPS and CES paths, is calculated for use in the retirement calculations.

![Revenues from CES and ZEC programs](/img/electricity-sector-main-CESandZECRevenues.png)

### CCUS Retrofitting Costs

CCUS retrofitting costs are calculated per MW of retrofitted capacity. The model converts the retrofit capital cost from input data into an annual payment using a capital recovery factor (an estimate of how much a borrower needs to pay each year to fully recover the cost of an investment and accrued interest), and adds the difference in annualized fixed costs between new CCUS-equipped and unequipped plants of the same type. This yields an annualized retrofitting cost per MW. Differences in fuel and other variable costs, and in how much the plant runs, are not part of this cost. Instead, the retrofit decision compares it with the change in projected net energy market revenue (including production and CCUS subsidies) and portfolio-standard credit revenue per MW between the CCUS-equipped and unequipped plant types.

![CCUS Retrofit Costs](/img/electricity-sector-main-CCUSRetrofitCost.png)

### Annualized Cost per Unit Output for New Capacity (i.e. LCOE)

Annualized costs per unit new electricity output, the EPS version of an Levelized Cost of Energy (LCOE), is calculated next. These costs start with capital costs based on input data and endogenous learning of capital costs for certain technologies. The model starts by splitting soft costs and hard costs and applying an endogenous learning rate to the capital cost portion where that structure is used (discussed in the endogenous learning section of model documentation). Policies can be used to further lower soft costs. Research and development policies can also be used to further lower the total construction costs (sum of hard and soft costs). 

![Construction costs per unit capacity before subsidies](/img/electricity-sector-main-LCOE1.png)

The model then applies any subsidies for capacity construction (e.g. investment tax credit), which can be modified by user set policies. The model also adds in spur line costs at this point, which vary by technology and region. After computing the construction cost after subsidies and spur line costs, the model estimates an annual repayment of these costs per MW using a capital recovery factor calculated upstream. Each plant type can have its own capital recovery factor which is based on the weighted average cost of capital and assumed financing lifetimes for power plant types. The application of the capital recovery factor converts the construction costs into an annualized payment.

![Annual financing repayment per unit capacity](/img/electricity-sector-main-LCOE2.png)

For hybrid power plants, the model calculates the incremental annualized financing payment from the additional storage at the power plant.

![Annual financing repayment for hybrid plant battery storage per unit capacity](/img/electricity-sector-main-LCOE3.png)

Next, the model adds annual fixed operating and maintenance (O&M) costs to the annualized financing repayment, yielding annualized fixed costs per MW. Capacity expansion decisions compare revenues and costs on this $/MW per year basis. To also express these costs per unit output, the model divides them by the expected annual operating hours of a new plant, yielding a $/Megawatt-hour value for all plant types. These expected operating hours are based on start-year capacity factors from input data (after the regional availability factor), adjusted for technological improvements and reductions in plant downtime, rather than on capacity factors calculated during the model run.

![Annual fixed costs per unit new electricity output](/img/electricity-sector-main-LCOE4.png)

The model then estimates total variable costs and subsidies. Electricity production CCUS subsidy amounts are calculated here, including an adjustment based on the lifetime of the credit (i.e. for credits that are only available for a portion of the financial lifetime of the power plant, their value has to be adjusted to account for the limited duration of their availability). The model adjusts the value of the incentive to account for instances where the duration of the subsidy is shorter than the financial lifetime of the plant (i.e., what is the value of a 10-year subsidy on a plant lasting 20 years). Users can also modify the electricity production and CCUS incentives, which change the subsidy per unit electricity output. Carbon pricing credits are also calculated at this stage for plants equipped with CCUS. The model sums total variable costs, including fuel costs (which include carbon pricing impacts), variable O&M costs, CO2 transport and storage costs per Megawatt-hour for plants with CCUS, electricity production subsidies, carbon price credits, and CCUS subsidies. Variable costs are added to the levelized fixed costs to produce a total cost per unit new elec output. This $/MWh cost sets the starting point for the RPS and CES credit price searches and is used in the logit choice of resources built for green hydrogen production; the capacity expansion tests themselves use the $/MW values described above. The same CO2 transport and storage costs also enter the dispatch costs used in dispatch and in market price formation, and the dispatch bid for a prospective new plant is built from the new entrant's own fuel and variable O&M costs plus transport and storage costs, less its production and CCUS subsidies valued at present value.

![Cost per unit new electricity output](/img/electricity-sector-main-LCOE5.png)

### Economic, Policy-Driven, and Planned Retirements

The model next moves on to calculating total annual retirements. Total revenues are calculated, including capacity market revenue (discussed later), energy market revenue net of dispatch costs, production subsidies, revenue from clean electricity credits, and revenue from zero emissions credits, yielding a total revenue per unit capacity. 

![Total revenue per unit capacity for existing plants](/img/electricity-sector-main-Retirements1.png)

For each power plant type, annual revenues are compared against going forward costs, calculated earlier, to estimate a net loss per unit electricity capacity. Power plants must be uneconomic (have net losses) for at least three consecutive years before any cost-driven retirement can occur. Once that condition is met, the amount retired is set by a breakeven test rather than by the size of the loss. The model first computes the required revenue per unit capacity: the annual recurring costs multiplied by the share of forward costs that must be covered to prevent retirement, which is a capacity-weighted blend of separate input values for cost-of-service and merchant plants (a plant type whose required share is zero is exempt from economic retirement). It then computes a viability ratio comparing the plant type's three-year average revenue (scaled up to reflect the additional hours surviving plants could run if part of the fleet retired) plus its predicted capacity payment against that required revenue. From this ratio the model derives a breakeven capacity, the fleet size that the current revenue pool could keep whole; when the ratio is below one, breakeven capacity falls linearly toward zero as the ratio approaches a deep-unviability threshold set in input data. The gap between existing capacity and breakeven capacity is closed gradually over an adjustment time (five years in the U.S. model). In any single year, retirements are capped at a maximum share of the plant type's capacity (or a typical number of units retired in a peak year, whichever is larger), both set in input data, and are rounded to the minimum plant size.

![viability ratio and breakeven capacity for cost-driven retirement](/img/electricity-sector-main-RetirementViability.png)

Two additional structures refine this. First, a fleet whose viability ratio has stayed below the deep-unviability threshold for three consecutive years is treated as persistently unviable: the model locks in the capacity that is eligible to retire at that point and retires it on a straight-line schedule over a set number of years (ten in the U.S. model), if that schedule exceeds the gradual gap-closing amount. Second, desired retirements that cannot be executed in a given year (because of minimum plant size rounding or limits on retirable capacity) accumulate in a pending backlog that is drawn down in later years; if the plant type stops meeting the three-consecutive-year loss condition, the backlog is cancelled rather than executed.

To this, the model adds capacity retirements specified in input data and capacity retirements from any policy lever settings to determine total retiring generation capacity. Scheduled retirements are netted against a running credit of earlier economic retirements for the same plant type, so capacity that already retired for economic reasons is not retired a second time when its scheduled retirement date arrives. Economic retirements can only draw on capacity that remains after the year's planned and policy-driven retirements.

![unviable-fleet retirement schedule, planned retirements and schedule netting credit](/img/electricity-sector-main-RetirementSchedulesAndNetting.png)

The model also supports a third, optional retirement path based on a fixed economic lifetime per power plant type. When this path is enabled (via a control setting), the model retires capacity in the year that its vintage age equals the configured economic lifetime for its source type, in addition to any economic and policy-driven retirements that would otherwise occur. This complements the economic retirement mechanism described above and is useful for calibration and for representing plants that are scheduled to retire at expected end-of-life regardless of profitability. The control setting is off by default in the U.S. model.

![Calculated total retiring generation capacity](/img/electricity-sector-main-Retirements2.png)

We duplicate this structure below but exclude plants' predicted capacity market revenue. The retirements calculated here are not used directly in the calculation flow; rather, the difference between the retirement gap with and without capacity payments identifies the capacity that is reliant on predicted capacity payments to stay online. This feeds a stock of capacity kept online due to capacity payments, which grows toward the reliant capacity at the pace retirements would occur without those payments, drains as plants actually retire, and can never exceed the capacity that exists. In the cash flows, this kept-online capacity is charged at the capacity price and recovered through cost-of-service electricity rates.

![net loss and breakeven capacity excluding predicted capacity payments](/img/electricity-sector-main-RetirementsExclCapacityPayment.png)

![retirement gap and pending retirements excluding predicted capacity payments](/img/electricity-sector-main-RetirementsExclCapacityPaymentPending.png)

![capacity kept online due to predicted capacity payments](/img/electricity-sector-main-Retirements3.png)

### Maximum Buildable Capacity

The model accounts for technical potential for various power plant types and will not allow capacity to be built in excess of maximum technical potential, particularly for renewable resources. In addition, policy levers can be used to restrict the construction of certain capacity types. If a power plant type has been fully retired from the model, it is not allowed to be built again in later years. Collectively these calculations yield a maximum capacity buildable in a given year. The model includes other annual restrictions for new capacity, which are discussed below in the section on new capacity construction.

![Maximum buildable capacity](/img/electricity-sector-main-MaxBuildableCapacity.png)

The model also limits how quickly each source's capacity can grow from year to year, reflecting real-world supply-chain and deployment constraints. Each source is subject to an annual build limit equal to the smaller of two caps: a *soft cap* and a *hard cap*. The soft cap is the source's minimum buildable amount plus a share of total system capacity that grows with the source's current share of the fleet: a maximum annual buildable addition (as a fraction of total fleet capacity, set in input data) is scaled by a saturating function of the source's fleet share, with a half-saturation share set in input data, so that established technologies can add more capacity per year than nascent ones. Clean dispatchable sources are treated as a pooled group when computing this share. The hard cap is a configurable fraction of total system capacity. The annual build limit is the lesser of these two, but never less than the source's minimum buildable amount, so that small or nascent technologies can still be deployed. The minimum buildable amount is specific to each plant type and is the largest of a seed capacity from input data, the minimum plant size, and a small fraction of total fleet capacity. The seed capacity, set for each plant type in input data, is the largest annual addition of that plant type observed in recent history, or, for plant types that have not yet been built, the size of a typical first project. It ensures that a plant type with little or no existing capacity can still add capacity at a demonstrated real-world pace in a single year if it is cost-effective, so that new technologies are not held back simply because they start from a small base. The minimum buildable amount also sets a floor on the saturation level of the capacity supply curve described below.

![build caps](/img/electricity-sector-main-BuildCaps.png)

![minimum buildable capacity by plant type](/img/electricity-sector-main-MinimumBuildableCapacity.png)

## New Capacity Construction

In this stage, the model calculates new capacity additions across multiple mechanisms. The first of these is a mandated capacity and retrofit mechanism that uses input data and policy levers to add capacity and retrofit plants with CCUS. After this step, the model moves into adding economic capacity, which is co-optimized with the clean electricity standard policy. Lastly, the model moves through a reliability capacity addition mechanism, which ensures there is sufficient capacity installed to meet reliability requirements.

### Policy Mandated Capacity Additions and Retrofits

Mandated capacity additions and CCUS retrofits in the BAU and policy scenarios can be specified in the input data and policy levers. The model starts by reading in these values and adding them to new capacity built and retrofits in future years. The model maintains two independent mandate paths: a per-electricity-source generation mandate (covering the 24 generation technologies listed above) and a grid-battery storage mandate, each with its own BAU input schedule and its own non-BAU policy lever. The grid-battery path uses `BPMGBSA BAU Policy Mandated Grid Battery Storage Additions` as its BAU input. The two paths are independent, so a user can override mandated grid-battery additions without disturbing mandated generation construction, and vice versa.

![Policy mandated capacity additions and retrofits](/img/electricity-sector-main-PolicyMandatedAdditionsRetrofits.png)

![grid battery mandate path](/img/electricity-sector-main-GridBatteryMandates.png)

### Cost Effectiveness Additions and Retrofits

The core logic underpinning each element of the capacity expansion structure operates by evaluating whether power plant types are profitable and estimating additions based on their level of profitability. Policies can affect this profitability through adding revenue to specific power plant types.

This mechanism operates simultaneously for new resources without storage, new resources with storage, and CCUS retrofits of existing resources.

The model begins by cumulating the total anticipated revenue by resource type. This relies on the rolling four-year energy market revenue discussed earlier and any anticipated policy revenue, particularly credits from the portfolio-standard mechanism (RPS, CES, or both), which is co-optimized with economic capacity expansion (discussed later). Energy market revenue per unit capacity for a prospective new plant is scaled by the ratio of the new plant's expected capacity factor hours to the fleet's average available capacity factor hours, so that the entry test reflects the output a new plant would actually achieve rather than the incumbent fleet's average. Revenue and costs are compared on a $/MW per year basis. Subsidies for electricity generation are added, valued at their present value where the subsidy duration is shorter than the plant's financial lifetime.

The model then compares anticipated revenue against the anticipated levelized cost of building new resources, not including variable subsidies (these are considered a revenue stream). Resources that are profitable will have revenues that exceed costs while unprofitable resources will not. This results in a profit value, i.e. revenues minus costs.

The model then translates the expected profit into new capacity using a capacity supply curve. The curve is a Weibull cumulative distribution of profit per unit capacity, with its shape, scale, location, and cutoff parameters and its saturation level set in input data and calibrated against historical data and other models. The curve's saturation, the most capacity a resource can add at a very high profit level, is expressed in megawatts for each resource as the larger of a fixed share of that resource's existing capacity and a procurement headroom multiple of its minimum buildable amount (for clean dispatchable resources, a multiple of the annual build limit instead). The curve therefore defines how much capacity is built for a given profit margin based on the total installed capacity of each resource. This prevents the model from overbuilding novel resources and lets the model deploy incremental capacity at a given profit level as the total installed capacity of that resource grows and the knowledge, labor force, and materials become more widely available.

![capacity supply curve parameters](/img/electricity-sector-main-ProfitExistingCapacity.png)

For example, with the U.S. model's default curve parameters, a profit of roughly $18,000 per MW per year for an established resource type would cause new builds of roughly 13% of existing capacity (before the build limits and the share of cost-effective capacity actually built, described below, are applied). For a resource with an installed base of 50 GW, this would yield about 6 GW of new builds. But over time as more of that resource is built, if it gets to 100 GW, then the same profit level would result in about 13 GW being built. (This is balanced in the model by evolving market revenue as the system is saturated with resources).

The model then computes the total new capacity added using this computed value and several input data files which let users change the share of costs that have to be covered to be deemed profitable and the share of cost-effective capacity that is actually built (sometimes there are market dynamics that significantly limit what can be built, even if it is profitable) Each resource also has a minimum buildable amount (described under Maximum Buildable Capacity above), so that resources with little or no existing capacity, including those that do not yet exist, can always be built if they are profitable. 

![Cost effective capacity additions and retrofits](/img/electricity-sector-main-CostEffectiveAdditions.png)

![new capacity and retrofits desired due to cost effectiveness](/img/electricity-sector-main-CostEffectiveCapacityDesired.png)

### Clean Electricity Standard Additions

The EPS represents electricity portfolio standards through a unified framework that can simultaneously enforce a Renewable Portfolio Standard (RPS) and a Clean Energy Standard (CES). RPS typically qualifies only renewable resources (wind, solar, geothermal, hydro, etc.); CES is broader and may also qualify nuclear, fossil generation paired with carbon capture, and other low-carbon firm resources. The model treats the two as configurations of the same machinery: each has its own qualifying-resource definitions, its own percentage targets (which can also vary by subregion), and its own credit price that the model converges on. A run can enforce either standard, both at once, or neither. A control setting in input data, set separately for the RPS and the CES, determines whether electricity exports are subtracted from the demand to which each standard's percentage applies. Where these docs below use the abbreviation "CES/RPS," it refers to whichever of the two standards is being computed in that step.

The application of each portfolio standard is co-optimized with the cost-effectiveness additions to identify a credit price that generates sufficient revenue to add or retrofit resources for cost-effectiveness that leads to compliance with the standard. In each optimization pass, the model checks to see whether the anticipated amount of existing and new or retrofit qualifying electricity is sufficient to meet the target. It will raise the credit price until this share is met and converge on a credit price that gets just the right amount of new qualifying capacity built and/or retrofit. The RPS and CES optimizations run in separate passes, so each finds its own marginal-clearing credit price.

The first stage is to compute the weighted average national CES/RPS value. The model allows for different resources to be included as part of the RPS or CES, with separate BAU and policy-case qualifying-resource definitions in input data and a policy lever that selects whether the policy scenario uses the non-BAU definitions. It aggregates subnational data provided in the input data to estimate a binding value. For example, many states have existing RPS/CES values and collectively they form a national floor, below which a user policy setting would not be binding; a second policy lever allows a policy scenario to replace this BAU subregional schedule with an alternative schedule from input data, including one that sits below BAU. This first set of structures computes the effective RPS/CES value that the model will achieve, separately for each. In parallel, the model optionally determines the portfolio percentage needed to meet future RPS/CES values if foresight is enabled; foresight applies only from the first year impacted by future policies (set in input data) onward, and before that year suppliers seek only the legally required percentage. 

![Calculating RPS/CES percentage to seek](/img/electricity-sector-main-CESTarget.png)

The optimization structure utilizes a special type of capacity factor, the marginal capacity factor, in order to properly incent and build the right resources. This is needed because once certain hours are saturated with clean electricity, adding more clean electricity in those hours does not help increase the total share of clean electricity over the year. The marginal capacity factor captures the diminishing value of resources as the grid gets cleaner and certain hours are saturated by variable renewable sources.

![Calculating marginal capacity factors](/img/electricity-sector-main-MarginalCapacityFactor.png)

One drawback to this approach is that it can make the credit price seem unnecessarily high. This can occur because the model computes revenue as the CES credit price multiplied by the marginal capacity factor for a given hour, summed over the year. As the grid approaches 100% clean, marginal capacity factors for all resources decrease and a higher price is needed to drive clean adoption. On the other hand, this ensures the model is only paying for completely additive clean resources and it helps shift CES revenue to dispatchable resources as the grid gets close to 100% clean.

Hybrid resources are included in the optimization loop and the model will tend to move towards them in years with higher clean shares to reallocate the clean supply to the hours when it is needed. Because a hybrid resource (a renewable paired with on-site storage) can be desired both as a hybrid power plant and as a standalone generation source, when the combined desired additions for both roles would exceed what is buildable for that source, the model splits the buildable capacity between the two roles in proportion to each role's desired amount as a proxy for comparative profitability.

The CES also allows users to set an Alternative Compliance Payment in the input data that sets a cap on the credit price. Once the cap is hit, the model will not continue to increase the credit price, even if it cannot hit the CES target. Relatedly, when a portfolio target cannot be met even with full deployment of qualifying resources — that is, the maximum achievable clean share is at or below the target — the model detects this during the optimization passes and holds the final credit price at the level that achieves the maximum feasible buildout, rather than continuing to step it upward.

![expected RPS-qualifying output used in the credit price search](/img/electricity-sector-main-RPSQualifyingOutput.png)

![RPS credit price search](/img/electricity-sector-main-CES.png)

![CES credit price search](/img/electricity-sector-main-CESCreditPrice.png)

The CES optimization also works together with the reliability mechanism (described below), which derates the reliability credit of non-qualifying resources as the standard tightens, so that the model builds adequate qualifying capacity to maintain reliability without overbuilding clean resources.

### Additions to Support Green Hydrogen Production

The EPS also tracks green hydrogen demand and will build off-grid renewables to support the production of green hydrogen. This part of the model uses a logit choice function to assign the demand for electricity to different resource types based on their costs. The exponents and shareweights for logit are included as part of input data. The model then builds sufficient capacity to electricity demand for green hydrogen production and tracks this stock over time.

![Additions for green hydrogen production](/img/electricity-sector-main-GreenH2Additions.png)

### Reliability Additions

At this point the model has built capacity as mandated in input data, for cost-effectiveness, to comply with an RPS or CES, and for off-grid green hydrogen production. The final capacity mechanism ensures there are sufficient resources online to meet reliability in every hour, including a reserve margin.

In practice, reliability additions in the EPS are dominated by **dispatchable resources** -- the kinds of plants utilities and grid operators rely on to provide firm capacity during peak demand hours (e.g., natural gas peakers, nuclear, hydro, biomass, dispatchable storage).

To size additions, the model first identifies the **single binding peak hour** -- the (timeslice, hour) combination across the peak winter and peak summer days where net electricity demand most exceeds the credited supply, after accounting for the reserve margin. Supply in each hour is credited at each resource's bid capacity factor for reliability, which incorporates the effective load carrying capability adjustment (discussed in the capacity factors section below) and, for resources that do not qualify under the RPS or CES, the reliability credit derate described further down. Demand-altering technologies (demand response, standalone and hybrid batteries, pumped hydro, and EV batteries) are credited on the demand side: the change in each hour's load from these resources, scaled by the effective load carrying capability for demand-altering technologies, is included in the demand plus reserve margin that the reliability mechanism must meet. They are not counted a second time as supply in the binding hour; only new grid batteries built for reliability in the current pass are added to binding-hour supply.

![binding peak hour and reliability bid capacity factors](/img/electricity-sector-main-ReliabilityBindingHour.png)

The model then computes a capacity price that increases revenue such that sufficient capacity is added to the system, using the same cost-effectiveness structure used elsewhere in the model and iterating over 20 optimization passes. The price rises while the binding-hour shortfall exceeds what the fleet could achievably add in that pass, holds while any shortfall remains, and otherwise falls. The price stops rising once supply reaches 95% of the maximum achievable binding-hour supply (existing credited capacity plus everything that could still be built within the build limits), so it does not climb indefinitely against a shortfall that cannot physically be filled. Each resource's revenue from the capacity price is discounted by its bid capacity factor in the binding hour, its effective load carrying capability, and, for non-qualifying resources, the reliability credit factor. For example, if a winter 10 PM peak is the binding hour, dispatchable resources receive capacity revenue weighted by their typical availability in that hour.

![capacity market revenue and reliability credit for new entrants](/img/electricity-sector-main-ReliabilityCapacityRevenue.png)

![capacity market price search](/img/electricity-sector-main-ReliabilityCapacityPrice.png)

![maximum achievable binding-hour supply](/img/electricity-sector-main-ReliabilityAchievableSupply.png)

To estimate how much is needed in each hour, the model uses a peak winter and a peak summer timeslice. These are meant to represent the worst system conditions during the worst days of each season in terms of demand and potential output from variable resources. The input data uses hierarchical clustering of historical demand data and the minimum capacity factor for variable resources. The model then adds a reserve margin to ensure sufficient supply. These approaches attempt to mimic planning procedures of real-world utilities and grid operators. 

**Interaction with portfolio standards.** The reliability mechanism runs as a single pass over all resources. Rather than a separate pass for clean resources, the RPS and CES interact with reliability through a reliability credit applied to resources that do not qualify under the standard. Two related derates apply, each taking the more restrictive of the RPS and CES values for a given resource:

* For the **existing fleet's contribution to meeting the reliability need**, non-qualifying sources are credited in proportion to an energy budget: the annual non-qualifying generation allowed under this year's requirement, divided by the non-qualifying energy needed to cover residual load (demand plus reserve margin above qualifying supply) on the peak days. This ratio is further ramped down over the years leading up to a 100% requirement, using a lookahead horizon set in input data (eight years in the U.S. model), so that credit for non-qualifying capacity declines gradually as full compliance approaches.
* For **new entrants' capacity revenue and the capacity payments actually made**, non-qualifying sources are discounted by a Weibull-shaped curve of the portfolio-standard requirement over the lookahead horizon (the larger of the current and future-year requirement), with the curve's shape and scale set in input data. The discount is small at moderate requirements and approaches zero as the requirement approaches 100%, so non-qualifying resources become increasingly unlikely to be built for reliability as a standard tightens. When the lookahead requirement reaches 100%, only qualifying resources may be built for reliability.

Because the future-year requirement enters these derates, the model avoids building non-qualifying resources shortly before a 100% requirement that would then be unable to run.

![existing fleet reliability credit factor and backstops](/img/electricity-sector-main-ReliabilityCreditFactors.png)

**Backstops.** If a binding-hour shortfall remains after the capacity price search, three backstops respond so that reliability needs are not left unmet:

* The share of derated credit needed to cover the shortfall is restored to existing non-qualifying plants in the following year, but only within their retirement economics (their predicted capacity payment), so that plants the system still relies on are less likely to retire.
* Any shortfall that restoring existing credit could not cover is met in the same year by emergency additions of non-CES-qualifying capacity, allocated in proportion to each source's remaining buildable capacity and sized to cover the need at the sources' uncredited peak-hour availability, without a profitability test.
* In the following year, the entry restriction and the credit derate for non-qualifying new entrants are relaxed in proportion to the residual shortfall relative to the capability that non-qualifying entrants could provide.

The resulting capacity additions are added to the generation-capacity total going into stock-and-flow tracking.

![Dispatchable reliability additions](/img/electricity-sector-main-DispatchableReliability.png)

Because the reliability mechanism runs downstream of the cost-effectiveness mechanism, including for the CES/RPS, it can result in additional qualifying capacity being built that pushes the model past the CES/RPS target in certain years. The only way to fully avoid this would be through a linear program where the model could optimize capacity against multiple constraints at once, but Vensim is unable to do this.

### Total New and Retrofit Capacity

Lastly, the model sums the total capacity additions and retrofits for input into the stock and flow tracking.

![Total capacity additions and retrofits](/img/electricity-sector-main-TotalNewCapacity.png)

## Tracking Electricity Stock and Average Power Plant Fleet Properties

This part of the model tracks fleetwide properties of power plants, such as installed capacity, weighted average heat rates, and operating costs. The model collapses the vintaging here into a single weighted average value to minimize runtime impacts and carry through a single value for each power plant type.

### Tracking the Electricity Fleet

Existing capacity, retirements, new capacity, and retrofits are combined to produce key outputs for use across the electricity sector.

![Total installed power plant capacity](/img/electricity-sector-main-StockTracking.png)

### Capacity Factors

Various capacity factor calculations are used through the electricity sector. These include achieved capacity factors (annual and by hour), expected capacity factors, hypothetical capacity factors, start year capacity factors, and bid capacity factors. Each of these has a different use in the structure to reflect different situations and calculations.

Achieved capacity factors by hour measure each plant type's output in each hour relative to its installed capacity, with capacity that came online during the year counted at a time-adjustment fraction. Achieved capacity factors differ from expected capacity factors because they account for real world (in the model) operating conditions and things that may cause expected output to deviate from actual output, such as curtailment. When the portfolio-standard mechanism (RPS and CES) estimates the qualifying output it can expect from surviving capacity, it uses last year's achieved capacity factors by hour for hydro and last year's hourly bid capacity factors for other resources.

![achieved capacity factors by hour](/img/electricity-sector-main-ThreeYearAverageAchievedCFbyHour.png)

These values are also used to calculate average annual achieved capacity factors. For new plants, the model estimates the capacity factors they would achieve from a hypothetical dispatch, as if one megawatt of each power plant type had been available. Each year, the model calculates how much of that megawatt would be dispatched in each hour through guaranteed dispatch, portfolio-standard dispatch, and least cost dispatch at five-year average market prices, using the bids of a new plant of that type. After the start year, the expected capacity factors for new plants are the three-year average of these hypothetical capacity factors, adjusted for any policy-driven reduction in plant downtime. This lets the model reflect the evolving nature of the power system and the impact to plant run times. For example, in a power sector decarbonization scenario, fossil thermal plants are dispatched less, so the expected capacity factors, and therefore the anticipated revenues, of new fossil plants decline as well. If we used a static capacity factor, then when computing anticipated revenue and costs for new power plant types, we would fail to capture the fewer hours those plants run.

![three-year weighted average hypothetical capacity factor](/img/electricity-sector-main-ThreeYearAverageAchievedCF.png)

These rely on weighted average data across the whole fleet by power plant type. In the start year we also compute start year capacity factors based on input data, since there is no historical year data to start calculating from; a historical-year calibration adjustment from input data can scale these start-year capacity factors so that modeled generation matches observed data for sources whose output is set by capacity factors.

![start-year and weighted average expected capacity factors](/img/electricity-sector-main-WeightedAverageCFs.png)

Plant types with no existing capacity, for example novel technologies like hydrogen combustion turbines or small modular reactors, use the hypothetical capacity factor described above in every year, including the start year, since there is no existing fleet whose capacity factors could be used. 

![Expected capacity factors](/img/electricity-sector-main-ExpectedCFs.png)

Bid capacity factors are used in the dispatch mechanisms to reflect the available capacity in a given hour available to dispatch. They incorporate several limitations, including a maximum capacity factor, i.e. the maximum share of potential output that is available in each hour. Because the EPS is also a single-region model, we also include the ability to discount the available output to account for the regionality of the grid. If we didn't include this, the model would operate as a copper sheet with a power plant in one region being able to supply power in a wholly different region. These parameters are set through RAF Regional Availability Factor for Generation and are generally handled through calibration. Non-dispatchable renewables are not typically affected by this calibration. Capacity factors used for reliability calculations (i.e. that reflect an equivalent to effective load carrying capacity) are calculated here as well. This effective-load-carrying-capacity adjustment is applied separately to generation sources and to demand-altering technologies (such as demand response, EV batteries, and storage), reflecting the different ways each contributes to meeting peak reliability needs. 

![Bid capacity factors](/img/electricity-sector-main-BidCFs.png)

![reliability bid capacity factors](/img/electricity-sector-main-ReliabilityBidCFs.png)

### Other Weighted Average Fleet Properties

We compute values for new plants, including fixed O&M, variable O&M, and heat rates. We use this to also compute the fuel cost for newly built power plants.

![Other new plant properties](/img/electricity-sector-main-OM_fuel_heatrate.png)

The model next moves to computing properties for the existing fleet on a weighted average basis to collapse plant vintage down into a single element for model runtime.

First we compute the weighted average heat rate for the fleet and generation costs per unit output.

![Weighted average heat rate](/img/electricity-sector-main-weighted_avg_heatrate.png)

Next we compute the remaining properties for the existing fleet.

![Other weighted average fleet properties](/img/electricity-sector-main-weighted_avg_properties.png)

![weighted average fixed O&M costs and share of capacity built this year](/img/electricity-sector-main-FixedOMAndShareBuiltThisYear.png)

The model also calculates subsidies for electricity generation on a weighted average basis. We account for the duration of subsidies here as well, since some regions have subsidies that are limited in duration. We then have a weighted average across all the vintages for a single value by power plant type. Separately, input data and a policy lever can specify a production subsidy per unit electricity output for existing plants. This subsidy is added to the variable subsidies for each power plant type, so it lowers dispatch costs and counts as revenue in the retirement calculations.

![Subsidies per unit output](/img/electricity-sector-main-subsidies_per_output.png)

### Available and Expected Capacity by Hour

Lastly, we compute the expected and available capacity by hour. Available capacity reflects the maximum available while expected reflects expected output, for example from hydro facilities where expected output is often far below maximum potential output. In both, capacity that came online during the year is counted at a time-adjustment fraction from input data to reflect partial-year operation.

![Available and expected capacity by hour](/img/electricity-sector-main-available_expected_capacity.png)

## Electricity Dispatch

At this point, the model has now estimated load, costs, retirements, capacity additions and retrofits and fleetwide properties, such as dispatch costs. The next step is to compute what is dispatched.

There are multiple dispatch mechanisms in the EPS, each with a specific purpose. The dispatch process begins with guaranteed dispatch, which is not price-based but rather is based on input data and policy drivers. This can be used to reflect, for example, equal shares dispatch. It can also be used for plant types that are typically price-insensitive, such as nuclear and on-site cogeneration facilities, such as biomass combined heat and power plants. 

Following guaranteed dispatch is dispatch of RPS qualifying resources. This happens upstream of economic dispatch because there are instances where high-priced clean energy sources are needed to comply with the CES that may not dispatch if left solely to market dynamics.

Finally, the model meets the remaining demand through least cost dispatch, based on the dispatch costs of resources. 

The model does this using annual fuel price data to estimate actual dispatch and also using five-year average dispatch data to estimate a long run average dispatch amount for use in planning new resources.

The model combines all the dispatch data at the end of the dispatch process to compute a market price in each hour on an annual and five-year average basis.

### Guaranteed Dispatch

The model begins by dispatching resources that are guaranteed, as specified in input data. Based on this data, the model dispatches a fixed amount of the expected capacity of a resource in every hour. Expected capacity factors are based on input data and calculations described above for expected capacity factors. The input data can be configured to have two priority tiers so that in instances where the total amount of demand would be exceeded by guaranteed dispatch, it will first curtail resources in the lower tier and then the higher tier. In instances where guaranteed dispatch and the portfolio-standard mechanism (RPS or CES) conflict, the portfolio-standard mechanism will take precedence to ensure compliance.

![Guaranteed dispatch](/img/electricity-sector-main-GuaranteedDispatch.png)

![allocating guaranteed dispatch by hour](/img/electricity-sector-main-GuaranteedDispatchByHour.png)

### Dispatch of Portfolio-Standard Qualifying Resources

Next the model will dispatch RPS- and CES-qualifying resources, starting with zero- and negative-cost resources and then moving to positive-cost resources. This step helps ensure that these resources are appropriately used even if their costs might exceed other resources. It also ensures alignment with the projected qualifying share as part of the CES/RPS optimization. The model uses available capacity factors for dispatch here. Because the expected and available capacity factors for variable renewables are the same, and most qualifying resources today are variable, this is generally not an important distinction, but it matters for certain resources like clean firm resources, which can be used at higher capacity factors when needed to meet CES/RPS requirements. RPS-qualifying resources are dispatched first; remaining qualifying-but-not-yet-dispatched CES resources follow, since CES qualifying definitions are typically a superset of RPS.

![RPS dispatch](/img/electricity-sector-main-RPSDispatch.png)

### Least Cost Dispatch

Finally, the model meets the demand remaining after guaranteed and portfolio-standard dispatch through the least cost dispatch mechanism, which finds the electricity market price in each hour at which the supply offered by power plants equals that remaining demand. Every power plant type with capacity left over after the earlier dispatch steps takes part.

To do this, we represent the bids from each power plant type as a normal distribution, reflecting the fact that individual plants of the same type have different costs. The center of the distribution is the plant type's dispatch cost per unit output: fuel costs (including carbon pricing) and variable O&M costs, plus CO2 transport and storage costs for plants with CCS, less production subsidies, CCS subsidies, and carbon price credits for plants with CCS. Its spread (standard deviation) is the plant type's dispatch cost before subsidies multiplied by a normalized standard deviation for each plant type from input data. At a given price, the share of a plant type's remaining available capacity that is dispatched is the share of its bid distribution at or below that price. Because the distributions can extend below zero, resources with zero or negative dispatch costs (for example, because of production subsidies) are dispatched within this mechanism rather than in a separate step. The model uses Vensim's built-in market-clearing functions to solve directly for the price in each hour at which total supply across all plant types matches remaining demand, and then calculates each plant type's dispatch at that price. In hours where guaranteed and portfolio-standard dispatch have already met all demand, there is no least cost dispatch.

We also account for hydro dispatch as part of this mechanism by using a “hydro opportunity cost” from input data as the center of hydro's bid distribution, allowing it to economically dispatch. This is required because while hydro plants have no fuel costs, they do have real opportunity costs they have to balance in determining whether or not to increase their dispatch and they are also a core part of flexible supply in certain geographies. 

![dispatch cost and hydro opportunity cost bids for least cost dispatch](/img/electricity-sector-main-LeastCostDispatchBids.png)

![Least cost dispatch](/img/electricity-sector-main-LeastCostDispatch.png)

As mentioned earlier, we do least cost dispatches twice: once using annual dispatch costs and once using five-year average dispatch costs. Both use the same remaining demand and available capacity; only the bids differ. The latter approach and accompanying market prices are used elsewhere in the power sector for determining future market revenues for new power plants. This avoids having a single year with high market prices used to represent anticipated future revenues.

### Summing Total Dispatch and Estimating Market Prices

Total electricity dispatched is summed across guaranteed dispatch, portfolio-standard dispatch, and least cost dispatch. Dispatch estimates are used to compute market prices for every hour on an annual and five-year basis. In hours when there is electricity dispatched through least cost dispatch, the model uses the market-clearing price from the least cost dispatch mechanism. However, there can be other hours in which there is no least cost dispatch, especially as the grid approaches 100% clean and most or all dispatch happens through the other dispatch mechanisms. In these hours, the model calculates the average dispatch cost of the resources dispatched in that hour, weighted by their share of generation, to determine an “average” market price. Separately, particularly in small geographies, there can be hours in which all of the in-region supply is provided by imports. In these hours, we use the imported electricity price specified in input data.

![Total generation and market prices](/img/electricity-sector-main-TotalDispatchAndMarketPrices.png)

![hourly marginal dispatch cost](/img/electricity-sector-main-MarginalDispatchCost.png)

![total dispatch using five-year averages](/img/electricity-sector-main-FiveYearTotalDispatch.png)

![five-year average hourly marginal dispatch cost](/img/electricity-sector-main-FiveYearMarginalDispatchCost.png)

## Economic Storage Additions

The electricity sector estimates economic additions of grid battery storage -- specifically standalone grid batteries (storage that is not co-located with a renewable power plant). Storage additions for hybrid power plants (renewables paired with on-site batteries) are co-optimized with the hybrid plant's capacity expansion in the cost-effectiveness step described above. The standalone grid-battery additions described in this section are tracked separately from hybrid storage and use a different revenue-driven methodology. Both standalone and hybrid storage are summed at the end for use in load shifting, market price formation, and reliability checks.

To estimate standalone grid-battery additions the model starts by calculating anticipated market revenues. Unlike for power plants, the model does not directly compare anticipated revenues and against costs to estimate additions, but rather looks only at the anticipated net revenue. This approach is necessary because the EPS omits several sources of revenue for storage, notably including ancillary services like frequency response, and comparing against costs would yield far lower profitability than in reality. Additionally, while the EPS now has hourly granularity for six electricity timeslices, to fully capture the revenue potential for storage would required sub-hourly detail, in addition to grid services. If we directly compared costs and revenues, we would miss a large source of revenue and significantly underestimate anticipated storage additions.

To estimate market revenues, the model values the hours in which diurnal storage charges and discharges in the load-shifting calculation at last year's five-year average marginal dispatch costs, giving a weighted-average charging cost and discharging revenue per MWh of battery capacity (four hours of storage duration by default in the US model). This allows the model to determine an estimated annual average charging and discharging profit per MWh of battery capacity. Incentive policies add to the profitability and drive additional storage capacity. Declines in battery costs are modeled as a form of revenue as well to reflect increasing profitability of batteries. Together these elements comprise a "net revenue" estimate. The calculation of incentive policies, which can take the form of subsidies for battery production (the share passed through to battery buyers) or for capacity deployed, is shown below.

![grid battery net energy market revenue](/img/electricity-sector-main-GridBatteryNetRevenue.png)

![grid battery storage subsidies](/img/electricity-sector-main-GridStorageSubsidies.png)

The total net revenue is multiplied by a calibrated input parameter (the MWh of storage added per $/MWh profit) to estimate battery additions. Batteries added through the reliability mechanism's capacity price are added to these economic additions to give total new grid battery capacity.  The storage additions are added to the model’s capacity on a one-year delay. Storage additions for the US and state models approximate those observed from other dedicated power system models, e.g. the National Renewable Energy Lab's ReEDS model.

![Battery storage additions](/img/electricity-sector-main-GridStorageAdditions.png)

## Total Emissions

Next, we determine the pollutant emissions based on the generation by type, as shown in the following screenshot:

![electricity sector pollutant emissions](/img/electricity-sector-main-TotalEmissions.png)

We use emissions indices (per unit energy in the fuel) and heat rates (energy units of fuel per MWh of electricity) to obtain pollutant emissions indices per MWh of electricity.  We also apply any carbon capture and sequestration that is performed by the electricity sector, reducing CO<sub>2</sub> emissions but also increasing fuel consumption (to power the CCS process).  We apply the emissions indices per MWh to the total generation and add in the CCS effects to obtain an emissions total for the electricity sector by pollutant. The EPS also includes the ability to include or exclude emissions from either imported electricity or from exported electricity. These are control levers that are set separately through input data.

## Additional Electricity Outputs

This section includes a few calculated variables that may be of interest in evaluating the electricity sector's performance or characteristics.  Some of these values can be useful for debugging or evaluating the realism of the model's response to a given set of input data or policy settings.

![Additional outputs](/img/electricity-sector-main-AdditionalOutputs.png)

![additional electricity outputs: water use, build fraction, CO2e, and portfolio-standard compliance](/img/electricity-sector-main-AdditionalOutputsWaterAndPortfolioStds.png)

We calculate the amount of curtailed electricity output (based on the reduction in expected capacity factors) from each variable electricity source. These calculations are based on the expected output at expected capacity factors for these resources compared to their actual output. Curtailment can happen when supply is greater than demand or when other resources are guaranteed ahead of variable renewable resources. 

We also track compliance with the RPS and CES, which are used by their respective optimization passes and the accompanying graphs. Conversions to other outputs, such as the percentage generation from clean sources and renewable electricity generation in primary energy units, are also handled here.

The EPS also tracks water withdrawn and used by power plants based on input data on power plant types and generation by power plant types. 

Finally, the model aggregates pollutant emissions into estimate of CO<sub>2</sub>e and computes a few additional metrics used throughout the electricity sector.

---
*This page was last updated in version 4.0.7.*