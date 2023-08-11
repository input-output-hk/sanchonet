import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { useScroll, useTransform } from "framer-motion";

import styles from "./index.module.css";
import { Cta } from "../components/Cta";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.hero__inner}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Cta size="large" href="/get-started">
              Get Started
            </Cta>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [0, 100],
    ["rgba(1, 107, 130, 0)", "rgba(1, 107, 130, 0.96)"]
  );

  useEffect(() => {
    const el = document.querySelector(".navbar") as HTMLElement;
    return y.onChange((v) => {
      if (el) {
        el.style.backgroundColor = v;
      }
    });
  }, []);

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
