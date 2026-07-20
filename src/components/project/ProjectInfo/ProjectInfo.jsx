import { projectCategories } from '@/data/projectCategories';
import { getLabel } from '@/utils/getLabel';
import styles from './ProjectInfo.module.scss';

function ProjectInfo({ project }) {
  const { titulo, categoria, marca, modelo, materiales, descripcion, proceso, resultado, fecha, cliente, ubicacion } = project;
  const vehiculoLabel = [marca, modelo].filter(Boolean).join(' ');

  return (
    <div className={styles.info}>
      <span className={styles.category}>{getLabel(projectCategories, categoria)}</span>
      <h1 className={styles.title}>{titulo}</h1>
      {vehiculoLabel && <p className={styles.vehiculo}>{vehiculoLabel}</p>}

      <p className={styles.description}>{descripcion}</p>

      {materiales?.length > 0 && (
        <ul className={styles.tags}>
          {materiales.map((material) => (
            <li key={material} className="tag">
              {material}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.block}>
        <h3>Proceso</h3>
        <p>{proceso}</p>
      </div>

      <div className={styles.block}>
        <h3>Resultado</h3>
        <p>{resultado}</p>
      </div>

      <dl className={styles.meta}>
        {fecha && (
          <div className={styles.metaRow}>
            <dt>Fecha</dt>
            <dd>{fecha}</dd>
          </div>
        )}
        {cliente && (
          <div className={styles.metaRow}>
            <dt>Cliente</dt>
            <dd>{cliente}</dd>
          </div>
        )}
        {ubicacion && (
          <div className={styles.metaRow}>
            <dt>Ubicación</dt>
            <dd>{ubicacion}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}

export default ProjectInfo;
