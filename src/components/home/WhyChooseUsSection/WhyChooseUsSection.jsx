import { LuSparkles, LuWrench, LuUsers, LuShieldCheck, LuAward, LuMessageCircle, LuTruck } from 'react-icons/lu';
import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import FeatureCard from '@/components/common/FeatureCard/FeatureCard';
import { whyChooseUs } from '@/data/whyChooseUs';

const icons = {
  sparkles: LuSparkles,
  wrench: LuWrench,
  users: LuUsers,
  shield: LuShieldCheck,
  award: LuAward,
  message: LuMessageCircle,
  truck: LuTruck,
};

function WhyChooseUsSection() {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Confianza" title="¿Por qué elegir Nemo Vinyl Art?" align="center" />
        <div className="grid-3">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.id} icon={icons[item.icon]} titulo={item.titulo} descripcion={item.descripcion} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;
