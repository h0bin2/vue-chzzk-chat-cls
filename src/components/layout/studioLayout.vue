<template>
    <div class="studio-layout">
        <div class="channel-profile">
            <hrefButton class="channel-image" href="profile" size="110" filename="anonymous.png" isOnline='true'></hrefButton>
            <div class="channel-info">
                <subTitle title="이강원" fontWeight="40"></subTitle>
                <a class='chzzk-link' href="#">치지직 보기 ></a>
            </div>
        </div>
        <div class="channel-analysis">
            <categoryNav></categoryNav>
        </div>
    </div>
</template>
<script>
import hrefButton from '@/common/hrefButton.vue'
import subTitle from '@/common/subTitle.vue'
import categoryNav from '@/common/categoryNav.vue';

export default {
    name:'studioLayout',
    components:{
        hrefButton,
        subTitle,
        categoryNav
    }
}
</script>
<style scoped>
@media screen and (min-width:800px) {
    .studio-layout {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;
    }

    .channel-profile {
        width: 100%;
        height: 160px;

        display: flex;
        align-items: center;
    }

    .channel-info {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction:column;
        justify-content:center;
    }

    .chzzk-link {
        color: gray;
        text-decoration:none;

        margin: 5px 20px;
    }
}

@media screen and (max-width: 799px) {
    
}
</style>