import Vue from 'vue'
import Router from 'vue-router'
import Greeter from '@/components/Greeter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Greeter',
      component: Greeter
    }
  ]
})
