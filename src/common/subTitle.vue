<template>
    <span v-text="title"></span>
</template>
<script>
export default {
    name:'subTitle',
    props:[
        'title'
    ]
}
</script>
<style scoped>
span {
    margin: 0px 20px;
}
</style>