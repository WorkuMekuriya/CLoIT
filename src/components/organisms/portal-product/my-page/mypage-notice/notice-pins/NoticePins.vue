<template>
  <div>
    <div class="notice-pins flex justify-between">
      <div class="flex items-center">
        <PinIcon class="pin" />
        <p class="title">{{ title }}</p>
      </div>
      <p class="date">{{ date }}</p>
    </div>
  </div>
</template>

<script setup>
import PinIcon from '../../../../../atoms/Icons/my-page-icons/PinIcon.vue'

const props = defineProps({
  title: {
    type: String,
    default: '서비스점검 안내',
  },
  date: {
    type: String,
    default: 'YYYY-MM-DD',
  },
})
</script>

<style scoped lang="scss">
@import 'NoticePins.style.scss';
</style>
