<template>
  <AuthHeader />
  <div class="auth flex flex-center">
    <div class="signup-container">
      <div class="signup-header">Sign Up</div>
      <div class="form-container">
        <TextField
          label="Email"
          placeholder="Email"
          :error="error"
          :bottomLeftDescription="error && '이메일 형식이 잘못되었습니다.'"
        />
        <div class="grid-container">
          <div
            v-for="(field, index) in signupForm"
            :key="index"
            class="grid-item"
          >
            <SelectDropdown
              v-if="field.type === 'selectDropdown'"
              :label="field.label"
              :options="field.options"
            />
            <TextField
              v-else
              class="textfield"
              :error="error"
              :bottomLeftDescription="error && field.errorDescription"
              :label="field.label"
              :placeholder="field.placeholder || field.label"
              :iconRight="field.rightIcon"
            />
            <div v-if="index < 2" class="form-container" />
          </div>
        </div>
      </div>

      <div class="footer-buttons flex justify-between">
        <CircularButton
          :type="'TertiaryLined'"
          :isLoading="false"
          :buttonDisabled="false"
          :icon="'west'"
          @clicked="navigateTo('/')"
        />
        <StandardButton
          :type="'Primary'"
          :outlined="false"
          :label="'Sign up'"
          :leftIcon="''"
          :rightIcon="'home'"
          :button-width="'689px'"
          @click="showValidation"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { markRaw, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDialogStore } from 'stores/dialog-store'
import AuthHeader from 'components/organisms/auth-header/AuthHeader.vue'
import TextField from 'components/molecules/form-components/fields/textfield/TextField.vue'
import StandardButton from 'components/molecules/buttons/standard-buttons/StandardButtons.vue'
import CircularButton from 'components/molecules/buttons/conditionally-styled-buttons/ConditionalStyledCircularButton.vue'
import SelectDropdown from 'components/molecules/form-components/select-dropdown/SelectDropdown.vue'
import ConfirmMessage from '../confirm-message/ConfirmMessage.vue'
import ResetPasswordIcon from 'components/atoms/Icons/my-page-icons/ResetPasswordIcon.vue'

const router = useRouter()
const navigateTo = (routeName) => {
  router.push({ name: routeName })
}

const signupForm = [
  {
    label: 'Password',
    placeholder: 'Password',
    errorDescription:
      'At least 8 digits, including at least 3 of uppercase letters, lowercase letters, numbers, and special letters (~`!@#$%^&amp;*()_-+=?)',
  },
  {
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    errorDescription: 'New password and Confirm password do not match.',
  },
  { label: 'Family Name', placeholder: 'Family Name' },
  {
    label: 'Given Name',
    placeholder: 'Given Name',
    errorDescription: 'This is a required field.',
  },
  { label: 'Phone Number', placeholder: 'Phone Number' },
  {
    name: 'Nationality',
    description: '',
    type: 'selectDropdown',
    options: [
      {
        label: 'South Korean',
        value: 'south_korean',
      },
      {
        label: 'Ethiopian',
        value: 'ethiopian',
      },
      {
        label: 'American',
        value: 'american',
      },
    ],
  },
  { label: 'Department', placeholder: 'Department' },
  { label: 'Organization', placeholder: 'Organization' },
]

const error = ref(false)

const showValidation = () => {
  // Dialog Component
  const dialogStore = useDialogStore()
  const innerComponent = markRaw(ConfirmMessage)
  // const leftIcon = markRaw(ResetPasswordIcon)
  if (error.value) {
    navigateTo('/account-verification')
  } else {
    error.value = true
  }
}
</script>
<style lang="scss" scoped>
@import 'SignUp.style.scss';
</style>
