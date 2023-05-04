<script setup>
// https://dev.to/luvejo/how-to-build-a-carousel-from-scratch-using-vue-js-4ki0
import { ref, onMounted } from 'vue';
const cards = ref([1, 2, 3, 4, 5, 6, 7]);
const container = ref(null);
const count = ref(0);

const step = ref(0);
onMounted(() => {
    const innerWidth = container.value.scrollWidth;
    const totalCards = cards.value.length;
    step.value = innerWidth / totalCards
})
function next() {
    count.value = count.value +1;
    container.value.style.transform = `translateX(-${count.value * step.value}px)`;
    
}

function prev(){
    if(count.value > 1){
        count.value = count.value -1;
        container.value.style.transform = `translateX(-${(count.value * step.value)}px)`;
    }
    
}
</script>

<template>
    <div  class="w-[300px] overflow-hidden mx-auto">
        <div ref="container" class="inner whitespace-nowrap w-full">
            <div class="w-[100px] mr-[10px] inline-flex h-[100px] bg-teal-900 text-white rounded-lg items-center justify-center"
                v-for="card in cards" :key="card">
                {{ card }}
            </div>
        </div>
    </div>
    <div class="w-[300px] mx-auto flex justify-center">
        <button @click="prev" class="mr-[5px] rounded border-2 px-6 py-2 mt-[10px]">prev</button>
        <button @click="next" class="mr-[5px] rounded border-2 px-6 py-2 mt-[10px]">next</button>
    </div>
</template>


<style scoped>
.inner {
    transition: transform 0.2s;
}
</style>