<template>
  <q-page class="q-pa-md">
    <h1 class="heading-3 text-limegreen-900 text-center q-mb-md">CLoIT</h1>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FilePicker from 'src/components/molecules/form-components/file-picker/FilePicker.vue'
export default defineComponent({
  name: 'IndexPage',
})
</script>
<script setup>
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
