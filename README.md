# 周天翊 · 个人作品集

React 19 + Vite 7 个人站。在原有组件基础上扩展真实案例，采用米白、朱红与酒红配色。当前顺序：首页 → 个人与教育 → 百胜实习 → 项目 → 联系；桌面项目第一排为正大杯、PRP，第二排为民乐团、思源公益、文体部。

## 本地运行

```sh
pnpm install
pnpm dev
```

访问 http://127.0.0.1:3000/ 。服务只监听本机，固定 3000 端口，端口占用时直接报错。也可以使用 `npm run dev`。

```sh
pnpm build
```

生产文件输出到 `dist/`。

## 内容维护

思源公益扩展：`src/data/siyuan.js` 保存照片故事与相册顺序，`src/components/SiyuanStories.jsx` 提供照片弹窗和完整推送阅读器，`src/siyuan.css` 控制该案例的灰绿色照片边框与阅读布局。`scripts/prepare-siyuan.py` 复制新增原始素材并生成来源清单。

| 文件 | 用途 |
| --- | --- |
| `src/App.jsx` | 首页骨架、筛选、导航、邮箱复制、案例历史记录 |
| `src/data/projects.js` | 五个项目、实习、个人资料、所有证据链接与图片说明 |
| `src/data/base-projects.js` | 保留的原始简历项目字段 |
| `src/data/media-manifest.json` | 图片原始来源、网页尺寸 |
| `src/components/` | 案例、图片/视频、项目卡片、外链、经历及个人板块 |
| `src/styles.css` | 原有布局与图形封面基础 |
| `src/campaign.css` | 本轮配色、排版、案例布局与响应式增强 |
| `public/media/` | 精选 WebP 图像、视频海报与网页播放版视频 |
| `public/documents/` | 可下载的原始研究报告、问卷与 PPT |
| `public/resume.pdf` | 原始简历 |
| `MATERIALS.md` | 素材映射、数据口径、待补内容 |

案例链接使用 `#case/insight`、`#case/content`、`#case/creative`、`#case/research`、`#case/events`、`#case/yum-china`，支持刷新、浏览器返回、Esc 关闭与原生对话框焦点管理。外部证据在新标签页打开。

## 媒体与交互

新增 `MediaCarousel` 支持三张 AI 课程证书和七张实习市场调研幻灯片的自动轮播、暂停、按钮/键盘切换和触屏滑动；鼠标悬停、焦点进入或页面隐藏时暂停轮播。`SkillSet` 展示九个工具图标卡片。课程视频使用提供的新封面，点击封面开始播放。

`src/data/showcase.js` 管理新增展示内容，`showcase-media.json` 记录来源。`scripts/add-showcase-media.py` 将三张证书、三张视频/项目封面、七张幻灯片直接复制到 `public/media/showcase/`，不缩放或重新压缩。音乐生活照直接使用 `public/media/original/personal-satar.jpg` 原始 JPG。图标来源见 `public/icons/README.md`。本轮评审建议见 `WEBSITE-REVIEW.md`。

图形封面在悬停或键盘聚焦时展示真实物料；触屏保留可见缩略图。长推送可滚动，也可打开完整图片。`LifeGallery` 提供生活相册的横向滑动、前后翻阅与原图入口。视频不自动播放、不预加载视频内容，开始播放时暂停其他视频；折叠课程视频区域时暂停其中视频。动效尊重系统减少动态效果偏好。

显示图片直接从源文件生成高质量 WebP，最长边最高 3840 px，较小原图保持原始尺寸；图像链接可打开 `public/media/original/` 中的原始文件。Q睿海报为 1920×1080 无损取帧。`scripts/refresh-hd-media.py` 可重新生成本轮高清资产及 PRP 报告副本，不依赖旧缩略图。

视频已压缩为 H.264/AAC 网页版本，保留完整时长；三段视频合计约 134 MB，因此生产目录包含媒体后会较大，但首次打开页面不会下载全部视频。原始 `素材/` 未改动。

`scripts/inspect-materials.py`、`prepare-media.py`、`encode-videos.py` 为本轮素材提取工具，需要 Python/Pillow、临时提取目录与 FFmpeg。`refactor-*.mjs` 为已执行的一次性迁移记录，不应再次运行，否则会覆盖现有组件。日常只需修改数据和组件，不依赖这些脚本。

## GitHub Pages 部署

仓库： https://github.com/Tassssy/my-portfolio
网站： https://tassssy.github.io/my-portfolio/

推送到 main 后由 GitHub Actions 自动构建并部署，Pages Source 使用 GitHub Actions。相对资源路径兼容仓库子目录与本地预览。素材、临时文件及依赖目录不会提交。

最大的课程视频无损分为 large-media 中的三个文件。dev 与 build 会自动校验 SHA-256 并还原完整 MP4，画质和时长不变，不依赖 Git LFS。
