<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="text-center absolute top-0 h-screen w-full bg-gray-900 flex flex-col items-center justify-center">
        <img class="w-2/5 h-auto" src="../assets/img/404.png" alt="">
        <h3 class="text-2xl font-semibold mt-4"><span class="text-[--golden]">404</span> <br>PAGE NOT FOUND</h3>
        <p class="text-sm mt-2">This page is not found or temporarily removed</p>
        <RouterLink to="/" class="mt-4 bg-[--golden] text-black py-2 px-4 rounded-full">BACK TO HOME</RouterLink>
    </div>
</template>