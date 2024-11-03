<template>
  <div
    class="relative overflow-hidden border-t border-x-mediumgrey border-opacity-32 pt-[48px]"
  >
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(group, groupIndex) in postGroups"
        :key="groupIndex"
        class="min-w-full"
      >
        <div class="flex flex-col gap-[80px] lg:gap-8">
          <PostContent
            v-for="(post, postIndex) in group"
            :key="postIndex"
            :link="post.link"
            :image="post.image"
            :category="post.category"
            :title="post.title"
            :description="post.description"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center gap-4 mt-8">
      <button
        @click="prev"
        class="text-x-mediumgrey text-xl md:text-3xl font-bold leading-[28px] md:leading-[40px] tracking-[-1px] hover:text-x-black transition duration-150 ease-in-out"
      >
        &lt; Prev
      </button>
      <span class="text-x-black text-lg md:text-2xl">
        {{ currentPage }} of {{ totalPages }}
      </span>
      <button
        @click="next"
        class="text-x-mediumgrey text-xl md:text-3xl font-bold leading-[28px] md:leading-[40px] tracking-[-1px] hover:text-x-black transition duration-150 ease-in-out"
      >
        Next &gt;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PostContent from '@/components/PostContent.vue'

interface Post {
  link: string
  image: string
  category: string
  title: string
  description: string
}

const posts: Post[] = [
  {
    link: 'blog/post',
    image: 'two-woman-in-erase-board.png',
    category: 'STARTUP',
    title: 'Design tips for designers that cover everything you need',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'people-doing-handshake.png',
    category: 'BUSINESS',
    title: 'How to build rapport with your web design clients',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'woman-looking-man.png',
    category: 'STARTUP',
    title: 'Logo design trends to avoid in 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'people-walking.png',
    category: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'two-woman-in-erase-board.png',
    category: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'two-woman-in-erase-board.png',
    category: 'STARTUP',
    title: 'Design tips for designers that cover everything you need',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'people-doing-handshake.png',
    category: 'BUSINESS',
    title: 'How to build rapport with your web design clients',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'woman-looking-man.png',
    category: 'STARTUP',
    title: 'Logo design trends to avoid in 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'people-walking.png',
    category: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    link: 'blog/post',
    image: 'two-woman-in-erase-board.png',
    category: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
]

const POSTS_PER_PAGE = 5
const postGroups = computed(() => {
  const groups = []
  for (let i = 0; i < posts.length; i += POSTS_PER_PAGE) {
    groups.push(posts.slice(i, i + POSTS_PER_PAGE))
  }
  return groups
})

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % postGroups.value.length
}

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + postGroups.value.length) % postGroups.value.length
}

const totalPages = computed(() => postGroups.value.length)
const currentPage = computed(() => currentIndex.value + 1)
</script>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}
</style>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->
