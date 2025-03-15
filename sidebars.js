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
    'user-docs/intro',
    {
      type: 'category',
      label: 'data_sources',
      collapsed: true,
      items: [
        'user-docs/data-sources/github',
        'user-docs/data-sources/gitee',
      ],
    },
    'user-docs/label-data',
    {
      type: 'category',
      label: 'metrics',
      collapsed: false,
      items: [
        'user-docs/metrics/metrics-usage-guide',
        'user-docs/metrics/playground',
        {
          type: 'category',
          label: 'openrank',
          link: {
            type: 'doc',
            id: 'user-docs/metrics/openrank',
          },
          collapsed: false,
          items: [
            'user-docs/metrics/global-openrank',
            'user-docs/metrics/community-openrank',
          ],
        },
        {
          type: 'category',
          label: 'statistics',
          collapsed: true,
          items: [
            'user-docs/metrics/activity',
            'user-docs/metrics/technical-fork',
            'user-docs/metrics/activity-dates-and-times',
          ],
        },
        {
          type: 'category',
          label: 'developers',
          collapsed: true,
          items: [
            'user-docs/metrics/new-contributors',
            'user-docs/metrics/contributors',
            'user-docs/metrics/inactive-contributors',
            'user-docs/metrics/contributor-absence-factor',
          ],
        },
        {
          type: 'category',
          label: 'issues',
          collapsed: true,
          items: [
            'user-docs/metrics/issue-new',
            'user-docs/metrics/issue-closed',
            'user-docs/metrics/issue-response-time',
            'user-docs/metrics/issue-resolution-duration',
            'user-docs/metrics/issue-age',
          ],
        },
        {
          type: 'category',
          label: 'change_requests',
          collapsed: true,
          items: [
            'user-docs/metrics/change-requests',
            'user-docs/metrics/change-requests-accepted',
            'user-docs/metrics/change-request-reviews',
            'user-docs/metrics/change-requests-response-time',
            'user-docs/metrics/change-requests-resolution-duration',
            'user-docs/metrics/change-requests-age',
            'user-docs/metrics/code-changes-lines',
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
  ],
  developerDocSidebar: [
    'dev-docs/intro',
    'dev-docs/database-table-schema',
    'dev-docs/metrics',
    'dev-docs/cron-task',
    {
      type: 'category',
      label: 'jupyter_notebook',
      collapsed: false,
      items: [
        'dev-docs/jupyter-notebook/node-kernel',
        'dev-docs/jupyter-notebook/python-kernel',
      ]
    },
    {
      type: 'category',
      label: 'tools',
      collapsed: false,
      items: [
        'dev-docs/tools/leaderboard',
      ]
    }
  ],
  activityDocSidebar: [
    'activity-docs/gsoc25',
  ]
};

export default sidebars;
