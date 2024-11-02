<script setup lang="ts">
import SocmedIcon from '@/components/SocmedIcon.vue';
</script>

<template>
  <footer class="flex flex-col gap-10 p-7 md:p-14 bg-x-black overflow-hidden">
    <div class="w-full h-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src="@/assets/images/logo/finsweet.png" alt="{Finsweet"/>
      <ul class="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
        <li>
          <RouterLink to="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</RouterLink>
        </li>
        <li>
          <RouterLink to="about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</RouterLink>
        </li>
        <li>
          <RouterLink to="contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</RouterLink>
        </li>
        <li>
          <RouterLink to="privacy" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Privacy Policy</RouterLink>
        </li>
      </ul>
    </div>
    <div class="w-full bg-white bg-opacity-5 p-10 flex flex-col lg:flex-row justify-between items-center gap-4">
        <p class="text-white text-2xl md:text-4xl font-bold w-full">Subscribe to our news letter to get latest updates and news</p>
        <form action="#" class="flex flex-col md:flex-row items-center justify-center gap-4 mb-5 w-full">
          <input type="text" class="w-full md:w-[60%] bg-transparent border border-x-darkgrey p-4 text-white" placeholder="Enter Your Email" required>
          <button type="submit" class="w-full md:w-[40%] flex items-center justify-center font-bold bg-x-blue py-4 text-white hover:bg-x-yellow transition duration-150 ease-in-out">
            Subscribe
          </button>
        </form>
    </div>
    <div>
      <div class="flex flex-col md:flex-row items-start justify-between gap-4">
        <ul class="w-full flex md:order-last justify-center md:justify-end items-center gap-6">
          <SocmedIcon logo="facebook.png" link="#" :size="16" altText="Facebook Logo" />
          <SocmedIcon logo="twitter.png" link="#" :size="16" altText="Twitter Logo" />
          <SocmedIcon logo="instagram.png" link="#" :size="16" altText="Instagram Logo" />
          <SocmedIcon logo="linkedin.png" link="#" :size="16" altText="Linkedin Logo" />
        </ul>
        <div class="w-full flex flex-col gap-2">
          <span class="text-white text-opacity-70">Finstreet 118 2561 Fintown</span>
          <span class="text-white text-opacity-70">Hello@finsweet.com 020 7993 2905</span>
        </div>
      </div>
    </div>
  </footer>
</template>