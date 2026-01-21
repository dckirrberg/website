import React from "react";
import Layout from "@theme/Layout";
import styles from "./Sponsoring.module.css";
import sponsorData from "../data/sponsors.json";

type Sponsor = {
  name: string;
  url: string;
  logo: string;
};

const stats = [
  { value: "147", label: "Mitglieder" },
  { value: "54", label: "Aktive Spieler" },
  { value: "6", label: "Mannschaften" },
  { value: "750+", label: "Social Media Follower" },
];

const benefits = [
  {
    icon: "🌐",
    title: "Online-Präsenz",
    description:
      "Präsentation auf unserer Website, Social Media und in Pressemitteilungen.",
  },
  {
    icon: "🎯",
    title: "Events & Turniere",
    description:
      "Exklusive Werbemöglichkeiten bei Vereinsturnieren und Sonderveranstaltungen.",
  },
  {
    icon: "🤝",
    title: "Netzwerk",
    description:
      "Zugang zu unserem Netzwerk aus Mitgliedern, Fans und Geschäftspartnern.",
  },
  {
    icon: "💼",
    title: "B2B-Kontakte",
    description:
      "Networking-Möglichkeiten mit anderen Sponsoren und lokalen Unternehmen.",
  },
  {
    icon: "❤️",
    title: "Soziales Engagement",
    description:
      "Unterstützung eines gemeinnützigen Vereins und der Jugendförderung.",
  },
];

const packages = [
  {
    name: "Single",
    price: "Verhandlungsbasis",
    features: [
      "Logo auf der Website",
      "Erwähnung in Social Media",
      "Nennung in Vereins-Newslettern",
    ],
    featured: false,
  },
  {
    name: "Double",
    price: "Verhandlungsbasis",
    features: [
      "Alle Single-Leistungen",
      "Logo auf Spielertrikots",
      "Erwähnung in Pressemitteilungen",
    ],
    featured: true,
    badge: "Beliebt",
  },
  {
    name: "Triple",
    price: "Verhandlungsbasis",
    features: [
      "Alle Double-Leistungen",
      "Anzeige im Vereinsgelände",
      "Plakat-/Leinwandwerbung",
      "Event-Unterstützung",
    ],
    featured: false,
  },
];

export default function Sponsoring(): JSX.Element {
  return (
    <Layout
      title="Sponsoring"
      description="Werden Sie Sponsor des DC Kirrberg e.V. - Die Sterne vom Tussberch"
    >
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Sponsoring</h1>
            <p className={styles.heroSubtitle}>Partner des Erfolgs</p>
            <p className={styles.heroIntro}>
              Der DC Kirrberg e.V. hat sich seit der Gründung 2021 rasant
              entwickelt. Mit 147 Mitgliedern und sechs Mannschaften im
              Ligabetrieb bieten wir Ihnen eine attraktive Plattform für
              Ihr Unternehmen. Werden Sie Teil unserer Erfolgsgeschichte!
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsBar}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Current Sponsors Section */}
        <section className={styles.sponsorsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Unsere Sponsoren</h2>
            <p className={styles.sectionSubtitle}>
              Diese Partner unterstützen uns bereits
            </p>
          </div>

          <div className={styles.sponsorsGrid}>
            {sponsorData.sponsors.map((sponsor: Sponsor, idx: number) => (
              <div key={idx} className={styles.sponsorCard}>
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sponsorLink}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className={styles.sponsorLogo}
                    />
                  </a>
                ) : (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={styles.sponsorLogo}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ihre Vorteile</h2>
            <p className={styles.sectionSubtitle}>
              Das bieten wir unseren Sponsoren
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, idx) => (
              <div key={idx} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Packages Section */}
        <section className={styles.packagesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sponsoring-Pakete</h2>
            <p className={styles.sectionSubtitle}>
              Wählen Sie das passende Paket für Ihr Unternehmen
            </p>
          </div>

          <div className={styles.packagesGrid}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""}`}
              >
                {pkg.badge && (
                  <span className={styles.packageBadge}>{pkg.badge}</span>
                )}
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packagePrice}>{pkg.price}</p>
                <ul className={styles.packageFeatures}>
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ihr Ansprechpartner</h2>
            <p className={styles.sectionSubtitle}>
              Wir beraten Sie gerne persönlich
            </p>
          </div>

          <div className={styles.contactCard}>
            <img
              src="/dateien/vorstand/Michael.Didion.jpeg"
              alt="Michael Didion"
              className={styles.contactImage}
            />
            <h3 className={styles.contactName}>Michael Didion</h3>
            <p className={styles.contactRole}>Sponsorenbeauftragter</p>
            <p className={styles.contactText}>
              Sie haben Fragen zu unseren Sponsoring-Möglichkeiten oder möchten
              ein individuelles Paket besprechen? Ich stehe Ihnen gerne zur
              Verfügung und freue mich auf Ihre Nachricht.
            </p>
            <a
              href="mailto:michael.didion@dckirrberg.de"
              className={styles.contactLink}
            >
              michael.didion@dckirrberg.de
            </a>
            <a
              href="tel:+491731325417"
              className={styles.contactLink}
            >
              +49 173 132 5417
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Alle Details im Sponsorenkonzept
            </h2>
            <p className={styles.ctaText}>
              In unserem ausführlichen Sponsorenkonzept stellen wir Ihnen den
              Verein vor und zeigen alle Möglichkeiten auf, wie Sie uns
              unterstützen und gleichzeitig davon profitieren können.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="/dateien/Sponsorenkonzept_DCK.pdf"
                target="_blank"
                className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
              >
                <span className={styles.buttonIcon}>📄</span>
                Sponsorenkonzept herunterladen
              </a>
              <a
                href="mailto:michael.didion@dckirrberg.de"
                className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
              >
                <span className={styles.buttonIcon}>✉️</span>
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
