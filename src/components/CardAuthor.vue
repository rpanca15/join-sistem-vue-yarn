<template>
  <RouterLink :to="link"
    class="w-[296px] md:w-[266px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
  >
    <img
      :src="getImageUrl"
      :alt="`Author Image of ${name}`"
      class="w-[128px] h-[128px]"
      loading="lazy"
    />
    <div class="flex flex-col items-center">
      <h3
        class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
      >
        {{ name }}
      </h3>
      <p
        class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
      >
        {{ position }}
      </p>
    </div>
    <ul class="flex items-center gap-6">
      <SocmedIcon
        v-for="(link, index) in socialLinks"
        :key="index"
        :icon="link.icon"
        :color="link.color"
        :link="link.url"
        :size="16"
      />
    </ul>
  </RouterLink>
</template>

<script setup lang="ts">
import SocmedIcon from '@/components/SocmedIcon.vue'
import { computed } from 'vue';

const props = defineProps({
  link : {
    type: String,
    required: false,
    default: '#',
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  socialLinks: {
    type: Array as () => Array<{
      icon: string
      url: string
      color: string
    }>,
    default: () => [],
  },
})

const getImageUrl = computed(() => {
  try {
    return new URL(`../assets/images/misc/${props.image}`, import.meta.url).href
  } catch (error) {
    console.error('Error loading image:', error)
    return ''
  }
})
</script>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->