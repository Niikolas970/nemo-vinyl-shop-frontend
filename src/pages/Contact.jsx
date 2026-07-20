import Container from '@/components/common/Container/Container';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Seo from '@/components/common/Seo/Seo';
import { seo } from '@/data/seo';

function Contact() {
  return (
    <Container>
      <Seo {...seo.contact} />
      <SectionTitle eyebrow="Contacto" title="Hablemos de tu proyecto" />
    </Container>
  );
}

export default Contact;
