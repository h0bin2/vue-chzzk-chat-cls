<template>
    <div class="routeLive">
        
    </div>
</template>
<script>

export default {
    name:'routeLive',
    data() {
        return {
        playerOptions: {
            sources: [{
            type: "application/x-mpegURL",
            src: "https://example.com/video.m3u8"
            }]
        }
        };
    }
}
</script>
<style scoped>
.routeLive {
    padding-top: 50px;
    min-height: calc(100vh - 60px);
}

video {
    border: 1px solid red;
}
</style>