import { media } from './media';
import { siyuanPhoto } from './siyuan-assets';
const siyuanGroups = [siyuanPhoto('school-group', '在三岔小学门口，留下我们的夏天', '三岔小学 · 夏令营团队合照')];
const cards = [{
  id: 'insight',
  type: '消费者洞察',
  title: '从「一个人」的生活，\n看见一群人的需求。',
  en: 'THE SOLO ECONOMY',
  date: '2024.12 — 2025.03',
  tags: ['消费研究', '数据分析', '策略提案'],
  stat: '12',
  unit: '张专业分析图表',
  color: 'green',
  name: '正大杯 · 一人食餐饮的陪伴经济学',
  summary: '研究一人食与宠物消费，完成数据分析、12 张图表和最终汇报，获大赛三等奖。',
  cover: media('solo-report-cover', '单身粮与猫粮的共舞研究报告封面', '', {
    label: '原始研究报告',
    position: '50% 28%'
  })
}, {
  id: 'content',
  type: '内容传播',
  title: '让一次公益行动，\n被更多人看见。',
  en: 'SMALL ACTS. BIG ECHO.',
  date: '2024.05 — 2024.08',
  tags: ['内容策划', '多平台运营', '项目统筹'],
  stat: '10万+',
  unit: '全网阅读量',
  color: 'orange',
  name: '思源公益 · 三岔小学乡村夏令营',
  summary: '统筹两周支教与多平台内容，让一次公益行动在课堂之外继续被看见。',
  cover: {
    ...siyuanGroups[0],
    label: '三岔小学 · 我们的夏天'
  }
}, {
  id: 'creative',
  type: '内容传播',
  title: '让舞台上的热爱，\n延伸到舞台之外。',
  en: 'BEYOND THE STAGE',
  date: '2023.09 — 至今（简历所载）',
  tags: ['视觉设计', '新媒体运营', '演出管理'],
  stat: '近5万',
  unit: 'B站账号累计播放',
  color: 'purple',
  name: '学生民乐团 · 台前与幕后',
  summary: '独立完成招新海报与推送视觉，运营 B站账号，也负责演出现场与团队协作。',
  cover: media('erhu-stage', '周天翊在民乐演出中演奏二胡', '', {
    label: '演出现场 / ERHU',
    position: '50% 42%'
  })
}, {
  id: 'research',
  type: '消费者洞察',
  title: '从一餐的浪费，\n寻找更好的供给。',
  en: 'LESS WASTE. MORE VALUE.',
  date: '2024.09 — 2025.03',
  tags: ['用户调研', '统计检验', '商业建议'],
  stat: '214',
  unit: '份有效调研样本',
  color: 'blue',
  name: 'PRP · 大学生食物浪费现象调查',
  summary: '带领 3 人小组收集 214 份有效样本，把消费行为分析转化为餐饮供给建议。',
  cover: media('prp-social-chart', '原始研究中从众心理与浪费程度的分析图', '', {
    label: '原始调研图表',
    position: '50% 50%'
  })
}, {
  id: 'events',
  type: '项目落地',
  title: '把一个活动想法，\n变成共同的记忆。',
  en: 'MAKE IT HAPPEN',
  date: '2023.09 — 2024.06',
  tags: ['活动策划', '预算管理', '现场执行'],
  stat: '1,800+',
  unit: '累计参与者',
  color: 'pink',
  name: '文体部 · 校园活动与内容传播',
  summary: '组织大型校园活动，负责预算、流程与现场调度，同时参与文案、推送与传播。',
  cover: media('night-run', '夜跑者联盟活动合照', '', {
    label: '夜跑者联盟 · 活动记录'
  })
}];
const order = ['insight', 'research', 'creative', 'content', 'events'];
export const projectCards = order.map((id, index) => ({
  ...cards.find(card => card.id === id),
  number: index + 1
}));
