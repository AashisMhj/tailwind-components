<script setup>
defineProps({
    buttonPosition: String
})
</script>
<template>
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="aashismaharjan.com.np" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">Card Title</p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis, nam 
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptate similique placeat facilis corporis officia natus nostrum magni, aperiam sapiente repellat ullam atque distinctio laborum qui nihil. Ullam, expedita vitae?
                </p>
            </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded rounded-t-none overflow-hidden shadow p-6">
            <div class="`flex items-center " :class="buttonPosition" >
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8">Action</button>
            </div>
        </div>
    </div>
</template>