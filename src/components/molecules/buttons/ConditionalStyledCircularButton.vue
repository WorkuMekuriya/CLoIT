<template>

   <div class="flex justify-center">
    <q-btn :disable="buttonDisabled" :ripple="false" class="circular-button" :class="buttonClass" icon="east"  unelevated>
    </q-btn>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const buttonClasses = {
  Primary: 'button-primary',
  Secondary: 'button-secondary',
  TertiaryLined: 'button-tertiary-lined',
  TertiaryWhite: 'button-tertiary-white',
  TertiaryTonal: 'button-tertiary-tonal',
  Destructive: 'button-destructive',
  // Add more button types here if needed
};
const props = defineProps({
  type: {
    type: String,
    default: 'Primary'
  },
  buttonDisabled: {
    type: Boolean,
    default: false
  }
});


const buttonClass = computed(() => {
  // Set additional CSS classes based on type
   return buttonClasses[props.type] || buttonClasses['Primary'];
});
</script>

<style lang="scss" scoped>
@import 'Button.styles.scss';
</style>
