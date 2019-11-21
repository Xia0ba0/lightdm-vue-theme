import Vue from 'vue'
import Vuex, { Store } from 'vuex'


Vue.use(Vuex)

export default new Store({
    state:{
        currentUser: lightdm.users[1],
        ifShowLogin: false
    },
    mutations:{
        changeUser(state, user){
            state.currentUser = user
        },
        changeIfShow(state, value){
            state.ifShowLogin = value
        }
    }
})