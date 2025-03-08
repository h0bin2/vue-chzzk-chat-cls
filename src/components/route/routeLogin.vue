<template>
    <div class="routeLogin">
        <input type='email' v-model='user.email'>
        <input type='password' v-model='user.password'>
        <button @click='login()'>로그인</button>
    </div>
</template>
<script>

export default {
    name:'routeLogin',
    components:{
        
    },
    data(){
        return {
            'user':{
                'email':'',
                'password':''
            },
            'token':''
        }
    },
    methods:{
        async login() {
            try{
                if((this.user.email == '') || (this.user.password == '')){
                    alert('아이디/비밀번호를 입력해주세요.');
                    return;
                }

               const response = await fetch('http://localhost:8000/user/login',{
                    credentials: 'include',
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(this.user)
                })
                if(!response.ok){
                    alert('로그인 실패');
                    return
                }
            } catch {
                alert('로그인을 실패했습니다. 담당자에게 문의');
            }

            this.$router.push('/');
            
        }
    }
}
</script>
<style scoped>
.routeLogin {
    padding-top: 60px;
    min-height: calc(100vh - 60px);
}


</style>