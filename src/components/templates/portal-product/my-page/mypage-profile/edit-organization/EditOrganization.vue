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
        <div class="grid-item">
          <TextField
            class="textfield"
            label="Organization registration number"
            placeholder="Organization registration number"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>

        <div class="grid-item">
          <TextField
            class="textfield"
            label="Organization name"
            placeholder="Organization name"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>

        <div class="grid-item">
          <SelectDropdown
            label="Country"
            :options="[
              { label: 'South Korea', value: 'south_korea' },
              { label: 'United States', value: 'united_states' },
              { label: 'Ethiopia', value: 'ethiopia' },
              { label: 'Brazil', value: 'brazil' },
            ]"
          />
        </div>

        <div class="grid-item">
          <TextField
            class="textfield"
            label="Owner"
            placeholder="Owner"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>
      </div>
      <div>
        <div class="grid-item q-mb-lg">
          <TextField
            class="textfield"
            label="Location"
            placeholder="Street, Building Number (Optional)"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>

        <div class="grid-item q-mb-lg">
          <TextField
            class="textfield"
            label=""
            placeholder="More Address Information (Optional)"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>

        <div class="grid-item">
          <TextField
            class="textfield"
            label=""
            placeholder="City / District (Optional)"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <SelectDropdown
            label="Province"
            :options="[
              { value: 'province', label: 'Province' },
              { value: 'province_2', label: 'Province 2' },
            ]"
          />
        </div>

        <div class="grid-item">
          <TextField
            class="textfield"
            label="Postal or ZIP Code"
            placeholder="Postal or ZIP Code"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>

        <div class="grid-item">
          <TextField
            class="textfield"
            label="Contact"
            placeholder="Contact"
            bottomLeftDescription=""
            bottomRightDescription=""
          />
        </div>

        <div class="grid-item">
          <FilePicker type="sm" />
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

const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const moveToStep = () => {
  emits('nextStep', 0)
}
</script>

<style lang="scss" scoped>
@import 'EditOrganization.style.scss';
</style>
