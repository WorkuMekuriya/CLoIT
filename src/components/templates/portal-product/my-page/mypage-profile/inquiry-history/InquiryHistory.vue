<template>
  <component @nextInquiry="handleNextInquiry" :is="currentStepComponent" />
</template>

<script setup>
import { ref, computed } from 'vue'

// Import the components used for different steps.
import Inquiry from './inquiry/Inquiry.vue'
import NewInquiry from './new-inquiry/NewInquiry.vue'
import InquiryDetail from './inquiry-detail/InquiryDetail.vue'

// Initialize the inquiry ref with a starting value.
const inquiry = ref(0)

// Define a computed property that returns the component for the current step.
const currentStepComponent = computed(() => {
  switch (inquiry.value) {
    case 0:
      return Inquiry
    case 1:
      return NewInquiry
    case 2:
      return InquiryDetail
    default:
      return Inquiry // This line is added to handle unexpected inquiry values.
  }
})

// Define the function to handle the next step event.
const handleNextInquiry = (newInquiry) => {
  inquiry.value = newInquiry
}
</script>
