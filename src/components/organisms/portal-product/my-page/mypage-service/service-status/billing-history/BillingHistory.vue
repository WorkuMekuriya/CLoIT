<template>
  <div class="billing-history">
    <p class="header-text">Billing History</p>
    <table>
      <thead>
        <tr>
          <th>Payment ID</th>
          <th>예정된 결제일</th>
          <th>실제 결제일</th>
          <th>결제수단</th>
          <th>결제방식</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(payment, index) in billingHistory" :key="index">
          <td>{{ payment.paymentID }}</td>
          <td>{{ payment.expectedPaymentDate }}</td>
          <td>{{ payment.actualPaymentDate }}</td>
          <td>{{ payment.paymentMethod }}</td>
          <td>{{ payment.paymentType }}</td>
          <td>
            <Tag
              size="sm"
              :type="payment.status.type"
              :label="payment.status.label"
            />
          </td>
          <td>{{ payment.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Tag from '../../../../../../molecules/form-components/tag/Tag.vue'
const props = defineProps({
  billingHistory: {
    type: Array,
    default: () => [
      {
        paymentID: 'Portal & Help',
        expectedPaymentDate: '-',
        actualPaymentDate: '2024-04-01',
        paymentMethod: 'Bank Transfer',
        paymentType: '분납',
        status: { type: 'TagRedTonal', label: '입금필요' },
        amount: '12.000',
      },
      {
        paymentID: 'Accreditation',
        expectedPaymentDate: '-',
        actualPaymentDate: '2024-04-01',
        paymentMethod: 'Credit Card',
        paymentType: '분납',
        status: { type: 'TagBlueTonal', label: '결제됨' },
        amount: '12.000',
      },
    ],
  },
})
</script>

<style lang="scss" scoped>
@import 'BillingHistory.style.scss';
</style>
