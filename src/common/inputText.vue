<template>
    <input type="text" name="content" id="" placeholder="스트리머 검색">
</template>
<script>
export default {
    name:'inputText'
}
</script>
<style scoped>
input {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowarp;

    background-color: #141517;
    color: white;
    border: 0px;

    width: 88%;
    height: 90%;
}
</style>