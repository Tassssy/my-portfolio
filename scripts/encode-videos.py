from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import sys,subprocess,json
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tmp/video-runtime'))
import imageio_ffmpeg
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
items=json.loads((ROOT/'tmp/materials/video-info.json').read_text(encoding='utf-8'))
def encode(item):
    target=ROOT/'public/media'/(item['name']+'.mp4')
    result=subprocess.run([ffmpeg,'-hide_banner','-loglevel','error','-y','-i',str(ROOT/'素材'/item['source']),'-vf',"scale=w='min(1280,iw)':h=-2",'-c:v','libx264','-preset','fast','-crf','26','-threads','3','-c:a','aac','-b:a','96k','-movflags','+faststart',str(target)],capture_output=True)
    if result.returncode:raise RuntimeError(result.stderr.decode('utf-8',errors='replace'))
    print(item['name'],round(target.stat().st_size/1024/1024,1),'MB',flush=True)
with ThreadPoolExecutor(max_workers=2) as pool:list(pool.map(encode,items))
