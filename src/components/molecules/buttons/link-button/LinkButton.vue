<template>
  <div>
    <div class="profile-action-button">
      <div>{{ label }}</div>
      <q-icon class="link-icon cursor-pointer" :name="iconName" :class="[iconTextColor, iconBackgroundColor]"  />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Read more about products',
  },
  iconName: {
    type: String,
    default: 'north_east',
  },
  iconTextColor: {
    type: String,
    default: 'text-bluegray-900',
  },
  iconBackgroundColor: {
    type: String,
    default: 'bg-bluegray-200',
  },
})
</script>
<style lang="scss" scoped>
@import 'LinkButton.style.scss';
</style>
