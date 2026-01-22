import React from 'react';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  subtitle: string;
  description: JSX.Element;
  ctaLink?: string;
  ctaLabel?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Vereinsgründung',
    subtitle: 'Unsere Geschichte',
    description: (
      <>
        Bereits im Jahr 2020 entstand die Idee zur Gründung eines eigenen Dartsvereins.
        Am 15.11.2021 versammelten sich 15 begeisterte Freunde des Dartssports zur Gründung des Vereins.
        Laut Satzung ist der DC Kirrberg e.V. zudem Mitglied des LSVS (Landessportverband für das Saarland).
      </>
    ),
  },
  {
    title: 'Trainingszeiten',
    subtitle: 'Wann & Wo',
    description: (
      <>  
        <span className={styles.scheduleItem}>
          <strong>Offenes Training</strong>
          <span>Sportpark Lerchenhübel</span>
          <span>Di, Do, Fr ab 18:00 Uhr</span>
        </span>
        <span className={styles.scheduleItem}>
          <strong>Damentraining</strong>
          <span>Bürgerhaus Kirrberg</span>
          <span>Montags ab 18:00 Uhr</span>
        </span>
        <span className={styles.scheduleItem}>
          <strong>Jugendtraining</strong>
          <span>Sportpark Lerchenhübel</span>
          <span>Mittwochs ab 17:00 Uhr</span>
        </span>
      </>
    ),
  },
  {
    title: 'Mitglied werden',
    subtitle: 'Jetzt anmelden',
    description: (
      <>
        Werde Teil unserer Darts-Familie! Trainiere mit erfahrenen Spielern, wie Jens Kniest & Björn Quoiffy und
        nimm an Ligaspielen teil und erlebe eine starke Gemeinschaft.
      </>
    ),
    ctaLink: '/mitgliedwerden',
    ctaLabel: 'Mehr erfahren',
  },
];

function Feature({title, subtitle, description, ctaLink, ctaLabel, index}: FeatureItem & {index: number}): JSX.Element {
  return (
    <div className="col col--4">
      <div
        className={styles.featureCard}
        style={{ animationDelay: `${0.1 + index * 0.1}s` }}
      >
        <div className={styles.featureHeader}>
          <span className={styles.featureNumber}>0{index + 1}</span>
          <span className={styles.featureSubtitle}>{subtitle}</span>
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <div className={styles.featureDescription}>{description}</div>
        {ctaLink && ctaLabel && (
          <a href={ctaLink} className={styles.featureCta}>
            {ctaLabel}
            <span className={styles.ctaArrow}>→</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
