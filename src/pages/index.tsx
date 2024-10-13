import React, { useRef } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/logo/logo-black-blue-combination-horizontal.png" alt="Logo" /> {/* 插入图片 */}
        <p className="hero__subtitle">{translate({ id: 'homepage.tagLine' })}</p>
        <div className={styles.buttons} onClick={handleAudioPlay}>
          <Link
            className="button button--secondary button--lg"
            onClick={handleAudioPlay}>
            <Translate id="homepage.getStarted" />
          </Link>
          <audio ref={audioRef} src="audio/intro_en.mp3" />
        </div>
      </div>
    </header>
  );
}

export default (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OpenDigger, OpenRank, Open source">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
