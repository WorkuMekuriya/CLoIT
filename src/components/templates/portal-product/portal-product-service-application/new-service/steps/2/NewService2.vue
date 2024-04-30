<template>
  <div class="select-service">
    <div class="row">
      <div class="col-8">
        <div class="select-service">
          <p class="select-text">Select Service</p>
          <div class="row select-service-row">
            <div
              class="col-6 card-container"
              v-for="(card, index) in cards"
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
import Card from '../../../../../../molecules/card/Card.vue'
import SelectedService from '../../../../../../organisms/selected-service/SelectedService.vue'
const cards = [
  {
    title: 'Portal & Help Desk',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
  },
  {
    title: 'Accreditation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
  },
  {
    title: 'Sports Entries',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
  },
  {
    title: 'Staff & Volunteers',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
  },
  {
    title: 'Arrival & Departure',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
  },
  {
    title: 'Transportation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
  },
  {
    title: 'Accomodation',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
    subscription: 'USD/mo',
  },
  {
    title: 'Uniform',
    description: '어쩌구저쩌구가 포함되어있습니다.',
    price: '$ {}',
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
const options = [

]
const getSelectedCard = (card) => {
  console.log(card)
}
const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const moveToStep3 = () => {
  emits('nextStep', 3);
}
</script>
<style lang="scss" scoped>
@import 'NewService2.style.scss';
</style>
