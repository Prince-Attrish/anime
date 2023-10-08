<script setup>

    defineProps ({
        dataObj: Object
    })

</script>

<template>
        <div v-for="data in dataObj">
            <div class="relative group cursor-pointer rounded overflow-hidden brightness-90">
                <img class="w-full bg-gray-700 aspect-[3/4]"
                    :src="data.src"
                    :alt="`${data.name} image`" 
                    loading="lazy"
                    />
                <div
                    class="hidden group-hover:block duration-150 ease-linear hover:backdrop-brightness-75 hover:backdrop-blur-md h-full w-full absolute top-0 left-0">
                    <span class="h-full w-full flex justify-center items-center text-white">
                        <i class="bi bi-play-fill text-5xl"></i>
                    </span>
                </div>
                <div class="space-x-0.5 absolute left-1 bottom-0.5 pointer-events-none">
                    <span v-if="data.lang?.sub">
                        <span 
                            class="text-black font-medium text-xs px-1 bg-emerald-300"
                            :class="data.lang?.dub ? 'rounded-l' : 'rounded'"
                            >
                            <i class="bi bi-badge-cc-fill"></i>
                            {{ data.lang?.sub }}
                        </span>
                    </span>
                    <span v-if="data.lang?.dub">
                        <span 
                            class="text-black font-medium text-xs px-1 bg-pink-300"
                            :class="data.lang?.sub ? 'rounded-r' : 'rounded'"
                        >
                            <i class="bi bi-mic-fill"></i>
                            {{ data.lang?.dub }}
                        </span>
                    </span>
                </div>
            </div>
            <h3 class="mt-1 line-clamp-1 text-sm font-semibold hover:text-[--golden] cursor-pointer" :title="data.name">
                {{ data.name }}
            </h3>
            <span class=" text-xs text-gray-400 font-light">{{ data.catagory ? data.catagory : "TV" }} &nbsp;&bull;&nbsp; {{ data.duration }}m</span>
        </div>
</template>