<template>
  <q-button
    :style="{ height: buttonHeight }"
    :class="[backgroundColor]"
    class="profile-action-button"
  >
    <div :class="[textColor, labelTypology]">{{ label }}</div>
    <q-icon
      class="link-icon cursor-pointer"
      :name="iconName"
      :class="[iconColor, iconBackgroundColor]"
      :style="{ height: iconHeight, width: iconWidth }"
    />
  </q-button>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Read more about products',
  },
  labelTypology: {
    type: String,
    default: 'label-md-bold',
  },
  textColor: {
    type: String,
    default: 'text-bluegray-900',
  },
  iconName: {
    type: String,
    default: 'north_east',
  },
  iconColor: {
    type: String,
    default: 'text-bluegray-900',
  },
  iconSize: {
    type: String,
    default: '20px',
  },
  iconWidth: {
    type: String,
    default: '48px',
  },
  iconHeight: {
    type: String,
    default: '48px',
  },
  iconBackgroundColor: {
    type: String,
    default: 'bg-bluegray-200',
  },
  backgroundColor: {
    type: String,
    default: 'bg-bluegray-100',
  },
  buttonHeight: {
    type: String,
    default: '68px',
  },
})
</script>
<style lang="scss" scoped>
@import 'LinkButton.style.scss';
</style>
