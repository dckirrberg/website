import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">DCK-Forderungsrangliste</h2><br />
          
            <div className="container">
              <div className="row row--no-gutters">
                <div className="col"><b>Raglistenübersicht</b></div>
              </div>
              <div className="column column--no-gutters">
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.online-rangliste.de/index.php?iframe=o0yG4uz9K9Akwukc"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
              />
            </div>
            </div>
            </div> 

            <br></br>

            <div className="container">
              <div className="row row--no-gutters">
                <div className="col"><b>Alle Ergebnisse</b></div>
              </div>
              <div className="column column--no-gutters">
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.online-rangliste.de/index.php?iframe=o0yG4uz9K9Akwukc&ergebnisse=1"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
              />
            </div>
            </div>
            </div> 

          </div>
        </div>
      </div> 
    </Layout>
  );
}