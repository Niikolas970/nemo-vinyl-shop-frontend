import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import Product from '@/pages/Product';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import ProjectDetail from '@/pages/ProjectDetail';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/productos/:slug" element={<Product />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/trabajos/:slug" element={<ProjectDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;