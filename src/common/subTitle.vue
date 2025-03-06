<template>
    <span v-text="title" :style="{'font-size': fontWeight + 'px'}"></span>
</template>
<script>
export default {
    name:'subTitle',
    props:[
        'title',
        'fontWeight'
    ]
}
</script>
<style scoped>
span {
    margin: 0px 50px;
}
</style>