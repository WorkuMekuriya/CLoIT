<template>
  <div class="checkout-page">
    <div class="selected-service-header-text">Checkout</div>
    <div class="service-section">
      <div class="service-section-container">
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
        :label="'{}'"
        price="+${}"
        :showRightButton="false"
        :showLeftButton="true"
      />
    </div>

    <div class="options-section" style="margin-top: 16px; margin-bottom: 60px">
      <div class="total-section">
        <div class="total-text">Total</div>
        <div style="display: flex">
          <TagComponent
            type="TagGreen"
            :label="'USD/mo'"
            :dot="false"
            size="sm"
          />
          <div class="total-text" style="margin-left: 16px">$ {{ total }}</div>
        </div>
      </div>
    </div>
    <div style="margin-bottom: 60px">
      <div class="selected-service-header-text">결제방식</div>
      <div class="row row-margin-8">
        <Card
          :card-list="paymentTypes"
          @card-clicked="toggleSelectInfo"
          class="card-spacing col-6 col-sm-4 q-pa-sm"
        />
      </div>
    </div>
    <section v-if="showPaymentInfo" class="section-container q-mt-lg">
      <div class="selected-service-header-text">정보입력</div>
      <div class="row q-mb-lg q-mt-md row-margin-8">
        <Card :card-list="additionalInfoCard" class="card-spacing col-6 col-sm-4 col-md-3 q-pa-sm" />
      </div>
      <TextField
        class="textfield"
        :label="'분납방법'"
        :placeholder="'분납방법'"
        :bottomLeftDescription="'적어주신 내용 확인 후 계약을 위해 연락드리도록 하겠습니다.'"
        :bottomRightDescription="''"
      />
    </section>
  </div>
  <div class="flex justify-center">
    <RoundedButton
      type="Primary"
      :label="'이대로 신청'"
      :buttonDisabled="false"
      size="xl"
      buttonWidth="228px"
      @click="addPaymentMethod"
    />
  </div>
  <DialogComponent />
</template>

<script setup>
import { ref } from 'vue'
import LiItem from '../../../../../../molecules/li-item/LiItem.vue'
import Card from 'components/molecules/card-component/CardComponent.vue'
import TagComponent from 'components/molecules/form-components/tag-component/TagComponent.vue'
import TextField from '../../../../../../molecules/form-components/fields/textfield/TextField.vue'
import RoundedButton from '../../../../../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'

// Dialog Imports
import EditCreditIcon from '../../../../../../atoms/Icons/my-page-icons/EditCreditIcon.vue'
import AlertStandardIcon from '../../../../../../atoms/Icons/alert-icons/AlertStandardIcon.vue'
import AddCardDialog from '../../../../../../organisms/portal-product/portal-product-service-application/new-service/add-card-dialog/AddCardDialog.vue'
import DialogComponent from '../../../../../../molecules/dialog/DialogComponent.vue'
import StripeDialog from '../../../../../../organisms/portal-product/portal-product-service-application/new-service/stripe-dialog/StripeDialog.vue'
import { useDialogStore } from '../../../../../../../stores/dialog-store.js'
import { markRaw } from 'vue'
const dialogStore = useDialogStore()

const emits = defineEmits(['nextStep'])

const paymentTypes = ref([
  {
    title: 'Credit/Debit Card',
    size: 'sm',
  },
  {
    title: 'Connect Stripe',
    size: 'sm',
  },
  {
    title: 'Connect PayPal',
    size: 'sm',
  },
])

const additionalInfoCard = ref([
  {
    title: '일시납',
    size: 'sm',
  },
  {
    title: '분납',
    size: 'sm',
  },
])

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
  // options: {
  //   type: Array,
  //   default: () => [],
  // },
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

let showPaymentInfo = ref(false)
const toggleSelectInfo = (card) => {
  if (card[0].title == 'Credit/Debit Card') {
    showPaymentInfo.value = true
  } else showPaymentInfo.value = false
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

const isProductVisible = true
const collapsAccordion = () => {
  isProductVisible = !isProductVisible
}

// Dialog Component - Credit Card / Debit Card
const creditCardComponent = markRaw(AddCardDialog)
const stripeComponent = markRaw(StripeDialog)
const leftIconCard = markRaw(EditCreditIcon)
const leftIconStripe = markRaw(AlertStandardIcon)
const addPaymentMethod = () => {
  if (showPaymentInfo.value) {
    // Pass DialogComponent properties to store
    dialogStore.setInnerComponent(creditCardComponent)
    dialogStore.setDialogWidth('524px')
    dialogStore.setDialogHeight('768px')
    dialogStore.setLeftIconComponent(leftIconCard)

    dialogStore.openDialog()
  } else if (!showPaymentInfo.value) {
    // Pass DialogComponent properties to store
    dialogStore.setInnerComponent(stripeComponent)
    dialogStore.setDialogWidth('400px')
    dialogStore.setDialogHeight('353px')
    dialogStore.setLeftIconComponent(leftIconStripe)

    dialogStore.openDialog()
  }
}
</script>

<style lang="scss" scoped>
@import 'NewService5.style.scss';
</style>
