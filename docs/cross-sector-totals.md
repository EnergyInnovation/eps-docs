---
title: Cross-Sector Totals
---

## General Notes

The Cross-Sector Totals sheet is where various quantities are totaled from the various model sectors, and certain modifications to cash flows are performed to prepare them for use in the [input-output (I/O) model](io-model) component of the EPS.  Totaled quantities include emissions (by pollutant and converted to CO2e), electricity demand, fuel use, and cash flows for the nine cash flow entities (government, non-energy industries, labor and consumers, foreign entities, and five energy suppliers).  Non-energy industry cash flows are further broken out into the ISIC codes (International System of Industrial Classification) used in the I/O model.  The totals on this sheet are not the only way in which cross-sector impacts are tallied.  For instance, expenditures broken down by type of expenditure are calculated on the [Cost Outputs sheet](cost-outputs).

## Pollutants and CO2e

The Energy Policy Simulator (EPS) totals the quantities of 12 pollutants emitted (or sequestered) from eight sectors: transportation, electricity, industry (including agriculture), buildings, district heat, hydrogen supply, LULUCF, and geoengineering.  Industry sector emissions here do **not** include leakage (induced emissions in other countries/regions); see the [Industry Sector page](industry-ag-main) for details about leakage.  Pollutants are simply summed, a quantization term is applied to avoid rounding error, then GWP values (using the user-selected GWP timeframe) are applied to convert them to CO2e.  The following screenshot shows the relevant structure:

![summing pollutant and CO2e emissions](/img/cross-sector-totals-SumPollutants.png)

## Fuel Use and Primary/Final Energy

We total fuel, primary, and final energy use, which are primarily used in various outputs, though it also serves as an input to the calculations of fuel imports and exports on the [Fuels sheet](fuels). First, we total all energy use by all sectors. We define final energy use as fuel used directly by end-users for energy-purposes (not feedstocks). We filter out energy used for feedstocks from the industry sector, then sum total fuel use for all sectors except electricity and district heat. Those sectors do not represent end consumers and are therefore not included in the final energy total. 

![summing fuel use](/img/cross-sector-totals-TotFinalEnergy.png)

 For primary energy, we filter out non-primary fuels (such as electricity, district heat, and hydrogen, refined petroleum products, as well as the fuel-less electricity sources, such as hydro, wind, solar, and geothermal) to obtain Total Primary Fuel Use by Sector.  We sum across sectors to obtain Total Primary Fuel Use.

 Finally, we convert fuel use to total primary energy.  Since we're already working in energy units that are the same across fuels, our only task is to convert the electricity that was generated via renewables (including distributed RE resources) to primary energy.  This was done on the [Electricity Sector sheet](electricity-sector-main), so we take those values and use them to fill in here for the renewable sources. We continue to report no value for energy carriers (electricity and heat) to avoid double-counting in the primary energy total. See the following screenshot for the structure:

![summing fuel use](/img/cross-sector-totals-PrimaryEnergy.png)

## Change in Carbon and Fuel Tax Revenues

### Change in Carbon Tax Revenue

We calculate the change in carbon tax revenue due to the policy package, which is one of the inputs used in the [input-output model](io-model), where the way in which government acquires or uses this change in revenue can be set.

We obtain the carbon tax revenue from each sector by multiplying the fuel use in that sector by the carbon tax amount per unit energy for that fuel and sector.  (Different sectors may have different carbon tax rates, and different fuels have different carbon intensities.  The carbon tax amounts per unit energy are calculated on the [Fuels sheet](fuels).)  For the industry sector, we also have to add in any carbon tax levied on industrial process emissions (which will be zero unless the carbon tax is configured to apply to process emissions).

![carbon tax revenue by sector](/img/cross-sector-totals-CarbonTaxRev.png)

We then take the difference between this amount and its equivalent in the BAU case.

![change in carbon tax revenue](/img/cross-sector-totals-CngCarbonTaxRev.png)

### Change in Fuel Tax Revenue

The change in revenue from fuel taxes is calculated in a similar way to the change in carbon tax revenue (except industrial process emissions play no role here).  We multiply the fuel used in each sector by the fuel tax amount per unit energy applying to that fuel (as calculated on the [Fuels sheet](fuels)) and add across sectors.

![fuel tax revenue by sector](/img/cross-sector-totals-FuelTaxRev.png)

