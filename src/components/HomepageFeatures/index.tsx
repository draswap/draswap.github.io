import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Everyone as a Market Maker',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        DdraSwap uses a fair and scientific approach to calculations, 
        allowing everyone to participate in adding liquidity 
        and earn tokens without incurring impermanent loss.
      </>
    ),
  },
  {
    title: 'Commercial Ecosystem',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We provide technical support for any commercial payment 
        application system platform community, including Token, 
        Dapp, DeFi, NFT, <code>DEX</code>, blockchain games, and wallets.
      </>
    ),
  },
  {
    title: 'Security and Privacy',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        draSwap is implemented based on EVM technology, offering complete
        secure transactions, tamper-proof on-chain records, payment 
        authentication, and future functionalities.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
