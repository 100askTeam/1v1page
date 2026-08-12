<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  ArrowRight, BarChart3, BookOpenCheck, BriefcaseBusiness, CalendarDays,
  ChartNoAxesCombined, Check, CheckCircle2, ChevronDown, CircleHelp,
  ClipboardCheck, Code2, Compass, Cpu, Flag, Gauge, Layers3, Menu,
  MessageCircleQuestion, PlaySquare, Search, ShieldCheck, Target, TerminalSquare,
  UserRound, UsersRound, X
} from 'lucide-vue-next'
import { careerProfiles, credentials, faqs, routeMeta, students } from './courseData.js'
import logoUrl from '../new/100ask-logo.jpg'

const productUrl = 'https://item.taobao.com/item.htm?id=1013725209261'
const navItems = [
  ['course', '课程介绍'], ['audience', '适合人群'], ['routes', '培养路线'],
  ['mentors', '导师团队'], ['cases', '学员案例'], ['faq', '常见问题']
]
const iconMap = { Cpu, BriefcaseBusiness, Compass, TerminalSquare, ChartNoAxesCombined }
const activeSection = ref('course')
const menuOpen = ref(false)
const selectedProfileId = ref('engineer')
const selectedRouteId = ref('C')
const caseFilter = ref('all')
const faqCategory = ref('课程方式')
const faqQuery = ref('')
const openFaq = ref(0)
const bookingBase = ref('')
const bookingTarget = ref('')
const bookingTime = ref('')

const selectedProfile = computed(() => careerProfiles.find(item => item.id === selectedProfileId.value))
const selectedRoute = computed(() => students.find(item => item.id === selectedRouteId.value))
const routeFilters = computed(() => [{ id: 'all', label: '全部' }, ...students.map(item => ({ id: item.id, label: routeMeta[item.id].short }))])
const visibleCases = computed(() => caseFilter.value === 'all' ? students.slice(0, 3) : students.filter(item => item.id === caseFilter.value))
const moreCases = computed(() => students.filter(item => !visibleCases.value.some(active => active.id === item.id)).slice(0, 3))

const faqEntries = computed(() => faqs.map((item, index) => ({
  question: item[0], answer: item[1],
  category: index === 1 ? '学习周期' : index === 4 ? '适合基础' : index >= 5 ? '退款与暂停' : index === 3 ? '学习权限' : '课程方式'
})))
const faqCategories = ['课程方式', '学习周期', '适合基础', '学习权限', '退款与暂停']
const visibleFaqs = computed(() => {
  const query = faqQuery.value.trim().toLowerCase()
  const matches = faqEntries.value.filter(item => !query || `${item.question}${item.answer}`.toLowerCase().includes(query))
  return matches.sort((a, b) => Number(b.category === faqCategory.value) - Number(a.category === faqCategory.value)).slice(0, 6)
})

const abilityLabels = ['系统理解', '驱动开发', '调试定位', '项目交付']

function chooseProfile(profile) {
  selectedProfileId.value = profile.id
  selectedRouteId.value = profile.routeId
}

function goTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

