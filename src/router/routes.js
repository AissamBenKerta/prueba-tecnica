import Home from '../pages/Home.vue'
const routes = [
  {
    path: '/',
    name:'Home',
    component: Home,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
