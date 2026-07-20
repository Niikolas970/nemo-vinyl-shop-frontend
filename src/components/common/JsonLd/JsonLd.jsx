/**
 * Renderiza un bloque JSON-LD (Schema.org) a partir de un objeto de datos plano.
 */
function JsonLd({ data }) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

export default JsonLd;
