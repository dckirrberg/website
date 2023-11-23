import React from "react";
import Layout from "@theme/Layout";
import ThemedImage from '@theme/ThemedImage';
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Sponsoren des Vereins</h2>
            <br />
            <h3>Hauptsponsor</h3>
            <a href="https://www.dvag.de/sebastian.bauer/index.html" target="_blank">

            <ThemedImage
              alt="Hauptsponsor" width="400" height="400"
              sources={{
                light: ('/img/sebastian.png'),
                dark: ('/img/sebastian_white.png'),
              }}
            />
            </a>

            <h4>Weitere Sponsoren</h4>
            <div className="container">
              <a href="https://www.facebook.com/underwoodtattoo/" target="_blank">
                <ThemedImage
                  alt="Leger" width="220" height="180"
                  sources={{
                  light: ('/img/leger.png'),
                  dark: ('/img/leger_white.png'),
                  }}
                />
              </a>
           </div>
            <div className="container">
            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="290" height="170" src="/img/logo_clemens.jpg"/>
            </a>

            <a href="https://tassenkarton.de/" target="_blank">
            <ThemedImage
              alt="Hauptsponsor" width="200" height="50"
              sources={{
                light: ('/img/tassen_b.png'),
                dark: ('/img/tassen_w.png'),
              }}
            />
            </a>
            <a href="" target="_blank">
              <img className="text--center padding-horiz--md" width="290" height="170" src="/img/kirchner.jpg"/>
            </a>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <p>
                Der DC Kirrberg e.V. legt stets großes Gewicht auf die Förderung
                von Dartspielern und möchte mit regelmäßigen Veranstaltungen und
                Events die Beliebtheit und das Interesse der Sportart steigern.
                Gemeinsam mit Ihrer Hilfe, können wir die Bekanntheit des Vereins stetig steigern und unsere Angebote attraktiv gestalten.
                {/* Alle Informationen sind dem Sponsorenkonzept zu entnehmen. */}
                <br></br>
                Unser 1. Vositzender, steht Ihnen selbstverständlich bei Fragen zur Verfügung:
                <br /><br />
                <div className="column column--no-gutters">
                          <div className="col"><b>Markus Didion:</b></div>
                          <div className="col"><a href="mailto:markus.didion@dckirrberg.de">markus.didion@dckirrberg.de</a></div>
                </div>
              </p>
            </div>

            {/* <br /><br />
            <h1>Unser Sponsorenkonzept</h1>

            <p>
                Im Sponsorenkonzept stellen wir Ihnen unseren Verein vor und
                zeigen Ihnen die Möglichkeiten auf, wie Sie uns unterstützen und
                gleichzeitig davon profitieren können.
                Über unser Sponsorenformular könnt ihr uns ganz bequem eine unverbindliche Anfrage senden.
                Unser Vereinsbeauftragter zum Thema Sponsoring, nimmt im Anschluss Kontakt mit ihnen auf.
            </p><a></a>
              <a
                className="button button--secondary button--lg btn-block"
                target="_blank"
                href="/dateien/Sponsorenkonzept_DCK.pdf"
              >
                Zum Sponsorenkonzept
              </a>
            <a></a>
            <br />
            <p> */}

            {/* </p><a></a> */}
            {/* <a
                className="button button--secondary button--lg"
                target="_blank"
                href="http://sponsoring.dckirrberg.de/"
              >
                Zum Online-Sponsorenformular
              </a> */}
            <a></a>
          </div>
        </div>
      </div>
    </Layout>
  );
}