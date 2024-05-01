<template>
  <div>
    <q-btn
      :ripple="false"
      class="standard-button"
      :class="buttonClass"
      unelevated
      :icon="leftIcon"
      :icon-right="rightIcon"
      :label="label"
      no-caps
      :style="{ width: buttonWidth }"
    >
      <template v-if="outlined">
        <LimeGreenOutlinedIcon v-if="type == 'LimeGreen'" class="arrow-icon" />
        <ArcticBlueOutlinedIcon
          v-if="type == 'ArcticBlue'"
          class="arrow-icon"
        />
        <BlueGrayOutlinedIcon v-if="type == 'BlueGray'" class="arrow-icon" />
      </template>
      <template v-else>
        <ArcticBlueIcon v-if="type == 'ArcticBlue'" class="arrow-icon" />

        <LimeGreenIcon v-if="type == 'LimeGreen'" class="arrow-icon" />
        <BlueGrayIcon v-if="type == 'BlueGray'" class="arrow-icon" />
      </template>
    </q-btn>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ArcticBlueOutlinedIcon from '../../../../components/atoms/Icons/standard-buttons/ArcticBlueOutlinedIcon.vue'
import LimeGreenOutlinedIcon from '../../../../components/atoms/Icons/standard-buttons/LimeGreenOutlinedIcon.vue'
import BlueGrayOutlinedIcon from '../../../../components/atoms/Icons/standard-buttons/BlueGrayOutlinedIcon.vue'
import BlueGrayIcon from '../../../../components/atoms/Icons/standard-buttons/BlueGrayIcon.vue'
import ArcticBlueIcon from '../../../../components/atoms/Icons/standard-buttons/ArcticBlueIcon.vue'
import LimeGreenIcon from '../../../../components/atoms/Icons/standard-buttons/LimeGreenIcon.vue'
const buttonClasses = {
  ArcticBlue: 'button-arcticblue',
  LimeGreen: 'button-limegreen',
  BlueGray: 'button-bluegray',
}
const props = defineProps({
  type: {
    type: String,
    default: 'LimeGreen',
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  arrowDirection: {
    type: String,
    validator: (value) => ['Left', 'Right'].includes(value),
    default: 'Right',
  },
  buttonDisabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Button',
  },
  leftIcon: {
    type: String,
    default: '',
  },
  rightIcon: {
    type: String,
    default: '',
  },
  buttonWidth: {
    type: String,
    default: '',
  },
})

const buttonClass = computed(() => {
  let classList = [buttonClasses[props.type] || buttonClasses['ArcticBlue']]
  if (props.outlined) {
    classList.push('button-outlined')
  }
  if (props.arrowDirection === 'Left') {
    classList.push('left-arrow')
  } else if (props.arrowDirection === 'Right') {
    classList.push('right-arrow')
  }
  if (props.leftIcon == '') {
    classList.push('no-left-icon')
  }
  if (props.rightIcon == '') classList.push('no-right-icon')
  return classList
})
</script>

<style lang="scss" scoped>
@import 'StandardButtons.style.scss';
</style>
