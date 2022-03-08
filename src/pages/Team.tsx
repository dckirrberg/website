import React from "react";
import Layout from "@theme/Layout";
import TeamMember from "../components/member";
import team from "../team.json";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Über uns</h2>
          </div>
          <div className="row">
            <p>
              Darts erfreut sich seit einigen Jahren einer immer größeren
              Beliebtheit. Die Hallen sind gefüllt, die Einschaltquoten steigen
              und der Sport wird auch in den Medien immer bekannter.
              Bereits im Jahr 2020 entstand daher die Idee zur Gründung eines eigenen Dartvereins,
              die durch die Gründungsversammlung vom 15.11.2021 mit der Teilnahme von 15 Personen durchgeführt wurde.
            </p>
            <p>
              Darts war jahrelang eine Randsportart im Schatten der großen
              Events wie Fußball, Handball oder Basketball. Dies hat sich jedoch
              in den letzten Jahren langsam, aber stetig gewandelt.
              Darts ist zum Trendsport geworden und dies hat gleich mehrere
              Gründe. Einer der wichtigsten ist,<a></a> dass Darts wohl eher als
              Volkssport bezeichnet und von jedermann ausgeübt werden kann.
            </p>
            <p>
              Nach der Gründungsversammlung wurde der DC Kirrberg e.V.
              als gemeinnüziger Verein ins Vereinsregister aufgenommen und ist seitdem Mitglied im
              Landesportverband für das Saarland (LSVS).
            </p>
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
