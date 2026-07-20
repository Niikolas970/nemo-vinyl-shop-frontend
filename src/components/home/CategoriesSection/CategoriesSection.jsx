import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import CategoryCard from '@/components/home/CategoryCard/CategoryCard';
import { homeCategories } from '@/data/homeCategories';

function CategoriesSection() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Catálogo" title="Encuentra lo que necesitas" align="center" />
        <div className="grid-3">
          {homeCategories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategoriesSection;
