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
        
        <h4>powered by</h4>
        <a href="https://www.dvag.de/sebastian.bauer/index.html" target="_blank">
        <ThemedImage
          alt="Hauptsponsor" width="300" height="300"
          sources={{
            light: ('/img/sebastian.png'),
            dark: ('/img/sebastian_white.png'),
          }}
        />
        <br></br>
        <a href="https://www.facebook.com/underwoodtattoo/" target="_blank">
        <ThemedImage
          alt="Leger" width="220" height="180"
          sources={{
            light: ('/img/leger.png'),
            dark: ('/img/leger_white.png'),
          }}
        />
        </a>
        <br></br>

        
          <div className="container">
            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="200" height="100" src="/img/logo_clemens.jpg"/>
            </a>

            <a href="https://tassenkarton.de/" target="_blank">
            <ThemedImage
              alt="Sponsor" width="200" height="50"
              sources={{
                light: ('/img/tassen_b.png'),
                dark: ('/img/tassen_w.png'),
              }}
            />
            </a>

            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="200" height="100" src="/img/kirchner.jpg"/>
            </a>
            
           </div>
        </a>
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
        {/* {<SimpleMap /> } */}
      </main>

    </Layout>
  );
}