<template>
  <div class="q-mb-xl">
    <h1 class="heading-3 text-limegreen-900 text-center">Card</h1>
    <template v-for="(cardGroup, index) in cardGroups" :key="index">
      <div class="flex justify-around q-mx-xl q-mb-xl">
        <template v-for="(card, cardIndex) in cardGroup.cards" :key="cardIndex">
          <component :is="card.component" :cardList="card.props" />
        </template>
      </div>
    </template>
  </div>
  <div class="q-mb-xl">
    <h1 class="heading-3 text-limegreen-900 text-center">Multi Select Card</h1>
    <div class="flex justify-around q-mx-xl q-mb-xl">
      <Card :cardList="infoCard" :isSingleSelect="false" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'components/molecules/card-component/CardComponent.vue'

const cardGroups = [
  {
    cards: [
      {
        component: Card,
        props: [
          {
            title: 'Portal & Help Desk',
            description: '어쩌구저쩌구가 포함되어있습니다.',
            price: '$ {}',
            subscription: 'USD/mo',
            size: 'lg',
          },
          {
            title: 'Portal & Help Desk',
            description: '{Description}',
            price: '1',
            size: 'md',
          },
          {
            title: 'Organization',
            size: 'sm',
          },
        ],
      },
    ],
  },
]

const infoCard = ref([
  {
    title: 'Portal & Help Desk',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
  },
  {
    title: 'Portal & Help Desk',
    description: '{Description}',
    price: '1',
    size: 'md',
  },
  {
    title: 'Organization',
    size: 'sm',
  },
])

// Define a reactive property to track the selected index
const selectedIndex = ref(null)

// Function to handle card-component selection
function toggleSelect(index) {
  selectedIndex.value = index
}
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
