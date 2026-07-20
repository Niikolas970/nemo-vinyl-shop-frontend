import { Link } from 'react-router-dom';
import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Button from '@/components/common/Button/Button';
import ProductGrid from '@/components/product/ProductGrid/ProductGrid';
import { products } from '@/data/products';

const FEATURED_COUNT = 6;

function FeaturedProductsSection() {
  const featuredProducts = products.slice(0, FEATURED_COUNT);

  return (
    <section className="section section--light">
      <Container>
        <SectionTitle
          eyebrow="Materiales"
          title="Productos destacados"
          description="Una selección de nuestros materiales más solicitados, con precio claro por metro."
          align="center"
        />
        <ProductGrid products={featuredProducts} />
        <div className="center mt-lg">
          <Button as={Link} to="/catalogo" variant="secondary">
            Ver catálogo completo
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProductsSection;
