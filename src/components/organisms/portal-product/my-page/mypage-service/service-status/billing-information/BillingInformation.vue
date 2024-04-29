<template>
  <div class="billing-information">
    <p class="header-text">Billing</p>
    <div class="row date-container">
      <div class="col-6">
        <p class="date-title">Total Price</p>
        <p class="date">{{ totalPrice }} USD</p>
      </div>
      <div class="col-6">
        <p class="date-title">결제방식</p>
        <p class="date">{{ paymentMethod }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">분납방법</p>
        <p class="date">{{ installmentMethod }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">마지막 결제</p>
        <p class="date">{{ lastPayment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPrice: {
    type: String,
    default: '20'
  },
  paymentMethod: {
    type: String,
    default: '분납'
  },
  installmentMethod: {
    type: String,
    default: '4등분하여 3개월에 한번씩 지급'
  },
  lastPayment: {
    type: String,
    default: '-'
  }
});
</script>

<style scoped>
/* Your CSS styles here */
</style>

<style lang="scss" scoped>
@import 'BillingInformation.style.scss';
</style>
