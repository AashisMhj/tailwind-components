<script setup>
import {ref} from 'vue';
import { RouterLink } from 'vue-router';
defineProps({
    title: String,
    path: String,
    children: Array
});
const show_children = ref(false);
function toggleDropDown(){
    show_children.value = !show_children.value;
}
</script>
<template>
    <div class="flex h-12 cursor-pointer items-center content-around truncate rounded-[5px] py-4 px=6 text=[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:output-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10">
        <span>
            <RouterLink :to="path">
                {{ title }}
            </RouterLink>
        </span>
        <span v-if="children.length > 0" @click="toggleDropDown" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
            </svg>
        </span>
    </div>
    <ul v-if="children.length > 0 && show_children" class="relative m-0 list-none p-0">
        <li class="relative" v-for="child in children">
            <RouterLink class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10" :to="child.path" >{{ child.title }}</RouterLink>
        </li>
    </ul>
</template>