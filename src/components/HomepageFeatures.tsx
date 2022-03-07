/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Vereinsgründung',
    image: '/img/open-book.png',
    description: (
      <>
        Bereits im Jahre 2020 entstand die Idee zur Gründung eines eigenen Dartsvereins.
        Am 15.11.2021 versammelten sich 15 begeisterte Freunde des Dartssports zur Gründung des Vereins.
        Laut Satzung ist der DC Kirrberg e.V. zudem Mitglied des LSVS. (Landessportverband für das Saarland)</>

    ),
  },
  {
    title: 'Trainingszeiten',
    image: '/img/darts.png',
    description: (
      <>
      Wir spielen Steeldarts aus Leidenschaft und bereiten uns aktuell im ersten Gründungsjahr auf den Ligabetrieb 2023 vor! <br></br>
      Unsere aktuelle Trainingszeiten:<br></br>
      Mittwoch: ab 18:00 Uhr<br></br>
      Sonntag:  ab 10:00 Uhr  

      <br></br>Wichtig: Wir bitten alle Besucher einen tagesaktuellen Corona-Schnelltest mitzuführen.  
      </>
    ),
  },
  {
    title: 'Werde ein Teil von uns!',
    image: '/img/wave.png',
    description: (
      <>
        Verwende hierzu das Online-Anmeldeformular und hänge diesem den unterschriebenen <a href="/dateien/Mitgliederantrag.pdf" target="_blank">Antrag für Neumitglieder</a> an.
        Der Antrag beinhaltet zudem ein SEPA-Lastschiftmandat, welches im Falle einer Familienmitgliedschaft lediglich
        von der beitragszahlenden Person auszufüllen ist.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
