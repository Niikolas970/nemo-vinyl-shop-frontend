/**
 * Modelo de trabajo realizado:
 * {
 *   id: string
 *   slug: string
 *   titulo: string
 *   categoria: string          -> slug de projectCategories
 *   vehiculo: string
 *   marca: string
 *   modelo: string
 *   materiales: string[]
 *   aplicaciones: string[]     -> slugs de applications
 *   descripcion: string
 *   proceso: string
 *   resultado: string
 *   imagenes: string[]
 *   antes: string | null
 *   despues: string | null
 *   fecha: string
 *   cliente?: string
 *   ubicacion?: string
 * }
 *
 * Para agregar un trabajo nuevo solo se debe añadir un objeto a este arreglo.
 */
export const completedProjects = [
  {
    id: '1',
    slug: 'yamaha-r15-tornasol',
    titulo: 'Yamaha R15 en Vinilo Tornasol',
    categoria: 'motos',
    vehiculo: 'Moto deportiva',
    marca: 'Yamaha',
    modelo: 'R15',
    materiales: ['Vinilo Tornasol'],
    aplicaciones: ['motos'],
    descripcion: 'Cambio total de color con vinilo tornasol para resaltar las líneas deportivas de la moto.',
    proceso: 'Desmontaje de carenados, limpieza profunda, instalación de vinilo tornasol y sellado de bordes.',
    resultado: 'Un acabado con cambio de color según el ángulo de luz, con protección adicional de la pintura original.',
    imagenes: [],
    antes: null,
    despues: null,
    fecha: '2026-05-12',
    cliente: 'Cliente particular',
    ubicacion: 'Bogotá',
  },
  {
    id: '2',
    slug: 'mazda-3-ppf',
    titulo: 'Mazda 3 con PPF Transparente',
    categoria: 'carros',
    vehiculo: 'Sedán',
    marca: 'Mazda',
    modelo: '3',
    materiales: ['PPF Transparente'],
    aplicaciones: ['carros'],
    descripcion: 'Protección completa de pintura con film de poliuretano en zonas de alto impacto.',
    proceso: 'Lavado técnico, descontaminación de pintura, corte digital de plantillas e instalación de PPF.',
    resultado: 'Protección invisible contra rayones e impactos de piedra, manteniendo el brillo original.',
    imagenes: [],
    antes: null,
    despues: null,
    fecha: '2026-04-03',
    cliente: null,
    ubicacion: 'Medellín',
  },
  {
    id: '3',
    slug: 'oficina-branding-corporativo',
    titulo: 'Branding Corporativo en Oficina',
    categoria: 'empresas',
    vehiculo: null,
    marca: null,
    modelo: null,
    materiales: ['Vinilo Branding Corporativo'],
    aplicaciones: ['empresas'],
    descripcion: 'Aplicación de identidad visual en fachada y espacios interiores de oficina corporativa.',
    proceso: 'Levantamiento de medidas, diseño de plantillas e instalación de vinilo impreso laminado.',
    resultado: 'Espacio corporativo con identidad de marca consistente y acabado profesional.',
    imagenes: [],
    antes: null,
    despues: null,
    fecha: '2026-03-18',
    cliente: 'Empresa cliente',
    ubicacion: 'Cali',
  },
];

export function getProjectBySlug(slug) {
  return completedProjects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project, limit = 3) {
  return completedProjects
    .filter((item) => item.categoria === project.categoria && item.id !== project.id)
    .slice(0, limit);
}
