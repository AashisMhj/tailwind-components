<script setup>
import { RouterLink } from 'vue-router';
import paths from '@/router/paths';
const sections = [
    {
        title: "Basic Components",
        path: paths.componentsPage,
        data: [
            {title: "Bread Crumb", path: paths.breadCrumb},
            {title: "Cards", path: paths.cards},
            {title: "Headers", path: paths.headers},
            {title: "Carousel", path: paths.carousel}
        ]
    },
    {
        title: "Layouts",
        path: paths.layoutsPage,
        data: [
            {title: "Gallery with Grid", path: paths.galleryGridLayoutDemo},
            {title: "Gallery with Flex", path: paths.galleryLayoutDemo},
            {title: "Description List", path: paths.descriptionListDemo}
        ]
    },
    {
        title: "Pages",
        path: paths.pages,
        data: [
            {title: "Page 1", path: paths.page1}
        ]
    }
]
</script>
<template>
    <section class="container mx-auto  pt-5">
        <h1 class="text-center text-4xl mb-10">Tailwind Components</h1>
        <section v-for="section in sections">
            <h2 class="text-2xl text-center mb-5">{{ section.title }}</h2>
            <ul v-for="item in section.data" class="">
                <li class="mb-2">
                    <RouterLink :to="item.path">{{ item.title }}</RouterLink>
                </li>
            </ul>
        </section>
    </section>
</template>