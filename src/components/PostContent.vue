<template>
  <RouterLink
    :to="link"
    class="flex flex-col lg:flex-row justify-center items-center gap-8"
  >
    <img
      :src="getImageUrl"
      :alt="image"
      :style="{ width: `${props.width}px`, height: `${props.height}px` }"
      loading="lazy"
    />
    <div class="flex flex-col gap-4">
      <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">
        {{ category }}
      </p>
      <h2
        class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]"
      >
        {{ title }}
      </h2>
      <p class="text-x-mediumgrey leading-[28px]">{{ description }}</p>
    </div>
  </RouterLink>
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

const getImageUrl = computed(() => {
  try {
    return new URL(`/src/assets/images/misc/${props.image}`, import.meta.url).href
  } catch (error) {
    console.error('Error loading image:', error)
    return ''
  }
})
</script>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->
