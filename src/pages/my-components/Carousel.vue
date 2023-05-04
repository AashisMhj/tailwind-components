<script setup>
import Carousel1 from '@/components/my-components/carousel/Carousel1.vue';
import Carousel2 from '@/components/my-components/carousel/Carousel2.vue';
import Carousel3 from '@/components/my-components/carousel/Carousel3.vue';
const data = [
    {
        "title": "Image 1",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "img": "img (11).jpg"
    },
    {
        "title": "Image 2",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "img": "img (15).jpg"
    },
    {
        "title": "Image 3",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "img": "img (22).jpg"
    },
    {
        "title": "Image 4",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "img": "img (23).jpg"
    },
    {
        "title": "Image 5",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "img": "img (30).jpg"
    },
]
</script>
<template>
    <section>
        <Carousel1 :data="data" />
    </section>
    <section class="mt-2">
        <Carousel2 />
    </section>
    <section class="mt-2">
        <Carousel3 />
    </section>
</template>