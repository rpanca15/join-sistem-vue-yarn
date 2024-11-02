<template>
  <CarouselTestimoni
    :items="[
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'man-with-glasses.png',
        altText: 'Man with glasses',
        name: 'Jonathan Vallen',
        location: 'New York, USA',
      },
      {
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        image: 'man-with-glasses.png',
        altText: 'Man with glasses',
        name: 'John Doe',
        location: 'Los Angeles, USA',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'man-with-glasses.png',
        altText: 'Man with glasses',
        name: 'Petter Parker',
        location: 'New York, USA',
      },
    ]"
  />
</template>

<script setup lang="ts">
import CarouselTestimoni from '@/components/CarouselTestimoni.vue'
</script>

