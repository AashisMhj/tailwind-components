<script setup>
import { RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue';
// import NavBar from '@/components/common/NavBar.vue';
import FloatingBtn from '@/components/common/FloatingBtn.vue';
import SideBar from '@/components/common/SideBar.vue';
import ContainerLayout from '@/layouts/Container.layout.vue';

const is_sidebar_open = ref(false);
const route = useRoute();
function toggleSideBar() {
  is_sidebar_open.value = !is_sidebar_open.value;
}
watch(() => route.fullPath, ()=>{
  is_sidebar_open.value = false;
})
</script>

<template>
  <ContainerLayout>
    <RouterView />
  </ContainerLayout>
  <FloatingBtn @toggle-sidebar="event =>toggleSideBar()" />
  <SideBar :is_open="is_sidebar_open" @close="event => toggleSideBar()" />
</template>
