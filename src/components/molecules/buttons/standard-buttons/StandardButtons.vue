<template>
  <div>

  </div>
</template>
<script setup>
const buttonClasses = {
  ArcticBlueFull: 'button-primary',
  ArcticBlueOutlined: 'button-secondary',
  ArcticBlueFullLeft: 'button-tertiary-lined',
  ArcticBlueOutlinedLeft: 'button-tertiary-white',
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
    default: 'xl'
  }
})
</script>
