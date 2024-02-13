import Home from '../pages/Home.vue'
import AddDog from '../pages/AddDog.vue'
const routes = [
  {
    path: '/',
    name:'Home',
    component: Home,
  },
  {
    path: '/add-dog',
    name: 'addDog',
    component: AddDog,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
