import React from "react";
import Layout from "@theme/Layout";
import ThemedImage from '@theme/ThemedImage';
import styles from "./index.module.css";
import clsx from 'clsx';

export default function Teams() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
         <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Unsere Mannschaften & Ergebnisse</h2>  
            <br></br> 
            <h3>Unsere Teams</h3>
            Wir freuen uns mit direkt 2 Teams in die neue Saision starten zu dürfen.
            <br></br>
            Die Mannschaften inkl. Fotos, werden in den kommenden Wochen hier veröffentlicht.

            <br></br>
            Der Spielplan steht zudem im Bereich "Downloads" zum  <a href="/dateien/Spielplan 22_23.jpg" target="_blank">Download</a> bereit:
            <br></br><br></br>           
          </div> 
          <br></br>
          <div className="text--center margin-bottom--lg">
            <br></br> 
            <h3>Spielplan | Tabelle | Spieler</h3>
            <div className={clsx('hero', styles.heroBanner)}>
             <iframe width="1280" height="820" src="https://www.sadv.2k-dart-software.de/index.php/de/component/dartliga/index.php?option=com_dartliga&controller=showligagameplan&layout=showdashboard&filVbKey=100&filCompKey=1&filSaiKey=119&filVbsubKey=31&filStaffKey=793&filStaffFsGrpdataKey=0#"></iframe>
  
            </div>
         </div>   
        </div>
      </div>
    </Layout>
  );
}