import { applications } from '@/data/applications';
import { applicationIcons } from '@/utils/applicationIcons';
import styles from './IdealFor.module.scss';

function IdealFor({ aplicaciones }) {
  const items = applications.filter((app) => aplicaciones?.includes(app.slug));

  if (!items.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ideal para</h2>
      <div className={styles.grid}>
        {items.map((item) => {
          const Icon = applicationIcons[item.slug];
          return (
            <div key={item.slug} className={styles.card}>
              {Icon && <Icon size={22} />}
              <span>{item.nombre}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IdealFor;
