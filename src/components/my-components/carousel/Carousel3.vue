<script setup>
import {ref, onMounted} from 'vue';
const container = ref(null);
const count = ref(0);
const step = ref(0);
onMounted(()=>{
    const innerWidth = container.value.scrollWidth;
    step.value = innerWidth / 8;
    setInterval(()=>{
        console.log('called');
        count.value = count.value +1;
        container.value.style.transform = `translateX(-${count.value * step.value}px)`;
    }, 1000);
})
</script>
<template>
    <div class="h-96 m-20 overflow-hidden bg-gray-300">
        <div ref="container" class="inline-flex h-full items-center justify-center gap-2 p-4">
            <div class=" h-96 w-96 bg-amber-300">
                block 0
            </div>
            <div class=" h-80 w-80 bg-red-400">
                block 1
            </div>
            <div class=" h-80 w-80 bg-red-400 ">
                block 2
            </div>
            <div class=" h-80 w-80 bg-red-400">
                block 3
            </div>
            <div class=" h-80 w-80 bg-red-400">
                block 4
            </div>
            <div class=" h-80 w-80 bg-red-400 ">
                block 5
            </div>
            <div class=" h-80 w-80 bg-red-400">
                block 6
            </div>
            <div class=" h-80 w-80 bg-red-400">
                block 7
            </div>
        </div>
    </div>
</template>