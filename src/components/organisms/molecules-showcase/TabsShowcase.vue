<template>
  <div class="q-mb-xl">
    <h1 class="display-3 text-limegreen-900 text-center q-mx-md q-container">
      Tab Component
    </h1>
    <div class="flex justify-center">
      <TabComponent />
        <TabComponent type="linear" class="q-mx-lg" />
    </div>
  </div>
</template>

<script setup>
import TabComponent from '../../../components/molecules/tabs/TabComponent.vue'
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
