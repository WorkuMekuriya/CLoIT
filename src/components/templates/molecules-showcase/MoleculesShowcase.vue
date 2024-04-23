<template>
  <q-page class="">
    <ButtonsShowcase />
  </q-page>
</template>

<script setup>
import ButtonsShowcase from '../../organisms/molecules-showcase/ButtonsShowcase.vue';
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
