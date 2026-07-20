import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import styles from './MobileMenu.module.scss';

function MobileMenu({ isOpen, onClose, links, ctaHref }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      {createPortal(
        <aside
          id="mobile-menu-panel"
          className={isOpen ? `${styles.panel} ${styles.open}` : styles.panel}
        >
          <nav aria-label="Menú principal">
            <ul className={styles.list}>
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className={styles.cta}
                >
                  Cotizar
                </a>
              </li>
            </ul>
          </nav>
        </aside>,
        document.body
      )}
    </>
  );
}

export default MobileMenu;
