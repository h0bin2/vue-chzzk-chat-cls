<template>
    <subTitle title="인기 방송" fontWeight=20></subTitle>
    <div class="previewLiveBoxGrid">
        <div v-for="(item, index) in ChzzkLiveTop20" :key='index'>
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
    data(){
        return {
            ChzzkLiveTop20:{}
        }
    },
    methods:{
        async loadChzzkLiveTop20(){
            try{
                const response = await fetch('/chzzk/popular', {
                    methods:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                });

                const res = await response.json();

                if (res['status_code'] == 200) {
                    this.ChzzkLiveTop20 = res['content']['data'];
                }
            } catch{
                alert("인기방송 불러오기 실패");
            }
        },
    },
    mounted(){
        this.loadChzzkLiveTop20();
    }
}
</script>
<style scoped>
@media screen and (min-width: 1601px) {
    .previewLiveBoxGrid {
        margin: 5px 50px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}

@media screen and (min-width: 1300px)and (max-width:1600px) {
    .previewLiveBoxGrid {
        margin: 5px 50px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1300px) {
    .previewLiveBoxGrid {
        margin: 5px 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}


@media screen and (max-width: 1000px) and (min-width:450px) {
    .previewLiveBoxGrid {
        margin: 5px 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}

@media screen and (max-width: 450px) {
    .previewLiveBoxGrid {
        margin: 5px 20px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        align-items: center;
        justify-items: center;
    }
}
</style>