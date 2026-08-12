<script setup>
defineProps({
  type: { type: String, default: 'teacher' },
  label: { type: String, default: '' }
})
</script>

<template>
  <svg v-if="type === 'teacher'" class="scene-svg" viewBox="0 0 180 180" role="img" aria-label="韦东山老师插画">
    <circle cx="90" cy="90" r="78" fill="#dff4ef"/>
    <path d="M51 164c3-31 20-49 39-49s36 18 39 49" fill="#f4f9fc" stroke="#174f78" stroke-width="5"/>
    <path d="M65 123l25 22 25-22 9 41H56z" fill="#78b8df"/>
    <path d="M72 109v19l18 17 18-17v-19" fill="#f5c8a8" stroke="#48372f" stroke-width="4"/>
    <ellipse cx="90" cy="78" rx="35" ry="43" fill="#f5c8a8" stroke="#48372f" stroke-width="4"/>
    <path d="M56 74c-3-31 15-47 36-47 22 0 37 18 34 43-10-3-16-10-18-19-11 14-29 20-52 23z" fill="#273846"/>
    <path d="M63 79h24m6 0h24M87 79h6" stroke="#33556c" stroke-width="4" stroke-linecap="round"/>
    <rect x="64" y="69" width="23" height="19" rx="7" fill="none" stroke="#33556c" stroke-width="3"/>
    <rect x="93" y="69" width="23" height="19" rx="7" fill="none" stroke="#33556c" stroke-width="3"/>
    <circle cx="76" cy="79" r="2.5"/><circle cx="104" cy="79" r="2.5"/>
    <path d="M82 98c5 4 11 4 16 0" fill="none" stroke="#a05b4d" stroke-width="3" stroke-linecap="round"/>
  </svg>

  <svg v-else-if="type === 'graduate'" class="scene-svg" viewBox="0 0 180 180" role="img" aria-label="应届生插画">
    <circle cx="90" cy="92" r="76" fill="#e7f3ff"/>
    <path d="M51 166c3-29 19-45 39-45s36 16 39 45" fill="#f8fbfd" stroke="#31506a" stroke-width="5"/>
    <path d="M67 126l23 28 23-28 9 40H58z" fill="#598bc4"/>
    <ellipse cx="90" cy="89" rx="34" ry="39" fill="#f4c3a1" stroke="#41352f" stroke-width="4"/>
    <path d="M59 89c-5-28 10-46 32-46 22 0 36 17 31 44-12-5-21-13-26-23-6 12-19 20-37 25z" fill="#493e38"/>
    <circle cx="78" cy="90" r="3"/><circle cx="103" cy="90" r="3"/>
    <path d="M82 106c5 3 11 3 16 0" fill="none" stroke="#a05b4d" stroke-width="3" stroke-linecap="round"/>
    <path d="M38 49l52-25 53 25-53 25z" fill="#243a57" stroke="#17283d" stroke-width="4"/>
    <path d="M62 60v22c14 9 42 9 56 0V60" fill="#344d70" stroke="#17283d" stroke-width="4"/>
    <path d="M140 51v34" stroke="#e59a3c" stroke-width="4"/><circle cx="140" cy="89" r="6" fill="#e59a3c"/>
    <path d="M35 30c-12 3-21 12-23 25m7-31C10 30 5 39 5 49" fill="none" stroke="#65a9e5" stroke-width="4" stroke-linecap="round"/>
  </svg>

  <svg v-else-if="type === 'engineer'" class="scene-svg" viewBox="0 0 180 180" role="img" aria-label="工程师插画">
    <circle cx="90" cy="90" r="78" fill="#e3f6f0"/>
    <rect x="21" y="103" width="105" height="61" rx="9" fill="#304d65"/>
    <rect x="29" y="111" width="89" height="43" rx="3" fill="#dff5ff"/>
    <path d="M38 122h28m-28 8h49m-49 8h19" stroke="#4a9bd6" stroke-width="4" stroke-linecap="round"/>
    <path d="M45 166c4-27 17-42 36-42 18 0 32 15 36 42" fill="#4ba886"/>
    <ellipse cx="81" cy="92" rx="31" ry="36" fill="#efbd98" stroke="#493830" stroke-width="4"/>
    <path d="M53 88c-2-27 12-42 30-42 21 0 34 19 29 42-10-4-19-12-23-21-8 11-19 18-36 21z" fill="#51433b"/>
    <circle cx="70" cy="92" r="3"/><circle cx="93" cy="92" r="3"/>
    <path d="M138 40h25v25h-25z" fill="#fff" stroke="#2894c4" stroke-width="4"/>
    <path d="M144 47h13v11h-13zm-8 5h-9m36 0h9m-22-14v-9m0 36v9" stroke="#2894c4" stroke-width="4" stroke-linecap="round"/>
  </svg>

  <svg v-else-if="type === 'career'" class="scene-svg" viewBox="0 0 180 180" role="img" aria-label="转行工程师插画">
    <circle cx="90" cy="90" r="78" fill="#fff0e4"/>
    <path d="M24 148h37v-28h35V91h35V61h29v87z" fill="#e6eef3" stroke="#31536b" stroke-width="4"/>
    <path d="M37 113c22-5 43-16 58-32 11-11 19-23 26-37" fill="none" stroke="#f08c42" stroke-width="7" stroke-linecap="round"/>
    <path d="M112 44l15-12 1 20" fill="#f08c42"/>
    <rect x="103" y="97" width="43" height="29" rx="5" fill="#f5fbff" stroke="#31536b" stroke-width="4"/>
    <path d="M111 107h13m-13 7h25" stroke="#38a8c5" stroke-width="3" stroke-linecap="round"/>
    <circle cx="48" cy="92" r="18" fill="#4cb899"/><path d="M39 92l6 6 12-14" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <svg v-else-if="type === 'chip'" class="scene-svg" viewBox="0 0 120 120" role="img" aria-label="芯片图标">
    <rect x="26" y="26" width="68" height="68" rx="15" fill="#d9edff" stroke="#215d91" stroke-width="6"/>
    <rect x="43" y="43" width="34" height="34" rx="5" fill="#5aa3de" stroke="#215d91" stroke-width="5"/>
    <path d="M38 15v11m22-11v11m22-11v11M38 94v11m22-11v11m22-11v11M15 38h11M15 60h11M15 82h11M94 38h11M94 60h11M94 82h11" stroke="#215d91" stroke-width="6" stroke-linecap="round"/>
    <path d="M52 52h16v16H52z" fill="#74d0b1"/>
  </svg>

  <svg v-else class="scene-svg" viewBox="0 0 120 120" role="img" :aria-label="label || '项目图标'">
    <circle cx="60" cy="60" r="50" fill="#e6f5fb"/>
    <rect x="28" y="31" width="64" height="49" rx="7" fill="#fff" stroke="#286794" stroke-width="5"/>
    <path d="M39 43h23m-23 10h41m-41 10h31" stroke="#55abd0" stroke-width="4" stroke-linecap="round"/>
    <path d="M48 81v11m24-11v11M37 94h46" stroke="#286794" stroke-width="5" stroke-linecap="round"/>
    <circle cx="89" cy="81" r="18" fill="#50bb8d" stroke="#fff" stroke-width="4"/>
    <path d="M81 81l6 6 11-13" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
