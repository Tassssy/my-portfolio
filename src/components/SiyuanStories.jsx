import { assetUrl } from '../asset-url';
import { useEffect, useRef, useState } from 'react';
import { siyuanMemories, siyuanPosts } from '../data/siyuan';
import { ResponsiveImage } from './Media';

export function SiyuanStories() {
  const [selected, setSelected] = useState(null);
  const popup = useRef(null);
  const rail = useRef(null);
  const opener = useRef(null);
  const savedOverflow = useRef('');
  const photo = selected === null ? null : siyuanMemories[selected];
  useEffect(() => {
    if (selected === null) return;
    const outer = popup.current.closest('.case-dialog');
    savedOverflow.current = outer.style.overflow;
    outer.style.overflow = 'hidden';
    popup.current.showModal();
    return () => { outer.style.overflow = savedOverflow.current; };
  }, [selected === null]);
  const close = () => { popup.current.close(); setSelected(null); opener.current?.focus(); };
  const move = direction => setSelected(value => (value + direction + siyuanMemories.length) % siyuanMemories.length);
  return <section className="siyuan-memories case-inner">
    <div className="siyuan-section-head"><div><p className="section-kicker">LITTLE MOMENTS / 相处的细节</p><h2>点开一张照片，<br/>听听那一天的故事。</h2></div><p>一堂音乐课，一次乡村走访，<br/>还有离开时收到的小小心意。</p></div>
    <div className="memory-rail" ref={rail} aria-label="夏令营照片故事，可左右滑动" tabIndex={0}>
      {siyuanMemories.map((item,index)=><button className="memory-card" key={item.key} onClick={event=>{opener.current=event.currentTarget;setSelected(index);}} aria-label={`打开照片故事：${item.title}`}><div><ResponsiveImage image={item}/><span className="memory-open">读这张照片的故事 ↗</span></div><span className="memory-label">{item.caption}</span><h3>{item.title}</h3></button>)}
    </div>
    <div className="memory-rail-footer"><span>左右滑动，收集这个夏天的片刻</span><div><button onClick={()=>rail.current.scrollBy({left:-rail.current.clientWidth*.8,behavior:'smooth'})} aria-label="向前翻阅照片故事">←</button><button onClick={()=>rail.current.scrollBy({left:rail.current.clientWidth*.8,behavior:'smooth'})} aria-label="向后翻阅照片故事">→</button></div></div>
    <dialog className="memory-dialog" ref={popup} aria-labelledby="memory-title" onCancel={event=>{event.preventDefault();event.stopPropagation();close();}} onClick={event=>{event.stopPropagation();if(event.target===event.currentTarget)close();}}>
      {photo&&<div className="memory-dialog-body"><button className="memory-close" onClick={close} aria-label="关闭照片故事">关闭 ×</button><div className="memory-full-photo"><ResponsiveImage image={photo} eager/></div><div className="memory-copy"><span className="section-kicker">{photo.caption}</span><h2 id="memory-title">{photo.title}</h2><p>{photo.story}</p><small>{photo.source}</small><a href={assetUrl(photo.original)} target="_blank" rel="noopener noreferrer">查看高清原图 ↗</a><div className="memory-pagination"><button onClick={()=>move(-1)} aria-label="上一篇照片故事">←</button><span>{String(selected+1).padStart(2,'0')} / 08</span><button onClick={()=>move(1)} aria-label="下一篇照片故事">→</button></div></div></div>}
    </dialog>
  </section>;
}

export function SiyuanPostReader() {
  const viewport = useRef(null);
  const drag = useRef(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const scrollToPercent = percent => { const node=viewport.current;node.scrollTop=(node.scrollHeight-node.clientHeight)*percent/100; };
  const stopDrag = () => { drag.current=null;setDragging(false); };
  return <section className="siyuan-post-reader case-inner">
    <div className="siyuan-section-head"><div><p className="section-kicker">THE COMPLETE STORY / 完整推送</p><h2>再见了，三岔小。</h2></div><p>从第一堂课，读到最后一次告别。<br/>完整保留这篇结营推送的图文与顺序。</p></div>
    <div className="post-reader-shell"><div className="post-reader-toolbar"><span>总结篇 / 三山五岳，岔那永恒</span><span>{Math.round(progress)}% 已读</span></div>
      <div ref={viewport} className={`post-reader-viewport ${dragging?'is-dragging':''}`} tabIndex={0} role="region" aria-label="完整结营推送，支持上下拖动、滚轮和方向键阅读" onScroll={event=>{const n=event.currentTarget;setProgress(n.scrollTop/Math.max(1,n.scrollHeight-n.clientHeight)*100);}} onPointerDown={event=>{if(event.pointerType!=='mouse'||event.button!==0)return;drag.current={y:event.clientY,top:event.currentTarget.scrollTop};event.currentTarget.setPointerCapture(event.pointerId);setDragging(true);}} onPointerMove={event=>{if(drag.current)event.currentTarget.scrollTop=drag.current.top+drag.current.y-event.clientY;}} onPointerUp={stopDrag} onPointerCancel={stopDrag} onLostPointerCapture={stopDrag}>
        <div className="post-continuous">{siyuanPosts.map((item,index)=><img src={assetUrl(item.src)} width={item.width} height={item.height} alt={item.alt} key={item.src} loading={index===0?'eager':'lazy'} decoding="async" draggable={false}/>)}</div>
      </div>
      <div className="post-reader-controls"><span>上下拖动 / 滚轮阅读</span><button onClick={()=>viewport.current.scrollBy({top:viewport.current.clientHeight*.85,behavior:'smooth'})}>往下读 ↓</button><button onClick={()=>scrollToPercent(0)}>回到开篇 ↑</button></div>
      <label className="post-reader-progress"><span>阅读位置</span><input type="range" min="0" max="100" step="0.1" value={progress} onChange={event=>scrollToPercent(Number(event.target.value))} aria-label="调整完整推送阅读进度"/></label>
    </div>
    <p className="post-reader-note">12 段原始图片连续呈现 · <a href="https://mp.weixin.qq.com/s/Uoe-SMrd2dh1dwzXkBwR1g" target="_blank" rel="noopener noreferrer">在公众号打开原文 ↗</a></p>
  </section>;
}
