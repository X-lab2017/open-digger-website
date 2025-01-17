import React from 'react';
import Layout from '@theme-original/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import { Assistant } from '@petercatai/assistant';
import '@petercatai/assistant/style';

export default function LayoutWrapper(props: any): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  return (
    <>
      {customFields?.pullNumber &&
        (
          <div>
            <div className="fixed-banner"
              dangerouslySetInnerHTML={{
                __html: translate({ id: 'homepage.pullPreviewWarning' }, { pullNumber: customFields.pullNumber ?? 0 })
              }}
            />
            <div className="banner-placeholder"></div>
          </div>
        )
      }
      <Layout {...props} />
      <Assistant
        token="7de1923b-00ad-4ea9-935b-e8d2eb5c6ecc"
        apiDomain="https://api.petercat.ai"
        assistantMeta={{
          avatar: 'https://open-digger.cn/img/logo/logo-black-blue.png',
          title: 'OpenDigger Assistant'
        }}
        helloMessage='我是 OpenDigger 问答小助手，很高兴跟你聊天~' />
    </>
  );
}
