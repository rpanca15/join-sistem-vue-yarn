<script setup lang="ts">
import ButtonLink from '@/components/CustomButton.vue'
</script>

<template>
  <section class="bg-white flex flex-col items-center gap-6 py-[48px]">
    <h2 class="w-[414px] text-center text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Join our team to be a part of our story</h2>
    <p class="w-[405px] text-x-mediumgrey text-center leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <ButtonLink
      link="#"
      content="Join Now"
      :px="48"
      :py="16"
    />
  </section>
</template>
