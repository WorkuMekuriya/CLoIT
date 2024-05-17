<template>
  <component @nextStep="handleNextStep" :is="currentStepComponent" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
// Import the components used for different steps.
import HelpCenter from './help-center/HelpCenter.vue'
import HelpParentListing from './help-parent-listing/HelpParentListing.vue'
import HelpChildListing from './help-child-listing/HelpChildListing.vue'

const $q = useQuasar()

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

// Loading
$q.loading.show({
  delay: 0, // Optional: specify delay in milliseconds
  message: 'Loading',
})
setTimeout(() => {
  // Hide loading
  $q.loading.hide()
}, 1000)

$q.notify('Notiftication')
// or with a config object:

// Define the function to handle the next step event.
const handleNextStep = (newStep) => {
  // Update the value of step with the new step provided by the child component.
  step.value = newStep
}
</script>
