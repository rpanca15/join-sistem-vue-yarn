<script setup lang="ts"></script>

<template>
  <nav
    class="px-6 md:px-12 w-full h-[80px] bg-x-black flex items-center fixed z-20 justify-between"
  >
    <RouterLink to="/">
      <img src="@/assets/images/logo/sistem.png" alt="Join Sistem Logo" />
    </RouterLink>
    <ul class="flex gap-6 hidden md:flex">
      <li>
        <RouterLink
          to="/"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/blog"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Blog</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/about"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >About Us</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/contact"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Contact Us</RouterLink
        >
      </li>
    </ul>
    <RouterLink
      to="/contact"
      class="hidden md:block bg-x-blue px-4 py-2 rounded-[63px] text-white hover:bg-x-yellow transition duration-150 ease-in-out"
      >Contact Us</RouterLink
    >

    <div class="md:hidden">
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer-4">
            <a
              class="flex justify-center items-center p-4 rounded-lg hover:bg-white hover:cursor-pointer transition duration-150 ease-in-out group"
            >
              <i
                class="fas fa-bars text-2xl text-white group-hover:text-x-black transition duration-150 ease-in-out"
              ></i>
            </a>
          </label>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <div
            class="flex flex-col items-center gap-2 bg-x-black min-h-full w-[80%] p-8 pt-[80px] relative"
          >
            <a class="w-[80%] flex justify-end items-center absolute top-4">
              <label
                for="my-drawer-4"
                aria-label="close sidebar"
                class="drawer-overlay"
                ><a
                  class="w-[48px] h-[48px] flex justify-center items-center p-4 rounded-lg hover:bg-red-500 hover:cursor-pointer transition duration-150 ease-in-out group"
                >
                  <i
                    class="fas fa-times text-2xl text-white group-hover:text-x-black transition duration-150 ease-in-out"
                  ></i> </a
              ></label>
            </a>
            <RouterLink
              to="/"
              class="w-full py-2 hover:cursor-pointer text-white hover:text-x-yellow transition duration-150 ease-in-out"
              >Home
            </RouterLink>
            <RouterLink
              to="/blog"
              class="w-full py-2 hover:cursor-pointer text-white hover:text-x-yellow transition duration-150 ease-in-out"
              >Blog
            </RouterLink>
            <RouterLink
              to="/about"
              class="w-full py-2 hover:cursor-pointer text-white hover:text-x-yellow transition duration-150 ease-in-out"
              >About Us
            </RouterLink>
            <RouterLink
              to="/contact"
              class="w-full py-2 hover:cursor-pointer text-white hover:text-x-yellow transition duration-150 ease-in-out"
              >Contact Us
            </RouterLink>
            <RouterLink
              to="/contact"
              class="w-[80%] bg-x-blue px-4 py-4 rounded-[63px] text-white text-center hover:bg-x-yellow hover:cursor-pointer transition duration-150 ease-in-out absolute bottom-6"
              >Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
