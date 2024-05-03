<template>
  <div style="max-width: 80%">
    <div style="display: flex">
      <div style="color: gray; text-decoration: underline">My Profile</div>
      <div style="padding-left: 5px">〉</div>
      <span style="color: black; text-decoration: none !important"
        >Edit Organization</span
      >
    </div>
    <div style="font-weight: 800; font-size: 32px">Edit Organization</div>
    <div>
      <div class="grid-container">
        <div
          v-for="(form, index) in informationForm"
          :key="index"
          class="grid-item"
        >
          <TextField
            class="textfield"
            :label="form.name"
            :placeholder="form.name"
            :bottomLeftDescription="form.description"
            bottomRightDescription=""
          />
        </div>
      </div>

      <div class="grid-container">
        <div
          v-for="(form, index) in organizationInfo"
          :key="index"
          class="grid-item"
        >
          <SelectDropdown
            v-if="form.type === 'selectDropdown'"
            :label="form.name"
            :options="form.options"
          />
          <TextField
            v-else
            class="textfield"
            :label="form.name"
            :placeholder="form.placeholder || form.name"
            :bottomLeftDescription="form.description"
            bottomRightDescription=""
          />
        </div>
      </div>
      <div>
        <div
          v-for="(form, index) in organizationInfo_2"
          :key="index"
          class="grid-item"
        >
          <TextField
            class="textfield"
            :label="form.name"
            :placeholder="form.placeholder || form.name"
            :bottomLeftDescription="form.description"
            bottomRightDescription=""
          />
        </div>
      </div>
      <div class="grid-container">
        <div
          v-for="(form, index) in organizationInfo_3"
          :key="index"
          class="grid-item"
        >
          <SelectDropdown
            v-if="form.type === 'selectDropdown'"
            :label="form.name"
            :options="form.options"
          />
          <FilePicker v-if="form.type === 'filePicker'" type="sm" />

          <TextField
            v-if="form.type === 'textfield'"
            class="textfield"
            :label="form.name"
            :placeholder="form.placeholder || form.name"
            :bottomLeftDescription="form.description"
            bottomRightDescription=""
          />
        </div>
      </div>
    </div>
    <div style="display: flex">
      <RoundedButton
        type="Primary"
        :isLoading="false"
        label="Save"
        leftIcon=""
        :rightIcon="false"
        :buttonDisabled="false"
        buttonWidth="186px"
        @clicked="moveToStep"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue'
import FilePicker from 'src/components/molecules/form-components/file-picker/FilePicker.vue'
import SelectDropdown from 'components/molecules/form-components/select-dropdown/SelectDropdown.vue'

const organizationInfo = ref([
  { name: 'Organization registration number', description: '' },
  { name: 'Organization name', description: '' },
  {
    name: 'Country',
    description: '',
    type: 'selectDropdown',
    options: [
      {
        label: 'South Korea',
        value: 'south_korea',
      },
      {
        label: 'United States',
        value: 'united_states',
      },
      {
        label: 'Ethiopia',
        value: 'ethiopia',
      },
      {
        label: 'Brazil',
        value: 'brazil',
      },
    ],
  },
  { name: 'Owner', description: '' },
])

const organizationInfo_2 = ref([
  {
    name: 'Location',
    placeholder: 'Street, Building Number (Optional)',
    description: '',
  },
  {
    name: '',
    placeholder: 'More Address Information (Optional)',
    description: '',
  },
  { name: '', placeholder: 'City / District (Optional)', description: '' },
])

const organizationInfo_3 = ref([
  {
    name: 'Province',
    description: '',
    type: 'selectDropdown',
    options: [
      { value: 'province', label: 'Province' },
      { value: 'province 2', label: 'Province 2' },
    ],
  },
  {
    name: 'Postal or ZIP Code',
    placeholder: 'Postal or ZIP Code',
    type: 'textfield',
    description: '',
  },
  { name: 'Contact', type: 'textfield', description: '' },
  {
    name: 'Certificate for business registration',
    description: '',
    type: 'filePicker',
  },
])

const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const moveToStep = () => {
  emits('nextStep', 0)
}
</script>

<style lang="scss" scoped>
@import 'EditOrganization.style.scss';
</style>
