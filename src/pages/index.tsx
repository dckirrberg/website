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
   
            <a href="https://www.sonderpreis-baumarkt.de/" target="_blank">
              <img className="text--center padding-horiz--md" width="180" height="150" src="/img/baumarkt.jpg"/>
            </a>

            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="280" height="180" src="/img/HERZ.jpeg"/>
            </a>
                        <a href="https://sdwg.de//" target="_blank">
            <ThemedImage
              alt="Sponsor" width="200" height="70"
              sources={{
                light: ('/img/schlag.png'),
                dark: ('/img/schlag.png'),
              }}
            />
            </a>

            <br></br><br></br>
              <img className="text--center padding-horiz--md" width="210" height="150" src="/img/DVAG_FRANK.png"/>
            <img className="text--center padding-horiz--md" width="210" height="150" src="/img/bariel.jpeg"/>              
           <br></br>
            <a href="https://www.dvag.de/frank.bauer/index.html" target="_blank">
            </a>
              <a href="https://zdart.de/" target="_blank">
              <img className="text--center padding-horiz--md" width="220" height="170" src="/img/zeise.png"/>
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