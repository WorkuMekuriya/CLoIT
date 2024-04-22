<template>
  <div class="">
    <q-toggle
      :disable="disable"
      class="toggle-button"
      v-model="selected"
      :label="label"
      @update:model-value="emitToggleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

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
    default: true,
  },
})
selected.value = props.toggleValue

const emitToggleChange = (value) => {
  toggleValue.value = value
}

const emit = defineEmits(['update:toggleValue'])
</script>

<style lang="scss" scoped>
@import 'ToggleButton.style.scss';
</style>
