<template>
  <div>
    <p v-if="label" class="textfield-label">{{ label }}</p>
    <q-input
      v-model="inputValue"
      class="textfield-primary"
      :class="[textFieldClass, setDestructive, setDisable]"
      borderless
      no-error-icon
      :disable="disable"
      :placeholder="placeholder"
      @input="emitInput"
    >
      <template v-slot:prepend>
        <q-icon v-if="iconLeft" :name="iconLeft" size="sm" />
      </template>
      <template v-slot:append>
        <q-icon v-if="iconRight" :name="iconRight" size="sm" />
      </template>
    </q-input>
    <div class="flex" :class="bottomRightDescriptionPosition">
      <p v-if="bottomLeftDescription" class="textfield-description">
        {{ bottomLeftDescription }}
      </p>
      <p v-if="bottomRightDescription" class="textfield-description">
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
    default: 'Description',
  },
  bottomRightDescription: {
    type: String,
    default: 'Description',
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
})
const textFieldClass = computed(() => {
  // Set additional CSS classes based on type
  if (!props.error && !props.disable) {
    console.log(textFieldClasses['Primary'])
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
const setDisable = computed(() => {
  if (props.disable) return 'textfield-disabled-bg'
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
<template>
  <div>
    <p v-if="label" class="textfield-label">{{ label }}</p>
    <q-input
      v-model="inputValue"
      class="textfield-primary"
      :class="[textFieldClass, setDestructive, setDisable, removeIconSpace]"
      borderless
      no-error-icon
      :disable="disable"
      :placeholder="placeholder"
      @input="emitInput"
    >
      <template v-slot:prepend>
        <q-icon v-if="iconLeft" :name="iconLeft" size="sm" />
      </template>
      <template v-slot:append>
        <q-icon v-if="iconRight" :name="iconRight" size="sm" />
      </template>
    </q-input>
    <div class="flex" :class="bottomRightDescriptionPosition">
      <p v-if="bottomLeftDescription" class="textfield-description">
        {{ bottomLeftDescription }}
      </p>
      <p v-if="bottomRightDescription" class="textfield-description">
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
    default: 'Description',
  },
  bottomRightDescription: {
    type: String,
    default: 'Description',
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
})
const textFieldClass = computed(() => {
  // Set additional CSS classes based on type
  if (!props.error && !props.disable) {
    console.log(textFieldClasses['Primary'])
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
const setDisable = computed(() => {
  if (props.disable) return 'textfield-disabled-bg'
  else return ''
})
const removeIconSpace = computed(() => {
  if (!props.iconLeft)
    return 'remove-icon-left-space'
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
