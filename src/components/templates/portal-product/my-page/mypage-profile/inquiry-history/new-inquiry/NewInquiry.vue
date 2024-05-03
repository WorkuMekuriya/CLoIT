<template>
  <div class="breadcrumb">
    <div class="help-center">My Profile</div>
    <div class="breadcrumb-separator">〉</div>
    <span class="help-center">Inquiry</span>
    <div class="breadcrumb-separator">〉</div>
    <span class="breadcrumb-item">New Inquiry</span>
  </div>
  <div class="profile-header">
    <div class="profile-title">Inquiry</div>
  </div>
  <div class="form-container">
    <div v-for="(field, index) in inquiryFields" :key="index">
      <FilePicker
        v-if="field.type == 'filePicker'"
        :label="field.name"
        :description="field.description"
        type="lg"
      />
      <TextArea
        v-if="field.type == 'textarea'"
        class="textfield"
        :label="field.name"
        :placeholder="field.placeholder || field.name"
        :height="field.height"
      />
      <TextField
        v-if="field.type == 'textfield'"
        class="textfield"
        :label="field.name"
        :placeholder="field.placeholder || field.name"
        :bottomLeftDescription="field.description"
      />
    </div>
  </div>
  <div class="submit-button-container">
    <RoundedButton
      type="Primary"
      :isLoading="false"
      label="Submit"
      :buttonWidth="'186px'"
      @click="backInquiry"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue'
import TextArea from 'src/components/molecules/form-components/fields/textarea/TextArea.vue'
import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import FilePicker from 'src/components/molecules/form-components/file-picker/FilePicker.vue'

const inquiryFields = ref([
  {
    name: '문의 원하는 서비스',
    placeholder: '{Service name list}',
    description: '',
    type: 'dropdown',
  },
  { name: 'Title', placeholder: '', description: '', type: 'textfield' },
  {
    name: 'Content',
    placeholder:
      '자세히 적어주실 수록 빠르고 정확한 도움을 받으실 수 있습니다.',
    description: '',
    type: 'textarea',
    height: '338px'
  },
  {
    name: 'Attach files',
    placeholder: 'Drag and drop files',
    description: '{File 크기나 확장자 제한에 대한 안내}',
    type: 'filePicker',
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
@import 'NewInquiry.style.scss';
</style>
