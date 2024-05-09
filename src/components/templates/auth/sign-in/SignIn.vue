<template>
  <AuthHeader />
  <div class="auth flex flex-center">
    <div class="signin-container">
      <div class="login-header">Login</div>
      <div class="">
        <TextField
          label=""
          icon-left="person"
          placeholder="Id"
          :error="error"
          :iconRight="error ? 'warning' : ''"
          :borderRadius="'16px 16px 0px 0px'"
        />
        <TextField
          label=""
          icon-left="key"
          :type="'password'"
          placeholder="***********"
          :borderRadius="'0px 0px 16px 16px'"
        />
      </div>
      <div v-if="error" class="verification-code-container">
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
      <div v-if="error" class="error-text">
        Please log in after email verification.
      </div>
      <CheckboxButton
        :value="false"
        label="Remember me"
        class="remember-me-field"
      />
      <div style="margin-top: 36px; margin-bottom: 60px">
        <StandardButton
          :type="'ArcticBlue'"
          :outlined="false"
          :arrowDirection="'Right'"
          :label="'Sign in'"
          :leftIcon="'login'"
          :button-width="'350px'"
          @click="login"
        />
      </div>
      <div class="login-footer">
        <div @click="navigateTo('/signup')" class="login-footer-text">
          Sign up
        </div>
        <div class="login-slash">/</div>
        <div @click="navigateTo('/reset-password')" class="login-footer-text">
          Reset password
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import TextField from 'components/molecules/form-components/fields/textfield/TextField.vue'
import CheckboxButton from 'components/molecules/form-components/checkbox/CheckboxButton.vue'
import StandardButton from 'components/molecules/buttons/standard-buttons/StandardButtons.vue'
import AuthHeader from 'components/organisms/auth-header/AuthHeader.vue'
import ResetPasswordPlaceholder from 'components/atoms/Icons/my-page-icons/ResetPasswordPlaceholder.vue'
import { ref } from 'vue'

const error = ref(false)
const props = defineProps({})

const emits = defineEmits(['nextStep'])

// Method to emit the 'clicked' event
const login = () => {
  if (error.value) {
    router.push({ path: '/showcase' })
  } else {
    error.value = true
  }
}
const navigateTo = (routeName) => {
  router.push({ path: routeName })
}
</script>

<style lang="scss" scoped>
@import 'SignIn.style.scss';
</style>
