<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full bg-white overflow-hidden py-[80px]">
      <section class="pt-[80px] pb-[48px] flex items-center justify-center">
        <div class="flex flex-col w-[80%] md:w-[60%] gap-8 items-center justify-center">
          <div class="flex flex-col gap-4 items-center justify-center">
            <span class="text-x-black text-base text-center font-black tracking-[3px] leading-[20px]">CONTACT US</span>
            <h1 class="text-x-black text-5xl text-center font-bold tracking-[-2px] leading-[64px]">Let’s Start a Conversation</h1>
            <p class="text-center text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim.
            </p>
          </div>
          <div class="w-full flex flex-col gap-8 items-center justify-center">
            <div class="w-full flex flex-col md:flex-row justify-between items-start gap-8 px-[64px] py-[48px] bg-x-yellow">
              <div class=" w-full flex flex-col justify-center items-start gap-4">
                <span class="text-x-darkgrey text-opacity-60 text-sm leading-[20px]">Working Hours</span>
                <div class="w-full border border-x-darkgrey border-opacity-10"></div>
                <h5 class="text-x-darkgrey text-xl font-bold leading-[32px]">Monday To Friday</h5>
                <h5 class="text-x-darkgrey text-xl font-bold leading-[32px]">9:00 AM to 8:00 PM</h5>
                <span class="text-x-darkgrey text-opacity-60 text-base leading-[28px]">Our Support Team is available 24/7</span>
              </div>
              <div class="w-full border border-x-black border-opacity-80 md:hidden"></div>
              <div class="w-full flex flex-col justify-center items-start gap-4">
                <span class="text-x-darkgrey text-opacity-60 text-sm leading-[20px]">Contact Us</span>
                <div class="w-full border border-x-darkgrey border-opacity-10"></div>
                <h5 class="text-x-darkgrey text-xl font-bold leading-[32px]">020 7993 2905</h5>
                <span class="text-x-darkgrey text-opacity-60 text-base leading-[28px]">Our Support Team is available 24/7</span>
              </div>
            </div>
            <form action="#" class="w-full flex flex-col justify-center items-center gap-6">
              <input class="w-full border rounded-[2px] p-[16px] md:p-[24px] text-x-black text-base leading-[28px]" type="text" name="fullname" id="fullname" placeholder="Full Name" required/>
              <input class="w-full border rounded-[2px] p-[16px] md:p-[24px] text-x-black text-base leading-[28px]" type="text" name="email" id="email" placeholder="Your Email" required/>
              <div class="w-full flex flex-col md:flex-row justify-center items-center gap-6">
                <select class="w-full text-x-black border rounded-[2px] p-[16px] md:p-[24px]" name="province" id="province" required>
                  <option value="" disabled selected hidden>Province</option>
                  <option value="West Java">West Java</option>
                  <option value="Central Java">Central Java</option>
                  <option value="DIY">D.I Yogyakarta</option>
                  <option value="East Java">East Java</option>
                </select>
                <select class="w-full text-x-black border rounded-[2px] p-[16px] md:p-[24px]" name="city" id="city" required>
                  <option value="" disabled selected hidden>City</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Surakarta">Surakarta</option>
                  <option value="Sleman">Sleman</option>
                  <option value="Kediri">Kediri</option>
                </select>
              </div>
              <textarea class="w-full min-h-[144px] border text-x-black rounded-[2px] p-[16px] md:p-[24px]" name="messsage" id="message" placeholder="Message" required></textarea>
              <button type="submit"class="w-full flex items-center justify-center font-bold bg-x-blue py-4 text-x-black hover:bg-x-yellow transition duration-150 ease-in-out">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
