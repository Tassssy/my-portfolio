import { assetUrl } from '../asset-url';
import { useEffect, useRef, useState } from 'react';
import { personal } from '../data/personal';
import { ResponsiveImage } from './Media';

export function LifeGallery() {
  const rail = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const sync = () => {
    const el = rail.current;
    setEdges({ start: el.scrollLeft < 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  };
  useEffect(() => {
    const observer = new ResizeObserver(sync);
    observer.observe(rail.current);
    return () => observer.disconnect();
  }, []);
  const move = direction => {
    const el = rail.current;
    const card = el.querySelector('figure');
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + 24), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <div className="life-gallery">
    <div className="life-gallery-heading"><div><p className="section-kicker">OFF THE CLOCK / 生活的切片</p><h3>也在生活里，收集灵感。</h3><p>听音乐、去远方，也认真享受普通的一天。</p></div><div className="life-controls"><button type="button" onClick={()=>move(-1)} disabled={edges.start} aria-label="向前浏览生活照片">←</button><button type="button" onClick={()=>move(1)} disabled={edges.end} aria-label="向后浏览生活照片">→</button></div></div>
    <div className="life-rail" ref={rail} onScroll={sync} role="region" aria-label="生活相册，可左右滑动浏览" tabIndex={0}>
      {personal.gallery.map((photo,index)=><figure className="life-photo" key={photo.src}><a href={assetUrl(photo.original || photo.src)} target="_blank" rel="noopener noreferrer" aria-label={`查看生活照原图：${photo.alt}`}><ResponsiveImage image={photo}/><span className="life-photo-expand">查看原图 ↗</span></a><figcaption><span>{photo.caption}</span><span>{String(index+1).padStart(2,'0')}</span></figcaption></figure>)}
    </div><p className="life-gallery-hint">左右滑动，看看更多日常 <span>PHOTO DIARY ↔</span></p>
  </div>;
}
