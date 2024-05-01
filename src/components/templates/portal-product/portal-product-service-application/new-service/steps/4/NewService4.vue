<template>
  <div class="grid-main-container">
    <div>
      <!-- Information Entry Section -->
      <section class="section-container">
        <div class="section-title">정보입력</div>
        <div class="card-list-container">
          <Card
            :card-list="infoCard"
            @card-clicked="toggleSelect"
            class="card-spacing"
          />
        </div>
        <div>
          <div class="flex items-center text-center checkbox-container">
            <div class="section-checkbox-title">정보입력</div>
            <div v-if="selectedIndex == 'Individual'">
              <CheckboxButton
                :value="true"
                label="가입자와 정보가 동일합니다."
                class="checkbox-spacing"
              />
            </div>
          </div>

          <div v-if="selectedIndex == 'Individual'" class="grid-container">
            <div
              v-for="(form, index) in informationForm"
              :key="index"
              class="grid-item"
            >
              <TextField
                class="textfield"
                :label="form.name"
                :placeholder="form.name"
                :bottomLeftDescription="form.description"
                bottomRightDescription=""
              />
            </div>
          </div>

          <div v-if="selectedIndex == 'Organization'" class="grid-container">
            <div
              v-for="(form, index) in organizationInfo"
              :key="index"
              class="grid-item"
            >
              <TextField
                class="textfield"
                :label="form.name"
                :placeholder="form.placeholder || form.name"
                :bottomLeftDescription="form.description"
                bottomRightDescription=""
              />
            </div>
          </div>
          <div v-if="selectedIndex == 'Organization'">
            <div
              v-for="(form, index) in organizationInfo_2"
              :key="index"
              class="grid-item"
            >
              <TextField
                class="textfield"
                :label="form.name"
                :placeholder="form.placeholder || form.name"
                :bottomLeftDescription="form.description"
                bottomRightDescription=""
              />
            </div>
          </div>
          <div v-if="selectedIndex == 'Organization'" class="grid-container">
            <div
              v-for="(form, index) in organizationInfo_3"
              :key="index"
              class="grid-item"
            >
              <TextField
                class="textfield"
                :label="form.name"
                :placeholder="form.placeholder || form.name"
                :bottomLeftDescription="form.description"
                bottomRightDescription=""
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Additional Information Section -->
      <section class="section-container">
        <div class="section-title">정보입력</div>
        <div class="flex">
          <Card
            :card-list="additionalInfoCard"
            @card-clicked="toggleSelectInfo"
            class="card-spacing"
          />
        </div>

        <TextField
          class="textfield"
          label="분납방법"
          placeholder="분납방법"
          bottomLeftDescription="적어주신 내용 확인 후 계약을 위해 연락드리도록 하겠습니다."
          bottomRightDescription=""
        />
      </section>

      <!-- Refund Account Information Section -->
      <section class="section-container">
        <div class="section-title">환급계좌정보</div>
        <div class="grid-container">
          <div
            v-for="(account, index) in refundAccountInfo"
            :key="index"
            class="grid-item"
          >
            <TextField
              class="textfield"
              :label="account.name"
              :placeholder="account.name"
              bottomLeftDescription=""
              bottomRightDescription=""
            />
          </div>
        </div>

        <TextField
          class="textfield"
          label="시스템 사용 개시일"
          placeholder="2024/04/21"
          bottomLeftDescription=""
          bottomRightDescription=""
        />

        <TextField
          class="textfield"
          label="원하는 Sub-Domain"
          placeholder="원하는 Sub-Domain"
          bottomLeftDescription=""
          bottomRightDescription=""
        />
      </section>

      <!-- Message Section -->
      <section class="section-container">
        <div class="section-title">환급계좌정보</div>
        <TextArea
          class="textfield"
          label="Message"
          bottomLeftDescription="자유롭게 하고싶은 말을 적어주세요."
          bottomRightDescription=""
        />
      </section>
    </div>
    <SelectedService
      :products="products"
      :options="options"
      options-total="{}"
      product-total="{}"
      label="Next : Checkout"
      total="{}"
      @emitButtonClick="moveToStep5"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../../../../../../molecules/card/Card.vue'
