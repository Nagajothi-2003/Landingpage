
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/rough',
    component: () => import('layouts/SecondLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Rough.vue') }
    ]
  },
  {
    path: '/new',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Newfile.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/rough',
  //   component: () => import('pages/Rough.vue')
  // },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
