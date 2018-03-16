import Vue from 'vue'
import Router from 'vue-router'
import ZombieTeam from '@/components/ZombieTeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ZombieTeam',
      component: ZombieTeam
    }
  ]
})
