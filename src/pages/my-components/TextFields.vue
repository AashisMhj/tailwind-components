<script setup>
import TextField1 from '@/components/my-components/testFields/TestField1.vue'
import TextFieldDark from '@/components/my-components/testFields/TextFieldDark.vue'
import TextFieldValidation from '@/components/my-components/testFields/TextFieldValidation.vue'
import InputGroup from '@/components/my-components/testFields/InputGroup.vue';
import SearchInput from '@/components/my-components/testFields/SearchInput.vue';
</script>
<template>
    <section class="flex justify-center my-8">
        <TextField1 />
    </section>
    <section class="flex justify-center my-8 py-3 bg-slate-800">
        <TextFieldDark />
    </section>
    <section class="flex justify-center my-8 py-3">
        <TextFieldValidation />
    </section>
    <section class="flex justify-center my-8 py-3">
        <InputGroup />
    </section>
    <section class="flex justify-center my-8 py-3">
        <SearchInput />
    </section>
</template>