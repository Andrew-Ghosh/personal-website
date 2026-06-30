import type { ImageMetadata } from 'astro';

// Build a lookup of images keyed by filename stem from a Vite glob import — e.g.
// `/src/assets/gear/mac.jpg` → `"mac"`. Both the Gear and Projects pages match a
// content item to its image by the item's id this way, so the path never has to
// be listed in frontmatter. Pass the result of an eager `import.meta.glob`.
export function imageMapByStem(
  glob: Record<string, { default: ImageMetadata }>
): Map<string, ImageMetadata> {
  return new Map(
    Object.entries(glob).map(([path, mod]) => [
      path.split('/').pop()!.replace(/\.[^.]+$/, ''),
      mod.default,
    ])
  );
}
