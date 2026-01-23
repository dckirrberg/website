import React from "react";
import Layout from "@theme/Layout";
import MemberCard from "../components/MemberCard";
import team from "../team.json";
import styles from "./Team.module.css";

interface TeamMember {
  name: string;
  title: string;
  image_url: string;
  email: string;
  social_links?: string[];
}

const stats = [
  { value: "✓", label: "SADV Mitglied", icon: "🔶" },
  { value: "150", label: "Mitglieder", icon: "👥" },
  { value: "64", label: "Aktive Spieler", icon: "🎯" },
  { value: "6", label: "Mannschaften", icon: "🏆" },
  { value: "2021", label: "Gegründet", icon: "📅" },
  { value: "✓", label: "LSVS Mitglied", icon: "🔵" },
];

const milestones = [
  {
    date: "November 2021",
    title: "Vereinsgründung",
    description: "15 Gründungsmitglieder heben den DC Kirrberg e.V. aus der Taufe.",
  },
  {
    date: "August 2022",
    title: "Umbau Dartheim",
    description: "Renovierung und Einrichtung des Vereinsheims im Bürgerhaus Kirrberg.",
  },
  {
    date: "September 2022",
    title: "Erste Saison",
    description: "Start im SADV Ligabetrieb mit zwei Mannschaften.",
  },
  {
    date: "Saison 22/23",
    title: "Meister & Aufstieg",
    description: "DCK1 wird Meister der Saarliga 3 - beide Teams steigen auf.",
  },
  {
    date: "2024",
    title: "Sportpark Lerchenhübel",
    description: "Kooperation mit SV Kirrberg 1945 e.V. und Umzug in den Sportpark.",
  },
  {
    date: "Saison 23/24",
    title: "Meister & Aufstieg",
    description: "DCK1 wird Meister der Saarliga 2 - DCK2 steigt in die Saarliga 2 auf.",
  },
  {
    date: "Saison 24/25",
    title: "Meister Saarliga 1",
    description: "1. Mannschaft wird Meister der höchsten saarländischen Liga - als Aufsteiger!",
  },
  {
    date: "2025",
    title: "Jugendabteilung",
    description: "Gründung der Jugendabteilung mit 15 Kindern und Jugendlichen im regelmäßigen Training.",
  },
];

const achievements = [
  { icon: "🏆", title: "Meister Saarliga 1", year: "2024/25" },
  { icon: "🏆", title: "Meister Saarliga 2", year: "2023/24" },
  { icon: "🏆", title: "Meister Saarliga 3", year: "2022/23" },
  { icon: "⬆️", title: "Aufstieg DCK1", year: "22/23 & 23/24" },
  { icon: "⬆️", title: "Aufstieg DCK2", year: "22/23 & 23/24" },
  { icon: "🎯", title: "DDV-Verbandspokal Qualifikation", year: "2024" },
];

const teams = [
  {
    number: "1",
    name: "DC Kirrberg 1",
    league: "Saarliga 1",
    info: "Höchste saarländische Liga - Meister 24/25",
    tableUrl: "https://2k-dart-software.com/frontend/events/10/event/333/table",
  },
  {
    number: "2",
    name: "DC Kirrberg 2",
    league: "Saarliga 2",
    info: "Zweithöchste Spielklasse",
    tableUrl: "https://2k-dart-software.com/frontend/events/10/event/334/table",
  },
  {
    number: "3",
    name: "DC Kirrberg 3",
    league: "Saarliga 3.3",
    info: "Ligabetrieb im SADV",
    tableUrl: "https://2k-dart-software.com/frontend/events/10/event/338/table",
  },
  {
    number: "4",
    name: "DCK Blackout",
    league: "Saarliga 3.4",
    info: "Ligabetrieb im SADV",
    tableUrl: "https://2k-dart-software.com/frontend/events/10/event/339/table",
  },
  {
    number: "5",
    name: "DCK Warriors",
    league: "Saarliga 3.4",
    info: "Ligabetrieb im SADV",
    tableUrl: "https://2k-dart-software.com/frontend/events/10/event/339/table",
  },
  {
    number: "D",
    name: "DCK Steelsisters",
    league: "Saarliga 3.1",
    info: "Ligabetrieb im SADV",
    tableUrl: "https://2k-dart-software.com/frontend/events/10/event/336/table",
  },
];

