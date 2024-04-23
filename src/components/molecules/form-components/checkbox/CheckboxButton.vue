<template>
  <div class="checkbox-button">
    <q-checkbox
      :class="checkboxClass"
      toggle-indeterminate
      size="24px"
      v-model="checked"
      :label="label"
      :disable="disable"
      @update:modelValue="emitUpdate"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const checked = ref(null)

const props = defineProps({
  label: {
    type: String,
    default: '레포트 Preview',
  },
  disable: {
    type: Boolean,
    default: false,
  },
  destructive: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Boolean,
    default: true
  }
})
checked.value = props.value
const checkboxClass = computed(() => {
  return {
    'checkbox-destructive': !props.disable && props.destructive,
  }
})

const emitUpdate = (value) => {
  checked.value = value
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
@import 'CheckboxButton.style.scss';
</style>
