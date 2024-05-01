<template>
  <div class="container">
    <HeaderBar
      :showMiddleNavigation="false"
      :ctaButton="{ label: 'My Page', outlined: true, type: 'BlueGray' }"
    />
    <div class="flex justify-center">
      <PaymentDone type="Installments" serviceApplication="2024/04/05" />
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import PaymentDone from '../../../../../organisms/portal-product/portal-product-service-application/new-service/payment-done/PaymentDone.vue'
import HeaderBar from '../../../../../organisms/portal-product/portal-product-service-application/index/header/HeaderBar.vue'
import FooterBar from '../../../../..//organisms/portal-product/footer/FooterBar.vue'
</script>

<style lang="scss" scoped>
@import 'NewServiceInstallmentsDone.style.scss';
</style>
