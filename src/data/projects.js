import { marketSlides, showcaseImage } from './showcase';
import { baseProjects } from './base-projects';
import { media } from './media';
import { experiencePreview } from './experience-preview';
import { siyuanGroups, siyuanFieldwork, siyuanPhoto } from './siyuan';
const details = {
  content: {
    subtitle: '一起上课、走访、认真告别。把一个夏天，留在具体的人与事里。',
    roleShort: '副队长 / 备课组组长 / 内容统筹',
    hero: siyuanGroups[0],
    heroSlides: siyuanGroups,
    heroLabel: '三岔夏令营合照',
    heroDescription: '2024 年夏天，我们在甘肃三岔小学一起备课、上课、走访，也一起收集普通日子里的快乐。翻过这些合照，再走进这个夏天。',
    context: {
      title: '两周的相处，从记住彼此开始。',
      text: '2024 年 7 月 22 日至 8 月 3 日，思源公益三岔小学团队与 106 名三至五年级学生一起度过乡村夏令营。英语课、兴趣课、体验式培训和便签往来，构成了每天的相处。我作为副队长、备课组组长参与课程与执行统筹，也站上讲台，把自己的音乐兴趣带进教室。课余，我们跟随当地老师走访，记录三岔的居所、饮食与文化记忆。'
    },
    responsibilities: ['作为副队长与备课组组长，主导整体方案，统筹教学日程、课程内容、人员分工及物资后勤。', '作为主要联络人，与当地学校、教师和家长保持沟通，协调团队的日常执行。', '统筹微博、公众号、小红书内容策划，参与推送制作，把课堂与活动记录转化为持续发布的内容。'],
    roleMedia: siyuanPhoto('introduction', '周天翊在课堂上向孩子们介绍自己', '初次站上讲台，先让孩子们认识我。'),
    process: [{
      title: '给表达留一点时间',
      text: '我在「音律自然」课上介绍胡琴与音乐赏析。课后复盘时，我记录了一个具体的改进方向：减少内容量，多留时间让孩子自由发言，也更好地照顾不同的课堂反应。'
    }, {
      title: '让反馈回到下一堂课',
      text: '备课、教学日程和团队联络需要持续协调。团队设置「心灵彩虹桥」，通过便签与回信收集孩子们的想法，让课程建议和日常问候都有机会被听见。'
    }, {
      title: '把真实细节编进内容',
      text: '课堂照片、活动片段、走访记录和结营告别，成为推送与短视频的素材。我统筹多平台内容、参与推送制作，把两周里分散的现场整理成可以完整回看的故事。'
    }],
    story: {
      label: 'FIELD NOTES / 采色行动',
      title: '走出教室，\n也做一次认真倾听的学生。',
      text: '我们沿着山路拜访罗奶奶家的窑洞，听她介绍家里的老照片与日常生活；也跟随何老师走进纪念馆，了解她的家族记忆和当地教育。团队的「采色行动」影像志把建筑、人物、口述与生活细节放在一起。总结报告里，还记录了对地方宴席「十三花」的走访。认识三岔，需要先听生活在这里的人讲述。',
      images: siyuanFieldwork
    },
    materialsTitle: '从一堂课，到一篇推送。',
    materialsIntro: '完整结营推送、课堂记录与活动专题，让两周的相处可以被重新读到。',
    images: [],
    output: ['48 篇多平台原创内容', '两周夏令营方案、课程与执行安排', '结营总结推送、体培专题推送及课堂短视频'],
    metrics: [{
      value: '10万+',
      label: '全网阅读量'
    }, {
      value: '1.8万+',
      label: '点赞收藏互动'
    }, {
      value: '48',
      label: '篇原创内容'
    }],
    metricsNote: '整体传播数据来自简历，为项目期间统计口径。小红书账号已交接，2024 年 8 月 13 日之前的内容为本人运营范围。',
    award: '项目获中国大学生农村支教奖全国铜奖；所负责的备课课程获绿色环保奖。',
    links: [{
      type: 'article',
      label: 'READ THE STORY',
      title: '总结篇｜三山五岳，岔那永恒',
      url: 'https://mp.weixin.qq.com/s/Uoe-SMrd2dh1dwzXkBwR1g',
      description: '本人制作的结营总结推送。'
    }, {
      type: 'article',
      label: 'VIEW POST',
      title: '雨与晴之中的第一次体培课',
      url: 'https://mp.weixin.qq.com/s/JrUFYuy25-ahxNNhE4nigg',
      description: '本人制作的体培专题推送。'
    }, {
      type: 'social',
      label: 'WATCH THE STORY',
      title: '学案上竟然出现了……',
      url: 'https://www.xiaohongshu.com/discovery/item/66a08792000000000a004193?source=webshare&xhsshare=pc_web&xsec_token=AB7ZjSQPfNeJ6rui8FcvfM9GnG6F2vEaC4TtzeNfHtZJg=&xsec_source=pc_share',
      description: '提供素材时记录：1.3 万点赞，近 10 万浏览。'
    }, {
      type: 'social',
      label: 'WATCH THE STORY',
      title: '补药轻易上拼豆课……',
      url: 'https://www.xiaohongshu.com/discovery/item/66ab27df000000000901589f?source=webshare&xhsshare=pc_web&xsec_token=ABQmtlLy5TihjWZag_znj40_qi7FDF2jl4V3lmnM7Iokg=&xsec_source=pc_share',
      description: '提供素材时记录：3,000+ 点赞，超过 5 万浏览。'
    }],
    reflection: {
      quote: '我们做不到持之以恒的「浸润」，那就努力做到福至心灵的「启发」。',
      text: '在个人总结里，我写到自己从频频翻看教案，到能够更自如地把握课堂节奏；也写到曾经对两周的改变抱有过高期待。更深入地相处后，我开始理解：孩子们有自己的节奏与力量。短期支教能够做的，是认真准备每一堂课、听见具体的声音，把好奇与表达的机会留给他们。',
      source: '根据周天翊 · 2024 年夏令营个人总结整理'
    }
  },
  insight: {
    subtitle: '从消费行为里，读懂独处与陪伴的需求。',
    roleShort: '核心成员 / 数据分析 / 汇报表达',
    hero: media('solo-report-cover', '正大杯研究报告原创封面', '团队研究报告封面：《单身粮与猫粮的共舞》。', {
      kind: 'document'
    }),
    context: {
      title: '同样是一个人的生活，需求为何不同？',
      text: '围绕「单身经济」，研究将一人食餐饮与宠物消费放在一起观察：前者关乎日常场景，后者连接陪伴需求。通过行业资料与消费者调研，寻找可以转化为品牌与产品建议的线索。'
    },
    responsibilities: ['整合餐饮、宠物赛道行业报告与学术资料，梳理消费场景和需求。', '使用 Python、Stata 清洗与分析调研数据，输出 12 张专业分析图表。', '浓缩 30 页研究报告，独立撰写讲稿与制作演示 PPT，作为团队代表完成最终汇报。'],
    roleMedia: media('solo-sample-chart', '研究报告中的样本生活费和用餐消费图表', '从原始报告提取的消费者样本分析图。', {
      kind: 'document'
    }),
    process: [{
      title: '界定消费场景',
      text: '把「单身经济」拆成一人食与养宠两个赛道，结合行业资料梳理各自的消费场景、需求与发展趋势。'
    }, {
      title: '提炼行为特征',
      text: '对问卷进行清洗、统计和可视化，围绕消费频率、动机与决策因素组织分析。'
    }, {
      title: '形成策略表达',
      text: '将分散结论整理为清晰的汇报线索，讨论分量设计、消费体验与品牌表达的优化方向。'
    }],
    materialsTitle: '让结论有迹可循。',
    materialsIntro: '保留原始研究图表。这里展示的是项目样本的分析结果，不将样本结论外推为所有消费者。',
    images: [media('solo-motivation-chart', '一人食动机分析图', '原始报告 · 一人食动机分析', {
      kind: 'document'
    }), media('solo-choice-chart', '消费者决策因素分析图', '原始报告 · 消费决策因素', {
      kind: 'document'
    })],
    output: ['30 页研究报告', '12 张专业分析图表', '汇报讲稿与最终演示 PPT'],
    metrics: [{
      value: '12',
      label: '张分析图表'
    }, {
      value: '30',
      label: '页研究报告'
    }, {
      value: '三等奖',
      label: '正大杯市场调研大赛'
    }],
    metricsNote: '成果口径来自简历与所提供的原始研究材料。',
    links: [{
      type: 'file',
      label: 'READ THE RESEARCH',
      title: '完整研究报告',
      url: '/documents/solo-research.docx',
      description: 'DOCX · 单身粮与猫粮的共舞',
      download: true
    }, {
      type: 'file',
      label: 'VIEW PRESENTATION',
      title: '一人食餐饮的陪伴经济学',
      url: '/documents/solo-presentation.pptx',
      description: 'PPTX · 原始团队汇报文件',
      download: true
    }],
    reflection: {
      quote: '数据告诉我们发生了什么，表达要让人理解为什么。',
      text: '把 30 页报告压缩成一次汇报，意味着必须判断哪些结论真正重要。项目中的分析与表达相互校验：每个建议都要回到具体的消费场景与研究证据。'
    }
  },
  creative: {
    subtitle: '既在舞台上表达，也让舞台被看见。',
    roleShort: '乐团首席 / 宣发组组长',
    hero: media('erhu-stage', '周天翊在乐团演奏二胡', '民乐团演出现场。台前的稳定，来自日常排练与团队配合。', {
      position: '50% 38%'
    }),
    context: {
      title: '民乐的声音，如何延伸到舞台之外？',
      text: '演出连接现场观众，招新与新媒体则连接还没有走进音乐厅的人。在上海交通大学高水平学生艺术团，我同时参与演奏、视觉传播、账号运营和演出管理。'
    },
    responsibilities: ['作为乐团首席参与演出与声部管理，担任两届新生文工团指导员。', '独立完成 2025 年招新海报、招新推送与新生茶话会视觉设计。', '负责 B站账号运营，曾兼任专场音乐会舞台总监，协调志愿者、催场与现场流程。'],
    roleMedia: media('orchestra-newsletter', '民乐团招新宣传海报，报刊式视觉排版', '本人完成的招新视觉物料。', {
      kind: 'poster'
    }),
    process: [{
      title: '先找到传播的入口',
      text: '围绕年度招新与新生茶话会，用海报和推送呈现乐团气质与参与信息。'
    }, {
      title: '把内容做成看得见的作品',
      text: '使用 Canva、秀米与 Photoshop 制作平面物料，让不同渠道的内容各有阅读节奏。'
    }, {
      title: '让台前幕后接得上',
      text: '持续参与排练、演出与账号运营，把舞台现场与日常传播连成一段持续的乐团故事。'
    }],
    materialsTitle: '把「民乐」写进视觉里。',
    materialsIntro: '从招新海报到茶话会视觉，这些是实际使用的宣传物料。',
    images: [media('orchestra-poster', '民乐团招新海报，琵琶造型中嵌入演出照片', '招新海报 · 乐器与舞台的视觉结合', {
      kind: 'poster'
    }), media('orchestra-tea', '蓝色民乐团新生茶话会海报', '新生茶话会 · 活动视觉', {
      kind: 'poster'
    })],
    output: ['2025 年招新海报、招新推送与茶话会视觉', 'B站内容运营', '演出与舞台流程协调'],
    metrics: [{
      value: '近5万',
      label: 'B站累计播放'
    }, {
      value: '1,600+',
      label: '账号累计获赞'
    }, {
      value: '近30',
      label: '场重要演出'
    }],
    metricsNote: '账号另有 780+ 收藏、730+ 分享。以上来自简历统计，非实时平台数据。',
    links: [{
      type: 'video',
      label: 'WATCH MY SOLO',
      title: '我的个人独奏',
      url: 'https://www.bilibili.com/video/BV1U9J36eEyq/',
      description: '在 B站观看完整独奏视频。'
    }, {
      type: 'video',
      label: 'VISIT BILIBILI',
      title: '民乐团 B站主页',
      url: 'https://space.bilibili.com/327464945',
      description: '演出记录与乐团的更多日常。'
    }, {
      type: 'image',
      label: 'VIEW THE POSTER',
      title: '民乐团招新海报',
      url: '/media/orchestra-poster.webp',
      description: '查看完整视觉作品'
    }, {
      type: 'image',
      label: 'VIEW THE DESIGN',
      title: '招新报刊式海报',
      url: '/media/orchestra-newsletter.webp',
      description: '查看完整视觉作品'
    }],
    reflection: {
      quote: '表达可以很个人，演出一定是共同完成的。',
      text: '首席、宣传与舞台管理的角色要求不同，但都离不开稳定的协作。视觉带来第一眼的兴趣，排练和执行支撑最终的现场体验。'
    }
  },
  research: {
    subtitle: '从一份餐盘，追问选择背后的原因。',
    roleShort: '项目组长 / 问卷设计 / 统计分析',
    hero: media('prp-spending-chart', 'PRP 研究报告中的生活水平与浪费程度图表', '原始汇报图表：生活水平与浪费程度。', {
      kind: 'document'
    }),
    context: {
      title: '餐盘里的剩余，只是个人选择吗？',
      text: '从校园食堂与外卖场景出发，项目研究个体特征、消费环境与食物浪费之间的关系。问卷将生活费、就餐模式、从众心理与责任归属等因素转化为可分析的问题。'
    },
    responsibilities: ['带领 3 人小组完成问卷设计，收集 214 份有效样本。', '运用 Stata 做统计检验，分析消费能力、就餐模式与文化观念对食物消费行为的影响。', '完成 1.6 万字调研报告，提出小份菜、校园餐饮供给与信息呈现的改进建议。'],
    roleMedia: media('prp-framework', '食物浪费研究的个体与外部环境因素框架', '原始汇报中的研究框架。', {
      kind: 'document'
    }),
    process: [{
      title: '定义可以研究的问题',
      text: '结合文献和校园观察，从个体与外部环境两个方面确定研究因素。'
    }, {
      title: '把问题变成问卷',
      text: '结合直接提问与情景设置，收集有效回答，再使用统计方法检验变量之间的关联。'
    }, {
      title: '回到产品与服务',
      text: '讨论半份菜、灵活套餐、分量与口味信息标注等改进方向，形成研究建议。'
    }],
    materialsTitle: '在真实样本里，寻找改进线索。',
    materialsIntro: '图表来自原始项目汇报；研究建议尚不等于已落地的产品效果。',
    images: [media('prp-information-chart', '外卖信息不对称与浪费原因图表', '信息呈现：效果图、分量与口味标注', {
      kind: 'document'
    }), media('prp-platform-chart', '外卖平台机制与浪费原因图表', '平台机制：起送价格、满减与套餐', {
      kind: 'document'
    })],
    output: ['214 份有效问卷样本', '1.6 万字调研报告', '原始调查问卷与结题汇报 PPT'],
    metrics: [{
      value: '214',
      label: '份有效样本'
    }, {
      value: '1.6万',
      label: '字调研报告'
    }, {
      value: '3人',
      label: '项目研究小组'
    }],
    metricsNote: '样本为本项目调研样本。分析反映相关关系，不将其直接解释为因果效应。',
    links: [{
      type: 'file',
      label: 'READ THE RESEARCH',
      title: 'PRP 完整研究报告',
      url: '/documents/prp-report.doc',
      description: 'DOC · 周天翊研究论文，原始完整文件',
      download: true
    }, {
      type: 'file',
      label: 'VIEW PROJECT REPORT',
      title: '大学生浪费现象调查项目报告',
      url: '/documents/prp-project-report.doc',
      description: 'DOC · PRP 项目报告原件',
      download: true
    }, {
      type: 'file',
      label: 'VIEW PRESENTATION',
      title: '大学生食物浪费现象调查',
      url: '/documents/prp-presentation.pptx',
      description: 'PPTX · 原始结题汇报',
      download: true
    }, {
      type: 'file',
      label: 'EXPLORE THE RESEARCH',
      title: '原始调查问卷',
      url: '/documents/prp-questionnaire.docx',
      description: 'DOCX · 问卷设计',
      download: true
    }],
    reflection: {
      quote: '从「观察现象」到「定义问题」，是研究的第一步。',
      text: '在 PRP 参与心得中，我记录了问卷设计的两难：太笼统捕捉不到细节，太具体又可能引发抗拒。这个过程让我更重视问题本身的设计，也更谨慎地解释每一个统计结论。',
      source: '基于 PRP 项目参与心得整理'
    }
  },
  events: {
    subtitle: '让人愿意来，也让现场值得留下。',
    roleShort: '文体部副部长 / 活动策划与执行',
    hero: media('night-run', '夜跑者联盟参与者的夜间合照', '夜跑者联盟活动合照；本人参与该活动推送排版。'),
    context: {
      title: '一次活动，从被看见到被参与。',
      text: '在校团委文体部的工作中，大型活动需要把筹备、预算、人员与传播统筹起来。参与者首先看到一篇推送，随后才走进现场，两个环节需要共同考虑。'
    },
    responsibilities: ['主导落地新生晚会、校际龙舟赛等大型校园活动，统筹预算、流程与现场调度。', '通过公众号推文、海报与社群联动，组织线上线下宣传。', '在不同活动中分别承担组织、推送排版或文案工作，具体职责在每个作品链接中标注。'],
    process: [{
      title: '策划与筹备',
      text: '围绕活动形式、参与规模与预算制定执行安排，明确各环节负责人。'
    }, {
      title: '传播与邀请',
      text: '通过公众号内容、海报与社群传递活动信息，完成文案与排版等具体传播工作。'
    }, {
      title: '现场与协调',
      text: '统筹流程、人员和临场调度，使活动按计划有序推进。'
    }],
    materialsTitle: '具体到每一篇作品。',
    materialsIntro: '活动组织、推送文案与排版是不同的工作。以下链接分别标注我的参与方式。',
    images: [],
    output: ['大型校园活动的策划与执行', '活动推送文案、排版与制作', '线上线下联动宣传方案'],
    metrics: [{
      value: '6',
      label: '场大型校园活动'
    }, {
      value: '300+',
      label: '单场活动参与人数'
    }, {
      value: '1,800+',
      label: '累计覆盖参与者'
    }],
    metricsNote: '数据来自简历中的大型活动经历；不代表下方每条推送的活动规模。',
    links: [{
      type: 'article',
      label: 'VIEW POST',
      title: '夜跑者联盟',
      url: 'https://mp.weixin.qq.com/s/E-6BSnAS5flaeniHmUa9lA',
      description: '我的参与：推送排版。'
    }, {
      type: 'article',
      label: 'READ THE STORY',
      title: '眨眼',
      url: 'https://mp.weixin.qq.com/s/QESsz628T6v2CHk4Koo3cw',
      description: '我的参与：推送文案。'
    }, {
      type: 'article',
      label: 'VIEW POST',
      title: '赛龙舟活动推送',
      url: 'https://mp.weixin.qq.com/s/Qwb7W9epZQORnCDTlQhIRA',
      description: '我的参与：推送制作。'
    }, {
      type: 'article',
      label: 'VIEW EVENT',
      title: '第 50 届运动会',
      url: 'https://mp.weixin.qq.com/s/Tu3x0os2RewPLeM6SmEvHA',
      description: '我的参与：活动组织。'
    }, {
      type: 'article',
      label: 'VIEW EVENT',
      title: '漂流书活动',
      url: 'https://mp.weixin.qq.com/s/w5dp5kUPRj1u7KGRuXB1-w',
      description: '我的参与：活动组织。'
    }],
    reflection: {
      quote: '现场的顺畅，来自事前看得见的分工。',
      text: '活动策划需要想法，也需要预算、时间和人员之间的协调。把每个环节落到具体工作，参与者才有机会把注意力留给活动本身。'
    }
  }
};
const projectOrder = ['insight', 'research', 'creative', 'content', 'events'];
export const projects = projectOrder.map((id, index) => ({
  ...baseProjects.find(project => project.id === id),
  number: index + 1,
  videos: [],
  ...details[id]
}));
export const experience = {
  ...experiencePreview,
  number: 6,
  type: '实习经历',
  color: 'orange',
  en: 'YUM CHINA / BRAND & BUSINESS',
  date: '2025.07 — 2025.12',
  title: '让商业信息，\n变成清晰的表达。',
  subtitle: '连接餐饮行业洞察、AI 产品传播与项目协作。',
  role: '投资者关系部实习生',
  roleShort: '行业跟踪 / 品牌项目协同 / 跨部门协作',
  tags: ['餐饮消费', 'AI产品传播', '投资者关系'],
  heroSlides: marketSlides,
  heroDescription: '餐饮市场调研与竞品分析 PPT 节选：围绕品牌定位、产品卖点、消费场景与传播方式，将资料梳理成结构化分析，支持对餐饮消费行业的理解与讨论。',
  context: {
    title: '在真实商业里，理解信息如何被组织。',
    text: '百胜中国的投资者关系工作，需要持续理解餐饮消费行业，并把经营信息清晰地传递出去。实习期间，我参与竞品跟踪、季度业绩与投资者活动筹备，也接触到肯德基 AI 产品「Q睿」的对外宣传过程。'
  },
  responsibilities: ['持续跟踪餐饮上市公司财报、季度业绩和业绩会 Transcript，提炼经营数据、业务动态与管理层观点。', '参与 Q睿 对外宣传筹备，协助演员筛选、脚本信息梳理和传播材料整理。', '对接财务等内部团队，完成会议纪要、资料传递与信息同步，并协助嘉宾资料及现场准备。'],
  roleMedia: {
    src: '/media/q-rui-interface.webp',
    alt: 'Q睿 AI 助手的宣传视频界面',
    caption: 'Q睿产品宣传视频画面。',
    width: 1920,
    height: 1080
  },
  materialsTitle: 'Q睿：看到产品，也看到表达。',
  materialsIntro: '下方为提供的项目宣传成片。我的工作范围是宣传筹备与协同；产品研发和整片制作由项目团队完成。',
  images: [],
  videos: [{
    src: '/media/q-rui.mp4',
    poster: '/media/showcase/qrui-cover.png',
    title: '肯德基 Q睿宣传成片',
    caption: '3 分 26 秒 · 原片压缩为网页播放版本；不自动播放。'
  }],
  output: ['结构化同业跟踪材料与会议纪要', 'Q睿宣传脚本信息及传播材料协同', '投资者活动、业绩发布与路演准备支持'],
  metrics: [],
  links: [{
    type: 'official',
    label: 'WATCH THE WEBCAST',
    title: '2025 投资者日直播回放',
    url: 'https://ir.yumchina.com/events/event-details/investor-day-2025',
    description: '百胜中国官方页面。素材说明标注：约 2:28:20 开始播放 Q睿相关内容。'
  }, {
    type: 'official',
    label: 'MEDIA COVERAGE',
    title: '百胜中国 2025 投资者日报道',
    url: 'https://ir.yumchina.com/news-releases/news-release-details/yum-china-unveils-rgm-30-strategy-and-three-year-financial',
    description: '官方新闻稿与活动背景。该链接提供项目背景，不单独证明个人职责。'
  }],
  reflection: {
    quote: '先把业务理解清楚，再把信息表达准确。',
    text: '行业跟踪、产品宣传与大型活动面对不同受众，但都要求对信息负责。这段经历让我把商业分析、内容表达和协作执行放在同一条工作链条中理解。'
  }
};
