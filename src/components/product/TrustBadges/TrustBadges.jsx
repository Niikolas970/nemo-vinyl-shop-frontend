import { LuShieldCheck, LuAward, LuWrench, LuUsers, LuMessageCircle } from 'react-icons/lu';
import InfoBadge from '@/components/common/InfoBadge/InfoBadge';
import { trustBadges } from '@/data/trustBadges';
import styles from './TrustBadges.module.scss';

const icons = {
  shield: LuShieldCheck,
  award: LuAward,
  wrench: LuWrench,
  users: LuUsers,
  message: LuMessageCircle,
};

function TrustBadges() {
  return (
    <div className={styles.grid}>
      {trustBadges.map((badge) => (
        <InfoBadge key={badge.id} icon={icons[badge.icon]} text={badge.text} />
      ))}
    </div>
  );
}

export default TrustBadges;
