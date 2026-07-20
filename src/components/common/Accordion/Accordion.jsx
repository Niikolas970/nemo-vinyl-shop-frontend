import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import styles from './Accordion.module.scss';

/**
 * items: { id: string, pregunta: string, respuesta: string }[]
 */
function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className={styles.item}>
            <button type="button" className={styles.trigger} onClick={() => toggle(item.id)} aria-expanded={isOpen}>
              <span>{item.pregunta}</span>
              <LuChevronDown size={18} className={isOpen ? `${styles.icon} ${styles.open}` : styles.icon} />
            </button>
            {isOpen && <p className={styles.content}>{item.respuesta}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
