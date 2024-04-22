<template>
  <q-page class="q-pa-md">
    <h1 class="headline text-limegreen-900 text-center q-mb-md">CLoIT</h1>

    <RoundedButton
      type="TertiarySecondary"
      :isLoading="false"
      label="Button"
      leftIcon="person"
      :rightIcon="false"
      :buttonDisabled="false"
      class="q-mb-md"
    />

    <CircularButton type="Secondary" :buttonDisabled="false" class="q-mb-md" />

    <div class="flex justify-center q-mb-md">
      <TextField class="textfield" />
    </div>

    <div class="flex justify-center q-mb-md">
      <TextArea class="textfield" />
    </div>

    <div class="flex justify-center q-mb-md">
      <ToggleButton />
    </div>

    <div class="flex justify-center q-mb-md">
      <CheckboxButton />
    </div>

    <div class="flex justify-center">
      <RadioButton />
    </div>
    <div class="flex justify-center"></div>
  </q-page>
</template>

<script setup>
import ToggleButton from '../components/molecules/form-components/toggle/ToggleButton.vue'
import CheckboxButton from '../components/molecules/form-components/checkbox/CheckboxButton.vue'
import RadioButton from '../components/molecules/form-components/radio-button/RadioButton.vue'
import RoundedButton from '../components/molecules/buttons/ConditionalStyleRoundedButton.vue'
import CircularButton from '../components/molecules/buttons/ConditionalStyledCircularButton.vue'
import TextField from '../components/molecules/form-components/fields/textfield/TextField.vue'
import TextArea from '../components/molecules/form-components/fields/textarea/TextArea.vue'
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
