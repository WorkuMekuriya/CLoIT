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
      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Email'"
          :placeholder="'Email'"
          :bottomLeftDescription="''"
        />
      </div>

      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Email Verification Code'"
          :placeholder="'Email Verification Code'"
          :bottomLeftDescription="''"
        />
      </div>

      <div class="verification-code-label">Verification Code</div>
      <div class="verification-code-container">
        <q-input
          borderless
          placeholder="Verification Code"
          class="verification-code-input"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 4.00154V10.0015M23 10.0015H17M23 10.0015L18.36 5.64154C17.2853 4.56625 15.9556 3.78075 14.4952 3.35831C13.0348 2.93588 11.4911 2.89029 10.0083 3.2258C8.52547 3.56131 7.1518 4.26697 6.01547 5.27696C4.87913 6.28694 4.01717 7.56833 3.51 9.00154M1 20.0015V14.0015M1 14.0015H7M1 14.0015L5.64 18.3615C6.71475 19.4368 8.04437 20.2223 9.50481 20.6448C10.9652 21.0672 12.5089 21.1128 13.9917 20.7773C15.4745 20.4418 16.8482 19.7361 17.9845 18.7261C19.1209 17.7161 19.9828 16.4348 20.49 15.0015"
            stroke="#101828"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="verification-code-text">
          <ResetPasswordPlaceholder />
        </div>
      </div>
    </div>
    <div class="button-container">
      <RoundedButton
        type="Primary"
        :isLoading="false"
        :label="'Reset password'"
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
import DialogComponent from 'src/components/molecules/dialog/DialogComponent.vue'
import ConfirmMessage from './confirm-message/ConfirmMessage.vue'
import ResetPasswordIcon from 'src/components/atoms/Icons/my-page-icons/ResetPasswordIcon.vue'
import ResetPasswordPlaceholder from 'src/components/atoms/Icons/my-page-icons/ResetPasswordPlaceholder.vue'

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
