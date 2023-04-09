<script setup>
import Carousel1 from '@/components/my-components/carousel/Carousel1.vue';
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
    <Carousel1 :data="data" />
</template>