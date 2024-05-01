<template>
  <div class="edit-payment-container">
    <div class="main">
      <p class="title">Credit / Debit Card</p>
      <div class="row">
        <div class="col-12">
          <TextField class="textfield" placeholder="First Name" label="First Name" />
        </div>
        <div class="col-12">
          <TextField class="textfield" placeholder="Last Name"  label="Last Name" />
        </div>
        <div class="col-12">
          <TextField class="textfield" placeholder="1234 1234 1234 1234"  label="Card Number" />
        </div>
        <div class="col-12">
          <div class="row q-col-gutter-sm">
            <div class="col">
              <TextField class="Expiry" placeholder="Expiry"  label="Expiry" />
            </div>
            <div class="col">
              <TextField class="CVC" placeholder="CVC"  label="CVC" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <TextField class="textfield"  label="Country" />
        </div>
      </div>
    </div>
    <div class="save-button flex justify-center items-center">
      <ConditionalStyleRoundedButton
        type="Primary"
        label="Save"
        buttonWidth="452px"
      />
    </div>
  </div>
</template>
<script setup>
import ConditionalStyleRoundedButton from '../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import TextField from '../../../../../molecules/form-components/fields/textfield/TextField.vue'
</script>
<style lang="scss" scoped>
@import 'EditPaymentCardDialog.style.scss';
</style>
