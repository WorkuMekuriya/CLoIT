<template>
  <div class="flex justify-around">
    <div class="">
      <div class="selected-service-header-text">Checkout</div>
      <div class="service-section">
        <div class="service-section-container" style="width: 794px">
          <div class="service-header">
            <div class="header-text">Products</div>
            <div class="header-text" style="display: flex">
              +$ {{ productTotal }}
              <div
                class="circle-button-icon"
                @click="collapsAccordion"
                style="margin-left: 12px"
              >
                <q-icon name="expand_more" size="xs" />
              </div>
            </div>
          </div>
          <LiItem
            v-for="(product, index) in productList"
            :key="index"
            :label="product.label"
            :price="product.price"
            :showLeftButton="product.isLeftIconVisble"
            :showRightButton="false"
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
            :showRightButton="false"
            :showLeftButton="true"
          />
        </div>
      </div>
      <div class="options-section" style="margin-top: 16px">
        <div class="service-header">
          <div class="header-text">Additional Discount</div>
          <div class="header-text">+$ {{ optionsTotal }}</div>
        </div>
        <LiItem
          label="{}"
          price="+${}"
          :showRightButton="false"
          :showLeftButton="true"
        />
      </div>

      <div
        class="options-section"
        style="margin-top: 16px; margin-bottom: 60px"
      >
        <div class="total-section">
          <div class="total-text">Total</div>
          <div style="display: flex">
            <TagComponent
              type="TagGreen"
              label="USD/mo"
              :dot="false"
              size="sm"
            />
            <div class="total-text" style="margin-left: 16px">
              $ {{ total }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RoundedButton
    type="Primary"
    label="이대로 신청"
    :buttonDisabled="false"
    size="xl"
    buttonWidth="228px"
    @click="navigateToPage('payment-full-done')"
  />
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import LiItem from '../../../../../../molecules/li-item/LiItem.vue'
import TagComponent from 'components/molecules/form-components/tag-component/TagComponent.vue'
import RoundedButton from '../../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'

const navigateToPage = (routeName) => {
  console.log(routeName)
  router.push({ name: routeName })
}

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
})

const productList = [
  { label: 'Portal & Help Desk', price: '$ {}', isLeftIconVisble: true },
  { label: 'Base', price: '$ {}', isLeftIconVisble: false },
  { label: 'Option 적용', price: '$ {}', isLeftIconVisble: false },
  { label: 'Discount', price: '$ {}', isLeftIconVisble: false },

  { label: 'Accreditation', price: '$ {}', isLeftIconVisble: true },
  { label: 'Base', price: '$ {}', isLeftIconVisble: false },
  { label: 'Option 적용', price: '$ {}', isLeftIconVisble: false },
  { label: 'Discount', price: '$ {}', isLeftIconVisble: false },

  { label: 'Sports Entries', price: '$ {}', isLeftIconVisble: true },
  { label: 'Base', price: '$ {}', isLeftIconVisble: false },
  { label: 'Option 적용', price: '$ {}', isLeftIconVisble: false },
  { label: 'Discount', price: '$ {}', isLeftIconVisble: false },
]

const options = [
  { label: '3 Months', price: '+${}' },
  { label: '50 People', price: '+${}' },
  { label: '3 Games', price: '+${}' },
]

const isProductVisible = true
const collapsAccordion = () => {
  isProductVisible = !isProductVisible
}
</script>

<style lang="scss" scoped>
@import 'AddService3.style.scss';
</style>
