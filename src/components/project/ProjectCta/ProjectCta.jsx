import { LuMessageCircle } from 'react-icons/lu';
import Button from '@/components/common/Button/Button';
import { getWhatsAppProjectUrl } from '@/services/whatsapp';
import styles from './ProjectCta.module.scss';

function ProjectCta({ project }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>¿Te gustó este resultado?</h2>
      <Button as="a" href={getWhatsAppProjectUrl(project)} target="_blank" rel="noreferrer" variant="primary">
        <LuMessageCircle /> Solicitar una cotización
      </Button>
    </section>
  );
}

export default ProjectCta;
