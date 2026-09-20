"""Copy selected Siyuan originals; retain an auditable asset manifest."""
from pathlib import Path
from PIL import Image, ImageOps
import json, shutil
root=Path(__file__).resolve().parents[1]
source=root/'素材/思源公益';dest=root/'public/media/siyuan';dest.mkdir(exist_ok=True)
files={'school-group':'校门口的合照.jpg','arrival':'刚到庆阳合照.jpg','mountain-group':'爬山合照.jpeg','teacher':'听老师讲解.jpg','cave-group':'调查窑洞合照.jpg','cave-walk':'调查窑洞.jpeg','heritage':'红色实践合照1.jpeg','food':'调查十三花.jpeg','music':'给孩子们讲解二胡.jpg','introduction':'给孩子们介绍我自己.jpg','beads':'孩子们照片7.jpg','bubbles':'孩子们照片10.jpg','gifts':'孩子们送的扭扭棒礼物.jpg','sunrise':'看日出合照.jpg'}
for i in range(1,13):
    files[f'post-{i:02}']=next(source.glob(f'推{i}.png'),None) or next(source.glob(f'推{i}-2.png'))
manifest={}
for name,file in files.items():
    path=file if isinstance(file,Path) else source/file
    target=dest/(name+path.suffix.lower());shutil.copy2(path,target)
    with Image.open(path) as im:
        im=ImageOps.exif_transpose(im)
        manifest[name]={'src':'/media/siyuan/'+target.name,'original':'/media/siyuan/'+target.name,'width':im.width,'height':im.height,'source':str(path.relative_to(root))}
(root/'src/data/siyuan-media.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Copied {len(manifest)} original images without recompression')
