<template>
  <li>
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img
        :src="logoSrc"
        :alt="altText"
        :class="computedSize"
        class="hover:opacity-75 transition duration-150 ease-in-out"
      />
    </a>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
  altText: {
    type: String,
    default: '',
  },
})

const logoSrc = computed(() => `/src/assets/images/logo/${props.logo}`)
const computedSize = computed(() => `w-[${props.size}px] h-[${props.size}px]`)
</script>