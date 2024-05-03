<template>
  <div class="flex justify-center items-center text-center">
    <q-chip
      :disable="type.includes('Disabled')"
      :class="['q-chip', typeClass, sizeClass]"
      @click="handleClick"
    >
      <!-- Display dot icon before the label if the dot prop is true -->
      <span v-if="dot" class="dot-icon q-ml-xs">&#8226;</span>

      <!-- Display icon on the left side if iconPosition is left -->
      <q-icon
        v-if="icon && iconPosition === 'left'"
        :name="icon"
        :class="iconClass"
        class="q-mr-xs"
      />

      <!-- Label text -->
      <slot>{{ label }}</slot>

      <!-- Display icon on the right side if iconPosition is right -->
      <q-icon
        v-if="icon && iconPosition === 'right'"
        :name="icon"
        :class="iconClass"
        class="q-ml-xs right-icon"
      />
    </q-chip>
  </div>
</template>

<script>
export default {
  name: 'TagComponent',
  props: {
    type: {
      type: String,
      default: 'TagBlue', // Default type
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: '', // 'left' or 'right'
    },
    size: {
      type: String,
      default: 'lg', // 'sm', 'md', 'lg'
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeClass() {
      // Compute the class for the type
      return `q-chip--${this.type}`
    },
    sizeClass() {
      // Compute the class for the size
      return `q-chip--${this.size}`
    },
    iconClass() {
      // Compute the class for icon size
      return `q-icon--${this.size}`
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'TagComponent.styles';
</style>
