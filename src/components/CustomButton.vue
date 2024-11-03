<template>
  <RouterLink
    :to="props.link"
    :class="`flex items-center justify-center font-bold ${props.bg} px-[${props.px}px] py-[${props.py}px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out`"
  >
    {{ props.content }}
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    default: '#',
  },
  width: {
    type: [Number, String],
    required: false,
  },
  px: {
    type: Number,
    required: true,
  },
  py: {
    type: Number,
    required: true,
  },
  bg: {
    type: String,
    required: false,
    default: 'bg-x-blue',
  },
  content: {
    type: String,
    required: false,
    default: 'Button',
  }
})
</script>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->