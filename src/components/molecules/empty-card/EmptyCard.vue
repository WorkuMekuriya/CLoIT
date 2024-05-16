<template>
  <q-card flat class="empty-card flex justify-center items-center">
    <p class="empty-text">아직 준비중입니다</p>
  </q-card>
</template>
<script setup>
const props = defineProps({
  cardText: {
    Type: String,
    default: "아직 준비중입니다"
  },
})
</script>
<style lang="scss" scoped>
@import 'EmptyCard.style.scss';
</style>
