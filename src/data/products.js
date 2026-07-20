/**
 * Modelo de producto:
 * {
 *   id: string
 *   slug: string
 *   nombre: string
 *   categoria: string           -> slug de categories
 *   descripcion: string
 *   precioPorMetro: number
 *   aplicaciones: string[]      -> slugs de applications
 *   imagenes: string[]
 *   mercadoLibre: string | null
 *   material: string
 *   disponibilidad: 'disponible' | 'agotado' | 'bajo-pedido'
 *   especificaciones: { label: string, value: string }[]
 * }
 *
 * Para agregar un producto nuevo solo se debe añadir un objeto a este arreglo.
 */
export const products = [
  {
    id: '1',
    slug: 'vinilo-tornasol',
    nombre: 'Vinilo Tornasol',
    categoria: 'vinilo-automotriz',
    descripcion:
      'Vinilo de cambio de color con efecto tornasol, ideal para personalización de motos y carros con acabado premium.',
    precioPorMetro: 28000,
    aplicaciones: ['motos', 'carros'],
    imagenes: [],
    mercadoLibre: null,
    material: 'PVC calandrado con capa tornasol',
    disponibilidad: 'disponible',
    especificaciones: [
      { label: 'Ancho', value: '1.52 m' },
      { label: 'Garantía', value: '3 años' },
      { label: 'Instalación', value: 'Recomendada por profesional' },
    ],
  },
  {
    id: '2',
    slug: 'vinilo-reflectivo',
    nombre: 'Vinilo Reflectivo',
    categoria: 'vinilo-reflectivo',
    descripcion: 'Vinilo de alta reflectividad para seguridad vial y acabados llamativos en motos y carros.',
    precioPorMetro: 32000,
    aplicaciones: ['motos', 'carros'],
    imagenes: [],
    mercadoLibre: null,
    material: 'PVC microprismático',
    disponibilidad: 'disponible',
    especificaciones: [
      { label: 'Ancho', value: '1.22 m' },
      { label: 'Garantía', value: '2 años' },
    ],
  },
  {
    id: '3',
    slug: 'ppf-transparente',
    nombre: 'PPF Transparente',
    categoria: 'ppf',
    descripcion: 'Film de poliuretano de alta transparencia para protección de pintura contra impactos y rayones.',
    precioPorMetro: 65000,
    aplicaciones: ['carros'],
    imagenes: [],
    mercadoLibre: null,
    material: 'Poliuretano termoplástico',
    disponibilidad: 'bajo-pedido',
    especificaciones: [
      { label: 'Ancho', value: '1.52 m' },
      { label: 'Garantía', value: '5 años' },
      { label: 'Autorregenerable', value: 'Sí' },
    ],
  },
  {
    id: '4',
    slug: 'vinilo-decorativo-pared',
    nombre: 'Vinilo Decorativo para Pared',
    categoria: 'decoracion',
    descripcion: 'Vinilo mate para decoración de paredes y espacios residenciales o comerciales.',
    precioPorMetro: 18000,
    aplicaciones: ['hogar', 'empresas'],
    imagenes: [],
    mercadoLibre: null,
    material: 'Vinilo autoadhesivo mate',
    disponibilidad: 'disponible',
    especificaciones: [
      { label: 'Ancho', value: '1.0 m' },
      { label: 'Acabado', value: 'Mate' },
    ],
  },
  {
    id: '5',
    slug: 'vinilo-branding-corporativo',
    nombre: 'Vinilo Branding Corporativo',
    categoria: 'branding',
    descripcion: 'Aplicación de identidad visual sobre vehículos y fachadas empresariales.',
    precioPorMetro: 24000,
    aplicaciones: ['empresas'],
    imagenes: [],
    mercadoLibre: null,
    material: 'Vinilo impreso + laminado',
    disponibilidad: 'agotado',
    especificaciones: [
      { label: 'Ancho', value: '1.52 m' },
      { label: 'Laminado', value: 'UV protector' },
    ],
  },
  {
    id: '6',
    slug: 'polarizado-solar',
    nombre: 'Polarizado Solar',
    categoria: 'polarizados',
    descripcion: 'Control solar y privacidad para vidrios de carros, con distintos porcentajes de oscurecimiento.',
    precioPorMetro: 35000,
    aplicaciones: ['carros'],
    imagenes: [],
    mercadoLibre: null,
    material: 'Poliéster con capa de control solar',
    disponibilidad: 'disponible',
    especificaciones: [
      { label: 'Ancho', value: '1.52 m' },
      { label: 'Garantía', value: '2 años' },
      { label: 'Rechazo de calor', value: 'Hasta 80%' },
    ],
  },
];

export const categories = [
  { slug: 'vinilo-automotriz', nombre: 'Vinilo Automotriz' },
  { slug: 'vinilo-reflectivo', nombre: 'Vinilo Reflectivo' },
  { slug: 'vinilo-fotocromatico', nombre: 'Vinilo Fotocromático' },
  { slug: 'ppf', nombre: 'PPF' },
  { slug: 'polarizados', nombre: 'Polarizados' },
  { slug: 'decoracion', nombre: 'Decoración de Espacios' },
  { slug: 'branding', nombre: 'Branding Empresarial' },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((item) => item.categoria === product.categoria && item.id !== product.id)
    .slice(0, limit);
}
