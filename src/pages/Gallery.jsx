import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Seo from '@/components/common/Seo/Seo';
import ProjectFilters from '@/components/project/ProjectFilters/ProjectFilters';
import ProjectGrid from '@/components/project/ProjectGrid/ProjectGrid';
import { completedProjects } from '@/data/completedProjects';
import { seo } from '@/data/seo';
import styles from './Gallery.module.scss';

function Gallery() {
  return (
    <Container>
      <Seo {...seo.gallery} />
      <SectionTitle
        eyebrow="Galería"
        title="Trabajos realizados"
        description="Proyectos reales realizados por Nemo Vinyl Art para motos, carros, empresas y espacios."
      />
      <div className={styles.filters}>
        <ProjectFilters />
      </div>
      <ProjectGrid projects={completedProjects} />
    </Container>
  );
}

export default Gallery;
