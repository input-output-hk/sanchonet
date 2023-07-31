import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Become a Sancho SPO',
    src: require('@site/static/img/spo-island.png').default,
    description: (
      <>
        SanchoNet SPOs are the life blood of the network. They forge the blocks
        for all other members. Learn more about becoming a Sancho SPO today!
      </>
    ),
  },
  {
    title: 'Become a Sancho DRep',
    src: require('@site/static/img/drep-island.png').default,
    description: (
      <>
        SanchoNet provides liquid democracy to get high voter turnout. DReps
        are the governing body that are elected directly through delegation
        of stake of the participants. Become a Sancho DRep today!
      </>
    ),
  },
  {
    title: 'Develop on SanchoNet',
    src: require('@site/static/img/dev-island.png').default,
    description: (
      <>
        Calling all developers!!! Do you want to build a cool voting wallet?
        How about a proposal explorer? Well, have we got a job for you! Start
        Integrating your favorite ideas on SanchoNet today!!!
      </>
    ),
  },
  {
    title: 'Uphold the Constitution',
    src: require('@site/static/img/cc-island.png').default,
    description: (
      <>
        SanchoNet needs principled folks that will abide by and uphold our
        constitution. Help blaze the trail for blockchain governance by
        becoming a Constitutional Committee Member!
      </>
    ),
  },
];

function Feature({title, src, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
