<script setup lang="ts">
import PostContent from '@/components/PostContent.vue';
import SocmedIcon from '@/components/SocmedIcon.vue';
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full bg-white overflow-hidden flex flex-col gap-[40px] lg:gap-[80px] py-[80px]">
      <section class="bg-x-lavender py-[64px] md:py-[128px] flex justify-center items-center relative">
        <div class="w-[80%] lg:w-[75%] flex flex-col md:flex-row justify-center items-center gap-8">
          <img src="@/assets/images/misc/man-wearing-sunglasses.png" alt="Man wearing sunglasses" loading="lazy">
          <div class="flex flex-col justify-between gap-4">
            <h1 class="text-x-black text-3xl lg:text-5xl font-bold tracking-[-2px] lg:leading-[64px]">Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
            <ul class="flex items-start gap-6">
              <SocmedIcon icon="facebook" link="#" />
              <SocmedIcon icon="twitter" link="#" />
              <SocmedIcon icon="instagram" link="#" />
              <SocmedIcon icon="linkedin" link="#" />
            </ul>
          </div>
        </div>
        <div class="w-[80%] lg:w-[75%] h-[24px] absolute bottom-0 bg-x-yellow"></div>
      </section>

      <section class="bg-white pt-[48px] flex justify-center items-center gap-4">
        <div class="w-[80%] lg:w-[75%] flex flex-col gap-[64px]">
          <h1 class="text-x-black text-5xl font-bold tracking-[-2px] leading-[64px]">My Post</h1>
          <PostContent
            link="blog/post"
            image="high-rise-building.png"
            category="BUSINESS"
            title="Top 6 free website mockup tools 2022"
            description="
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
          />
          <PostContent
            link="blog/post"
            image="man-in-black-crew.png"
            category="BUSINESS"
            title="Top 6 free website mockup tools 2022"
            description="
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
          />
        </div>
      </section>
    </main>
  </MainLayout>
</template>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->