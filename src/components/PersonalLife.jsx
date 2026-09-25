import { lazy, Suspense, useState } from 'react';
import { LifeGallery } from './LifeGallery';

const AIDetail = lazy(() => import('./PersonalExtras').then(module => ({ default: module.AIDetail })));
const CourseVideos = lazy(() => import('./PersonalExtras').then(module => ({ default: module.CourseVideos })));

export function PersonalLife() {
  const [aiLoaded, setAiLoaded] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState(false);

  return <section id="life" className="personal-life wrap section" aria-label="生活、学习与课外表达">
    <LifeGallery/>
    <div className="personal-notes"><details className="personal-note" onToggle={event=>{if(event.currentTarget.open)setAiLoaded(true);}}><summary><div><span className="section-kicker">01 / LEARNING BY DOING</span><h3>把好奇心，带进 AI 的课堂。</h3><p>人工智能通识、交叉课程与国产大模型应用实战。</p></div><span className="details-action"><span className="details-open-label">展开</span><span className="details-close-label">收起</span><span className="details-plus" aria-hidden="true">+</span></span></summary>{aiLoaded&&<Suspense fallback={<p role="status">正在加载学习记录…</p>}><AIDetail/></Suspense>}</details>
    <details className="personal-note" onToggle={event=>{if(event.currentTarget.open)setVideosLoaded(true);else event.currentTarget.querySelectorAll('video').forEach(video=>video.pause());}}><summary><div><span className="section-kicker">02 / MOVING IMAGES</span><h3>还有一些，课本之外的表达。</h3><p>用视频呈现课程主题：一段商业情境演绎，一部校园短片。</p></div><span className="details-action"><span className="details-open-label">展开</span><span className="details-close-label">收起</span><span className="details-plus" aria-hidden="true">+</span></span></summary>{videosLoaded&&<Suspense fallback={<p role="status">正在加载视频封面…</p>}><CourseVideos/></Suspense>}</details></div>
  </section>;
}
