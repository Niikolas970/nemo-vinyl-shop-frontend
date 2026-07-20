import { useParams } from 'react-router-dom';
import Container from '@/components/common/Container/Container';
import Seo from '@/components/common/Seo/Seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import ProductGallery from '@/components/product/ProductGallery/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo/ProductInfo';
import ProductActions from '@/components/product/ProductActions/ProductActions';
import IdealFor from '@/components/product/IdealFor/IdealFor';
import TrustBadges from '@/components/product/TrustBadges/TrustBadges';
import RelatedProducts from '@/components/product/RelatedProducts/RelatedProducts';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { buildProductSchema } from '@/data/structuredData';
import styles from './Product.module.scss';

function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <Container>
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <Container>
      <Seo
        title={`${product.nombre} | Nemo Vinyl Art`}
        description={product.descripcion}
        path={`/productos/${product.slug}`}
        image={product.imagenes?.[0]}
        type="product"
      />
      <JsonLd data={buildProductSchema(product)} />

      <div className={styles.layout}>
        <ProductGallery images={product.imagenes} alt={product.nombre} />
        <div>
          <ProductInfo product={product} />
          <ProductActions product={product} />
        </div>
      </div>

      <IdealFor aplicaciones={product.aplicaciones} />
      <TrustBadges />
      <RelatedProducts products={relatedProducts} />
    </Container>
  );
}

export default Product;
