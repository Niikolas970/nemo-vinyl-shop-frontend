import { LuSparkles, LuRainbow, LuShieldCheck, LuSun, LuPrinter, LuBrush } from 'react-icons/lu';
import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import { materials } from '@/data/materials';
import styles from './ServicesHighlight.module.scss';

const icons = {
  reflectivo: LuSparkles,
  tornasol: LuRainbow,
  ppf: LuShieldCheck,
  fotocromatico: LuSun,
  impresiones: LuPrinter,
  decoracion: LuBrush,
};

function ServicesHighlight() {
  return (
    <section className={`section ${styles.section}`}>
      <Container>
        <SectionTitle eyebrow="Materiales" title="Servicios destacados" align="center" />
        <ul className={styles.list}>
          {materials.map((material) => {
            const Icon = icons[material.icon];
            return (
              <li key={material.id} className={styles.item}>
                {Icon && <Icon size={22} />}
                <span>{material.nombre}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default ServicesHighlight;
