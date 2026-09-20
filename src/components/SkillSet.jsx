import { assetUrl } from '../asset-url';
const groups = [
  { label:'ANALYTICAL / 分析', tools:[{name:'Python',icon:'python'},{name:'Stata',mark:'St',style:'stata'},{name:'Excel',mark:'X',style:'excel'}] },
  { label:'CREATIVE / 表达', tools:[{name:'Canva',mark:'C',style:'canva'},{name:'Photoshop',mark:'Ps',style:'photoshop'},{name:'秀米',mark:'秀',style:'xiumi'}] },
  { label:'SOCIAL / 传播', tools:[{name:'公众号',icon:'wechat'},{name:'小红书',icon:'xiaohongshu'},{name:'B站',icon:'bilibili'}] },
];

export function SkillSet() {
  return <div className="skills-toolkit"><div className="toolkit-title"><span className="small-label">MY TOOLKIT / 常用工具</span><span aria-hidden="true">↗</span></div>
    {groups.map(group=><div className="toolkit-group" key={group.label}><h4>{group.label}</h4><ul>{group.tools.map(tool=><li key={tool.name}><span className={`tool-icon icon-${tool.icon||tool.style}`} aria-hidden="true">{tool.icon?<img src={assetUrl(`/icons/${tool.icon}.svg`)} alt="" width="24" height="24"/>:tool.mark}</span><span>{tool.name}</span></li>)}</ul></div>)}
    <div className="toolkit-language"><span className="language-icon" aria-hidden="true">A<span>文</span></span><div><h4>LANGUAGE / 语言</h4><p><span>IELTS <strong>7.0</strong></span><span>CET-6 <strong>533</strong></span></p></div></div>
  </div>;
}
