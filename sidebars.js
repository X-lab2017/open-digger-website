/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userDocSidebar: [
    'user_docs/intro',
    'user_docs/playground',
    {
      type: 'category',
      label: 'data_sources',
      collapsed: false,
      items: [
        'user_docs/data_sources/github',
        'user_docs/data_sources/gitee'
      ],
    },
    'user_docs/label_data',
    {
      type: 'category',
      label: 'metrics',
      collapsed: false,
      items: [
        'user_docs/metrics/how_to_use',
        {
          type: 'category',
          label: 'openrank',
          collapsed: false,
          items: [
            'user_docs/metrics/openrank/global_openrank',
            'user_docs/metrics/openrank/community_openrank'
          ],
        },
        'user_docs/metrics/technical_fork',
        'user_docs/metrics/bus_factor',
      ],
    },
    'user_docs/FAQ'
  ],
  developerDocSidebar: [
    'dev_docs/intro',
    'dev_docs/database_table_schema',
    'dev_docs/metrics',
    'dev_docs/cron_task',
    {
      type: 'category',
      label: 'jupyter_notebook',
      collapsed: false,
      items: [
        'dev_docs/jupyter_notebook/node_kernel',
        'dev_docs/jupyter_notebook/python_kernel',
      ]
    },
    {
      type: 'category',
      label: 'tools',
      collapsed: false,
      items: [
        'dev_docs/tools/leaderboard',
      ]
    }
  ]
};

export default sidebars;
