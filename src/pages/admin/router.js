import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/home.vue')
    },
    {
      path: '/:class/:operateType/:id',
      name: 'operate',
      component: () => import('./views/operate.vue')
    }

  ]
})
