<script setup>
defineProps({
    image: String
});
</script>

<template>
    <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1">
            <img :src="image">
        </div>
    </div>
</template>