<template>
  <div>My Profile 〉Inquiry 〉New Inquiry</div>
  <div
    style="display: flex; justify-content: space-between; align-items: center"
  >
    <div style="font-weight: 800; font-size: 32px">Inquiry</div>
  </div>
  <div style="margin-top: 36px; margin-bottom: 24px">
    <div v-for="(field, index) in inquiryFields" :key="index">
      <TextField
        class="textfield"
        :label="field.name"
        :placeholder="field.placeholder || field.name"
        :bottomLeftDescription="field.description"
      />
    </div>
  </div>
  <div style="display: flex">
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
import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'

const inquiryFields = ref([
  {
    name: '문의 원하는 서비스',
    placeholder: '{Service name list}',
    description: '',
  },
  { name: 'Title', placeholder: '', description: '' },
  {
    name: 'Content',
    placeholder:
      '자세히 적어주실 수록 빠르고 정확한 도움을 받으실 수 있습니다.',
    description: '',
  },
  {
    name: 'Attach files',
    placeholder: 'Drag and drop files',
    description: '{File 크기나 확장자 제한에 대한 안내}',
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
.textfield {
  margin-bottom: 24px;
}
</style>
