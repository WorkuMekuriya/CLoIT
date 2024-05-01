<template>
  <div class="stripe-dialog">
    <p class="heading-6 title">Stripe</p>
    <p class="p-lg">Connect your Stripe Account.</p>
    <div class="save-button flex justify-center items-center">
      <ConditionalStyleRoundedButton
        type="Primary"
        label="Go to Stripe"
        buttonWidth="328px"
      />
    </div>
  </div>
</template>
<script setup>
import ConditionalStyleRoundedButton from '../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
</script>
<style lang="scss" scoped>
@import 'StripeDialog.style.scss';
</style>
