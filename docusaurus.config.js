// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const defaultLocale = 'zh';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDigger',
  tagline: 'Open Source Analysis Platform',
  favicon: 'img/favicon.ico',

  url: 'https://open-digger.x-lab.info/',
  baseUrl: '/',

  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?76f9400bbb45cc03543b7febac4a77cf',
      async: true,
    }
  ],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale,
    locales: ['zh', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: ({ locale, docPath }) =>
            `https://raw.githubusercontent.com/X-lab2017/open-digger-website/master/${locale === defaultLocale ? 'docs/' : `i18n/${locale}/docusaurus-plugin-content-docs/current/`}${docPath}`,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
          editUrl: ({ blogDirPath, blogPath }) =>
            `https://github.com/X-lab2017/open-digger-website/tree/master/${blogDirPath}/${blogPath}`,
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
      image: 'img/logo/logo-black-blue-combination-vertical.png',
      navbar: {
        title: 'OpenDigger',
        logo: {
          alt: 'OpenDigger Logo',
          src: 'img/logo/logo-blue-round-corner.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userDocSidebar',
            label: 'userDocs',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developerDocSidebar',
            label: 'devDocs',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'blog',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/X-lab2017/open-digger',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} X-lab<br>
          <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备18048778号-4</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
