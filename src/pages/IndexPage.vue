<template>
  <q-page>
    <component @nextStep="handleNextStep" :is="getStepComponent" />
  </q-page>
</template>
<script setup>
import SignIn from 'components/templates/auth/sign-in/SignIn.vue'
import SignUp from 'components/templates/auth/sign-up/SignUp.vue'
import ResetPassword from 'components/templates/auth/reset-password/ResetPassword.vue'
import { computed, ref } from 'vue'
import AccountVerification from 'components/templates/auth/account-verification/AccountVerification.vue'
const step = ref(1)

const getStepComponent = computed(() => {
  if (step.value === 1) return SignIn
  else if (step.value === 2) return SignUp
  else if (step.value === 3) return ResetPassword
  else if (step.value === 4) return AccountVerification
  return SignUp
})
const handleNextStep = (index) => {
  step.value = index
}
</script>
