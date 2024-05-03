<template>
  <div v-if="label" class="select-label">
    {{ label }} <span class="text-red-500" v-if="required"> *</span>
  </div>
  <q-select
    ref="select"
    v-model="model"
    use-input
    hide-selected
    fill-input
    borderless
    dense
    :options="filteredOptions"
    @filter="filterFn"
    :input="onOptionSelect"
    class="select-container"
    :dropdown-icon="'keyboard_arrow_down'"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
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
  required: {
    type: Boolean,
    default: true,
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

// Define a function to handle filtering
function filterFn(val, update) {
  searchQuery.value = val
  update(() => {})
}

// Define a function to handle option selection
function onOptionSelect(option) {
  model.value = option.value // Update the model when an option is selected
  emit('file', model.value) // Emit the 'file' event with the model value
}
</script>

<style scoped lang="scss">
@import 'SelectDropdown.style.scss';
</style>
