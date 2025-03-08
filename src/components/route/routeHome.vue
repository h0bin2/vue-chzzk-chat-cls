<template>
    <div class="routeHome">
        <mainBanner></mainBanner>
        <liveGridLayout :globalChzzkLiveList='globalChzzkLiveList'></liveGridLayout>
    </div>
</template>
<script>
import liveGridLayout from '@/components/layout/liveGridLayout.vue';
import mainBanner from '@/components/layout/mainBanner.vue';

export default {
    name:'routeHome',
    components:{
        liveGridLayout,
        mainBanner
    },
    data(){
        return {
            globalChzzkLiveList:{},
        }
    },
    mounted(){
        this.loadChzzkLiveTop20();
        this.loadLoggedUserInfo();
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
                    this.globalChzzkLiveList = res['content']['data'];
                }

                return ;
            } catch{
                alert("인기방송 불러오기 실패");
            }
        },
        async loadLoggedUserInfo(){
            try {
                const response = await fetch('/user/session',{
                    credentials: 'include',
                    method: 'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                });

                const res = await response.json();

                this.$store.dispatch('login', res.content);
            }catch{
                console.log('error');
            }
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