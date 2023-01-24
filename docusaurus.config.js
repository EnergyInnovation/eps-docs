const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config = {
  title: 'Energy Policy Simulator Documentation',
  tagline: '',
  url: 'https://docs.energypolicy.solutions',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true
      }
    },
    navbar: {
      title: 'Energy Policy Simulator Documentation',
      logo: {
        alt: 'EPS icon',
        src: 'img/icon.svg'
      },
      items: []
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Energy Innovation Policy & Technology LLC®. All rights reserved.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    algolia: {
      // The application ID, key, and index name is provided by Algolia.
      appId: 'JX5PCLQY4G',
      indexName: 'energypolicy',
      apiKey: '887071eebffc9848ee9cd1afdc33a621',
    }
  }
}

module.exports = config
