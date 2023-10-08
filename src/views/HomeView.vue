<script setup>
    import Card from '../components/Card.vue';
    import Heading from '../components/Heading.vue';
    import HomeSlider from '../components/HomeSlider.vue';
    import Rightsidebar from '../components/Rightsidebar.vue';
    import PopularData from '../assets/data/populars.json'
    import MovieData from '../assets/data/movies.json'
</script>

<template>
    <HomeSlider />
    <main class="p-4 bg-gray-900">
        <div class="xl:flex gap-6">
            <div class="xl:w-3/4">
                <Heading>Latest Episode</Heading>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5">
                    <Card :dataObj="PopularData" />
                </div>

                <Heading class="mt-5">New On Aniwatch</Heading>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5">
                    <Card :dataObj="MovieData" />
                </div>
            </div>
            <Rightsidebar class="mt-5 xl:mt-0" />
        </div>
    </main>
</template>