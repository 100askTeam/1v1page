<script setup>
import SceneIllustration from './SceneIllustration.vue'

defineProps({ student: { type: Object, required: true } })
</script>

<template>
  <div class="diagram-shell" :class="student.tone">
    <div class="diagram-caption"><span>可视化路线图</span><b>{{ student.route }}</b></div>

    <div v-if="student.id === 'A' || student.id === 'C'" class="timeline-diagram">
      <template v-for="(step, i) in student.milestones" :key="step.title">
        <div class="timeline-node">
          <div class="node-icon"><SceneIllustration :type="i % 2 ? 'chip' : 'project'" /></div>
          <i>{{ String(i + 1).padStart(2, '0') }}</i>
          <strong>{{ step.title }}</strong>
          <small>{{ step.time }}</small>
        </div>
        <div v-if="i < student.milestones.length - 1" class="route-arrow"><span></span><b>›</b></div>
      </template>
    </div>

    <div v-else-if="student.id === 'B' || student.id === 'E'" class="stairs-diagram">
      <div class="stairs-arrow"><span></span><b>➤</b></div>
      <div v-for="(step, i) in student.milestones" :key="step.title" class="stair" :style="{ '--level': i }">
        <SceneIllustration :type="i % 2 ? 'chip' : 'project'" />
        <span>项目 {{ i + 1 }}</span><strong>{{ step.title }}</strong><small>{{ step.time }}</small>
      </div>
      <div class="offer-flag">目标<br><b>Offer</b></div>
    </div>

    <div v-else class="tree-diagram">
      <div class="tree-root"><span>全栈<br>硬实力</span></div>
      <div class="tree-line trunk"></div>
      <div class="tree-branches">
        <div><i></i><strong>RTOS</strong><span>FreeRTOS · RT-Thread · POSIX</span></div>
        <div><i></i><strong>Linux APP / 驱动</strong><span>LVGL · Qt · 系统与底层</span></div>
        <div><i></i><strong>AI 异构系统</strong><span>AIoT · K230 · AI 推理</span></div>
      </div>
      <div class="tree-visual"><SceneIllustration type="career" /></div>
    </div>
  </div>
</template>

<style scoped>
.diagram-shell{--accent:#287be4;margin:0 25px 25px;padding:22px 24px 25px;overflow:hidden;background:linear-gradient(135deg,#eef7ff,#f8fbfd);border:1px solid #cfe2ef;border-radius:20px 5px 20px 5px}.diagram-shell.cyan{--accent:#1aaab3}.diagram-shell.violet{--accent:#6c63c6}.diagram-shell.orange{--accent:#e58a45}.diagram-shell.green{--accent:#22967c}.diagram-caption{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.diagram-caption span{color:var(--accent);font-size:10px;font-weight:900;letter-spacing:.1em}.diagram-caption b{font-size:13px}.timeline-diagram{display:flex;align-items:flex-start}.timeline-node{width:145px;display:flex;align-items:center;flex-direction:column;text-align:center}.node-icon{width:74px;height:74px;padding:6px;background:#fff;border:3px solid var(--accent);border-radius:50%;box-shadow:0 8px 18px rgba(30,88,125,.13)}.timeline-node i{margin-top:8px;color:var(--accent);font-size:9px;font-style:normal;font-weight:900}.timeline-node strong{margin-top:4px;font-size:11px;line-height:1.4}.timeline-node small{margin-top:3px;color:#7f92a0;font-size:8px}.route-arrow{height:74px;min-width:26px;flex:1;display:flex;align-items:center}.route-arrow span{height:4px;flex:1;background:linear-gradient(90deg,var(--accent),#4bd2c7);border-radius:4px}.route-arrow b{margin-left:-3px;color:#4bd2c7;font-size:30px;line-height:1}
.stairs-diagram{position:relative;height:310px;padding:25px 95px 0 10px;display:flex;align-items:flex-end;justify-content:center}.stair{width:20%;height:calc(78px + var(--level)*42px);padding:9px 7px;display:flex;align-items:center;flex-direction:column;justify-content:flex-start;color:#fff;background:linear-gradient(160deg,var(--accent),#28a9a1);border:1px solid rgba(255,255,255,.5);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05);text-align:center}.stair:first-of-type{border-radius:10px 0 0}.stair svg{width:42px;height:42px;flex:0 0 auto}.stair span{font-size:7px;opacity:.8}.stair strong{font-size:9px;line-height:1.3}.stair small{margin-top:3px;font-size:7px;opacity:.75}.stairs-arrow{position:absolute;z-index:2;top:13px;left:8%;width:75%;height:150px;transform:rotate(-23deg)}.stairs-arrow span{position:absolute;top:65px;width:100%;height:6px;background:linear-gradient(90deg,#2c82d5,#41d2be);border-radius:6px}.stairs-arrow b{position:absolute;top:44px;right:-8px;color:#41d2be;font-size:43px;line-height:1}.offer-flag{position:absolute;right:13px;top:35px;width:73px;height:73px;padding-top:16px;color:#fff;background:var(--accent);border-radius:50%;box-shadow:0 0 0 8px rgba(48,155,185,.12);font-size:9px;text-align:center}.offer-flag b{font-size:16px}
.tree-diagram{position:relative;height:300px;display:grid;grid-template-columns:150px 1fr 200px;align-items:center}.tree-root{position:relative;z-index:2;width:96px;height:96px;display:grid;place-items:center;color:#fff;background:var(--accent);border-radius:25px 6px 25px 6px;box-shadow:0 0 0 10px rgba(70,128,185,.12);font-size:12px;font-weight:900;text-align:center}.tree-line.trunk{position:absolute;left:96px;top:50%;width:95px;height:5px;background:var(--accent)}.tree-branches{position:relative;display:grid;gap:12px}.tree-branches:before{content:'';position:absolute;left:-22px;top:30px;bottom:30px;width:4px;background:var(--accent)}.tree-branches>div{position:relative;padding:12px 15px;background:#fff;border:1px solid #cddfeb;border-radius:12px 4px 12px 4px}.tree-branches>div:before{content:'';position:absolute;left:-22px;top:50%;width:22px;height:4px;background:var(--accent)}.tree-branches strong{display:block;color:var(--accent);font-size:12px}.tree-branches span{color:#788b98;font-size:9px}.tree-visual{height:210px}
@media(max-width:800px){.timeline-diagram{overflow-x:auto;padding-bottom:8px}.timeline-node{min-width:112px}.route-arrow{min-width:30px}.diagram-caption{align-items:flex-start;flex-direction:column;gap:4px}.stairs-diagram{overflow-x:auto;padding-right:60px}.stair{min-width:105px}.tree-diagram{height:auto;grid-template-columns:80px 1fr}.tree-root{width:70px;height:70px}.tree-line.trunk{left:70px;width:35px}.tree-branches{margin-left:25px}.tree-visual{display:none}}
</style>
