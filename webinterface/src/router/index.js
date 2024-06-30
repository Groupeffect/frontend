import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/'+ process.env.BASE_URL_PREFIX,
    name: 'Layout',
    component: () => import(/* webpackChunkName: "DefaultLayout" */ '/src/layouts/DefaultLayout.vue'),

    children: [
          {
            path: '',
            name: 'LandingPage',
            component: () => import(/* webpackChunkName: "LandingPage" */ '/src/components/interface/LandingPage.vue')
          },
          {
            path: 'about',
            name: 'AboutPage',
            component: () => import(/* webpackChunkName: "AboutPage" */ '/src/components/interface/AboutPage.vue')
          },
          {
            path: 'service',
            name: 'ServicePage',
            component: () => import(/* webpackChunkName: "ServicePage" */ '/src/components/interface/ServicePage.vue')
          },
          {
            path: 'contact',
            name: 'ContactPage',
            component: () => import(/* webpackChunkName: "ContactPage" */ '/src/components/interface/ContactPage.vue')
          },
          {
            path: 'user',
            name: 'LoggingPage',
            component: () => import(/* webpackChunkName: "LoggingPage" */ '/src/components/interface/LoggingPage.vue')
          }
        ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
