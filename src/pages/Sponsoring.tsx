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
            <h2 className="hero__title margin--none">Sponsorenbeauftragter & Sponsoren des Vereins</h2>
            <div className="row">
            <br></br>
              <p>
                Darts hat sich in den letzten Jahren zu einem beliebten Trendsport entwickelt, der weltweit 
                Millionen von Menschen begeistert. Unser DC Kirrberg e.V. spiegelt diese wachsende Popularität wider. Gegründet im 
                November 2021 mit 15 Mitgliedern, sind wir schnell gewachsen und zählen mittlerweile 121 Mitglieder, davon 51 aktive Spieler/innen. 
                Unsere 1. Mannschaft spielt ab der Saison 24/25 in der höchsten saarländischen Liga, und unsere 2. Mannschaft tritt in der 
                zweithöchsten Spielklasse an. Dieser rasante Anstieg und die sportlichen Erfolge zeigen das immense Potenzial unseres Vereins und des Dartsports
                im Allgemeinen. Mit Ihrer Unterstützung als Sponsor können wir diese Erfolgsgeschichte fortsetzen und die Zukunft des Dartsports aktiv mitgestalten.
                <br></br>
                Alle Informationen sind dem Sponsorenkonzept zu entnehmen.<br></br>
                Unser Sponsorenbeauftragter, steht Ihnen selbstverständlich bei Fragen zur Verfügung:
                <br /><br />
            
              <div className="text--center margin-bottom--lg">
                <ThemedImage
                  alt="Hauptsponsor" width="300px" height="300px"
                  sources={{
                    light: ('/dateien/vorstand/Michael.Didion.jpeg'),
                    dark: ('/dateien/vorstand/Michael.Didion.jpeg'),
                  }}
                />
              </div> 
      
                <div className="column column--no-gutters">
                          <div className="col"><b>Michael Didion:</b></div>
                          <div className="col"><a href="mailto:michael.didion@dckirrberg.de">michael.didion@dckirrberg.de</a></div>
                          <br /><br />
                          <h1>Unser Sponsorenkonzept</h1>

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
                </div>
              </p>
              
            </div>

            <br />

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
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </Layout>
  );
}