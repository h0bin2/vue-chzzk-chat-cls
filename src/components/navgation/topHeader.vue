<template>
    <div id="header">
        <div id="home">
            <a href="/">정보통신실</a>
        </div>
        <div id="searchInput" :class="{'highlight':isInputFocus}">
            <inputText @focus="isInputFocus = true" @blur="isInputFocus = false"></inputText>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>
        <div id="user">
            <div class="menu">
                <a href="#">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_995_296243" maskUnits="userSpaceOnUse" x="0" y="27" width="40" height="8" style="mask-type: luminance;"><rect width="40" height="7" transform="matrix(1 0 0 -1 0 34.5)" fill="white"></rect></mask><g mask="url(#mask0_995_296243)"><circle cx="20" cy="27.5" r="2.5" stroke="currentColor" stroke-width="2"></circle></g><path d="M19.9981 9.5C24.1315 9.5 27.4953 12.4505 27.607 16.1281L27.6092 19.9952L28.9072 23.5441C29.2416 24.4586 28.6457 25.2 27.548 25.2H12.4483C11.3632 25.2 10.7569 24.4502 11.0925 23.5298L12.3854 19.9828L12.3864 16.1289L12.3934 16.0212C12.5663 12.3935 15.9049 9.5 19.9981 9.5Z" stroke="currentColor" stroke-width="2"></path></svg>
                </a>
            </div>
            <div class="auth">
                <hrefButton v-if='isLoggedIn' v-bind:isOnline="false" :href="'/studio/1'" :size="40" :filename="'anonymous.png'"></hrefButton>
                <a v-else href="/login">
                    <span>로그인</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import inputText from '@/common/inputText.vue';
import hrefButton from '@/common/aImgTag.vue';

export default {
    name:'topHeader',
    components:{
        inputText,
        hrefButton
    },
    data(){
        return {
            isInputFocus:false,
            user: {
                'name':'hi'
            }
        }
    },
    props:{
        isLoggedIn:{
            Boolean,
            required:true
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
    margin-left: 50px;

    font-size:20px;
}

#home > a {
    text-decoration: none;
    color: white;

    display: block;
    width:100%;
    height:100%;

    padding: 5px 5px;
}

#user {
    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(-50px);
}

.menu {
    display: flex;
    flex-direction: row-reverse;

    align-items: center;

    transform: translateX(-10px)
}

.menu > a {
    width: 40px;
    height: 40px;
}

.menu > a > svg {
    filter: invert(100%) sepia(93%) saturate(4%) hue-rotate(256deg) brightness(106%) contrast(100%);
}

.menu > a:hover {
    background-color: grey;
    border-radius: 5px;
}

.highlight {
    border: 1px solid rgba(0, 255, 163, .6) !important;
}

.auth > a {
    color: white;
    text-decoration: none;
}

.auth > a {
    padding: 3px 5px 3px 5px;
}

.auth > a:hover{
    background-color: #202020;
}

@media screen and (min-width: 800px) {
    #searchInput {
        width: 360px;
        height: 35px;
        border: 1px solid darkgrey;
        border-radius: 20px;
        
        display: flex;
        justify-content: left;
        align-items: center;

        margin: auto;
    }

    #searchInput > input {
        transform: translate(15px);
    }

    #searchInput > input:focus {
        outline: none;
    }

    #searchInput > svg {
        width: 20px;
        height: 20px;
        transform: translate(30px);

        fill: white;
    }
}

@media screen and (max-width:799px) {
    #searchInput {
        display: none;
    }

    #user {
        margin-left: auto;
    }
}
</style>