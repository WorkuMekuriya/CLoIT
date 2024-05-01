<template>
  <svg
    :width="avatarSize"
    :height="avatarSize"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5.93005" cy="3.49987" r="2.02526" stroke="#131953" />
    <path
      d="M2.83561 6.34516C4.22998 5.5356 4.34115 6.86656 5.98362 6.86656C7.62609 6.86656 7.61862 5.63032 9.07129 6.34516C10.6559 7.12491 10.0642 10.5509 9.4456 10.5509C7.79603 10.5509 4.0628 10.5509 2.7062 10.5509C1.92485 10.5509 1.32195 7.22398 2.83561 6.34516Z"
      stroke="#131953"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'xl',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
})

const sizeMap = {
  sm: '12px',
  md: '18px',
  lg: '18px',
  xl: '24px',
}

const avatarSize = computed(() => sizeMap[props.size])
</script>
