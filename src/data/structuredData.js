import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/data/site';
import { businessInfo } from '@/data/businessInfo';

const WHATSAPP_URL = 'https://wa.me/573133439887';

/**
 * Schema.org sitewide: Organization + LocalBusiness + WebSite.
 * Se renderiza una única vez, en MainLayout.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  sameAs: [WHATSAPP_URL],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  image: DEFAULT_OG_IMAGE,
  url: SITE_URL,
  email: businessInfo.correo,
  address: {
    '@type': 'PostalAddress',
    addressLocality: businessInfo.ubicacion,
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

/**
 * Schema.org Product, generado a partir de un producto del catálogo.
 */
export function buildProductSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.nombre,
    description: product.descripcion,
    material: product.material,
    url: `${SITE_URL}/productos/${product.slug}`,
    image: product.imagenes?.[0] ?? DEFAULT_OG_IMAGE,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'COP',
      price: product.precioPorMetro,
      availability:
        product.disponibilidad === 'disponible'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
      url: `${SITE_URL}/productos/${product.slug}`,
    },
  };
}
