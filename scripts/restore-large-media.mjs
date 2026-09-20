import {readFileSync,writeFileSync,existsSync,mkdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(readFileSync(resolve(root,'large-media/manifest.json'),'utf8'));
const sha=data=>createHash('sha256').update(data).digest('hex');
const output=resolve(root,manifest.output);
if(existsSync(output)&&sha(readFileSync(output))===manifest.sha256){console.log('Full course video verified.');}
else {
 const parts=manifest.parts.map(part=>{const data=readFileSync(resolve(root,'large-media',part.name));if(data.length!==part.bytes||sha(data)!==part.sha256)throw Error('Invalid video part: '+part.name);return data;});
 const data=Buffer.concat(parts);if(data.length!==manifest.bytes||sha(data)!==manifest.sha256)throw Error('Restored video integrity check failed');
 mkdirSync(dirname(output),{recursive:true});writeFileSync(output+'.restoring',data);renameSync(output+'.restoring',output);console.log('Restored original course video:',data.length,'bytes');
}
