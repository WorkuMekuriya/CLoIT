<template>
  <div
    :class="['flex justify-center table-header', stateClass]"
    @click="handleClick"
  >
    <!-- Display label -->
    <span>{{ label }}</span>

    <!-- Display help icon with tooltip -->
    <q-tooltip
      v-if="helpIcon"
      v-close-popup
      content-class="tooltip-class"
      anchor="top right"
      self="top middle"
    >
      Information about this column
    </q-tooltip>
    <q-icon
      v-if="helpIcon"
      name="help_outline"
      @mouseover="showTooltip = true"
      @mouseout="showTooltip = false"
      class="q-ml-xs"
    />

    <!-- Display arrow icon -->
    <q-icon
      v-if="arrow"
      :name="arrowIcon"
      class="q-ml-xs"
    />
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    // State of the header ('Default', 'Hover', 'Disabled')
    state: {
      type: String,
      default: 'Default'
    },
    // Label text
    label: {
      type: String,
      required: true
    },
    // Help icon flag
    helpIcon: {
      type: Boolean,
      default: false
    },
    // arrow type ('down' or 'up')
    arrow: {
      type: String,
      default: null
    }
  },
  computed: {
    // Class for the state
    stateClass() {
      switch (this.state) {
        case 'Hover':
          return 'hover-state';
        case 'Disabled':
          return 'disabled-state';
        default:
          return '';
      }
    },
    // Determine the arrow icon based on the 'arrow' prop
    arrowIcon() {
      return this.arrow === 'up' ? 'arrow_upward' : 'arrow_downward';
    }
  },
  methods: {
    handleClick() {
      // Emit a click event when the component is clicked
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'TableHeader.style.scss';
</style>
