<template>
    <subTitle title="인기 방송"></subTitle>
    <div class="previewLiveBoxGrid">
        <previewLive></previewLive>
        <previewLive></previewLive>
        <previewLive></previewLive>
        <previewLive></previewLive>
    </div>
</template>
<script>
import previewLive from '@/components/canvas/previewLive.vue';
import subTitle from '@/common/subTitle.vue'

export default {
    name:'liveGridLayout',
    components:{
        previewLive,
        subTitle
    }
}
</script>
<style scoped>
@media screen and (min-width: 800px) {
    .previewLiveBoxGrid {
        margin: 5px 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}

@media screen and (max-width: 799px) {
    .previewLiveBoxGrid {
        margin: 5px 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}
</style>