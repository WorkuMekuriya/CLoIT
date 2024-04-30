<template>
  <div class="payment-done">
    <div v-if="type == 'Full'" class="full-div">
      <AlertSuccessIcon />
      <p class="title">신청완료</p>
      <p class="sub-text">
        이메일로 계약서와 Invoice, 비밀번호를 보내드렸습니다. <br />
        사용 개시일로 선택한 일자부터 이벤트를 등록, 관리할 수 있습니다.
      </p>
    </div>
    <div v-if="type == 'Installments'" class="installments-div">
      <AlertSuccessIcon />
      <p class="title">신청완료</p>
      <p class="sub-text">
        계약 확정을 위해 매니저가 연락드릴 예정입니다.<br />
        평일 기준 {}일 소요됩니다.
      </p>
      <p class="sub-text-2">
        계약이 확정되고 대금 지급이 완료되면 대시보드에 접근 가능해지며, <br />
        사용 개시일부터 이벤트를 등록, 관리할 수 있습니다.
      </p>
    </div>
    <div class="flex justify-between date-subdomain-container">
      <div class="data-container">
        <p class="service-application">시스템 사용 개시일</p>
        <div class="flex items-center value-container">
          <p class="service-application-value">{{ serviceApplication }}</p>
          <Tag class="service-application-label" size="md" :label="tagLabel" />
        </div>
      </div>
      <div class="data-container">
        <p class="subdomain-application">Sub-Domain 주소</p>
        <div class="flex items-center subdomain-container">
          <p class="subdomain-value">{{ subDomain }}</p>
        </div>
      </div>
    </div>
    <div class="link-button-container">
      <LinkButton class="q-mt-lg" v-if="type == 'Full'"  label="Dashboard" iconTextColor="text-white" iconBackgroundColor="bg-arcticblue-600" />
      <LinkButton class="q-mt-md" label="Help Center" />
    </div>
  </div>
</template>

<script setup>
import Tag from '../../../../../molecules/form-components/tag/Tag.vue'
import AlertSuccessIcon from '../../../../../atoms/Icons/alert-icons/AlertSuccessIcon.vue'
import LinkButton from '../../../../../molecules/buttons/link-button/LinkButton.vue'
const props = defineProps({
  type: {
    type: String,
    default: 'Full', // Full or Installments
  },
  serviceApplication: {
    type: String,
    default: '2024/05/01',
  },
  tagLabel: {
    type: String,
    default: 'D-15',
  },
  subDomain: {
    type: String,
    default: '/{입력한Sub-Domain}',
  },
})
</script>

<style lang="scss" scoped>
@import 'PaymentDone.style.scss';
</style>
