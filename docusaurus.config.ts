import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import path from 'path';

const defaultLocale = 'zh';

const config: Config = {
  title: 'OpenDigger',
  tagline: 'Open Source Analysis Platform',
  favicon: 'img/favicon.ico',
  url: 'https://open-digger.cn',
  baseUrl: process.env.PULL_NUM ? `/pull_${process.env.PULL_NUM}/` : '/',

  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?b18671b05d4a87c3cc08f76cb6ef79c7',
      async: true,
    }
  ],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale,
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

  customFields: {
    ossBaseUrl: 'https://oss.open-digger.cn/',
    pullNumber: process.env.PULL_NUM,
    imagePath: process.env.PULL_NUM ? `/pull_${process.env.PULL_NUM}/img/` : '/img/',
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }) satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    'src/css/custom.css',
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig:
    ({
      image: 'img/logo/logo-blue-round-corner.png',
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
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'developerDocSidebar',
          //   label: 'devDocs',
          //   position: 'left',
          // },
          {
            to: '/blog',
            label: 'blog',
            position: 'left'
          },
          {
            to: '/community_openrank_leaderboard',
            label: 'community_openrank_leaderboard',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'GitHub',
            className: 'header--github-dropdown',
            position: 'right',
            items: [
              {
                label: 'OpenDigger',
                href: 'https://github.com/X-lab2017/open-digger',
              },
              {
                label: 'OpenDigger-Website',
                href: 'https://github.com/X-lab2017/open-digger-website',
              },
            ],
          },
        ],
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} X-lab<br>
          <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备18048778号-4</a>`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }) satisfies Preset.ThemeConfig,
};

export default config;
