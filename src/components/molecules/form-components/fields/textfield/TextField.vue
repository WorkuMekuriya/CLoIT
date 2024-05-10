<style lang="scss" scoped>
@import 'TextField.style.scss';
</style>
<template>
  <div>
    <p v-if="label" class="textfield-label" :class="labelColor">
      {{ label }}<span class="text-red-500" v-if="required"> *</span>
    </p>
    <q-input
      :ref="reference"
      v-model="inputValue"
      class="textfield-primary"
      :class="[textFieldClass, setDestructive, setDisable, removeIconSpace]"
      borderless
      :type="inputType"
      no-error-icon
      :disable="disable"
      :placeholder="placeholder"
      @input="emitInput"
      :style="{ borderRadius: borderRadius }"
      :rules="rules"

    >
      <template v-slot:prepend>
        <q-icon :color="iconColor" v-if="iconLeft" :name="iconLeft" size="sm" />
      </template>
      <template v-slot:append>
        <q-icon
          :color="iconColor"
          v-if="iconRight"
          :name="iconRight"
          size="sm"
        />
      </template>
    </q-input>
    <div class="flex" :class="[bottomRightDescriptionPosition]">
      <p
        v-if="bottomLeftDescription"
        class="textfield-description"
        :class="isError"
      >
        {{ bottomLeftDescription }}
      </p>
      <p
        v-if="bottomRightDescription"
        class="textfield-description"
        :class="isError"
      >
        {{ bottomRightDescription }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const textFieldClasses = {
  Primary: 'textfield-primary-bg',
  WhiteBg: 'textfield-white-bg',
  // Add more button types here if needed
}

const inputValue = ref('')

const props = defineProps({
  type: {
    type: String,
    default: 'Primary',
  },
  reference: {
    type: String,
    default: ''
  },
  inputType: {
    type: String,
    default: 'type',
  },
  iconColor: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Label',
  },
  labelColor: {
    type: String,
    default: 'text-bluegray-500',
  },
  placeholder: {
    type: String,
    default: 'Placeholder Text',
  },
  required: {
    type: Boolean,
    default: true,
  },
  rules: {
    type: Array,
    default: () => [],
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
  error: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
    default: '',
  },
  iconRight: {
    type: String,
    default: '',
  },
  borderRadius: {
    Type: String,
    default: '16px',
  },
})
const textFieldClass = computed(() => {
  // Set additional CSS classes based on type
  if (!props.error && !props.disable) {
    return textFieldClasses[props.type] || textFieldClasses['Primary']
  } else return ''
})
const bottomRightDescriptionPosition = computed(() => {
  if (props.bottomLeftDescription) {
    return 'justify-between'
  } else return 'justify-end'
})
const setDestructive = computed(() => {
  if (!props.disable) return props.error ? 'textfield-destructive' : ''
  else return ''
})
const isError = computed(() => {
  if (props.error) return 'set-error-properties'
  else return ''
})
const setDisable = computed(() => {
  if (props.disable) return 'textfield-disabled-bg'
  else return ''
})
const removeIconSpace = computed(() => {
  if (!props.iconLeft) return 'remove-icon-left-space'
  else return ''
})

const emitInput = () => {
  emit('input', inputValue.value)
}
const { emit } = defineEmits(['input'])
</script>

<style lang="scss" scoped>
@import 'TextField.style.scss';
</style>
