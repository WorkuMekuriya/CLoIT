<template>
  <div>
    <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
      Selected Service
    </h1>
    <div class="flex justify-center q-mt-xl">
      <SelectedService
        :products="products"
        :options="options"
        options-total="{}"
        product-total="{}"
        total="{}"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectedService from '../../organisms/selected-service/SelectedService.vue'

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
  {
    label: '3 Months',
    price: '+${}',
  },
  {
    label: 'Portal & Help Desk',
    price: '+${}',
  },
  {
    label: 'Portal & Help Desk',
    price: '+${}',
  },
  {
    label: 'Portal & Help Desk',
    price: '+${}',
  },
  {
    label: 'Portal & Help Desk',
    price: '+${}',
  },
]
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
