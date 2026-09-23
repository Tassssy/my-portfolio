import { assetUrl } from './asset-url';
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Arrow, Star, Insight } from './components/Icons';
import { projectCards as projects } from './data/project-cards';
import { experiencePreview as experience } from './data/experience-preview';
import { ResponsiveImage } from './components/Media';
import { ProjectCard } from './components/ProjectCard';
import { CaseFeedback, CaseBoundary } from './components/CaseFeedback';
const LazyCaseStudy = lazy(() => import('./components/LazyCaseStudy'));
import { Experience } from './components/Experience';
import { About } from './components/About';
export default function App(){
  const [filter,setFilter]=useState('全部');
  const [selected,setSelected]=useState(null);
  const [menu,setMenu]=useState(false);
  const [active,setActive]=useState('home');
  const [toast,setToast]=useState('');

  const heroArt=useRef(null);
  const toastTimer=useRef(null);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:'-20% 0px -55% 0px'});
    document.querySelectorAll('main > section[id]').forEach(el=>observer.observe(el));
    return ()=>{observer.disconnect();clearTimeout(toastTimer.current)};
  },[]);
  useEffect(()=>{
    const sync=()=>{const id=window.location.hash.match(/^#case\/(.+)$/)?.[1];setSelected([...projects,experience].find(item=>item.id===id)||null);};
    sync();window.addEventListener('hashchange',sync);window.addEventListener('popstate',sync);
    return ()=>{window.removeEventListener('hashchange',sync);window.removeEventListener('popstate',sync);};
  },[]);
  useEffect(()=>{document.title=selected ? selected.name+' · 周天翊' : '周天翊 · 把洞察变成共鸣';},[selected]);
  const openProject=project=>{window.history.pushState({portfolioCase:true},'', '#case/'+project.id);setSelected(project);};
  const closeProject=()=>{setSelected(null);if(window.history.state?.portfolioCase)window.history.back();else window.history.replaceState(null,'', '#projects');};
  const copy=async()=>{try{await navigator.clipboard.writeText('3654298@sjtu.edu.cn');setToast('邮箱已复制，期待与你交流。')}catch{setToast('邮箱：3654298@sjtu.edu.cn')}clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(''),4000)};
  const moveArt=e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return; const r=e.currentTarget.getBoundingClientRect();heroArt.current.style.transform=`rotate(${-7+(e.clientX-r.left-r.width/2)/65}deg) translateY(${(e.clientY-r.top-r.height/2)/35}px)`};
  const navItems=[['about','关于我'],['experience','实践经历'],['projects','精选项目']];
  return <>
    <header className="header"><a className="brand" href="#home" aria-label="周天翊，返回首页">ZTY<span className="brand-dot" aria-hidden="true">✳</span><span className="brand-name">周天翊</span></a><nav className={menu?'nav open':'nav'} aria-label="主导航">{navItems.map(([id,label])=><a key={id} href={`#${id}`} className={active===id?'active':''} onClick={()=>setMenu(false)}>{label}</a>)}</nav><a className="contact-nav" href="#contact">聊一聊 <Arrow diagonal/></a><button className="menu-toggle" aria-label={menu?'关闭导航':'打开导航'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?'关闭':'菜单'}</button></header>
    <main>
      <section id="home" className="hero wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="eyebrow-separator">/</span> 2027届</div><h1>用理性洞察，<br/>让品牌<span className="headline-highlight">有感。<svg viewBox="0 0 280 20"><path d="M3 12Q134 1 276 10M25 18Q120 6 246 15"/></svg></span></h1><p className="hero-intro">你好，我是<span>周天翊</span>。<br/>商业思维，创意表达，还有 AI 行动力。<br/>在数据与故事之间，把想法变成真实的行动。</p><div className="hero-actions"><a className="button primary" href="#projects">探索我的项目 <Arrow diagonal/></a><a className="resume-link" href={assetUrl("/resume.pdf")} download="周天翊-品牌策划.pdf">下载简历 <span>↓</span></a></div><div className="hero-meta"><span>上海交通大学 · 安泰经管</span><span>品牌营销 / 产品营销</span></div></div>
        <div className="hero-visual" onPointerMove={moveArt} onPointerLeave={()=>heroArt.current.style.transform=''}><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="visual-label top-label">CURIOUS MIND.<br/>CREATIVE HEART.</span><div className="hero-photo-slip"><ResponsiveImage image={{src:"/media/personal-red.webp",alt:"周天翊的校园生活照",width:680,height:453}} eager sizes="(max-width:600px) 210px, 280px"/><span>THINK / MAKE / FEEL</span></div><div className="identity-card" ref={heroArt}><div className="identity-top"><span>HELLO, I’M</span><span>✳</span></div><div className="identity-name">TIANYI<br/>ZHOU<span>周天翊</span></div><div className="identity-graphic"><div className="graphic-oval"/><div className="graphic-line"/><Star/></div><div className="identity-bottom"><span>INSIGHT / IDEA / IMPACT</span><span>EDITION 02</span></div></div><div className="floating-tag tag-insight"><Insight/> 数据里找洞察</div><div className="floating-tag tag-creative"><Star/> 创意里见共鸣</div><span className="visual-label bottom-label">FINANCE × MARKETING<br/>A DIFFERENT PERSPECTIVE.</span><div className="circle-note">保持好奇<span>STAY CURIOUS</span></div></div>
        <div className="hero-bottom"><span>以洞察为起点，以共鸣为目的。</span><a href="#about">向下探索 <span>↓</span></a><span className="hero-edition">PERSONAL PORTFOLIO — VOL.02</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><div>{[0,1,2,3].map(i=><React.Fragment key={i}><span>DATA / STORY</span><Star/><span>THINK / MAKE</span><Star/><span>BUSINESS / CREATIVITY</span><Star/></React.Fragment>)}</div></div>
      <About/>
      <Experience onOpen={openProject}/>
      <section id="projects" className="projects wrap section"><div className="section-heading"><div><p className="section-kicker">03 / SELECTED PROJECTS</p><h2>想法，要有回响<span>。</span></h2></div><p className="section-description">从研究到表达，从策划到现场。<br/>有原始作品，也有可追溯的项目记录。</p></div><div className="project-controls"><div className="filters" aria-label="按项目类型筛选">{['全部','消费者洞察','内容传播','项目落地'].map(f=><button key={f} aria-pressed={filter===f} className={filter===f?'selected':''} onClick={()=>setFilter(f)}>{f}{f==='全部'&&<sup>05</sup>}</button>)}</div><span className="project-hint">点击项目卡片，查看完整案例</span></div><div className="project-grid">{projects.filter(p=>filter==='全部'||p.type===filter).map(p=><ProjectCard key={p.id} project={p} onOpen={openProject}/>)}</div><p className="project-footnote">FIELD NOTES / 图形封面背后，是实际完成的研究、内容与活动。</p></section>
      <section id="contact" className="contact"><div className="wrap"><div className="contact-top"><p className="section-kicker">04 / LET’S CONNECT</p><span><i className="status-dot"/> 寻找品牌营销 / 产品营销 / 市场管培机会</span></div><h2>下一个好故事，<br/>一起<span>开始。</span><Star/></h2><div className="contact-bottom"><div><p>关于机会、创意，或一个有意思的想法。</p><a className="email" href="mailto:3654298@sjtu.edu.cn">3654298@sjtu.edu.cn <Arrow diagonal/></a></div><div className="contact-buttons"><button onClick={copy}>复制邮箱 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M15 8V4H4v11h4"/></svg></button><a href="tel:17625595135">电话联系 <Arrow diagonal/></a></div></div><footer><span>© {new Date().getFullYear()} 周天翊 · TIANYI ZHOU</span><span>用心观察，认真表达。</span><a href="#home">回到顶部 ↑</a></footer></div></section>
    </main>
    {selected&&<CaseBoundary key={selected.id} name={selected.name} onClose={closeProject}><Suspense fallback={<CaseFeedback name={selected.name} onClose={closeProject}/>}><LazyCaseStudy projectId={selected.id} onClose={closeProject}/></Suspense></CaseBoundary>}
    <div className={`toast ${toast?'visible':''}`} role="status">{toast}</div>
  </>;
}
