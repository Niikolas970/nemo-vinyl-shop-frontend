import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Accordion from '@/components/common/Accordion/Accordion';
import { faq } from '@/data/faq';
import styles from './FaqSection.module.scss';

function FaqSection() {
  return (
    <section className="section">
      <Container className={styles.container}>
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="¿Tienes dudas?"
          description="Resolvemos las preguntas más comunes antes de que tomes tu decisión."
          align="center"
        />
        <Accordion items={faq} />
      </Container>
    </section>
  );
}

export default FaqSection;
