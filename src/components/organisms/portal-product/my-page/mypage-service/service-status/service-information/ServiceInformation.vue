<template>
  <div class="service-information">
    <p class="header-text">서비스정보</p>
    <table>
      <thead>
        <tr>
          <th>신청상품명</th>
          <th>Duration</th>
          <th>사용개시일</th>
          <th>종료일</th>
          <th>신청일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td>{{ row.product }}</td>
          <td>{{ row.duration }}</td>
          <td>{{ row.startDate }}</td>
          <td>{{ row.endDate }}</td>
          <td>{{ row.applicationDate }}</td>
        </tr>
      </tbody>
    </table>
    <div class="row date-container">
      <div class="col-6">
        <p class="date-title">규모</p>
        <p class="date">{{ scale }}</p>
      </div>
      <div class="col-6">
        <p class="date-title">Games</p>
        <p class="date">{{ games }}</p>
      </div>
      <div class="col-6 q-mt-md">
        <p class="date-title">접속주소</p>
        <p class="date">cloit.com/{{ subDomain }}</p>
      </div>
    </div>
    <LinkButton
    v-if="hasAddProductOrChageOptionsButton"
      buttonHeight="76px"
      labelTypology="heading-6"
      textColor="text-white"
      backgroundColor="bg-bluegray-900"
      iconWidth="52px"
      iconHeight="52px"
      iconColor="text-bluegray-900"
      iconBackgroundColor="bg-limegreen-400"
      label="상품추가 혹은 옵션변경"
      class="link-button"
    />
  </div>
</template>

<script setup>
import LinkButton from '../../../../../../molecules/buttons/link-button/LinkButton.vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => [
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
  },
  scale: {
    type: String,
    default: '50 People',
  },
  games: {
    type: String,
    default: 'Up to 10 games',
  },
  subDomain: {
    type: String,
    default: '입력한Sub-Domain',
  },
  hasAddProductOrChageOptionsButton: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped>
@import 'ServiceInformation.style.scss';
</style>
