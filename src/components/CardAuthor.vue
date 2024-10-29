<template>
  <div
    class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
  >
    <img
      :src="imageSrc"
      :alt="`Author Image of ${name}`"
      class="w-[128px] h-[128px]"
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
        :logo="link.logo"
        :link="link.url"
        :size="24"
        :altText="link.altText"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import SocmedIcon from '@/components/SocmedIcon.vue'
import { computed, toRefs } from 'vue'

const props = defineProps({
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
      logo: string
      url: string
      altText: string
    }>,
    default: () => [],
  },
})

const { image } = toRefs(props)
const imageSrc = computed(() => `/src/assets/images/misc/${image.value}`)
</script>