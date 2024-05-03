<template>
  <!-- Middum in height file picker -->
  <div v-if="type == 'md'" class="container">
    <div class="left-section">
      <div class="icon-container" @click="selectFile">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7156 16.9736H8.49561C8.08161 16.9736 7.74561 16.6376 7.74561 16.2236C7.74561 15.8096 8.08161 15.4736 8.49561 15.4736H15.7156C16.1296 15.4736 16.4656 15.8096 16.4656 16.2236C16.4656 16.6376 16.1296 16.9736 15.7156 16.9736Z"
            fill="white"
          />
          <path
            d="M15.7156 12.7871H8.49561C8.08161 12.7871 7.74561 12.4511 7.74561 12.0371C7.74561 11.6231 8.08161 11.2871 8.49561 11.2871H15.7156C16.1296 11.2871 16.4656 11.6231 16.4656 12.0371C16.4656 12.4511 16.1296 12.7871 15.7156 12.7871Z"
            fill="white"
          />
          <path
            d="M11.2506 8.61035H8.49561C8.08161 8.61035 7.74561 8.27435 7.74561 7.86035C7.74561 7.44635 8.08161 7.11035 8.49561 7.11035H11.2506C11.6646 7.11035 12.0006 7.44635 12.0006 7.86035C12.0006 8.27435 11.6646 8.61035 11.2506 8.61035Z"
            fill="white"
          />
          <mask
            id="mask0_849_88"
            style="mask-type: luminance"
            maskUnits="userSpaceOnUse"
            x="3"
            y="2"
            width="19"
            height="20"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 2H21.1647V21.9098H3V2Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_849_88)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.9085 3.5L8.21951 3.504C5.89151 3.518 4.49951 4.958 4.49951 7.357V16.553C4.49951 18.968 5.90451 20.41 8.25551 20.41L15.9445 20.407C18.2725 20.393 19.6645 18.951 19.6645 16.553V7.357C19.6645 4.942 18.2605 3.5 15.9085 3.5ZM8.25651 21.91C5.11251 21.91 2.99951 19.757 2.99951 16.553V7.357C2.99951 4.124 5.04651 2.023 8.21451 2.004L15.9075 2H15.9085C19.0525 2 21.1645 4.153 21.1645 7.357V16.553C21.1645 19.785 19.1175 21.887 15.9495 21.907L8.25651 21.91Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div class="text-container">
        <div class="file-name">{{ fileModel?.name || 'Select File' }}</div>
        <div v-if="fileModel?.lastModified" class="file-date">
          {{ new Date(fileModel?.lastModified || '').toLocaleDateString() }}
        </div>
      </div>
    </div>
    <div v-if="fileModel" class="right-section">
      <div class="file-size">{{ formatFileSize(fileModel?.size) }}</div>
      <div class="download-icon" aria-disabled="true">
        <q-icon name="file_download" class="icon-color" size="sm" />
      </div>
      <div class="delete-icon" @click="deleteFile">
        <q-icon name="delete" class="icon-color" size="sm" />
      </div>
    </div>
    <q-file
      ref="fileRef"
      v-model="fileModel"
      style="display: none"
      :max-files="maxFileSize"
    />
  </div>

  <!-- Smaller File Picker -->
  <div v-if="type == 'sm'" class="container-sm" @click="selectFile">
    <div class="attachment-label">{{ label }}</div>
    <div class="content-container">
      <div class="sm-file-name">{{ fileModel?.name || 'Select File' }}</div>
      <div class="sm-icon-container">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4403 11.0489L12.2503 20.2389C11.1244 21.3648 9.59747 21.9973 8.00529 21.9973C6.41311 21.9973 4.88613 21.3648 3.76029 20.2389C2.63445 19.1131 2.00195 17.5861 2.00195 15.9939C2.00195 14.4018 2.63445 12.8748 3.76029 11.7489L12.9503 2.55894C13.7009 1.80838 14.7188 1.38672 15.7803 1.38672C16.8417 1.38672 17.8597 1.80838 18.6103 2.55894C19.3609 3.30951 19.7825 4.32749 19.7825 5.38894C19.7825 6.4504 19.3609 7.46838 18.6103 8.21894L9.41029 17.4089C9.03501 17.7842 8.52602 17.9951 7.99529 17.9951C7.46456 17.9951 6.95557 17.7842 6.58029 17.4089C6.20501 17.0337 5.99418 16.5247 5.99418 15.9939C5.99418 15.4632 6.20501 14.9542 6.58029 14.5789L15.0703 6.09894"
            stroke="#101828"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <q-file
        ref="fileRef"
        v-model="fileModel"
        style="display: none"
        :max-files="maxFileSize"
      />
    </div>
  </div>

  <!-- Drag and Drop -->
  <div v-if="type == 'lg'" class="container-lg" @click="selectFile">
    <div class="attachment-label">{{ label }}</div>
    <div class="content-container-lg">
      <div class="file-name">
        {{ fileModel?.name || 'Drag and drop files' }}
      </div>
      <q-file
        ref="fileRef"
        draggable
        drag-and-drop
        v-model="fileModel"
        style="display: none"
        :max-files="maxFileSize"
      />
    </div>
    <div class="attachment-label">{{ description }}</div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
import { QFile } from 'quasar'

// Define the emit function
const emit = defineEmits(['file'])

const props = defineProps({
  maxFileSize: {
    type: Number,
    default: 1,
  },
  type: {
    type: String,
    default: 'lg',
  },
  label: {
    type: String,
    default: 'Label',
  },
  description: {
    type: String,
    default: 'description',
  },
})

// Declare the file model and file reference
const fileModel = ref(null)
const fileRef = ref(null)

// Function to select a file
function selectFile() {
  fileRef.value?.pickFiles()
  emit('file', fileModel.value)
}

// Function to format file size
function formatFileSize(bytes) {
  const KB = 1024
  const MB = KB * KB
  const GB = MB * KB

  if (bytes < KB) {
    return `${bytes} bytes`
  }
  if (bytes < MB) {
    return `${(bytes / KB).toFixed(2)} KB`
  }
  if (bytes < GB) {
    return `${(bytes / MB).toFixed(2)} MB`
  }
  return `${(bytes / GB).toFixed(2)} GB`
}

// Function to delete a file
function deleteFile() {
  fileModel.value = null
}
</script>

<style lang="scss" scoped>
@import 'FilePicker.style.scss';
</style>
