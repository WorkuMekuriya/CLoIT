<template>
  <div class="new-service-1">
    <p class="heading text-center header-text">Terms & Conditions</p>
    <div class="flex justify-center">
      <TermsAndConditions @setAllSelected="setAllSelected" />
    </div>
    <div class="flex justify-center button-container">
      <StandardButton
        @click="moveToStep2(2)"
        type="ArcticBlue"
        :outlined="true"
        :label="'Next : Select Service'"
        buttonWidth="288px"
        :disable="!isNextButtonDisabled"
        leftIcon="panorama_fish_eye"
        rightIcon="panorama_fish_eye"
        arrowDirection="Right"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import TermsAndConditions from '../../../../../../organisms/portal-product/portal-product-service-application/new-service/terms-and-conditions/TermsAndConditions.vue'
import StandardButton from '../../../../../../molecules/buttons/standard-buttons/StandardButtons.vue'

const disableNextButton = ref(false)

// Update disableNextButton when allSelected value changes
const setAllSelected = (value) => {
  disableNextButton.value = value
}

const isNextButtonDisabled = computed(() => {
  console.log(disableNextButton.value)
  return disableNextButton.value
})

const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const moveToStep2 = (step) => {
  emits('nextStep', step)
}
</script>
<style lang="scss" scoped>
@import 'NewService1.style.scss';
</style>
