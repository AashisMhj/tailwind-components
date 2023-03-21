<script setup>

defineProps({
    data: Array
})
</script>
<template>
    <nav class="w-full rounded-md bg-neutral-100 px-5 py-3">
        <ol class="list-reset flex">
            <template v-for="item in data">
                <li>
                    <a href="#" class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 ">{{ item.name }}</a>
                </li>
                <li>
                    <span class="mx-2 text-neutral-50">/</span>
                </li>
            </template>
        </ol>
    </nav>
</template>