let observer
onMounted(() => {
  observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (visible) activeSection.value = visible.target.id
  }, { rootMargin: '-20% 0px -60% 0px', threshold: [0.05, 0.25] })
  navItems.forEach(([id]) => {
    const section = document.getElementById(id)
    if (section) observer.observe(section)
  })
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="nav-wrap">
        <button class="brand" type="button" aria-label="返回课程介绍" @click="goTo('course')">
          <span class="brand-crop"><img :src="logoUrl" alt="百问科技"></span>
        </button>

        <nav class="desktop-nav" aria-label="主导航">
          <button v-for="item in navItems" :key="item[0]" :class="{ active: activeSection === item[0] }" @click="goTo(item[0])">
            {{ item[1] }}
          </button>
        </nav>

        <a class="btn btn-primary nav-cta" :href="productUrl" target="_blank" rel="noopener noreferrer">预约1对1评估</a>
        <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="打开导航" @click="menuOpen = !menuOpen">
          <X v-if="menuOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
      <nav v-if="menuOpen" class="mobile-nav" aria-label="移动端导航">
        <button v-for="item in navItems" :key="item[0]" @click="goTo(item[0])">{{ item[1] }}</button>
        <a :href="productUrl" target="_blank" rel="noopener noreferrer">预约1对1评估 <ArrowRight :size="16" /></a>
      </nav>
    </header>

    <main>
      <section id="course" class="hero section-anchor">
        <div class="circuit circuit-left"></div>
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">百问科技 · 嵌入式工程师成长计划</p>
            <h1>不是统一课表，而是<br><em>你的专属培养方案</em></h1>
            <p class="hero-lead">先评估基础与目标，再用项目拆解能力差距，形成可验收的 6 个月成长路线。</p>
            <div class="hero-actions">
              <a class="btn btn-primary btn-large" :href="productUrl" target="_blank" rel="noopener noreferrer">预约学习评估 <ArrowRight :size="18" /></a>
              <button class="btn btn-outline btn-large" type="button" @click="goTo('routes')">查看培养路线</button>
            </div>
            <div class="hero-trust">
              <span><CheckCircle2 :size="17" /> 先评估，再学习</span>
              <span><CheckCircle2 :size="17" /> 每阶段项目验收</span>
              <span><CheckCircle2 :size="17" /> 1对1持续复盘</span>
            </div>
          </div>

          <div class="plan-board">
            <div class="board-topline"><span>1对1培养计划</span><span>百问科技</span></div>
            <div class="plan-flow">
              <div v-for="(step, index) in [
                { icon: BarChart3, title: '能力评估', text: '评估现状与目标差距' },
                { icon: Compass, title: '路线定制', text: '量身定制学习计划' },
                { icon: Code2, title: '项目实战', text: '真实项目驱动成长' },
                { icon: Flag, title: '阶段验收', text: '冲刺目标岗位' }
              ]" :key="step.title" class="plan-step">
                <div class="flow-icon"><component :is="step.icon" :size="26" /></div>
                <span v-if="index < 3" class="flow-line"></span>
                <strong>{{ step.title }}</strong><small>{{ step.text }}</small>
              </div>
            </div>
            <div class="board-stats">
              <div><CalendarDays /><p><b>6个月陪跑</b><span>陪伴式学习与答疑</span></p></div>
              <div><Gauge /><p><b>每周复盘</b><span>周计划 · 周复盘 · 迭代提升</span></p></div>
            </div>
          </div>
        </div>

        <div class="container process-strip">
          <div><ClipboardCheck /><p><b>先评估，再学习</b><span>定位基础、目标岗位与能力缺口</span></p></div>
          <div><Code2 /><p><b>以项目带知识</b><span>每个阶段都有真实项目和验收标准</span></p></div>
          <div><Target /><p><b>持续复盘调整</b><span>根据进度和结果动态调整学习路线</span></p></div>
        </div>
        <div class="container benefit-strip">
          <b>你将获得</b>
          <span v-for="(item, index) in ['专属学习路线', '项目任务清单', '阶段验收标准', '代码与方案评审', '1对1技术答疑', '求职方向建议']" :key="item">
            <component :is="[Compass, ClipboardCheck, ShieldCheck, Code2, MessageCircleQuestion, BriefcaseBusiness][index]" />{{ item }}
          </span>
        </div>
      </section>

      <section id="audience" class="section section-anchor audience-section">
        <div class="container">
          <div class="section-breadcrumb">首页 <span>/</span> 适合人群</div>
          <div class="section-heading centered">
            <p class="eyebrow">从你的真实基础出发</p>
            <h2>你现在的基础，决定从哪里开始</h2>
            <p>不是所有人都学同一套内容。先判断现状，再选择能通向目标岗位的路线。</p>
            <button class="self-test" type="button" @click="goTo('audience')"><ClipboardCheck :size="17" />3分钟自测</button>
          </div>
          <div class="audience-layout">
            <div class="profile-list">
              <p class="panel-label">请选择最接近你的情况</p>
              <button v-for="profile in careerProfiles" :key="profile.id" class="profile-option" :class="{ active: selectedProfileId === profile.id }" @click="chooseProfile(profile)">
                <span class="option-icon"><component :is="iconMap[profile.icon]" :size="22" /></span>
                <span><b>{{ profile.title }}</b><small>{{ profile.note }}</small></span>
                <CheckCircle2 v-if="selectedProfileId === profile.id" class="option-check" :size="22" />
                <span v-else class="radio-circle"></span>
              </button>
            </div>

            <div class="recommend-panel">
              <p class="recommend-label">推荐从这里开始</p>
              <div class="recommend-title">
                <span><BriefcaseBusiness :size="25" /></span>
                <div><h3>{{ selectedProfile.title }}</h3><p>{{ selectedProfile.note }}</p></div>
              </div>
              <div class="profile-tags"><span v-for="tag in selectedProfile.tags" :key="tag"><CheckCircle2 :size="14" />{{ tag }}</span></div>
              <div class="route-suggestion">
                <p class="mini-title">建议培养方向</p>
                <div class="suggestion-flow">
                  <div><BarChart3 /><b>能力评估</b><small>评估现状与目标差距</small></div><ArrowRight />
                  <div><Code2 /><b>{{ selectedProfile.direction }}</b><small>构建系统应用能力</small></div><ArrowRight />
                  <div><Layers3 /><b>综合项目</b><small>形成可验收的交付</small></div>
                </div>
              </div>
              <div class="target-line"><Flag :size="22" /><p><span>预计目标</span><b>{{ selectedProfile.goal }}</b></p></div>
              <div class="recommend-actions">
                <a class="btn btn-primary" :href="productUrl" target="_blank" rel="noopener noreferrer">获取我的培养建议</a>
                <button class="text-link" @click="goTo('routes')">查看详细路线 <ArrowRight :size="16" /></button>
              </div>
            </div>
          </div>
          <div class="not-fit">
            <b>这门课可能不适合你</b>
            <span><X :size="18" />只想快速看完录播</span>
            <span><CalendarDays :size="18" />无法持续投入时间</span>
            <span><ClipboardCheck :size="18" />不愿意完成项目验收</span>
          </div>
        </div>
      </section>

      <section id="routes" class="section section-anchor routes-section">
        <div class="container">
          <div class="section-breadcrumb">首页 <span>/</span> 培养路线</div>
          <div class="section-heading centered">
            <p class="eyebrow">五条路线 · 一个目标</p>
            <h2>通向不同岗位目标的培养路线</h2>
            <p>路线不是固定课表。评估之后，项目内容与学习节奏会根据你的基础调整。</p>
            <a class="heading-action" :href="productUrl" target="_blank" rel="noopener noreferrer">先做能力评估</a>
          </div>
          <div class="route-tabs" role="tablist">
            <button v-for="student in students" :key="student.id" :class="{ active: selectedRouteId === student.id }" role="tab" @click="selectedRouteId = student.id">
              <span>{{ student.id }}</span>{{ routeMeta[student.id].short }}
            </button>
          </div>
          <div class="route-layout">
            <div class="route-main">
              <h3>{{ selectedRoute.label }} 岗位路线</h3>
              <div class="route-meta">
                <span><UserRound :size="17" />适合：{{ routeMeta[selectedRoute.id].suitable }}</span>
                <span><CalendarDays :size="17" />周期：约 6 个月</span>
                <span><Target :size="17" />目标：{{ routeMeta[selectedRoute.id].outcome }}</span>
              </div>
              <div class="milestone-track">
              <article v-for="(step, index) in selectedRoute.milestones" :key="step.title" class="milestone" :class="`tone-${index % 4}`">
                  <span class="step-number">{{ index + 1 }}</span>
                  <div class="step-icon"><component :is="index % 2 ? Code2 : Cpu" :size="25" /></div>
                  <h4>{{ step.title }}</h4><p>{{ step.text }}</p><small>{{ step.time }}</small>
                </article>
              </div>
              <p class="mini-title project-title">阶段项目</p>
              <div class="project-list">
              <div v-for="(project, index) in routeMeta[selectedRoute.id].projects" :key="project" :class="`tone-${index}`"><component :is="[TerminalSquare, Layers3, Cpu][index]" /><span><b>{{ project }}</b><small>项目实战 · 阶段验收</small></span></div>
              </div>
            </div>
            <aside class="route-outcome">
              <h3>完成路线后，你将具备</h3>
              <ul><li v-for="item in ['理解完整技术链路', '能够独立拆解任务', '掌握调试定位方法', '完成可展示的综合项目']" :key="item"><CheckCircle2 />{{ item }}</li></ul>
              <a class="btn btn-primary" :href="productUrl" target="_blank" rel="noopener noreferrer">获取我的定制路线</a>
              <button class="text-link" @click="selectedRouteId = selectedRouteId === 'E' ? 'A' : String.fromCharCode(selectedRouteId.charCodeAt(0) + 1)">查看其他方向 <ArrowRight :size="16" /></button>
            </aside>
          </div>
          <div class="stage-standard"><BookOpenCheck /><b>每阶段：</b><span>任务清单</span><i>·</i><span>代码评审</span><i>·</i><span>项目验收</span><i>·</i><span>路线复盘</span></div>
        </div>
      </section>

      <section id="mentors" class="section section-anchor mentor-section">
        <div class="container">
          <div class="section-breadcrumb">首页 <span>/</span> 导师团队</div>
          <div class="section-heading centered"><p class="eyebrow">导师团队</p><h2>不只讲知识，更陪你把项目做出来</h2><p>主导师负责方向与标准，项目导师负责过程与结果，所有学习围绕你的岗位目标展开。</p></div>
          <div class="mentor-feature">
            <div class="mentor-portrait"><span>主导师</span><img src="/assets/teacher-clean.png" alt="百问科技创始人、嵌入式 Linux 导师韦东山"></div>
            <div class="mentor-bio">
              <h3>韦东山</h3><p class="mentor-role">嵌入式Linux资深导师 · 百问科技创始人</p>
              <ul><li v-for="item in credentials.slice(0, 4)" :key="item"><CheckCircle2 />{{ item }}</li></ul>
              <div class="mentor-actions"><a class="btn btn-primary" :href="productUrl" target="_blank" rel="noopener noreferrer">预约导师评估</a><button class="text-link" @click="goTo('faq')">了解课程方式 <ArrowRight :size="16" /></button></div>
            </div>
            <div class="mentor-numbers"><div><PlaySquare /><p><b>3700<span>节+</span></b><small>原创教程</small></p></div><div><UsersRound /><p><b>300<span>万+</span></b><small>累计学员</small></p></div></div>
          </div>
          <div class="mentor-types">
            <div><span class="green"><Flag /></span><p><b>路线导师</b><small>评估基础、制定路线、把控阶段目标</small></p></div>
            <div><span class="blue"><Code2 /></span><p><b>项目导师</b><small>拆解任务、代码评审、推进项目验收</small></p></div>
            <div><span class="orange"><UserRound /></span><p><b>成长顾问</b><small>跟进节奏、整理成果、对照岗位要求</small></p></div>
          </div>
          <div class="service-flow"><b>导师服务贯穿全程</b><div v-for="(item, index) in ['首次评估', '周度答疑', '项目评审', '阶段复盘', '求职准备']" :key="item"><span><component :is="[MessageCircleQuestion, CircleHelp, Code2, Gauge, BriefcaseBusiness][index]" /></span><small>{{ item }}</small></div></div>
        </div>
      </section>

      <section id="cases" class="section section-anchor cases-section">
        <div class="container">
          <div class="section-breadcrumb">首页 <span>/</span> 学员案例</div>
          <div class="section-heading centered"><p class="eyebrow">学员案例</p><h2>看得见的成长，来自一个个完成的项目</h2><p>不展示空泛评价，只呈现学习前的基础、完成的项目和能力变化。</p></div>
          <div class="filter-tabs"><button v-for="filter in routeFilters" :key="filter.id" :class="{ active: caseFilter === filter.id }" @click="caseFilter = filter.id">{{ filter.label }}</button></div>
          <article v-for="student in visibleCases" :key="student.id" class="case-panel">
            <div class="case-main">
              <div class="case-heading"><div><h3>案例 {{ student.id }} · {{ routeMeta[student.id].short }}</h3><p><UserRound :size="16" />{{ routeMeta[student.id].suitable }}</p></div><span>6个月陪跑</span></div>
              <div class="case-path">
                <div class="before-box"><UserRound /><b>学习前</b><p>{{ student.base }}</p></div>
                <div class="case-milestones"><div v-for="(step, index) in student.milestones.slice(0, 4)" :key="step.title"><span><component :is="[Cpu, Layers3, Code2, Flag][index]" /></span><b>{{ step.title }}</b><small>{{ step.time }}</small></div></div>
              </div>
              <div class="completed-projects"><b>完成项目</b><span v-for="project in routeMeta[student.id].projects" :key="project"><Check :size="14" />{{ project }}</span></div>
            </div>
            <aside class="ability-panel"><h4>本案例能力变化</h4><div v-for="(label, index) in abilityLabels" :key="label" class="ability-row" :class="`tone-${index}`"><span class="ability-name"><component :is="[Layers3, Cpu, Target, ClipboardCheck][index]" :size="17" />{{ label }}</span><p><small>学习前 {{ routeMeta[student.id].skills[index] }}%</small><small>学习后 {{ 80 + index * 2 }}%</small></p><div><i :style="{ width: `${routeMeta[student.id].skills[index]}%` }"></i><b :style="{ width: `${80 + index * 2}%` }"></b></div></div><blockquote>用项目把零散知识连成完整系统</blockquote><a class="btn btn-primary" :href="productUrl" target="_blank" rel="noopener noreferrer">获取相似培养路线</a></aside>
          </article>
          <div v-if="caseFilter !== 'all'" class="more-case-block">
            <h3>更多学习路径</h3>
            <div class="more-case-grid">
              <button v-for="student in moreCases" :key="student.id" type="button" @click="caseFilter = student.id">
                <b>案例 {{ student.id }} · {{ routeMeta[student.id].short }}</b>
                <span>{{ student.route }}</span>
                <small v-for="project in routeMeta[student.id].projects.slice(0, 2)" :key="project">{{ project }}</small>
                <em>查看案例 <ArrowRight :size="15" /></em>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="section section-anchor faq-section">
        <div class="container faq-layout">
          <div class="faq-main">
            <div class="section-breadcrumb">首页 <span>/</span> 常见问题</div>
            <div class="section-heading"><p class="eyebrow">常见问题</p><h2>报名前，你可能还想确认这些问题</h2><p>课程方式、学习周期、适合基础与服务边界，都可以在评估前先了解清楚。</p></div>
            <label class="faq-search"><Search :size="19" /><input v-model="faqQuery" type="search" placeholder="搜索课程、学习方式或服务问题"></label>
            <div class="faq-categories"><button v-for="category in faqCategories" :key="category" :class="{ active: faqCategory === category }" @click="faqCategory = category; openFaq = 0">{{ category }}</button></div>
            <div class="faq-list">
              <article v-for="(item, index) in visibleFaqs" :key="item.question" :class="{ open: openFaq === index }">
                <button @click="openFaq = openFaq === index ? -1 : index"><span>{{ index + 1 }}</span><b>{{ item.question }}</b><ChevronDown :size="20" /></button>
                <p v-if="openFaq === index">{{ item.answer }}</p>
              </article>
              <p v-if="!visibleFaqs.length" class="empty-state">没有找到相关问题，请更换关键词或分类。</p>
            </div>
          </div>
          <aside class="booking-panel"><span class="free-tag">免费 · 约15分钟</span><h3>预约1对1学习评估</h3><p>先聊基础与目标，再判断是否适合，不急着报名。</p><div class="booking-steps"><div><ClipboardCheck /></div><i></i><div><MessageCircleQuestion /></div><i></i><div><BarChart3 /></div><i></i><div><Flag /></div></div><div class="booking-labels"><span>提交需求</span><span>课程沟通</span><span>能力评估</span><span>获得建议</span></div><div class="booking-fields"><label><span>当前基础</span><select v-model="bookingBase"><option value="" disabled>请选择</option><option>C语言基础</option><option>单片机经验</option><option>Linux基础</option></select></label><label><span>目标方向</span><select v-model="bookingTarget"><option value="" disabled>请选择</option><option>嵌入式基础</option><option>Linux应用</option><option>驱动 / BSP</option><option>嵌入式全栈</option></select></label><label><span>可投入时间</span><select v-model="bookingTime"><option value="" disabled>请选择</option><option>每天1小时以内</option><option>每天1-2小时</option><option>每天2小时以上</option></select></label></div><a class="btn btn-primary btn-large" :href="productUrl" target="_blank" rel="noopener noreferrer">开始预约 <ArrowRight :size="18" /></a><small><CalendarDays :size="15" />每月限额15人 · 工作日24小时内联系</small></aside>
        </div>
        <div class="promise-band"><div><ShieldCheck /><p><b>不合适会明确告知</b><span>评估后不匹配，会如实说明原因与建议</span></p></div><div><Target /><p><b>先评估再制定路线</b><span>结合基础与目标，给出个性化成长路径</span></p></div><div><UserRound /><p><b>不承诺虚假就业结果</b><span>不包就业、不承诺结果，专注真实能力成长</span></p></div></div>
      </section>
    </main>

    <footer class="site-footer"><div class="container"><div><b>百问科技 · 韦东山1对1培养计划</b><span>1v1.100ask.net</span></div><nav><button v-for="item in navItems" :key="item[0]" @click="goTo(item[0])">{{ item[1] }}</button></nav><p>专注嵌入式工程师真实能力成长</p></div></footer>
    <a class="mobile-booking" :href="productUrl" target="_blank" rel="noopener noreferrer"><MessageCircleQuestion :size="20" />预约1对1评估</a>
  </div>
</template>
