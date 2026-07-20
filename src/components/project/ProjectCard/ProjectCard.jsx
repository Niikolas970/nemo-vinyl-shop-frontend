import { Link } from 'react-router-dom';
import { LuImage } from 'react-icons/lu';
import { projectCategories } from '@/data/projectCategories';
import { getLabel } from '@/utils/getLabel';
import styles from './ProjectCard.module.scss';

function ProjectCard({ project }) {
  const { slug, titulo, categoria, marca, modelo, materiales, imagenes } = project;
  const image = imagenes?.[0];
  const vehiculoLabel = [marca, modelo].filter(Boolean).join(' ');

  return (
    <article className={`card card--interactive ${styles.card}`}>
      <div className={styles.imageWrapper}>
        {image ? (
          <img src={image} alt={titulo} className={styles.image} loading="lazy" decoding="async" />
        ) : (
          <LuImage size={32} className={styles.placeholderIcon} />
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{getLabel(projectCategories, categoria)}</span>
        <h3 className={styles.title}>{titulo}</h3>

        {vehiculoLabel && <p className={styles.meta}>{vehiculoLabel}</p>}
        {materiales?.length > 0 && <p className={styles.meta}>{materiales.join(', ')}</p>}

        <Link to={`/trabajos/${slug}`} className={styles.cta}>
          Ver proyecto
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
