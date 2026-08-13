<script setup>
import {
  BadgeCheck, Bot, Check, CircleUserRound, Image, MonitorCog,
  Music2, Target, Video
} from 'lucide-vue-next'

const projects = [
  {
    no: 1,
    position: { left: '11.7%', top: '75.1%', width: '21.3%' },
    title: 'GUI + 嵌入式并发',
    time: '4周',
    tone: 'blue',
    icons: [MonitorCog, Bot],
    lines: ['基于 QT、Modbus 的工业控制台', '入门即实战，衔接开发基础'],
    skill: 'QT 开发、Modbus 协议、进程 / 线程 / 驱动。'
  },
  {
    no: 2,
    position: { left: '32.9%', top: '66.2%', width: '20.7%' },
    title: '音频开发',
    time: '3周',
    tone: 'cyan',
    icons: [Music2, Bot],
    lines: ['多路 PCM 音频流归一化混音播放器', '直击岗位刚需'],
    skill: 'ALSA 编程、混音原理、GUI 编程。'
  },
  {
    no: 3,
    position: { left: '53.5%', top: '57.4%', width: '20.7%' },
    title: '图像开发',
    time: '4周',
    tone: 'yellow',
    icons: [Image, MonitorCog],
    lines: ['智能相册（识别、分类）', '进阶提升'],
    skill: 'OpenCV 人脸识别、SQLite 数据库、图像处理。'
  },
  {
    no: 4,
    position: { left: '74.1%', top: '48.7%', width: '20.7%' },
    title: 'AI + 视频开发',
    time: '8周',
    tone: 'orange',
    icons: [Bot, Video],
    lines: ['AI 视频监控摄像头', '顶配项目，简历亮点'],
    skill: 'RTMP 视频流采集、深度学习识别、实时告警、视频编解码。'
  }
]
</script>

<template>
  <div class="route-b-shell">
    <div class="circuit-bg" aria-hidden="true"></div>

    <header class="route-b-title">
      <h3>应届生学员 B <em>（Linux 应用）</em> 定制化名企直通之路</h3>
    </header>

    <section class="profile-card info-card">
      <span class="floating-icon blue"><CircleUserRound /></span>
      <h4>你的基础</h4>
      <div class="check-grid">
        <span><i><Check /></i>计算机专业出身</span>
        <span><i><Check /></i>略懂 C 语言能看不会写</span>
        <span><i><Check /></i>有软件开发底子</span>
        <span><i><Check /></i>电子电路零基础</span>
      </div>
      <p><b>我的评价：</b>有软件开发基础就是最大优势！你需要熟悉嵌入式方面的开发技能，并掌握公司要求的 GUI、音视频开发能力！</p>
    </section>

    <section class="goal-card info-card">
      <span class="floating-icon orange"><Target /></span>
      <h4>企业“职位要求”清单</h4>
      <div class="check-grid">
        <span><i><Check /></i>拿下机械智能化企业 Offer</span>
        <span><i><Check /></i>掌握 GUI 开发能力</span>
        <span><i><Check /></i>吃透 Linux 开发核心技能</span>
        <span><i><Check /></i>掌握音视频开发能力</span>
      </div>
    </section>

    <section class="coach-card">
      <h4>你的情况我摸透了，目标必达！</h4>
      <p>对标企业定制学习路线：步步踩中招聘要求</p>
      <div><BadgeCheck /><b>韦东山亲带 + 阶段验收</b></div>
    </section>

    <div class="up-arrow" aria-hidden="true">▲</div>

    <svg class="progress-arrows" viewBox="0 0 1920 1080" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <marker id="arrow-blue" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="76" markerHeight="76" refX="9" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#438bd9" stroke="#20334b" stroke-width=".45"/></marker>
        <marker id="arrow-cyan" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="76" markerHeight="76" refX="9" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#45c1c9" stroke="#20334b" stroke-width=".45"/></marker>
        <marker id="arrow-yellow" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="76" markerHeight="76" refX="9" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#ffd958" stroke="#20334b" stroke-width=".45"/></marker>
        <marker id="arrow-orange" viewBox="0 0 10 10" markerUnits="userSpaceOnUse" markerWidth="76" markerHeight="76" refX="9" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#ff914d" stroke="#20334b" stroke-width=".45"/></marker>
      </defs>
      <path d="M145 718 C285 714, 382 674, 470 620" fill="none" stroke="#438bd9" stroke-width="18" marker-end="url(#arrow-blue)"/>
      <path d="M530 617 C670 613, 770 571, 858 517" fill="none" stroke="#45c1c9" stroke-width="18" marker-end="url(#arrow-cyan)"/>
      <path d="M925 519 C1060 516, 1160 472, 1252 420" fill="none" stroke="#ffd958" stroke-width="18" marker-end="url(#arrow-yellow)"/>
      <path d="M1300 441 C1422 436, 1507 401, 1577 358" fill="none" stroke="#ff914d" stroke-width="18" marker-end="url(#arrow-orange)"/>
    </svg>

    <section class="steps" aria-label="四阶段项目路线">
      <article v-for="project in projects" :key="project.no" class="project-step" :class="project.tone" :style="project.position">
        <div class="project-icons">
          <span v-for="(icon, index) in project.icons" :key="index"><component :is="icon" /></span>
        </div>
        <header><i><Check /></i><b>项目{{ project.no }}：{{ project.title }}（{{ project.time }}）</b></header>
        <div class="project-body">
          <p><span v-for="line in project.lines" :key="line">{{ line }}</span></p>
          <p><b>技能：</b>{{ project.skill }}</p>
        </div>
      </article>
    </section>

    <footer class="route-promise">
      <span>💪</span>
      <p><b>承诺：</b>你有底子，我有 23 年工作经验和 17 年培训经验。全程带练、解难、盯进度。跟着执行，6 个月必达标！</p>
    </footer>
  </div>
