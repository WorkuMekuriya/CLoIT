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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33 16H15C13.8954 16 13 16.8954 13 18V20.1298L35 20.1298V18C35 16.8954 34.1046 16 33 16ZM13 30V21.1298L35 21.1298V30C35 31.1046 34.1046 32 33 32H15C13.8954 32 13 31.1046 13 30ZM16.5508 29.263C17.1888 29.263 17.7061 28.7457 17.7061 28.1077C17.7061 27.4696 17.1888 26.9524 16.5508 26.9524C15.9127 26.9524 15.3955 27.4696 15.3955 28.1077C15.3955 28.7457 15.9127 29.263 16.5508 29.263Z"
        fill="white"
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
      <path
        d="M13 22H35M15 16H33C34.1046 16 35 16.8954 35 18V30C35 31.1046 34.1046 32 33 32H15C13.8954 32 13 31.1046 13 30V18C13 16.8954 13.8954 16 15 16Z"
        stroke="#667085"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="16.5513" cy="28.1079" r="0.928223" fill="#667085" />
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
