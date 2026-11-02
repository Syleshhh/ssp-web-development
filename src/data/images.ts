// Centralised image URLs. These use Unsplash's image CDN, which serves
// optimized WebP/AVIF via `auto=format` and resizes on the fly via the `w`
// param — so the helpers below can request appropriately small, responsive
// variants instead of shipping one large file to every device.
// Swap these for local `src/assets/` imports when final imagery is available.
export const images = {
  hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  whoWeAre:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80',
  aboutStory:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=80',
  aboutApproach:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=80',
  careers:
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1100&q=80',
}

/** Return the image URL resized to a given width and quality. */
export function imgAt(url: string, w: number, q = 70): string {
  return url.replace(/([?&]w=)\d+/, `$1${w}`).replace(/([?&]q=)\d+/, `$1${q}`)
}

/** Build a responsive srcSet across the given widths. */
export function imgSrcSet(url: string, widths: number[], q = 70): string {
  return widths.map((w) => `${imgAt(url, w, q)} ${w}w`).join(', ')
}
