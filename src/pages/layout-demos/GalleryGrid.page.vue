<script setup>
import ImageCard from '@/components/layout-demos/gallery-grid/ImageCard.vue';
const images = Array.from({length: 20}, (_, i) => `https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${i+1}).webp`)
</script>
<template>
    <section class="text-neutral-700">
        <div class="container mx-auto px-5 lg:px-32 lg:pt-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                <ImageCard v-for="item in images" :image="item" />
            </div>
        </div>
    </section>
</template>