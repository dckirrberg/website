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
         </div> 
          <br></br>
          <div className="text--center margin-bottom--lg">
            <br></br> 
            <h3>SADV Ligaübersicht</h3>
            <a href="https://www.sadv.2k-dart-software.de/index.php/de/component/dartliga/index.php?option=com_dartliga&controller=showligagameplan&layout=showdashboard&filVbKey=100&filCompKey=1&filSaiKey=119&filVbsubKey=31&filStaffKey=793&filStaffFsGrpdataKey=0#" target="_blank">
            Direktlink zum Spielplan
            </a>
            <div className={clsx('hero', styles.heroBanner)}>
             <iframe width="1280" height="820" src="https://www.sadv.2k-dart-software.de/index.php/de/component/dartliga/index.php?option=com_dartliga&controller=showligagameplan&layout=showdashboard&filVbKey=100&filCompKey=1&filSaiKey=119&filVbsubKey=31&filStaffKey=793&filStaffFsGrpdataKey=0#"></iframe>
            </div>
         </div>   
         
         <br></br>
            Der Spielplan steht zudem zum <a href="/dateien/Spielplan 22_23.jpg" target="_blank">Download</a> bereit:
        </div>
      </div>
    </Layout>
  );
}