</template>

<style scoped>
.route-b-shell { position:relative; width:100%; aspect-ratio:16/9; min-height:700px; overflow:hidden; color:#080b10; background:linear-gradient(135deg,#f5fbff,#eaf5fc 52%,#f8fcff); border:1px solid #8dbce7; border-radius:10px; font-family:Arial,"Microsoft YaHei",sans-serif; box-shadow:0 10px 28px rgba(35,91,137,.1); }
.circuit-bg { position:absolute; inset:0; opacity:.28; background-image:linear-gradient(90deg,transparent 48%,#92c7eb 49% 51%,transparent 52%),linear-gradient(transparent 48%,#92c7eb 49% 51%,transparent 52%); background-size:110px 55px; mask-image:linear-gradient(180deg,#000,transparent 68%); }
.route-b-title { position:absolute; z-index:2; top:2.6%; right:3%; left:3%; text-align:center; }.route-b-title h3 { margin:0; font-size:clamp(24px,2.65vw,43px); line-height:1.15; letter-spacing:.02em; }.route-b-title em { color:#176fc3; font-style:normal; }
.info-card { position:absolute; z-index:3; top:13%; min-height:25%; background:rgba(255,255,255,.88); border:2px solid; border-radius:17px; box-shadow:0 5px 15px rgba(33,86,128,.06); }.info-card h4 { margin:0; padding:56px 3% 12px; text-align:center; font-size:clamp(18px,1.55vw,27px); }.profile-card { left:3.4%; width:26.5%; min-height:40.5%; border-color:#5d9de0; }.goal-card { right:3.1%; width:27.6%; min-height:25%; border-color:#eb9654; }.profile-card h4 { background:#dceefa; border-radius:15px 15px 0 0; }.goal-card h4 { background:#fff0e1; border-radius:15px 15px 0 0; }.floating-icon { position:absolute; z-index:2; top:-48px; left:50%; width:92px; height:92px; display:grid; place-items:center; color:#357fbd; background:#f9fdff; border:2px solid; border-radius:50%; transform:translateX(-50%); box-shadow:0 5px 12px rgba(24,74,116,.1); }.floating-icon svg { width:58%; height:58%; }.floating-icon.orange { color:#e77e28; border-color:#e69a5d; }.floating-icon.blue { border-color:#5d9de0; }
.check-grid { padding:3% 4%; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:10px 12px; font-size:clamp(12px,1.05vw,18px); }.check-grid span { min-width:0; display:flex; align-items:flex-start; gap:7px; line-height:1.3; white-space:normal; overflow-wrap:anywhere; }.check-grid i { width:22px; height:22px; flex:0 0 auto; display:grid; place-items:center; color:#fff; background:#45a0eb; border-radius:50%; }.goal-card .check-grid i { background:#ff984d; }.check-grid svg { width:15px; height:15px; stroke-width:4; }.profile-card > p { margin:0; padding:2% 4% 4%; font-size:clamp(13px,1.2vw,21px); line-height:1.55; overflow-wrap:anywhere; }
.coach-card { position:absolute; z-index:3; top:13%; left:30.7%; width:37.6%; height:18%; overflow:visible; text-align:center; background:rgba(255,255,255,.65); border:2px solid #629ce0; border-radius:17px; }.coach-card h4,.coach-card p { margin:0; }.coach-card h4 { padding:1.2% 2% 0; font-size:clamp(18px,1.55vw,27px); }.coach-card p { font-size:clamp(15px,1.35vw,24px); font-weight:700; }.coach-card div { width:63%; min-height:52px; margin:2% auto 0; display:flex; align-items:center; justify-content:center; gap:12px; background:linear-gradient(180deg,#e5f2fd,#bdd5eb); border:2px solid #aabfd2; border-radius:99px; box-shadow:6px 7px 0 #a8b9c9; font-size:clamp(15px,1.3vw,23px); }.coach-card svg { width:34px; color:#e4ad24; fill:#ffe496; }
.up-arrow { position:absolute; z-index:1; top:32%; left:43%; color:#9ec9f6; font-size:118px; line-height:1; opacity:.32; filter:drop-shadow(0 0 2px #fff); }
.progress-arrows { position:absolute; z-index:2; inset:0; width:100%; height:100%; overflow:visible; filter:drop-shadow(0 2px 1px rgba(32,51,75,.35)); }
.steps { position:absolute; z-index:4; inset:0; pointer-events:none; }.project-step { position:absolute; bottom:0; min-width:0; background:rgba(255,255,255,.9); border:2px solid #3c556d; border-bottom:0; pointer-events:auto; }.project-step::before { position:absolute; right:-2px; bottom:100%; left:-2px; height:62px; content:""; background:linear-gradient(145deg,rgba(255,255,255,.35),var(--surface)); border:2px solid #3c556d; border-bottom:0; clip-path:polygon(0 100%,30% 0,100% 0,100% 100%); }.project-step header { position:relative; z-index:2; min-height:72px; padding:9px 13px; display:flex; align-items:center; gap:8px; background:var(--tone); font-size:clamp(13px,1.05vw,19px); line-height:1.25; }.project-step header i { width:25px; height:25px; flex:0 0 auto; display:grid; place-items:center; color:#fff; background:#2dcc5b; border-radius:5px; }.project-step header svg { width:18px; stroke-width:4; }.project-body { padding:10px 15px; font-size:clamp(12px,.95vw,17px); line-height:1.42; }.project-body p { margin:0 0 10px; }.project-body span { display:block; }.project-icons { position:absolute; z-index:3; left:50%; bottom:calc(100% + 9px); display:flex; gap:9px; transform:translateX(-50%); }.project-icons span { width:58px; height:58px; display:grid; place-items:center; color:#163952; background:var(--icon); border:2px solid #394d5f; border-radius:12px; box-shadow:0 4px 8px rgba(0,0,0,.12); }.project-icons svg { width:34px; height:34px; }.blue { --tone:#63a2e8; --icon:#78b5ef; --surface:#b9dcf7; }.cyan { --tone:#45c5d1; --icon:#56cbd3; --surface:#aae9ec; }.yellow { --tone:#f3cf51; --icon:#f7d862; --surface:#fae9a0; }.orange { --tone:#ff9950; --icon:#ffa25b; --surface:#ffd0af; }
.route-promise { position:absolute; z-index:6; right:5%; bottom:1.5%; width:43%; min-height:11%; padding:10px 18px; display:flex; align-items:center; gap:13px; background:#dceefc; border:2px solid #63a7eb; border-radius:16px; box-shadow:0 3px 8px rgba(28,78,119,.08); }.route-promise > span { font-size:52px; }.route-promise p { margin:0; font-size:clamp(12px,1vw,18px); font-weight:700; line-height:1.55; }.project-step.orange .project-body { padding-bottom:110px; }
@media (max-width:1180px) { .check-grid { gap:7px 8px; font-size:12px; }.check-grid i { width:19px; height:19px; }.profile-card > p { font-size:13px; } }
@media (max-width:1100px) { .route-b-shell { min-height:850px; aspect-ratio:auto; }.info-card { top:12%; }.profile-card { left:2%; width:31%; min-height:310px; }.goal-card { right:2%; width:31%; min-height:245px; }.coach-card { top:12%; left:34%; width:32%; }.info-card h4 { padding-top:52px; }.check-grid { grid-template-columns:1fr; gap:6px; }.coach-card div { width:85%; }.route-promise { width:48%; right:2%; }.project-body { padding-inline:9px; }.project-step header { padding-inline:7px; }.project-icons span { width:45px; height:45px; }.project-icons svg { width:26px; } }
@media (max-width:820px) { .route-b-shell { min-height:1500px; }.route-b-title { top:1.2%; }.route-b-title h3 { font-size:20px; }.profile-card,.goal-card { left:2%; width:96%; }.profile-card { top:6%; min-height:250px; }.goal-card { top:24%; min-height:205px; }.info-card h4 { padding:13px 3% 10px; }.floating-icon { display:none; }.check-grid { grid-template-columns:1fr 1fr; gap:7px 10px; }.coach-card { top:39%; left:2%; width:96%; height:10%; }.up-arrow,.progress-arrows { display:none; }.steps { top:51%; right:2%; bottom:auto; left:2%; height:auto; display:grid; grid-template-columns:1fr 1fr; gap:12px; }.project-step { position:relative !important; inset:auto !important; width:auto !important; height:240px; border-bottom:2px solid #3c556d; }.project-step::before,.project-icons { display:none; }.project-step header { min-height:62px; }.project-step.orange .project-body { padding-bottom:10px; }.route-promise { right:2%; bottom:1.5%; width:96%; min-height:8%; }.route-promise > span { font-size:35px; } }
</style>
