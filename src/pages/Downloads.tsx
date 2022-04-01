import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Downloads</h2><br />
            <p>Hier findest du alle wichtigen Dokumente direkt zum Download!</p>
            <div className="container">
              <div className="row row--no-gutters">
                <div className="col"><b>Dokumente</b></div>
              </div>
              <div className="column column--no-gutters">
              <div className="col"><a href="/dateien/Mitgliederantrag.pdf" target="_blank">Mitgliedsantrag.pdf</a></div>
              {/*
                <div className="col"><a href="/dateien/DC_Kirrberg_Satzung.pdf" target="_blank">Vereinssatzung.pdf</a></div>
                
                <div className="col"><a href="/dateien/Beitragsordnung.pdf" target="_blank">Beitragsordnung.pdf</a></div>
                <div className="col"><a href="/dateien/GO Mitgliederversammlung.pdf" target="_blank">Geschäftsordnung der Mitgliederversammlung.pdf</a></div>
                <div className="col"><a href="/dateien/Wahlordnung.pdf" target="_blank">Wahlordnung.pdf</a></div>
                */}
              </div>
            </div> 

            <br />

            <div className="container">
              <div className="row row--no-gutters">
                <div className="col"><b>Sonstiges</b></div>
              </div>
              <div className="column column--no-gutters">
                <div className="col"><a href="/dateien/Kreuztabelle.pdf" target="_blank">Kreuztabelle.pdf</a></div>
                <div className="col"> <a href="/dateien/Sponsorenkonzept_DCK.pdf" target="_blank">Sponsorenkonzept.pdf</a></div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </Layout>
  );
}