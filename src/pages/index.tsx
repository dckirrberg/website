import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import ThemedImage from '@theme/ThemedImage';
import SimpleMap from '../components/google_map.component'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.buttons}>
          <div className={styles.logo_wrapper}>
             <img className={styles.logo} src="/img/logo.svg" />
          </div>
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/*
          <a
            className="button button--secondary button--lg"
            target="_blank"
            href="http://online-mitgliedsantrag.dckirrberg.de/">
            Zum Online-Anmeldeformular
          </a>
          */}
        </div>
        <div className="container">
        <h4>powered by</h4>
        <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="200" height="100" src="/img/logo_clemens.jpg"/>
            </a>
        <a href="https://www.dvag.de/sebastian.bauer/index.html" target="_blank">
        <ThemedImage
          alt="Hauptsponsor" width="200" height="200"
          sources={{
            light: ('/img/sebastian.png'),
            dark: ('/img/sebastian_white.png'),
          }}
        />
            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="200" height="100" src="/img/kirchner.jpg"/>
            </a>
            </a>
          </div>
        
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Herzlich Willkommen auf unserer Hompepage">
      <HomepageHeader />
      <main>
        <HomepageFeatures />  
        {/* <SimpleMap /> */}
      </main>

    </Layout>
  );
}
