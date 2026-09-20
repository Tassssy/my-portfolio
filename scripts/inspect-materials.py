from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont
import zipfile, xml.etree.ElementTree as ET, json, io, re

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'tmp'/'materials'
OUT.mkdir(parents=True,exist_ok=True)
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError: pass
font=ImageFont.truetype('C:/Windows/Fonts/msyh.ttc',14)
items=[]; texts=[]
def add_image(source,data,group,context=''):
    try:
        im=ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert('RGB')
        if min(im.size)<140:return
        id=f'm{len(items):03d}'
        im.thumbnail((1800,1800))
        im.save(OUT/(id+'.webp'),'WEBP',quality=88)
        items.append(dict(id=id,source=source,group=group,context=context,width=im.width,height=im.height))
    except Exception as e: print('SKIP',source,str(e)[:100])
for path in sorted((ROOT/'素材').rglob('*')):
    if not path.is_file():continue
    rel=str(path.relative_to(ROOT)); group=path.relative_to(ROOT/'素材').parts[0]
    if path.suffix.lower() in ['.png','.jpg','.jpeg','.heic']:
        add_image(rel,path.read_bytes(),group)
    elif path.suffix.lower() in ['.pptx','.docx']:
        with zipfile.ZipFile(path) as z:
            if path.suffix.lower()=='.pptx':
                names=sorted([n for n in z.namelist() if re.fullmatch(r'ppt/slides/slide\d+.xml',n)],key=lambda n:int(re.search(r'(\d+)\.xml',n).group(1)))
                for n in names:
                    root=ET.fromstring(z.read(n)); content=' '.join(t.text or '' for t in root.iter() if t.tag.endswith('}t'))
                    texts.append(dict(source=rel,part=n,text=content))
                # Research decks: extract image evidence. Other huge decks: extract cover only; direct photos exist.
                media=[n for n in z.namelist() if n.startswith('ppt/media/') and n.lower().endswith(('.png','.jpg','.jpeg'))] if group in ['正大杯','prp','思源公益'] else []
                for n in z.namelist():
                    if n.startswith('docProps/thumbnail.') and n.endswith(('.jpeg','.png','.jpg')): add_image(rel+'::'+n,z.read(n),group,'PPT cover')
            else:
                root=ET.fromstring(z.read('word/document.xml'))
                text='\n'.join(''.join(t.text or '' for t in p.iter() if t.tag.endswith('}t')) for p in root.iter() if p.tag.endswith('}p'))
                texts.append(dict(source=rel,part='document',text=text))
                media=[n for n in z.namelist() if n.startswith('word/media/') and n.lower().endswith(('.png','.jpg','.jpeg'))]
            for n in media: add_image(rel+'::'+n,z.read(n),group)
(OUT/'inventory.json').write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'texts.json').write_text(json.dumps(texts,ensure_ascii=False,indent=2),encoding='utf-8')
for group in dict.fromkeys(i['group'] for i in items):
    selected=[i for i in items if i['group']==group]
    for page in range((len(selected)+19)//20):
        batch=selected[page*20:(page+1)*20]
        sheet=Image.new('RGB',(1200,((len(batch)+3)//4)*235),'#eeeae1'); d=ImageDraw.Draw(sheet)
        for j,item in enumerate(batch):
            x=(j%4)*300;y=(j//4)*235
            im=Image.open(OUT/(item['id']+'.webp')); im.thumbnail((286,193))
            sheet.paste(im,(x+(300-im.width)//2,y+(195-im.height)//2))
            name=item['source'].split('::')[-1].split('\\')[-1]
            d.text((x+8,y+195),item['id']+' '+name[:24],font=font,fill='#222')
            d.text((x+8,y+215),f"{item['width']}×{item['height']}",font=font,fill='#555')
        sheet.save(OUT/f'{group}-{page+1}.jpg',quality=88)
print('IMAGES',len(items),'TEXT PARTS',len(texts))
print('\n'.join(str(p.relative_to(ROOT)) for p in OUT.glob('*.jpg')))
