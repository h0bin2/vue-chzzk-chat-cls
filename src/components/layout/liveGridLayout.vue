<template>
    <subTitle title="인기 방송" fontWeight=22></subTitle>
    <div class="previewLiveBoxGrid">
        <div v-for="(item, index) in globalChzzkLiveList" :key='index'>
            <previewLive :data='item'></previewLive>
        </div>
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
    },
    props: {
        globalChzzkLiveList:{
            Object,
            required: true
        }
    }
}
</script>
<style scoped>
@media screen and (min-width: 1601px) {
    .previewLiveBoxGrid {
        margin: 5px 50px 5px 60px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}

@media screen and (min-width: 1200px)and (max-width:1600px) {
    .previewLiveBoxGrid {
        margin: 5px 50px 5px 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
    .previewLiveBoxGrid {
        margin: 5px 50px 5px 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}


@media screen and (max-width: 1000px) and (min-width:550px) {
    .previewLiveBoxGrid {
        margin: 5px 50px 5px 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}

@media screen and (max-width: 550px) {
    .previewLiveBoxGrid {
        margin: 5px 50px 5px 60px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}
</style>