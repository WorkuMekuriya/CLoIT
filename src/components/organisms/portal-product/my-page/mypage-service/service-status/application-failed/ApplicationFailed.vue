<template>
  <div class="application-failed">
    <AlertErrorIcon />
    <p class="title">사용이 불가합니다.</p>
    <p class="sub-title-middle sub-title">
      결제에 실패했습니다. 다시 결제를 시도해주세요.
    </p>
  </div>
</template>
<script setup>
import AlertErrorIcon from '../../../../../../atoms/Icons/alert-icons/AlertErrorIcon.vue'
</script>
<style lang="scss" scoped>
@import 'ApplicationFailed.style.scss';
</style>
