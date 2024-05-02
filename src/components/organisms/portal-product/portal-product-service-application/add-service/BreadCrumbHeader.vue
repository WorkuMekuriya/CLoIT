<template>
  <div class="bread-crumb-header flex items-center">
    <BreadCrumb :step="step" :components="components" />
    <q-space />
    <q-icon class="close-icon" name="close" />
  </div>
</template>
<script setup>
import BreadCrumb from '../../../../molecules/bread-crumb/BreadCrumb.vue'
const components = [
  { label: '추가할 서비스 선택', name: '', icon: 'chevron_right' },
  { label: 'Select Options', name: '', icon: 'chevron_right' },
  { label: '결제정보 확인', name: '', icon: 'chevron_right' },
]
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
