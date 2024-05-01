<template>
  <div>
    <div class="help-center">Help Center</div>
    <div class="header-container">
      <div class="header-title">Help Center</div>
      <div>
        <TextField
          class="textfield"
          bottomLeftDescription=""
          placeholder="Search..."
          bottomRightDescription=""
          iconLeft="search"
          label=""
          iconRight=""
          style="width: 321px"
        />
      </div>
    </div>
    <div class="grid-container">
      <div
        v-for="(help, index) in helpTopics"
        :key="index"
        class="cardlist-container"
        @click="moveToStep"
      >
        <div class="card-header">
          <div class="dot-circle" />
          <q-icon
            class="link-icon cursor-pointer"
            name="north_east"
            size="xs"
          />
        </div>
        <div class="card-footer">
          <div class="title">{{ help.label }}</div>
          <div class="description">{{ help.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue'

const helpTopics = [
  {
    label: 'Getting Started',
    description: '기본적인 사용법을 익힐 수있습니다.',
  },
  {
    label: 'My Events',
    description: 'Learn how to make events and Manage them.',
  },
  {
    label: 'Dashboard',
    description: 'Learn how to make events and Manage them.',
  },
  { label: 'Event Setup', description: '기본적인 사용법을 익힐 수있습니다.' },
  { label: 'Games', description: 'Learn how to make events and Manage them.' },
  {
    label: 'Registations',
    description: 'Learn how to make events and Manage them.',
  },
  {
    label: 'Access Control',
    description: '기본적인 사용법을 익힐 수있습니다.',
  },
  {
    label: 'Tracking',
    description: 'Learn how to make events and Manage them.',
  },
  {
    label: 'Dashboard',
    description: 'Learn how to make events and Manage them.',
  },
]

const emits = defineEmits(['nextStep'])

const moveToStep = () => {
  emits('nextStep', 1)
}
</script>

<style lang="scss" scoped>
@import 'HelpCenter.style.scss';
</style>
