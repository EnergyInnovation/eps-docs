---
title: Macroeconomic Feedbacks
---

## Connection to Input-Output Model

The Macroeconomic Feedbacks sheet uses results of the [input-output model](io-model) to adjust energy service demand for indirect and induced economic activity, and to account for indirect and induced effects on government and household cash flows.  It is recommended you read the [documentation page on the input-output model](io-model) before reading this page, as these feedbacks are an extension of the I/O model.  This page will assume you are familiar with the information discussed on the I/O model doc page.

## Energy Service Demand Feedbacks

In addition to producing outputs on policy package impacts on jobs, GDP, and employee compensation, the I/O model also calculates the indirect and induced changes in output (value added) produced by different ISIC codes.  Just like changes in output directly caused by the policy package, indirect and induced changes in output are also associated with changes in energy use and emissions.  In order to capture the energy use and emissions effects, we need to feed the indirect and induced activity back into the main demand sectors of the EPS (Transportation, Buildings, and Industry), to affect the demand for energy-using services and industrial products.  Therefore, in this sheet, we calculate multipliers to be used within those sectors.  As the I/O model operates in terms of ISIC codes, the multipliers must be for each ISIC code, and we map these onto specific energy-using services or industries in the other sectors of the EPS.

We already have calculated indirect effects on value added in the [I/O model](io-model), but industry passthrough expenditures were added to the change in industrial output used to calculate these effects, to capture the full value added (which includes changes in tax payments and worker compensation).  However, the passthrough costs do not alter production levels, so they do not alter energy use or emissions.  Accordingly, we must re-calculate the indirect value added, using the same methodology as in the I/O model, but without adding the change in passthrough costs into the change in output during the calculation.

![exclude passthrough costs from indirect change in output calculation for feedbakcs](/img/macro-feedbacks-ExcludePassthru.png)

We add the calculated, indirect change in value added as well as the induced change in value added to BAU GDP by ISIC code to find a special version of the policy case GDP by ISIC code that reflects only indirect and induced impacts of the policy package (and excludes most direct impacts).  However, we do separately add in the direct effects of the Buy-In-Region policy lever.  This is because this policy lever's direct effects are not inlcuded in each sector, as the first place that policy influences the calculation flow is in the I/O model.  Therefore, its direct impacts need to be added to the macroeconomic feedback loops to capture associated energy use and emissions (the indirect and induced effects of the Buy-In Region policy are already part of the total indirect and induced effects, so they are already included in the macroeconomic feedback loops).  The screenshot below shows this calculation.  The Buy-In-Region calculations account for changes in output caused by other policies from foreign to domestic suppliers, as well as shifts to business-as-usual output from foreign to domestic suppliers.  The calculation flow sums up these two effects (calculated in the [I/O model](io-model)) to find the change in domestic output due to the Buy-In-Region lever, then multiplies by the Value Added per Unit Output (also calculated in the [I/O model](io-model)) to find the total change in domestic value added.

![policy case GDP exclucing most direct impacts](/img/macro-feedbacks-IndirectGDP.png)

Finally, we find the percent difference between the calculated GDP (which includes indirect and induced policy impacts) and BAU GDP, to find the precentage increase or decreate in output for each ISIC code.  We then must introduce a one-timestep delay to avoid circularity in the calculations (as indirect and induced effects on industries will affect their cash flows, which in turn feed into the I/O model).

![percent change in GDP](/img/macro-feedbacks-PercCngGDP.png)

This variable is used in the Transportation, Buildings, and Industry sectors to adjust the energy services or industrial products demand to account for the indirect and induced economic effects of the policy package.

## Cash Flow Feedbacks

Policy packages can have direct effects on the cash flow of each entity tracked in the model.  For example, households or government can save money if they spend less on energy as a result of energy efficiency standards, or they could spend more money on fuel in response to a carbon tax.  These direct effects on the cash flows of government and households were already accounted for in the variable `Direct Change in Cash Flow by Entity`, which is used as an input to the IO model.

However, the policy package's effects on industries will also have effects on government and household cash flow.  For instance, if an industry grows (has higher output) in response to the policy package, it will pay more in taxes, sending cash to government.  Industries may also employ more workers, and therefore the 'labor and consumers' cash flow entity will receive more compensation (and also send some of this money to the government in the form of income taxes).

We cannot remove these cash flows from the increase in output of each ISIC code upstream of the I/O model, because the I/O model expects to receive the total change in output for each ISIC Code, even if some of that increased output will ultimately be paid by companies to their workers or to the government.

Additionally, the direct changes in industrial output are just that: direct changes.  They don't account for indirect or induced activity, such as increases in jobs or wages at companies that supply the industries whose output is growing as a direct result of the policy package.  It is only downstream of the I/O model that we have calculated quantities for indirect and induced effects.

Therefore, we must now calculate the share of the change in industry output that is going to government and to labor and consumers, and feed these changes back into the top of the I/O model, to capture the whole scope of impacts on government and household cash flow.

### Change in Domestic Production

Using the total change in value added, indirect change in value added, and induced change in value added (calcualted in the [I/O model](io-model)), we find the corresponding changes in output.  The total Change in Domestic Output by ISIC Code is used on the [Industry and Agriculture page](industry-ag-main) to help calculate changes in industrial production, which need to incorporate all direct, indirect, and induced effects.  On the [Cross-Sector Totals sheet](cross-sector-totals), value added tax and/or sales tax is charged on the total output coming from that sector, so that change in taxes on all changes in industrial output (not just the direct changes) are already being separated from industry revenue and assigned to the government ahead of the I/O model.  However, the Industry sector does not cover ISIC codes that are not associated with one of the 25 industry categories (for example, education or human health and social work). The variables 'Indirect Change in Domestic Output by ISIC Code' and 'Induced Change in Domestic Output by ISIC Code' are used on the [Cross-Sector Totals page](cross-sector-totals) to add in tax revenue on the indirect and induced changes in output for these non-industry ISIC codes. 

![changes in output](/img/macro-feedbacks-CngOutput.png)

### Earnings of Workers

We do not reassign any share of the change in output to labor (for workforce payments) in front of the I/O model.  Therefore, we need to use the full impacts of the change in output on labor cash flow (as calculated by the I/O model) to feed into the I/O model in the next timestep.  That is, we don't want to limit the change in output used in this section to indirect and induced effects.  For instance, imagine a policy that increases household income (suppose, via a tax cut funded by deficit spending).  Households buy more goods, which leads to more employment and employee compensation, which further increases household cash flow and spending. 

To do this, we take the change in domestic employee compensation from the I/O model and apply the worker marginal income tax rate to find the 'Change in Domestic Individual Income Tax Revenue by ISIC Code,' which will be fed into the government's cash flow.  We then subtract the amount paid in taxes from the total change in employee compensation to find the 'Change in Labor and Consumers Earnings After Income Taxes,' which will be fed into the labor and consumers cash flow.  These variables are both used on the [I/O model](io-model) sheet in the Incorporating Macroeconomic Feedbacks section.  We implement a one-year time delay in both variables to avoid circularity.

![changes in government and labor and consumers cash flows](/img/macro-feedbacks-CashFlowCngs.png)

---
*This page was last updated in version 3.5.0.*
