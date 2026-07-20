import { formatPrice } from '@/utils/formatPrice';

const WHATSAPP_NUMBER = '573133439887';

export function buildQuoteMessage({ nombre, metros, precioAproximado }) {
  const mensaje = [
    'Hola Nemo Vinyl Art.',
    '',
    'Quiero cotizar:',
    '',
    'Producto:',
    nombre,
    '',
    'Cantidad:',
    `${metros} metros`,
    '',
    'Precio aproximado:',
    formatPrice(precioAproximado),
    '',
    '¿Está disponible?',
  ].join('\n');

  return mensaje;
}

export function getWhatsAppQuoteUrl(product, metros) {
  const precioAproximado = product.precioPorMetro * metros;
  const mensaje = buildQuoteMessage({ nombre: product.nombre, metros, precioAproximado });

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

export function buildProjectInquiryMessage({ titulo }) {
  return [
    'Hola Nemo Vinyl Art.',
    '',
    'Vi el trabajo:',
    titulo,
    '',
    'Quiero algo similar. ¿Me pueden asesorar?',
  ].join('\n');
}

export function getWhatsAppProjectUrl(project) {
  const mensaje = buildProjectInquiryMessage({ titulo: project.titulo });

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
