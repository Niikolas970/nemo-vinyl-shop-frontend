import Container from '@/components/common/Container/Container';
import { stats } from '@/data/stats';
import styles from './StatsSection.module.scss';

function StatsSection() {
  return (
    <section className={`section--light ${styles.section}`}>
      <Container>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.stat}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsSection;
