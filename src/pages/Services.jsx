import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Seo from '@/components/common/Seo/Seo';
import { seo } from '@/data/seo';

function Services() {
  return (
    <Container>
      <Seo {...seo.services} />
      <SectionTitle eyebrow="Servicios" title="Lo que hacemos" />
    </Container>
  );
}

export default Services;
