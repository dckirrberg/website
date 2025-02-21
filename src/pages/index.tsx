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
        <br></br>

          <br></br>
          {
          <a
            className="button button--secondary button--lg"
            target="_blank"
            href="http://antrag.dckirrberg.de/">
            Zum Online-Anmeldeformular
          </a>
          }
        </div>
        <br></br>
          <div className="container">
   
            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="250" height="150" src="/img/logo_clemens.jpg"/>
            </a>

            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="280" height="180" src="/img/HERZ.jpeg"/>
            </a>
            
            <a href="https://www.dvag.de/frank.bauer/index.html" target="_blank">
              <img className="text--center padding-horiz--md" width="250" height="150" src="/img/DVAG_FRANK.png"/>
            </a>
            <br></br><br></br>
            <a href="https://tassenkarton.de/" target="_blank">
            <ThemedImage
              alt="Sponsor" width="300" height="80"
              sources={{
                light: ('/img/tassen_b.png'),
                dark: ('/img/tassen_w.png'),
              }}
            />
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
        {/* {<SimpleMap /> } */}
      </main>

    </Layout>
  );
}