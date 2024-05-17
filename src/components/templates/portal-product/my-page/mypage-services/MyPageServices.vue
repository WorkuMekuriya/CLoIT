<template>
  <div class="mypage-services">
    <p class="inditcator-text">Service</p>
    <div class="flex justify-between items-center service-text">
      <p class="title-text">Service</p>
      <CircularButton
        type="Secondary"
        icon="add"
        @click="$router.push({ path: '/portal-products/new-service' })"
      />
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
      :to="service.status"
    />
  </div>
</template>
<script setup>
import ServiceCard from '../../../../organisms/portal-product/my-page/mypage-service/service-card/ServiceCard.vue'
import CircularButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyledCircularButton.vue'
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
    status: 'pending',
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
    status: 'active',
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
    status: 'inactive-full',
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
    status: 'pending',
  },
]
</script>
<style lang="scss" scoped>
@import 'MyPageServices.style.scss';
</style>
