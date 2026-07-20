import { NavLink } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import styles from './Navbar.module.scss';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/galeria', label: 'Trabajos' },
  { to: '/contacto', label: 'Contacto' },
];

const WHATSAPP_QUOTE_URL = 'https://wa.me/573133439887';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Button as="a" href={WHATSAPP_QUOTE_URL} target="_blank" rel="noreferrer" variant="primary" className={styles.cta}>
        Cotizar
      </Button>
    </nav>
  );
}

export default Navbar;
