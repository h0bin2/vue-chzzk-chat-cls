<template>
  <topHeader></topHeader>
  <router-view></router-view>
</template>

<script>
import topHeader from './components/topHeader.vue'

export default {
  name: 'App',
  components: {
    topHeader
  }
}
</script>

<style>
* {
  font-family: 'tossFont', Helvetica, Arial, sans-serif;
}
</style>
