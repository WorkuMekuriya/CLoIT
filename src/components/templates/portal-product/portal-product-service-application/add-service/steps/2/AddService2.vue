<template>
  <div class="select-options">
    <div class="row q-gutter-y-xl row-margin-8">
      <div class="col-12 col-md-8 q-pa-sm">
        <div class="row">
          <div class="col-12">
            <div class="select-service">
              <p class="select-text"><q-icon name="chevron_left" size="sm" /><span>Duration</span></p>
              <div class="select-service-row">
                <div class="row card-container row-margin-8">
                  <Card :cardList="duration" class="col-12 col-sm-6 q-pa-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row scale-row">
          <div class="col-12">
            <div class="select-service">
              <p class="select-text">규모</p>
              <div class="select-service-row">
                <div class="row card-container row-margin-8">
                  <Card :cardList="scale" class="col-12 col-sm-6 q-pa-sm" />
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
                <div class="row card-container row-margin-8">
                  <Card :cardList="games" class="col-12 col-sm-6 q-pa-sm" />
                </div>
              </div>
            </div>
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
            :options-total="'{}'"
            :product-total="'{}'"
            :total="'{}'"
            :label="'Next : Your Information'"
            @emitButtonClick="moveToStep3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from 'components/molecules/card-component/CardComponent.vue'
import SelectedService from '../../../../../../organisms/selected-service/SelectedService.vue'
const duration = [
  {
    title: '3 Months',
    description: '',
    price: 'No Discount',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: '6 Months',
    description: '',
    price: '10% Discount',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: '12 Months',
    description: '',
    price: '20% Discount',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Over 1 year',
    description: '',
    price: '별도협의',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
]
const scale = [
  {
    title: '50 People',
    description: '',
    price: 'Free',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: '500 People',
    description: '',
    price: '$ 10,000',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: '5,000 People',
    description: '',
    price: '$ 30,000',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: '5,000~',
    description: '',
    price: '$ 70,000',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
]
const games = [
  {
    title: 'Up to 3 Games',
    description: '',
    price: 'Free',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Up to 6 Games',
    description: '',
    price: '$ 10,000',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Up to 10 Games',
    description: '',
    price: '$ 20,000',
    subscription: 'USD/mo',
    size: 'lg',
    width: '',
    height: '240px',
  },
  {
    title: 'Up to 11 Games',
    description: '',
    price: '$ 30,000',
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
    width: '',
    height: '240px',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
    width: '',
    height: '240px',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
    width: '',
    height: '240px',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',
    width: '',
    height: '240px',
  },
  {
    label: 'Portal & Help Desk',
    price: '${}/mo',

    width: '',
    height: '240px',
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
@import 'AddService2.style.scss';
</style>
