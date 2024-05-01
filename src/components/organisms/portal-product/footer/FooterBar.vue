<template>
  <div class="service-application-footer flex items-center">
    <p class="Logo label-sm-bold">Logo</p>
    <p class="copyright-text label-sm">{{ copyRightText }}</p>
    <q-space />
    <q-icon
      v-for="(icon, index) in footerIconComponentNames"
      :key="index"
      :name="icon"
      class="footer-icon bg-bluegray-200 text-bluegray-900"
    ></q-icon>
  </div>
</template>
<script setup>
const props = defineProps({
  copyRightText: {
    type: String,
    default: 'Copyright Cloit 2024 All rights reserved.',
  },
  footerIconComponentNames: {
    type: Array,
    default: () => ['mail_outline', 'phone'],
  },
})
</script>
<style lang="scss" scoped>
@import 'FooterBar.style.scss';
</style>
