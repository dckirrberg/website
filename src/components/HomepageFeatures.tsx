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
        Bereits im Jahr 2020 entstand die Idee zur Gründung eines eigenen Dartsvereins.
        Am 15.11.2021 versammelten sich 15 begeisterte Freunde des Dartssports zur Gründung des Vereins.
        Laut Satzung ist der DC Kirrberg e.V.  zudem Mitglied des LSVS. (Landessportverband für das Saarland)</>

    ),
  },
  {
    title: 'Trainingszeiten',
    image: '/img/schedule.png',
    description: (
      <>
      <b>Montag: ab 18:00 Uhr<br />
      Mittwoch:  ab 18:00 Uhr  <br />
      <b>Vereinsheim:</b><br />
      </b>Bürgerhaus Kirrberg<br />Ortsstraße 1 | Homburg/Kirrberg<br />
      </>
    ),
  },
  {
    title: 'Werde Mitglied im Verein!',
    image: '/img/thumpup.png',
    description: (
     
      <>
      {/*
        Verwende hierzu das <b>Online-Anmeldeformular</b> und hänge diesem den unterschriebenen <a href="/dateien/Mitgliederantrag.pdf" target="_blank">Antrag für Neumitglieder</a> an.
        Alternativ kann der Antrag für Neumitglieder auch per <a href="mailto:vorstand@dckirrberg.de">E-Mail</a> / <b>persönlich</b> an uns übergeben werden.
        */}
        Sende uns hierzu den unterschriebenen <a href="/dateien/Mitgliederantrag.pdf" target="_blank">Antrag für Neumitglieder</a> per <a href="mailto:vorstand@dckirrberg.de">E-Mail</a> zu. 
        Das Anmeldeformular kann auch alternativ direkt in unsere Trainigsstätte unterzeichnet werden.
      </>
       

    ),
  },
];
/** Der Antrag beinhaltet zudem ein SEPA-Lastschiftmandat, welches im Falle einer Familienmitgliedschaft lediglich
von der beitragszahlenden Person auszufüllen ist. */

function Feature({title, image, description}: FeatureItem): JSX.Element {
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
