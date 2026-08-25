/**
 * Base Path utility for root and sub-directory deployments
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  // If already prefixed with BASE_PATH, avoid duplicate
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
