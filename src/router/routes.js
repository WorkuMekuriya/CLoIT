// Layouts
const ShowcaseLayout = () => import('layouts/ShowcaseLayout.vue');
const PortalProductServiceLayout = () => import('layouts/PortalProductServiceLayout.vue');
const ProductPortalMyPage = () => import('layouts/ProductPortalMyPage.vue');

const ElementsShowcase = () => import('pages/ElementsShowcase.vue');

//PortalProductServiceApplication
const PortalProductServiceApplicationIndex = () => import('pages/portal-product/product-portal-service-application/IndexPage.vue');
const PortalProductServiceApplicationNewService = () => import('pages/portal-product/product-portal-service-application/NewService.vue');
const PortalProductServiceApplicationAddService = () => import('pages/portal-product/product-portal-service-application/AddService.vue');
const PortalProductServiceApplicationNewServicePaymentInstallmentsDone = () => import('pages/portal-product/product-portal-service-application/NewServicePaymentInstallmentsDone.vue');
const PortalProductServiceApplicationNewServicePaymentFullDone = () => import('pages/portal-product/product-portal-service-application/NewServicePaymentFullDone.vue');
const PortalProductServiceApplicationAddServicePaymentFullDone = () => import('pages/portal-product/product-portal-service-application/AddServicePaymentFullDone.vue');

// PortalProductServiceApplication
const PortalProductMyPage = () => import('pages/portal-product/my-page/MyPage.vue');

// sub pages(Templates)
const PortalProdctMyPageHelp = () => import('components/templates/portal-product/my-page/mypage-help/MyPageHelp.vue');
const PortalProductMyPageNotice = () => import('components/templates/portal-product/my-page/mypage-notice/MyPageNotice.vue');
const PortalProductMyPageNoticeDetail = () => import('components/templates/portal-product/my-page/mypage-notice/notice-detail/NoticeDetail.vue');

const PortalProductMyPagePayment = () => import('components/templates/portal-product/my-page/mypage-payment/MyPagePayment.vue');

const PortalProductMyPageServices = () => import('components/templates/portal-product/my-page/mypage-services/MyPageServices.vue');
const PortalProductMyPageServiceActive = () => import('components/templates/portal-product/my-page/mypage-services/services-active/ServiceActive.vue');
const PortalProductMyPageServicesInactive = () => import('components/templates/portal-product/my-page/mypage-services/services-inactive/ServiceInactive.vue');
const PortalProductMyPageServicePending = () => import('components/templates/portal-product/my-page/mypage-services/services-pending/ServicePending.vue');
const PortalProductMyPageServiceInactiveFull = () => import('components/templates/portal-product/my-page/mypage-services/services-inactive-full/ServiceInactiveFull.vue');
const PortalProductMyPageProfile = () => import('components/templates/portal-product/my-page/mypage-profile/MyPageProfile.vue');

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
      {
        path: 'payment-full-done',
        component: PortalProductServiceApplicationNewServicePaymentFullDone,
      },
      {
        path: 'payment-installments-done',
        component: PortalProductServiceApplicationNewServicePaymentInstallmentsDone,
      },
    ],
  },
  {
    path: '/portal-products/add-service',
    component: PortalProductServiceLayout,
    children: [
      {
        path: '',
        component: PortalProductServiceApplicationAddService,
      },
      {
        name: 'payment-full-done',
        path: '/portal-products/add-service/payment-full-done',
        component: PortalProductServiceApplicationAddServicePaymentFullDone,
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
        name: 'notice-main',
        path: 'notice',
        children: [
          {
            name: 'portal-products-my-page-notice',
            path: '',
            component: PortalProductMyPageNotice,
          },
          {
            name: 'portal-products-my-page-notice-detail',
            path: 'detail',
            component: PortalProductMyPageNoticeDetail,
          },
        ],
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
];

export default routes;
