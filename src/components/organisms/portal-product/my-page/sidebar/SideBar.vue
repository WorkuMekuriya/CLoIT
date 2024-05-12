<template>
  <div>
    <div class="side-bar flex-col items-end">
      <div
        v-for="(page, index) in pages"
        :key="index"
        @click="navigateToPage(page.to)"
      >
        <component
          class="set-font-size cursor-pointer"
          :active="page.active.value"
          :is="page.icon"
        ></component>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import FlagIcon from '../../../../atoms/Icons/my-page-icons/FlagIcon.vue'
import HelpIcon from '../../../../atoms/Icons/my-page-icons/HelpIcon.vue'
import NoticeIcon from '../../../../atoms/Icons/my-page-icons/NoticeIcon.vue'
import PaymentIcon from '../../../../atoms/Icons/my-page-icons/PaymentIcon.vue'
import PersonOutlinedIcon from '../../../../atoms/Icons/my-page-icons/PersonOutlinedIcon.vue'

const router = useRouter()

const pages = [
  {
    icon: FlagIcon,
    to: 'portal-products-my-page-services',
    active: ref(false),
  },
  {
    icon: PaymentIcon,
    to: 'portal-products-my-page-payment',
    active: ref(false),
  },
  { icon: HelpIcon, to: 'portal-products-my-page-help', active: ref(false) },
  {
    icon: PersonOutlinedIcon,
    to: 'portal-products-my-page-profile',
    active: ref(false),
  },
  {
    icon: NoticeIcon,
    to: 'portal-products-my-page-notice',
    active: ref(false),
  },
]

const navigateToPage = (routeName) => {
  router.push({ name: routeName })
}

const setActiveRoutes = () => {
  const currentRouteName = router.currentRoute.value.name;

  if (currentRouteName === undefined) {
    const firstPage = pages[0];
    router.push({ name: 'portal-products-my-page-services' });
    pages.forEach(page => page.active.value = page === firstPage);
  } else {
    pages.forEach(page => {
      const isActive = currentRouteName === page.to || currentRouteName.startsWith(page.to);
      page.active.value = isActive;
    });
  }
}

onMounted(() => {
  setActiveRoutes()
})
watch(router.currentRoute, () => {
  setActiveRoutes()
})
</script>
<style lang="scss" scoped>
@import 'SideBar.style.scss';
</style>
