import styles from './InfoBadge.module.scss';

function InfoBadge({ icon: Icon, text }) {
  return (
    <div className={`surface ${styles.badge}`}>
      {Icon && <Icon size={18} />}
      <span>{text}</span>
    </div>
  );
}

export default InfoBadge;
