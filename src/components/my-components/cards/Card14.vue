<template>
    <div class="w-1/3 aspect-square relative overflow-hidden transation">
        <img class="h-full w-full" src="/images/img (22).jpg" alt="22">
        <div class="slide absolute w-full h-full bg-opacity-90 bg-slate-700 transition-all ease-in-out duration-700 ">
            <div class="flex w-full h-full justify-center items-center">
                <button class="px-10 py-4 border-white text-white border-2">
                    Learn More
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slide{
    transition-delay: 100px;
}
.transation:hover .slide{
    top: 0px;
}
</style>