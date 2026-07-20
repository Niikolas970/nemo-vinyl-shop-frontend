import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Seo from '@/components/common/Seo/Seo';
import ProductFilters from '@/components/product/ProductFilters/ProductFilters';
import ProductGrid from '@/components/product/ProductGrid/ProductGrid';
import { products } from '@/data/products';
import { seo } from '@/data/seo';

function Catalog() {
  return (
    <Container>
      <Seo {...seo.catalog} />
      <SectionTitle
        eyebrow="Catálogo"
        title="Materiales premium"
        description="Explora nuestra selección de vinilos y materiales para personalización."
      />
      <ProductFilters />
      <ProductGrid products={products} />
    </Container>
  );
}

export default Catalog;
