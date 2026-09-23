import { experiencePreview as experience } from '../data/experience-preview';
import { Arrow, Briefcase } from './Icons';
import { ResponsiveImage } from './Media';

export function Experience({ onOpen }) {
  return <section id="experience" className="experience section"><div className="wrap"><div className="section-heading"><div><p className="section-kicker">02 / REAL-WORLD EXPERIENCE</p><h2>在真实商业中，<br/>练习把事情做好。</h2></div><Briefcase className="experience-decoration"/></div>
    <div className="experience-row"><div className="experience-info"><span className="date">2025.07 — 2025.12</span><h3>百胜中国<span>YUM CHINA</span></h3><p>投资者关系部 · 实习生</p><div className="experience-chips"><span>餐饮消费</span><span>AI 产品传播</span><span>跨部门沟通</span></div></div><div className="experience-details">{experience.process.map((step,index)=><div className="experience-point" key={step.title}><span>0{index+1}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></div>)}</div></div>
    <button className="experience-preview" onClick={()=>onOpen(experience)} aria-label="查看百胜中国完整实习案例"><div className="experience-preview-image"><ResponsiveImage image={experience.hero}/><span className="play-symbol"><Arrow diagonal/></span></div><div className="experience-preview-copy"><span className="section-kicker">PROJECT IN FOCUS / Q睿</span><h3>当 AI 走进餐厅，<br/>产品故事如何被讲述？</h3><p>宣传成片、我的具体职责，<br/>以及投资者日的官方公开记录。</p><span className="experience-preview-cta">深入了解这段实习 <Arrow diagonal/></span></div></button>
  </div></section>;
}
