// Layouts
import ShowcaseLayout from 'layouts/ShowcaseLayout.vue'
import PortalProductLayout from 'layouts/PortalProductLayout.vue'

import ElementsShowcase from 'pages/ElementsShowcase.vue'

//PortalProductServiceApplication
import PortalProductServiceApplicationIndex from 'pages/portal-product/product-portal-service-application/IndexPage.vue'
import PortalProductServiceApplicationNewService from 'pages/portal-product/product-portal-service-application/NewService.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/showcase',
    component: ShowcaseLayout,
    children: [
      {
        path: '',
        component: ElementsShowcase,
      },
    ],
  },
  {
    path: '/portal-products/service-application',
    component: PortalProductLayout,
    children: [
      {
        path: '',
        component: PortalProductServiceApplicationIndex,
      },
    ],
  },
    {
    path: '/portal-products/new-service',
    component: PortalProductLayout,
    children: [
      {
        path: '',
        component: PortalProductServiceApplicationNewService,
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
