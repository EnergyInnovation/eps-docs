---
title: Cost Outputs
---

## Note on the Cost of a Policy Package

One of the most common outputs in which a user might be interested is the economic cost of a policy package. The model calculates cash flow changes, representing the direct (first-order) transfers of money from one entity in the model to another, as a result of the active policy package. The EPS tracks these cash flows for nine different entities: government, labor and consumers, foreign entities, non-energy industries, natural gas and petroleum suppliers, electricity suppliers, biomass and biofuel suppliers, coal suppliers, and other energy suppliers. Cash flow impacts to industries are further divided up by ISIC code for use in the [input-output model](io-model).

In addition to understanding cash flow changes by entity or ISIC code, many users will wish to report overall costs or savings of a policy package. However, “cost” can be defined in more than one reasonable way. Since any money that is spent is received by someone else, the total of all these cash flow changes sums to zero. So, summing all cash flow changes is not a meaningful metric of policy cost.

In order to report the overall costs and savings of a policy package, we report the “Change in CapEx and OpEx” due to a package, which includes the change in capital expenditures, fuel and operational expenditures (including labor), and additional carbon tax on process emissions.  This metric does not include subsidy payments, as these are considered cash transfers, rather than capital or operational expenditures. The web application presents each of these components in addition to their sum to better demonstrate how much a policy package “costs.” This metric is similar to the sum of all cash flow changes, except we include only changes in amounts _paid_ and exclude changes in amounts _received_. The changes in amounts paid can be positive or negative. For example, if a policy causes consumers to buy less fuel, then consumers have a positive cash flow change (because they have saved money on fuel), and the “Change in CapEx and OpEx” will be negative (because less money is being spent as a result of the policy package). It does not matter that the fuel industry is receiving less money, because changes in receipts are excluded from this cost metric. 

It is important to note that these reported cost metrics are merely first-order cash flows that do not indicate the overall effect on the economy or on any actor’s welfare. In the real world, government may use tax receipts in ways that boost the economy by more than one dollar per dollar in receipts (for example, by investing in energy efficiency programs or public transit systems), or alternatively, in ways that are less productive and deliver fewer than one dollar of economic benefits per dollar spent. 

Lastly, a user concerned with the cost of a policy package should also look at the outputs for monetized public health and climate benefits: namely, avoided mortality from reduced particulates and avoided climate damages.  (These are located on the on the [Additional Outputs sheet](additional-outputs).)  Monetized benefits tend to outweigh the direct cost of policy packages in most cases.

## Calculating Changes in Spending

The upper portion of the Cost Outputs sheet is laid out as a grid, with columns for each sector (Transportation, Electricity Supply, Buildings, Industry, District Heating, Hydrogen, LULUCF, and Geoengineering), Fuel Trade & Subsidies (not calculated on a sector-specific basis), the Cross-Sector Totals sheet, and the Total; and a row for each of the main types of outlay (spending on Fuels, Capital, Operations and Maintenance (OM), Taxes, and Subsidies). Within each row, the changes in spending, whether positive or negative, are summed up across all sectors. The result appears in the variable in the “Total” column.

When a sector does not contain a given type of spending (for example, there is no “OM” spending in the “District Heating” sector), that spot in the table contains no variable. When a sector contains more than one variable that contributes to the same type of spending (for example, capital spending in the Electricity Sector can come from construction of power plants, batteries, or transmission lines), then these are totaled on this sheet.

## Useful Totals

First, we sum the changes in fuel, capital, and OM expenditures, as well as additional carbon tax on process emissions, to find the “Total Change in CapEx and OpEx before Tax Rebates.”

![cost totals](/img/cost-outputs-TotalBeforeRebates.png)

Any tax revenue that is rebated to households or businesses (i.e. partial or total revenue neutrality) should not count toward the "Total Change in CapEx and OpEx" metric, so we subtract out any tax rebate payments here (see the [Input-Output model](io-model)) documentation for a discussion of customizing Government Revenue Accounting mechanisms). 

![cost totals](/img/cost-outputs-Total.png)

We also show the total as net present value (NPV) in the first year of the model run, given the discount rate specified by the input data for this model version. Vensim will report a value in every year for NPV variables. All of these annual values represent NPVs of the cash flow in the model’s start year. As the model run continues, more and more payments or savings are included in the NPV total. As a reminder of this behavior, the variable is named “First Year NPV of CapEx and OpEx through This Year.” The relevant structure is shown below:

![NPVs of cost totals](/img/cost-outputs-NPV.png)

---
*This page was last updated in version 4.0.4.*
