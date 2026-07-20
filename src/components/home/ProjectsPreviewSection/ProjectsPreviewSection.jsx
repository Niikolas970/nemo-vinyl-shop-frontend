import { Link } from 'react-router-dom';
import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Button from '@/components/common/Button/Button';
import ProjectGrid from '@/components/project/ProjectGrid/ProjectGrid';
import { completedProjects } from '@/data/completedProjects';

const FEATURED_COUNT = 3;

function ProjectsPreviewSection() {
  const featuredProjects = completedProjects.slice(0, FEATURED_COUNT);

  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Portafolio"
          title="Trabajos realizados"
          description="Proyectos reales personalizados por Nemo Vinyl Art para motos, carros y empresas."
          align="center"
        />
        <ProjectGrid projects={featuredProjects} />
        <div className="center mt-lg">
          <Button as={Link} to="/galeria" variant="secondary">
            Ver todos los trabajos
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsPreviewSection;
