import { useParams } from 'react-router-dom';
import Container from '@/components/common/Container/Container';
import Seo from '@/components/common/Seo/Seo';
import ProjectGallery from '@/components/project/ProjectGallery/ProjectGallery';
import ProjectComparison from '@/components/project/ProjectComparison/ProjectComparison';
import ProjectInfo from '@/components/project/ProjectInfo/ProjectInfo';
import ProjectActions from '@/components/project/ProjectActions/ProjectActions';
import ProjectCta from '@/components/project/ProjectCta/ProjectCta';
import IdealFor from '@/components/product/IdealFor/IdealFor';
import ProjectGrid from '@/components/project/ProjectGrid/ProjectGrid';
import { getProjectBySlug, getRelatedProjects } from '@/data/completedProjects';
import styles from './ProjectDetail.module.scss';

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <Container>
        <h1>Proyecto no encontrado</h1>
      </Container>
    );
  }

  const hasComparison = Boolean(project.antes && project.despues);
  const relatedProjects = getRelatedProjects(project);

  return (
    <Container>
      <Seo
        title={`${project.titulo} | Nemo Vinyl Art`}
        description={project.descripcion}
        path={`/trabajos/${project.slug}`}
        image={project.imagenes?.[0]}
      />

      <div className={styles.layout}>
        {hasComparison ? (
          <ProjectComparison before={project.antes} after={project.despues} alt={project.titulo} />
        ) : (
          <ProjectGallery images={project.imagenes} alt={project.titulo} />
        )}

        <div>
          <ProjectInfo project={project} />
          <ProjectActions project={project} />
        </div>
      </div>

      <IdealFor aplicaciones={project.aplicaciones} />

      {relatedProjects.length > 0 && (
        <section className={styles.related}>
          <h2>Otros trabajos</h2>
          <ProjectGrid projects={relatedProjects} />
        </section>
      )}

      <ProjectCta project={project} />
    </Container>
  );
}

export default ProjectDetail;
