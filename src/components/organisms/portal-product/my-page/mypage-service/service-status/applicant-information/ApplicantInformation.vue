<template>
  <div class="applicant-information">
    <div class="flex items-center date-container">
      <p class="header-text">신청자 정보</p>
      <CheckBox
        class="checkbox"
        :disable="true"
        label="가입자와 정보가 동일합니다."
      />
    </div>
    <div class="row">
      <div class="col-6 q-my-lg">
        <p class="date-title">First Name</p>
        <p class="date">{{ firstName }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Last Name</p>
        <p class="date">{{ lastName }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Email</p>
        <p class="date">{{ email }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Phone Number</p>
        <p class="date">{{ phoneNumber }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Nationality</p>
        <p class="date">{{ nationality }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Organization</p>
        <p class="date">{{ organization }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Department</p>
        <p class="date">{{ department }}</p>
      </div>
      <div class="col-6 q-my-lg">
        <p class="date-title">Preferred Language</p>
        <p class="date">{{ preferredLanguage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckBox from '../../../../../../molecules/form-components/checkbox/CheckboxButton.vue'
const props = defineProps({
  firstName: {
    type: String,
    default: 'Sakura',
  },
  lastName: {
    type: String,
    default: 'Widiastuti',
  },
  email: {
    type: String,
    default: 'sakura@example.com',
  },
  phoneNumber: {
    type: String,
    default: '+1234567890',
  },
  nationality: {
    type: String,
    default: 'Japanese',
  },
  organization: {
    type: String,
    default: 'XYZ Corporation',
  },
  department: {
    type: String,
    default: 'IT Department',
  },
  preferredLanguage: {
    type: String,
    default: 'English',
  },
})
</script>

<style lang="scss" scoped>
@import 'ApplicantInformation.style.scss';
</style>
