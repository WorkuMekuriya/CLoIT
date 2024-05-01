<template>
  <q-dialog
    class="alert-dialog"
    v-model="getShowAlert"
    seamless
    :position="position"
  >
    <q-card
      class="alert-dialog-card flex items-center"
      :style="{
        width: setWidth,
        height: setheight,
        bottom: position == 'bottom' ? '10px' : '',
      }"
    >
      <component class="left-icon" :is="getAlertIconComponent" />
      <div class="text-and-description">
        <p class="alert-text">{{ alertText }}</p>
        <p class="description-text">{{ description }}</p>
      </div>
      <q-space />
      <AlertCloseIcon class="close-icon" @click="$emit('close')" />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import AlertErrorIcon from '../../atoms/Icons/alert-icons/AlertErrorIcon.vue'
import AlertStandardIcon from '../../atoms/Icons/alert-icons/AlertStandardIcon.vue'
import AlertSuccessIcon from '../../atoms/Icons/alert-icons/AlertSuccessIcon.vue'
import AlertWarningIcon from '../../atoms/Icons/alert-icons/AlertWarningIcon.vue'
import AlertCloseIcon from '../../atoms/Icons/alert-icons/AlertCloseIcon.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'Success',
    validator: (value) =>
      ['Standard', 'Warning', 'Success', 'Error'].includes(value),
  },
  showAlert: {
    type: Boolean,
    default: true,
  },
  setWidth: {
    type: String,
    default: '361px',
  },
  setheight: {
    type: String,
    default: '56px',
  },
  alertText: {
    type: String,
    default: 'Alert text',
  },
  description: {
    type: String,
    default: 'Description',
  },
  position: {
    type: String,
    default: 'bottom',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value),
  },
})

const getShowAlert = computed(() => props.showAlert)

// Dynamically determine the icon component based on the type prop
const getAlertIconComponent = computed(() => {
  switch (props.type) {
    case 'Standard':
      return AlertStandardIcon
    case 'Warning':
      return AlertWarningIcon
    case 'Success':
      return AlertSuccessIcon
    default:
      return AlertErrorIcon
  }
})
</script>

<style lang="scss" scoped>
@import 'AlertDialog.style.scss';
</style>
