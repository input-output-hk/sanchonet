import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

// Images
import boat from "@site/static/img/boat.png";
import { Cta } from "../Cta";


type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element | string;
  href?: string;
  cta?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Become a Sancho SPO",
    src: require("@site/static/img/spo-island.png").default,
    description: (
      <>
        SanchoNet SPOs are the life blood of the network. They forge the blocks
        for all other members. Learn more about becoming a Sancho SPO today!
      </>
    ),
    href: '/roles/spo',
    cta: "Learn more"
  },
  {
    title: "Become a Sancho DRep",
    src: require("@site/static/img/drep-island.png").default,
    description: (
      <>
        SanchoNet provides liquid democracy to get high voter turnout. DReps are
        the governing body that are elected directly through delegation of stake
        of the participants. Become a Sancho DRep today!
      </>
    ),
    href: '/roles/drep',
    cta: "Learn more"
  },
  {
    title: "Uphold the Constitution",
    src: require("@site/static/img/cc-island.png").default,
    description: (
      <>
        SanchoNet needs principled folks that will abide by and uphold our
        constitution. Help blaze the trail for blockchain governance by becoming
        a Constitutional Committee Member!
      </>
    ),
    href: '/roles/cc',
    cta: "Learn more"
  },
  {
    title: "Develop on SanchoNet",
    src: require("@site/static/img/dev-island.png").default,
    description: (
      <>
        Calling all developers!!! Do you want to build a cool voting wallet? How
        about a proposal explorer? Well, have we got a job for you! Start
        Integrating your favorite ideas on SanchoNet today!!!
      </>
    ),
    href: '/roles/dev',
    cta: "Learn more"
  }
];

function Feature({ title, src, description, href, cta }: FeatureItem) {
  return (
    <div className={styles.feature}>
      <img src={src} className={styles.feature__img} />
      <h3 className={styles.feature__heading}>{title}</h3>
      <p className={styles.feature__copy}>{description}</p>
      {href && cta ? (
        <Cta appearance="secondary" href={href}>
          {cta}
        </Cta>
      ) : null}
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="container">
      <section className={styles.features}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
        <img className={styles.boat} src={boat} alt="Boat" />
      </section>
    </div>
  );
}
