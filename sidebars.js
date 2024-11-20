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
    {
      type: 'category',
      label: 'data_sources',
      collapsed: true,
      items: [
        'user_docs/data_sources/github',
        'user_docs/data_sources/gitee',
      ],
    },
    'user_docs/label_data',
    {
      type: 'category',
      label: 'metrics',
      collapsed: false,
      items: [
        'user_docs/metrics/metrics_usage_guide',
        'user_docs/metrics/playground',
        {
          type: 'category',
          label: 'openrank',
          link: {
            type: 'doc',
            id: 'user_docs/metrics/openrank',
          },
          collapsed: false,
          items: [
            'user_docs/metrics/global_openrank',
            'user_docs/metrics/community_openrank',
          ],
        },
        {
          type: 'category',
          label: 'statistics',
          collapsed: true,
          items: [
            'user_docs/metrics/activity',
            'user_docs/metrics/technical_fork',
            'user_docs/metrics/activity_dates_and_times',
          ],
        },
        {
          type: 'category',
          label: 'developers',
          collapsed: true,
          items: [
            'user_docs/metrics/new_contributors',
            'user_docs/metrics/contributors',
            'user_docs/metrics/inactive_contributors',
            'user_docs/metrics/contributor_absence_factor',
          ],
        },
        {
          type: 'category',
          label: 'issues',
          collapsed: true,
          items: [
            'user_docs/metrics/issue_new',
            'user_docs/metrics/issue_closed',
            'user_docs/metrics/issue_response_time',
            'user_docs/metrics/issue_resolution_duration',
            'user_docs/metrics/issue_age',
          ],
        },
        {
          type: 'category',
          label: 'change_requests',
          collapsed: true,
          items: [
            'user_docs/metrics/change_requests',
            'user_docs/metrics/change_requests_accepted',
            'user_docs/metrics/change_request_reviews',
            'user_docs/metrics/change_requests_response_time',
            'user_docs/metrics/change_requests_resolution_duration',
            'user_docs/metrics/change_requests_age',
            'user_docs/metrics/code_changes_lines',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'downstream',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'HyperCRX',
          href: 'https://github.com/hypertrons/hypertrons-crx',
        },
        {
          type: 'link',
          label: 'OpenGalaxy',
          href: 'https://open-galaxy.x-lab.info/',
        },
        {
          type: 'link',
          label: 'OpenAtomDashboard',
          href: 'https://openatom-dashboard.x-lab.info/',
        },
        {
          type: 'link',
          label: 'PolarDBDashboard',
          href: 'https://polardbx.com/dataPanorama',
        },
      ]
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
