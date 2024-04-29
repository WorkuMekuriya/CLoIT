<template>
  <q-header class="service-application-header flex items-center">
    <p class="Logo label-lg-bold">LOGO</p>
    <q-space />
    <StandardButton :type="ctaButton.type" :label="ctaButton.label" :outlined="ctaButton.outlined"  buttonWidth="200px" />
    <q-icon name=""></q-icon>
  </q-header>
</template>
<script setup>
import StandardButton from '../../../../molecules/buttons/standard-buttons/StandardButtons.vue'

const props = defineProps({

ctaButton: {
  type: Object,
  default: () => ({
    type: 'BlueGray',
    label: 'Ihanh@cloit.com',
    outlined: true
  })
}
})
</script>
<style lang="scss" scoped>
@import 'Header.style.scss';
</style>
