import { createPortal } from 'react-dom';
import styles from './Overlay.module.scss';

function Overlay({ isOpen, onClick }) {
  return createPortal(
    <div
      className={isOpen ? `${styles.overlay} ${styles.open}` : styles.overlay}
      onClick={onClick}
      aria-hidden="true"
    />,
    document.body
  );
}

export default Overlay;
