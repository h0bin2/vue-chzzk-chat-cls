<template>
    <div class="previewLiveBox">
        <img src="@/assets/169preview.jpeg" alt="">
        <div class="infoLive">
            <div class="strmImg">
                <img src="@/assets/strmTest.jpg" alt="">
            </div>
            <div class="strmTitle">
                <span class="title">이강원의 라이브방송</span>
                <span class="strmName">이강원</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'previewLive',
    props:[
        
    ]
}
</script>
<style scoped>
@media screen and (min-width: 800px) {
    .previewLiveBox {
        width: 100%;
        height: 100%;
    }

    .previewLiveBox > img {
        width: 100%;
        border-radius: 20px;
    }

    .infoLive {
        display: flex;
        height: 50px;
        margin-top: 5px;
        align-items: center;
    }

    .strmImg {
        width: 15%;
    }

    .strmImg > img {
        width: 100%;
        border-radius: 40px;
    }

    .strmTitle {
        margin-left: 5px;
        display: flex;
        flex-direction: column;
    }

    .strmName {
        font-size: small;
    }
}

@media screen and (max-width: 799px) {
    .previewLiveBox {
        width: 100%;
        height: 100%;
    }

    .previewLiveBox > img {
        width: 100%;
        border-radius: 20px;
    }

    .infoLive {
        display: flex;
        height: 50px;
        margin-top: 5px;
        align-items: center;
    }

    .strmImg {
        width: 15%;
    }

    .strmImg > img {
        width: 100%;
        border-radius: 40px;
    }

    .strmTitle {
        margin-left: 5px;
        display: flex;
        flex-direction: column;
    }

    .strmName {
        font-size: small;
    }
}
</style>