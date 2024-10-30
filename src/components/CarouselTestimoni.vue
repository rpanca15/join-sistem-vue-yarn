<template>
  <div class="relative w-[55%] overflow-hidden">
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="min-w-full flex flex-col justify-between gap-[112px]"
      >
        <h4 class="text-x-black text-xl font-bold leading-[32px]">
          {{ item.text }}
        </h4>
        <div class="flex justify-between items-center">
          <div class="flex items-center justify-center gap-4">
            <img :src="`${baseImage}/${item.image}`" :alt="item.altText" />
            <div>
              <h4 class="text-x-black text-xl font-bold leading-[32px]">
                {{ item.name }}
              </h4>
              <p class="text-x-mediumgrey leading-[28px]">
                {{ item.location }}
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center gap-4">
            <button
              @click="prev"
              class="flex items-center justify-center bg-white rounded-full w-[48px] h-[48px] hover:bg-x-black hover:text-white"
            >
              <i class="fas fa-arrow-left text-xl"></i>
            </button>
            <button
              @click="next"
              class="flex items-center justify-center bg-white rounded-full w-[62px] h-[62px] hover:bg-x-black hover:text-white"
            >
              <i class="fas fa-arrow-right text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'

const baseImage = '/src/assets/images/misc/';
const props = defineProps({
  items: {
    type: Array as () => Array<{
      text: string
      image: string
      altText: string
      name: string
      location: string
    }>,
    default: () => [],
  }
})

const currentIndex = ref(0)
const { items } = toRefs(props)
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + items.value.length) % items.value.length
}
</script>

