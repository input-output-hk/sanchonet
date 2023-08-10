import React, { ComponentType } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

// Images
import boat from "@site/static/img/boat.png";
import spoPirate from "@site/static/img/spo-pirate.svg";
import drepPirate from "@site/static/img/drep-pirate.svg";
import book from "@site/static/img/constitution-book.svg";
import shovel from "@site/static/img/develop-shovel.svg";
import { Cta } from "../Cta";


type FeatureItem = {
  title: string;
  img: string | ComponentType<any>;
  description: JSX.Element | string;
  href?: string;
  cta?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Become a Sancho SPO",
    img: spoPirate,
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
    img: drepPirate,
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
    img: book,
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
    img: shovel,
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

function Feature({ title, img: Image, description, href, cta }: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className={styles['feature__img-container']}>
      {typeof Image === "string" ? <img src={Image} className={styles.feature__img} /> : <Image />}
      </div>
      <h2 className={styles.feature__heading}>{title}</h2>
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
