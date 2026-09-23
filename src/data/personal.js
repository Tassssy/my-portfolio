import { media } from './media';
export const personal = {
  portrait: media('personal-curious', '周天翊戴帽子与眼镜在户外自拍', '日常里的我。观察、体验，也保持好奇。'),
  performance: media('personal-satar', '周天翊身穿蓝色长裙演奏萨塔尔', 'MUSIC / 另一种表达', {
    useOriginal: true
  }),
  gallery: [media('life-snow', '周天翊在雪场体验滑雪', '试试新鲜事 / SNOW'), media('life-flowers', '周天翊在紫色花丛中', '春天的颜色 / SPRING'), media('life-travel', '周天翊在街边旅行留影', '走走停停 / ON THE ROAD'), media('life-music', '周天翊戴着耳机听音乐', '给自己一首歌 / MUSIC'), media('life-sunshine', '周天翊在阳光下的户外生活照', '追一束光 / SUNSHINE'), media('life-city', '周天翊在节日街景前留影', '普通的快乐 / LITTLE JOYS')],
  ai: media('ai-course', '国产大模型应用实战课课程修读证明', '国产大模型应用实战课 · 课程修读证明', {
    kind: 'poster'
  }),
  videos: [{
    src: '/media/leeco.mp4',
    poster: '/media/showcase/leeco-cover.jpg',
    duration: '02:04',
    title: 'LeEco Future Outlook',
    caption: '管理学原理课程小组视频 · 2 分 04 秒。课程情境演绎，非企业官方材料。'
  }, {
    src: '/media/jiaotong.mp4',
    poster: '/media/showcase/jiaotong-cover.jpg',
    duration: '08:10',
    title: '《交·通》',
    caption: '课程作业短片 · 8 分 10 秒。小组作品。'
  }]
};
