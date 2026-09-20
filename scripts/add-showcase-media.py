"""Copy newly supplied showcase material without resizing or recompressing it."""
from pathlib import Path
from PIL import Image, ImageOps
import json, shutil

root = Path(__file__).resolve().parents[1]
output = root/'public/media/showcase'
output.mkdir(parents=True, exist_ok=True)
sources = {
    'ai-foundations': '个人信息/人工智能通识课.png',
    'ai-crossdisciplinary': '个人信息/人工智能+x特色交叉课.png',
    'ai-models': '个人信息/国产大模型应用实战课.png',
    'leeco-cover': '非设计类课程作业视频/LeEco Future Outlook pro2-封面.jpg',
    'jiaotong-cover': '非设计类课程作业视频/《交·通》-封面.jpg',
    'qrui-cover': '实习项目/Q睿封面.png',
    **{f'market-slide-{i}': f'实习项目/幻灯片{i}.JPG' for i in [1,3,4,5,6,7,8]},
}
manifest = {}
for name, relative in sources.items():
    source = root/'素材'/relative
    destination = output/(name+source.suffix.lower())
    shutil.copy2(source, destination)
    with Image.open(source) as photo:
        im = ImageOps.exif_transpose(photo)
        manifest[name] = {'src':'/media/showcase/'+destination.name, 'width':im.width, 'height':im.height,
                          'source':str(source.relative_to(root))}
(root/'src/data/showcase-media.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print('Copied',len(manifest),'original showcase assets.')
