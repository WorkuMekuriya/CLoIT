<template>
  <div class="breadcrumb">
    <div class="help-center">My Profile</div>
    <div class="breadcrumb-separator">〉</div>
    <span class="help-center">Inquiry</span>
    <div class="breadcrumb-separator">〉</div>
    <span class="breadcrumb-item">{Title}</span>
  </div>
  <div class="my-profile-inquiry-container">
    <div class="my-profile-inquiry-title">1:1 문의</div>
  </div>
  <div v-for="(inquiry, index) in inquiries" :key="index" class="inquiry-item">
    <div class="inquiry-title">{{ inquiry.title }}</div>
    <div class="inquiry-details">
      <div>
        <div class="attachment-label-font">문의 원하는 서비스</div>
        <div>{{ inquiry.serviceName }}</div>
      </div>
      <div>
        <div class="attachment-label-font">작성일자</div>
        <div>{{ inquiry.date }}</div>
      </div>
    </div>
    <div class="inquiry-description">{{ inquiry.description }}</div>

    <div class="attachment-label attachment-label-font">Attached Files</div>
    <div class="attachment-list">
      <div
        v-for="(attachment, index) in [
          'attachment_name_1.pdf',
          'attachment_name_2.png',
          'attachment_name_3.mp4',
        ]"
        :key="index"
        class="attachment-item-list"
      >
        {{ attachment }}
        <div class="attachment-close">
          <q-icon name="close" size="sm" color="white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inquiries = ref([
  {
    title: 'I cant add more product',
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
      'attacment_name_1.pdf',
      'attacment_name_2.png',
      'attacment_name_3.mp4',
    ],
  },
  {
    title: '고객센터로부터의 답변',
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
      'attacment_name_1.pdf',
      'attacment_name_2.png',
      'attacment_name_3.mp4',
    ],
  },
  {
    title: '고객센터',
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
      'attacment_name_1.pdf',
      'attacment_name_2.png',
      'attacment_name_3.mp4',
    ],
  },
])
const emits = defineEmits(['nextInquiry']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const nextInquiry = () => {
  emits('nextInquiry', 4)
}

const backInquiry = () => {
  emits('nextStep', 0)
}
</script>

<style lang="scss" scoped>
@import 'InquiryDetail.style.scss';
</style>
