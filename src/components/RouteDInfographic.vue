<script setup>
import { BrainCircuit, Check, Cpu, Gauge, Layers3, Monitor, Network, Radio, Route, Smartphone, Sparkles } from 'lucide-vue-next'
const steps=[
 '第一步：通用接口入门（4周）',
 '基于POSIX接口，同时掌握 RT-Thread和LinuxAPP编程基础',
 '项目1：APP编程快速入门（4周）——核心APP开发套题（RT-Thread/Linux同步实现）',
 '项目2：自行车GPS码表（6周）——APP+硬件驱动全栈能力（LVGL，LCD,GPS,RTOS/Linux）',
 '项目3：超低成本老人守护设备（6周）——嵌入式+AI跨界能力（AI大模型，摄像头，网络请求）',
 '项目4：异构系统实现AI监控系统（6周）——全栈顶配项目（RT-Smart，Linux，K230，AI推理）'
]
const branches=[
 {title:'RTOS（实时操作系统）',icon:Gauge,items:['FreeRTOS','RT-Thread','POSIX']},
 {title:'Linux APP/驱动（应用+底层）',icon:Monitor,items:['LVGL','Linux','Qt']},
 {title:'AI异构系统（跨界能力）',icon:BrainCircuit,items:['AIoT','AI芯片','K230']}
]
</script>
<template><div class="route-d-shell">
 <header><h3>案例4：应届学员D（全栈）</h3><p>——你的优势我放大，你的目标我帮你一站式达成</p></header>
 <main>
  <section class="student"><h4>自信应届生学员D</h4><div class="student-art"><span>👨🏻‍💻</span><Cpu/></div><p><b>你的基础：</b>学习能力超强，单片机功底扎实，有实战项目经验——嵌入式全栈开发的黄金起点！</p></section>
  <section class="path"><h4>定制化全栈进阶路线：POSIX接口打通双系统，项目驱动全栈能力拉满！</h4><article v-for="(step,index) in steps" :key="step"><i v-if="index!==1"><Check/></i><b>{{step}}</b></article></section>
  <section class="tree"><h4>嵌入式全栈技能树</h4><div class="tree-body"><strong>全栈硬实力</strong><article v-for="branch in branches" :key="branch.title"><component :is="branch.icon"/><b>{{branch.title}}</b><div class="skill-tags"><span v-for="item in branch.items" :key="item">{{item}}</span></div></article></div></section>
 </main>
 <footer><b>承诺：</b>你的基础好，我能让你的学习效果倍增，17年嵌入式实战教学经验，快速吃透RTOS、Linux全栈开发，掌握嵌入式+AI跨界技能，成为企业高薪争抢的全能型工程师！</footer>
