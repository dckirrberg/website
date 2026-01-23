import React from "react";
import Layout from "@theme/Layout";
import styles from "./Spenden.module.css";

const reasons = [
  {
    icon: "🎯",
    title: "Ausrüstung",
    description: "Hochwertige Dartboards und Equipment für Training und Wettkämpfe",
  },
  {
    icon: "🏠",
    title: "Trainingsstätte",
    description: "Ausbau und Verbesserung unserer Trainingsräumlichkeiten",
  },
  {
    icon: "🌟",
    title: "Jugendförderung",
    description: "Nachwuchsarbeit und Förderung junger Talente im Dartsport",
  },
];

const bankDetails = [
  { label: "Empfänger", value: "DC Kirrberg e.V." },
  { label: "IBAN", value: "DE10 5945 0010 1030 6073 92", isIban: true },
  { label: "BIC", value: "SALADE51HOM" },
  { label: "Bank", value: "Kreissparkasse Saarpfalz" },
];

export default function Spenden(): JSX.Element {
  return (
    <Layout
      title="Spenden"
      description="Unterstütze den DC Kirrberg e.V. mit einer Spende"
    >
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Spenden</h1>
            <p className={styles.heroSubtitle}>Unterstütze unseren Verein</p>
            <p className={styles.heroIntro}>
              Als junger Verein sind wir auf die Unterstützung unserer Mitglieder
              und Freunde angewiesen. Mit deiner Spende hilfst du uns, den
              Dartsport in der Region zu fördern und unseren Spielern optimale
              Bedingungen zu bieten.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Why Donate Section */}
        <section className={styles.whySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Wofür wir spenden nutzen</h2>
            <p className={styles.sectionSubtitle}>
              Deine Unterstützung macht den Unterschied
            </p>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className={styles.reasonCard}
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <span className={styles.reasonIcon}>{reason.icon}</span>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bank Details Section */}
        <section className={styles.bankSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Bankverbindung</h2>
            <p className={styles.sectionSubtitle}>
              Überweise deinen Spendenbetrag an:
            </p>
          </div>

          <div className={styles.bankCard}>
            <h3 className={styles.bankCardTitle}>
              <span className={styles.bankIcon}>🏦</span>
              Kontodaten
            </h3>
            <div className={styles.bankDetails}>
              {bankDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className={`${styles.bankRow} ${detail.isIban ? styles.ibanRow : ""}`}
                >
                  <span className={styles.bankLabel}>{detail.label}</span>
                  <span className={styles.bankValue}>{detail.value}</span>
                </div>
              ))}
            </div>
            <p className={styles.copyHint}>
              Verwendungszweck: "Spende DC Kirrberg"
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Thank You Section */}
        <section className={styles.thankYouSection}>
          <div className={styles.thankYouContent}>
            <h2 className={styles.thankYouTitle}>
              Vielen Dank für deine Unterstützung
            </h2>
            <p className={styles.thankYouText}>
              Jede Spende, egal wie groß oder klein, hilft uns dabei, den
              Dartsport in Kirrberg und Umgebung zu fördern. Gemeinsam machen wir
              den DC Kirrberg noch stärker!
            </p>

            <div className={styles.infoBox}>
              <p className={styles.infoBoxTitle}>Spendenbescheinigung</p>
              <p className={styles.infoBoxText}>
                Als gemeinnütziger Verein stellen wir dir gerne eine
                Zuwendungsbescheinigung für deine Steuererklärung aus.
                Kontaktiere uns einfach per E-Mail.
              </p>
            </div>

            <a
              href="mailto:nadine.tobi-kratz@dckirrberg.de"
              className={styles.contactLink}
            >
              nadine.tobi-kratz@dckirrberg.de
            </a>
          </div>
        </section>

        {/* Sponsor Link Section */}
        <section className={styles.sponsorSection}>
          <div className={styles.sponsorContent}>
            <p className={styles.sponsorText}>
              Du möchtest den Verein langfristig unterstützen? Informiere dich
              über unsere Sponsoring-Möglichkeiten für Unternehmen und
              Privatpersonen.
            </p>
            <a href="/sponsoring" className={styles.sponsorButton}>
              Sponsoring-Optionen entdecken
              <span className={styles.buttonArrow}>→</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
