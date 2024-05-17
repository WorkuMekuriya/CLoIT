<template>
  <router-view />
  <AlertNotification
    :type="alert.type"
    :message="alert.message"
    :showAlert="showAlert"
    :setWidth="alert.setWidth"
    :setHeight="alert.setHeight"
    :position="alert.position"
    :timeout="alert.timeout"
    v-if="showAlert"
  />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
})
</script>
<script setup>
import { ref, watch } from 'vue'

const showAlert = ref(false)
const alert = ref({
  type: '',
  message: '',
  setWidth: '',
  setHeight: '',
  position: '',
  timeout: 0,
})

watch(alert, () => {
  showAlert.value = true
})
</script>
