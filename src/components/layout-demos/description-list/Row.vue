<script setup>
const props = defineProps({
    is_even: Boolean,
    title: String,
    data: String || Number
});
</script>
<template>
    <div class="py-5 grid grid-cols-3 gap-4 px-6" :class="{'bg-white': is_even, 'bg-gray-50': !is_even }">
        <dt class="mt-1 text-sm text-gray-900col-span-2">{{ title }}</dt>
        <dd class="mt-1 text-sm text-gray-900 col-span-2">{{ data }}</dd>
    </div>
</template>