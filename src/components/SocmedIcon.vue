<template>
  <li>
    <a :href="props.link" target="_blank" rel="noopener noreferrer" class="">
      <i
        :class="`fa-brands fa-${props.icon} text-${props.color} hover:text-x-yellow transition duration-150 ease-in-out`"
        :style="`font-size: ${props.size}px`"
      ></i>
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'x-black',
  },
  size: {
    type: Number,
    default: 16,
  },
})
</script>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->