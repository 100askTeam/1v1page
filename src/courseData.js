export const students = [
  {
    id: 'A',
    label: '基础薄弱学习单片机 RTOS',
    route: '从基础到企业 Offer 的进阶之路',
    base: '懂 C 语言，能看懂代码，自己写的话很费劲；用 HAL 库做过毕设。',
    milestones: [
      { title: '打牢 C 语言基本功', time: '贯穿全程', text: '每天刷 10-20 道针对性习题；通过专题测试，彻底解决“看得懂，写不出”痛点。' },
      { title: '突破软硬件核心能力', time: '4 周', text: '项目 1：寄存器 + 手册 + 原理图。告别纯理论，教你阅读手册、分析原理图。' },
      { title: '深化 HAL 库实战能力', time: '1 周 + 4 周', text: '项目 2+3：从会用到精通。基于毕设基础，深挖 HAL 开发技巧，贴近企业开发场景。' },
      { title: '攻克 RTOS 核心技能', time: '8 周', text: '项目 4：对接岗位刚需。从移植到调度，边做项目边吃透原理，简历可写“独立进行 RTOS 开发”。' },
      { title: '对标企业定制化实战', time: '4 周', text: '项目 5：简历亮点拉满。定制化开发蓝牙 / WIFI、生理信号采集，真实项目经历。' }
    ]
  },
  {
    id: 'B',
    label: 'Linux 应用',
    route: '定制化名企直通之路',
    base: '计算机专业出身；略懂 C 语言能看不会写；有软件开发底子；电子电路零基础。',
    milestones: [
      { title: 'GUI + 嵌入式并发', time: '4 周', text: '基于 QT、Modbus 的工业控制台入门即实战；技能：QT 开发、Modbus 协议、进程 / 线程 / 驱动。' },
      { title: '音频开发', time: '3 周', text: '多路 PCM 音频流归一化混音播放器，直击岗位刚需；技能：ALSA 编程、混音原理、GUI 编程。' },
      { title: '图像开发', time: '4 周', text: '智能相册（识别、分类）进阶提升；技能：OpenCV 人脸识别、SQLite 数据库、图像处理。' },
      { title: 'AI + 视频开发', time: '8 周', text: 'AI 视频监控摄像头顶配项目；技能：RTMP 视频流采集、深度学习识别、实时告警、视频编解码。' }
    ]
  },
  {
    id: 'C',
    label: 'Linux 驱动 / BSP',
    route: '从“懂皮毛”到“多芯片移植高手”',
    base: '略懂 Linux 驱动，但知识点零散；面对企业高要求，求职全程心虚，不敢投递心仪岗位。',
    milestones: [
      { title: '吃透 U-Boot', time: '6 周', text: '拆解 U-Boot 代码框架，多款芯片移植实操，吃透启动流程、芯片架构。' },
      { title: '夯实 Linux 驱动基础', time: '4 周', text: '结合视频打基础，多款开发板动手编写，全流程实操随时答疑，独立完成驱动编写。' },
      { title: '攻克复杂驱动子系统', time: '6 周', text: '吃透驱动底层逻辑；基于寄存器实现 I2C / SPI；摄像头、声卡等大驱动。' },
      { title: '深挖 Linux 内核核心', time: '6 周', text: '量身定制学习任务，解决进程 / 内存管理疑难，深入拆解内核机制，提高调试技能。' },
      { title: '精通 Linux 系统构建', time: '4 周', text: 'BusyBox 手工构建、Buildroot 构建系统、Ubuntu 系统构建，对标企业资深工程师。' }
    ]
  },
  {
    id: 'D',
    label: '嵌入式全栈',
    route: '你的优势我放大，你的目标我帮你一站式达成',
    base: '学习能力超强，单片机功底扎实，有实战项目经验——嵌入式全栈开发的黄金起点！',
    milestones: [
      { title: '通用接口入门', time: '4 周', text: '基于 POSIX 接口，同时掌握 RT-Thread 和 Linux APP 编程基础。' },
      { title: 'APP 编程快速入门', time: '4 周', text: '核心 APP 开发套题，RT-Thread / Linux 同步实现。' },
      { title: '自行车 GPS 码表', time: '6 周', text: 'APP + 硬件驱动全栈能力：LVGL、LCD、GPS、RTOS / Linux。' },
      { title: '超低成本老人守护设备', time: '6 周', text: '嵌入式 + AI 跨界能力：AI 大模型、摄像头、网络请求。' },
      { title: '异构系统 AI 监控', time: '6 周', text: '全栈顶配项目：RT-Smart、Linux、K230、AI 推理。' }
    ]
  },
  {
    id: 'E',
    label: '在职工程师',
    route: '从家电单片机到 RTOS 开发高手',
    base: '家电行业 2-3 年单片机经验，想转 Linux 却觉得太难、没实战机会；求职或跳槽没底气。',
    milestones: [
      { title: '用 RTOS 复刻单片机项目', time: '2 周', text: '复刻老项目，轻松跨过 RTOS 入门门槛；掌握任务调度、中断管理。' },
      { title: '新增网络协议', time: '3 周', text: '补上企业必考点，复刻项目基础上集成各类网络协议，写上“RTOS 开发 + 网络协议实战经验”。' },
      { title: '系统学习软件设计方法', time: '4 周', text: '从“会干活”到“会设计”，学习嵌入式软件架构、模块化开发、代码优化。' },
      { title: '目标岗位定制化特训', time: '3 周', text: '拆解目标企业招聘 JD，强化面试考点、项目难点，模拟真实开发场景与面试。' }
    ]
  }
]

