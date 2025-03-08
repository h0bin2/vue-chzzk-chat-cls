<template>
    <div class="routeStudio">
        <studioLayout></studioLayout>
    </div>
</template>
<script>
import studioLayout from '@/components/layout/studioLayout.vue'

export default {
    name:'routeStudio',
    components:{
        studioLayout
    }
}
</script>
<style scoped>
.routeStudio {
    padding-top: 50px;
    min-height: calc(100vh - 80px);

    margin: 0px 50px 0px 50px;
    width: 100%;
}   
</style>