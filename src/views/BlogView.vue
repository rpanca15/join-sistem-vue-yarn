<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinContent from '@/components/JoinContent.vue'
import CardCategory from '@/components/CardCategory.vue'
import PostCarousel from '@/components/PostCarousel.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden flex flex-col gap-[40px] md:gap-[80px] py-[80px]">
      <!-- Hero -->
      <section class="bg-x-lavender py-[80px] px-[40px] md:px-[60px] lg:px-[80px] flex flex-col lg:flex-row justify-between items-center gap-8">
        <img class="lg:order-last" src="@/assets/images/misc/man-with-white-shirt.png" alt="Man with white T-Shirt" loading="lazy">
        <div class="flex flex-col gap-5">
          <h5 class="text-x-black font-medium tracking-[3px]">FEATURED POST</h5>
          <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Step-by-step guide to choosing great font pairs</h2>
          <p class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">James West</span> &nbsp;|&nbsp; May 23, 2022</p>
          <p class="text-x-mediumgrey leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <RouterLink
            to="/blog/post"
            class="w-[204px] flex items-center justify-center font-bold bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out"
          >
            Read More {{ '>' }}
          </RouterLink>
        </div>
      </section>

      <!-- All Post -->
      <section class="px-[40px] md:px-[60px] lg:px-[80px] pt-[80px] flex flex-col gap-8">
        <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Post</h2>
        <PostCarousel />
      </section>

      <!-- All Category -->
      <section class="flex flex-col gap-8 bg-white px-[40px] md:px-[60px] lg:px-[80px] py-[48px]">
        <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Category</h2>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <CardCategory link="/category" logo="business.png" title="Business" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
          <CardCategory link="/category" logo="startup.png" title="Startup" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
          <CardCategory link="/category" logo="economy.png" title="Economy" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
          <CardCategory link="/category" logo="technology.png" title="Technology" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </div>
      </section>

      <JoinContent />
    </main>
  </MainLayout>
</template>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->