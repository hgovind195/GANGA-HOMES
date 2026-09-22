/**
 * Cloudinary image optimization utility.
 * Automatically injects WebP format and perceptual auto-compression (q_auto:good)
 * without sacrificing visual fidelity, dramatically improving loading speed and performance.
 */
export function getOptimizedImageUrl(
  url: string,
  options?: {
    width?: number;
    height?: number;
    quality?: "auto" | "auto:best" | "auto:good" | "auto:eco" | number;
    format?: "webp" | "auto" | "avif";
    crop?: string;
  }
): string {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com")) return url;

  // If already transformed with f_ or q_, don't duplicate
  if (url.includes("/upload/f_") || url.includes("/upload/q_")) return url;

  const {
    width,
    height,
    quality = "auto:good",
    format = "webp",
    crop = width || height ? "c_limit" : undefined,
  } = options || {};

  const transformations: string[] = [`f_${format}`, `q_${quality}`];
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(crop);

  const transformString = transformations.join(",");
  return url.replace("/upload/", `/upload/${transformString}/`);
}
