import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './items.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
