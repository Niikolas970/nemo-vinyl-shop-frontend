import { applicationIcons } from '@/utils/applicationIcons';
import styles from './SolutionCard.module.scss';

function SolutionCard({ icon, titulo, descripcion }) {
  const Icon = applicationIcons[icon];

  return (
    <article className={`card card--interactive ${styles.card}`}>
      <span className={styles.iconWrapper}>{Icon && <Icon size={28} />}</span>
      <h3 className={styles.title}>{titulo}</h3>
      <p className={styles.description}>{descripcion}</p>
    </article>
  );
}

export default SolutionCard;
