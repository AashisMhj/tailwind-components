<script setup>
import { ref } from 'vue';
const open_modal = ref(false);
</script>
<template>
    <div class="flex item-center justify-center my-5">
        <button class="bg-blue-900 text-white px-8 py-2 text-base font-medium hover:bg-blue-900" @click="() => open_modal = true">Open Modal</button>
    </div>
    <div :class="{'hidden': !open_modal}" class="fixed inset-0 w-full h-full bg-gray-600 bg-opacity-50 overflow-auto">
        <div class="relative top-60 mx-auto p-5 py-12 border w-2/6 shadow-lg rounded-md bg-white">
            <!-- <div class="h-10">
                <span class="relative right-0 top-0 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </div> -->
            <div class="text-center leading-4 text-gray-500 text-2xl mt-5">
                Welcome to
            </div>
            <div class="text-center leading-6 text-4xl mt-5">
                The Modal
            </div>
            <div class="flex flex-col items-center my-6">
                <span class="my-5 text-sm text-gray-400">Sign Up For out NewsLetter</span>
                <input class="border-2 w-3/4 py-3 px-1" type="email" placeholder="Your Email"/>
            </div>
            <div class="flex justify-center my-6">
                <button @click="() => open_modal = false" class="bg-blue-900 px-16 py-3 text-white">Submit</button>
            </div>
        </div>
    </div>
</template>


  