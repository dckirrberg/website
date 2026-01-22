import React from "react";
import Layout from "@theme/Layout";
import styles from "./Downloads.module.css";

type QuickLink = {
  icon: string;
  label: string;
  href: string;
  external?: boolean;
};

const dokumenteLinks: QuickLink[] = [
  { icon: "📝", label: "Mitgliedsantrag.pdf", href: "/dateien/Mitgliederantrag.pdf", external: true },
  { icon: "📜", label: "Vereinssatzung.pdf", href: "/dateien/DC_Kirrberg_Satzung.pdf", external: true },
  { icon: "💶", label: "Beitragsordnung.pdf", href: "/dateien/Beitragsordnung.pdf", external: true },
  { icon: "🏛️", label: "Geschäftsordnung Mitgliederversammlung.pdf", href: "/dateien/GO Mitgliederversammlung.pdf", external: true },
  { icon: "🗳️", label: "Wahlordnung.pdf", href: "/dateien/Wahlordnung.pdf", external: true },
  { icon: "🤝", label: "Sponsorenkonzept_DCK.pdf", href: "/dateien/Sponsorenkonzept_DCK.pdf", external: true },
];

const kalenderLinks: QuickLink[] = [
  { icon: "📅", label: "ALLE Teams – Spielplan 2025/2026.ics", href: "/dateien/DC_Kirrberg_ALLE_Teams_Spielplan_2025_2026.ics", external: true },
  { icon: "🏠📅", label: "ALLE Teams – Heimspiele 2025/2026.ics", href: "/dateien/DC_Kirrberg_ALLE_Teams_HEIMSPIELE_2025_2026.ics", external: true },
  { icon: "1️⃣", label: "DC Kirrberg 1 – Spielplan 2025/2026.ics", href: "/dateien/DC_Kirrberg_1_Spielplan_2025_2026.ics", external: true },
  { icon: "2️⃣", label: "DC Kirrberg 2 – Spielplan 2025/2026.ics", href: "/dateien/DC_Kirrberg_2_Spielplan_2025_2026.ics", external: true },
  { icon: "3️⃣", label: "DC Kirrberg 3 – Spielplan 2025/2026.ics", href: "/dateien/DC_Kirrberg_3_Spielplan_2025_2026.ics", external: true },
  { icon: "⚔️", label: "DCK Warriors – Spielplan 2025/2026.ics", href: "/dateien/DCK_Warriors_Spielplan_2025_2026.ics", external: true },
  { icon: "🖤", label: "DCK Blackout – Spielplan 2025/2026.ics", href: "/dateien/DCK_Blackout_Spielplan_2025_2026.ics", external: true },
  { icon: "👑", label: "DCK Steelsisters – Spielplan 2025/2026.ics", href: "/dateien/DCK_Steelsisters_Spielplan_2025_2026.ics", external: true },
];

function QuickLinksGrid({ links }: { links: QuickLink[] }) {
  return (
    <div className={styles.quickLinksGrid}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={styles.quickLink}
        >
          <span className={styles.quickLinkIcon}>{link.icon}</span>
          {link.label}
          {link.external && <span className={styles.quickLinkExternal}>↗</span>}
        </a>
      ))}
    </div>
  );
}

export default function Downloads(): JSX.Element {
  return (
    <Layout title="Downloads" description="Downloads und Dokumente des DC Kirrberg e.V.">
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Downloads</h1>
            <p className={styles.heroSubtitle}>Alles Wichtige direkt zum Download</p>
            <p className={styles.heroIntro}>
              Dokumente, Satzung, Ordnungen – und Kalenderimporte für alle Teams.
            </p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* Dokumente */}
        <section className={styles.quickLinksSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Dokumente</h2>
            <p className={styles.sectionSubtitle}>PDFs rund um Verein & Mitgliedschaft</p>
          </div>

          <QuickLinksGrid links={dokumenteLinks} />
        </section>

        <div className={styles.divider} />

        {/* Kalender */}
        <section className={styles.quickLinksSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Kalenderimport</h2>
            <p className={styles.sectionSubtitle}>
              ICS-Dateien zum Import in Google/Apple/Outlook Kalender
            </p>
          </div>

          <QuickLinksGrid links={kalenderLinks} />
        </section>

        <div className={styles.divider} />

        {/* Info */}
        <section className={styles.infoSection}>
          <div className={styles.infoContent}>
            <p className={styles.infoText}>
              Tipp: In vielen Kalender-Apps kannst du die <strong>.ics</strong>-Datei
              direkt öffnen – der Import startet dann automatisch.
            </p>
            <a href="mailto:vorstand@dckirrberg.de" className={styles.infoLink}>
              vorstand@dckirrberg.de <span>→</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
