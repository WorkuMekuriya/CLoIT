<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <AuthHeader />
      <div class="app-container">
        <div class="auth flex flex-center">
          <div class="reset-container">
            <div class="reset-header">Email Verification</div>
            <div class="form-container">
              <TextField
                class="textfield"
                :label="'Email'"
                :placeholder="'Email'"
                :bottomLeftDescription="''"
              />
              <div>
                <div class="verification-code-label">
                  Verification Code<span class="text-red-500"> *</span>
                </div>
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
              <div class="verify-row">
                <TextField
                  class="textfield"
                  :label="'Email Verification Code'"
                  :placeholder="'Email Verification Code'"
                  :bottomLeftDescription="''"
                />
                <RoundedButton
                  :type="'Secondary'"
                  :label="'Resend'"
                  :buttonDisabled="false"
                  :button-width="'114px'"
                />
              </div>
            </div>

            <div class="footer-buttons no-wrap flex justify-between">
              <CircularButton
                :type="'TertiaryLined'"
                :isLoading="false"
                :buttonDisabled="false"
                :icon="'west'"
                @clicked="navigateTo('/')"
              />
              <RoundedButton
                class="flex-grow"
                type="Primary"
                :label="'Confirm'"
                :button-width="'100%'"
                @click="resetPassword"
              />
            </div>
          </div>
        </div>
      </div>
      <DialogComponent
        title="Confirm"
        description="Do you want to reset your password?"
      />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import AuthHeader from 'components/organisms/auth-header/AuthHeader.vue'
import ResetPasswordPlaceholder from 'components/atoms/Icons/my-page-icons/ResetPasswordPlaceholder.vue'
import TextField from 'components/molecules/form-components/fields/textfield/TextField.vue'
import CircularButton from 'components/molecules/buttons/conditionally-styled-buttons/ConditionalStyledCircularButton.vue'
import RoundedButton from 'components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import DialogComponent from 'components/molecules/dialog/DialogComponent.vue'
import { markRaw } from 'vue'
import ConfirmMessage from 'components/templates/auth/message/confirm-message/EmailConfirmMessage.vue'
import ResetPasswordIcon from 'components/atoms/Icons/my-page-icons/ResetPasswordIcon.vue'
import { useDialogStore } from 'stores/dialog-store'

const props = defineProps({})
const emits = defineEmits(['nextStep'])

const navigateTo = (routeName) => {
  router.push({ path: routeName })
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
@import 'AccountVerification.style';
</style>
