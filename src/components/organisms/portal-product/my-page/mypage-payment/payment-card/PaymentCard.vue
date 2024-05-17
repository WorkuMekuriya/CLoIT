<template>
  <div class="payment-card">
    <div class="flex justify-between items-center no-wrap">
      <div>
        <div class="flex items-center">
          <p class="payment-text">{{ paymentMethod }}</p>
        </div>
      </div>
      <div class="flex items-center no-wrap q-ml-md">
        <EditIcon @click="editCard" />
        <TrashIcon class="q-ml-sm" />
      </div>
    </div>
    <div class="card-details flex items-center">
      <p class="card-text">{{ cardName }}</p>
      <Tag
        v-if="cardTag.hasTag"
        :label="cardTag.tagLabel"
        size="md"
        :type="cardTag.tagType"
      />
    </div>
    <DialogComponent />
  </div>
</template>

<script setup>
import Tag from 'components/molecules/form-components/tag-component/TagComponent.vue'
import EditIcon from '../../../../../atoms/Icons/my-page-icons/EditIcon.vue'
import TrashIcon from '../../../../../atoms/Icons/my-page-icons/TrashIcon.vue'

// Dialog Imports
import EditCreditIcon from '../../../../../atoms/Icons/my-page-icons/EditCreditIcon.vue'
import EditPaymentCardDialog from '../edit-payment-card-dialog/EditPaymentCardDialog.vue'
import DialogComponent from '../../../../../molecules/dialog/DialogComponent.vue'
import { useDialogStore } from '../../../../../../stores/dialog-store.js'
import { markRaw } from 'vue'

defineProps({
  paymentMethod: {
    type: String,
    default: 'PayPal',
  },
  cardTag: {
    type: Object,
    default: () => ({
      tagType: '',
      hasTag: false, // Set to boolean value
      tagLabel: '',
    }),
  },
  cardName: {
    type: String,
    default: 'Visa0708',
  },
})
// Dialog Component
const dialogStore = useDialogStore()
const innerComponent = markRaw(EditPaymentCardDialog)
const leftIcon = markRaw(EditCreditIcon)
const editCard = () => {
  console.log('read')
  // Pass DialogComponent properties to store
  dialogStore.setInnerComponent(innerComponent)
  dialogStore.setDialogWidth('524px')
  dialogStore.setDialogHeight('768px')
  dialogStore.setLeftIconComponent(leftIcon)

  dialogStore.openDialog()
}
</script>

<style lang="scss" scoped>
@import 'PaymentCard.style.scss';
</style>
