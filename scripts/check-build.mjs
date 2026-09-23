import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
const paths = new Set();
function visit(value) {
  if (typeof value === 'string' && /^\/(media|documents|icons)\//.test(value)) paths.add(value);
  else if (value && typeof value === 'object') Object.values(value).forEach(visit);
}
for (const name of ['media-manifest.json','showcase-media.json','siyuan-media.json','responsive-images.json']) {
  visit(JSON.parse(readFileSync('src/data/' + name, 'utf8')));
}
const walk = directory => readdirSync(directory).flatMap(name => {
  const file = join(directory,name);
  return statSync(file).isDirectory() ? walk(file) : [file];
});
for (const file of walk('src').filter(file=>/\.(js|jsx)$/.test(file))) {
  for (const match of readFileSync(file,'utf8').matchAll(/['"](\/(?:media|documents|icons)\/[^'"`{}$]+|\/resume\.pdf)['"]/g)) paths.add(match[1]);
}
for (const url of paths) if (!existsSync('dist' + url)) throw new Error('Missing production asset: ' + url);
const html = readFileSync('dist/index.html','utf8');
if (/(?:src|href)="\/(?!\/)/.test(html)) throw new Error('Root-relative build entry would break GitHub Pages');
const entry = html.match(/<script[^>]+src="([^"]+)"/)?.[1];
if (!entry) throw new Error('Missing build entry');
const entryBytes = readFileSync(join('dist',entry));
console.log('Verified ' + paths.size + ' asset paths; initial JS ' + (gzipSync(entryBytes).length/1024).toFixed(1) + ' KiB gzipped.');
