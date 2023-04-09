<script setup>
import SideBarItem from "./SideBarItem.vue";
import path from "@/router/paths";
defineProps({
    is_open: Boolean
});
const navItems = [
    {
        title: "Home",
        path: path.homePath
    },
    {
        title: "Components",
        path: path.componentsPage,
        children: [
            {
                title: 'Buttons',
                path: path.buttons
            },
            {
                title: "BreadCrumb",
                path: path.breadCrumb
            },
            {
                title: "Header",
                path: path.headers
            },
            {
                title: "Cards",
                path: path.cards
            },
            {
                title: "Modals",
                path: path.modal
            },
            {
                title: "Text Fields",
                path: path.textFields
            },
            {
                title: "News Letters",
                path: path.newsLetters,
            }
        ]
    },
    {
        title: "Layouts",
        path: path.layoutsPage,
        children: [
            {
                title: "Gallery Flex",
                path: path.galleryLayoutDemo
            },
            {
                title: "Gallery Grid",
                path: path.galleryGridLayoutDemo
            },
            {
                title: "Description List",
                path: path.descriptionListDemo
            }
        ]
    },
    {
        title: "Animation",
        path: path.animationPage,
        children: [
            {
                title: "Transformation",
                path: path.transformation
            },
            {
                title: "Transition",
                path: path.transition
            }
        ]
    },
    {
        title: "Pages",
        path: path.pages,
        children: [
            {
                title: "Page 1",
                path: path.page1
            }
        ]
    },
    {
        title: "Playground",
        path: path.playGroundPage
    },
    {
        title: "Resources",
        path: path.resourcesPage,
    }
]
</script>
<template>
    <div v-if="is_open" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <nav :class="{ '-translate-x-full': !is_open }"
            class="absolute top-0 z-[1035] left-0 h-full w-60 overflow-hidden bg-red-300 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800">
            <div class="flex justify-center pt-4 leading-4 py-3">
                <span class="text-black dark:text-white w-full text-center text-lg cursor-pointer hover:text-gray-200"
                    @click="() => $emit('close')">Close</span>
            </div>
            <ul class="relative m-0 list-none px-[0.2rem]">
                <li class="relative border-b-2 " v-for="item in navItems">
                    <SideBarItem :title="item.title" :path="item.path" :children="item.children ? item.children : []" />
                </li>
            </ul>
        </nav>
    </div>
</template>