<template>
    <a :class="{online:isOnline}" :href="href" :style="{width: size + 'px', height: size + 'px'}">
        <img :src="imagePath" alt="">
    </a>
</template>

<script>
export default {
    name:'hrefButton',
    props:{
        href : {
            type:String
        },
        size:{
            type : String
        },
        filename : {
            type:String,
            required: true
        },
        isOnline: {
            type:String
        }
    },
    computed:{
        imagePath(){
            return require(`@/assets/${this.filename}`);
        }
    }
}
</script>
<style scoped>
img {
    width: 100%;
    height: 100%;
    border-radius: 40em;
}

a {
    display: block;
    padding: 0px;
    border: 0px;
    border-radius: 40em;
}

.online {
    padding: 2px;
    border: 3px solid #8CF064;
}
</style>