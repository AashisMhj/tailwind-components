<script setup>
import ImageCard from '@/components/layout-demos/gallery-flex/ImageCard.vue';
const images = Array.from({length: 20}, (_, i) => `https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${i+1}).webp`)

</script>
<template>
    <section class="overflow-hidden text-neutral-700" >
        <div  class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="-m-1 flex flex-wrap md:-m-2">
                <ImageCard v-for="item in images" :image="item" />
            </div>
        </div>
    </section>
</template>