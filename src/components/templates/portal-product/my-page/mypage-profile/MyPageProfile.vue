<template>
    <component @nextStep="handleNextStep" :is="currentStepComponent" />
</template>

<script setup>
import { ref, computed } from 'vue';

// Import the components used for different steps.
import ProfileDetail from './profile-detail/ProfileDetail.vue';
import EditProfile from './edit-profile/EditProfile.vue';
import EditOrganization from './edit-organization/EditOrganization.vue';
import ResetPassword from './reset-password/ResetPassword.vue';
import InquiryHistory from './inquiry-history/InquiryHistory.vue';

// Initialize the step ref with a starting value.
const step = ref(0);

// Define a computed property that returns the component for the current step.
const currentStepComponent = computed(() => {
    // Use a switch statement to determine which component to render based on the value of step.
    switch (step.value) {
        case 1:
            return EditProfile;
        case 2:
            return EditOrganization;
        case 3:
            return ResetPassword;
        case 4:
            return InquiryHistory;
        default:
            return ProfileDetail;
    }
});

// Define the function to handle the next step event.
const handleNextStep = (newStep) => {
    // Update the value of step with the new step provided by the child component.
    step.value = newStep;
};
</script>
