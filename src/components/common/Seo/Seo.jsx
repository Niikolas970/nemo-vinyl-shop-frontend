import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, TWITTER_HANDLE } from '@/data/site';

/**
 * Metadatos por página (title, description, Open Graph, Twitter Card, canonical).
 * React 19 hoistea automáticamente <title>/<meta>/<link> al <head>, sin librerías.
 *
 * path: ruta relativa (ej. "/catalogo") usada para construir la URL canónica.
 */
function Seo({ title, description, path = '/', image = DEFAULT_OG_IMAGE, type = 'website' }) {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

export default Seo;
