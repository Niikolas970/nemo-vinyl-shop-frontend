import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import heroImage from '@/assets/images/hero.png';
import styles from './Hero.module.scss';

const WHATSAPP_QUOTE_URL = 'https://wa.me/573133439887';

function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>Todo para personalizar tu vehículo.</h1>
          <p className={styles.subtitle}>
            Vinilos, PPF, polarizados y accesorios premium — y si lo necesitas, también nos encargamos de la
            instalación profesional.
          </p>
          <div className={styles.actions}>
            <Button as="a" href={WHATSAPP_QUOTE_URL} target="_blank" rel="noreferrer" variant="primary">
              Cotizar por WhatsApp
            </Button>
            <Button as={Link} to="/catalogo" variant="secondary">
              Ver catálogo <LuArrowRight />
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={heroImage}
            alt="Nemo Vinyl Art"
            className={styles.image}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
