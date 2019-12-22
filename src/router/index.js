import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Daybooks from '@/components/Daybooks'
import Categories from '@/components/Categories'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/daybooks',
      name: 'Daybooks',
      component: Daybooks
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    }
  ]
})
