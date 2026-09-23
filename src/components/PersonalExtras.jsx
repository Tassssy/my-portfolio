import { MediaCarousel } from './MediaCarousel';
import { aiCertificates } from '../data/showcase';
import { personal } from '../data/personal';
import { VideoPlayer } from './Media';
export function AIDetail(){return (<div className="ai-detail"><div><h4>持续学习，也保持判断。</h4><p>已修读人工智能通识课、「人工智能 + X」特色交叉课与国产大模型应用实战课，参加人工智能综合能力提升培训。</p><p>在百胜中国实习中，也接触了 AI 产品 Q睿 的宣传筹备，观察技术如何被讲述给不同的受众。</p></div><MediaCarousel images={aiCertificates} label="AI 课程证书" variant="certificates"/></div>);}
export function CourseVideos(){return (<><aside className="course-note"><span>一点小小的说明 / TvT</span><p>这两个视频都是和朋友们在玩闹中的尝试，希望能成为课堂作业里的加分项，所以没有花费大量的时间，也没有精细的修剪，请见谅 TvT</p></aside><div className="course-videos">{personal.videos.map(video=><VideoPlayer key={video.src} video={video}/>)}</div></>);}
