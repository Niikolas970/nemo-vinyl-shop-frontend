import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import styles from './SearchBar.module.scss';

function SearchBar({ placeholder = 'Buscar productos...', onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <label className={`surface ${styles.wrapper}`}>
      <LuSearch size={18} className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </label>
  );
}

export default SearchBar;
