<template>
    <div class="leftSideNav">
        <div class="navgationContent">
            <a>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_995_296243" maskUnits="userSpaceOnUse" x="0" y="27" width="40" height="8" style="mask-type: luminance;"><rect width="40" height="7" transform="matrix(1 0 0 -1 0 34.5)" fill="white"></rect></mask><g mask="url(#mask0_995_296243)"><circle cx="20" cy="27.5" r="2.5" stroke="currentColor" stroke-width="2"></circle></g><path d="M19.9981 9.5C24.1315 9.5 27.4953 12.4505 27.607 16.1281L27.6092 19.9952L28.9072 23.5441C29.2416 24.4586 28.6457 25.2 27.548 25.2H12.4483C11.3632 25.2 10.7569 24.4502 11.0925 23.5298L12.3854 19.9828L12.3864 16.1289L12.3934 16.0212C12.5663 12.3935 15.9049 9.5 19.9981 9.5Z" stroke="currentColor" stroke-width="2"></path></svg>
            </a>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.leftSideNav {
    width: 50px;
    height: 100%;
    position: fixed;
    top:0;
    left:0;

    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 10px 0px;
}

.navgationContent {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
}

.leftSideNav > .navgationContent > a {
    display: block;
    width:30px;
    height:30px;
}

svg {
    width: 100%;
    height: 100%;

    fill: none;
}
</style>