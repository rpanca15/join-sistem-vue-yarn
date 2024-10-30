<script setup lang="ts">
import SocmedIcon from '@/components/SocmedIcon.vue';
</script>

<template>
  <footer class="px-14 pb-14 pt-10 bg-x-black">
    <div class="w-full h-auto flex items-start justify-between mb-10">
      <img src="@/assets/images/logo/finsweet.png" alt="{Finsweet" class="text-white"/>
      <ul class="flex gap-6">
        <li>
          <a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
        </li>
        <li>
          <a href="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Privacy Policy</a>
        </li>
      </ul>
    </div>
    <div class="w-full h-[256px] bg-white bg-opacity-5 p-10 flex justify-between items-center gap-4 mb-10">
        <p class="text-white text-4xl font-bold w-[562px]">Subscribe to our news letter to get latest updates and news</p>
        <form action="#" class="flex items-center justify-center gap-4 mb-5">
          <input type="text" class="w-[323px] bg-transparent border border-x-darkgrey p-4 text-white" placeholder="Enter Your Email" required>
          <button type="submit"class="w-[179px] flex items-center justify-center font-bold bg-x-blue py-4 text-white hover:bg-x-yellow transition duration-150 ease-in-out">
            Subscribe
          </button>
        </form>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <span class="text-white text-opacity-70">Finstreet 118 2561 Fintown</span>
        <ul class="flex items-center gap-6">
          <SocmedIcon logo="facebook.png" link="#" :size="24" altText="Facebook Logo" />
          <SocmedIcon logo="twitter.png" link="#" :size="24" altText="Twitter Logo" />
          <SocmedIcon logo="instagram.png" link="#" :size="24" altText="Instagram Logo" />
          <SocmedIcon logo="linkedin.png" link="#" :size="24" altText="Linkedin Logo" />
        </ul>
      </div>
      <span class="text-white text-opacity-70">Hello@finsweet.com 020 7993 2905</span>
    </div>
  </footer>
</template>