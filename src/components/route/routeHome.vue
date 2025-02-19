<template>
    <div class="routeHome">
        <liveChatLayout></liveChatLayout>
        <liveGridLayout></liveGridLayout>
    </div>
</template>
<script>
import liveGridLayout from '@/components/layout/liveGridLayout.vue';
import liveChatLayout from '@/components/layout/liveChatLayout.vue';
export default {
    name:'routeHome',
    components:{
        liveGridLayout,
        liveChatLayout
    },
    data(){
        return {
            top20LiveList:{}
        }
    },
    created(){
        this.loadTop20LiveList();
    },
    methods:{
        async loadTop20LiveList(){
            console.log('top20 방송 가져오기');
        }
    }
}
</script>
<style scoped>
.routeHome {
    padding-top: 50px;
    min-height: calc(100vh - 60px);
}
</style>