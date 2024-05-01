<template>
  <div>
    <!-- Text Field -->
    <div>
      <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
        Text Fields
      </h1>
      <div class="flex justify-between q-mx-xl q-my-md">
        <div class="flex justify-center q-mb-md">
          <TextField class="textfield" />
        </div>
        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>
        <div class="flex justify-center q-mb-md">
          <TextField class="textfield" iconLeft="home" iconRight="east" />
        </div>
        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            leftIcon="right"
            rightIcon="right"
            bottomLeftDescription=""
            bottomRightDescription=""
            iconLeft="home"
            iconRight="east"
          />
        </div>
      </div>
      <div class="flex justify-between q-mx-xl">
        <div class="flex justify-center q-mb-md">
          <TextField class="textfield" :error="true" />
        </div>

        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            :error="true"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>
        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            :error="true"
            iconLeft="home"
            iconRight="east"
          />
        </div>

        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            :error="true"
            bottomLeftDescription=""
            bottomRightDescription=""
            iconLeft="home"
            iconRight="east"
          />
        </div>
      </div>
      <div class="flex justify-between q-mx-xl q-my-md">
        <div class="flex justify-center q-mb-md">
          <TextField class="textfield" :disable="true" />
        </div>

        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            :disable="true"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>
        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            :disable="true"
            iconLeft="home"
            iconRight="east"
          />
        </div>

        <div class="flex justify-center q-mb-md">
          <TextField
            class="textfield"
            :disable="true"
            bottomLeftDescription=""
            bottomRightDescription=""
            iconLeft="home"
            iconRight="east"
          />
        </div>
      </div>
    </div>
    <!-- Text Area -->
    <div>
      <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
        Text Area
      </h1>
      <div class="flex justify-center q-mb-md">
        <TextArea class="textfield" />
        <TextArea
          class="textfield q-mx-md"
          bottomLeftDescription="Description"
          bottomRightDescription="Description"
        />
        <TextArea class="textfield" :destructive="true" />
        <TextArea
          :destructive="true"
          class="textfield q-mx-md"
          bottomLeftDescription="Description"
          bottomRightDescription="Description"
        />
      </div>
    </div>
    <!-- Radio Button -->
    <div>
      <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
        Radio Button
      </h1>
      <div class="flex justify-center q-mx-xl q-my-md">
        <div class="flex justify-center q-mb-md">
          <RadioButton />
        </div>
        <div class="flex justify-center q-mb-md">
          <RadioButton :destructive="true" />
        </div>
        <div class="flex justify-center q-mb-md">
          <RadioButton :disable="true" />
        </div>
      </div>
    </div>
    <!-- Toggle Button -->
    <div>
      <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
        Toggle Button
      </h1>
      <div class="flex justify-center q-mx-xl q-my-md">
        <div class="flex justify-center q-mb-md">
          <ToggleButton />
        </div>
        <div class="flex justify-center q-mb-md">
          <ToggleButton :toggleValue="false" />
        </div>
        <div class="flex justify-center q-mb-md">
          <ToggleButton :destructive="true" :disable="true" />
        </div>
      </div>
    </div>
    <!-- Check Box Button -->
    <div>
      <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
        Checkbox Button
      </h1>
      <div class="flex justify-center q-mx-xl q-my-md">
        <div class="flex justify-center q-mb-md">
          <CheckboxButton :value="true" />
        </div>
        <div class="flex justify-center q-mb-md">
          <CheckboxButton :destructive="true" :value="false" />
        </div>
        <div class="flex justify-center q-mb-md">
          <CheckboxButton :value="null" :disable="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextField from '../../../components/molecules/form-components/fields/textfield/TextField.vue'
import TextArea from '../../../components/molecules/form-components/fields/textarea/TextArea.vue'
import RadioButton from '../../../components/molecules/form-components/radio-button/RadioButton.vue'
import ToggleButton from '../../../components/molecules/form-components/toggle/ToggleButton.vue'
import CheckboxButton from '../../../components/molecules/form-components/checkbox/CheckboxButton.vue'
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
