<template>
  <div class="terms-and-conditions">
    <div class="agree-to-all flex justify-between items-center">
      <p class="agree-to-all-text">Agree to All</p>
      <div
        class="check-box cursor-pointer"
        :class="{ 'selected-check-box': allSelected }"
      >
        <svg
          v-if="!allSelected"
          @click="selectAllCheckboxes"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 6L9 17L4 12"
            stroke="#101828"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 6L9 17L4 12"
            stroke="#101828"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <hr class="horizontal-divider" />
    <div
      class="terms-and-conditions-content"
      v-for="(content, index) in contents"
      :key="index"
    >
      <div
        class="flex justify-between items-center terms-and-conditions-content-main"
        :class="{ 'last-content': index === contents.length - 1 }"
      >
        <div class="title-text-container flex items-center">
          <p class="title-text">{{ content.name }}</p>
          <div></div>
          <Tag size="md" label="Required" class="tag" v-if="content.required" />
        </div>
        <div class="flex items-center">
          <p class="read cursor-pointer" @click="readPolicy">Read</p>
          <div
            @click="toggleCheckbox(index)"
            :class="{ 'selected-check-box': selectedIndexes.includes(index) }"
            class="check-box cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="#101828"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr v-if="contents.length - 1 > index" class="horizontal-divider" />
    </div>
    <DialogComponent />
  </div>
</template>

<script setup>
import Tag from '../../../../../molecules/form-components/tag/Tag.vue'
import DialogComponent from '../../../../../molecules/dialog/DialogComponent.vue'
import AlertStandardIcon from '../../../../../atoms/Icons/alert-icons/AlertStandardIcon.vue'
import TermsDialogInner from '../terms-and-conditions/terms-dialog-inner/TermsDialogInner.vue'
import { useDialogStore } from '../../../../../../stores/dialog-store.js'
import { ref, computed, watchEffect, markRaw } from 'vue'

const selectedIndexes = ref([])

const props = defineProps({
  contents: {
    type: Array,
    default: () => [
      { name: 'Privacy policy', required: true, content: '' },
      { name: 'Terms & Conditions', required: true, content: '' },
      { name: 'Terms & Conditions', required: false, content: '' },
    ],
  },
})

// CheckBox
const allSelected = computed(
  () => selectedIndexes.value.length === props.contents.length,
)

const selectAllCheckboxes = () => {
  if (allSelected.value) {
    selectedIndexes.value = []
  } else {
    selectedIndexes.value = props.contents.map((_, index) => index)
  }
}

const toggleCheckbox = (index) => {
  if (selectedIndexes.value.includes(index)) {
    selectedIndexes.value = selectedIndexes.value.filter((i) => i !== index)
  } else {
    selectedIndexes.value = [...selectedIndexes.value, index]
  }
}

// Read Policy
const dialogStore = useDialogStore()
const innerComponent = markRaw(TermsDialogInner)
const leftIcon = markRaw(AlertStandardIcon)
const readPolicy = () => {
  console.log('read')
  // Pass DialogComponent properties to store
  dialogStore.setInnerComponent(innerComponent)
  dialogStore.setDialogWidth('592px')
  dialogStore.setDialogHeight('861px')
  dialogStore.setLeftIconComponent(leftIcon)

  dialogStore.openDialog()
}

// Emit For Next Step
const emit = defineEmits(['clicked'])
watchEffect(() => {
  if (allSelected.value) {
    console.log('emit')
    // Emit an event to the parent component
    // emit('all-selected')
  } else {
    console.log('not all selected')
  }
})
</script>

<style lang="scss" scoped>
@import 'TermsAndConditions.style.scss';
</style>
