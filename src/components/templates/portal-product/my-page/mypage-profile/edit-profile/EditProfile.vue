<template>
  <div class="container">
    <div class="breadcrumb-container">
      <div class="breadcrumb-item">My Prof<span style="font-family: 'Plus Jakarta Sans'">i</span>le</div>
      <div class="breadcrumb-separator">〉</div>
      <span class="breadcrumb-item breadcrumb-link">Edit Prof<span style="font-family: 'Plus Jakarta Sans'">i</span>le</span>
    </div>
    <div class="title">Edit Prof<span style="font-family: 'Plus Jakarta Sans'">i</span>le</div>
    <div class="grid-container">
      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'First Name'"
          :placeholder="'First Name'"
          :bottomLeftDescription="''"
        />
      </div>

      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Last Name'"
          :placeholder="'Last Name'"
          :bottomLeftDescription="''"
        />
      </div>

      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Phone Number'"
          :placeholder="'Phone Number'"
          :bottomLeftDescription="''"
        />
      </div>

      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Email'"
          :placeholder="'Email'"
          :bottomLeftDescription="''"
        />
      </div>

      <div class="grid-item">
        <SelectDropdown
          :label="'Nationality'"
          :options="[
            { label: 'South Korean', value: 'south_korean' },
            { label: 'Ethiopian', value: 'ethiopian' },
            { label: 'American', value: 'american' },
          ]"
        />
      </div>

      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Organization'"
          :placeholder="'Organization'"
          :bottomLeftDescription="''"
          iconRight="search"
        />
      </div>

      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Department'"
          :placeholder="'Department'"
          :bottomLeftDescription="''"
        />
      </div>

      <div class="grid-item">
        <TextField
          class="textfield"
          :label="'Preferred Language'"
          :placeholder="'Preferred Language'"
          :bottomLeftDescription="''"
        />
      </div>
    </div>
    <div class="button-container">
      <RoundedButton
        type="Primary"
        :isLoading="false"
        :label="'Save'"
        :buttonWidth="'186px'"
        @click="handleSaveClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RoundedButton from "src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue";
import TextField from "src/components/molecules/form-components/fields/textfield/TextField.vue";
import SelectDropdown from "components/molecules/form-components/select-dropdown/SelectDropdown.vue";

// Define the 'nextStep' event
const emits = defineEmits(["nextStep"]);

// Method to handle the save button click
const handleSaveClick = () => {
  emits("nextStep", 0);
};
</script>

<style lang="scss" scoped>
@import "EditProfile.styles.scss";
</style>
