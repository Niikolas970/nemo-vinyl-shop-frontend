import { LuMessageCircle } from 'react-icons/lu';
import Button from '@/components/common/Button/Button';
import { getWhatsAppProjectUrl } from '@/services/whatsapp';
import styles from './ProjectActions.module.scss';

function ProjectActions({ project }) {
  return (
    <div className={styles.actions}>
      <Button as="a" href={getWhatsAppProjectUrl(project)} target="_blank" rel="noreferrer" variant="primary">
        <LuMessageCircle /> Quiero algo similar
      </Button>
    </div>
  );
}

export default ProjectActions;
