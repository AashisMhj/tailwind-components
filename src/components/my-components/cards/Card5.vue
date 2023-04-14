<script setup>
import {ref} from 'vue';
const dropdownItems = ["Profile", "Edit", "Delete"];
const showDropDown = ref(false);
</script>
<template>
    <div class="w-full h-min max-w-sm bg-white rounded-lg shadow border border-gray-200 ">
        <div class="flex justify-end px-4 pt-4">
            <button @click="() => showDropDown = !showDropDown">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                </svg>
            </button>
            <nav :class="{'hidden': !showDropDown}" class="z-10 absolute mt-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-2">
                    <li v-for="item in dropdownItems"
                        class="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 ">
                        {{ item }}
                    </li>
                </ul>
            </nav>
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/images/profile-1.jpg" alt="Profile 1">
            <h5 class="mb-1 text-xl font-medium text-gray-900">John Doe</h5>
            <span class="text-sm text-gray-500">Lock Smith</span>
            <div class="flex mt-4 space-x-3">
                <button class="px-4 py-2 rounded-lg shadow hover:outline-none bg-yellow-400 hover:bg-yellow-600 text-gray-200">
                    View Profile
                </button>
                <button class="px-4 py-2 rounded-lg shadow hover:outline-none bg-red-400 hover:bg-red-600 text-gray-200">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>