const sidebars = {
  epsSidebar: [
    'index',
    'video-series',
    'download',
    'online-model-tutorial',
    'version-history',
    {
      type: 'category',
      label: 'Model Overview',
      items: [
        'architectural-design',
        'input-data',
        'assumptions',
        'how-the-eps-avoids-double-counting',
        'comparing-results',
        'evaluating-package-financials',
        'unit-conversion',
        'remapping'
      ]
    },
    {
      type: 'category',
      label: 'Using the Web Interface',
      items: [
        'online-model-tutorial',
        'web-interface-graphs',
        'calculating-wedge-diagrams-and-cost-curves',
        'background-and-technical-info',
        'integrating-the-web-app'
      ]
    },
    {
      type: 'category',
      label: 'Using Vensim for Analysis',
      items: [
        'how-to-conduct-analysis',
        'running-the-model',
        'visualizing-output',
        'creating-and-managing-scenarios',
        'adjusting-plcy-impl-schd',
        'troubleshooting-vensim'
      ]
    },
    {
      type: 'category',
      label: 'Model Component Descriptions',
      items: [
        'model-component-descriptions',
        'transportation-sector-main',
        'transportation-sector-cash',
        'electricity-sector-main',
        'electricity-sector-cash',
        'buildings-sector-main',
        'buildings-sector-cash',
        'industry-ag-main',
        'industry-ag-cash',
        'district-heating',
        'hydrogen-supply',
        'lulucf',
        'ccs',
        'geoengineering',
        'fuels',
        'endogenous-learning',
        'cross-sector-totals',
        'io-model',
        'macro-feedbacks',
        'cost-outputs',
        'additional-outputs',
        'web-app-support',
        'debugging-assistance'
      ]
    },
    {
      type: 'category',
      label: 'Using Python for Analysis',
      items: [
        'automated-analysis',
        'selecting-output-variables',
        'logging-output',
        'testing-policy-combinations',
        'simulating-cap-and-trade'
      ]
    },
    {
      type: 'category',
      label: 'Policy Descriptions',
      items: [
        'policy-design-contents',
        {
          type: 'category',
          label: 'Transportation Policies',
          items: [
            'conventional-pollutant-standards',
            'ev-charger-deployment',
            'ev-mandate',
            'ev-subsidy',
            'feebate',
            'fuel-economy-standard',
            'hydrogen-vehicle-mandate',
            'low-carbon-fuel-standard',
            'reduce-range-anxiety-charging-time',
            'transportation-demand-management'
          ]
        },
        {
          type: 'category',
          label: 'Buildings & Appliances Policies',
          items: [
            'building-component-electrification',
            'building-energy-efficiency-standards',
            'contractor-training',
            'solar-carve-out',
            'distributed-solar-subsidy',
            'improved-labeling',
            'increased-retrofitting',
            'rebate-for-efficient-products'
          ]
        },
        {
          type: 'category',
          label: 'Electricity Supply Policies',
          items: [
            'ban-new-capacity',
            'electricity-imports-exports',
            'demand-response',
            'early-retirement-of-power-plants',
            'grid-scale-electricity-storage',
            'electricity-imports-exports',
            'increase-transmission',
            'nuclear-lifetime-extension',
            'reduce-downtime',
            'reduce-soft-costs',
            'reduce-tnd-losses',
            'renewable-portfolio-standard',
            'subsidy-for-electricity-production'
          ]
        },
        {
          type: 'category',
          label: 'Industry Policies',
          items: [
            'cement-clinker-substitution',
            'cogeneration-and-waste-heat-recovery',
            'early-retirement-of-industrial-facilities',
            'industry-energy-efficiency-standards',
            'improved-system-design',
            'industry-elec-and-hydrogen',
            'material-efficiency-longevity-reuse',
            'methane-capture',
            'methane-destruction',
            'avoid-f-gases',
            'reduce-fuel-exports',
            'water-conservation-waste-reduction',
            'worker-training'
          ]
        },
        {
          type: 'category',
          label: 'Agriculture, Land Use, and Forestry Policies',
          items: [
            'afforestation-and-reforestation',
            'avoid-deforestation',
            'forest-restoration',
            'forest-set-asides',
            'cropland-management',
            'improved-forest-management',
            'livestock-measures',
            'peatland-restoration',
            'rice-cultivation-measures',
            'shift-to-non-animal-products'
          ]
        },
        {
          type: 'category',
          label: 'District Heat and Hydrogen Policies',
          items: ['convert-non-chp-heat-production', 'district-heat-fuel-switching', 'switch-hydrogen-production-pathway']
        },
        {
          type: 'category',
          label: 'Cross-Sector Policies',
          items: ['carbon-capture-and-sequestration', 'carbon-tax', 'end-existing-subsidies', 'fuel-taxes']
        },
        {
          type: 'category',
          label: 'R&D Policies',
          items: ['direct-air-capture', 'research-and-development']
        }
      ]
    },
    {
      type: 'category',
      label: 'Model Regions',
      items: [
        {
          type: 'doc',
          id: 'models/california',
          label: 'California'
        }
      ]
    },
    {
      type: 'category',
      label: 'Other Information',
      items: ['acknowledgement', 'contact', 'software-license', 'version-history', 'archived-releases']
    },
    { type: 'category', label: 'Deprecated Documentation', items: ['carbon-tax-revenue-use', 'testing-policy-contributions'] }
  ]
}
module.exports = sidebars
