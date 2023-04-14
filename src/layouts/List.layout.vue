<script setup>
defineProps({
    heading: String,
    list: Array
})
</script>
<template>
    <main class="container max-w-4xl mx-auto pt-5 pb-5 px-2 mt-5 mb-10  h-screen bg-slate-50 ">
        <h1 class="text-center text-4xl mb-10 tracking-widest">{{ heading }}</h1>
        <ul class="rounded list-style pl-6">
            <li v-for="item in list" class="px-4 py-2 tracking-wide hover:underline hover:text-blue-400 duration-100">
                <RouterLink :to="item.path">{{ item.title }}</RouterLink>
            </li>
        </ul>
    </main>

</template>

<style scoped>
.list-style{
    list-style-image: url(/svg/arrow.svg);
}
</style>