<template>
  <q-option-group
    class="radio-button"
    :class="[radioClass, radioDisableClass]"
    :options="options"
    type="radio"
    v-model="selected"
    :disable="disable"
    emit-value
    @update:modelValue="emitRadioChange"
  />
</template>

<script setup>
import { ref, computed } from 'vue'

const selected = ref(null)

const props = defineProps({
  options: {
    type: Array,
    default: () => [
      { value: 'line', label: '레포트 Preview' },
      { value: 'rectangle', label: '레포트 Preview' },
    ],
  },
  value: {
    type: String,
    default: 'rectangle',
  },
  destructive: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
})
selected.value = props.value

const radioClass = computed(() => {
  return {
    'radio-destructive': !props.disable && props.destructive,
  }
})
const radioDisableClass = computed(() => {
  return {
    'radio-disabled': props.disable,
  }
})

const emitRadioChange = (value) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
@import 'RadioButton.style.scss';
</style>
