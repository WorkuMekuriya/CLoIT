<template>
  <div>
    <q-btn class="standard-button" :class="buttonClass" unelevated :label="label" no-caps>
      <template #icon>
        <ButtonLoadingSpinner />
      </template>
    </q-btn>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ButtonLoadingSpinner from 'src/components/atoms/Icons/ButtonLoadingSpinner.vue';
const buttonClasses = {
  ArcticBlueFull: 'button-arcticblue',
  ArcticBlueOutlined: 'button-arcticblue-outline',
  ArcticBlueFullLeft: 'button-arcticblue-left',
  ArcticBlueOutlinedLeft: 'button-arcticblue-outline-left',

}
const props = defineProps({
  type: {
    type: String,
    default: 'ArcticBlueFull',
  },
  buttonDisabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Button'
  },
  size: {
    type: String,
    validator: (value) => ['sm', 'xl'].includes(value),
    default: 'xl'
  }
})

const buttonClass = computed(() => {
  let classList = [buttonClasses[props.type] || buttonClasses['ArcticBlueFull']]
  return classList
})

</script>

<style lang="scss" scoped>
@import 'StandardButtons.style.scss';
</style>
