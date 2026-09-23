import assets from './siyuan-media.json';
export const siyuanPhoto = (key, title, caption, story = '', source = '') => ({...assets[key], key, alt:title, title, caption, story, source});
