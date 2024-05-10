<template>
  <div class="textarea-container">
    <p v-if="label" class="textarea-label" :class="labelColor">{{ label }}</p>
    <div class="q-input-wrapper">
      <q-input
        :ref="reference"
        v-model="inputValue"
        class="textarea-primary"
        :class="[textareaClass, setDestructive, setDisable]"
        borderless
        no-error-icon
        :disable="disable"
        :placeholder="placeholder"
        autogrow
        type="textarea"
        :maxLength="maxCharacters"
        @input="emitInput"
        :style="{ height: height }"
      >
      </q-input>
      <div class="textarea-counter">
        {{ characterCount }} / {{ maxCharacters }}
      </div>
    </div>
    <div class="flex" :class="bottomRightDescriptionPosition">
      <p v-if="bottomLeftDescription" class="textarea-description">
        {{ bottomLeftDescription }}
      </p>
      <p v-if="bottomRightDescription" class="textarea-description">
        {{ bottomRightDescription }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const textareaClasses = {
  Primary: 'textarea-primary-bg',
  WhiteBg: 'textarea-white-bg',
} // Set your maximum character limit here

const inputValue = ref('')

const props = defineProps({
  type: {
    type: String,
    default: 'Primary',
  },
  reference: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Label',
  },
  maxCharacters: {
    type: Number,
    default: 500,
  },
  labelColor: {
    type: String,
    default: 'text-bluegray-500',
  },
  placeholder: {
    type: String,
    default: 'Placeholder Text',
  },
  bottomLeftDescription: {
    type: String,
    default: '',
  },
  bottomRightDescription: {
    type: String,
    default: '',
  },
  disable: {
    type: Boolean,
    default: false,
  },
  destructive: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: '128px',
  },
})

const { emit } = defineEmits(['input'])
const emitInput = () => {
  emit('input', inputValue.value)
}

const textareaClass = computed(() => {
  if (!props.destructive && !props.disable) {
    return textareaClasses[props.type] || textareaClasses['Primary']
  } else {
    return ''
  }
})

const bottomRightDescriptionPosition = computed(() => {
  return props.bottomLeftDescription ? 'justify-between' : 'justify-end'
})

const setDestructive = computed(() => {
  return !props.disable ? (props.destructive ? 'textarea-destructive' : '') : ''
})

const setDisable = computed(() => {
  return props.disable ? 'textarea-disabled-bg' : ''
})

const characterCount = computed(() => {
  return inputValue.value.length
})
</script>

<style lang="scss" scoped>
@import 'TextArea.style.scss';
</style>
