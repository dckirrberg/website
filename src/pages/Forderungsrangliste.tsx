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
            {
          <a
            className="button button--secondary button--lg"
            target="_blank"
            href="https://form.campai.com/Hk1wgT2woVcO">
            Jetzt Registrieren (Vereinsmitglieder)
          </a>
          }
                <br></br> <br></br>
            <div className="container">
              <div className="column column--no-gutters">
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
              <br></br>
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
          </div>
        </div>
      </div> 
    </Layout>
  );
}