<script setup>
import Card1 from '@/components/my-components/cards/Card1.vue'
import Card2 from '@/components/my-components/cards/Card2.vue';
import Card3 from '@/components/my-components/cards/Card3.vue';
import Card4 from '@/components/my-components/cards/Card4.vue';
import Card5 from '@/components/my-components/cards/Card5.vue';
</script>
<template>
    <h2 class="text-center">Cards</h2>
    <section class="flex justify-around gap-4 p-5 bg-slate-100">
        <Card1 />
        <Card2 />
        <Card3 />
    </section>
    <section class="flex justify-around  bg-slate-100">
        <Card4 />
        <Card5 />
    </section>
</template>