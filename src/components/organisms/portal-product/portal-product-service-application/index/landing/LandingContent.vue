<template>
  <div class="landing-content">
    <div class="icon-container flex justify-center">
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
    <div class="row">
      <div class="col-3" v-for="(product, index) in productsCard" :key="index">
        <Card
          class="products-card"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          size="md"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <ConditionalStyleRoundedButton type="Primary" label="신청하기" />
    </div>
  </div>
</template>
<script setup>
import ConditionalStyleRoundedButton from '../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import Card from '../../../../../molecules/card/Card.vue'
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
  },
  {
    title: 'Accreditation',
    description: '{Description}',
    price: '2',
    subscription: 'USD/mo',
  },
  {
    title: 'Sports Entries',
    description: '{Description}',
    price: '3',
    subscription: 'USD/mo',
  },
  {
    title: 'Staff & Volunteers',
    description: '{Description}',
    price: '4',
    subscription: 'USD/mo',
  },
  {
    title: 'Arrival & Departure',
    description: '{Description}',
    price: '5',
    subscription: 'USD/mo',
  },
  {
    title: 'Transportation',
    description: '{Description}',
    price: '6',
    subscription: 'USD/mo',
  },
  {
    title: 'Accomodation',
    description: '{Description}',
    price: '7',
    subscription: 'USD/mo',
  },
  {
    title: 'Uniform',
    description: '{Description}',
    price: '8',
    subscription: 'USD/mo',
  },
]
</script>
<style lang="scss" scoped>
@import 'LandingContent.style.scss';
</style>
