<template>
  <div>
    <div class="mypage-services">
      <div class="top-container">
        <div class="indicator-container flex">
          <p class="parent-text">Service</p>
          <q-icon class="arrow-right-icon" name="chevron_right"></q-icon>
          <p class="inditcator-text">Service 2</p>
        </div>
        <div class="flex justify-between items-center service-text">
          <div class="flex items-center">
            <p class="title-text">Service 2</p>
            <TagComponent
              class="service-tag"
              :label="service[status].tagLabel"
              :type="service[status].tagType"
              size="md"
            />
          </div>
          <DownloadIcon />
        </div>
      </div>
      <ApplicationFailed v-if="status == 'inactive-full'" />
      <ApplicationCompleted v-if="status == 'pending'" />
      <ApplicationInformation />
      <hr class="horizontal-divider" />
      <ApplicantInformation />
      <hr class="horizontal-divider" />
      <ServiceInformation
        :hasAddProductOrChageOptionsButton="status !== 'pending'"
        :tableProps="service[status].serviceInformation"
      />
      <hr class="horizontal-divider" />
      <BillingInformation />
      <hr class="horizontal-divider" />
      <RefundAccount />
      <hr class="horizontal-divider" />
      <BillingHistory :tableProps="service[status].billingHistory" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TagComponent from 'components/molecules/form-components/tag-component/TagComponent.vue'
import DownloadIcon from '../../../../../atoms/Icons/my-page-icons/DownloadIcon.vue'
import ApplicationFailed from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/application-failed/ApplicationFailed.vue'
import ApplicationCompleted from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/application-completed/ApplicationCompleted.vue'
import ApplicationInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/application-information/ApplicationInformation.vue'
import ApplicantInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/applicant-information/ApplicantInformation.vue'
import ServiceInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/service-information/ServiceInformation.vue'
import BillingInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/billing-information/BillingInformation.vue'
import RefundAccount from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/refund-account/RefundAccount.vue'
import BillingHistory from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/billing-history/BillingHistory.vue'

const route = useRoute()
const status = ref('active')

onMounted(() => {
  status.value = route.query.status
})

const service = {
  inactive: {
    status: 'inactive',
    tagLabel: '사용중',
    tagType: 'TagRed',
    serviceInformation: {
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
      },
      columnStyles: [],
    },
    billingHistory: {
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
          status: { type: 'TagRedTonal', label: '입금필요', size: 'sm' },
          amount: '12.000',
        },
        {
          paymentID: 'Accreditation',
          expectedPaymentDate: '-',
          actualPaymentDate: '2024-04-01',
          paymentMethod: 'Credit Card',
          paymentType: '분납',
          status: { type: 'TagBlueTonal', label: '결제됨', size: 'sm' },
          amount: '12.000',
        },
      ],
      columnStyles: [],
      tableStyle: '',
    },
  },
  active: {
    tagLabel: '사용중',
    tagType: 'TagBlue',
    serviceInformation: {
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
      },
      columnStyles: [],
    },
    billingHistory: {
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
        { label: '', key: 'download', type: 'icon' },
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
          download: {
            name: 'sym_o_download',
            color: 'text-bluegray-900',
            size: '24px',
          },
        },
        {
          paymentID: 'Accreditation',
          expectedPaymentDate: '-',
          actualPaymentDate: '2024-04-01',
          paymentMethod: 'Bank Transfer',
          paymentType: '분납',
          status: { type: 'TagBlueTonal', label: '결제됨', size: 'sm' },
          amount: '12.000',
          download: {
            name: 'sym_o_download',
            color: 'text-bluegray-900',
            size: '24px',
          },
        },
      ],
      columnStyles: [],
      tableStyle: '',
    },
  },
  'inactive-full': {
    status: 'inactive-full',
    tagLabel: '사용중',
    tagType: 'TagRed',
    serviceInformation: {
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
      },
      columnStyles: [],
    },
    billingHistory: {
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
          status: { type: 'TagRedTonal', label: '입금필요', size: 'sm' },
          amount: '12.000',
        },
        {
          paymentID: 'Accreditation',
          expectedPaymentDate: '-',
          actualPaymentDate: '2024-04-01',
          paymentMethod: 'Bamk Transfer',
          paymentType: '분납',
          status: { type: 'TagBlueTonal', label: '결제됨', size: 'sm' },
          amount: '12.000',
        },
      ],
      columnStyles: [],
      tableStyle: '',
    },
  },
  pending: {
    status: 'pending',
    tagLabel: '사용중',
    tagType: 'TagSkeletonTonal',
    serviceInformation: {
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
      },
      columnStyles: [],
    },
    billingHistory: {
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
      columnStyles: [],
      tableStyle: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'ServiceDetail.style.scss'; // Change the import based on the template
</style>
