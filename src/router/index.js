import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Cinema from '@/views/Cinema'
import Movie from '@/views/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/Cinema',
    	name:'Cinema',
    	component:Cinema
    },{
    	path:'/me',
    	name:'Movie',
    	component:Movie
    }
  ]
})
