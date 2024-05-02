<template>
  <div class="landing-content">
    <div
      v-if="currentTab == '대회관리'"
      class="icon-container flex justify-center"
    >
      <q-icon
        v-for="(icon, index) in icons"
        :key="index"
        :name="icon.name"
        class="icon"
      ></q-icon>
    </div>
    <p class="title text-center">Products</p>
    <p class="sub-title text-center">
      원하는 서비스를 선택해 나만의 패키지를 구성할 수 있습니다
    </p>

    <div class="flex justify-center tab-container">
      <TabComponent
        :tabs="tabSelection"
        type="circular-with-background"
        :currentValue="currentTab"
        @updateTab="setCurrentTabValue"
        :maxWidth="'304px'"
      />
    </div>
    <div v-if="currentTab == '대회관리'">
      <div class="flex card-container">
        <Card
          :cardList="productsCard"
          :isSingleSelect="false"
          class="products-card"
          size="md"
        />
      </div>
      <div class="flex justify-center card-button">
        <ConditionalStyleRoundedButton type="Primary" label="신청하기" />
      </div>
      <div class="flex justify-center">
        <div class="link-button">
          <LinkButton
            labelTypology="subH-md-med"
            backgroundColor="bg-bluegray-100"
          />
        </div>
      </div>
    </div>
    <div v-if="currentTab == '경기 결과'">
      <div class="flex card-container">
        <EmptyCard />
      </div>
      <div class="flex justify-center card-button">
        <ConditionalStyleRoundedButton type="Secondary" label="신청하기" />
      </div>
      <div class="flex justify-center">
        <div class="link-button">
          <LinkButton
            labelTypology="subH-md-med"
            backgroundColor="bg-bluegray-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ConditionalStyleRoundedButton from '../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import LinkButton from '../../../../../../components/molecules/buttons/link-button/LinkButton.vue'
import Card from '../../../../../molecules/card/Card.vue'
import EmptyCard from '../../../../../molecules/empty-card/EmptyCard.vue'
import TabComponent from '../../../../../molecules/tabs/TabComponent.vue'
const icons = [
  { name: 'panorama_fish_eye', background: '', iconColor: '' },
  { name: 'panorama_fish_eye', background: '', iconColor: '' },
  { name: 'panorama_fish_eye', background: '', iconColor: '' },
]
const productsCard = [
  {
    title: 'Portal & Help Desk',
    description: '{Description}',
    price: '1',
    size: 'md',
  },
  {
    title: 'Accreditation',
    description: '{Description}',
    price: '2',
    subscription: 'USD/mo',
    size: 'md',
  },
  {
    title: 'Sports Entries',
    description: '{Description}',
    price: '3',
    subscription: 'USD/mo',
    size: 'md',
    width: '288px',
    height: '228px',
  },
  {
    title: 'Staff & Volunteers',
    description: '{Description}',
    price: '4',
    subscription: 'USD/mo',
    size: 'md',
    width: '288px',
    height: '228px',
  },
  {
    title: 'Arrival & Departure',
    description: '{Description}',
    price: '5',
    subscription: 'USD/mo',
    size: 'md',
    width: '288px',
    height: '228px',
  },
  {
    title: 'Transportation',
    description: '{Description}',
    price: '6',
    subscription: 'USD/mo',
    size: 'md',
    width: '288px',
    height: '228px',
  },
  {
    title: 'Accomodation',
    description: '{Description}',
    price: '7',
    subscription: 'USD/mo',
    size: 'md',
    width: '288px',
    height: '228px',
  },
  {
    title: 'Uniform',
    description: '{Description}',
    price: '8',
    subscription: 'USD/mo',
    size: 'md',
    width: '288px',
    height: '228px',
  },
]

// Tab Selection
const tabSelection = [
  { icon: '', label: '대회관리', tabColor: 'arcticblue' },
  { icon: '', label: '경기 결과', tabColor: 'bluegray' },
]
let currentTab = ref('대회관리')

const setCurrentTabValue = (value) => {
  currentTab.value = value
}
</script>
<style lang="scss" scoped>
@import 'LandingContent.style.scss';
</style>
