import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import styles from './InstagramFeed.module.css';

const instagramPosts = [
  'https://www.instagram.com/dckirrberg/p/DTgLzlZDHa-/',
  'https://www.instagram.com/dckirrberg/p/DTdDoeHDHuc/',
  'https://www.instagram.com/dckirrberg/p/DJ1RWCYIJcP/',
];

export default function InstagramFeed(): JSX.Element {
  return (
    <section className={styles.instagramSection}>
      <h2 className={styles.title}>Folge uns auf Instagram</h2>
      <p className={styles.subtitle}>@dckirrberg</p>
      <div className={styles.feedGrid}>
        {instagramPosts.map((url, idx) => (
          <div key={idx} className={styles.postWrapper}>
            <InstagramEmbed url={url} width={328} />
          </div>
        ))}
      </div>
      <a
        href="https://www.instagram.com/dckirrberg"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.followButton}
      >
        Mehr auf Instagram
      </a>
    </section>
  );
}
