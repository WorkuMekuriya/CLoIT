<template>
  <div class="bread-crumb-header flex no-wrap items-center">
    <BreadCrumb :step="step" />
    <q-space />
    <CircularButton
      type="TertiaryTonal"
      icon="close"
      @click="$router.push({ name: 'portal-products-my-page-services' })"
    />
  </div>
</template>
<script setup>
import BreadCrumb from 'components/molecules/bread-crumb-header/BreadCrumbHeader.vue'
import CircularButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyledCircularButton.vue'
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
