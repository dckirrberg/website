import React from 'react';
import styles from './MemberCard.module.css';

interface MemberCardProps {
  name: string;
  title: string;
  image_url: string;
  email: string;
  index?: number;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  title,
  image_url,
  email,
  index = 0
}) => {
  const animationDelay = `${index * 0.05}s`;

  return (
    <article
      className={styles.memberCard}
      style={{ animationDelay }}
    >
      <div className={styles.photoWrapper}>
        <div className={styles.photoInner}>
          <img
            className={styles.memberPhoto}
            src={image_url}
            alt={name}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <div className={styles.nameAccent} />
        <p className={styles.memberTitle}>{title}</p>

        {email && (
          <a
            href={`mailto:${email}`}
            className={styles.emailLink}
          >
            <span className={styles.emailIcon}>✉</span>
            {email}
          </a>
        )}
      </div>
    </article>
  );
};

export default MemberCard;