export const faqs = [
  ['线上还是线下？', '线上线下都可以，价格相同；线下的话来我们公司，提供工位。'],
  ['时间多长？', '6 个月，如果每天能抽出的时间有限可以协商时间。'],
  ['1 对 1 的话，韦老师忙得过来吗？', '每月限额 15 人，每个学员最终的成绩都是我的脸面。'],
  ['我可以看百问科技的所有课程吗？', '根据你的学习路线来开权限，毕业 1 年后停止权限（部分课程所有权不属于百问科技，无法开通权限）。'],
  ['报名有门槛吗？', '有门槛，我们会进行入门测试，考察 C 语言基础、学习态度。'],
  ['中途放弃会退款吗？', '根据学习进度按比例退款。'],
  ['中途能暂停学习吗？', '不建议，但是可以。']
]

export const credentials = [
  '《嵌入式 Linux 应用开发完全手册》作者',
  '23 年工作经验 + 17 年培训经验',
  '中兴通信资深 BSP 专家',
  '华为鸿蒙先行者',
  '鸿蒙 LiteOS-A 教程提供者',
  'RT-Thread 合作伙伴',
  'RT-Thread 官网 RT-Smart 教程提供者',
  'ST 官方合作伙伴',
  '全志在线官方合作伙伴'
]

export const careerProfiles = [
  {
    id: 'student',
    icon: 'Cpu',
    title: '应届生 / 基础薄弱',
    note: '学过 C 语言，但缺少完整项目',
    tags: ['基础需要巩固', '缺少项目经验', '需要岗位对标', '需要结果验收'],
    direction: '嵌入式基础',
    routeId: 'A',
    goal: '从基本功与工程规范开始，完成可展示的 RTOS 项目组合。'
  },
  {
    id: 'engineer',
    icon: 'BriefcaseBusiness',
    title: '在职工程师 / 技术停滞',
    note: '会开发功能，但缺少系统能力',
    tags: ['已有项目经验', '知识不成体系', '缺少岗位对标', '需要结果验收'],
    direction: 'Linux 应用 → 驱动 / BSP',
    routeId: 'C',
    goal: '把零散知识连成系统，形成能独立定位与解决问题的底层能力。'
  },
  {
    id: 'career',
    icon: 'Compass',
    title: '转行嵌入式',
    note: '方向很多，不知道如何建立路线',
    tags: ['需要明确起点', '需要项目带练', '需要持续反馈', '需要方向建议'],
    direction: 'Linux 应用',
    routeId: 'B',
    goal: '用连续项目建立 Linux 开发能力，并形成可用于求职的作品。'
  },
  {
    id: 'linux',
    icon: 'TerminalSquare',
    title: '冲刺 Linux 岗位',
    note: '需要补齐应用、驱动与 BSP 能力',
    tags: ['目标岗位明确', '需要底层能力', '需要项目验收', '需要系统调试'],
    direction: 'Linux 驱动 / BSP',
    routeId: 'C',
    goal: '掌握启动链路、设备树、内核调试与驱动开发，完成 BSP 综合交付。'
  },
  {
    id: 'senior',
    icon: 'ChartNoAxesCombined',
    title: '资深工程师 / 岗位跃迁',
    note: '希望用项目升级架构与设计能力',
    tags: ['基础扎实', '希望能力跃迁', '目标高级岗位', '需要架构能力'],
    direction: '嵌入式全栈',
    routeId: 'D',
    goal: '打通 RTOS、Linux 与 AI 异构系统，建立复杂项目的架构和交付能力。'
  }
]

export const routeMeta = {
  A: { short: '嵌入式基础', suitable: '有 C 语言或单片机基础', outcome: '形成规范的 MCU / RTOS 项目能力', skills: [32, 30, 25, 20], projects: ['红外遥控器', '串口服务器', 'RTOS 控制系统'] },
  B: { short: 'Linux 应用', suitable: '有编程基础，准备进入 Linux', outcome: '完成 GUI、音视频与综合应用项目', skills: [35, 42, 30, 28], projects: ['工业控制台', '混音播放器', 'AI 视频监控'] },
  C: { short: '驱动 / BSP', suitable: '有 C 语言与 Linux 基础', outcome: '形成独立的底层开发与调试能力', skills: [30, 25, 30, 20], projects: ['自定义外设驱动', '设备树适配', '板级系统构建'] },
  D: { short: '嵌入式全栈', suitable: '单片机功底扎实，有项目经验', outcome: '具备跨系统架构与综合交付能力', skills: [45, 48, 38, 42], projects: ['GPS 码表', '老人守护设备', 'AI 异构监控'] },
  E: { short: 'RTOS 进阶', suitable: '有 2-3 年单片机经验', outcome: '完成 RTOS、协议与架构能力升级', skills: [48, 35, 34, 32], projects: ['旧项目 RTOS 化', '网络协议集成', '岗位定制项目'] }
}
