<template>
  <div class="mypage-notice">
    <p class="inditcator-text">Notice</p>
    <div class="flex justify-between items-center notice-text">
      <p class="title-text">Notice</p>
    </div>
    <NoticePins
      v-for="(noticePin, index) in noticePinsData"
      :key="index"
      :title="noticePin.title"
      :date="noticePin.date"
    />
    <NoticeList
      v-for="(notice, index) in notices"
      :key="index"
      :title="notice.title"
      :date="notice.date"
      :notice="notice.notice"
      @click="navigateToPage('portal-products-my-page-notice-detail')"
    />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import NoticePins from '../../../../organisms/portal-product/my-page/mypage-notice/notice-pins/NoticePins.vue'
import NoticeList from '../../../../organisms/portal-product/my-page/mypage-notice/notice-list/NoticeList.vue'
const noticePinsData = [
  {
    title: '서비스점검 안내',
    date: 'YYYY-MM-DD',
  },
  {
    title: 'Scheduled Maintenance',
    date: '2024-05-20',
  },
  {
    title: 'System Update',
    date: '2024-06-10',
  },
]
const notices = [
  {
    title: '[공지] 서비스 유지보수 공지',
    date: 'YYYY-MM-DD',
    notice: `안녕하세요, 클로잇입니다. 24년 4월 21일에 전체 서비스 점검이 있을 예정입니다. 서비스 점검 시간은 10:00 am ~ 18:00 pm이며 이 시간동안 대시보드 접근 및 대시보드 내에서 행해지는 모든 액션 사용이 불가합니다.
이용에 불편을 드려 죄송합니다. 더 나은 서비스로 찾아뵙기 위함이니 양해 부탁드립니다. 더 자세한 사항은...
    `,
  },
  {
    title: '[공지] 시스템 업데이트 안내',
    date: 'YYYY-MM-DD',
    notice: `안녕하세요, 클로잇입니다. 24년 4월 21일에 전체 서비스 점검이 있을 예정입니다. 서비스 점검 시간은 10:00 am ~ 18:00 pm이며 이 시간동안 대시보드 접근 및 대시보드 내에서 행해지는 모든 액션 사용이 불가합니다.

이용에 불편을 드려 죄송합니다. 더 나은 서비스로 찾아뵙기 위함이니 양해 부탁드립니다. 더 자세한 사항은...
    `,
  },
  {
    title: '[공지] 예정된 다운타임 안내',
    date: 'YYYY-MM-DD',
    notice: `안녕하세요, 예정된 다운타임 안내입니다. 24년 6월 10일 오후 9:00부터 오전 12:00까지
      예정된 다운타임이 있습니다. 이 기간 동안 시스템은 안정성과 보안을 향상시키기 위해
      유지보수 작업이 진행될 예정입니다. 발생한 불편을 사과드리며, 이해와 협조를 부탁드립니다.
    `,
  },
]
const router = useRouter()
const navigateToPage = (routeName) => {
  router.push({ name: routeName })
}
</script>
<style lang="scss" scoped>
@import 'MyPageNotice.style.scss';
</style>
