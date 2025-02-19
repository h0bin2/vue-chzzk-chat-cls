<template>
    <a :href="href">
        <img src="@/assets/anonymous.png" alt="">
    </a>
</template>

<script>
export default {
    name:'hrefButton',
    props:[
        'href',
        'btnName'
    ]
}
</script>
<style scoped>
img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

a {
    width: 30px;
    height: 30px;

    padding: 0px;
    border: 0px;
    border-radius: 20px;
}
</style>