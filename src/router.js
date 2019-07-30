import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import News from './components/News.vue'
import Tools from './components/Tools.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    }
  ]
})
