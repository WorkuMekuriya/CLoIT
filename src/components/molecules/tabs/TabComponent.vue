<template>
  <div>
    <div :style="{ maxWidth: maxWidth }">
      <q-tabs
        class="tab-component"
        :ripple="false"
        v-model="tab"
        narrow-indicator
        inline-label
        dense
        align="justify"
        :class="tabClass"
      >
        <q-tab
          :ripple="false"
          class="single-tab"
          v-for="tabItem in tabs"
          :key="tabItem.label"
          :name="tabItem.label"
          :label="tabItem.label"
          :icon="props.type === 'circular' ? tabItem.icon : undefined"
          :class="[
            hasIcon(tabItem.icon),
            changeActiveTabColor(tabItem.tabColor),
          ]"
          @click="emitTabChange(tabItem.label)"
        >
          <template #icon>
            <q-icon :name="tabItem.icon" v-if="props.type === 'circular'" />
          </template>
        </q-tab>
      </q-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const emit = defineEmits(['updateTab'])
const props = defineProps({
  type: {
    type: String,
    validator: (value) =>
      ['circular', 'linear', 'circular-with-background'].includes(value),
    default: 'circular-with-background',
  },
  tabs: {
    type: Array,
    default: () => [
      // tabColor only for 'circular-with-background' button. Choices for tabColor is bluegray or arcticblue
      { icon: '', label: 'Tab 1', tabColor: 'bluegray' },
      { icon: '', label: 'Tab 2', tabColor: 'arcticblue' },
    ],
  },
  currentValue: {
    type: String,
    default: 'Tab 1',
  },
  maxWidth: {
    type: String,
    default: '304px',
  },
})
const tab = ref(props.currentValue)
watch(
  () => props.currentValue,
  (newValue) => {
    tab.value = newValue
  },
)

const emitTabChange = (value) => {
  // Emitting event when the value changes
  emit('updateTab', value)
}

const tabClass = computed(() => {
  if (props.type === 'circular') {
    return 'circular-tab'
  } else if (props.type === 'circular-with-background') {
    return 'circular-with-background-tab'
  } else {
    return 'linear-tab'
  }
})

const hasIcon = (iconName) => {
  if (!iconName) {
    return 'remove-icon-spacing'
  }
}

const changeActiveTabColor = (iconColor) => {
  if (iconColor === 'bluegray') {
    return 'active-tab-bluegray'
  } else if (iconColor === 'arcticblue') {
    return 'active-tab-arcticblue'
  } else {
    return ''
  }
}
</script>

<style lang="scss" scoped>
@import 'TabComponent.style.scss';
</style>
