import assets from './showcase-media.json';
export const showcaseImage = (name, alt, caption) => ({ ...assets[name], alt, caption, original:assets[name].src });