We then take the difference between the BAU and policy cases to find the change due to the policy package.

![change in fuel tax revenue](/img/cross-sector-totals-CngFuelTaxRev.png)

## Changes in Cash Flows

The model tracks changes in cash flow for nine main actors (sometimes called "cash flow entities"): government, non-energy industries, labor and consumers, foreign entities, and five types of energy suppliers (electricity, coal, natural gas and petroleum, biomass and biofuel, and other).  Additionally, the model tracks cash flow impacts by ISIC code, which breaks apart the non-energy industries cash flow entity into 21 ISIC codes and also tracks an additional 21 ISIC codes, for a total of 42 ISIC codes.  The break-out of five types of energy supplier within the EPS is more detailed than the available data by ISIC code (which, for example, groups all fossil fuel extraction businesses together, not distingusihing coal from oil and gas), so we retain the five energy suppliers within the "cash flow entities" subscript, instead of simply relying entirely on ISIC codes to track cash flows for all industries.  The detailed break-outs by ISIC code and by cash flow entity allows the EPS to produce outputs that show how policy packages affect specific segments of the economy and society.

## Changes in Non-Energy Industry Cash Flows by ISIC Code

As the cash flow entities subscript is already sufficient to track the direct financial impacts of policies for all entities except for the detailed break-out of non-energy industries, at this stage, we primarily use ISIC codes to subdivide the cash flows assigned to the "non-energy industries" cash flow entity.  (Later, in the [input-output model](io-model), we will use some of the properties of the energy industry ISIC codes to estimate indirect impacts of changes in energy industry output.)

The first step is to total the change in non-energy industry expenditures by ISIC code.  Non-energy industry expenditures were already assigned to ISIC codes within each sector, so it is straightforward to total them here.

![summing non-energy expenditures by ISIC code](/img/cross-sector-totals-NonEnerExpendByISIC.png)

We also track the change in revenues by ISIC code and by cash flow entity.  Revenue assignments to specific ISIC codes were already made in various sectors (transportation, buildings, etc.), which include taxes on those outputs (all input data on costs of equipment, labor, etc. should reflect final prices paid, including taxes).  We sum those components here, also allocating any change in interest paid on the national debt to nonenergy industries at this stage - for more on this, see the documentation page on the [input-output model](io-model).

![summing non-energy revenues by ISIC code before removing taxes](/img/cross-sector-totals-NonEnerRevByISIC.png)

We now need to separate out value added tax (VAT) or sales taxes collected, as our input data for the I/O model on industrial output does not inlcude these taxes and we need to maintain a consistent treatment of taxes.  To do this, we find the tax portion using input data on the VoSTR VAT or Sales Tax Rate by ISIC code.  An ideal VAT and sales tax would produce the same amount of government revenue, with the same tax burden ultimately falling on producers of each ISIC code.  It is just a difference of tax administration, or where the tax is collected.  A VAT is collected at each step of the production chain, and each downstream buyer pays a price that reimburses the supplier for the VAT it paid.  A sales tax is collected at the end, so a business would pay less to its suppliers, as it doesn't need to reimburse them for their VAT payments.  Before applying the tax rate, we also subtract the change in exports of nonenergy products from the direct change in revenue, as VAT or sales tax is not applied to exported goods. 

![change in VAT or sales tax collected](/img/cross-sector-totals-CnginVAT.png)
 
The variable 'Change in VAT or Sales Tax Collected on Revenue of Nonenergy ISIC Codes' shown above also includes one other component for the ISIC codes that do not correspond to one of the 25 industry categories.  For these ISIC codes, we also need to take VAT or sales tax out of the indirect and induced output (for industry ISIC codes, the indirect and induced effects already contributed to altering production via the [macroeconomic feedbacks](macro-feedbacks), and are therefore already reflected in the direct output).  We sum the indirect and induced changes in output, apply a one-year delay to avoid circularity, and apply the VAT or sales tax rate to this additional output for non-industry ISIC codes only. 

![change in VAT or sales tax collected on indirect and induced effects](/img/cross-sector-totals-CnginVATInd.png)

Now that we have the total change in VAT or sales tax revenue, we can create two additional variables we will need for other calculations in the model.  First, we subtract the change in VAT from the direct change in revenue to find 'Change in Nonenergy ISIC Code Revenue After Relinquishing Collected VAT or Sales Tax by ISIC Code.'  We also map the tax revenue from ISIC codes to the Cash Flow Entity subscript.  All tax revenue is assigned to the government subscript, while the revenue is removed from the nonenergy industries entity.

