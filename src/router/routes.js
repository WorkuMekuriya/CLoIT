const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: '/',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'signup',
        name: '/signup',
        component: () => import('components/templates/auth/sign-up/SignUp.vue'),
      },
      {
        path: 'reset-password',
        name: '/reset-password',
        component: () =>
          import('components/templates/auth/reset-password/ResetPassword.vue'),
      },
      {
        path: 'account-verification',
        name: '/account-verification',
        component: () =>
          import(
            'components/templates/auth/account-verification/AccountVerification.vue'
          ),
      },
    ],
  },
  {
    path: '/showcase',
    name: '/showcase',
    component: () => import('layouts/ShowcaseLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ElementsShowcase.vue'),
      },
    ],
  },
  {
    path: '/portal-products/service-application',
    component: () => import('layouts/PortalProductServiceLayout.vue'),
    children: [
      {
        path: '',
        component: () =>
          import(
            'pages/portal-product/product-portal-service-application/IndexPage.vue'
          ),
      },
    ],
  },
  {
    path: '/portal-products/new-service',
    component: () => import('layouts/PortalProductServiceLayout.vue'),
    children: [
      {
        path: '',
        component: () =>
          import(
            'pages/portal-product/product-portal-service-application/NewService.vue'
          ),
      },
      {
        path: 'payment-full-done',
        component: () =>
          import(
            'pages/portal-product/product-portal-service-application/NewServicePaymentFullDone.vue'
          ),
      },
      {
        path: 'payment-installments-done',
        component: () =>
          import(
            'pages/portal-product/product-portal-service-application/NewServicePaymentInstallmentsDone.vue'
          ),
      },
    ],
  },
  {
    path: '/portal-products/add-service',
    component: () => import('layouts/PortalProductServiceLayout.vue'),
    children: [
      {
        path: '',
        component: () =>
          import(
            'pages/portal-product/product-portal-service-application/AddService.vue'
          ),
      },
      {
        name: 'payment-full-done',
        path: '/portal-products/add-service/payment-full-done',
        component: () =>
          import(
            'pages/portal-product/product-portal-service-application/AddServicePaymentFullDone.vue'
          ),
      },
    ],
  },
  {
    path: '/portal-products/my-page',
    component: () => import('pages/portal-product/my-page/MyPage.vue'),
    children: [
      {
        name: 'portal-products-my-page-help',
        path: 'help',
        component: () =>
          import(
            'components/templates/portal-product/my-page/mypage-help/MyPageHelp.vue'
          ),
      },
      {
        name: 'notice-main',
        path: 'notice',
        children: [
          {
            name: 'portal-products-my-page-notice',
            path: '',
            component: () =>
              import(
                'components/templates/portal-product/my-page/mypage-notice/MyPageNotice.vue'
              ),
          },
          {
            name: 'portal-products-my-page-notice-detail',
            path: 'detail',
            component: () =>
              import(
                'components/templates/portal-product/my-page/mypage-notice/notice-detail/NoticeDetail.vue'
              ),
          },
        ],
      },
      {
        name: 'portal-products-my-page-payment',
        path: 'payment',
        component: () =>
          import(
            'components/templates/portal-product/my-page/mypage-payment/MyPagePayment.vue'
          ),
      },
      {
        name: 'service-main',
        path: 'services',
        children: [
          {
            path: '',
            name: 'portal-products-my-page-services',
            component: () =>
              import(
                'components/templates/portal-product/my-page/mypage-services/MyPageServices.vue'
              ),
          },
          {
            name: 'portal-products-my-page-services-active',
            path: 'active',
            component: () =>
              import(
                'components/templates/portal-product/my-page/mypage-services/services-active/ServiceActive.vue'
              ),
          },
          {
            name: 'portal-products-my-page-services-inactive',
            path: 'inactive',
            component: () =>
              import(
                'components/templates/portal-product/my-page/mypage-services/services-inactive/ServiceInactive.vue'
              ),
          },
          {
            name: 'portal-products-my-page-services-pending',
            path: 'pending',
            component: () =>
              import(
                'components/templates/portal-product/my-page/mypage-services/services-pending/ServicePending.vue'
              ),
          },
          {
            name: 'portal-products-my-page-services-inactive-full',
            path: 'inactive-full',
            component: () =>
              import(
                'components/templates/portal-product/my-page/mypage-services/services-inactive-full/ServiceInactiveFull.vue'
              ),
          },
        ],
      },
      {
        name: 'portal-products-my-page-profile',
        path: 'profile',
        component: () =>
          import(
            'components/templates/portal-product/my-page/mypage-profile/MyPageProfile.vue'
          ),
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
