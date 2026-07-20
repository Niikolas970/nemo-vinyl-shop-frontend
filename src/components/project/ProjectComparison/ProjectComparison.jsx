import { useState } from 'react';
import { LuImage } from 'react-icons/lu';
import styles from './ProjectComparison.module.scss';

function ProjectComparison({ before, after, alt }) {
  const [position, setPosition] = useState(50);

  return (
    <div className={styles.comparison}>
      <div className={styles.frame}>
        <div className={styles.imageBase}>
          {after ? (
            <img src={after} alt={`${alt} - después`} loading="lazy" decoding="async" />
          ) : (
            <LuImage size={48} className={styles.placeholderIcon} />
          )}
        </div>

        <div className={styles.imageOverlay} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          {before ? (
            <img src={before} alt={`${alt} - antes`} loading="lazy" decoding="async" />
          ) : (
            <LuImage size={48} className={styles.placeholderIcon} />
          )}
        </div>

        <span className={`${styles.label} ${styles.labelBefore}`}>Antes</span>
        <span className={`${styles.label} ${styles.labelAfter}`}>Después</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className={styles.slider}
        aria-label="Comparar antes y después"
      />
    </div>
  );
}

export default ProjectComparison;
