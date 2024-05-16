<template>
  <div class="select-service">
    <div class="row q-gutter-y-xl row-margin-8">
      <div class="col-12 col-md-8 q-pa-sm">
        <div class="select-service">
          <div class="header-text-container">
            <div class="header-title">
              <q-icon name="chevron_left" size="sm" />
              <span>서비스 추가 및 옵션변경</span>
            </div>
            <div class="header-subtitle">
              기존에 사용 중이던 서비스에 상품을 추가하거나 설정된 옵션 변경을
              요청합니다. 기존 계약이 업데이트되므로, 매니저가 해당 내용을 확인
              후 연락드리도록 하겠습니다.
            </div>
          </div>
          <p class="select-text">추가할 서비스 선택</p>
          <div class="tab-component">
            <TabComponent
              :tabs="tabSelection"
              type="circular-with-background"
              :currentValue="currentTab"
              @updateTab="setCurrentTabValue"
              :maxWidth="'304px'"
              containerHeight="60px"
            />
          </div>

          <div class="select-service-row">
            <div class="row card-container row-margin-8">
              <Card
                :cardList="cards"
                :isSingleSelect="false"
                class="card-spacing col-12 col-sm-6 q-pa-sm"
                @card-clicked="handleCardClicked"
              />
            </div>
          </div>
          <div class="centered">
            <LinkButton
              labelTypology="subH-md-med"
              backgroundColor="bg-bluegray-100"
              class="link-button"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 q-pa-sm">
        <div class="selected-service">
          <p class="selected-text">Selected Service</p>
          <SelectedService
            cardWidth="100%"
            :products="products"
            :options="options"
            options-total="{}"
            product-total="{}"
            total="{}"
            @emitButtonClick="moveToStep2"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import LinkButton from '../../../../../../molecules/buttons/link-button/LinkButton.vue'
import Card from 'components/molecules/card-component/CardComponent.vue'
import TabComponent from '../../../../../../molecules/tabs/TabComponent.vue'
import SelectedService from '../../../../../../organisms/selected-service/SelectedService.vue'
const cards = [
  {
    title: 'Portal & Help Desk',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Accreditation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Sports Entries',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Staff & Volunteers',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Arrival & Departure',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Transportation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Accomodation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Uniform',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
]
const products = [
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
  },
]
const options = []
const handleCardClicked = (index) => {
  // Perform any actions you want in response to the card-component being clicked
  console.log('Card clicked:', index)
  // You can also call methods or update data in the parent component based on the card-component click
}
const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const moveToStep2 = () => {
  emits('nextStep', 2)
}
// Tab Selection
const tabSelection = [
  { icon: '', label: '대회관리', tabColor: 'arcticblue' },
  { icon: '', label: '경기 결과', tabColor: 'arcticblue' },
]
let currentTab = ref('대회관리')
const setCurrentTabValue = (value) => {
  currentTab.value = value
}
</script>
<style lang="scss" scoped>
@import 'AddService1.style.scss';
</style>
