<script setup>
import { ref } from 'vue';;
const block = ref(null);
const xCount = ref(0);
const yCount = ref(0)
const moveSize = 20;
function right(){
    xCount.value = xCount.value + 1;
    block.value.style.transform = `translate(${moveSize * xCount.value}px, ${moveSize * yCount.value}px)`;
}
function left(){
    xCount.value = xCount.value -1;
    block.value.style.transform = `translate(${moveSize * xCount.value}px, ${moveSize * yCount.value}px)`;
}
function up(){
    yCount.value = yCount.value -1;
    block.value.style.transform = `translate(${moveSize * xCount.value}px, ${moveSize * yCount.value}px)`;
}

function down(){
    yCount.value = yCount.value +1;
    block.value.style.transform = `translate(${moveSize * xCount.value}px, ${moveSize * yCount.value}px)`;
}

function reset(){
    xCount.value = 0;
    yCount.value = 0;
    block.value.style.transform = 'none';
}
</script>
<template>
    <section>
        <div class="h-[500px] border-4 rounded shadow-md w-5/6 flex justify-center items-center">
            <div ref="block" class="w-20 h-20 bg-teal-600"></div>
        </div>
        <div class="max-w-sm mx-auto">
            <div class="flex justify-center">
                <button class="border-2 shadow-lg rounded-lg hover:text-gray-400 px-6 py-4 m-2" @click="up">Up</button>
            </div>
            <div class="flex justify-center">
                <button class="border-2 shadow-lg rounded-lg hover:text-gray-400 px-6 py-4 m-2" @click="left">Left</button>
                <button class="border-2 shadow-lg rounded-lg hover:text-gray-400 px-6 py-4 m-2" @click="reset">Reset</button>
                <button class="border-2 shadow-lg rounded-lg hover:text-gray-400 px-6 py-4 m-2" @click="right">Right</button>
            </div>
            <div class="flex justify-center">

                <button class="border-2 shadow-lg rounded-lg hover:text-gray-400 px-6 py-4 m-2" @click="down">Down</button>
            </div>
        </div>
    </section>
</template>
