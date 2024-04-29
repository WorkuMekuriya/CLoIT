<template>
  <div>
    <HeaderBar />
    <div class="row page-container">
      <div class="col-1 side-bar">
        <div v-for="(page, index) in pages" :key="index" @click="navigateToPage(page.to)">
          <component class="set-font-size" :is="page.icon"></component>
        </div>
      </div>
      <div class="col-11" >
        <router-view />
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeaderBar from '../../../organisms/portal-product/my-page/header/HeaderBar.vue'
import FooterBar from '../../../organisms/portal-product/footer/FooterBar.vue'
import FlagIcon from '../../../atoms/Icons/my-page-icons/FlagIcon.vue'
import HelpIcon from '../../../atoms/Icons/my-page-icons/HelpIcon.vue'
import NoticeIcon from '../../../atoms/Icons/my-page-icons/NoticeIcon.vue'
import PaymentIcon from '../../../atoms/Icons/my-page-icons/PaymentIcon.vue'
import PersonIcon from '../../../atoms/Icons/PersonIcon.vue'

const router = useRouter()

const pages = [
  { icon: FlagIcon, to: 'portal-products-my-page-services' , active: ''},
  { icon: PaymentIcon, to: 'portal-products-my-page-payment', active: '' },
  { icon: HelpIcon, to: 'portal-products-my-page-help',active: '' },
  { icon: PersonIcon, to: 'portal-products-my-page-profile', active: '' },
  { icon: NoticeIcon, to: 'portal-products-my-page-notice', active: '' },
]

const navigateToPage = (routeName) => {
  router.push({ name: routeName })
}
</script>

<style lang="scss" scoped>
@import 'MyPage.style.scss';
</style>
