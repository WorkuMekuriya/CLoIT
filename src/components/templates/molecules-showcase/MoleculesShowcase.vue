<template>
  <q-page class="">
    <ButtonsShowcase />
    <AvatarShowcase />
    <FormComponents />
  </q-page>
</template>

<script setup>
import ButtonsShowcase from '../../organisms/molecules-showcase/ButtonsShowcase.vue';
import AvatarShowcase from '../../organisms/molecules-showcase/AvatarShowcase.vue'
import FormComponents from '../../organisms/molecules-showcase/FormComponentsShowcase.vue'
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
