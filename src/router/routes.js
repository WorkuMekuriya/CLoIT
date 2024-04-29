// Layouts
import ShowcaseLayout from 'layouts/ShowcaseLayout.vue'
import PortalProductServiceLayout from 'layouts/PortalProductServiceLayout.vue'
import ProductPortalMyPage from 'layouts/ProductPortalMyPage.vue'

import ElementsShowcase from 'pages/ElementsShowcase.vue'

//PortalProductServiceApplication
import PortalProductServiceApplicationIndex from 'pages/portal-product/product-portal-service-application/IndexPage.vue'
import PortalProductServiceApplicationNewService from 'pages/portal-product/product-portal-service-application/NewService.vue'

// PortalProductServiceApplication
import PortalProductMyPage from 'pages/portal-product/my-page/MyPage.vue'

// sub pages(Templates)
import PortalProdctMyPageHelp from 'components/templates/portal-product/my-page/mypage-help/MyPageHelp.vue'
import PortalProductMyPageNotice from 'components/templates/portal-product/my-page/mypage-notice/MyPageNotice.vue'
import PortalProductMyPagePayment from 'components/templates/portal-product/my-page/mypage-payment/MyPagePayment.vue'

import PortalProductMyPageServices from 'components/templates/portal-product/my-page/mypage-services/MyPageServices.vue'
import PortalProductMyPageServiceActive from 'components/templates/portal-product/my-page/mypage-services/services-active/ServiceActive.vue'
import PortalProductMyPageServicesInactive from 'components/templates/portal-product/my-page/mypage-services/services-inactive/ServiceInactive.vue'
import PortalProductMyPageServicePending from 'components/templates/portal-product/my-page/mypage-services/services-pending/ServicePending.vue'
import PortalProductMyPageServiceInactiveFull from 'components/templates/portal-product/my-page/mypage-services/services-inactive-full/ServiceInactiveFull.vue'
import PortalProductMyPageProfile from 'components/templates/portal-product/my-page/mypage-profile/MyPageProfile.vue'

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
    component: PortalProductServiceLayout,
    children: [
      {
        path: '',
        component: PortalProductServiceApplicationIndex,
      },
    ],
  },
  {
    path: '/portal-products/new-service',
    component: PortalProductServiceLayout,
    children: [
      {
        path: '',
        component: PortalProductServiceApplicationNewService,
      },
    ],
  },
  {
    path: '/portal-products/my-page',
    component: PortalProductMyPage,
    children: [
      {
        name: 'portal-products-my-page-help',
        path: 'help',
        component: PortalProdctMyPageHelp,
      },
      {
        name: 'portal-products-my-page-notice',
        path: 'notice',
        component: PortalProductMyPageNotice,
      },
      {
        name: 'portal-products-my-page-payment',
        path: 'payment',
        component: PortalProductMyPagePayment,
      },
      {
        name: 'service-main',
        path: 'services',
        children: [
          {
            path: '',
            name: 'portal-products-my-page-services',
            component: PortalProductMyPageServices,
          },
          {
            name: 'portal-products-my-page-services-active',
            path: 'active',
            component: PortalProductMyPageServiceActive,
          },
          {
            name: 'portal-products-my-page-services-inactive',
            path: 'inactive',
            component: PortalProductMyPageServicesInactive,
          },
          {
            name: 'portal-products-my-page-services-pending',
            path: 'pending',
            component: PortalProductMyPageServicePending,
          },
          {
            name: 'portal-products-my-page-services-inactive-full',
            path: 'inactive-full',
            component: PortalProductMyPageServiceInactiveFull,
          },
        ],
      },
      {
        name: 'portal-products-my-page-profile',
        path: 'profile',
        component: PortalProductMyPageProfile,
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
