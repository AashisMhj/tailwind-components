<script setup>
const resources = [
    {
        "title": "Tailwind components library",
        "data": [
            "https://tailwind-elements.com/",
            "https://tailwindcomponents.com/",
            "https://www.hyperui.dev/components/application-ui",
            "https://flowbite.com/",
            "https://tailwindui.com/components",
        ]
    },
    {
        "title": "Animation",
        "data": [
            "https://morioh.com/p/47bef69822d6",
            "https://tinymotion.me/"
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
    <main class="container max-w-4xl mx-auto pt-5 mb-5 h-screen bg-slate-50 px-2">
        <h1 class="text-center text-4xl mb-10 tracking-widest">Resources</h1>
        <section class="mt-6 mb-2" v-for="item in resources">
            <h2 class="text-center text-2xl mb-5 tracking-wider">{{ item.title }}</h2>
            <ul class="rounded" v-for="listItem in item.data">
                <a class="p-4 py-2 tracking-side hover:underline hover:text-blue-400 transition-colors ease-in duration-100" :href="listItem" target="_blank">
                    <li>{{ listItem }}</li>
                </a>
            </ul>
        </section>
    </main>
</template>

<!-- Resource -->
<!-- https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg -->