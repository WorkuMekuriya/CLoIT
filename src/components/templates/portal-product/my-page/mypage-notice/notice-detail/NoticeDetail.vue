<template>
  <div class="notice-detail">
    <div class="top-container">
      <div class="indicator-container flex">
        <p class="parent-text">Notice</p>
        <q-icon class="arrow-right-icon" name="chevron_right"></q-icon>
        <p class="inditcator-text">Detail</p>
      </div>
    </div>
    <NoticeDetail />
  </div>
</template>
<script setup>
import NoticeDetail from '../../../../../organisms/portal-product/my-page/mypage-notice/notice-detail/NoticeDetail.vue'
</script>
<style lang="scss" scoped>
@import 'NoticeDetail.style.scss';
</style>
