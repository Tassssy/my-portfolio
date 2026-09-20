import { useEffect, useRef } from 'react';
import { Arrow, Star } from './Icons';
import { MediaFigure, MediaGallery, VideoPlayer } from './Media';
import { EvidenceLinks, Metrics } from './Evidence';
import { MediaCarousel } from './MediaCarousel';
import { SiyuanStories, SiyuanPostReader } from './SiyuanStories';

export function CaseStudy({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(()=>{
    const element=dialog.current;
    if (!project) { if(element.open)element.close(); return; }
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    if (!element.open) element.showModal();
    element.scrollTop=0;
    return ()=>{document.body.style.overflow=previousOverflow;};
  },[project]);
  return <dialog ref={dialog} aria-labelledby="case-title" className="case-dialog" onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===event.currentTarget)onClose();}}>
    {project&&<article className={`case-study case-${project.id}`} key={project.id}>
      <div className="case-toolbar"><span className="case-brand">ZTY<Star/></span><span className="case-toolbar-title">FIELD NOTES / {String(project.number).padStart(2,'0')}<span> — {project.type}</span></span><button className="case-close" onClick={onClose} autoFocus aria-label="关闭案例，返回作品集">返回作品集 <span>×</span></button></div>
      <header className="case-header case-inner"><p className="section-kicker">{project.en}</p><h1 id="case-title">{project.name}</h1><p className="case-subtitle">{project.subtitle}</p><div className="case-meta"><div><span>WHEN</span><p>{project.date}</p></div><div><span>MY ROLE</span><p>{project.roleShort}</p></div><div><span>FOCUS</span><p>{project.tags.join(' / ')}</p></div></div></header>
      <div className="case-hero-media">{project.heroSlides?.length ? <MediaCarousel images={project.heroSlides} label={project.heroLabel || '餐饮市场调研 PPT'} variant={project.id==='content'?'photos':'slides'} description={project.heroDescription} interval={8000}/> : <MediaFigure image={project.hero} eager/>}</div>
      <section className="case-context case-inner"><p className="section-kicker">CONTEXT / 项目背景</p><div><h2>{project.context.title}</h2><p>{project.context.text}</p></div></section>
      <section className={`case-role case-inner ${!project.roleMedia?'role-text-only':''}`}>
        {project.roleMedia&&<div className="case-sticky"><MediaFigure image={project.roleMedia}/></div>}
        <div className="role-copy"><p className="section-kicker">MY ROLE / 我具体做了什么</p><h2>{project.id==='content' ? <>在课堂里参与，<br/>在现场里组织。</> : '把职责，落到具体的事。'}</h2><ul>{project.responsibilities.map(text=><li key={text}>{text}</li>)}</ul></div>
      </section>
      <section className="case-process"><div className="case-inner"><div className="case-section-heading"><p className="section-kicker">PROCESS / 工作如何发生</p><h2>有思路，也有行动。</h2></div><div className="process-grid">{project.process.map((step,index)=><div className="process-step" key={step.title}><span className="process-number">0{index+1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>
      {project.story&&<section className="case-story"><div className="story-copy case-inner"><span className="section-kicker">{project.story.label}</span><h2>{project.story.title}</h2><p>{project.story.text}</p></div>{project.story.images ? <div className="case-inner"><MediaCarousel images={project.story.images} label="采色行动实践照片" variant="photos" interval={8000}/></div> : <MediaFigure image={project.story.image}/>}</section>}
      {project.id==='content'&&<><SiyuanStories/><SiyuanPostReader/></>}
      {(project.images?.length>0||project.videos?.length>0)&&<section className="case-material case-inner"><div className="case-section-heading"><div><p className="section-kicker">REAL MATERIAL / 作品与记录</p><h2>{project.materialsTitle}</h2></div><p>{project.materialsIntro}</p></div><MediaGallery images={project.images}/>{project.videos?.map(video=><VideoPlayer key={video.src} video={video}/>)}</section>}
      <section className="case-output case-inner"><p className="section-kicker">OUTPUT / 最终产出</p><div>{project.output.map((text,index)=><p key={text}><span>{String(index+1).padStart(2,'0')}</span>{text}<Arrow diagonal/></p>)}</div></section>
      <Metrics metrics={project.metrics} note={project.metricsNote} award={project.award}/>
      {project.links?.length>0&&<section className="case-links case-inner"><div className="case-section-heading"><div><p className="section-kicker">EXTERNAL EVIDENCE / 继续看真实作品</p><h2>{project.images?.length===0&&project.videos?.length===0 ? project.materialsTitle : '让作品自己说话。'}</h2></div><p>{project.id==='events' ? project.materialsIntro : '打开原始作品、项目文件与公开记录。'}</p></div><EvidenceLinks links={project.links}/></section>}
      <section className="case-reflection"><div className="case-inner"><p className="section-kicker">REFLECTION / 留下来的思考</p><Star/><blockquote>{project.reflection.quote}</blockquote><p>{project.reflection.text}</p>{project.reflection.source&&<cite>{project.reflection.source}</cite>}</div></section>
      <footer className="case-footer case-inner"><span>ZTY / {project.en}</span><button onClick={onClose}>回到作品集 <Arrow/></button></footer>
    </article>}
  </dialog>;
}
