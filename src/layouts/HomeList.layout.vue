<script setup>
defineProps({
    heading: String,
    sections: Array
})
</script>
<template>
    <main class="container max-w-4xl mx-auto pt-5 pb-5 mt-4 mb-10 h-screen bg-slate-50 px-2">
        <h1 class="text-center text-4xl mb-10 tracking-widest">{{ heading }}</h1>
        <section v-for="section in sections" class="mt-6 mb-2">
            <h2 class="text-center text-2xl mb-5 tracking-wider">
                <RouterLink :to="section?.path || '#'">
                    <span class="pb-2 block mx-auto border-b-2 w-8/12 hover:border-blue-400 transition-colors ease-in">{{ section.title }}</span>
                </RouterLink>
            </h2>
            <ul class="rounded list-style pl-6">
                <li v-for="item in section.data" class="p-4 py-2 tracking-wide hover:underline hover:text-blue-400 duration-100">
                    <RouterLink :to="item.path">{{ item.title }}</RouterLink>
                </li>
            </ul>
        </section>
    </main>
</template>

<style scoped>
.list-style{
    list-style-image: url(/svg/arrow.svg);
}
</style>