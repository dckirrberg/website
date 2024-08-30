import React from "react";
import Layout from "@theme/Layout";
import TeamMember from "../components/member";
import team from "../team.json";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Über uns</h2>
            <br />
              <div className="row">
                <p>
                Unser primäres Ziel ist die Förderung des Dartsports in der Region. Wir möchten sowohl Hobbyspieler als auch ambitionierte 
                Wettkampfspieler unterstützen und ihnen die Möglichkeit bieten, ihre Fähigkeiten zu verbessern und an verschiedenen Wettbewerben teilzunehmen. 
                Unsere Vision ist es, den DC Kirrberg e.V. als führenden Dartverein im Saarland zu etablieren und eine starke Gemeinschaft zu schaffen, die 
                sowohl sportliche Exzellenz als auch soziale Integration fördert.
                </p>
                <p>
                  Nach der Gründungsversammlung wurde der DC Kirrberg e.V.
                  als gemeinnüziger Verein ins Vereinsregister aufgenommen und ist seitdem Mitglied im
                  Landessportverband für das Saarland (LSVS).
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Die Vorstandschaft</h2>
          </div>
          <div>
            {team && 
              team.map((props, idx) => <TeamMember key={idx} {...props} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