</div></template>
<style scoped>
.route-d-shell{position:relative;width:100%;min-height:900px;height:clamp(900px,65vw,1080px);aspect-ratio:auto;padding:1.3% 2%;overflow:hidden;color:#070a0e;background:#f4f7fd;font-family:Arial,"Microsoft YaHei",sans-serif}.route-d-shell>header{height:14%;padding:8px 3%;background:linear-gradient(180deg,#d8f8ff,#fff 70%);border:5px solid #7ba6db;clip-path:polygon(1.8% 0,98.2% 0,100% 18%,100% 82%,98.2% 100%,1.8% 100%,0 82%,0 18%)}.route-d-shell>header h3,.route-d-shell>header p{margin:0;font-size:clamp(25px,2.45vw,43px);line-height:1.25}.route-d-shell>header p{font-weight:700}.route-d-shell main{position:absolute;top:17%;right:4.5%;bottom:13.5%;left:4.5%;display:grid;grid-template-columns:29% 31% 29%;justify-content:space-between}.student,.path,.tree{position:relative;min-width:0;border:2px solid #405579;border-radius:16px;background:#fff}.student h4,.tree h4{position:absolute;z-index:2;top:-35px;left:50%;width:max-content;max-width:90%;margin:0;padding:7px 18px;color:#fff;background:linear-gradient(90deg,#4d94e2,#8361ce);border:4px double #fff;border-radius:30px;transform:translateX(-50%);font-size:clamp(18px,1.55vw,28px)}.student-art{height:61%;display:grid;place-items:center;background:linear-gradient(#fff,#f7fbff)}.student-art span{font-size:180px}.student-art svg{position:absolute;top:27%;width:120px;height:120px;color:#377a70}.student p{margin:0;padding:0 12%;font-size:clamp(18px,1.5vw,27px);font-weight:700;line-height:1.6}.path{padding:8px 8%}.path>h4{margin:0 0 7px;padding:8px;text-align:center;background:linear-gradient(90deg,#dff8ff,#fff0e7);clip-path:polygon(0 20%,10% 0,90% 0,100% 20%,100% 80%,90% 100%,10% 100%,0 80%);font-size:clamp(16px,1.2vw,22px)}.path article{min-height:9%;margin:5px 0;padding:5px 12px;display:flex;align-items:center;gap:9px;text-align:center;background:#e9eef7;border:2px solid #aac3dd;border-radius:13px;font-size:clamp(14px,1vw,18px)}.path article i{width:24px;height:24px;display:grid;place-items:center;flex:none;color:#fff;background:#32cf65;border-radius:5px}.path article svg{width:18px}.path article b{min-width:0;overflow-wrap:anywhere}.tree-body{height:100%;padding:7% 4% 3% 28%;display:flex;flex-direction:column;justify-content:space-around}.tree-body>strong{position:absolute;top:37%;left:8%;padding:12px 7px;color:#fff;background:#315a91;border-radius:18px;writing-mode:vertical-rl;font-size:clamp(18px,1.35vw,25px)}.tree-body article{position:relative;display:grid;grid-template-columns:48px 1fr 62px;grid-template-rows:repeat(3,1fr);align-items:center;gap:1px 8px}.tree-body article::before{display:none}.tree-body svg{grid-row:1/4;width:42px;height:42px;color:#335b8c}.tree-body b{grid-row:1/4;font-size:clamp(14px,1.12vw,20px)}.tree-body span{z-index:1;padding:4px;text-align:center;background:#eef2f8;border:1px solid #a8b1c5;border-left:5px solid #e7975c;border-radius:7px;font-size:clamp(12px,.9vw,15px)}.route-d-shell>footer{position:absolute;right:1.7%;bottom:2%;left:1.7%;min-height:9%;padding:12px 35px;color:#fff;background:#315c97;border-radius:16px;font-size:clamp(16px,1.55vw,28px);line-height:1.45}.route-d-shell>footer b{color:#ffce49}
@media(max-width:1100px){.route-d-shell{min-height:0;height:auto;aspect-ratio:auto;overflow:visible}.route-d-shell>header{height:auto}.route-d-shell main{position:relative;inset:auto;margin-top:55px;display:grid;grid-template-columns:1fr 1fr;gap:50px 20px}.student,.path,.tree{min-height:680px}.tree{grid-column:1/-1}.student-art span{font-size:130px}.route-d-shell>footer{position:relative;inset:auto;margin-top:25px}}
@media(max-width:650px){.route-d-shell{min-height:2200px}.route-d-shell main{grid-template-columns:1fr}.tree{grid-column:auto}.student,.path,.tree{min-height:600px}.route-d-shell>header h3,.route-d-shell>header p{font-size:22px}.student p{font-size:17px}.tree-body{padding-left:24%}}
.tree-body article{min-width:0;grid-template-columns:44px minmax(0,1fr);grid-template-rows:auto auto;gap:6px 8px}
.tree-body svg{grid-row:1/3;width:40px;height:40px}
.tree-body b{grid-row:auto;min-width:0;line-height:1.25;overflow-wrap:anywhere}
.skill-tags{grid-column:2;min-width:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px}
.tree-body .skill-tags span{min-width:0;padding:4px 1px;white-space:nowrap;overflow-wrap:normal;font-size:clamp(9px,.72vw,13px);line-height:1.2;letter-spacing:-.15px}
</style>
