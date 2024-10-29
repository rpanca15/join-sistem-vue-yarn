<template>
  <a :href="link" class="flex justify-start items-center gap-8">
    <img :src="imageSrc" :alt="image" :class="computedSize">
    <div class="flex flex-col gap-4">
      <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">{{ category }}</p>
      <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">{{ title }}</h2>
      <p class="text-x-mediumgrey leading-[28px]">{{ description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const imageSrc = computed(() => `/src/assets/images/misc/${props.image}`)
const computedSize = computed(() => `w-[${props.width}px] h-[${props.height}px]`)
</script>