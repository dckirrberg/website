import React from 'react';
import styles from './SponsorBar.module.css';
import sponsorData from '../../data/sponsors.json';

type Sponsor = {
  name: string;
  url: string;
  logo: string;
};

export default function SponsorBar(): JSX.Element {
  return (
    <section className={styles.sponsorBar}>
      <h2 className={styles.sponsorTitle}>Unsere Sponsoren</h2>
      <div className={styles.sponsorGrid}>
        {sponsorData.sponsors.map((sponsor: Sponsor, idx: number) => (
          <div key={idx} className={styles.sponsorItem}>
            {sponsor.url ? (
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorLink}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={styles.sponsorLogo}
                />
              </a>
            ) : (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className={styles.sponsorLogo}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
