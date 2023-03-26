<template>
    <section class="flex justify-center flex-col items-center">
        <h1 class="leading-5 text-2xl mt-4 mb-4">Rotation</h1>
        <div
            class="h-[200px] w-[200px] duration-500 rounded-lg delay-300 shadow cursor-pointer hover:rotate-180 bg-green-300 p-12">
            <span class="leading-5 text-2xl text-center">
                Hover Over me
            </span>
        </div>
    </section>
    <section class="flex justify-center flex-col items-center">
        <h1 class="leading-5 text-2xl mt-4 mb-4">Scale</h1>
        <div class="h-[200px] w-[200px] p-12 bg-blue-900 rounded-lg shadow cursor-pointer  hover:scale-125 duration-500">
            <span class="leading-5 text-2xl text-center text-white">
                Hover Me
            </span>
        </div>
    </section>
    <section class="flex justify-center flex-col items-center">
        <h1 class="leading-5 text-2xl mt-4 mb-4">Transformation</h1>
        <div
            class="h-[200px] w-[200px] p-12 bg-indigo-300 text-white rounded-lg shadow cursor-pointer hover:translate-y-6 duration-300">
            <span class="leading-5 text-2xl text-center">
                Hover me
            </span>
        </div>
    </section>
    <section class="flex justify-center flex-col items-center">
        <h1 class="leading-5 text-2xl mt-4 mb-4">Skew</h1>
        <div class="h-[200px] w-[200px] p-12 bg-amber-400 rounded-lg shadow cursor-pointer hover:skew-y-12 duration-500">
            <span class="leading-5 text-2xl text-center">
                Hover Me
            </span>
        </div>
    </section>
    <section class="flex justify-center flex-col items-center">
        <h1 class="leading-5 text-2xl mt-4 mb-4">Transform</h1>
        <div
            class="h-[200px] w-[200px] p-12 bg-teal-600 rounded-lg shadow cursor-pointer origin-top hover:rotate-45 duration-500">
            <span class="leading-5 text-2xl text-center">
                Hover Me
            </span>
        </div>
    </section>
</template>