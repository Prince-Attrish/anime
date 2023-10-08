<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import Logo from '../assets/img/logo.png'

let openMenu = ref(false)

function toggleMenu () {
  openMenu.value = !openMenu.value;
}
function closeMenu () {
  openMenu.value = false;
}

const links = [
    {
        to: '/anime/',
        name: 'Home'
    },
    {
        to: '/anime/most-popular',
        name: 'Popular'
    },
    {
        to: '/anime/movies',
        name: 'Movies'
    },
    {
        to: '/anime/subbed',
        name: 'Subbed Anime'
    },
    {
        to: '/anime/dubbed',
        name: 'Dubbed Anime'
    },
    {
        to: '/anime/tv-series',
        name: 'TV Series'
    },
    {
        to: '/anime/ova',
        name: 'OVAs'
    },
    {
        to: '/anime/ona',
        name: 'ONAs'
    },
    {
        to: '/anime/specials',
        name: 'Specials'
    },
    {
        to: '/anime/events',
        name: 'Events'
    },
]

</script>

<template>
    <nav class="z-10 sticky top-0 w-full px-4 flex justify-between items-center bg-slate-950 py-3">
      <div class="inline-flex items-center justify-between">

        <span @click="toggleMenu()" class="text-3xl cursor-pointer mr-4">
          <i class="bi bi-list"></i>
        </span>

        <img class="h-9 w-auto" :src="Logo" alt="LOGO" />
      </div>
      <div class="flex gap-5">
        <form>
          <div class="h-8 w-8 cursor-pointer rounded-full flex justify-center items-center">
            <i class="bi bi-search"></i>
          </div>
        </form>
        <button class="bg-[--golden] text-sm text-black py-1 px-2 rounded">Login</button>
      </div>
    </nav>

    <aside :class="openMenu ? 'left-0' : 'left-[-100%]'" class="fixed top-0 w-full z-50 transition-all duration-75 ease-in">
        <div @click="closeMenu" class="bg-black/10 backdrop-filter backdrop-blur-lg w-full h-screen">
            <div class="hasCustomScrollbar py-6 bg-zinc-600/50 backdrop-filter backdrop-blur-[200px] w-48 md:w-64 h-full overflow-y-scroll">
                <div class="px-3">
                    <span @click="closeMenu()" class="cursor-pointer text-xs md:text-sm px-4 py-2 bg-zinc-600/70 rounded-full">
                        <i class="bi bi-chevron-left"></i>
                        Close menu
                    </span>
                    <button title="Aniwatch Connect" class="mt-5 w-full bg-gray-900 py-2 rounded-full text-sm">
                        <i class="bi bi-chat-fill mr-1 text-xs text-[--golden]"></i>
                        Community
                    </button>
                </div>

                <div class="mt-5 text-sm font-semibold flex flex-col">
                    <RouterLink active-class="text-[--golden]" :to="link.to" v-for="link in links" class="w-full pl-3 py-4 border-b border-zinc-600/70 hover:text-[--golden] cursor-pointer">
                            {{ link.name }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.hasCustomScrollbar::-webkit-scrollbar {
    width: 5px;
}
.hasCustomScrollbar::-webkit-scrollbar-thumb {
    background: transparent;
    border-right: 2px solid #5e5e5ec7;
    border-radius: 2px;
    transition: 1s ease;
}

.hasCustomScrollbar::-webkit-scrollbar-thumb:hover {
    background: #5e5e5ec7;
}
</style>