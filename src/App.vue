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
// Declared in App.vue, Used Globally
import { showLoading } from 'src/util/loadingService.js'
import { showLNotification } from 'src/util/notificationService.js'
import AlertNotification from 'src/components/molecules/alert/AlertDialog.vue'
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

const handleShowAlert = (data) => {
  alert.value = { ...data }
}

// Example Implementation
// handleShowAlert({
//   type: 'Success',
//   message: 'This is a success alert!',
//   setWidth: '361px',
//   setHeight: '56px',
//   position: 'bottom',
//   timeout: 5000, // 5000 milliseconds (5 seconds)
// });
</script>
