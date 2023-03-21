<script setup>
defineProps({
    data: Array
})
</script>
<template>
    <nav class="w-full rounded-md bg-neutral-100 px-5 py-3">
        <ol class="list-rest flex">
            <li class="mr-4 p-2" v-for="item in data">
                <div class="bg-indigo-300 p-2">
                    {{ item.name }}
                    <span class="w-0 h-0 border-t-[50px]"></span>
                </div>
            </li >
        </ol>
    </nav>
</template>