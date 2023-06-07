<script setup>
import Card1 from '@/components/my-components/cards/Card1.vue'
import Card2 from '@/components/my-components/cards/Card2.vue';
import Card3 from '@/components/my-components/cards/Card3.vue';
import Card4 from '@/components/my-components/cards/Card4.vue';
import Card5 from '@/components/my-components/cards/Card5.vue';
import Card6 from '@/components/my-components/cards/Card6.vue';
import Card7 from '@/components/my-components/cards/Card7.vue';
import Card8 from '@/components/my-components/cards/Card8.vue';
import Card9 from '@/components/my-components/cards/Card9.vue';
import Card10 from '@/components/my-components/cards/Card10.vue';
import Card11 from '@/components/my-components/cards/Card11.vue';
import Card12 from '@/components/my-components/cards/Card12.vue';
import Card13 from '@/components/my-components/cards/Card13.vue';
import Card14 from '@/components/my-components/cards/Card14.vue';
</script>
<template>
    <div class="bg-slate-100">
        <h2 class="text-center text-4xl">Cards</h2>
        <section class="flex justify-around gap-4 p-5 my-10">
            <Card1 />
            <Card2 />
            <Card3 />
        </section>
        <section class="flex justify-around  my-10 gap-4">
            <Card4 />
            <Card5 />
            <Card6 />
        </section>
        <section class="flex justify-around my-10 gap-4">
            <Card7 />
        </section>
        <section class="grid grid-cols-3 justify-around my-10 gap-4">
            <Card8 />
            <Card9 />
            <Card10 />
        </section>
        <section class="flex justify-around my-10 gap-4">
            <Card12 />
            <Card11 />
        </section>
        <section class="flex justify-around my-10 gap-4">
            <Card13 />
            <Card14 />
        </section>
    </div>
</template>