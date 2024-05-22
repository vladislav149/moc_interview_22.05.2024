import type { RouteRecordRaw } from 'vue-router'

const views = {
  home: () => import('@/views/HomeView.vue'),
  watchView: () => import('@/views/WatchView.vue'),
  watchEffectView: () => import('@/views/WatchEffectView.vue'),
  finallyView: () => import('@/views/FinallyView.vue')
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: views.home
  },
  {
    path: '/watchView',
    name: 'watchView',
    component: views.watchView
  },
  {
    path: '/watchEffectView',
    name: 'watchEffectView',
    component: views.watchEffectView
  },
  {
    path: '/finallyView',
    name: 'finallyView',
    component: views.finallyView
  }
]

export default routes
