<template>
  <component @nextStep="handleNextStep" :is="currentStepComponent" />
</template>

<script setup>
import { ref, computed } from 'vue'

// Import the components used for different steps.
import HelpCenter from './help-center/HelpCenter.vue'
import HelpParentListing from './help-parent-listing/HelpParentListing.vue'
import HelpChildListing from './help-child-listing/HelpChildListing.vue'

// Initialize the step ref with a starting value.
const step = ref(0)

// Define a computed property that returns the component for the current step.
const currentStepComponent = computed(() => {
  // Use a switch statement to determine which component to render based on the value of step.
  switch (step.value) {
    case 1:
      return HelpParentListing
    case 2:
      return HelpChildListing
    default:
      return HelpCenter
  }
})

// Define the function to handle the next step event.
const handleNextStep = (newStep) => {
  // Update the value of step with the new step provided by the child component.
  step.value = newStep
}
</script>
