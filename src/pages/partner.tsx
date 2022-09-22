import React from "react";
import Layout from "@theme/Layout";
import ThemedImage from '@theme/ThemedImage';
import styles from "./index.module.css";

export default function partner() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Partnerprogramm</h2>
            <br />
            <h3>Deutsche Glasfaser DE</h3>

            <div className="column">
              <p>
              Als Partner der DGF werben wir durch die Platzierung von Werbebannern und erhalten somit Provisionen für abgeschlossene Glasfaser-Verträge, 
              die über die Banner auf unserer Website generiert werden. Dieses Vergütungsprinzip heißt <a>Affiliate </a>
              und ist eine gängige Werbeform zwischen Unternehmen und Vereinen oder Organisationen. 

              Mit jedem abeschlossenen Vertrag sorgen Sie nicht nur für ein stabiles Netz für euer Zuhause, sondern unterstützen dabei auch noch 
              unsere Vereinskasse. 
              <br></br><br></br><a><b>
              Klickt hierzu ganz einfach auf den nachfolgenden Werbebanner auf dieser Seite bzw. unserer Startseite und schließt euren Vertrag noch heute ab:</b></a>

              </p>
            </div>
            <a rel="sponsored" href="https://www.awin1.com/cread.php?s=2314123&v=11463&q=332748&r=1151355" target="_blank">
                <img src="https://www.awin1.com/cshow.php?s=2314123&v=11463&q=332748&r=1151355"></img>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}