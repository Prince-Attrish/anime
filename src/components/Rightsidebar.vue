<script setup>
import Heading from './Heading.vue';
    import TopCard from './topCard.vue';


    
</script>

<template>
    <aside class="w-full xl:w-1/4">
        <div class="flex justify-between items-center">
            <Heading>Top 10</Heading>
            <div class="rounded-md overflow-hidden">
                <button class="text-sm text-black bg-[--golden] py-2 px-3">Today</button>
                <button class="text-sm hover:text-[--golden] py-2 px-3 bg-gray-800">Week</button>
                <button class="text-sm hover:text-[--golden] py-2 px-3 bg-gray-800">Month</button>
            </div>
        </div>
        <div class="bg-gray-800 mt-8 px-4 py-6 space-y-3 w-full">
            <TopCard />
        </div>
    </aside>
</template>