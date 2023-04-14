<script setup>
import ListLayout from '@/layouts/List.layout.vue';
import paths from '@/router/paths';
const list = [
    { title: "Buttons", path: paths.buttons },
    { title: "Bread Crumbs", path: paths.breadCrumb },
    { title: "Headers", path: paths.headers },
    { title: "Cards", path: paths.cards },
    { title: "Modals", path: paths.modal },
    { title: "Text Fields", path: paths.textFields },
    { title: "News Letters", path: paths.newsLetters },
    { title: "Carousels", path: paths.carousel }
]
</script>
<template>
    <ListLayout heading="Components" :list="list" />
</template>