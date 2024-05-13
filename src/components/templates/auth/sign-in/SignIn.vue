<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <AuthHeader />
      <div class="app-container">
        <div class="auth flex flex-center">
          <div class="signin-container">
            <div class="login-header">Login</div>
            <form>
              <div class="login-form-items">
                <TextField
                  :label="''"
                  icon-left="person"
                  :placeholder="'Id'"
                  :error="error"
                  :iconRight="error ? 'warning' : ''"
                  :borderRadius="'16px 16px 0px 0px'"
                />
                <TextField
                  :label="''"
                  icon-left="key"
                  placeholder="***********"
                  inputType="password"
                  :borderRadius="'0px 0px 16px 16px'"
                />
              </div>
              <CheckboxButton
                :value="false"
                :label="'Remember me'"
                class="remember-me-field"
              />
              <div style="margin-top: 36px; margin-bottom: 60px">
                <StandardButton
                  :type="'ArcticBlue'"
                  :outlined="false"
                  :arrowDirection="'Right'"
                  :label="'Sign in'"
                  :leftIcon="'login'"
                  :button-width="'100%'"
                  @click="login"
                />
              </div>
              <div class="login-footer">
                <div @click="navigateTo('/signup')" class="login-footer-text">
                  Sign up
                </div>
                <div class="login-slash">/</div>
                <div
                  @click="navigateTo('/reset-password')"
                  class="login-footer-text"
                >
                  Reset password
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
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
