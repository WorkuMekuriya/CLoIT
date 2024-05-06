<template>
  <q-select
    ref="select"
    v-model="model"
    borderless
    dense
    :options="filteredOptions"
    :input="onOptionSelect"
    class="dropdown-container"
    :dropdown-icon="'keyboard_arrow_down'"
    :style="{ width: maxWidth, height: height }"
  >
    <template v-slot:prepend>
      <q-icon :name="iconLeft" class="prepend-icon" />
    </template>
  </q-select>
  <div v-if="description" class="select-description">{{ description }}</div>
</template>
<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'

// Define props and emits
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Select item',
  },
  description: {
    type: String,
    default: '',
  },
  maxWidth: {
    type: String,
    value: '',
  },
  height: {
    type: String,
    value: '',
  },
  iconLeft: {
    type: String,
    value: '',
  },
  options: {
    type: Array,
    default: () => [
      { value: 'line', label: 'Preview' },
      { value: 'rectangle', label: '레포트' },
    ],
  },
})

const emit = defineEmits(['file'])

const model = ref(null)
const searchQuery = ref('')

// Define a computed property for filtering options based on the search query
const filteredOptions = computed(() => {
  const needle = searchQuery.value.toLowerCase()
  return props.options.filter((option) =>
    option.label.toLowerCase().includes(needle),
  )
})

// Define a function to handle option selection
function onOptionSelect(option) {
  console.log(option.value)
  model.value = option.value // Update the model when an option is selected
  emit('file', model.value) // Emit the 'file' event with the model value
}
</script>

<style scoped lang="scss">
@import 'DropDown.style.scss';
</style>
