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
    <div>
      <SelectDropdown
        label="문의 원하는 서비스"
        :options="[{ label: 'Service 1', value: 'service_1' }]"
      />
      <br />
    </div>

    <div>
      <TextField
        class="textfield"
        label="Title"
        placeholder="Title"
        bottomLeftDescription=""
      />
    </div>

    <div>
      <TextArea
        class="textfield"
        label="Content"
        placeholder="자세히 적어주실 수록 빠르고 정확한 도움을 받으실 수 있습니다."
        height="338px"
      />
    </div>

    <div>
      <FilePicker
        label="Attach files"
        description="{File 크기나 확장자 제한에 대한 안내}"
        type="lg"
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
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue'
import TextArea from 'src/components/molecules/form-components/fields/textarea/TextArea.vue'
import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import FilePicker from 'src/components/molecules/form-components/file-picker/FilePicker.vue'
import SelectDropdown from 'components/molecules/form-components/select-dropdown/SelectDropdown.vue'

const emits = defineEmits(['nextInquiry'])
const backInquiry = () => {
  emits('nextStep', 0)
}
</script>

<style lang="scss" scoped>
@import 'NewInquiry.style.scss';
</style>
