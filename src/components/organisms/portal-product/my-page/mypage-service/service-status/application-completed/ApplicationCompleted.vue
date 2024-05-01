<template>
  <div class="application-completed">
    <AlertSuccessIcon />
    <p class="title">신청완료</p>
    <p class="sub-title-middle sub-title">
      계약 확정을 위해 매니저가 연락드릴 예정입니다.<br />
      평일 기준 {}일 소요됩니다.
    </p>
    <p class="sub-title">
      계약이 확정되고 대금 지급이 완료되면 대시보드에 접근 가능해지며, 사용<br />
      개시일부터 이벤트를 등록, 관리할 수 있습니다.
    </p>
  </div>
</template>
<script setup>
import AlertSuccessIcon from '../../../../../../atoms/Icons/alert-icons/AlertSuccessIcon.vue'
</script>
<style lang="scss" scoped>
@import 'ApplicationCompleted.style.scss';
</style>
