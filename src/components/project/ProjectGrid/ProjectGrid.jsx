import ProjectCard from '@/components/project/ProjectCard/ProjectCard';

function ProjectGrid({ projects }) {
  if (!projects?.length) {
    return <p className="text-center mt-lg mb-lg">No hay trabajos para mostrar.</p>;
  }

  return (
    <div className="grid-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;
