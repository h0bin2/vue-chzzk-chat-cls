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
    min-height: calc(100vh - 60px);

    display: flex;
    transform: translateY(10px);

    width: 90%;
    height: 100vh;
}
</style>