import SearchBar from '@/components/product/SearchBar/SearchBar';
import CategoryChips from '@/components/product/CategoryChips/CategoryChips';
import { categories } from '@/data/products';
import { applications } from '@/data/applications';
import { availabilityOptions } from '@/data/availability';
import styles from './ProductFilters.module.scss';

function ProductFilters() {
  const categoryItems = categories.map((item) => ({ value: item.slug, label: item.nombre }));
  const applicationItems = applications.map((item) => ({ value: item.slug, label: item.nombre }));
  const availabilityItems = availabilityOptions.map((item) => ({ value: item.value, label: item.label }));

  return (
    <div className={styles.filters}>
      <SearchBar placeholder="Buscar por nombre de producto..." />

      <div className={styles.group}>
        <span className={styles.label}>Categorías</span>
        <CategoryChips items={categoryItems} />
      </div>

      <div className={styles.group}>
        <span className={styles.label}>Aplicaciones</span>
        <CategoryChips items={applicationItems} />
      </div>

      <div className={styles.group}>
        <span className={styles.label}>Disponibilidad</span>
        <CategoryChips items={availabilityItems} />
      </div>
    </div>
  );
}

export default ProductFilters;
