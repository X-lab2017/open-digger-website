// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const defaultLocale = 'zh';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDigger',
  tagline: 'Open Source Analysis Platform',
  favicon: 'img/favicon.ico',

  url: 'https://open-digger.x-lab.info/',
  baseUrl: '/',

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
          editUrl: ({locale, docPath}) => {
            const url = `https://github.com/X-lab2017/open-digger-website/tree/master/${locale === defaultLocale ? '' : `i18n/${locale}/docusaurus-plugin-content-docs/current/`}${docPath}`;
            console.log(url);
            return url;
          },
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
          editUrl: ({locale, blogDirPath, blogPath}) => {
            const url = `https://github.com/X-lab2017/open-digger-website/tree/master/${locale === defaultLocale ? '' : `i18n/${locale}/docusaurus-plugin-content-blog/`}${blogDirPath}/${blogPath}`;
            console.log(url);
            return url;
          },
        },
        theme: {
          customCss: './src/css/custom.css',
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
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'docs',
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
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'docs',
                to: '/docs/intro',
              },
              {
                label: 'blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/X-lab2017/open-digger',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} X-lab`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
