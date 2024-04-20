<template>
  <div class="flex justify-center">
    <div class="flex justify-center">
      <q-btn
        :disable="buttonDisabled"
        :ripple="false"
        :loading="isLoading"
        class="rounded-button"
        :class="[buttonClass, { loading: isLoading }]"
        unelevated
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
import Spinner from '../../../components/atoms/Icons/ButtonLoadingSpinner.vue'
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
    default: 'Primary',
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
})

const buttonClass = computed(() => {
  // Set additional CSS classes based on type
  return buttonClasses[props.type] || buttonClasses['Primary']
})

// Method to emit the 'clicked' event
const emitClicked = () => {
  emits('clicked')
}
</script>

<style lang="scss" scoped>
@import 'Button.styles.scss';
</style>
