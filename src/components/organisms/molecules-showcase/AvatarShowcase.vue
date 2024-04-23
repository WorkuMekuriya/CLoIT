<template>
  <div>
    <h1 class="display-3 text-limegreen-900 text-center q-mb-md q-container">
      Avatar
    </h1>
    <div class="flex justify-center">
      <div class="flex items-center column">
        <AvatarButton class="q-my-md" type="image" size="xl" />
        <AvatarButton class="q-my-md" type="image" size="lg" />
        <AvatarButton class="q-my-md" type="image" size="md" />
        <AvatarButton class="q-my-md" type="image" size="sm" />
      </div>
        <div class="flex items-center column q-px-lg">
        <AvatarButton class="q-my-md" type="initials" size="xl" />
        <AvatarButton class="q-my-md" type="initials" size="lg" />
        <AvatarButton class="q-my-md" type="initials" size="md" />
        <AvatarButton class="q-my-md" type="initials" size="sm" />
      </div>
        <div class="flex items-center column">
        <AvatarButton class="q-my-md" type="icon" size="xl" />
        <AvatarButton class="q-my-md" type="icon" size="lg" />
        <AvatarButton class="q-my-md" type="icon" size="md" />
        <AvatarButton class="q-my-md" type="icon" size="sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AvatarButton from '../../../components/molecules/avatar/AvatarButton.vue'
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
