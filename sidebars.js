const sidebars = {
  epsSidebar: [
    'index',
    'video-series',
    'download',
    'online-model-tutorial',
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
      label: 'Model Components',
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
      label: 'Policy Design Guide',
      items: [
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
        [
          'us-state-eps-methodology',
          { type: 'doc', id: 'models/alabama', label: 'Alabama' },
          { type: 'doc', id: 'models/alberta', label: 'Alberta' },
          { type: 'doc', id: 'models/arizona', label: 'Arizona' },
          { type: 'doc', id: 'models/arkansas', label: 'Arkansas' },
          { type: 'doc', id: 'models/brazil', label: 'Brazil' },
          { type: 'doc', id: 'models/california', label: 'California' },
          { type: 'doc', id: 'models/canada', label: 'Canada' },
          { type: 'doc', id: 'models/canada_fr', label: 'Canada (français)' },
          { type: 'doc', id: 'models/china', label: 'China (2017, NCSC)' },
          { type: 'doc', id: 'models/china-igdp', label: 'China (2023, iGDP)' },
          { type: 'doc', id: 'models/colorado', label: 'Colorado' },
          { type: 'doc', id: 'models/connecticut', label: 'Connecticut' },
          { type: 'doc', id: 'models/delaware', label: 'Delaware' },
          { type: 'doc', id: 'models/florida', label: 'Florida' },
          { type: 'doc', id: 'models/georgia', label: 'Georgia' },
          { type: 'doc', id: 'models/hongkong', label: 'Hong Kong' },
          { type: 'doc', id: 'models/idaho', label: 'Idaho' },
          { type: 'doc', id: 'models/illinois', label: 'Illinois' },
          { type: 'doc', id: 'models/india', label: 'India' },
          { type: 'doc', id: 'models/indiana', label: 'Indiana' },
          { type: 'doc', id: 'models/indonesia', label: 'Indonesia' },
          { type: 'doc', id: 'models/iowa', label: 'Iowa' },
          { type: 'doc', id: 'models/kansas', label: 'Kansas' },
          { type: 'doc', id: 'models/kentucky', label: 'Kentucky' },
          { type: 'doc', id: 'models/louisiana', label: 'Louisiana' },
          { type: 'doc', id: 'models/maine', label: 'Maine' },
          { type: 'doc', id: 'models/maryland', label: 'Maryland' },
          { type: 'doc', id: 'models/massachusetts', label: 'Massachusetts' },
          { type: 'doc', id: 'models/mexico', label: 'Mexico' },
          { type: 'doc', id: 'models/michigan', label: 'Michigan' },
          { type: 'doc', id: 'models/minnesota', label: 'Minnesota' },
          { type: 'doc', id: 'models/mississippi', label: 'Mississippi' },
          { type: 'doc', id: 'models/missouri', label: 'Missouri' },
          { type: 'doc', id: 'models/montana', label: 'Montana' },
          { type: 'doc', id: 'models/nebraska', label: 'Nebraska' },
          { type: 'doc', id: 'models/nevada', label: 'Nevada' },
          { type: 'doc', id: 'models/newhampshire', label: 'New Hampshire' },
          { type: 'doc', id: 'models/newjersey', label: 'New Jersey' },
          { type: 'doc', id: 'models/newmexico', label: 'New Mexico' },
          { type: 'doc', id: 'models/newyork', label: 'New York' },
          { type: 'doc', id: 'models/northcarolina', label: 'North Carolina' },
          { type: 'doc', id: 'models/northdakota', label: 'North Dakota' },
          { type: 'doc', id: 'models/ohio', label: 'Ohio' },
          { type: 'doc', id: 'models/oklahoma', label: 'Oklahoma' },
          { type: 'doc', id: 'models/oregon', label: 'Oregon' },
          { type: 'doc', id: 'models/pennsylvania', label: 'Pennsylvania' },
          { type: 'doc', id: 'models/poland', label: 'Poland' },
          { type: 'doc', id: 'models/rhodeisland', label: 'Rhode Island' },
          { type: 'doc', id: 'models/saudiarabia', label: 'Saudi Arabia' },
          { type: 'doc', id: 'models/southcarolina', label: 'South Carolina' },
          { type: 'doc', id: 'models/southdakota', label: 'South Dakota' },
          { type: 'doc', id: 'models/southkorea', label: 'South Korea' },
          { type: 'doc', id: 'models/tennessee', label: 'Tennessee' },
          { type: 'doc', id: 'models/texas', label: 'Texas' },
          { type: 'doc', id: 'models/us', label: 'United States' },
          { type: 'doc', id: 'models/utah', label: 'Utah' },
          { type: 'doc', id: 'models/vermont', label: 'Vermont' },
          { type: 'doc', id: 'models/virginia', label: 'Virginia' },
          { type: 'doc', id: 'models/washington', label: 'Washington' },
          { type: 'doc', id: 'models/westvirginia', label: 'West Virginia' },
          { type: 'doc', id: 'models/wisconsin', label: 'Wisconsin' },
          { type: 'doc', id: 'models/wyoming', label: 'Wyoming' },
          { type: 'doc', id: 'models/zhejiang', label: 'Zhejiang' }
        ]
      ]
    },
    { type: 'category', label: 'Deprecated Documentation', items: ['carbon-tax-revenue-use', 'testing-policy-contributions'] },
    'software-license',
    { type: 'link', label: 'Version History', href: '/models/us#version-history' },
    'contact'
  ]
}
module.exports = sidebars
