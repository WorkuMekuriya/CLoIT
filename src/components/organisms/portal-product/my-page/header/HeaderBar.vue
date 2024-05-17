<template>
  <q-header
    class="service-application-header flex items-center justify-between"
  >
    <p class="Logo label-lg-bold">LOGO</p>
    <div class="flex no-wrap">
      <q-icon
        class="notification-icon nav-icons"
        name="notifications_none"
      ></q-icon>
      <DropDown
        class="dropdown-icon"
        iconLeft="language"
        height="52px"
        maxWidth="133px"
        :label="'DropDown'"
        :options="options"
      />
      <StandardButton
        :type="ctaButton.type"
        :label="ctaButton.label"
        :outlined="ctaButton.outlined"
        arrowDirection="Right"
        buttonWidth="198px"
        class="standard-button"
      />
      <q-icon class="logout-icon nav-icons" name="logout"></q-icon>
      <q-icon class="menu-icon nav-icons" name="more_vert"></q-icon>
    </div>
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
