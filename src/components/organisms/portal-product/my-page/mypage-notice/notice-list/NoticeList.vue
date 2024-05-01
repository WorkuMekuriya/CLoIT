<template>
  <div class="notice-list cursor-pointer">
    <div class="row">
      <div class="col-9">
        <div class="title">{{ title }}</div>
        <div class="date">{{ date }}</div>
        <p class="notice" v-html="formattedNotice"></p>
      </div>
      <div class="col-3">
        <img v-if="imageSrc" :src="imageSrc" alt="" />
        <ImagePlaceholder v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import ImagePlaceholder from '../../../../../atoms/Icons/ImagePlaceholder.vue'
const props = defineProps({
  title: {
    type: String,
    default: '[Notice] Service Maintenance Notice',
  },
  date: {
    type: String,
    default: 'YYYY-MM-DD',
  },
  notice: {
    type: String,
    default: `안녕하세요, 클로잇입니다. 24년 4월 21일에 전체 서비스 점검이 있을 예정입니다. 서비스 점검 시간은 10:00 am ~ 18:00 pm이며 이 시간동안 대시보드 접근 및 대시보드 내에서 행해지는 모든 액션 사용이 불가합니다.\n\n
이용에 불편을 드려 죄송합니다. 더 나은 서비스로 찾아뵙기 위함이니 양해 부탁드립니다. 더 자세한 사항은....`,
  },
  imageSrc: {
    type: String,
    default: '',
  },
})

// Format the notice string to replace '\n' with '<br>'
const formattedNotice = props.notice.replace(/\n/g, '<br>')
</script>

<style lang="scss" scoped>
@import 'NoticeList.style.scss';
</style>
