import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/info/:action',
      name: 'info',
      component: info,
    }

    // {
    //   path: '/result/:action',
    //   name: 'result',
    //   component: result
    // }
  ]
})
