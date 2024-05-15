<template>
  <q-dialog class="dialog-component" v-model="dialogOpen">
    <div
      class="bg-white dialog-component-container"
      :style="{ width: dialogWidth, maxHeight: dialogHeight }"
    >
      <div class="dialog-component-header flex justify-between">
        <component v-if="leftIconComponent" :is="leftIconComponent" />
        <q-space />
        <svg
          @click="closeDialog"
          class="cursor-pointer"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="51"
            height="51"
            rx="25.5"
            stroke="#D0D5DD"
          />
          <path
            d="M31 21L21 31M21 21L31 31"
            stroke="#475467"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <component v-if="innerComponent" :is="innerComponent" />
    </div>
  </q-dialog>
</template>

<script setup>
import { computed } from 'vue'
import { useDialogStore } from '../../../stores/dialog-store'

const dialogStore = useDialogStore()

const dialogOpen = computed(() => dialogStore.layout)
const dialogWidth = computed(() => dialogStore.dialogWidth)
const dialogHeight = computed(() => dialogStore.dialogHeight)
const leftIconComponent = computed(() => dialogStore.leftIconComponent)
const innerComponent = computed(() => dialogStore.innerComponent)

const openDialog = () => {
  dialogStore.openDialog()
}

const closeDialog = () => {
  dialogStore.closeDialog()
}
</script>

<style lang="scss" scoped>
@import 'DialogComponent.style.scss';
</style>
