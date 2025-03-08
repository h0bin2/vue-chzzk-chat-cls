<template>
  <topHeader :isLoggedIn='isLoggedIn'></topHeader>
  <leftSideNav></leftSideNav>
  <router-view></router-view>
</template>

<script>
import topHeader from '@/components/navgation/topHeader.vue';
import leftSideNav from '@/components/navgation/leftSideNav.vue';

import {mapState} from 'vuex';

export default {
  name: 'App',
  components: {
    topHeader,
    leftSideNav
  },
  computed:{
    ...mapState(['isLoggedIn'])
  }
}
</script>

<style>
* {
  font-family: 'tossFont', Helvetica, Arial, sans-serif;
}
</style>
