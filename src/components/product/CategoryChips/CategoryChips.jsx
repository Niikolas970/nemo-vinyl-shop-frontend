import { useState } from 'react';
import styles from './CategoryChips.module.scss';

/**
 * Selector de chips genérico y reutilizable.
 * items: { value: string, label: string }[]
 */
function CategoryChips({ items, allLabel = 'Todos', onChange }) {
  const [active, setActive] = useState(null);

  const handleSelect = (value) => {
    setActive(value);
    onChange?.(value);
  };

  const chipClass = (value) => (active === value ? 'chip chip--active' : 'chip');

  return (
    <div className={styles.chips}>
      <button type="button" className={chipClass(null)} onClick={() => handleSelect(null)}>
        {allLabel}
      </button>
      {items.map((item) => (
        <button key={item.value} type="button" className={chipClass(item.value)} onClick={() => handleSelect(item.value)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryChips;
