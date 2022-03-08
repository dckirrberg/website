import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Sponsoren des Vereins</h2>
          </div>
          <div className="row">
            <p>
              Der DC Kirrberg e.V. legt stets großes Gewicht auf die Förderung
              von Dartspielern und möchte mit regelmäßigen Veranstaltungen und
              Events die Beliebtheit und das Interesse der Sportart steigern.
              Gemeinsam mit Ihrer Hilfe, können wir die Bekanntheit des Vereins stetig steigern und unsere Angebote attraktiv gestalten.
              Alle Informationen sind dem Sponsorenkonzept zu entnehmen. 
              
              Unser Vereinsbeauftragter zum Thema Sponsoring, steht Ihnen selbstverständlich bei Fragen zur Verfügung.
              <br></br>
              <br></br>Ansprechpartner: <br></br>
              <b>Michael Didion</b><br></br>
              E-Mail: <a href="mailto:michael.didion@web.de">michael.didion@web.de</a><br></br>
              Telefon: <a href="tel:+491731325417">+49 173 1325 417</a>
            </p>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h1>Das Sponsorenkonzept</h1>
          </div>
          <div className="row">
          <p>
              Im Sponsorenkonzept stellen wir Ihnen unseren Verein vor und
              zeigen Ihnen die Möglichkeiten auf, wie Sie uns unterstützen und
              gleichzeitig davon profitieren können.
          </p><a></a>
            <a
              className="button button--secondary button--lg btn-block"
              target="_blank"
              href="/dateien/Sponsorenkonzept_DCK.pdf"
            >
              Zum Sponsorenkonzept
            </a>
           <a></a>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h1>Anfragen</h1>
          </div>
          <div className="row">
          <p>
              Über unser Sponsorenformular könnt ihr uns ganz bequem eine unverbindliche Anfrage senden.
              Unser Vereinsbeauftragter zum Thema Sponsoring, nimmt im Anschluss Kontakt mit ihnen auf.
          </p><a></a>
          <a
              className="button button--secondary button--lg"
              target="_blank"
              href="http://sponsoring.dckirrberg.de/"
            >
              Zum Sponsorenformular
            </a>
           <a></a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
