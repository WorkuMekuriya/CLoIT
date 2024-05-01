<template>
  <div class="refund-account">
    <p class="header-text">Refund Account</p>
    <div class="row date-container">
      <div class="col-6">
        <p class="date-title">Account name</p>
        <p class="date">{{ accountName }}</p>
      </div>
      <div class="col-6">
        <p class="date-title">Bank</p>
        <p class="date">{{ bank }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Account Number</p>
        <p class="date">{{ accountNumber }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Bank Swift</p>
        <p class="date">{{ bankSwift }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  accountName: {
    type: String,
    default: 'Account1',
  },
  bank: {
    type: String,
    default: 'WESSEX ASSET MANAGEMENT LIMITED',
  },
  accountNumber: {
    type: String,
    default: '98765432',
  },
  bankSwift: {
    type: String,
    default: 'WEAMGB21',
  },
})
</script>

<style scoped>
/* Your CSS styles here */
</style>

<style lang="scss" scoped>
@import 'RefundAccount.style.scss';
</style>
