import variants from './data/responsive-images.json';
import { assetUrl } from './asset-url';

export function imageProps(image, { eager = false, sizes, fetchPriority } = {}) {
  const optimized = variants[image.src];
  const fallbackSizes = sizes || '(max-width: 640px) calc(100vw - 48px), (max-width: 1000px) calc(100vw - 80px), 1100px';
  return {
    src: assetUrl(optimized?.src || image.src),
    srcSet: optimized?.variants.map(item => assetUrl(item.src) + ' ' + item.width + 'w').join(', '),
    sizes: optimized ? (eager ? fallbackSizes : 'auto, ' + fallbackSizes) : undefined,
    width: image.width || optimized?.width,
    height: image.height || optimized?.height,
    loading: eager ? 'eager' : 'lazy',
    decoding: 'async',
    fetchPriority: fetchPriority || (eager ? 'high' : 'auto'),
  };
}
