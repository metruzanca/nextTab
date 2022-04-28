export const toCamelCase = (s: string) => s.replace(/-./g, x=>x[1].toUpperCase())
export const toPascalCase = (s: string) => s[0].toUpperCase() + toCamelCase(s.slice(1))