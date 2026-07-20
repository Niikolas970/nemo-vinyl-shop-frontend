import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Container from '@/components/common/Container/Container';
import logo from '@/assets/logo/logo-nemo.png';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={`glass ${styles.header}`}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="Nemo Vinyl Art — Ir al inicio">
          <img
            src={logo}
            alt="Nemo Vinyl Art"
            width={160}
            height={107}
            className={styles.logo}
            loading="eager"
            decoding="async"
          />
        </Link>
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
