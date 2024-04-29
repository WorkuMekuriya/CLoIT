<template>
  <q-layout view="lhr lpr lfr">
    <HeaderBar />
    <q-page-container>
      <Landing />
    </q-page-container>
    <FooterBar />
  </q-layout>
</template>
<script setup>
import HeaderBar from '../../../../organisms/portal-product/portal-product-service-application/index/header/HeaderBar.vue'
import FooterBar from '../../../../organisms/portal-product/footer/FooterBar.vue';
import Landing from '../../../../organisms/portal-product/portal-product-service-application/index/landing/LandingContent.vue';
</script>
<style lang="scss" scoped>
@import 'IndexTemplate.style.scss'
</style>
