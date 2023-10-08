<script setup>
    import { ref } from 'vue'

    let open = ref(false)

    let links = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Portfolio", link: "#" },
    { name: "Contact", link: "#" },
    ]

    function menuToggler() {
    open.value = !open.value;
    }

    function closeMenu() {
    open.value = false;
    }


</script>

<template>
    <nav class="bg-gray-900 text-gray-100 py-3.5 md:px-8 px-6 shadow md:flex justify-between items-center">
        <div class="flex items-center w-fit cursor-pointer">
            <span class="text-green-500 text-3xl mr-1">
                <i class="bi bi-robot"></i>
            </span>
            <h3 class="text-2xl">PS</h3>
        </div>

        <span @click="menuToggler()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-300 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']"
        >
            <li class="md:mx-4 md:my-0 my-6" v-for="link in links">
                <a @click="closeMenu()" :href="link.link" class="text-xl hover:text-green-500 transition duration-150">{{ link.name }}</a>
            </li>
        </ul>
    </nav>
</template>