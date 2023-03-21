<template>
    <!-- TODO set background color -->
    <nav class="fixed w-full z-30 top-0 text-white bg-white shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div class="pl-4 flex items-center">
                <!-- toggle colour is used in js -->
                <a href="#" class="toggleColor no-underline hover:no-underline font-bod text-2xl lg:text-4xl text-gray-800">
                    <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                    <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)"></rect>
                    <path class="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "></path>
                </svg> LANDING
                </a>
            </div>
            <!--  add on click listener for this -->
            <div class="block lg:hidden pr-4">
                <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
                </button>
            </div>
            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-block p-4 lg:p-0 z-20 bg-white">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    <li class="mr-3">
                        <a href="#" class="inline-block py-2 px-4 text-black font-bold no-underline">Active</a>
                    </li>
                    <li class="mr-3">
                        <a href="#" class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 ">In active</a>
                    </li>
                    <li class="mr-3">
                        <a href="#" class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 ">In active</a>
                    </li>
                </ul>
                <button class="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white">Action</button>
            </div>
        </div>
        <hr class="border-b border-gray-100 opacity-24 my-0 py-0" />
    </nav>
</template>