<script setup>
const resources = [
    {
        "title": "Tailwind components library",
        "data": [
            "https://tailwind-elements.com/",
            "https://tailwindcomponents.com/",
            "https://www.hyperui.dev/components/application-ui",
            "https://flowbite.com/",
            "https://tailwindui.com/components"
        ]
    },
    {
        "title": "Free Templates",
        "data": [
            "https://www.tailwindawesome.com/?price=free&type=template",
            "https://www.tailwindtoolbox.com/templates/landing-page"
        ]
    }
]
</script>
<template>
    <div class="w-5/6 mx-auto">
        <h1 class="leading-1 mx-auto text-3xl font-bold text-center">Resources</h1>
        <section class="pt-5" v-for="item in resources">
            <h2 class="text-lg font-semibold text-center">{{ item.title }}</h2>
            <ul class="pt-5" v-for="listItem in item.data">
                <a :href="listItem">
                    <li>{{ listItem }}</li>
                </a>
            </ul>
        </section>
    </div>
</template>