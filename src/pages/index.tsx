import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import InstagramFeed from '../components/InstagramFeed';
import SponsorBar from '../components/SponsorBar';
import StatsBar from '../components/StatsBar';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      {/* Floating particles */}
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      {/* Animated darts (decorative) */}
      <div className={styles.darts} aria-hidden="true">
        <div className={styles.dartsInner}>
          <div className={styles.dartAnchor}>
            <img
              className={`${styles.dart} ${styles.dart1}`}
              src="/img/darts.svg"
              alt=""
              draggable={false}
              loading="lazy"
            />
            <img
              className={`${styles.dart} ${styles.dart2}`}
              src="/img/darts.svg"
              alt=""
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src="/img/logo.svg" alt="DC Kirrberg Logo" />
          </div>

          <span className={styles.badge}>Steeldarts | Seit 2021 </span>
        </div>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>Die Sterne vom Tussberch</p>
        <p className={styles.heroTagline}>GOOD DARTS in Homburg an der Saar</p>
        <div className={styles.buttons}>
          <a className={styles.ctaPrimary} href="/mitgliedwerden">
            Mitglied werden
            <span className={styles.ctaIcon}>&#8594;</span>
          </a>
          <a className={styles.ctaSecondary} href="/team">
            <span className={styles.ctaIcon}>&#9432;</span>
            Mehr erfahren
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionDivider() {
  return <div className={styles.sectionDivider}></div>;
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Herzlich Willkommen auf unserer Homepage">
      <HomepageHeader />
      <main>
        <SectionDivider />
        <StatsBar />
        <div className={styles.sectionDividerGradient}></div>
        <HomepageFeatures />
        <div className={styles.sectionDividerGradient}></div>
        <InstagramFeed />
        <SponsorBar />
      </main>
    </Layout>
  );
}