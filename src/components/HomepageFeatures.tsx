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
    title: 'Förderung des Dartsports',
    image: '/img/darts.png',
    description: (
      <>
Wir legen ein großes Gewicht auf die Förderung
von Dartspielern und möchten mit regelmäßigen Veranstaltungen die Beliebtheit und das Interesse der Sportart steigern.
      </>
    ),
  },
  {
    title: 'DC Kirrberg e.V.',
    image: '/img/open-book.png',
    description: (
      <>
        Nach der Gründungsversammlung vom 15.11.2021 wurde der DC Kirrberg als gemeinnüziger Verein eigetragen. Mitglied im Landesportverband für das Saarland (LSVS).  
      </>
    ),
  },
  {
    title: 'Mach jetz mit!',
    image: '/img/wave.png',
    description: (
      <>
        Lade dir hier das Mitgliederformular herunter und schick es per Mail - oder komm einfach im Vereinsheim vorbei! Wir freuen uns auf dich!
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
