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
            <p>Als neu gegründeter Verein sind unsere Mittel aktuell noch begrenzt.<br />
              Damit wir unseren Neumitgliedern einen professionellen Einstieg ermöglichen können,
              würden wir uns über eine Geldspende natürlich sehr freuen. 
              Für eine langfristige Unterstützung, findet ihr unter <a href="/Sponsoring">Sponsoren</a> weitere Infornationen. 
            </p>
            <p>Überweist hierzu euren Sprendenbetrag an die nachfolgende Kontoverbindung:</p>
            
              <table>
                <tr>
                    <td>Empfänger:</td>
                    <td>DC Kirrberg e.V.</td>
                </tr>
                <tr>
                    <td>IBAN:</td>
                    <td>DE10594500101030607392</td>
                </tr>
                <tr>
                    <td>BIC:</td>
                    <td>SALADE51HOM</td>
                </tr>
                <tr>
                    <td>Name der Bank:</td>
                    <td>Kreissparkasse Saarpfalz</td>
                </tr>
              </table>  
            
            <a
              className="button button--secondary button--lg"
              target="_blank"
              href="http://paypal.de"
            >
              PayPal
            </a>
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