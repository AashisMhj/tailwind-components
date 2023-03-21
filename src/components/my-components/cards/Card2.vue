<script setup>
const img = "https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no";
const name = 'Jhony Doey'
</script>
<template>
    <div class="card h-[37rem] rounded-sm flex flex-col items-center shadow-md text-white">
        <img class="card-image" :src="img" alt="">
        <p class="mt-4">{{ name }}</p>
        <div class="grid-container">
            <div class="grid-child-posts">
                230 Post
            </div>
            <div class="grid-child-followers">
                1220 Likes
            </div>
        </div>
        <ul class="social-icons">
        </ul>
        <button>Follow</button>
        <button>Message</button>
    </div>
</template>

<style scoped>
.card{
    background-color: #222831;
}
</style>