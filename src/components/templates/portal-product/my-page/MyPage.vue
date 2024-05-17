<template>
  <div>
    <HeaderBar />
    <div class="page-container">
      <SideBar class="aside" />
      <div class="content">
        <router-view />
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from '../../../organisms/portal-product/my-page/header/HeaderBar.vue'
import FooterBar from '../../../organisms/portal-product/footer/FooterBar.vue'
import SideBar from '../../../organisms/portal-product/my-page/sidebar/SideBar.vue'
</script>

<style lang="scss" scoped>
@import 'MyPage.style.scss';
</style>
