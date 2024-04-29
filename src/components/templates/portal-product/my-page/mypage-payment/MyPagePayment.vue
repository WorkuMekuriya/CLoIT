<template>
  <div class="mypage-payment">
    <p class="inditcator-text">Payment</p>
    <div class="flex justify-between items-center service-text">
      <p class="title-text">Payment</p>
      <q-icon class="add-button" name="add"></q-icon>
    </div>
    <div class="row q-col-gutter-md">
      <div
        class="col-6"
        v-for="(paymentCard, index) in paymentCards"
        :key="index"
      >
        <PaymentCard
          :paymentMethod="paymentCard.paymentMethod"
          :cardTag="paymentCard.cardTag"
          :cardName="paymentCard.cardName"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import PaymentCard from '../../../../organisms/portal-product/my-page/mypage-payment/payment-card/PaymentCard.vue'
const paymentCards = [
  {
    paymentMethod: 'PayPal',
    cardTag: {
      tagType: 'TagRedTonal',
      hasTag: false,
      tagLabel: '사용불가',
    },
    cardName: 'Visa0708',
  },
  {
    paymentMethod: 'Credit / Debit Card',
    cardTag: {
      tagType: 'TagRedTonal',
      hasTag: false,
      tagLabel: '사용불가',
    },
    cardName: 'Visa0708',
  },
  {
    paymentMethod: 'Credit / Debit Card',
    cardTag: {
      tagType: 'TagRedTonal',
      hasTag: true,
      tagLabel: '사용불가',
    },
    cardName: 'Visa0708',
  },
  {
    paymentMethod: 'PayPal',
    cardTag: {
      tagType: 'TagRedTonal',
      hasTag: false,
      tagLabel: '사용불가',
    },
    cardName: 'Visa0708',
  },
  {
    paymentMethod: 'PayPal',
    cardTag: {
      tagType: '',
      hasTag: false,
      tagLabel: '사용불가',
    },
    cardName: 'saku******',
  },
]
</script>
<style lang="scss" scoped>
@import 'MyPagePayment.style.scss';
</style>
