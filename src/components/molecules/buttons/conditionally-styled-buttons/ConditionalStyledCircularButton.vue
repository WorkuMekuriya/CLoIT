<template>
  <q-btn
    :disable="buttonDisabled"
    :ripple="false"
    class="circular-button"
    :class="buttonClass"
    :icon="icon"
    unelevated
    @click="emitClicked"
  >
  </q-btn>
</template>

<script setup>
import { ref, computed } from 'vue'
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
  buttonDisabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: (value) => ['sm', 'xl'].includes(value),
    default: 'xl',
  },
  icon: {
    type: String,
    default: 'east',
  },
})
const emits = defineEmits(['clicked'])

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
