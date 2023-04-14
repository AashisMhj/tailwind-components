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
const files = [
    "resume.pdf",
    "global key error.csv"
]
function getKeys(){
    return Object.keys(data);
}
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
                                    <li v-for="file in files" class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                        <div class="flex w-0 flex-1 items-center">
                                            <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
                                            <span class="ml-2 w-0 flex-1 truncate">{{ file }}</span>
                                        </div>
                                        <div class="ml-4 flex-shrink-0">
                                            <a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">Download</a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </section>
</template>