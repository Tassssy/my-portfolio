import { assetUrl } from '../asset-url';
import { personal } from '../data/personal';
import { ResponsiveImage } from './Media';
import { SkillSet } from './SkillSet';

export function About() {
  return <section id="about" className="about wrap section"><div className="section-heading"><div><p className="section-kicker">01 / A LITTLE ABOUT ME</p><h2>理性与感性，<br/>不必二选一<span>。</span></h2></div><span className="about-margin-note">A PERSON,<br/>NOT JUST A PROFILE.</span></div>
    <div className="about-grid"><div className="personal-collage"><div className="personal-main"><ResponsiveImage image={personal.portrait}/><span className="personal-photo-label">TIANYI, OFF THE CLOCK.</span></div><div className="personal-stage"><a href={assetUrl(personal.performance.original)} target="_blank" rel="noopener noreferrer" aria-label="查看音乐生活照原图"><ResponsiveImage image={personal.performance}/><span className="personal-image-open">查看原图 ↗</span></a><span>另一种表达 / MUSIC</span></div><span className="portrait-caption">周天翊 / 商业思维，也有创意直觉。</span></div>
      <div className="about-content"><p className="about-lead">我喜欢数据里清晰的逻辑，<br/>也相信故事里动人的力量。</p><div className="about-text"><p>金融学训练我分析问题，市场营销让我关注数字背后的人。</p><p>课堂之外，我拉二胡、做内容、组织演出，也在持续学习 AI 与大模型应用。比起只停留在想法里，我更喜欢把东西做出来。</p></div><div className="identity-words" aria-label="我的不同身份"><span>FINANCE</span><b aria-hidden="true">·</b><span>MARKETING</span><span>ERHU</span><span>CONTENT</span><b aria-hidden="true">·</b><span>AI</span><span>CURIOSITY</span></div>
        <div className="education"><span className="small-label">EDUCATION / 教育背景</span><h3>上海交通大学 <span>2023.09 — 2027.06</span></h3><p>安泰经济与管理学院 · 金融学 · 辅修市场营销</p><div className="honors"><span>2025–2026 学年本科生 A 等奖学金</span><span>「榜样的力量」重大文体类表彰</span></div></div>
        <SkillSet/>
      </div></div>

  </section>;
}
