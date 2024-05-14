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
  url: 'https://open-digger.cn',
  baseUrl: '/',
  
  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?b18671b05d4a87c3cc08f76cb6ef79c7',
      async: true,
    }
  ],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: "rtl",
      },
    },
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
          editUrl: ({ blogDirPath, blogPath, locale }) =>
            `https://github.com/X-lab2017/open-digger-website/tree/master/${locale === defaultLocale ? `${blogDirPath}/${blogPath}` : `i18n/${locale}/docusaurus-plugin-content-blog/${blogPath}`}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
      },
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
        hideOnScroll: true,
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
            className: 'header--github-link',
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
