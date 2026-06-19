// src/utils/paths.js
const isProd = process.env.NODE_ENV === 'production';
export const BASE_PATH = isProd ? '/BDA-NLI-Project' : '';

export function getAssetPath(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
