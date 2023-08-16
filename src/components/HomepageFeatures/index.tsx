import React, { ComponentType } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// Images
//@ts-ignore
import boat from "@site/static/img/boat.png";
//@ts-ignore
import spoIcon from "@site/static/img/spo-icon.png";
//@ts-ignore
import drepIcon from "@site/static/img/drep-icon.png";
//@ts-ignore
import developIcon from "@site/static/img/develop-icon.png";

// import CCMap from "@site/static/img/cc-map.svg";

// trail
import TrailLeft from "@site/static/img/trail/left.svg";
import TrailRight from "@site/static/img/trail/right.svg";
import TrailBottom from "@site/static/img/trail/bottom.svg";

import { Cta } from "../Cta";

type FeatureItem = {
  title: string;
  img: string | JSX.Element;
  description: JSX.Element | string;
  href?: string;
  cta?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Become a Sancho SPO",
    img: <img src={spoIcon} width={155} height={233} />,
    description: (
      <>
        SanchoNet SPOs are the life blood of the network. They forge the blocks
        for all other members. Learn more about becoming a Sancho SPO today!
      </>
    ),
    href: "/roles/spo",
    cta: "Learn more"
  },
  {
    title: "Become a Sancho DRep",
    img: <img src={drepIcon} width={154} height={213} />,
    description: (
      <>
        SanchoNet provides liquid democracy to get high voter turnout. DReps are
        the governing body that are elected directly through delegation of stake
        of the participants. Become a Sancho DRep today!
      </>
    ),
    href: "/roles/drep",
    cta: "Learn more"
  },
  /*{
    title: "Uphold the Constitution",
    img: CCMap,
    description: (
      <>
        SanchoNet needs principled folks that will abide by and uphold our
        constitution. Help blaze the trail for blockchain governance by becoming
        a Constitutional Committee Member!
      </>
    ),
    href: '/roles/cc',
    cta: "Learn more"
  },*/
  {
    title: "Develop on SanchoNet",
    img: <img src={developIcon} width={218} height={193} />,
    description: (
      <>
        Calling all developers!!! Do you want to build a cool voting wallet? How
        about a proposal explorer? Well, have we got a job for you! Start
        Integrating your favorite ideas on SanchoNet today!!!
      </>
    ),
    href: "/roles/dev",
    cta: "Learn more"
  }
];

function Feature({
  title,
  img: Image,
  description,
  href,
  cta
}: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className={styles["feature__img-container"]}>
        {typeof Image === "string" ? (
          <img src={Image} className={styles.feature__img} />
        ) : (
          Image
        )}
      </div>
      <div className={styles["feature__text-container"]}>
        <h2 className={styles.feature__heading}>{title}</h2>
        <p className={styles.feature__copy}>{description}</p>
        {href && cta ? (
          <Cta appearance="secondary" href={href}>
            {cta}
          </Cta>
        ) : null}
      </div>
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
        <TrailLeft className={clsx(styles.trail, styles["trail--left"])} />
        <TrailRight className={clsx(styles.trail, styles["trail--right"])} />
        <TrailBottom className={clsx(styles.trail, styles["trail--bottom"])} />
        <img className={styles.boat} src={boat} alt="Boat" />
      </section>
    </div>
  );
}
