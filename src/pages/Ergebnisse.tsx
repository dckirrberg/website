import React from "react";
import Layout from "@theme/Layout";
import styles from "./Ergebnisse.module.css";

const teams = [
  {
    badge: "1",
    name: "DC Kirrberg 1",
    league: "Saarliga 1",
    tableUrl: "https://2k-dart-software.com/frontend/events/10/event/333/table",
  },
  { badge: "2", name: "DC Kirrberg 2", league: "Saarliga 2", tableUrl: "https://2k-dart-software.com/frontend/events/10/event/334/table" },
  { badge: "3", name: "DC Kirrberg 3", league: "Saarliga 3.3", tableUrl: "https://2k-dart-software.com/frontend/events/10/event/338/table" },
  { badge: "D", name: "DCK Steelsisters", league: "Saarliga 3.1", tableUrl: "https://2k-dart-software.com/frontend/events/10/event/336/table" },
  { badge: "B", name: "DCK Blackout", league: "Saarliga 3.4", tableUrl: "https://2k-dart-software.com/frontend/events/10/event/339/table" },
  { badge: "W", name: "DCK Warriors", league: "Saarliga 3.4", tableUrl: "https://2k-dart-software.com/frontend/events/10/event/339/table" },
];

const quickLinks = [
  {
    icon: "📊",
    label: "Saarliga Spielplan & Tabellen",
    href: "https://spielplan.dckirrberg.de",
    external: true,
  },
  {
    icon: "🔶",
    label: "Saarländischer Dartverband",
    href: "https://www.sadv.de",
    external: true,
  },
  {
    icon: "🏅",
    label: "Tussberch Masters 25/26",
    href: "https://masters.dckirrberg.de",
    external: true,
  },
];

export default function Ergebnisse(): JSX.Element {
  return (
    <Layout
      title="Ergebnisse"
      description="Ergebnisse und Spielplan des DC Kirrberg e.V."
    >
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Ergebnisse</h1>
            <p className={styles.heroSubtitle}>Unsere Aktiven im Ligabetrieb</p>
            <p className={styles.heroIntro}>
              Mit sechs Mannschaften sind wir im SADV-Ligabetrieb vertreten.
              Unsere erste Mannschaft spielt in der höchsten saarländischen
              Liga, der Saarliga 1.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Quick Links */}
        <section className={styles.quickLinksSection}>
          <div className={styles.quickLinksGrid}>
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={styles.quickLink}
              >
                <span className={styles.quickLinkIcon}>{link.icon}</span>
                {link.label}
                {link.external && (
                  <span className={styles.quickLinkExternal}>↗</span>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Teams Overview */}
        <section className={styles.teamsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Unsere Mannschaften</h2>
            <p className={styles.sectionSubtitle}>
              6 Teams im aktiven Spielbetrieb
            </p>
          </div>

          <div className={styles.teamsGrid}>
            {teams.map((team, idx) => {
              const hasTable = !!team.tableUrl && team.tableUrl.trim() !== "";

              return (
                <div
                  key={idx}
                  className={`${styles.teamCard} ${
                    hasTable ? styles.teamCardClickable : ""
                  }`}
                  onClick={() => {
                    if (hasTable) {
                      window.open(team.tableUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  role={hasTable ? "link" : undefined}
                  tabIndex={hasTable ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (!hasTable) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(team.tableUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <div className={styles.teamBadge}>{team.badge}</div>
                  <div className={styles.teamName}>{team.name}</div>
                  <div className={styles.teamLeague}>{team.league}</div>

                  {hasTable && (
                    <div className={styles.teamActions}>
                      <a
                        href={team.tableUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.teamActionButton}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Zur Tabelle {" "}
                        <span className={styles.teamActionArrow}>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Team Photo Section */}
        <section className={styles.teamPhotoSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Saisonkader 24/25</h2>
            <p className={styles.sectionSubtitle}>
              Unsere Spielerinnen und Spieler
            </p>
          </div>

          <div className={styles.teamPhotoContainer}>
            <div className={styles.teamPhotoWrapper}>
              <img
                src="/dateien/team/Mannschaft.jpg"
                alt="DC Kirrberg Mannschaft"
                className={styles.teamPhoto}
              />
              <div className={styles.teamPhotoCaption}>
                <span className={styles.captionText}>
                  DC Kirrberg e.V. -{" "}
                  <span className={styles.captionSeason}>Saison 2024/25</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Spielplan Section */}
        <section className={styles.spielplanSection}>
          <div className={styles.spielplanContainer}>
            <div className={styles.spielplanCard}>
              <div className={styles.spielplanHeader}>
                <h3 className={styles.spielplanTitle}>
                  <span className={styles.spielplanTitleIcon}>📊</span>
                  SADV Ligaübersicht
                </h3>
                <a
                  href="https://spielplan.dckirrberg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.spielplanLink}
                >
                  In neuem Tab öffnen
                  <span>↗</span>
                </a>
              </div>
              <div className={styles.iframeWrapper}>
                <iframe
                  src="https://spielplan.dckirrberg.de"
                  title="SADV Spielplan"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Info Section */}
        <section className={styles.infoSection}>
          <div className={styles.infoContent}>
            <p className={styles.infoText}>
              Die Ergebnisse und Tabellen werden vom Saarländischen
              Dartverband e.V. (SADV) bereitgestellt und automatisch
              aktualisiert. Bei Fragen zu Spielterminen oder Ergebnissen
              wende dich an unseren Sportwart.
            </p>
            <a href="mailto:vorstand@dckirrberg.de" className={styles.infoLink}>
              vorstand@dckirrberg.de
              <span>→</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
