<template>
    <ul class="navigation">
        <li><a class="selectTag" href="#">홈</a></li>
        <li><a href="#">분석</a></li>
        <li><a href="#">하이라이트</a></li>
        <li><a href="#">생성형AI</a></li>
    </ul>
</template>
<script>
export default {
    name:"categoryNav",
    methods:{
        
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