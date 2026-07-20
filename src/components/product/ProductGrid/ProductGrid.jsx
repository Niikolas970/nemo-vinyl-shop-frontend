import ProductCard from '@/components/product/ProductCard/ProductCard';

function ProductGrid({ products }) {
  if (!products?.length) {
    return <p className="text-center mt-lg mb-lg">No hay productos para mostrar.</p>;
  }

  return (
    <div className="grid-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
