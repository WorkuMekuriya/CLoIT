<template>
  <div class="select-options">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-12">
            <div class="select-service">
              <p class="select-text">Duration</p>
              <div class="row select-service-row">
                <div
                  class="col-6 card-container"
                  v-for="(card, index) in duration"
                  :key="index"
                >
                  <Card
                    :title="card.title"
                    size="lg"
                    :description="card.description"
                    :price="card.price"
                    :subscription="card.subscription"
                    :style="{ width: '390px', height: '240px' }"
                    @toggle-card="getSelectedCard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row scale-row">
          <div class="col-12">
            <div class="select-service">
              <p class="select-text">규모</p>
              <div class="row select-service-row">
                <div
                  class="col-6 card-container"
                  v-for="(card, index) in scale"
                  :key="index"
                >
                  <Card
                    :title="card.title"
                    size="lg"
                    :description="card.description"
                    :price="card.price"
                    :subscription="card.subscription"
                    :style="{ width: '390px', height: '240px' }"
                    @toggle-card="getSelectedCard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row games-row">
          <div class="col-12">
            <div class="select-service">
              <p class="select-text">Games</p>
              <div class="row select-service-row">
                <div
                  class="col-6 card-container"
                  v-for="(card, index) in games"
                  :key="index"
                >
                  <Card
                    :title="card.title"
                    size="lg"
                    :description="card.description"
                    :price="card.price"
                    :subscription="card.subscription"
                    :style="{ width: '390px', height: '240px' }"
                    @toggle-card="getSelectedCard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="selected-service">
          <p class="selected-text">Selected Service</p>
          <SelectedService
            :products="products"
            :options="options"
            options-total="{}"
            product-total="{}"
            total="{}"
            label="Next : Your Information"
            @emitButtonClick="moveToStep3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from '../../../../../../molecules/card/Card.vue'
import SelectedService from '../../../../../../organisms/selected-service/SelectedService.vue'
const duration = [
  {
    title: '3 Months',
    description: '',
    price: 'No Discount',
    subscription: 'USD/mo',
  },
  {
    title: '6 Months',
    description: '',
    price: '10% Discount',
    subscription: 'USD/mo',
  },
  {
    title: '12 Months',
    description: '',
    price: '20% Discount',
    subscription: 'USD/mo',
  },
  {
    title: 'Over 1 year',
    description: '',
    price: '별도협의',
    subscription: 'USD/mo',
  },
]
const scale = [
  {
    title: '50 People',
    description: '',
    price: 'Free',
    subscription: 'USD/mo',
  },
  {
    title: '500 People',
    description: '',
    price: '$ 10,000',
    subscription: 'USD/mo',
  },
  {
    title: '5,000 People',
    description: '',
    price: '$ 30,000',
    subscription: 'USD/mo',
  },
  {
    title: '5,000~',
    description: '',
    price: '$ 70,000',
    subscription: 'USD/mo',
  },
]
const games = [
  {
    title: 'Up to 3 Games',
    description: '',
    price: 'Free',
    subscription: 'USD/mo',
  },
  {
    title: 'Up to 6 Games',
    description: '',
    price: '$ 10,000',
    subscription: 'USD/mo',
  },
  {
    title: 'Up to 10 Games',
    description: '',
    price: '$ 20,000',
    subscription: 'USD/mo',
  },
  {
    title: 'Up to 11 Games',
    description: '',
    price: '$ 30,000',
    subscription: 'USD/mo',
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
const getSelectedCard = (card) => {
  console.log(card)
}
const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const moveToStep3 = () => {
  emits('nextStep', 3)
}
</script>
<style lang="scss" scoped>
@import 'NewService3.style.scss';
</style>
