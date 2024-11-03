<script setup lang="ts">
import CardAuthor from '@/components/CardAuthor.vue';
import JoinContent from '@/components/JoinContent.vue';
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full bg-white overflow-hidden flex flex-col gap-[40px] md:gap-[80px] py-[80px]">
      <section class="px-[40px] md:px-[60px] lg:px-[80px] pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <div class="flex flex-col gap-8 lg:pt-[274px] relative">
          <div class="lg:ps-[108px] lg:absolute right-0 top-0 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-2 ">
            <div class="w-full lg:w-[60%] bg-white flex flex-col justify-center lg:p-[64px] gap-4">
              <h5 class="text-x-black font-semibold tracking-[3px] leading-[20px]">ABOUT US</h5>
              <h1 class="text-x-black text-4xl md:text-5xl font-bold tracking-[-1px] md:tracking-[-2px] leading-[48px] md:leading-[64px]">We are a team of content writers who share their learnings</h1>
            </div>
            <div class="w-full lg:w-[40%] flex items-center lg:px-[32px] lg:pb-[98px]">
              <p class="text-x-darkgrey leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <img class="h-[184px] md:h-[284px] lg:h-[444px]" src="@/assets/images/misc/people-long.png" alt="People" loading="lazy">
          <div class="flex justify-between items-center bg-x-blue gap-[14px] md:gap-[32px] lg:gap-[74px] p-[12px] md:p-[20px] lg:p-[48px] absolute bottom-[12px] md:botom-[18px] lg:bottom-[23px] left-6 md:left-12 lg:left-28">
            <div class="flex flex-col">
              <h2 class="text-white text-xl md:text-3xl lg:text-[56px] font-bold tracking-[-2px] leading-[28px] md:leading-[36px] lg:leading-[48px]">12+</h2>
              <p class="text-white text-xs md:text-sm lg:text-base leading-[14px] md:leading-[20px] lg:leading-[28px]">Blogs Published</p>
            </div>
            <div class="flex flex-col">
              <h2 class="text-white text-xl md:text-3xl lg:text-[56px] font-bold tracking-[-2px] leading-[28px] md:leading-[36px] lg:leading-[48px]">18K+</h2>
              <p class="text-white text-xs lg:text-base leading-[14px] lg:leading-[28px]">Views on Finsweet</p>
            </div>
            <div class="flex flex-col">
              <h2 class="text-white text-xl md:text-3xl lg:text-[56px] font-bold tracking-[-2px] leading-[28px] md:leading-[36px] lg:leading-[48px]">30K+</h2>
              <p class="text-white text-xs lg:text-base leading-[14px] lg:leading-[28px]">Total active Users</p>
            </div>
          </div>
          <div class="bg-x-yellow w-[80%] md:w-[67%] h-[12px] md:h-[18px] lg:h-[23px] absolute bottom-0 left-6 md:left-12 lg:left-28"></div>
        </div>
        <div class="bg-x-lightgrey p-[60px] lg:px-[120px] lg:pb-[80px] lg:pt-[120px] flex flex-col lg:flex-row justify-between gap-10">
          <div class="w-full flex flex-col gap-4">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">OUR MISION</h5>
            <h3 class="text-x-black text-3xl font-bold tracking-[-1px] leading-[40px]">Creating valuable content for creatives all around the world</h3>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. 
              Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div class="w-full flex flex-col gap-4">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">OUR VISION</h5>
            <h3 class="text-x-black text-3xl font-bold tracking-[-1px] leading-[40px]">A platform that empowers individuals to improve</h3>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. 
              Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </section>

      <section class="px-[40px] md:px-[60px] lg:px-[80px] flex flex-col lg:flex-row justify-between items-center relative gap-[40px] lg:gap-[80px]">
        <div class="flex flex-col gap-4 w-full">
          <h2 class="text-x-black text-3xl lg:text-4xl font-bold tracking-[-2px] md:leading-[36px] lg:leading-[48px]">Our team of creatives</h2>
          <h4 class="text-x-black text-3xl font-bold leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
          <p class="text-x-mediumgrey leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div class="relative h-[480px] w-full">
          <img src="@/assets/images/misc/group-growth-hands.png" alt="Growth hands" class="h-full w-full object-cover" loading="lazy"/>
          <div class="w-[50px] md:w-[75px] lg:w-[103px] h-[58px] md:h-[86px] lg:h-[116px] rounded-tl-[25px] lg:rounded-tl-[50px] bg-x-blue absolute top-20 lg:top-10 left-[-26px] md:left-[-39px] lg:left-[-52px]"></div>
        </div>
      </section>

      <section class="px-[40px] md:px-[60px] lg:px-[80px] flex flex-col lg:flex-row justify-between items-center relative gap-[40px]">
        <div class="flex flex-col gap-4 w-full lg:order-last">
          <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Why we started this Blog </h2>
          <h4 class="text-x-black text-3xl font-bold leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
          <p class="text-x-mediumgrey leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div class="relative h-[480px] w-full">
          <img src="@/assets/images/misc/three-persons.png" alt="Three persons" class="h-full w-full object-cover" loading="lazy"/>
          <div class="w-[57px] lg:w-[76px] h-[57px] lg:h-[76px] rounded-full bg-x-yellow absolute bottom-[-27px] lg:bottom-[-38px] md:left-40 lg:left-20 left-20"></div>
        </div>
      </section>

      <!-- List Author -->
      <section class="flex flex-col gap-8 bg-white pt-[48px] px-[40px] md:px-[60px]">
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
          <CardAuthor
            link="author"
            name="Guy Hawkins"
            position="Content Writer @Company"
            image="author-5.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
          <CardAuthor
            link="author"
            name="Eleanor Pena"
            position="Content Writer @Company"
            image="author-6.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
          <CardAuthor
            link="author"
            name="Robert Fox"
            position="Content Writer @Company"
            image="author-7.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
          <CardAuthor
            link="author"
            name="Jacob Jones"
            position="Content Writer @Company"
            image="author-8.png"
            :socialLinks="[
              { icon:'facebook', url:'#', color:'x-mediumgrey' },
              { icon:'twitter', url:'#', color:'x-mediumgrey' },
              { icon:'instagram', url:'#', color:'x-mediumgrey' },
              { icon:'linkedin', url:'#', color:'x-mediumgrey' }
            ]"
          />
        </div>
      </section>

      <JoinContent />
    </main>
  </MainLayout>
</template>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->