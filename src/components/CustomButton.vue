<template>
  <RouterLink
    :to="props.link"
    :class="`flex items-center justify-center font-bold ${props.bg} px-[${props.px}px] py-[${props.py}px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out`"
    :style="{ width: props.width === 'full' ? '100%' : `${props.width}px` }"
  >
    {{ props.content }}
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: false,
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
