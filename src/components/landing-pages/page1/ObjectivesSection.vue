<script setup>
    import Image1 from './Image1.vue';
    import Image2 from './Image2.vue';
</script>
<template>
    <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">TItle</h1>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Object 1 of page</h3>
                    <p class="text-gray-600 mb-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quae modi quas ad repellat recusandae, porro voluptate odio odit iste pariatur praesentium adipisci veritatis cum quasi fugiat cumque. Officiis, alias.
                        <br>
                        Images from: <a class="text-orange-500 underline" href="https://undraw.co/">undraw.co</a>
                    </p>
                </div>
                <div class="w-full sm:w-1/2 p-6"><Image1 /></div>
            </div>
            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                <div class="w-full sm:w-1/2 p-6 mt-6">
                    <Image2 />
                </div>
                <div class="w-full sm:w-1/2 p-6 mt-6">
                    <div class="align-middle">
                        <h3 class="text-3xl text-gray-800 font-bold leading none mb-3">lorem ipsum obj 2</h3>
                        <p class="text-gray-600 mb-8">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam, modi dolore voluptas exercitationem dolor mollitia sit officiis unde aperiam. Ratione, explicabo quod labore quo dolore doloribus sapiente eius. Enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>