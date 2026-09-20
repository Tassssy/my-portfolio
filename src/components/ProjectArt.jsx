import { assetUrl } from '../asset-url';
import { Arrow, Star } from './Icons';
export function ProjectArt({ project }) {
  return <div className={`project-art ${project.color}`} aria-hidden="true"><span className="art-index">FIELD NOTES / 0{project.number}</span>
    {project.id==='insight' ? <div className="solo-art"><span className="solo-word">one<span>+</span></span><div className="solo-ring"/><span className="art-caption">一个人的生活，无限种可能。</span></div> : project.id==='content' ? <div className="echo-art"><div className="echo-ring r1"/><div className="echo-ring r2"/><div className="echo-ring r3"/><Star/><span>微小行动<br/>也有回响<span className="tiny-star">✳</span></span></div> : project.id==='creative' ? <div className="music-art"><div className="music-lines">{Array.from({length:17},(_,i)=><i key={i} style={{height:`${30+Math.sin(i*.8)*24+((i*13)%35)}%`}}/>)}</div><span>听见<br/><b>新声。</b></span></div> : project.id==='research' ? <div className="plate-art"><div className="plate"><Star/></div><span>好好<br/>吃饭。</span></div> : <div className="event-art"><span>LET’S<br/><b>MAKE<br/>MEMORIES.</b></span><Star/></div>}
    {project.cover && <div className="cover-evidence"><img src={assetUrl(project.cover.src)} alt="" loading="lazy" decoding="async" style={{objectPosition:project.cover.position}}/><span className="cover-evidence-label">{project.cover.label || "真实项目记录"} <Arrow diagonal/></span></div>}
    <span className="art-bottom">{project.en}</span><span className="art-arrow"><Arrow diagonal/></span>
  </div>;
}
