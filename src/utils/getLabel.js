export function getLabel(list, slug, key = 'nombre') {
  return list.find((item) => item.slug === slug)?.[key] ?? slug;
}
