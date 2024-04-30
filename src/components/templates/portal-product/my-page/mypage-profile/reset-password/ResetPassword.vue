<template>
    <div>
      <div>My Profile 〉Reset Password</div>
      <div class="header-title">Resetpassword</div>
      <div class="form-container">
        <div v-for="(field, index) in resetPasswordForm" :key="index" class="grid-item">
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
          <q-icon
            name="cached"
            size="24px"
            class="verification-code-icon"
          />
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
          @click="backStep"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue';
  import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue';
  
  const resetPasswordForm = [
    { label: 'Email', description: '' },
    { label: 'Email Verification Code', description: '' },
  ];
  
  const emits = defineEmits(['nextStep']);
  
  const backStep = () => {
    emits('nextStep', 0);
  };
  </script>
  
  <style lang="scss" scoped>
  @import 'ResetPassword.style.scss';
  </style>
  