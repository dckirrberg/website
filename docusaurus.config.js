// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DC Kirrberg e.V.',
  tagline: 'GOOD DARTS in Homburg an der Saar',
  url: 'https://dckirrberg.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dckirrberg', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dckirrberg/website/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dckirrberg/webiste/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        title: 'DC Kirrberg e.V.',
        items: [
          {to: '/team', label: 'Über uns', position: 'left'},
          {to: 'https://artikel.dckirrberg.de', label: 'Webshop', position: 'left'},
          {to: 'https://www.betterplace.org/de/projects/124593?utm_campaign=user_share&utm_medium=ppp_stats&utm_source=Link', label: 'Projekte', position: 'left'},
          {to: '/blog', label: 'News', position: 'left'},
          {to: '/ergebnisse', label: 'Teams & Ergebnisse', position: 'left'},
          {to: '/spenden', label: 'Spenden', position: 'left'},
          {to: '/sponsoring', label: 'Sponsoren', position: 'left'},    
          {to: '/downloads', label: 'Downloads', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        
        links: [
          {
            title: 'Mehr',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'Downloads',
                to: '/downloads',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/dckirrberg',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/dckirrberg',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Impressum',
                to: '/docs/Impressum',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} DC Kirrberg e.V.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
