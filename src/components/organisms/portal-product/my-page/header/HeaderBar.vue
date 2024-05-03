<template>
  <q-header class="service-application-header flex items-center">
    <p class="Logo label-lg-bold">LOGO</p>
    <q-space />
    <q-icon
      class="notification-icon nav-icons"
      name="notifications_none"
    ></q-icon>
    <DropDown
      class="dropdown-icon"
      iconLeft="language"
      maxWidth="133px"
      height="52px"
      label="DropDown"
      :options="options"
    />
    <StandardButton
      :type="ctaButton.type"
      :label="ctaButton.label"
      :outlined="ctaButton.outlined"
      buttonWidth="200px"
      class="standard-button"
    />
    <q-icon class="logout-icon nav-icons" name="logout"></q-icon>
  </q-header>
</template>
<script setup>
import StandardButton from '../../../../molecules/buttons/standard-buttons/StandardButtons.vue'
import DropDown from '../../../../molecules/form-components/drop-down/DropDown.vue'
const props = defineProps({
  ctaButton: {
    type: Object,
    default: () => ({
      type: 'BlueGray',
      label: 'Ihanh@cloit.com',
      outlined: true,
    }),
  },
})
const options = [
  {
    label: 'En',
    value: 'en',
  },
  {
    label: 'Kr',
    value: 'korean',
  },
]
</script>
<style lang="scss" scoped>
@import 'Header.style.scss';
</style>