![change in VAT or sales tax collected by cash flow entity](/img/cross-sector-totals-CnginVATOutputs.png)

Finally, we add the changes in revenue and changes in expenses calculated above to obtain the Change in Nonenergy Industry Cash Flow, broken out by ISIC code.  In other words, this is the impact of the user's selected policies on the cash available to each industry segment.  We do not actually use this variable within the IO model (because the IO model requires the change in output, not the change in cash flow or net income, for each industry), but we calculate it here for completeness and for use in the [debugging assistance](debugging-assistance) sheet.

![totalling change in non-energy industries' cash flow by ISIC code](/img/cross-sector-totals-NonEnerCashFlowTot.png)

## Summing Changes in Expenditures and Revenues

The next step is to sum direct, policy-driven changes in expenditures and revenues for each cash flow entity across all sectors and other model components that cause direct changes in expenditures and revenues.  Expenditures are divided into energy expenditures and non-energy expenditures in each model sector, so we total them separately here, so we can represent changes in these types of expenditures as separate lines on output graphs.  We apply a Quantization Size for Cash Flows to dampen rounding error.

![summing changes in energy and non-energy expenditures](/img/cross-sector-totals-SumCngExpenditures.png)

Similarly, we sum changes in revenues for each cash flow entity across all sectors.

![summing changes in revenues](/img/cross-sector-totals-SumCngRevenues.png)

We also assign changes in revenue due to VAT or sales tax (explained above) and national debt interest payments, with expenses paid by government and revenues for those entities that own government debt.  (The interest received by the "non-energy industries" cash flow entity was allocated to ISIC codes earlier on this sheet.)

![assigning changes VAT or sales tax revenue and interest on national debt](/img/cross-sector-totals-NatnlDebtIntByEntityandTax.png)

We know how much of the output of each energy industry and non-energy industry was purchased by "foreign entities," so we are able to subdivide the change in revenue by entity into change in export revenue and change in domestic revenue.  We break this out here to enable us to show this revenue breakdown in output graphs.

![separating out change in export revenue and domestic revenue](/img/cross-sector-totals-CngRevenueExportDomestic.png)

Our final step is to sum the changes in expenditures (energy and non-energy) and the changes in revenues for each cash flow entity to find the change in direct (first-order) cash flow for that entity.  In other words, this is the change in cash available to each entity directly caused by the policy package.  This is analogous to the sum of changes in expenditures and revenues by ISIC code calculated above, and it is one of our important inputs to the I/O model.

![summing changes in cash flow by entity](/img/cross-sector-totals-SumCngCashFlowByEntity.png)

For the next steps in the calculation of financial policy impacts, see the documentation page on [the input-output model](io-model).

## Change in Energy Supplier Revenue and BAU Energy Supplier Revenue by Fuel

This section calculates the change of revenue for fuel-supplying entities attributable to each fuel type they produce.  This is done to allocate revenue changes for fuel suppliers to ISIC codes in the I/O model, as the ISIC codes don't map neatly onto the cash flow entities (but can be mapped neatly onto the fuel types).  Similar to other calculations shown above, this section sums the various sources of revenue.  However, these aren't already summed by sector in the cash flow sheets.  Therefore, we create each sectoral total here using all relevant pieces that affect energy supplier revenue and mapping them to the relevant fuel type, as shown below. 

![summing changes in energy supplier revenue](/img/cross-sector-totals-CngInEnergySupplierRevbySec.png)

We then sum the sectoral totals with the change in fuel industry cash flow from fuel exports and the change in thermal fuel subsidies paid to find the total change in fuel industry revenue by fuel, for use in the debugging assistance page and I/O model.

![summing changes in energy supplier revenue](/img/cross-sector-totals-CngInEnergySupplierRev.png)

We also need the BAU energy supplier revenue by fuel to endogenously calculate time series output for fuel industries ahead of the I/O model.  This requires an extra step to map the amount spent on fuels from each sector to the 'All Fuels' subscript, as each sector works with a different number of fuel types (for example, coal can be used in the electricity and industry sectors, but not in the transportation sector).

![summing changes in energy supplier revenue](/img/cross-sector-totals-BAUEnergySupplierRev.png)

---
*This page was last updated in version 4.0.4.*
