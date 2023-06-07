<script setup>
import ListLayout from '@/layouts/HomeList.layout.vue';
import paths from '@/router/paths';
const sections = [
    {
        title: "Basic Components",
        path: paths.componentsPage,
        data: [
            { title: "Buttons", path: paths.buttons },
            { title: "Bread Crumbs", path: paths.breadCrumb },
            { title: "Headers", path: paths.headers },
            { title: "Cards", path: paths.cards },
            { title: "Modals", path: paths.modal },
            { title: "Text Fields", path: paths.textFields },
            { title: "News Letters", path: paths.newsLetters },
            { title: "Carousels", path: paths.carousel }
        ]
    },
    {
        title: "Layouts",
        path: paths.layoutsPage,
        data: [
            { title: "Gallery with Grid", path: paths.galleryGridLayoutDemo },
            { title: "Gallery with Flex", path: paths.galleryLayoutDemo },
            { title: "Description List", path: paths.descriptionListDemo }
        ]
    },
    {
        title: "Animation",
        path: paths.animationPage,
        data: [
        { title: "Transformation", path: paths.transformation },
        { title: "Transition", path: paths.transition },
        ]
    },
    {
        title: "Resources",
        path: paths.resourcesPage,
        data: []
    }
]
</script>
<template>
    <ListLayout heading="Tailwind Components" :sections="sections" />
</template>