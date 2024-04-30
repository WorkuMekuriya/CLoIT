<template>
  <div>
    <svg
      v-if="getActive"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#253BFF" />
      <circle cx="24.0004" cy="23.9984" r="10.1781" fill="white" />
      <path
        d="M21.9531 20.5862C22.2836 19.7599 23.4102 19.5195 23.9512 19.5195C24.4922 19.5195 25.9342 19.7148 26.0394 20.9768C26.1679 22.5188 24.7686 22.8699 24.1465 23.6809C23.6429 24.3373 23.7358 25.053 23.7559 25.3184"
        stroke="#101828"
        stroke-linecap="round"
      />
      <circle
        cx="23.8459"
        cy="27.843"
        r="0.5"
        fill="#101828"
        stroke="#101828"
        stroke-width="0.27975"
      />
    </svg>

    <svg
      v-else
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#F9FAFB" />
      <circle cx="24.0004" cy="23.9984" r="9.67809" stroke="#667085" />
      <path
        d="M21.9531 20.5862C22.2836 19.7599 23.4102 19.5195 23.9512 19.5195C24.4922 19.5195 25.9342 19.7148 26.0394 20.9768C26.1679 22.5188 24.7686 22.8699 24.1465 23.6809C23.6429 24.3373 23.7358 25.053 23.7559 25.3184"
        stroke="#667085"
        stroke-linecap="round"
      />
      <circle cx="23.8459" cy="27.843" r="0.639875" fill="#667085" />
    </svg>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
const getActive = computed(() => props.active)
</script>
