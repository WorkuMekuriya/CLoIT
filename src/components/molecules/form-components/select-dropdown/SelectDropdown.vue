<template>
  <div class="select-label">
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
  <div class="select-description">{{ description }}</div>
</template>

<script>
import { ref, computed, defineEmits } from 'vue'

export default {
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    placeholder: {
      type: String,
      default: 'Select item',
    },
    description: {
      type: String,
      default: 'description',
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
  },
  setup(props, { emit }) {
    const model = ref(null)
    const searchQuery = ref('')

    const filteredOptions = computed(() => {
      const needle = searchQuery.value.toLowerCase()
      emit('file', model.value)
      return props.options.filter((option) =>
        option.label.toLowerCase().includes(needle),
      )
    })

    const filterFn = (val, update) => {
      searchQuery.value = val
      update(() => {})
    }

    const openSelect = (selectRef) => {
      // Open the dropdown programmatically
      if (selectRef) {
        selectRef.focus()
      }
    }

    const onOptionSelect = (option) => {
      model.value = option.value // Update the model when an option is selected
    }

    return {
      model,
      filteredOptions,
      filterFn,
      openSelect,
      onOptionSelect,
    }
  },
}
</script>

<style scoped lang="scss">
@import 'SelectDropdown.style.scss';
</style>
