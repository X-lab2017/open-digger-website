import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '丰富的指标实现',
    url: 'https://chaoss.community/',
    Svg: require('@site/static/img/rich_metrics.svg').default,
    description: (
      <>
        OpenDigger 实现了 <a href='https://chaoss.community/metrics/'>CHAOSS 社区</a>开发的各种指标，同时也实现了如 <a href="/blog/awesome-openrank">OpenRank</a> 等 X-lab 开发的指标。
      </>
    ),
  },
  {
    title: '简单的上手体验',
    url: '/docs/intro',
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <>
        OpenDigger 将所有实现的指标导出为静态数据文件发不到云存储中，供任何开发者和应用随意使用。
      </>
    ),
  },
  {
    title: '多样的下游应用',
    Svg: require('@site/static/img/various_applications.svg').default,
    description: (
      <>
        OpenDigger 有多样的下游衍生应用，例如 <a href="https://open-leaderboard.x-lab.info/">OpenLeaderboard</a>、 <a href="https://github.com/hypertrons/hypertrons-crx">HyperCRX</a>、 <a href="https://open-galaxy.x-lab.info/">OpenGalaxy</a> 等。
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={url}>{title}</a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
