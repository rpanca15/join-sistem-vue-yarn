<template>
  <div class="relative w-full lg:w-[55%] overflow-hidden">
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="min-w-full flex flex-col justify-between gap-[112px]"
      >
        <h4 class="text-x-black text-xl font-bold leading-[32px]">
          {{ item.text }}
        </h4>
        <div class="flex justify-between items-center gap-2">
          <div class="flex items-center justify-center gap-4">
            <img :src="getImageUrl(item.image)" :alt="item.altText" />
            <div>
              <h4 class="text-x-black text-xl font-bold leading-[32px]">
                {{ item.name }}
              </h4>
              <p class="text-x-mediumgrey leading-[28px]">
                {{ item.location }}
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center gap-2">
            <button
              @click="prev"
              class="flex items-center justify-center bg-white rounded-full w-[36px] h-[36px] md:w-[48px] md:h-[48px] hover:bg-x-black hover:text-white transition duration-150 ease-in-out"
            >
              <i class="fas fa-arrow-left md:text-xl"></i>
            </button>
            <button
              @click="next"
              class="flex items-center justify-center bg-white rounded-full w-[36px] h-[36px] md:w-[48px] md:h-[48px] hover:bg-x-black hover:text-white transition duration-150 ease-in-out"
            >
              <i class="fas fa-arrow-right md:text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Testimonial {
  text: string;
  image: string;
  altText: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "man-with-glasses.png",
    altText: "John Smith profile picture",
    name: "John Smith",
    location: "New York, USA"
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "man-with-glasses.png",
    altText: "Sarah Johnson profile picture",
    name: "Sarah Johnson",
    location: "London, UK"
  },
  {
    text: "I'm amazed by how they turned our vision into reality. Their innovative approach and dedication to quality make them stand out from the competition.",
    image: "man-with-glasses.png",
    altText: "Michael Chen profile picture",
    name: "Michael Chen",
    location: "Singapore"
  },
  {
    text: "The results we've achieved together have been remarkable. Their team's expertise and commitment to excellence have made all the difference in our project's success.",
    image: "man-with-glasses.png",
    altText: "Emma Davis profile picture",
    name: "Emma Davis",
    location: "Sydney, Australia"
  },
  {
    text: "They consistently deliver high-quality work and are always responsive to our needs. It's refreshing to work with a team that truly cares about their clients' success.",
    image: "man-with-glasses.png",
    altText: "Carlos Rodriguez profile picture",
    name: "Carlos Rodriguez",
    location: "Madrid, Spain"
  }
];

const currentIndex = ref(0);

const getImageUrl = (image: string) => {
  return new URL(`../assets/images/misc/${image}`, import.meta.url).href;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};
</script>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}
</style>

<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->