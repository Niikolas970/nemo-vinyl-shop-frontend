import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LuMenu, LuX } from 'react-icons/lu';
import Button from '@/components/common/Button/Button';
import MobileMenu from './MobileMenu/MobileMenu';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <button
        type="button"
        className={styles.toggle}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={links}
        ctaHref={WHATSAPP_QUOTE_URL}
      />
    </nav>
  );
}

export default Navbar;
