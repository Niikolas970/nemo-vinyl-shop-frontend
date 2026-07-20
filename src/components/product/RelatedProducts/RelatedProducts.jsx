import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import ProductGrid from '@/components/product/ProductGrid/ProductGrid';
import styles from './RelatedProducts.module.scss';

function RelatedProducts({ products }) {
  if (!products?.length) return null;

  return (
    <section className={styles.section}>
      <SectionTitle eyebrow="También te puede interesar" title="Productos relacionados" />
      <ProductGrid products={products} />
    </section>
  );
}

export default RelatedProducts;
