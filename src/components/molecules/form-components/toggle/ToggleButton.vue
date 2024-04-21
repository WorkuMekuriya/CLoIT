<template>
  <div class="">
    <q-toggle
      :disable="disable"
      class="toggle-button"
      :modelValue="toggleValue"
      :label="label"
      @update:model-value="emitToggleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const internalToggleValue = ref(false)

const props = defineProps({
  label: {
    type: String,
    default: '레포트 Preview',
  },
  disable: {
    type: Boolean,
    default: false,
  },
  toggleValue: {
    type: Boolean,
    default: false,
  },
})

const emitToggleChange = (value) => {
  internalToggleValue.value = value
}

const emit = defineEmits(['update:toggleValue'])
</script>

<style lang="scss" scoped>
@import 'ToggleButton.style.scss';
</style>
