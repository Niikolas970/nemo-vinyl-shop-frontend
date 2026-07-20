import { Link } from 'react-router-dom';
import Container from '@/components/common/Container/Container';
import Seo from '@/components/common/Seo/Seo';
import { seo } from '@/data/seo';

function NotFound() {
  return (
    <Container>
      <Seo {...seo.notFound} />
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </Container>
  );
}

export default NotFound;
