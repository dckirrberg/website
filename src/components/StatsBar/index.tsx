import React, { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 150, suffix: '+', label: 'Mitglieder' },
  { value: 60, suffix: '+', label: 'Aktive Spieler' },
  { value: 6, suffix: '', label: 'Aktive Mannschaften' },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat, index, isVisible }: { stat: StatItem; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className={styles.statCard}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.statNumber}>
        <span className={styles.number}>{count}</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  );
}

export default function StatsBar(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      <div className={styles.statsContainer}>
        {stats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} index={idx} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}
