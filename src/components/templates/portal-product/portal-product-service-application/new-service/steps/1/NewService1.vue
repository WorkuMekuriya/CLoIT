<template>
  <div class="new-service-1">
    <p class="heading-3 text-center header-text">Terms & Conditions</p>
    <div class="flex justify-center">
      <TermsAndConditions />
    </div>
    <div class="flex justify-center button-container">
      <StandardButton
        @click="movetoStep2(2)"
        type="ArcticBlue"
        :outlined="true"
        label="Next : Select Service"
        buttonWidth="288px"
        leftIcon="panorama_fish_eye"
        rightIcon="panorama_fish_eye"
        arrowDirection="Right"
      />
    </div>
  </div>
</template>
<script setup>
import TermsAndConditions from '../../../../../../organisms/portal-product/portal-product-service-application/new-service/terms-and-conditions/TermsAndConditions.vue'
import StandardButton from '../../../../../../molecules/buttons/standard-buttons/StandardButtons.vue'

const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const movetoStep2 = (step) => {
  emits('nextStep', step)
}
</script>
<style lang="scss" scoped>
@import 'NewService1.style.scss';
</style>
