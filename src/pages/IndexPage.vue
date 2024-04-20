<template>
  <q-page class="">
    <h1 class="headline text-limegreen-900 text-center">CLoIT</h1>
    <RoundedButton
      type="Destructive"
      :isLoading="false"
      label="Button"
      leftIcon="shower"
      :rightIcon="false"
      :buttonDisabled="false"
    />

    <CircularButton
      type="TertiaryWhite"
      :buttonDisabled="false"
      class="q-mt-4"
    />
    <div class="flex justify-center">
      <TextField class="textfield" />
    </div>
  </q-page>
</template>

<script setup>
import RoundedButton from '../components/molecules/buttons/ConditionalStyleRoundedButton.vue'
import CircularButton from '../components/molecules/buttons/ConditionalStyledCircularButton.vue'
import TextField from '../components/molecules/fields/textfield/TextField.vue'
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
