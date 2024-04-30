<template>
  <div>
    <div class="notice-title">
      <p class="title-text">{{ title }}</p>
      <p class="date">{{ date }}</p>
      <div class="full-notice" v-html="formattedNotice"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '[공지사항] 서비스 점검 안내',
  },
  date: {
    type: String,
    default: 'YYYY-MM-DD',
  },
  notice: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur. Leo interdum quam sit est enim.
      Morbi eget nibh cursus vitae tellus volutpat. Tempus massa vitae turpis
      non porttitor sed euismod at at. Fames in tortor vel at nullam.
      Sollicitudin sed semper eu nunc volutpat. Iaculis ornare elit feugiat
      tincidunt pharetra ut gravida sed nibh. Nec luctus fermentum metus morbi
      scelerisque sit cras at. Ante dictumst dictum sed nulla lobortis velit
      vitae eu consequat. Parturient consectetur egestas consectetur bibendum
      integer hendrerit cras. Cras sit risus ullamcorper quis praesent nunc
      in. Purus lectus eleifend adipiscing egestas eget rutrum. Leo cras nulla
      euismod quis tortor feugiat tellus sit gravida. Euismod commodo vitae
      elit aliquam malesuada euismod faucibus. Turpis pretium posuere a aenean
      purus feugiat. Senectus non quis commodo bibendum lectus mauris
      elementum vivamus blandit.\n
      posuere magna. Turpis quis tincidunt urna mus dapibus quis neque augue.
      Gravida quis ut bibendum vel mi sollicitudin. Neque convallis maecenas
      cursus sem est nibh. Lectus amet amet molestie vestibulum integer
      potenti gravida fames. Nunc libero maecenas dignissim ultrices viverra
      purus fames. Praesent vitae varius mauris consequat mi viverra gravida.
      Tempus in eget magna ornare molestie tristique.`,
  },
})

const formattedNotice = computed(() => {
  // Replace \n with <br>
  return props.notice.replace(/\n/g, '<br>')
})
</script>

<style lang="scss" scoped>
@import 'NoticeDetail.style.scss';
</style>
