<script setup>
import BreadCrumb1 from '@/components/my-components/breadCrumbs/BreadCrumb1.vue';
import BreadCrumb2 from '@/components/my-components/breadCrumbs/BreadCrumb2.vue';
import BreadCrumb3 from '@/components/my-components/breadCrumbs/BreadCrumb3.vue';
const paths = [
    {
        name: "Home",
        path: "#"
    },
    {
        name: "About Us",
        path: "#"
    },
    {
        name: "Contact",
        path: "#"
    },
    {
        name: "main",
        path: "#"
    }
];
</script>
<template>
    <div class="w-full bg-slate-300 p-5">
        <section class="mt-10">
            <BreadCrumb1 :data="paths" />
        </section>
        <section class="mt-10">
            <BreadCrumb2 :data="paths" />
        </section>
        <section class="mt-10">
            <BreadCrumb3 :data="paths" />
        </section>
    </div>
</template>