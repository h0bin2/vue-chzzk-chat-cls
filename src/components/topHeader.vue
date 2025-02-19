<template>
    <div id="header">
        <div id="home">
            정보통신실
        </div>
        <div id="searchInput" :class="{'highlight':isInputFocus}">
            <inputText @focus="isInputFocus = true" @blur="isInputFocus = false"></inputText>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>
        <div id="user">
            <hrefButton href="profile" btnName="프로필"></hrefButton>
        </div>
    </div>
</template>
<script>
import inputText from '@/common/inputText.vue';
import hrefButton from '@/common/hrefButton.vue';

export default {
    name:'topHeader',
    components:{
        inputText,
        hrefButton
    },
    data(){
        return {
            isInputFocus:false
        }
    }
}
</script>
<style scoped>
#header {
    padding: 10px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #141517;
    color: azure;
    
    position: fixed;
    top:0;
    width: 100%;
}

#home {
    margin-left: 20px;
}

#user {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    transform: translate(-20px);
}

@media screen and (min-width: 800px) {
    #searchInput {
        width: 500px;
        height: 30px;
        border: 1px solid darkgrey;
        border-radius: 20px;
        
        display: flex;
        justify-content: left;
        align-items: center;

        margin-left: auto;
    }
}

@media screen and (max-width:799px) {
    #searchInput {
        display: none;
    }
}

#searchInput > input {
    transform: translate(10px);
}

#searchInput > input:focus {
    outline: none;
}

.highlight {
    border: 1px solid rgba(0, 255, 163, .6) !important;
}

svg {
    width: 20px;
    height: 20px;
    transform: translate(20px);

    fill: darkgray;
}
</style>