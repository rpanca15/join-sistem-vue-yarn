<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinContent from '@/components/JoinContent.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden flex flex-col gap-[40px] md:gap-[80px] py-[80px]">
      <section class="px-[40px] md:px-[60px] lg:px-[80px] pt-[80px] flex justify-center items-center">
        <div class="w-full md:w-3/4 lg:w-1/2 flex flex-col items-start gap-4 md:pt-[48px]">
          <div class="flex items-center justify-center gap-4">
            <img src="@/assets/images/misc/man-with-glasses.png" alt="Man with glasses" loading="lazy">
            <div>
              <h3 class="text-x-yellow text-3xl font-bold leading-[40px] tracking-[-1px]">Jonathan Vallen</h3>
              <p class="text-x-mediumgrey leading-[28px]">Posted on 27th January 2022</p>
            </div>
          </div>
          <h1 class="text-x-black text-5xl font-bold leading-[64px] tracking-[-2px]">Step-by-step guide to choosing great font pairs</h1>
          <div class="flex items-center justify-between gap-4">
            <img src="@/assets/images/logo/startup.png" alt="Startup" loading="lazy">
            <h4 class="text-x-black font-bold text-2xl leading-[32px]">Startup</h4>
          </div>
        </div>
      </section>

      <div class="px-[40px] md:px-[60px] lg:px-[80px] py-[40px]">
        <img src="@/assets/images/misc/woman-with-glasses.png" alt="Woman with glasses" loading="lazy">
      </div>

      <section class="bg-white px-[40px] md:px-[60px] lg:px-[80px] flex items-center justify-center lg:py-[48px]">
        <article class="flex flex-col items-center gap-8 w-full md:w-[80%] lg:w-[60%]">
          <div class="flex flex-col gap-4">
            <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
            <ul class="list-disc pl-6 text-x-mediumgrey text-opacity-78">
              <li><h4 class="text-x-mediumgrey text-2xl text-opacity-78 font-bold leading-[32px]">Lorem ipsum dolor sit amet</h4></li>
              <li><h4 class="text-x-mediumgrey text-2xl text-opacity-78 font-bold leading-[32px]">Non blandit massa enim nec scelerisque</h4></li>
              <li><h4 class="text-x-mediumgrey text-2xl text-opacity-78 font-bold leading-[32px]">Neque egestas congue quisque egestas</h4></li>
            </ul>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
          </div>
        </article>
      </section>

      <section class="px-[40px] md:px-[60px] lg:px-[80px] py-[40px]">
        <div class="flex flex-col gap-8 pb-[40px] border-b border-x-mediumgrey border-opacity-30">
          <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">What to read next</h2>
          <div class="flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-6">
            <div class="flex flex-col gap-4 hover:cursor-pointer">
              <img src="@/assets/images/misc/two-woman-in-erase-board.png" alt="Two woman in erase board" loading="lazy">
              <p class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</p>
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">A UX Case Study Creating a Studious Environment for Students:</h3>
              <p class="text-x-black text-opacity-70 leading-[28px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div class="flex flex-col gap-4 hover:cursor-pointer">
              <img src="@/assets/images/misc/people-doing-handshake.png" alt="People doing handshake" loading="lazy">
              <p class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</p>
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">A UX Case Study Creating a Studious Environment for Students:</h3>
              <p class="text-x-black text-opacity-70 leading-[28px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div class="flex flex-col gap-4 hover:cursor-pointer">
              <img src="@/assets/images/misc/woman-looking-man.png" alt="Woman looking at man" loading="lazy">
              <p class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</p>
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">A UX Case Study Creating a Studious Environment for Students:</h3>
              <p class="text-x-black text-opacity-70 leading-[28px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>
      <JoinContent />
    </main>
  </MainLayout>
</template>
<!-- Ridwan Panca Putra Pamungkas -->
<!-- V3423075 | D3TI C -->