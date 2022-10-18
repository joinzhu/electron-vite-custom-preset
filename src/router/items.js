import FunLayout from '../layout/FunLayout.vue'

export default [
  {
    path: '/',
    component: FunLayout,
    children: [
      {
        path: '',
        component: () => import('../views/Home/Home.vue'),
      },
    ],
  },
]
