<template>
  <div class="container">
    <div class="breadcrumb-container">
      <div class="breadcrumb-item">My Profile</div>
      <div class="breadcrumb-separator">〉</div>
      <span class="breadcrumb-item breadcrumb-link">Edit Profile</span>
    </div>
    <div class="title">Edit Profile</div>
    <div class="grid-container">
      <div
        v-for="(field, index) in profileFields"
        :key="index"
        class="grid-item"
      >
        <SelectDropdown
          v-if="field.type === 'selectDropdown'"
          :label="field.name"
          :options="field.options"
        />
        <TextField
          v-else
          class="textfield"
          :label="field.name"
          :placeholder="field.placeholder || field.name"
          :bottomLeftDescription="field.description"
          :iconRight="field.rightIcon"
        />
      </div>
    </div>
    <div class="button-container">
      <RoundedButton
        type="Primary"
        :isLoading="false"
        label="Save"
        :buttonWidth="'186px'"
        @click="handleSaveClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue'
import SelectDropdown from 'components/molecules/form-components/select-dropdown/SelectDropdown.vue'

const profileFields = ref([
  { name: 'First Name', placeholder: '', description: '' },
  { name: 'Last Name', placeholder: '', description: '' },
  { name: 'Phone Number', placeholder: '', description: '' },
  { name: 'Email', placeholder: '', description: '' },
  {
    name: 'Nationality',
    description: '',
    type: 'selectDropdown',
    options: [
      {
        label: 'South Korean',
        value: 'south_korean',
      },
      {
        label: 'Ethiopian',
        value: 'ethiopian',
      },
      {
        label: 'American',
        value: 'american',
      },
    ],
  },
  {
    name: 'Organization',
    placeholder: '',
    description: '',
    rightIcon: 'search',
  },
  { name: 'Department', placeholder: '', description: '' },
  { name: 'Preferred Language', placeholder: '', description: '' },
])

// Define the 'nextStep' event
const emits = defineEmits(['nextStep'])

// Method to handle the save button click
const handleSaveClick = () => {
  emits('nextStep', 0)
}
</script>

<style lang="scss" scoped>
@import 'EditProfile.styles.scss';
</style>
