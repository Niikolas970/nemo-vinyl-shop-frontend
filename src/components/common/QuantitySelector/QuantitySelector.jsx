import { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
import styles from './QuantitySelector.module.scss';

function QuantitySelector({ min = 1, defaultValue = 1, unit = 'metros', onChange }) {
  const [value, setValue] = useState(defaultValue);

  const update = (next) => {
    const clamped = Math.max(min, next);
    setValue(clamped);
    onChange?.(clamped);
  };

  return (
    <div className={styles.selector}>
      <button type="button" className={styles.button} onClick={() => update(value - 1)} aria-label="Disminuir cantidad">
        <LuMinus size={16} />
      </button>
      <span className={styles.value}>
        {value} <span className={styles.unit}>{unit}</span>
      </span>
      <button type="button" className={styles.button} onClick={() => update(value + 1)} aria-label="Aumentar cantidad">
        <LuPlus size={16} />
      </button>
    </div>
  );
}

export default QuantitySelector;
