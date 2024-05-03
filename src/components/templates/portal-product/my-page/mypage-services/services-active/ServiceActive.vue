<template>
  <div class="mypage-services-active">
    <div class="top-container">
      <div class="indicator-container flex">
        <p class="parent-text">Service</p>
        <q-icon class="arrow-right-icon" name="chevron_right"></q-icon>
        <p class="inditcator-text">Service 2</p>
      </div>
      <div class="flex justify-between items-center service-text">
        <div class="flex items-center">
          <p class="title-text">Service 2</p>
          <Tag class="service-tag" label="사용중" type="TagBlue" size="md" />
        </div>
        <DownloadIcon />
      </div>
    </div>
    <ApplicationInformation />
    <hr class="horizontal-divider" />
    <ApplicantInformation />
    <hr class="horizontal-divider" />
    <ServiceInformation />
    <hr class="horizontal-divider" />
    <BillingInformation />
    <hr class="horizontal-divider" />
    <RefundAccount />
    <hr class="horizontal-divider" />
    <BillingHistory />
  </div>
</template>
<script setup>
import Tag from 'components/molecules/form-components/tag-component/TagComponent.vue'
import DownloadIcon from '../../../../../atoms/Icons/my-page-icons/DownloadIcon.vue'
import ApplicationInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/application-information/ApplicationInformation.vue'
import ApplicantInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/applicant-information/ApplicantInformation.vue'
import ServiceInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/service-information/ServiceInformation.vue'
import BillingInformation from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/billing-information/BillingInformation.vue'
import RefundAccount from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/refund-account/RefundAccount.vue'
import BillingHistory from '../../../../../organisms/portal-product/my-page/mypage-service/service-status/billing-history/BillingHistory.vue'
</script>
<style lang="scss" scoped>
@import 'ServiceActive.style.scss';
</style>
