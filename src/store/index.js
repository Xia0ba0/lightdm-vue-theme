import Vue from 'vue'
import Vuex, { Store } from 'vuex'


Vue.use(Vuex)

export default new Store({
    state:{
        currentUser: lightdm.users[0]
    },
    mutations:{
        changeUser(state, user){
            state.currentUser = user
        }
    }
})