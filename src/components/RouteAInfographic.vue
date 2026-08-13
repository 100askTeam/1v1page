<script setup>
import { BadgeCheck, BookOpen, Check, Code2, Cpu, HeartPulse, Layers3, Search, Smartphone, Target, ThumbsUp } from 'lucide-vue-next'

const stages = [
  { icon: Code2, title: '第一步：打牢C语言基本功', sub: '（每日必练，根基不慌）', text: '每天刷10-20道针对性习题；通过专题测试，彻底解决“看得懂，写不出”痛点', time: '持续进行（贯穿全程）' },
  { icon: Search, title: '第二步：突破软硬件核心能力', sub: '（项目1：寄存器+手册+原理图）', text: '告别纯理论；教你阅读手册、分析原理图；彻底解决“看得懂，写不出”痛点', time: '4周' },
  { icon: Layers3, title: '第三步：深化HAL库实战能力', sub: '（项目2+3：从会用到精通）', text: '基于毕设基础；深挖HAL开发技巧；练出项目思维；贴近企业开发场景', time: '1周+4周' },
  { icon: BookOpen, title: '第四步：攻克RTOS核心技能', sub: '（项目4：对接岗位刚需）', text: '集中突破；从移植到调度；边做项目边吃透原理；简历可写“独立进行RTOS开发”', time: '8周' },
  { icon: Smartphone, title: '第五步：对标企业定制化实战', sub: '（项目5：简历亮点拉满）', text: '定制化开发蓝牙/WIFI、生理信号采集；真实项目经历，面试时有的说、有的秀！', time: '4周' }
]

const projects = [
  { title: '项目1：万能红外遥控器（不用HAL库）', time: '4周', text: ['拆解功能：遥控器协议/GPIO/PWM/SPI/LCD/IIC转换屏', '结合原理图阅读芯片手册，写各个模块代码', '集成代码，学习数字电路、ARM架构程序分层设计'] },
  { title: '项目2：把项目1使用HAL库快速做出来', time: '1周', text: ['熟悉HAL库用法', '快速移植项目'] },
  { title: '项目3：串口服务器', time: '4周', text: ['疯狂学习，给出技术方案', '拆解功能：AT模块编程、socket接口封装、http协议、服务端编程', '使用编程规范实现代码，合并联调'] },
  { title: '项目4：小动物CT机控制系统', time: '8周', text: ['设计产品框架，编写用户/技术故事', '评估核心技术，编写上位机程序', '学习FreeRTOS技能、Modbus协议，编写中控程序'] },
  { title: '项目5：模仿制作心仪企业的产品雏形', time: '4周', text: ['使用ESP32开发板+血压测量模块搭建模型', '编写ESP32程序：界面显示血压，蓝牙连接手机', '开发手机小程序，显示数据'] }
]
</script>

<template>
  <div class="route-a-shell">
    <header class="route-a-title"><h3>应届生学员A（基础薄弱学习单片机RTOS）</h3><p>6个月定制学习路线｜从基础到企业Offer的进阶之路</p></header>
    <section class="summary current"><h4>🧑🏻‍💻 你的现状&目标</h4><p><BookOpen/><span><b>你的基础：</b><em>懂C语言，能看懂代码，自己写的话很费劲；用HAL库做过毕设</em></span></p><p><Target/><span><b>你的目标：</b><em>拿下要求全面的嵌入式企业offer，吃透原理图MCU/RTOS核心功能</em></span></p></section>
    <section class="summary promise"><h4>💬 我的评价&承诺</h4><p><ThumbsUp/><span><b>我的评价：</b><em>基础虽弱但有入门底子，不用盲目补零微知识点！</em></span></p><p><BadgeCheck/><span><b>承诺：</b><em>跟着这套路线走，6个月后你完全能匹配企业招聘要求！</em></span></p></section>
    <section class="stage-panel">
      <header><h4>5个项目进阶路径（每日练习+阶段验收）</h4><p>全程围绕企业招聘硬指标设计</p></header>
      <div class="stage-grid"><article v-for="stage in stages" :key="stage.title"><component :is="stage.icon"/><h5><i><Check/></i>{{ stage.title }}</h5><b>{{ stage.sub }}</b><p>{{ stage.text }}</p><strong>{{ stage.time }}</strong></article></div>
    </section>
    <section class="project-panel"><h4>具体项目详情</h4><div class="project-grid"><article v-for="project in projects" :key="project.title"><h5>● {{ project.title }} <i>{{ project.time }}</i></h5><p v-for="line in project.text" :key="line">*{{ line }}</p></article></div></section>
  </div>
