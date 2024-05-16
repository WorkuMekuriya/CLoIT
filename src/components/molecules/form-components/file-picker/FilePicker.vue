<template>
  <!-- Smaller File Picker -->
  <div v-if="type == 'sm'" class="container-sm" @click="openFilePicker">
    <div class="attachment-label">{{ label }}</div>
    <div class="content-container">
      <div class="sm-file-name">
        {{ fileModel && fileModel.length > 0 ? fileModel.map(file => file.name).join(', ') : 'Select File' }}
      </div>
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
        multiple
      />
    </div>
  </div>

  <!-- Middum in height file picker -->
  <div v-if="type == 'md'" class="container">
    <div class="left-section">
      <div class="icon-container" @click="selectFile">
        <FilePickerIcon />
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
    />
  </div>

  <!-- Drag and Drop -->
  <div v-if="type == 'lg'" class="container-lg" @drop.prevent="handleDrop" @dragover.prevent>
    <div class="attachment-label">{{ label }}</div>
    <div class="content-container-lg" @click="openFilePicker">
      <div class="file-name">
        {{ fileModel && fileModel.length > 0 ? fileModel.map(file => file.name).join(', ') : 'Drag and drop files' }}
      </div>
      <q-uploader
        ref="fileRef"
        draggable
        drag-and-drop
        v-model="fileModel"
        style="display: none"
        :max-files="maxFileSize"
        multiple
      />
    </div>
    <div class="attachment-label">{{ description }}</div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
import { QFile } from 'quasar'
import FilePickerIcon from 'src/components/atoms/Icons/FilePickerIcon.vue'

// Define the emit function
const emit = defineEmits(['file'])

// Handle drop event
const handleDrop = (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  fileModel.value = Array.from(files);
};
const openFilePicker = () => {
  fileRef.value.$el.click();
};

const props = defineProps({
  maxFileSize: {
    type: Number,
    default: 10,
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
