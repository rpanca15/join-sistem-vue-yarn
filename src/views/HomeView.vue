<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinContent from '@/components/JoinContent.vue'
import CardAuthor from '@/components/CardAuthor.vue'
import CardCategory from '@/components/CardCategory.vue'
import CustomButton from '@/components/CustomButton.vue'
import TestimonialCarousel from '@/components/TestimonialCarousel.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden flex flex-col gap-[40px] md:gap-[80px] py-[80px]">
      <!-- Hero -->
      <section class="h-[720px] bg-[url('@/assets/images/misc/cover.png')] bg-cover bg-center">
        <div class="w-full h-full flex flex-col gap-5 px-[40px] md:px-[60px] lg:px-[80px] pt-[64px] lg:pt-[128px] bg-x-black bg-opacity-40">
          <h5 class="text-white text-start font-semibold tracking-[3px]">POSTED ON <span class="font-black">STARTUP</span></h5>
          <h1 class="w-full lg:w-[80%] text-white text-[56px] font-bold tracking-[-2px] leading-[64px]">Step-by-step guide to choosing great font pairs</h1>
          <p class="text-white leading-[28px]">By <span class="text-x-blue">James West</span> &nbsp;|&nbsp; May 23, 2022</p>
          <p class="w-full lg:w-[52%] text-white leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <CustomButton
            link="blog/post"
            content="Read More >"
            :width="204"
            :px="48"
            :py="16"
          />
        </div>
      </section>

      <!-- Featured Post -->
      <section class="bg-white px-[40px] md:px-[60px] lg:px-[80px] pt-[48px] flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
        <div class="flex flex-col gap-4">
          <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">Featured Post</h2>
          <div class="w-full flex-grow border p-8">
            <img class="w-full object-cover mb-8" src="@/assets/images/misc/white-building.png" alt="White Building">
            <div class="w-full flex flex-col gap-4">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; May 23, 2022</label>
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
              <p class="text-x-mediumgrey w-full leading-[28px] mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <CustomButton
                link="blog/post"
                content="Read More >"
                :width="204"
                :px="48"
                :py="16"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Post</h2>
            <a href="blog" class="text-x-yellow leading-[28px] hover:text-x-black transition duration-150 ease-in-out">View All</a>
          </div>
          <div>
            <a href="blog/post" class="w-full lg:w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
            <a href="blog/post" class="w-full lg:w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
            <a href="blog/post" class="w-full lg:w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
            <a href="blog/post" class="w-full lg:w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
          </div>
        </div>
      </section>

      <!-- About us & Our mission -->
      <section class="bg-white px-[40px] md:px-[60px] lg:px-[80px] pt-[48px] lg:pt-0">
        <div class="w-full flex items-center">
          <span class="bg-white w-[15%] h-[23px]"></span>
          <span class="bg-x-yellow w-[60%] h-[23px]"></span>
          <span class="bg-x-blue w-[25%] h-[23px]"></span>
        </div>
        <div class="bg-x-lightgrey p-[40px] md:p-[80px] flex flex-col lg:flex-row justify-between gap-[80px]">
          <div class="w-full lg:w-[50%] flex flex-col gap-4">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">ABOUT US</h5>
            <h1 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">We are a community of content writers who share their learnings</h1>
            <p class="text-x-mediumgrey leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" class="text-x-yellow text-[18px] font-bold leading-[32px] hover:text-x-black transition duration-200 ease-in-out">Read More ></a>
          </div>
          <div class="w-full lg:w-[50%] flex flex-col gap-4">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">OUR MISSION</h5>
            <h3 class="text-x-black text-3xl font-bold tracking-[-1px] leading-[40px]">Creating valuable content for creatives all around the world</h3>
            <p class="text-x-mediumgrey leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>

      <!-- Category -->
      <section class="flex flex-col gap-8 bg-white px-[40px] md:px-[60px] pt-[48px] lg:pt-0">
        <h2 class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]">Choose A Category</h2>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <CardCategory link="/category" logo="business.png" title="Business" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
          <CardCategory link="/category" logo="startup.png" title="Startup" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
          <CardCategory link="/category" logo="economy.png" title="Economy" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
          <CardCategory link="/category" logo="technology.png" title="Technology" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </div>
      </section>

      <!-- Special Post -->
      <section class="bg-white px-[40px] lg:px-[80px] pt-[48px] lg:pt-0">
        <div class="flex flex-col justify-center relative gap-[40px]">
          <img class="lg:w-[75%]" src="@/assets/images/misc/people.png" alt="People">
          <div class="w-full lg:w-[706px] bg-white lg:p-[80px] flex flex-col gap-4 lg:absolute right-0 bottom-0">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">WHY WE STARTED</h5>
            <h1 class="text-x-black text-5xl font-bold leading-[64px] tracking-[-2px]">It started out as a simple idea and evolved into our passion</h1>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <CustomButton
              content="Discover our story >"
              :width="269"
              :px="48"
              :py="16"
            />
          </div>
        </div>
      </section>

      <!-- List Author -->
      <section class="flex flex-col gap-8 bg-white px-[40px] md:px-[60px] pt-[48px] lg:pt-0">
        <h2 class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]">List of Authors</h2>
        <div class="w-full flex flex-wrap items-center justify-center gap-6">
          <CardAuthor
            link="author"
            name="Floyd Miles"
            position="Content Writer @Company"
            image="author-1.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
          <CardAuthor
            link="author"
            name="Dianne Russell"
            position="Content Writer @Company"
            image="author-2.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
          <CardAuthor
            link="author"
            name="Jenny Wilson"
            position="Content Writer @Company"
            image="author-3.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
          <CardAuthor
            link="author"
            name="Lesly Alexander"
            position="Content Writer @Company"
            image="author-4.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
        </div>
      </section>

      <!-- Logo Component -->
      <section class="bg-white px-[40px] md:px-[74px] lg:px-[94px] pt-[48px] lg:pt-0">
        <div class="flex items-center justify-between gap-8 overflow-hidden">
          <div class="min-w-[120px] flex flex-col justify-center">
            <p class="text-x-mediumgrey text-opacity-60 text-xs md:text-sm leading-[18px] md:leading-[20px]">We are</p>
            <h4 class="text-x-mediumgrey text-md md:text-xl font-bold leading-[20px] md:leading-[32px]">Featured in</h4>
          </div>
          <img src="@/assets/images/logo/logoipsum-1.png" alt="Logoipsum 1">
          <img src="@/assets/images/logo/logoipsum-2.png" alt="Logoipsum 2">
          <img src="@/assets/images/logo/logoipsum-3.png" alt="Logoipsum 3">
          <img src="@/assets/images/logo/logoipsum-4.png" alt="Logoipsum 4">
          <img src="@/assets/images/logo/logoipsum-5.png" alt="Logoipsum 5">
        </div>
      </section>

      <!-- Testimoni -->
      <section class="bg-white px-[40px] md:px-[60px] lg:px-[80px] py-[40px]">
        <div class="bg-x-lightyellow flex flex-col lg:flex-row justify-center lg:justify-between gap-20 p-[40px] md:p-[80px]">
          <div class="w-full lg:w-[44%] flex flex-col gap-4">
            <h5 class="text-x-black font-semibold leading-[20px] tracking-[3px]">TESTIMONIALS</h5>
            <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">What people say about our blog</h2>
            <p class="text-x-black leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div class="border border-x-mediumgrey border-opacity-40"></div>
          <TestimonialCarousel />
        </div>
      </section>

      <JoinContent />
    </main>
  </MainLayout>
</template>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->