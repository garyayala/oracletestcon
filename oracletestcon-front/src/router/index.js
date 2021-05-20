import Vue from 'vue'
import Router from 'vue-router'
import PolizaSearch from '@/components/PolizaSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PolizaSearch',
      component: PolizaSearch
    }
  ]
})
