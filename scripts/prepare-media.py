from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont
import json, subprocess, sys, shutil, re
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tmp/video-runtime'))
import imageio_ffmpeg
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
out=ROOT/'public/media';out.mkdir(parents=True,exist_ok=True)
items=json.loads((ROOT/'tmp/materials/inventory.json').read_text(encoding='utf-8'))
selection={
 'm045':'personal-red','m035':'personal-curious','m193':'erhu-stage','m187':'satar-portrait',
 'm034':'ai-course','m186':'solo-report-cover','m178':'solo-sample-chart','m179':'solo-motivation-chart','m182':'solo-choice-chart','m073':'solo-award',
 'm018':'prp-spending-chart','m020':'prp-social-chart','m024':'prp-information-chart','m027':'prp-platform-chart','m015':'prp-framework',
 'm057':'siyuan-teaching','m079':'siyuan-classroom','m085':'siyuan-workshop','m139':'siyuan-fieldwork','m136':'siyuan-team','m077':'siyuan-reunion','m071':'siyuan-award',
 'm188':'orchestra-poster','m189':'orchestra-newsletter','m190':'orchestra-tea','m192':'orchestra-performance','m194':'orchestra-bow','m153':'night-run'
}
manifest=[]
for item in items:
    if item['id'] not in selection:continue
    name=selection[item['id']]
    im=Image.open(ROOT/'tmp/materials'/(item['id']+'.webp')).convert('RGB')
    im.thumbnail((1600,1600))
    im.save(out/(name+'.webp'),quality=86,method=4)
    thumb=im.copy();thumb.thumbnail((680,680));thumb.save(out/(name+'-sm.webp'),quality=79)
    manifest.append(dict(name=name,source=item['source'],width=im.width,height=im.height))
# Preserve readable resolution of the supplied long-form post, rather than the contact-sheet thumbnail.
for source,name in [('再见了三岔小推送图片.png','siyuan-post-1'),('再见了三岔小推送图片2.png','siyuan-post-2')]:
    path=ROOT/'素材/思源公益'/source
    im=Image.open(path).convert('RGB');im.thumbnail((1200,12000));im.save(out/(name+'.webp'),quality=86)
    thumb=im.copy();thumb.thumbnail((480,4800));thumb.save(out/(name+'-sm.webp'),quality=78)
    manifest.append(dict(name=name,source=str(path.relative_to(ROOT)),width=im.width,height=im.height))
(ROOT/'src/data/media-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
documents=ROOT/'public/documents';documents.mkdir(exist_ok=True)
for source,name in [
 ('正大杯/单身粮与猫粮的共舞：Z世代一人食餐饮市场的陪伴经济学.docx','solo-research.docx'),
 ('正大杯/一人食餐饮的陪伴经济学.pptx','solo-presentation.pptx'),
 ('prp/大学生食物浪费现象调查.pptx','prp-presentation.pptx'),
 ('prp/大学生浪费现象调查问卷.docx','prp-questionnaire.docx')]:
    shutil.copy2(ROOT/'素材'/source,documents/name)
videos=[('实习项目/Q睿混合版（无水印）-0921.mp4','q-rui'),('非设计类课程作业视频/管原课介绍乐视--LeEco Future Outlook pro2.mp4','leeco'),('非设计类课程作业视频/红课作--《交·通》.mp4','jiaotong')]
info=[]
for source,name in videos:
    path=ROOT/'素材'/source
    result=subprocess.run([ffmpeg,'-hide_banner','-i',str(path)],capture_output=True)
    meta=result.stderr.decode('utf-8',errors='replace')
    info.append(dict(name=name,source=source,metadata=meta[:6000]))
    for t in [5,20,45]:
        subprocess.run([ffmpeg,'-hide_banner','-loglevel','error','-y','-ss',str(t),'-i',str(path),'-frames:v','1','-vf','scale=1000:-2',str(ROOT/'tmp/materials'/f'{name}-{t}.jpg')],check=True)
(ROOT/'tmp/materials/video-info.json').write_text(json.dumps(info,ensure_ascii=False,indent=2),encoding='utf-8')
font=ImageFont.truetype('C:/Windows/Fonts/msyh.ttc',15)
sheet=Image.new('RGB',(1200,780),'#f3f0e7');d=ImageDraw.Draw(sheet)
for row,(_,name) in enumerate(videos):
    for col,t in enumerate([5,20,45]):
        im=Image.open(ROOT/'tmp/materials'/f'{name}-{t}.jpg');im.thumbnail((390,225));sheet.paste(im,(col*400,row*260));d.text((col*400,row*260+228),f'{name} / {t}s',fill='#222',font=font)
sheet.save(ROOT/'tmp/materials/video-sheet.jpg')
print('MEDIA READY',len(manifest))
print('\n'.join(i['name']+' '+re.search(r'Duration: ([^,]+)',i['metadata']).group(1) for i in info))
