<template>
    <div class="previewLiveBox">
        <img :src="localChannel.liveImageUrl" alt="">
        <div class="infoLive">
            <div class="strmImg">
                <img :src="localChannel.channel.channelImageUrl" alt="">
            </div>
            <div class="strmTitle">
                <span class="title">{{localChannel.liveTitle}}</span>
                <span class="strmName">{{localChannel.channel.channelName}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'previewLive',
    props:{
        data: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            localChannel: this.data
        }
    },
    methods:{
        replaceImageUrl(){ 
            this.localChannel.liveImageUrl = this.data.liveImageUrl.replace('{type}', '480');
        }
    },
    mounted(){
        this.replaceImageUrl();
    }
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

        border: 1px solid gray;
    }

    .infoLive {
        display: flex;
        height: 50px;
        margin-top: 10px;
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
        margin-top: 10px;
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