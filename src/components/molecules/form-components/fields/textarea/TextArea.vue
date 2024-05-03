<template>
  <div class="textarea-container">
    <p v-if="label" class="textarea-label">{{ label }}</p>
    <div class="q-input-wrapper">
      <q-input
        v-model="inputValue"
        class="textarea-primary"
        :class="[textareaClass, setDestructive, setDisable]"
        borderless
        no-error-icon
        :disable="disable"
        :placeholder="placeholder"
        autogrow
        type="textarea"
        @input="emitInput"
        :style="{height: height}"
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
}

const maxCharacters = 500 // Set your maximum character limit here

const inputValue = ref('')

const props = defineProps({
  type: {
    type: String,
    default: 'Primary',
  },
  label: {
    type: String,
    default: 'Label',
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
    default: '128px'
  }
})

const emitInput = () => {
  emit('input', inputValue.value)
}

const { emit } = defineEmits(['input'])

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
