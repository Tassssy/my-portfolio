"""Generate high-quality responsive copies; never overwrite source images.
Run with the bundled Python/Pillow runtime after adding or replacing media.
Generated files are committed, so GitHub builds do not need Python.
"""
import hashlib, json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
OUTPUT = PUBLIC / 'media' / 'responsive'
OUTPUT.mkdir(parents=True, exist_ok=True)
legacy = json.loads((ROOT / 'src/data/media-manifest.json').read_text(encoding='utf-8'))
originals = {'/media/' + item['name'] + '.webp': item.get('original') for item in legacy}
sources = sorted(p for p in (PUBLIC/'media').rglob('*') if p.is_file()
    and p.suffix.lower() in {'.jpg','.jpeg','.png','.webp'}
    and 'original' not in p.parts and 'responsive' not in p.parts and not p.stem.endswith('-sm'))
result = {}
report = []
for current in sources:
    url = '/' + current.relative_to(PUBLIC).as_posix()
    original_url = originals.get(url)
    original = PUBLIC / original_url.lstrip('/') if original_url else current
    source = original if original.exists() else current
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert('RGBA' if 'A' in opened.getbands() else 'RGB')
    width,height = image.size
    quality = 94 if any(word in current.stem for word in ('chart','framework','slide','ai-','post-','poster','newsletter','report')) else 92
    fingerprint = hashlib.sha256(source.read_bytes() + ('responsive-v1-'+str(quality)).encode()).hexdigest()[:12]
    maximum = min(width,2560,int(16000*width/height))
    widths = sorted(set([min(target,maximum) for target in (480,960,1600,2560)]))
    variants = []
    for size in widths:
        name = current.stem + '-' + fingerprint + '-' + str(size) + '.webp'
        target = OUTPUT/name
        if not target.exists():
            resized = image.resize((size,max(1,round(height*size/width))),Image.Resampling.LANCZOS) if size != width else image
            resized.save(target,'WEBP',quality=quality,method=6)
        variants.append({'src':'/media/responsive/'+name,'width':size})
    fallback = next((v for v in variants if v['width']>=960),variants[-1])
    item = {'src':fallback['src'],'width':width,'height':height,'variants':variants}
    result[url]=item
    if original_url: result[original_url]=item
    report.append({'source':url,'bytesBefore':current.stat().st_size,'originalBytes':source.stat().st_size,'displayBytes':(PUBLIC/fallback['src'].lstrip('/')).stat().st_size,'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest()})
    print(current.name, '=>', len(variants), 'sizes', flush=True)
(ROOT/'src/data/responsive-images.json').write_text(json.dumps(result,ensure_ascii=False,separators=(',',':'))+'\n',encoding='utf-8')
(ROOT/'tmp/image-optimization-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print('Prepared',len(sources),'images;',len(list(OUTPUT.iterdir())),'display files; originals unchanged.')
