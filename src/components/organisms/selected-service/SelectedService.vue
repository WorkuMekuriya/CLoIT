<template>
  <div class="flex w-full">
    <div class="w-full">
      <div class="selected-service-header-text">{{ headerText }}</div>
      <div class="service-section">
        <div class="service-section-container" :style="{ width: cardWidth }">
          <div class="service-header">
            <div class="header-text">Products</div>
            <div class="header-text">+$ {{ productTotal }}</div>
          </div>
          <LiItem
            v-for="(item, index) in products"
            :key="index"
            :label="item.label"
            :price="item.price"
          />
        </div>
        <div class="options-section">
          <div class="service-header">
            <div class="header-text">Options</div>
            <div class="header-text">+$ {{ optionsTotal }}</div>
          </div>
          <LiItem
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :price="item.price"
            :rightIcon="'expand_more'"
          />
          <div v-if="!isCheckout" class="tag-container">
            <TagComponent
              type="TagGreen"
              :label="'USD/mo'"
              :dot="false"
              size="sm"
            />
          </div>
          <div class="total-section">
            <div class="total-text">Total</div>
            <div class="total-text">$ {{ total }}</div>
          </div>
          <div v-if="!isCheckout" class="checkout-info">
            <div>Discounts applied at checkout.</div>
            <div>결제방법에 따라 1회 납입 금액이 달라질 수 있습니다.</div>
          </div>
        </div>
      </div>
      <div v-if="!isCheckout" class="next-button-container">
        <RoundedButton
          @click="emitButtonClick"
          type="Primary"
          :label="label"
          :buttonDisabled="false"
          size="xl"
          buttonWidth="100%"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import LiItem from '../../molecules/li-item/LiItem.vue'
import RoundedButton from '../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import TagComponent from 'components/molecules/form-components/tag-component/TagComponent.vue'
const emits = defineEmits(['emitButtonClick'])
// Define props
defineProps({
  headerText: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Next : Option',
  },
  products: {
    type: Array,
    default: () => [],
  },
  options: {
    type: Array,
    default: () => [],
  },
  productTotal: {
    type: String,
    default: '{}',
  },
  optionsTotal: {
    type: String,
    default: '{}',
  },
  total: {
    type: String,
    default: '{}',
  },
  cardWidth: {
    type: String,
    default: '389px',
  },
  isCheckout: {
    type: Boolean,
    default: false,
  },
})

// Method to emit the 'clicked' event
const emitButtonClick = () => {
  emits('emitButtonClick')
}
</script>

<style lang="scss" scoped>
@import 'SelectedService.style.scss';
</style>
