"""Build display images directly from source files, never from earlier thumbnails."""
from pathlib import Path
from PIL import Image, ImageOps
import io, json, shutil, subprocess, sys, zipfile

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/media'
ORIGINAL = OUT / 'original'
ORIGINAL.mkdir(exist_ok=True)
manifest_path = ROOT / 'src/data/media-manifest.json'
items = json.loads(manifest_path.read_text(encoding='utf-8'))
additions = {
    'personal-satar': 'MEITU_20250506_134725740.jpg',
    'life-snow': 'IMG20251122141422.jpg',
    'life-flowers': 'MTXX_MR20240329_152202209.jpg',
    'life-sunshine': 'mmexport1718371335854.jpg',
    'life-travel': 'MEITU_20250503_125819797.jpg',
    'life-city': 'MEITU_20241224_222234453.jpg',
    'life-music': 'MEITU_20240608_230158641.jpg',
}
for name, filename in additions.items():
    if not any(item['name'] == name for item in items):
        items.append({'name':name, 'source':str(Path('素材/个人信息/生活照') / filename)})

for item in items:
    source = item['source'].split('::')
    path = ROOT / source[0]
    if len(source) == 2:
        with zipfile.ZipFile(path) as archive:
            data = archive.read(source[1])
        extension = Path(source[1]).suffix.lower()
    else:
        data = path.read_bytes()
        extension = path.suffix.lower()
    original_path = ORIGINAL / (item['name'] + extension)
    original_path.write_bytes(data)
    with Image.open(io.BytesIO(data)) as source_image:
        im = ImageOps.exif_transpose(source_image).convert('RGB')
        original_size = im.size
        # Keep long screenshots at native resolution. Other assets retain up to 3840 px.
        if not item['name'].startswith('siyuan-post'):
            im.thumbnail((3840,3840), Image.Resampling.LANCZOS)
        im.save(OUT / (item['name'] + '.webp'), quality=96, method=5)
        small = im.copy()
        small.thumbnail((960,960), Image.Resampling.LANCZOS)
        small.save(OUT / (item['name'] + '-sm.webp'), quality=92)
        item.update(width=im.width, height=im.height, thumbWidth=small.width,
                    original='/media/original/' + original_path.name,
                    originalWidth=original_size[0], originalHeight=original_size[1])

manifest_path.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding='utf-8')
sys.path.insert(0, str(ROOT / 'tmp/video-runtime'))
import imageio_ffmpeg
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
for source, name, seconds in [
    ('实习项目/Q睿混合版（无水印）-0921.mp4', 'q-rui-poster', 20),
    ('实习项目/Q睿混合版（无水印）-0921.mp4', 'q-rui-interface', 45),
    ('非设计类课程作业视频/管原课介绍乐视--LeEco Future Outlook pro2.mp4', 'leeco-poster', 45),
    ('非设计类课程作业视频/红课作--《交·通》.mp4', 'jiaotong-poster', 20),
]:
    subprocess.run([ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-ss', str(seconds),
        '-i', str(ROOT/'素材'/source), '-frames:v', '1', '-c:v', 'libwebp', '-lossless', '1',
        str(OUT/(name+'.webp'))], check=True)
shutil.copy2(ROOT/'素材/prp/周天翊 523120910180 研究论文.doc', ROOT/'public/documents/prp-report.doc')
shutil.copy2(ROOT/'素材/prp/-T120PRP46025大学生浪费现象调查.doc', ROOT/'public/documents/prp-project-report.doc')
print('Refreshed', len(items), 'images from original files; extracted full-resolution video stills; copied PRP reports.')
