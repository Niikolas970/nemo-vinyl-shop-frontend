import { Link } from 'react-router-dom';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import styles from './CtaSection.module.scss';

const WHATSAPP_QUOTE_URL = 'https://wa.me/573133439887';

function CtaSection() {
  return (
    <section className="section section--dark">
      <Container className={styles.inner}>
        <h2 className={styles.title}>¿No sabes qué material elegir?</h2>
        <p className={styles.subtitle}>Nuestro equipo puede ayudarte, sin compromiso.</p>
        <div className={styles.actions}>
          <Button as="a" href={WHATSAPP_QUOTE_URL} target="_blank" rel="noreferrer" variant="primary">
            Hablar por WhatsApp
          </Button>
          <Button as={Link} to="/catalogo" variant="secondary" className={styles.secondaryBtn}>
            Ver catálogo
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CtaSection;