export default function Team(): JSX.Element {
  return (
    <Layout
      title="Team"
      description="Das Team des DC Kirrberg e.V. - Die Sterne vom Tussberch"
    >
      <main className={styles.teamPage}>
        {/* Hero Section */}
        <section className={styles.teamHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Über uns</h1>
            <div className={styles.teamIntro}>
              <p>
                Unser primäres Ziel ist die Förderung des Dartsports in der Region.
                Wir möchten sowohl Hobbyspieler als auch ambitionierte Wettkampfspieler
                unterstützen und ihnen die Möglichkeit bieten, ihre Fähigkeiten zu
                verbessern und an verschiedenen Wettbewerben teilzunehmen.
              </p>
              <p>
                Unsere Vision ist es, den DC Kirrberg e.V. als führenden Dartverein
                im Saarland zu etablieren und eine starke Gemeinschaft zu schaffen,
                die sowohl sportliche Exzellenz als auch soziale Integration fördert.
              </p>
              <p>
                Nach der Gründungsversammlung wurde der DC Kirrberg e.V. als
                gemeinnütziger Verein ins Vereinsregister aufgenommen und ist
                seitdem Mitglied im Landessportverband für das Saarland (LSVS).
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsBar}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* History Section */}
        <section className={styles.historySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Vereinsgeschichte</h2>
            <p className={styles.sectionSubtitle}>Von 15 auf 150 Mitglieder</p>
          </div>

          <div className={styles.timeline}>
            {milestones.map((milestone, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineDate}>{milestone.date}</div>
                <div className={styles.timelineTitle}>{milestone.title}</div>
                <div className={styles.timelineDescription}>
                  {milestone.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Achievements Section */}
        <section className={styles.achievementsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Erfolge</h2>
            <p className={styles.sectionSubtitle}>Unsere sportlichen Meilensteine</p>
          </div>

          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, idx) => (
              <div key={idx} className={styles.achievementCard}>
                <span className={styles.achievementIcon}>{achievement.icon}</span>
                <div className={styles.achievementContent}>
                  <div className={styles.achievementTitle}>{achievement.title}</div>
                  <div className={styles.achievementYear}>{achievement.year}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Teams Section */}
        <section className={styles.teamsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Unsere Mannschaften</h2>
            <p className={styles.sectionSubtitle}>6 Teams im Ligabetrieb</p>
          </div>

          <div className={styles.teamsGrid}>
            {teams.map((t, idx) => {
              const hasTable = !!t.tableUrl && t.tableUrl.trim() !== "";
              return (
                <div
                  key={idx}
                  className={`${styles.teamCard} ${hasTable ? styles.teamCardClickable : ""}`}
                  onClick={() => {
                    if (hasTable) window.open(t.tableUrl, "_blank", "noopener,noreferrer");
                  }}
                  role={hasTable ? "link" : undefined}
                  tabIndex={hasTable ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (!hasTable) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(t.tableUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <div className={styles.teamCardHeader}>
                    <span className={styles.teamNumber}>{t.number}</span>
                    <span className={styles.teamName}>{t.name}</span>
                  </div>

                  <span className={styles.teamLeague}>{t.league}</span>
                  <div className={styles.teamInfo}>{t.info}</div>

                  {hasTable && (
                    <div className={styles.teamActions}>
                      <a
                        href={t.tableUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.teamActionButton}
                        onClick={(e) => e.stopPropagation()} /* verhindert Card-Click Doppel-Open */
                      >
                        Tabelle öffnen <span className={styles.teamActionArrow}>↗</span>
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

        {/* Board Section */}
        <section className={styles.boardSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Die Vorstandschaft</h2>
            <p className={styles.sectionSubtitle}>Das Herz des Vereins</p>
          </div>

          <div className={styles.teamGrid}>
            {team &&
              (team as TeamMember[]).map((member, idx) => (
                <MemberCard
                  key={idx}
                  name={member.name}
                  title={member.title}
                  image_url={member.image_url}
                  email={member.email}
                  index={idx}
                />
              ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