import CheckboxButton from '../../../../../../molecules/form-components/checkbox/CheckboxButton.vue'
import TextField from '../../../../../../molecules/form-components/fields/textfield/TextField.vue'
import TextArea from '../../../../../../molecules/form-components/fields/textarea/TextArea.vue'
import SelectedService from '../../../../../../organisms/selected-service/SelectedService.vue'

const products = ref([
  { label: 'Portal & Help Desk', price: '${}/mo' },
  { label: 'Portal & Help Desk', price: '${}/mo' },
  { label: 'Portal & Help Desk', price: '${}/mo' },
  { label: 'Portal & Help Desk', price: '${}/mo' },
  { label: 'Portal & Help Desk', price: '${}/mo' },
])

const options = ref([
  { label: '3 Months', price: '+${}' },
  { label: 'Portal & Help Desk', price: '+${}' },
  { label: 'Portal & Help Desk', price: '+${}' },
  { label: 'Portal & Help Desk', price: '+${}' },
  { label: 'Portal & Help Desk', price: '+${}' },
])

const informationForm = ref([
  { name: 'First Name', description: '' },
  { name: 'Last Name', description: '' },
  { name: 'Email', description: '' },
  { name: 'Phone Number', description: '' },
  { name: 'Nationality', description: '' },
  { name: 'Department', description: '' },
  {
    name: 'Preferred Language',
    description:
      '기본적으로 영어, 한국어, 프랑스어, 독일어, 스페인어가 제공됩니다. 이외 원하는 언어가 있는 경우 적어주세요.',
  },
])

const refundAccountInfo = ref([
  { name: 'Account Name', description: '' },
  { name: 'Bank', description: '' },
  { name: 'Account Number', description: '' },
  { name: 'Bank Swift', description: '' },
])

const organizationInfo = ref([
  { name: 'Organization registration number', description: '' },
  { name: 'Organization name', description: '' },
  { name: 'Country', description: '' },
  { name: 'Owner', description: '' },
])

const organizationInfo_2 = ref([
  {
    name: 'Location',
    placeholder: 'Street, Building Number (Optional)',
    description: '',
  },
  {
    name: '',
    placeholder: 'More Address Information (Optional)',
    description: '',
  },
  { name: '', placeholder: 'City / District (Optional)', description: '' },
])

const organizationInfo_3 = ref([
  { name: 'Province', description: '' },
  { name: '', placeholder: 'Postal or ZIP Code', description: '' },
  { name: 'Contact', description: '' },
  { name: 'Certificate for business registration', description: '' },
  {
    name: 'Preferred Language',
    description:
      '기본적으로 영어, 한국어, 프랑스어, 독일어, 스페인어가 제공됩니다. 이외 원하는 언어가 있는 경우 적어주세요.',
  },
])

const infoCard = ref([
  {
    title: 'Individual',
    size: 'sm',
  },
  {
    title: 'Organization',
    size: 'sm',
  },
])

const additionalInfoCard = ref([
  {
    title: '일시납',
    size: 'sm',
  },
  {
    title: '분납',
    size: 'sm',
  },
])

let selectedIndex = ref('Individual')
let selectedInfoIndex = ref('일시납')

const toggleSelect = (index) => {
  selectedIndex.value = index[0].title
}

const toggleSelectInfo = (index) => {
  selectedInfoIndex.value = index[0].title
}

const emits = defineEmits(['nextStep']) // Define the 'clicked' event

const moveToStep5 = () => {
  emits('nextStep', 5)
}
</script>

<style lang="scss" scoped>
@import 'NewService4.style.scss';
</style>
