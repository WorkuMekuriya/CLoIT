<template>
  <div>
    <div :style="{ maxWidth: maxWidth }">
      <q-tabs
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
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    validator: (value) => ['circular', 'linear'].includes(value),
    default: 'circular',
  },
  tabs: {
    type: Array,
    default: () => [
      { name: 'Tab 1', icon: 'mail', label: 'Tab 1' },
      { name: 'Tab 2', icon: 'alarm', label: 'Tab 2' },
    ],
  },
  maxWidth: {
    type: String,
    default: '400px',
  },
})

const tab = ref(props.tabs[0].name)

const tabClass = computed(() => {
  return props.type === 'circular' ? 'circular-tab' : 'linear-tab'
})
</script>

<style lang="scss" scoped>
@import 'TabComponent.style.scss';
</style>
