<template>
  <div class="breadcrumb">
    <div class="help-center">My Profile</div>
    <span class="breadcrumb-separator">〉</span>
    <span class="help-center">Inquiry</span>
    <span class="breadcrumb-separator">〉</span>
    <span class="breadcrumb-item">{{ inquiryDetail.title }}</span>
  </div>

  <div class="my-profile-inquiry-container">
    <div class="my-profile-inquiry-title">1:1 문의</div>
  </div>

  <div class="inquiry-item-container">
    <div class="inquiry-item">
      <div class="inquiry-title">{{ inquiryDetail.title }}</div>
      <div class="inquiry-details">
        <div>
          <div class="attachment-label-font">문의 원하는 서비스</div>
          <div>{{ inquiryDetail.serviceName }}</div>
        </div>
        <div>
          <div class="attachment-label-font">작성일자</div>
          <div>{{ inquiryDetail.date }}</div>
        </div>
      </div>
      <div class="inquiry-description">{{ inquiryDetail.description }}</div>

      <div class="attachment-label attachment-label-font">Attached Files</div>
      <div class="attachment-list">
        <div v-for="(attachment, index) in inquiryDetail.attachments" :key="index" class="attachment-item-list">
          {{ attachment }}
        </div>
      </div>
    </div>
  </div>

  <div class="inquiry-title">{{ inquiryDetail.answerLabel }}</div>

  <div v-if="inquiryAnswers.length === 0" class="empty-card-container">
    <div>아직 답변이 달리지 않았습니다.</div>
    <div>답변이 달리기까지 평균 평일 기준 2~3일 소요됩니다.</div>
  </div>

  <div v-else v-for="(inquiry, index) in inquiryAnswers" :key="index" class="inquiry-item">
    <div class="inquiry-title">{{ inquiry.title }}</div>
    <div class="inquiry-description">{{ inquiry.description }}</div>

    <div class="attachment-label attachment-label-font">Attached Files</div>
    <div class="attachment-list">
      <div v-for="(attachment, index) in inquiry.attachments" :key="index" class="attachment-item-list">
        {{ attachment }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const inquiryDetail = ref({
  title: 'I can\'t add more product',
  serviceName: 'Service Name',
  date: 'YYYY-MM-DD',
  description: `Lorem ipsum dolor sit amet consectetur. Leo interdum quam sit est enim. Morbi
            eget nibh cursus vitae tellus
            volutpat. Tempus massa vitae turpis non porttitor sed euismod at at. Fames in tortor vel at nullam.
            Sollicitudin sed semper eu nunc volutpat. Iaculis ornare elit feugiat tincidunt pharetra ut gravida sed
            nibh. Nec luctus fermentum metus morbi scelerisque sit cras at. Ante dictumst dictum sed nulla lobortis
            velit vitae eu consequat. Parturient consectetur egestas consectetur bibendum integer hendrerit cras. Cras
            sit risus ullamcorper quis praesent nunc in. Purus lectus eleifend adipiscing egestas eget rutrum. Leo cras
            nulla euismod quis tortor feugiat tellus sit gravida.
            Euismod commodo vitae elit aliquam malesuada euismod faucibus. Turpis pretium posuere a aenean purus
            feugiat. Senectus non quis commodo bibendum lectus mauris elementum vivamus blandit. Ut in purus dui eros
            malesuada ultrices posuere magna. Turpis quis tincidunt urna mus dapibus quis neque augue. Gravida quis ut
            bibendum vel mi sollicitudin. Neque convallis maecenas cursus sem est nibh. Lectus amet amet molestie
            vestibulum integer potenti gravida fames. Nunc libero maecenas dignissim ultrices viverra purus fames.
            Praesent vitae varius mauris consequat mi viverra gravida. Tempus in eget magna ornare molestie tristique.
            Amet cras nullam sit neque aenean nam eleifend.`,
  attachments: [
    'attachment_name_1.pdf',
    'attachment_name_2.png',
    'attachment_name_3.mp4',
  ],
  answerLabel: '고객센터로부터의 답변'
})

const inquiryAnswers = ref([
  {
    description: `Lorem ipsum dolor sit amet consectetur. Leo interdum quam sit est enim. Morbi
            eget nibh cursus vitae tellus
            volutpat. Tempus massa vitae turpis non porttitor sed euismod at at. Fames in tortor vel at nullam.
            Sollicitudin sed semper eu nunc volutpat. Iaculis ornare elit feugiat tincidunt pharetra ut gravida sed
            nibh. Nec luctus fermentum metus morbi scelerisque sit cras at. Ante dictumst dictum sed nulla lobortis
            velit vitae eu consequat. Parturient consectetur egestas consectetur bibendum integer hendrerit cras. Cras
            sit risus ullamcorper quis praesent nunc in. Purus lectus eleifend adipiscing egestas eget rutrum. Leo cras
            nulla euismod quis tortor feugiat tellus sit gravida.
            Euismod commodo vitae elit aliquam malesuada euismod faucibus. Turpis pretium posuere a aenean purus
            feugiat. Senectus non quis commodo bibendum lectus mauris elementum vivamus blandit. Ut in purus dui eros
            malesuada ultrices posuere magna. Turpis quis tincidunt urna mus dapibus quis neque augue. Gravida quis ut
            bibendum vel mi sollicitudin. Neque convallis maecenas cursus sem est nibh. Lectus amet amet molestie
            vestibulum integer potenti gravida fames. Nunc libero maecenas dignissim ultrices viverra purus fames.
            Praesent vitae varius mauris consequat mi viverra gravida. Tempus in eget magna ornare molestie tristique.
            Amet cras nullam sit neque aenean nam eleifend.`,
    attachments: [
      'attachment_name_1.pdf',
      'attachment_name_2.png',
      'attachment_name_3.mp4',
    ],
  }
])

const emits = defineEmits(['nextInquiry'])

// Method to emit the 'clicked' event
const nextInquiry = () => {
  emits('nextInquiry', 4)
}
</script>

<style lang="scss" scoped>
@import 'InquiryDetail.style.scss';
</style>
