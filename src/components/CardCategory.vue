<template>
  <RouterLink :to="link" class="w-[296px] md:w-[266px] h-[228px] flex flex-col gap-4 border border-x-mediumgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
    <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
      <img :src="getImageUrl" :alt="`Logo ${logo}`" loading="lazy">
    </div>
    <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">{{ title }}</h3>
    <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">{{ description }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  logo: {
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
    return new URL(`/src/assets/images/logo/${props.logo}`, import.meta.url).href
  } catch (error) {
    console.error('Error loading image:', error)
    return ''
  }
})
</script>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->