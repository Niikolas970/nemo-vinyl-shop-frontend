/**
 * Metadatos SEO (title + description) para las páginas estáticas.
 * Las páginas dinámicas (Product, ProjectDetail) construyen los suyos
 * a partir de los datos del producto/proyecto.
 */
export const seo = {
  home: {
    path: '/',
    title: 'Nemo Vinyl Art | Personalización Automotriz Premium',
    description:
      'Vinilos, PPF y acabados premium para motos, carros, empresas y hogar. Cotiza sin compromiso por WhatsApp.',
  },
  catalog: {
    path: '/catalogo',
    title: 'Catálogo de Vinilos y Materiales | Nemo Vinyl Art',
    description:
      'Explora vinilos reflectivos, tornasol, fotocromáticos y PPF. Precio por metro claro y cotización inmediata por WhatsApp.',
  },
  services: {
    path: '/servicios',
    title: 'Servicios de Personalización Automotriz | Nemo Vinyl Art',
    description:
      'Personalización de motos y carros, branding empresarial, decoración de espacios, impresiones y PPF. Asesoría antes de comprar.',
  },
  gallery: {
    path: '/galeria',
    title: 'Trabajos Realizados | Galería Nemo Vinyl Art',
    description:
      'Conoce proyectos reales de personalización en motos, carros y empresas. Mira el resultado antes de solicitar tu cotización.',
  },
  contact: {
    path: '/contacto',
    title: 'Contacto | Nemo Vinyl Art',
    description: 'Escríbenos y resuelve tus dudas. Te asesoramos sin compromiso para elegir el mejor material.',
  },
  notFound: {
    path: '/404',
    title: 'Página no encontrada | Nemo Vinyl Art',
    description: 'La página que buscas no existe o fue movida. Vuelve al inicio para seguir explorando el catálogo.',
  },
};
