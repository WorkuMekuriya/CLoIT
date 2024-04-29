<template>
  <div class="mypage-services">
    <p class="inditcator-text">Service</p>
    <div class="flex justify-between items-center service-text">
      <p class="title-text">Service</p>
      <q-icon class="add-button" name="add"></q-icon>
    </div>
    <ServiceCard
      v-for="(service, index) in services"
      :key="index"

      :name="service.name"
      :services="service.services"
      :serviceNumber="service.serviceNumber"
      :tagLabel="service.tagLabel"
      :tagType="service.tagType"
      :startDate="service.startDate"
      :endDate="service.endDate"
      :to="service.to"
    />
  </div>
</template>
<script setup>
import ServiceCard from '../../../../organisms/portal-product/my-page/mypage-service/service-card/ServiceCard.vue'
const services = [
  {
    name: 'services',
    services: ['Portal & Help Desk', 'Accreditation', 'Sports Entries'],
    serviceText: 'Portal & Help Desk',
    serviceNumber: '{N}',
    tagLabel: '신청함',
    tagType: 'TagSkeletonTonal',
    startDate: '24-03-25',
    endDate: '2024-06-25',
    to: 'portal-products-my-page-services-pending'
  },
  {
    name: 'services',
    services: ['Portal & Help Desk', 'Accreditation', 'Sports Entries'],
    serviceText: 'Accreditation',
    serviceNumber: '{N}',
    tagLabel: '사용불가',
    tagType: 'TagBlue',
    startDate: '24-03-25',
    endDate: '2024-06-25',
    to: ''
  },
  {
    name: 'services',
    services: ['Portal & Help Desk', 'Accreditation', 'Sports Entries'],
    serviceText: 'Sports Entries',
    serviceNumber: '{N}',
    tagLabel: '신청함',
    tagType: 'TagRedTonal',
    startDate: '24-03-25',
    endDate: '2024-06-25',
    to: ''
  },
  {
    name: 'services',
    services: ['Portal & Help Desk', 'Accreditation', 'Sports Entries'],
    serviceText: 'Fourth Service',
    serviceNumber: '{N}',
    tagLabel: '만료됨',
    tagType: 'TagSkeletonTonal',
    startDate: '24-03-25',
    endDate: '2024-06-25',
    to: ''
  },
]
</script>
<style lang="scss" scoped>
@import 'MyPageServices.style.scss';
</style>
