import manifest from './media-manifest.json';
export function media(name, alt, caption, options = {}) {
  const item = manifest.find(item => item.name === name);
  return { src: `/media/${name}.webp`, thumb: `/media/${name}-sm.webp`, original: item?.original, width: item?.width, height: item?.height, alt, caption, ...options, ...(options.useOriginal ? {src:item.original,width:item.originalWidth,height:item.originalHeight} : {}) };
}
