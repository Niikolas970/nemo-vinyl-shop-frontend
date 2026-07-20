import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import SolutionCard from '@/components/home/SolutionCard/SolutionCard';
import { solutions } from '@/data/solutions';

function SolutionsSection() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Soluciones"
          title="¿Qué deseas personalizar?"
          align="center"
        />
        <div className="grid-4">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} {...solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;
