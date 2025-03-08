import {createStore} from 'vuex'

export default createStore({
    state : {
        user: null,
        isLoggedIn: false,
        
    },
    mutations: {
        setUser(state, user){
            state.user = user;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
        }
    },
    actions:{
        async login({commit}, user){
            try {
                commit('setUser', user);
            }catch(error){
                console.log('로그인 실패');
            }
        },
        logout({commit}){
            commit('logout');
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
})