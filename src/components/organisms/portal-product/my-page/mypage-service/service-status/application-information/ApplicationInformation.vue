<template>
  <div class="application-information">
    <p class="header-text">신청정보</p>
    <div class="row date-container">
      <div class="col">
        <p class="date-title">서비스 신청일자</p>
        <p class="date">{{ startDate }}</p>
      </div>
      <div class="col">
        <p class="date-title">서비스 종료일자</p>
        <p class="date">{{ endDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  startDate: {
    type: String,
    default: '2024-03-11',
  },
  endDate: {
    type: String,
    default: '2024-03-11',
  },
})
</script>

<style lang="scss" scoped>
@import 'ApplicationInformation.style.scss';
</style>
