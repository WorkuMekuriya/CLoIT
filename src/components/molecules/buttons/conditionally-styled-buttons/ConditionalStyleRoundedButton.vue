<template>
  <div class="flex justify-center">
    <div class="flex justify-center">
      <q-btn
      :style="{ width: buttonWidth }"
        :disable="buttonDisabled"
        :ripple="false"
        :loading="isLoading"
        class="rounded-button"
        :class="[buttonClass, { loading: isLoading }, { 'set-button-with-icon-width': leftIcon || rightIcon }]"
        unelevated
        :push="false"
        no-caps
        @click="emitClicked"
      >
        <!-- Slot for left icon -->
        <template v-if="leftIcon">
          <q-icon :name="leftIcon" class="button-icon left-icon" />
        </template>
        <!-- Default slot content -->
        <slot>
          {{ label }}
        </slot>
        <!-- Slot for right icon -->
        <template v-if="rightIcon">
          <q-icon name="east" class="button-icon right-icon" />
        </template>
        <template #loading>
          <Spinner class="spinner" />
        </template>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Spinner from '../../../../components/atoms/Icons/ButtonLoadingSpinner.vue'
const buttonClasses = {
  Primary: 'button-primary',
  Secondary: 'button-secondary',
  TertiaryLined: 'button-tertiary-lined',
  TertiaryWhite: 'button-tertiary-white',
  TertiaryTonal: 'button-tertiary-tonal',
  Destructive: 'button-destructive',
  // Add more button types here if needed
}
const props = defineProps({
  type: {
    type: String,
    default: 'Secondary',
  },
  leftIcon: {
    type: String,
    default: '',
  }, // Prop for left icon name
  rightIcon: {
    type: Boolean,
    default: false, // Default right icon
  },
  label: {
    type: String,
    default: 'Primary Button',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  buttonDisabled: {
    type: Boolean,
    default: false,
  },
  buttonWidth: {
    type: String,
    default: ''
  },
   size: {
    type: String,
    validator: (value) => ['sm', 'xl'].includes(value),
    default: 'xl'
  }
})

const emits = defineEmits(['clicked']) // Define the 'clicked' event

const buttonClass = computed(() => {
  let classList = [buttonClasses[props.type] || buttonClasses['Primary']]
  if (props.size === 'sm') {
    classList.push('small-size-button')
  }
  return classList.join(' ')
})

// Method to emit the 'clicked' event
const emitClicked = () => {
  emits('clicked')
}
</script>

<style lang="scss" scoped>
@import 'Button.styles.scss';
</style>
