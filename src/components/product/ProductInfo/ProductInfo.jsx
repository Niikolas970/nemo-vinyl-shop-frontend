import { categories } from '@/data/products';
import { applications } from '@/data/applications';
import { availabilityOptions } from '@/data/availability';
import { getLabel } from '@/utils/getLabel';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductInfo.module.scss';

const badgeVariants = {
  disponible: 'badge--success',
  'bajo-pedido': 'badge--warning',
  agotado: 'badge--danger',
};

function ProductInfo({ product }) {
  const { nombre, categoria, descripcion, precioPorMetro, aplicaciones, material, disponibilidad, especificaciones } = product;

  return (
    <div className={styles.info}>
      <span className={styles.category}>{getLabel(categories, categoria)}</span>
      <h1 className={styles.title}>{nombre}</h1>

      <p className={styles.price}>
        {formatPrice(precioPorMetro)} <span className={styles.unit}>/ metro</span>
      </p>

      <span className={`badge ${badgeVariants[disponibilidad] ?? ''}`}>
        {availabilityOptions.find((option) => option.value === disponibilidad)?.label}
      </span>

      <p className={styles.description}>{descripcion}</p>

      {aplicaciones?.length > 0 && (
        <ul className={styles.tags}>
          {aplicaciones.map((slug) => (
            <li key={slug} className="tag">
              {getLabel(applications, slug)}
            </li>
          ))}
        </ul>
      )}

      <dl className={styles.specs}>
        <div className={styles.specRow}>
          <dt>Material</dt>
          <dd>{material}</dd>
        </div>
        {especificaciones?.map((spec) => (
          <div key={spec.label} className={styles.specRow}>
            <dt>{spec.label}</dt>
            <dd>{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default ProductInfo;
