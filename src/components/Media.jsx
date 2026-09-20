import { assetUrl } from '../asset-url';
import { useRef, useState } from 'react';
import { Arrow } from './Icons';

export function ResponsiveImage({ image, eager = false, className = '' }) {
  return <img className={className} src={assetUrl(image.src)} width={image.width} height={image.height} alt={image.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" style={{ objectPosition: image.position }} />;
}

export function MediaFigure({ image, className = '', eager = false }) {
  if (!image) return null;
  return <figure className={`media-figure media-${image.kind || 'photo'} ${className}`}>
    {image.kind === 'long' ? <div className="long-image-window" tabIndex={0} role="region" aria-label={`${image.alt}，可滚动阅读`}><ResponsiveImage image={image}/></div> : <a className="image-original" href={assetUrl(image.original || image.src)} target="_blank" rel="noopener noreferrer" aria-label={`打开原图：${image.alt}`}><ResponsiveImage image={image} eager={eager}/><span className="image-expand"><Arrow diagonal/></span></a>}
    <figcaption><span>{image.caption}</span><a href={assetUrl(image.original || image.src)} target="_blank" rel="noopener noreferrer" aria-label={`查看完整原图：${image.alt}`}>{image.kind === 'long' ? '完整长图' : '查看原图'} <Arrow diagonal/></a></figcaption>
  </figure>;
}

export function VideoPlayer({ video }) {
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);
  const player = useRef(null);
  const play = async () => { try { await player.current.play(); setStarted(true); } catch { setError(true); } };
  return <figure className="video-figure"><div className="video-heading"><span>PLAY / {video.title}</span><span>↗</span></div><div className="video-stage"><video ref={player} controls={started} playsInline preload="none" poster={assetUrl(video.poster)} aria-label={video.title} onError={()=>setError(true)} onPlay={event=>{setStarted(true);document.querySelectorAll('video').forEach(other=>{if(other!==event.currentTarget)other.pause()});}}><source src={assetUrl(video.src)} type="video/mp4"/>你的浏览器不支持在线播放，可打开视频文件。</video>{!started&&<button type="button" className="video-cover" onClick={play} aria-label={`播放视频：${video.title}`}><img src={assetUrl(video.poster)} alt={`${video.title} 视频封面`} loading="lazy"/><span className="video-cover-play" aria-hidden="true">▶</span><span className="video-cover-label">点击播放 <span>{video.duration || 'WATCH VIDEO'}</span></span></button>}</div><figcaption><span>{video.caption}</span><a href={assetUrl(video.src)} target="_blank" rel="noopener noreferrer">{error ? '打开视频文件' : '独立窗口播放'} <Arrow diagonal/></a></figcaption></figure>;
}

export function MediaGallery({ images }) {
  if (!images?.length) return null;
  return <div className={`media-gallery ${images.some(image=>image.kind==='long') ? 'gallery-posts' : ''}`}>{images.map(image=><MediaFigure image={image} key={image.src}/>)}</div>;
}
