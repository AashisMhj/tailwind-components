<script setup>
import Button1 from '@/components/my-components/buttons/Button1.vue';
import Button2 from '@/components/my-components/buttons/Button2.vue'
import Button3 from '@/components/my-components/buttons/Button3.vue';
import Button4 from '@/components/my-components/buttons/Button4.vue';
</script>
<template>
    <div class="buttons-components">
        <section class="grid grid-cols-3 lg:grid-cols-6 gap-4">
            <!-- simple button -->
            <div>
                <Button1 />
            </div>
            <!-- button with icon -->
            <div >
                <Button2 />
            </div>
            <!-- gradient button -->
            <div>
                <Button3 />
            </div>
            <!-- colored shadow -->
            <div>
                <Button4 />
            </div>
        </section>
    </div>
</template>

<style>
.buttons-components button{
    background-color: rgb(45, 210, 30);
    color: white;
}
.buttons-components button:hover{
    background-color: rgb(29, 238, 10);
}
</style>