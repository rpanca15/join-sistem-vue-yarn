<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinContent from '@/components/JoinContent.vue'
import CardCategory from '@/components/CardCategory.vue';
import PostContent from '@/components/PostContent.vue';
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden">
      <!-- Hero -->
      <section class="bg-x-lavender p-[80px] flex justify-between items-center gap-8">
        <div class="flex flex-col gap-5">
          <h5 class="text-x-black font-medium tracking-[3px]">FEATURED POST</h5>
          <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Step-by-step guide to choosing great font pairs</h2>
          <p class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">James West</span> &nbsp;|&nbsp; May 23, 2022</p>
          <p class="text-x-mediumgrey leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <a href="blog/post" class="w-[204px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out">
            Read More >
          </a>
        </div>
        <img src="@/assets/images/misc/man-with-white-shirt.png" alt="Man with white T-Shirt">
      </section>

      <!-- All Post -->
      <section class="p-[80px] flex flex-col gap-8">
        <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Post</h2>
        <div class="flex flex-col gap-8 pt-[48px] border-t border-x-mediumgrey border-opacity-32">
          <PostContent
            link="blog/post"
            image="two-woman-in-erase-board.png"
            category="STARTUP"
            title="Design tips for designers that cover everything you need"
            description="
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident."
          />
          <PostContent
            link="blog/post"
            image="people-doing-handshake.png"
            category="BUSINESS"
            title="How to build rapport with your web design clients"
            description="
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident."
          />
          <PostContent
            link="blog/post"
            image="woman-looking-man.png"
            category="STARTUP"
            title="Logo design trends to avoid in 2022"
            description="
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident."
          />
          <PostContent
            link="blog/post"
            image="people-walking.png"
            category="TECHNOLOGY"
            title="8 Figma design systems you can download for free today"
            description="
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident."
          />
          <PostContent
            link="blog/post"
            image="two-woman-in-erase-board.png"
            category="ECONOMY"
            title="Font sizes in UI design: The complete guide to follow"
            description="
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident."
          />
          <div class="flex justify-center items-center gap-4">
            <a class="text-x-mediumgrey text-2xl text-center font-bold leading-[32px]" href="#">< Prev</a>
            <a class="text-x-black text-3xl text-center font-bold leading-[40px] tracking-[-1px]" href="#">Next ></a>
          </div>
        </div>
      </section>

      <!-- All Category -->
      <section class="flex flex-col gap-8 bg-white px-[80px] py-[40px]">
        <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Category</h2>
        <div class="flex items-center justify-between gap-6">
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
