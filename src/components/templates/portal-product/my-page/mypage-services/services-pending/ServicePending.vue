<template>
  <div class="mypage-services-pending">
    <div class="top-container">
      <div class="indicator-container flex">
        <p class="parent-text">Service</p>
        <q-icon class="arrow-right-icon" name="chevron_right"></q-icon>
        <p class="inditcator-text">Service 2</p>
      </div>
      <div class="flex justify-between items-center service-text">
        <div class="flex items-center">
          <p class="title-text">Service 2</p>
          <Tag
            class="service-tag"
            :label="'사용중'"
            type="TagSkeletonTonal"
            size="md"
          />
        </div>
        <DownloadIcon />
      </div>
    </div>
    <ApplicationCompleted />
    <ApplicationInformation />
    <hr class="horizontal-divider" />
    <ApplicantInformation />
    <hr class="horizontal-divider" />
    <ServiceInformation
      :hasAddProductOrChageOptionsButton="false"
      :tableProps="serviceInformation"
    />
    <hr class="horizontal-divider" />
    <BillingInformation />
    <hr class="horizontal-divider" />
    <RefundAccount />
    <hr class="horizontal-divider" />
    <BillingHistory :billingHistory="billingHistory" />
  </div>
</template>
<script setup>
import Tag from 'components/molecules/form-components/tag-component/TagComponent.vue'
import DownloadIcon from '../../../../../atoms/Icons/my-page-icons/DownloadIcon.vue'
import ApplicationCompleted from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/application-completed/ApplicationCompleted.vue'
import ApplicationInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/application-information/ApplicationInformation.vue'
import ApplicantInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/applicant-information/ApplicantInformation.vue'
import ServiceInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/service-information/ServiceInformation.vue'
import BillingInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/billing-information/BillingInformation.vue'
import RefundAccount from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/refund-account/RefundAccount.vue'
import BillingHistory from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/billing-history/BillingHistory.vue'

const serviceInformation = {
  columns: [
    { label: '신청상품명', key: 'product', type: 'text' },
    { label: 'Duration', key: 'duration', type: 'text' },
    { label: '사용개시일', key: 'startDate', type: 'text' },
    { label: '종료일', key: 'endDate', type: 'text' },
    { label: '신청일', key: 'applicationDate', type: 'text' },
  ],
  tableData: [
    {
      product: 'Portal & Help Desk',
      duration: '3 Months',
      startDate: '2024-03-12',
      endDate: '2024-06-12',
      applicationDate: '2024-02-11',
    },
    {
      product: 'Accreditation',
      duration: '3 Months',
      startDate: '2024-03-12',
      endDate: '2024-06-12',
      applicationDate: '2024-02-11',
    },
  ],
  tableStyles: {
    customTableClass: 'custom-table',
    // Add more styles here if needed
  },
  columnStyles: [
    { width: '20%', textAlign: 'left' },
    { width: '20%', textAlign: 'left' },
    { width: '20%', textAlign: 'left' },
    { width: '20%', textAlign: 'left' },
    { width: '20%', textAlign: 'left' },
  ],
}
const billingHistory = {
  columns: [
    { label: 'Payment ID', key: 'paymentID', type: 'text' },
    { label: '예정된 결제일', key: 'expectedPaymentDate', type: 'text' },
    { label: '실제 결제일', key: 'actualPaymentDate', type: 'text' },
    { label: '결제수단', key: 'paymentMethod', type: 'text' },
    { label: '결제방식', key: 'paymentType', type: 'text' },
    {
      label: 'Status',
      key: 'status',
      type: 'tag',
    },
    { label: 'Amount', key: 'amount', type: 'text' },
  ],
  tableData: [
    {
      paymentID: 'Portal & Help',
      expectedPaymentDate: '-',
      actualPaymentDate: '2024-04-01',
      paymentMethod: 'Bank Transfer',
      paymentType: '분납',
      status: { type: 'TagBlueTonal', label: '결제됨', size: 'sm' },
      amount: '12.000',
    },
    {
      paymentID: 'Accreditation',
      expectedPaymentDate: '-',
      actualPaymentDate: '2024-04-01',
      paymentMethod: 'Bank Transfer',
      paymentType: '분납',
      status: { type: 'TagBlueTonal', label: '결제됨', size: 'sm' },
      amount: '12.000',
    },
  ],
  columnStyles: [
    // Add your custom column styles here
    { width: 'auto', textAlign: 'left' },
    { width: 'auto', textAlign: 'left' },
    { width: 'auto', textAlign: 'left' },
    { width: 'auto', textAlign: 'left' },
    { width: 'auto', textAlign: 'left' },
    { width: 'auto', textAlign: 'left' },
    { width: 'auto', textAlign: 'left' },
  ],
  tableStyle: '',
}
</script>
<style lang="scss" scoped>
@import 'ServicePending.style.scss';
</style>
