import CategoryChips from '@/components/product/CategoryChips/CategoryChips';
import { projectCategories } from '@/data/projectCategories';

function ProjectFilters() {
  const items = projectCategories.map((item) => ({ value: item.slug, label: item.nombre }));

  return <CategoryChips items={items} allLabel="Todos" />;
}

export default ProjectFilters;
