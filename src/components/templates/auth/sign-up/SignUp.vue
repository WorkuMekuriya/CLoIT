<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <AuthHeader />
      <div class="app-container">
        <form>
          <div class="auth flex flex-center">
            <div class="signup-container">
              <div class="signup-header">Sign Up</div>
              <div class="form-container">
                <TextField
                  :label="'Email'"
                  :placeholder="'Email'"
                  :error="error"
                  :bottomLeftDescription="
                    error && '이메일 형식이 잘못되었습니다.'
                  "
                />
                <div class="grid-container">
                  <div class="grid-item">
                    <TextField
                      class="textfield"
                      :error="error"
                      :bottomLeftDescription="
                        error &&
                        'At least 8 digits, including at least 3 of uppercase letters, lowercase letters, numbers, and special letters (~`!@#$%^&amp;*()_-+=?)'
                      "
                      :label="'Password'"
                      inputType="password"
                      iconRight="o_visibility"
                      placeholder="Password"
                    />
                  </div>
                  <div class="grid-item form-container">
                    <TextField
                      class="textfield"
                      :error="error"
                      :bottomLeftDescription="
                        error &&
                        'New password and Confirm password do not match.'
                      "
                      :label="'Confirm Password'"
                      inputType="password"
                      iconRight="o_visibility"
                      :placeholder="'Confirm Password'"
                    />
                  </div>
                  <div class="grid-item">
                    <TextField
                      class="textfield"
                      :error="error"
                      :bottomLeftDescription="''"
                      :label="'Family Name'"
                      :placeholder="'Family Name'"
                    />
                  </div>
                  <div class="grid-item">
                    <TextField
                      class="textfield"
                      :error="error"
                      :bottomLeftDescription="
                        error && 'This is a required field.'
                      "
                      :label="'Given Name'"
                      :placeholder="'Given Name'"
                    />
                  </div>
                  <div class="grid-item">
                    <TextField
                      class="textfield"
                      :error="error"
                      :bottomLeftDescription="''"
                      :label="'Phone Number'"
                      :placeholder="'Phone Number'"
                    />
                  </div>
                  <div class="grid-item">
                    <SelectDropdown
                      :label="'Nationality'"
                      :options="[
                        { label: 'South Korean', value: 'south_korean' },
                        {
                          label: 'Ethiopian',
                          value: 'ethiopian',
                        },
                        {
                          label: 'American',
                          value: 'american',
                        },
                      ]"
                      :error="error"
                    />
                  </div>
                  <div class="grid-item">
                    <TextField
                      class="textfield"
                      :error="error"
                      :bottomLeftDescription="''"
                      :label="'Department'"
                      :placeholder="'Department'"
                    />
                  </div>
                  <div class="grid-item">
                    <TextField
                      class="textfield"
                      :error="error"
                      :bottomLeftDescription="''"
                      :label="'Organization'"
                      :placeholder="'Organization'"
                      iconRight="search"
                    />
                  </div>
                </div>
              </div>

              <div
                class="footer-buttons no-wrap flex justify-between items-center"
              >
                <CircularButton
                  :type="'TertiaryLined'"
                  :isLoading="false"
                  :buttonDisabled="false"
                  :icon="'west'"
                  @clicked="navigateTo('/')"
                />
                <RoundedButton
                  class="flex-grow"
                  :type="'Primary'"
                  :outlined="false"
                  :label="'Sign up'"
                  :button-width="'100%'"
                  @click="showValidation"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthHeader from 'components/organisms/auth-header/AuthHeader.vue'
import TextField from 'components/molecules/form-components/fields/textfield/TextField.vue'
import CircularButton from 'components/molecules/buttons/conditionally-styled-buttons/ConditionalStyledCircularButton.vue'
import SelectDropdown from 'components/molecules/form-components/select-dropdown/SelectDropdown.vue'
import RoundedButton from 'components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'

const router = useRouter()
const navigateTo = (routeName) => {
  router.push({ name: routeName })
}

const error = ref(false)

const showValidation = () => {
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
