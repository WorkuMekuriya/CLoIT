<template>
  <q-header class="service-application-header flex items-center">
    <p class="Logo label-lg-bold">LOGO</p>
    <q-space />
    <ConditionalStyleRoundedButton
      v-for="(navigationList, index) in middleNavigationList"
      :key="index"
      :width="navigationList.width"
      :label="navigationList.label"
      :type="navigationList.type"
    />
    <q-space />
    <StandardButton :type="ctaButton.type" :label="ctaButton.label" :outlined="ctaButton.outlined" />
  </q-header>
</template>
<script setup>
import StandardButton from '../../../../../molecules/buttons/standard-buttons/StandardButtons.vue'
import ConditionalStyleRoundedButton from '../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'

const props = defineProps({
  middleNavigationList: {
    type: Array,
    default: () => [
      { label: 'Products', width: '147px', type: 'TertiaryTonal' },
      { label: 'Introduction', width: '125px', type: 'Secondary' },
      { label: '도입문의', width: '125px', type: 'TertiaryTonal' },
      { label: 'Help Center', width: '143px', type: 'TertiaryTonal' },
      { label: 'About Cloit', width: '140px', type: 'TertiaryTonal' },
    ],
  },
ctaButton: {
  type: Object,
  default: () => ({
    type: 'BlueGray',
    label: '서비스신청',
    outlined: true
  })
}
})
</script>
<style lang="scss" scoped>
@import 'Header.style.scss';
</style>
