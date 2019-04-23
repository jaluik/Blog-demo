import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'show-blog',
      component: ShowBlog
    },
    {
      path: '/add',
      name: 'add-blog',
      component: AddBlog
    }
  ]
})
