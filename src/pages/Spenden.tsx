import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Spenden</h2><br></br>
            <p>Als neu gegründeter Verein sind unsere Mittel aktuell noch begrenzt.<br></br>
              Damit wir unseren Neumitgliedern einen professionellen Einstieg ermöglichen können,
              würden wir uns über eine Geldspenden sehr freuen. 
              Für eine langfristige Unterstützung, findet ihr unter <a href="/Sponsoring">Sponsoren</a> weitere Infornationen. 
            </p>
            <p>Kontodaten</p>
            <p>Paypal</p>

            <p>Die Ausstellung der Zuwendungsbescheinigung erfolgt möglichst zügig nach Eingang der Zahlung.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
