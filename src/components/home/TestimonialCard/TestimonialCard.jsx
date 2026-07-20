import { LuStar, LuUser } from 'react-icons/lu';
import styles from './TestimonialCard.module.scss';

function TestimonialCard({ nombre, ciudad, comentario, calificacion, imagen }) {
  return (
    <article className={`card card--interactive ${styles.card}`}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, index) => (
          <LuStar key={index} size={16} className={index < calificacion ? styles.filled : styles.empty} />
        ))}
      </div>

      <p className={styles.comment}>"{comentario}"</p>

      <div className={styles.author}>
        {imagen ? (
          <img src={imagen} alt={nombre} className={styles.avatar} loading="lazy" decoding="async" />
        ) : (
          <LuUser size={20} className={styles.avatarIcon} />
        )}
        <div>
          <p className={styles.name}>{nombre}</p>
          <p className={styles.city}>{ciudad}</p>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
