<template>
  <q-layout view="lhr lpr lfr">
    <HeaderBar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterBar />
  </q-layout>
</template>
<script setup>
import HeaderBar from '../../../../organisms/portal-product/portal-product-service-application/index/header/HeaderBar.vue'
import FooterBar from '../../../../organisms/portal-product/portal-product-service-application/index/footer/FooterBar.vue';
</script>
