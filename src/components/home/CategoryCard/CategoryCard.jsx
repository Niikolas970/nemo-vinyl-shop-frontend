import { Link } from 'react-router-dom';
import { LuSparkles, LuShieldCheck, LuSun, LuWrench, LuShoppingBag } from 'react-icons/lu';
import styles from './CategoryCard.module.scss';

const icons = {
  vinilos: LuSparkles,
  ppf: LuShieldCheck,
  polarizados: LuSun,
  herramientas: LuWrench,
  accesorios: LuShoppingBag,
};

function CategoryCard({ icon, nombre, descripcion }) {
  const Icon = icons[icon];

  return (
    <Link to="/catalogo" className={`card card--interactive ${styles.card}`}>
      <span className={styles.iconWrapper}>{Icon && <Icon size={26} />}</span>
      <h3 className={styles.title}>{nombre}</h3>
      <p className={styles.description}>{descripcion}</p>
    </Link>
  );
}

export default CategoryCard;
