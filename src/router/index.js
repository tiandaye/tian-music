import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
 {
    path: '/',
    name: '/',
    component: resolve => require(['@/components/MusicList/MusicList.vue'], resolve)
  },
  {
    path: '/music-list',
    name: 'MusicList',
    component: resolve => require(['@/components/MusicList/MusicList.vue'], resolve)
  },

  {
    path: '/find',
    name: 'Find',
    component: resolve => require(['@/components/Find/Find.vue'], resolve)
  },
  {
    path: '/social',
    name: 'Social',
    component: resolve => require(['@/components/Social/Social.vue'], resolve)
  },
  {
    path: '/mv-list',
    name: 'MvList',
    component: resolve => require(['@/components/MvList/Index.vue'], resolve)
    //@/pages/Index.vue'
  },
  // {
  //   path: '/', 
  //   component: Index, 
  //   name: 'index', 
  //   meta: {
  //     keepAlive: true
  //   }
  // },
  { 
    path: '/mv/:id', 
    component: resolve => require(['@/pages/MV'], resolve),
    name: 'MV', 
    meta: {
      keepAlive: false
    }
  },
  {
      path: '/mv1/:id',
      name: 'MV1',
      component: resolve => require(['@/components/Mv/Mv'], resolve)
  },
	{
      path: '/hello',
      name: 'Hello',
      component: resolve => require(['@/components/Hello'], resolve)
	}
]

const router = new Router({
  mode: 'hash',//history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  linkActiveClass: 'active',
  routes: routes
})

export default router
