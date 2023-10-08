<script setup>
    import Heading from '../components/Heading.vue'
    import Card from '../components/Card.vue'
    import PopularData from '../assets/data/populars.json'
    import Pagination from '../components/Pagination.vue';
    import Rightsidebar from '../components/Rightsidebar.vue';
</script>

<template>
    <main class="p-4 bg-gray-900">
        <div class="xl:flex gap-6">
            <div class="xl:w-3/4">
                <Heading>Most Popular</Heading>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5">
                    <Card :dataObj="PopularData" />
                </div>
                <Pagination />
            </div>
            <Rightsidebar />
        </div>
    </main>
</template>