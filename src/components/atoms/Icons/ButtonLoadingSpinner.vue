<template>
  <svg
    class="spinner"
    width="19"
    height="20"
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M9.49935 1.66602V4.99935M9.49935 14.9993V18.3327M3.60768 4.10768L5.96602 6.46602M13.0327 13.5327L15.391 15.891M1.16602 9.99935H4.49935M14.4993 9.99935H17.8327M3.60768 15.891L5.96602 13.5327M13.0327 6.46602L15.391 4.10768"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
