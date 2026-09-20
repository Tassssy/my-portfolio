import { assetUrl } from '../asset-url';
import { LifeGallery } from './LifeGallery';
import { personal } from '../data/projects';
import { ResponsiveImage, VideoPlayer } from './Media';
import { SkillSet } from './SkillSet';
import { MediaCarousel } from './MediaCarousel';
import { aiCertificates } from '../data/showcase';

export function About() {
  return <section id="about" className="about wrap section"><div className="section-heading"><div><p className="section-kicker">01 / A LITTLE ABOUT ME</p><h2>理性与感性，<br/>不必二选一<span>。</span></h2></div><span className="about-margin-note">A PERSON,<br/>NOT JUST A PROFILE. ↙</span></div>
    <div className="about-grid"><div className="personal-collage"><div className="personal-main"><ResponsiveImage image={personal.portrait}/><span className="personal-photo-label">TIANYI, OFF THE CLOCK.</span></div><div className="personal-stage"><a href={assetUrl(personal.performance.original)} target="_blank" rel="noopener noreferrer" aria-label="查看音乐生活照原图"><ResponsiveImage image={personal.performance}/></a><span>另一种表达 / MUSIC</span></div><span className="portrait-caption">周天翊 / 商业思维，也有创意直觉。</span></div>
      <div className="about-content"><p className="about-lead">我喜欢数据里清晰的逻辑，<br/>也相信故事里动人的力量。</p><div className="about-text"><p>金融学训练我分析问题，市场营销让我关注数字背后的人。</p><p>课堂之外，我拉二胡、做内容、组织演出，也在持续学习 AI 与大模型应用。比起只停留在想法里，我更喜欢把东西做出来。</p></div><div className="identity-words" aria-label="我的不同身份"><span>FINANCE</span><b>×</b><span>MARKETING</span><span>ERHU</span><span>CONTENT</span><b>↗</b><span>AI</span><span>CURIOSITY</span></div>
        <div className="education"><span className="small-label">EDUCATION / 教育背景</span><h3>上海交通大学 <span>2023.09 — 2027.06</span></h3><p>安泰经济与管理学院 · 金融学 · 辅修市场营销</p><div className="honors"><span>↗ 2025–2026 学年本科生 A 等奖学金</span><span>↗「榜样的力量」重大文体类表彰</span></div></div>
        <SkillSet/>
      </div></div>
    <LifeGallery/>
    <div className="personal-notes"><details className="personal-note"><summary><div><span className="section-kicker">01 / LEARNING BY DOING</span><h3>把好奇心，带进 AI 的课堂。</h3><p>人工智能通识、交叉课程与国产大模型应用实战。</p></div><span className="details-plus">+</span></summary><div className="ai-detail"><div><h4>持续学习，也保持判断。</h4><p>已修读人工智能通识课、「人工智能 + X」特色交叉课与国产大模型应用实战课，参加人工智能综合能力提升培训。</p><p>在百胜中国实习中，也接触了 AI 产品 Q睿 的宣传筹备，观察技术如何被讲述给不同的受众。</p></div><MediaCarousel images={aiCertificates} label="AI 课程证书" variant="certificates"/></div></details>
    <details className="personal-note" onToggle={event=>{if(!event.currentTarget.open)event.currentTarget.querySelectorAll('video').forEach(video=>video.pause());}}><summary><div><span className="section-kicker">02 / MOVING IMAGES</span><h3>还有一些，课本之外的表达。</h3><p>用视频呈现课程主题：一段商业情境演绎，一部校园短片。</p></div><span className="details-plus">+</span></summary><aside className="course-note"><span>一点小小的说明 / TvT</span><p>这两个视频都是和朋友们在玩闹中的尝试，希望能成为课堂作业里的加分项，所以没有花费大量的时间，也没有精细的修剪，请见谅 TvT</p></aside><div className="course-videos">{personal.videos.map(video=><VideoPlayer key={video.src} video={video}/>)}</div></details></div>
  </section>;
}
