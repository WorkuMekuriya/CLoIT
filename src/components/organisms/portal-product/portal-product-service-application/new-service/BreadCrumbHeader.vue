<template>
  <div class="bread-crumb-header flex items-center">
    <BreadCrumb :step="step" />
    <q-space />
    <q-icon class="close-icon" name="close" />
  </div>
</template>
<script setup>
import BreadCrumb from 'components/molecules/bread-crumb-header/BreadCrumbHeader.vue'
const props = defineProps({
  step: {
    type: Number,
    default: 1,
  },
})
</script>
<style lang="scss" scoped>
@import 'BreadCrumbHeader.style.scss';
</style>
