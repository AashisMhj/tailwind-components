<script setup>
import NavBar from '@/components/landing-pages/page1/NavBar.vue';
import HeroSection from '@/components/landing-pages/page1/HeroSection.vue';
import ObjectivesSection from '@/components/landing-pages/page1/ObjectivesSection.vue';
import ItemsSection from '@/components/landing-pages/page1/ItemsSection.vue';
import PricingSection from '@/components/landing-pages/page1/PricingSection.vue';

</script>
<template>
    <main class="leading-normal tracking-normal text-white gradient">
        <NavBar />
        <HeroSection />
        <ObjectivesSection />
        <ItemsSection />
        <PricingSection />
    </main>
</template>

<style scoped>
.gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    font-family: 'Source Sans Pro', sans-serif;
}
</style>