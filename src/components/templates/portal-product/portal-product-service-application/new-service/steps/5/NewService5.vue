<template>
  <div class="flex justify-around">
    <div class="">
      <div class="selected-service-header-text">Checkout</div>
      <div class="service-section">
        <div class="service-section-container" style="width: 794px">
          <div class="service-header">
            <div class="header-text">Products</div>
            <div class="header-text" style="display: flex;">+$ {{ productTotal }}
              <div class="circle-button-icon" @click="collapsAccordion" style="margin-left: 12px;">
                <q-icon name="expand_more" size="xs" />
              </div>
            </div>
          </div>
          <LiItem v-for="(product, index) in productList" :key="index" :label="product.label" :price="product.price"
            :showLeftButton="product.isLeftIconVisble" :showRightButton="false" />
        </div>
        <div class="options-section">
          <div class="service-header">
            <div class="header-text">Options</div>
            <div class="header-text">+$ {{ optionsTotal }}</div>
          </div>
          <LiItem v-for="(item, index) in options" :key="index" :label="item.label" :price="item.price"
            :showRightButton="false" :showLeftButton="true" />
        </div>
      </div>
      <div class="options-section" style="margin-top: 16px;">
        <div class="service-header">
          <div class="header-text">Additional Discount</div>
          <div class="header-text">+$ {{ optionsTotal }}</div>
        </div>
        <LiItem label="{}" price="+${}" :showRightButton="false" :showLeftButton="true" />
      </div>

      <div class="options-section" style="margin-top: 16px; margin-bottom: 60px;">
        <div class="total-section">
          <div class="total-text">Total</div>
          <div style="display: flex;">
            <TagComponent type='TagGreen' label='USD/mo' :dot="false" size='sm' />
            <div class="total-text" style="margin-left: 16px;">$ {{ total }}</div>
          </div>
        </div>
      </div>
      <div style="margin-bottom: 60px;">
        <div class="section-title">결제방식</div>
        <div style="display: flex; justify-content: space-evenly;">
          <Card :card-list="paymentTypes" @click="toggleSelectInfo(index)" class="card-spacing" />
        </div>
      </div>
      <section v-if="showPaymentInfo" class="section-container q-mt-lg">
        <div class="section-title">정보입력</div>
        <div class="flex q-mb-lg q-mt-md">
          <Card :card-list="additionalInfoCard" @click="toggleSelectInfo(index)" class="card-spacing" />
        </div>
        <TextField class="textfield" label="분납방법" placeholder="분납방법"
          bottomLeftDescription="적어주신 내용 확인 후 계약을 위해 연락드리도록 하겠습니다." bottomRightDescription="" />
      </section>
    </div>
  </div>
  <RoundedButton @click="emitButtonClick" type="Primary" label="이대로 신청" buttonDisabled="false" size="xl"
    buttonWidth="228px" />
</template>

<script setup>
import { ref } from 'vue';
import LiItem from '../../../../../../molecules/li-item/LiItem.vue';
import Card from '../../../../../../molecules/card/Card.vue';
import TagComponent from '../../../../../../molecules/form-components/tag/Tag.vue';
import TextField from '../../../../../../molecules/form-components/fields/textfield/TextField.vue';
import RoundedButton from '../../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue';

const emits = defineEmits(['emitButtonClick'])

const paymentTypes = ref([{
  title: 'Credit/Debit Card',
  size: 'sm'
}, {
  title: 'Connect Stripe',
  size: 'sm'
}, {
  title: 'Connect PayPal',
  size: 'sm'
}]);

const additionalInfoCard = ref([{
  title: '일시납',
  size: 'sm'
}, {
  title: '분납',
  size: 'sm'
}]);

// Define props
defineProps({
  headerText: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: 'Next : Option'
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
  }
});

let showPaymentInfo = ref(false);
const toggleSelectInfo = (index) => {
  if (index == 1) {
    showPaymentInfo.value = true;
  }
}

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

const isProductVisible = true;
const collapsAccordion = () => {
  isProductVisible = !isProductVisible;
}
</script>

<style lang="scss" scoped>
@import 'NewService5.style.scss';
</style>