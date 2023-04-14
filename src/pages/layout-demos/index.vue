<script setup>
import ListLayout from '@/layouts/List.layout.vue';
import paths from '@/router/paths';
const list = [
    { title: "Gallery with Grid", path: paths.galleryGridLayoutDemo },
    { title: "Gallery with Flex", path: paths.galleryLayoutDemo },
    { title: "Description List", path: paths.descriptionListDemo }
]
</script>
<template>
    <ListLayout heading="Layouts Demo" :list="list" />
</template>