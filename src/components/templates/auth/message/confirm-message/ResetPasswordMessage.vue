<template>
  <div class="main-container">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
  </div>
  <q-space />
  <div class="bottom-button">
    <ConditionalStyleRoundedButton
      type="Primary"
      label="Ok"
      buttonWidth="328px"
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
    default: 'Do you want to reset your password?',
  },
})
</script>

<style scoped lang="scss">
@import 'Message.style';
</style>
