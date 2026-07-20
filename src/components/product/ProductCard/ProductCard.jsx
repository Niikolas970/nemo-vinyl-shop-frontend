import { Link } from 'react-router-dom';
import { LuImage } from 'react-icons/lu';
import { categories } from '@/data/products';
import { applications } from '@/data/applications';
import { getLabel } from '@/utils/getLabel';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductCard.module.scss';

function ProductCard({ product }) {
  const { slug, nombre, categoria, descripcion, precioPorMetro, aplicaciones, imagenes } = product;
  const image = imagenes?.[0];

  return (
    <article className={`card card--interactive ${styles.card}`}>
      <div className={styles.imageWrapper}>
        {image ? (
          <img src={image} alt={nombre} className={styles.image} loading="lazy" decoding="async" />
        ) : (
          <LuImage size={32} className={styles.placeholderIcon} />
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{getLabel(categories, categoria)}</span>
        <h3 className={styles.title}>{nombre}</h3>
        {descripcion && <p className={styles.description}>{descripcion}</p>}
        <p className={styles.price}>
          {formatPrice(precioPorMetro)} <span className={styles.unit}>/ metro</span>
        </p>

        {aplicaciones?.length > 0 && (
          <ul className={styles.tags}>
            {aplicaciones.map((slugApp) => (
              <li key={slugApp} className="tag">
                {getLabel(applications, slugApp)}
              </li>
            ))}
          </ul>
        )}

        <Link to={`/productos/${slug}`} className={styles.cta}>
          Ver producto
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
