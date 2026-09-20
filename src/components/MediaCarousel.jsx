import { assetUrl } from '../asset-url';
import { useEffect, useRef, useState } from 'react';
import { ResponsiveImage } from './Media';

export function MediaCarousel({ images, label, variant = 'slides', description, interval = 6500 }) {
  const root = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [reducedMotion, setReducedMotion] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const swipe = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 });
    observer.observe(root.current);
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    motion.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => { observer.disconnect(); motion.removeEventListener('change', updateMotion); document.removeEventListener('visibilitychange', updateVisibility); };
  }, []);
  const rotating = !paused && !interacting && !focused && !reducedMotion && visible && pageVisible;
  useEffect(() => {
    if (!rotating || images.length < 2) return;
    const timer = setInterval(() => setIndex(value => (value + 1) % images.length), interval);
    return () => clearInterval(timer);
  }, [rotating, images.length, interval]);
  const select = next => { setPaused(true); setIndex((next + images.length) % images.length); };
  const current = images[index];
  return <section className={`media-carousel carousel-${variant}`} ref={root} aria-label={label} aria-roledescription="轮播" onMouseEnter={()=>setInteracting(true)} onMouseLeave={()=>setInteracting(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocused(false);}}>
    <div className="carousel-viewport" tabIndex={0} aria-label={`${label}，可用左右方向键切换`} onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();select(index+(event.key==='ArrowRight'?1:-1));}}} onTouchStart={event=>{swipe.current=event.touches[0].clientX;}} onTouchEnd={event=>{if(swipe.current!==null){const distance=event.changedTouches[0].clientX-swipe.current;if(Math.abs(distance)>45)select(index+(distance<0?1:-1));swipe.current=null;}}}>
      <div className="carousel-track" style={{transform:`translateX(-${index*100}%)`}}>
        {images.map((item, position)=><div key={item.src} className="carousel-slide" role="group" aria-roledescription="幻灯片" aria-label={`${position+1} / ${images.length}，${item.alt}`} aria-hidden={position!==index} inert={position!==index}><a href={assetUrl(item.original || item.src)} target="_blank" rel="noopener noreferrer" aria-label={`查看原图：${item.alt}`}><ResponsiveImage image={item}/><span className="carousel-image-open">查看原图 ↗</span></a></div>)}
      </div>
    </div>
    <div className="carousel-controls"><div className="carousel-arrows"><button type="button" aria-label={`${label}：上一张`} onClick={()=>select(index-1)}>←</button><button type="button" aria-label={`${label}：下一张`} onClick={()=>select(index+1)}>→</button></div><span className="carousel-count" aria-live={paused?'polite':'off'}>{String(index+1).padStart(2,'0')} <span>/ {String(images.length).padStart(2,'0')}</span></span><button type="button" className="carousel-rotation" onClick={()=>setPaused(value=>!value)} disabled={reducedMotion} aria-label={`${label}：${paused?'开启自动轮播':'暂停自动轮播'}`}>{reducedMotion?'手动浏览':paused?'自动播放 ▷':'暂停轮播 Ⅱ'}</button></div>
    <div className="carousel-dots" aria-label={`${label}：选择图片`}>{images.map((item,position)=><button type="button" key={item.src} aria-label={`${label}：第 ${position+1} 张`} aria-current={index===position?'true':undefined} onClick={()=>select(position)}><span/></button>)}</div>
    <p className="carousel-caption">{current.caption}</p>
    {description&&<p className="carousel-description">{description}</p>}
  </section>;
}
