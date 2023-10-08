<script setup>
import topData from '../assets/data/top10.json'

</script>

<template>
    <div v-for="(data, index) in topData" class="min-w-full" :key="index">
        <div class="flex gap-3 items-center justify-start">
            <div class="px-2 text-center">
                <h3 class="text-lg font-semibold" :class="index + 1 > 3 ? '' : ' border-b-[3px] border-[--golden]'">{{ index + 1 > 9 ? index + 1 : `0${ index + 1 }` }}</h3>
            </div>
            <div :class="index + 1 === 10 ? '' : 'border-b border-gray-700'" class="pb-3 flex gap-3 overflow-hidden items-center justify-start w-full">
                <div class="shrink-0 w-14 rounded overflow-hidden bg-gray-700">
                    <img class="w-full aspect-[4/5]"
                        :src="data.src"
                        :alt="`${data.name} image`" 
                        loading="lazy"
                    />
                </div>
                <div class="">
                    <h3 class="text-sm mb-1 line-clamp-2 font-semibold hover:text-[--golden] cursor-pointer" :title="data.name">
                        {{ data.name }}
                    </h3>
                    <div class="space-x-0.5 whitespace-nowrap">
                        <span 
                            v-if="data.lang?.sub"
                            class="text-black font-medium text-xs px-1 bg-emerald-300"
                            :class="data.lang?.dub ? 'rounded-l' : 'rounded'"
                            >
                            <i class="bi bi-badge-cc-fill"></i>
                            {{ data.lang?.sub }}
                        </span>
                        <span
                            v-if="data.lang?.dub" 
                            class="text-black font-medium text-xs px-1 bg-pink-300"
                            :class="data.lang?.sub ? 'rounded-r' : 'rounded'"
                        >
                            <i class="bi bi-mic-fill"></i>
                            {{ data.lang?.dub }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>