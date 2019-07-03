import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Songs from './components/Songs.vue';
import SongDetails from './components/SongDetails.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/songs',
      component: Songs,
      name: 'songs'
    },
    {
      path: '/songs/:id',
      component: SongDetails,
      name: 'song-details'
    }
  ]
})
