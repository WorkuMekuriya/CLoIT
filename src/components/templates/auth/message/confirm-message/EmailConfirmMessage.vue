<template>
  <div class="main-container">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
  </div>
  <q-space />
  <div class="bottom-button">
    <ConditionalStyleRoundedButton
      type="Secondary"
      :label="'Ok'"
      buttonWidth="100%"
    />
  </div>
</template>

<script setup>
import ConditionalStyleRoundedButton from 'components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'

// Define props
defineProps({
  title: {
    type: String,
    default: 'Confirm',
  },
  description: {
    type: String,
    default:
      'Already registered Email. Please verify your Email Address and activate your account.',
  },
})
</script>

<style scoped lang="scss">
@import 'Message.style';
</style>
