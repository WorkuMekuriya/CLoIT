<template>
  <div class="select-service">
    <div class="row">
      <div class="col-8">
        <div class="select-service">
          <p class="select-text">Select Service</p>
          <div class="select-service-row">
            <div class="flex card-container">
              <Card
                :cardList="cards"
                :isSingleSelect="false"
                class="card-spacing"
                @card-clicked="handleCardClicked"
              />
            </div>
          </div>
          <LinkButton
            labelTypology="subH-md-med"
            backgroundColor="bg-bluegray-100"
            class="link-button"
          />
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
            @emitButtonClick="moveToStep3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import LinkButton from '../../../../../../molecules/buttons/link-button/LinkButton.vue'
import Card from '../../../../../../molecules/card/Card.vue'
import SelectedService from '../../../../../../organisms/selected-service/SelectedService.vue'
const cards = [
  {
    title: 'Portal & Help Desk',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
    height: '240px',
  },
  {
    title: 'Accreditation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
    height: '240px',
  },
  {
    title: 'Sports Entries',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
    height: '240px',
  },
  {
    title: 'Staff & Volunteers',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
    height: '240px',
  },
  {
    title: 'Arrival & Departure',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
    height: '240px',
  },
  {
    title: 'Transportation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
    height: '240px',
  },
  {
    title: 'Accomodation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
    height: '240px',
  },
  {
    title: 'Uniform',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
    size: 'lg',
    width: '389px',
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
  // Perform any actions you want in response to the card being clicked
  console.log('Card clicked:', index)
  // You can also call methods or update data in the parent component based on the card click
}
const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const moveToStep3 = () => {
  emits('nextStep', 3)
}
</script>
<style lang="scss" scoped>
@import 'NewService2.style.scss';
</style>
