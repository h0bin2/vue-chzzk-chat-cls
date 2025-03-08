<template>
    <ul class="navigation">
        <li v-for="(item, index) in category" :key='index'>
            <a :class="{'selectTag': index === 0}" :href="'/studio/'+ studioId + '/' + index">{{item}}</a>
        </li>
    </ul>
</template>
<script>
export default {
    name:"categoryNav",
    data(){
        return{
            category:[
                '홈',
                '채팅 분석',
                '하이라이트 분석',
                '인공지능'
            ],
            studioId:this.$route.params.studioId
        } 
    }
}
</script>
<style scoped>
.navigation {
    list-style:none;
    display:flex;

    border-bottom:1px solid #505050;
    padding-bottom:10px;
}

.navigation > li {
    font-size:20px;
}

.navigation > li > a {
    color: #505050;
    text-decoration:none;
}

.navigation > li:nth-child(n+2):nth-child(-n+5) {
    margin-left:40px;
}

.selectTag {
    color:white !important;
}
</style>