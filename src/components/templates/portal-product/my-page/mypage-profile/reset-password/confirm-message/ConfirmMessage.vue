<template>
  <div class="main-container">
    <div class="title">Confirm</div>
    <div class="description">Do you want to reset your password?</div>
  </div>
  <q-space />
  <div class="bottom-button">
    <ConditionalStyleRoundedButton
      type="Primary"
      label="Save"
      buttonWidth="328px"
    />
  </div>
</template>

<script setup>
import ConditionalStyleRoundedButton from '../../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
</script>

<style scoped lang="scss">
@import 'ConfirmMessage.style.scss';
</style>
