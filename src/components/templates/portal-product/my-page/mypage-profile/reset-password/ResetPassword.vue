<template>
  <div>
    <div style="display: flex">
      <div style="color: gray; text-decoration: underline">My Profile</div>
      <div style="padding-left: 5px">〉</div>
      <span style="color: black; text-decoration: none !important"
        >Reset Password</span
      >
    </div>
    <div class="header-title">Resetpassword</div>
    <div class="form-container">
      <div
        v-for="(field, index) in resetPasswordForm"
        :key="index"
        class="grid-item"
      >
        <TextField
          class="textfield"
          :label="field.label"
          :placeholder="field.placeholder || field.label"
          :bottomLeftDescription="field.description"
        />
      </div>
      <div class="verification-code-label">Verification Code</div>
      <div class="verification-code-container">
        <q-input
          borderless
          placeholder="Verification Code"
          class="verification-code-input"
        />
        <q-icon name="cached" size="24px" class="verification-code-icon" />
        <div class="verification-code-text">4986</div>
      </div>
    </div>
    <div class="button-container">
      <RoundedButton
        type="Primary"
        :isLoading="false"
        label="Reset password"
        leftIcon=""
        :rightIcon="false"
        buttonWidth="186px"
        @click="resetPassword"
      />
    </div>
    <DialogComponent />
  </div>
</template>

<script setup>
import { useDialogStore } from 'src/stores/dialog-store.js'
import { markRaw } from 'vue'
import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue'
import DialogComponent from '../../../../../molecules/dialog/DialogComponent.vue'
import ConfirmMessage from './confirm-message/ConfirmMessage.vue'
import ResetPasswordIcon from '../../../../../atoms/Icons/my-page-icons/ResetPasswordIcon.vue'

const resetPasswordForm = [
  { label: 'Email', description: '' },
  { label: 'Email Verification Code', description: '' },
]

const emits = defineEmits(['nextStep'])

const backStep = () => {
  emits('nextStep', 0)
}

// Dialog Component
const dialogStore = useDialogStore()
const innerComponent = markRaw(ConfirmMessage)
const leftIcon = markRaw(ResetPasswordIcon)

const resetPassword = () => {
  // Pass DialogComponent properties to store
  dialogStore.setInnerComponent(innerComponent)
  dialogStore.setDialogWidth('400px')
  dialogStore.setDialogHeight('438px')
  dialogStore.setLeftIconComponent(leftIcon)

  dialogStore.openDialog()
}
</script>

<style lang="scss" scoped>
@import 'ResetPassword.style.scss';
</style>
