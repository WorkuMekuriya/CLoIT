<template>
  <q-page class="">
    <h1 class="headline text-limegreen-900 text-center">CLoIT</h1>
    <!-- <RoundedButton
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
    <div class="flex justify-center q-pt-8">
      <TextArea class="textfield" />
    </div> -->
    <div class="flex justify-center q-pt-8">
      <ToggleButton />
    </div>
    <div class="flex justify-center">
      <CheckboxButton />
    </div>

  </q-page>
</template>

<script setup>
import ToggleButton from '../components/molecules/form-components/toggle/ToggleButton.vue'
import CheckboxButton from '../components/molecules/form-components/checkbox/CheckboxButton.vue'
import RoundedButton from '../components/molecules/buttons/ConditionalStyleRoundedButton.vue'
import CircularButton from '../components/molecules/buttons/ConditionalStyledCircularButton.vue'
import TextField from '../components/molecules/form-components/fields/textfield/TextField.vue'
import TextArea from '../components/molecules/form-components/fields/textarea/TextArea.vue'
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
  input {
    font-size: 60px;
  }
}
</style>
