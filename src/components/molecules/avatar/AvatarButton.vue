<template>
  <q-avatar class="avatar-button" :size="avatarSize">
    <!-- Render content based on the type prop -->
    <template v-if="type === 'image'">
      <img :src="imageSrc" />
    </template>
    <template v-else-if="type === 'icon'">
      <PersonIcon :size="size" />
    </template>
    <template v-else>
      <span>{{ initials }}</span>
    </template>
  </q-avatar>
</template>

<script setup>
import { ref, computed } from 'vue'
import PersonIcon from '../../../components/atoms/Icons/PersonIcon.vue'
const props = defineProps({
  type: {
    type: String,
    default: 'image',
    validator: (value) => ['image', 'icon', 'initial'].includes(value),
  },
  imageSrc: {
    type: String,
    default: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg',
  },
  size: {
    type: String,
    default: 'xl',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  initials: {
    type: String,
    default: 'J',
  },
})

const sizeMap = {
  sm: '32px',
  md: '40px',
  lg: '48px',
  xl: '64px',
}

const avatarSize = computed(() => sizeMap[props.size])
</script>

<style lang="scss" scoped>
@import 'AvatarButton.style.scss';
</style>
