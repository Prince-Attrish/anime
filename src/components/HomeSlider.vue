<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Autoplay} from 'swiper/modules';

    import { ref } from 'vue';
    import data from '../assets/data'
    import Button from './button.vue';

    const homeSliderText = ref(data)
</script>

<template>
    <swiper :modules="[Autoplay]" :loop="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }">
        <swiper-slide class="relative shadow" v-for="(text, index) in homeSliderText" :key="index">
            <div class=" w-4/5 md:w-1/2 absolute bottom-4 left-4 md:left-8 z-10 flex flex-col items-start">
                <span class="md:mb-2 mb-1 text-[--golden] text-sm sm:mb-3">#{{ index+1 }} Spotlight</span>
                <h1 class="md:mb-4 mb-3 text-xl md:text-4xl text-white font-semibold">{{ text.name }}</h1>
                <p class="hidden md:block mb-5 text-gray-300 text-base text-start">{{ text.description }}</p>
                <div class="flex gap-3 md:mb-4 mb-2">
                    <Button class="text-black">Watch Now</Button>
                    <Button class=" bg-gray-50/40 hover:bg-gray-50/60">Details</Button>
                </div>
            </div>
            <img class="w-full object-contain aspect-[21/9] brightness-50 bg-gray-700" :src="text.img" alt="Bleach">
        </swiper-slide>
    </swiper>
</template>


<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>