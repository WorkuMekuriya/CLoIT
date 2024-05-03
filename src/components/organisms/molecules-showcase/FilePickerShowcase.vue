<template>
  <div>
    <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
      File Picker
    </h1>
    <div class="filePicker">
      <FilePicker type="sm" />
    </div>
    <div class="filePicker">
      <FilePicker type="md" />
    </div>
    <div class="filePicker">
      <FilePicker type="lg" />
    </div>
  </div>
</template>

<script setup>
import FilePicker from 'src/components/molecules/form-components/file-picker/FilePicker.vue'
</script>

<style lang="scss" scoped>
.filePicker {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
  margin-left: 25%;
  margin-right: 25%;
}
</style>
