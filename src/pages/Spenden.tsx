import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Spenden</h2><br />
            <p>Als neugegründeter Verein verfügen wir momentan über begrenzte Mittel. <br />Um unseren neuen Mitgliedern einen professionellen Einstieg sowie eine gut ausgestattete Trainingsstätte zu ermöglichen, 
              würden wir uns über Geldspenden sehr freuen. <br />
              Für langfristige Unterstützung finden Sie weitere Informationen unter dem Abschnitt <a href="/Sponsoring">Sponsoren</a>. 
            </p>
            <p>Überweist hierzu euren Spendenbetrag an die nachfolgende Kontoverbindung:</p>           
            <div className="container">
              <div className="row row--no-gutters">
                <div className="col">Empfänger:</div>
                <div className="col">DC Kirrberg e.V.</div>
              </div>
              <div className="row row--no-gutters">
                <div className="col">IBAN:</div>
                <div className="col">DE10594500101030607392</div>
              </div>
              <div className="row row--no-gutters">
                <div className="col">BIC:</div>
                <div className="col">SALADE51HOM</div>
              </div>
              <div className="row row--no-gutters">
                <div className="col">Name der Bank:</div>
                <div className="col">Kreissparkasse Saarpfalz</div>
              </div>
            </div> 
            <br />
            {/*             <a
              className="button button--secondary button--lg"
              target="_blank"
              href="http://paypal.de"
              
            >
              PayPal
            </a> */}

            <br />

          </div>

          <div className="text--center margin-bottom--lg">
            <h1>Vielen Dank für deine Unterstützung</h1>
            <p><b>Wichtig:</b> Gerne stellen wir allen Spender:innen eine Zuwendungsbescheinigung aus.
             Sendet uns hierzu einfach eine kurze Mitteilung mit Bitte zur Ausstellung des Spendenbelegs an: </p>
            <a href="mailto:vorstand@dckirrberg.de">vorstand@dckirrberg.de</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}