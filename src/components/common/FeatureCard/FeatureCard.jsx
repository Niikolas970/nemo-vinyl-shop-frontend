import styles from './FeatureCard.module.scss';

function FeatureCard({ icon: Icon, titulo, descripcion }) {
  return (
    <article className={`card card--interactive ${styles.card}`}>
      <span className={styles.iconWrapper}>{Icon && <Icon size={24} />}</span>
      <h3 className={styles.title}>{titulo}</h3>
      <p className={styles.description}>{descripcion}</p>
    </article>
  );
}

export default FeatureCard;
