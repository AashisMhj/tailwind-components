<script setup>
import ItemCard from './ItemCard.vue';
</script>
<template>
    <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">My Title</h1>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 rounded-t"></div>
            </div>
            <ItemCard button-position="justify-start" />
            <ItemCard button-position="justify-center" />
            <ItemCard button-position="justify-end" />
        </div>
    </section>
</template>