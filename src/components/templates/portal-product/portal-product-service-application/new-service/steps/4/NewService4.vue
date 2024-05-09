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
            <!-- Manually define each informationForm field -->
            <div class="grid-item">
              <TextField
                class="textfield"
                label="First Name"
                placeholder="First Name"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Last Name"
                placeholder="Last Name"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Email"
                placeholder="Email"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Phone Number"
                placeholder="Phone Number"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <br />
              <SelectDropdown
                label="Nationality"
                :options="[
                  { label: 'South Korean', value: 'south_korean' },
                  { label: 'Ethiopian', value: 'ethiopian' },
                  { label: 'American', value: 'american' },
                ]"
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Department"
                placeholder="Department"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Preferred Language"
                placeholder="Preferred Language"
                bottomLeftDescription="기본적으로 영어, 한국어, 프랑스어, 독일어, 스페인어가 제공됩니다. 이외 원하는 언어가 있는 경우 적어주세요."
                bottomRightDescription=""
              />
            </div>
          </div>

          <div v-if="selectedIndex == 'Organization'" class="grid-container">
            <!-- Manually define each organizationInfo field -->
            <div class="grid-item">
              <TextField
                class="textfield"
                label="Organization registration number"
                placeholder="Organization registration number"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Organization name"
                placeholder="Organization name"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <br />
              <SelectDropdown
                label="Country"
                :options="[
                  { label: 'South Korea', value: 'south_korean' },
                  { label: 'United States', value: 'united_states' },
                  { label: 'Ethiopia', value: 'ethiopia' },
                  { label: 'Brazil', value: 'brazil' },
                ]"
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Owner"
                placeholder="Owner"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>
          </div>

          <div v-if="selectedIndex == 'Organization'">
            <!-- Manually define each organizationInfo_2 field -->
            <div class="grid-item">
              <TextField
                class="textfield"
                label="Location"
                placeholder="Street, Building Number (Optional)"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label=""
                placeholder="More Address Information (Optional)"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label=""
                placeholder="City / District (Optional)"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>
          </div>

          <div v-if="selectedIndex == 'Organization'" class="grid-container">
            <!-- Manually define each organizationInfo_3 field -->
            <div class="grid-item">
              <br />
              <SelectDropdown
                label="Province"
                :options="[
                  { value: 'province', label: 'Province' },
                  { value: 'province_2', label: 'Province 2' },
                ]"
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Postal or ZIP Code"
                placeholder="Postal or ZIP Code"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Contact"
                placeholder="Contact"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Certificate for business registration"
                placeholder="Certificate for business registration"
                bottomLeftDescription=""
                bottomRightDescription=""
              />
            </div>

            <div class="grid-item">
              <TextField
                class="textfield"
                label="Preferred Language"
                placeholder="Preferred Language"
                bottomLeftDescription="기본적으로 영어, 한국어, 프랑스어, 독일어, 스페인어가 제공됩니다. 이외 원하는 언어가 있는 경우 적어주세요."
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
          <div class="grid-item">
            <TextField
              class="textfield"
              label="Account Name"
              placeholder="Account Name"
              bottomLeftDescription=""
              bottomRightDescription=""
            />
          </div>

          <div class="grid-item">
            <TextField
              class="textfield"
              label="Bank"
              placeholder="Bank"
              bottomLeftDescription=""
              bottomRightDescription=""
            />
          </div>

          <div class="grid-item">
            <TextField
              class="textfield"
              label="Account Number"
              placeholder="Account Number"
              bottomLeftDescription=""
              bottomRightDescription=""
            />
          </div>

          <div class="grid-item">
            <TextField
              class="textfield"
              label="Bank Swift"
              placeholder="Bank Swift"
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
import Card from 'components/molecules/card-component/CardComponent.vue'
import CheckboxButton from '../../../../../../molecules/form-components/checkbox/CheckboxButton.vue'
import TextField from '../../../../../../molecules/form-components/fields/textfield/TextField.vue'
import TextArea from '../../../../../../molecules/form-components/fields/textarea/TextArea.vue'
import SelectedService from '../../../../../../organisms/selected-service/SelectedService.vue'
import SelectDropdown from 'components/molecules/form-components/select-dropdown/SelectDropdown.vue'

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

const emits = defineEmits(['nextStep']) // Define the 'nextStep' event

const moveToStep5 = () => {
  emits('nextStep', 5)
}
</script>

<style lang="scss" scoped>
@import 'NewService4.style.scss';
</style>
