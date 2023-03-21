<script setup>
import Row from '@/components/layout-demos/description-list/Row.vue';
const data = {
    fullName: {
        title: "Full Name",
        data: "Hevy To"
    },
    profession: {
        title: "Profession",
        data: "NoEnd Developer",
    },
    email: {
        title: "Email",
        data: "heavyto@email.com",
    },
    salary: {
        title: "Salary",
        data: 12000,
    },
    about: {
        title: "About",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
}
function getKeys(){
    return Object.keys(data);
}
const files = [

]
</script>
<template >
    <section>
        <div class="container mx-auto lg:px-32 lg:pt-12">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div class="px-6 py-5 md:px-4">
                    <h3 class="text-base font-semibold leading-6 text-gray-900">Application Information</h3>
                    <p class="mt-base max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                </div>
                <div class="border-t border-gray-200">
                    <dl>
                        <Row v-for="(key, index) in getKeys()" :is_even="index % 2 === 0" :title="data[key].title" :data="data[key].data.toString()" />
                        <div class="bg-white py-5 grid grid-cols-3 gap-4 px-6">
                            <dt class="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd class="mt-1 text-sm text-gray-900 col-span">
                                <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                                    <li>Attachment 1</li>
                                    <li>Attachment 2</li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </section>
</template>