</template>

<style scoped>
.route-a-shell{position:relative;width:100%;min-height:900px;height:clamp(900px,68vw,1080px);aspect-ratio:auto;padding:2.1% 1.8% 1.5%;overflow:hidden;color:#07090c;background:#fff;font-family:Arial,"Microsoft YaHei",sans-serif}.route-a-title{text-align:center}.route-a-title h3{margin:0;font-size:clamp(24px,2.5vw,42px);line-height:1.1}.route-a-title p{margin:5px 0 10px;font-size:clamp(15px,1.4vw,24px)}.summary{position:absolute;top:12.2%;min-height:15.3%;padding:12px 18px;border-radius:14px}.summary.current{left:3%;width:47%;background:#ededf0}.summary.promise{right:3%;width:47%;background:#d9eafb}.summary h4{margin:0 0 8px;font-size:clamp(18px,1.55vw,27px)}.summary p{margin:7px 0;display:grid;grid-template-columns:25px minmax(0,1fr);align-items:start;gap:8px;font-size:clamp(14px,1.15vw,19px)}.summary p>span{min-width:0;display:block}.summary p b,.summary p em{display:block;line-height:1.35}.summary p em{margin-top:2px;font-style:normal;font-weight:400;overflow-wrap:anywhere}.summary svg{width:25px;height:25px;color:#557591}.stage-panel,.project-panel{position:absolute;right:1.8%;left:1.8%;border:2px solid #9dafc0;border-radius:15px;background:#eaf3fd}.stage-panel{top:30%;height:37%}.stage-panel>header{text-align:center}.stage-panel h4,.project-panel>h4{margin:8px 0 0;font-size:clamp(22px,2vw,35px)}.stage-panel>header p{margin:0;font-size:clamp(14px,1.25vw,23px)}.stage-grid,.project-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1.2%;padding:4px 10px}.stage-grid article{position:relative;min-width:0;height:260px;padding:10px 12px;display:flex;flex-direction:column;text-align:center;background:#fff;border:2px solid #aab8c6;border-radius:14px}.stage-grid article>svg{width:44px;height:44px;align-self:center;flex:none;color:#3a7db2}.stage-grid h5{margin:3px 0;display:flex;justify-content:center;align-items:flex-start;gap:5px;font-size:clamp(13px,1.1vw,20px);line-height:1.25}.stage-grid h5 i{width:24px;height:24px;display:grid;place-items:center;flex:none;color:#fff;background:#2dcc5d;border-radius:5px}.stage-grid h5 svg{width:17px}.stage-grid article>b,.stage-grid article p{font-size:clamp(13px,1vw,17px)}.stage-grid article p{margin:4px 0;line-height:1.5;text-align:left}.stage-grid strong{position:static;margin-top:auto;font-size:clamp(14px,1.1vw,19px)}.project-panel{top:69%;bottom:2%;padding:0 6px}.project-panel>h4{text-align:center}.project-grid article{min-width:0;padding:6px 10px;background:#fff;border:2px solid #aab8c6;border-radius:13px}.project-grid h5{margin:0 0 7px;font-size:clamp(12px,1vw,18px);line-height:1.25}.project-grid h5::first-letter{color:#438bd9}.project-grid h5 i{color:#9aaabd;font-style:normal}.project-grid p{margin:2px 0;font-size:clamp(12px,.95vw,16px);line-height:1.3}.project-grid{height:calc(100% - 54px)}
@media(max-width:1100px){.route-a-shell{min-height:0;height:auto;aspect-ratio:auto;overflow:visible;padding-top:20px}.summary{top:auto;position:relative;left:auto!important;right:auto!important;width:100%!important;margin:12px 0;min-height:0}.stage-panel,.project-panel{position:relative;inset:auto;height:auto;margin:15px 0}.stage-grid,.project-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.stage-grid article{height:auto;min-height:230px}.stage-grid strong{position:static;display:block}.project-grid article{min-height:200px}.project-grid{height:auto}.project-panel{padding-bottom:12px}}
@media(max-width:600px){.route-a-title h3{font-size:23px}.route-a-title p{font-size:14px}.stage-grid,.project-grid{grid-template-columns:1fr}.stage-grid article,.project-grid article{min-height:0}.summary p{align-items:flex-start}}
</style>
