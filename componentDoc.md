# Button Components Documentation

## Introduction

This document provides an overview of the molecule components available in the project.

## Rounded Button

### Usage

The rounded button component is designed for general-purpose use cases where a rounded rectangular button is needed. It supports various button types and states.

### Example

```vue
<template>
  <RoundedButton
    type="Primary"
    label="Primary Button"
    :isLoading="isLoading"
    :buttonDisabled="buttonDisabled"
  />
</template>

<script setup>
import RoundedButton from '@/components/molecules/Button/RoundedButton.vue'

const isLoading = ref(false)
const buttonDisabled = ref(false)
</script>
```

### Props

- **type**: Specifies the type of the button. Possible values are `Primary`, `Secondary`, `TertiaryLined`, `TertiaryWhite`, `TertiaryTonal`, and `Destructive`. Default value is `Primary`.
- **label**: Specifies the text content of the button.
- **isLoading**: Indicates whether the button is in a loading state. Default value is `false`.
- **buttonDisabled**: Indicates whether the button is disabled. Default value is `false`.

### Slots

- **leftIcon**: Slot for a left icon.
- **rightIcon**: Slot for a right icon.
- **loading**: Slot for a loading spinner.

## Circular (Arrow) Button

### Usage

The circular button component is designed for scenarios where a circular button with an arrow icon is required. Similar to the rounded button, it supports various button types and states.

### Example

```vue
<template>
  <CircularButton
    type="Primary"
    :isLoading="isLoading"
    :buttonDisabled="buttonDisabled"
  />
</template>

<script setup>
import CircularButton from '@/components/molecules/Button/CircularButton.vue'

const isLoading = ref(false)
const buttonDisabled = ref(false)
</script>
```

### Props

- **type**: Specifies the type of the button. Possible values are the same as for the rounded button.
- **isLoading**: Indicates whether the button is in a loading state. Default value is `false`.
- **buttonDisabled**: Indicates whether the button is disabled. Default value is `false`.

### Slots

- **loading**: Slot for a loading spinner.

## Text Field Component

### Introduction

This component is a customizable text field that allows users to input text. It includes features such as labels, placeholders, descriptions, icons, and support for error states and disabling.

### Props

- **type**: Specifies the type of text field. Possible values include:

  - `'Primary'`: Default style with a primary background color.
  - `'WhiteBg'`: Text field with a white background.
  <!-- Add more button types here if needed -->

- **label**: Specifies the label for the text field.

- **placeholder**: Specifies the placeholder text displayed when the text field is empty.

- **bottomLeftDescription**: Specifies the description text displayed at the bottom left corner of the text field.

- **bottomRightDescription**: Specifies the description text displayed at the bottom right corner of the text field.

- **disable**: Specifies whether the text field is disabled.

- **error**: Specifies whether the text field is in an error state.

- **iconLeft**: Specifies the icon name for the left side of the text field.

- **iconRight**: Specifies the icon name for the right side of the text field.

### Events

- **input**: Triggered when the value of the text field changes.

### Slots

- **prepend**: Allows customization by inserting content before the input field.
- **append**: Allows customization by inserting content after the input field.

### Example Usage

```html
<template>
  <text-field
    v-model="inputValue"
    type="Primary"
    label="Username"
    placeholder="Enter your username"
    :error="isError"
    :disable="isDisabled"
    icon-left="account"
    icon-right="check"
    @input="handleInput"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const inputValue = ref('')
  const isError = ref(false)
  const isDisabled = ref(false)

  const handleInput = (value) => {
    // Handle input value
  }
</script>
```

## Text Area Component

### Introduction

The Text Area component allows users to input and display multi-line text. It provides features such as labels, placeholders, character counters, and support for error states and disabling.

### Props

- **type**: Specifies the type of text area. Possible values include:

  - `'Primary'`: Default style with a primary background color.
  - `'WhiteBg'`: Text area with a white background.

- **label**: Specifies the label for the text area.

- **placeholder**: Specifies the placeholder text displayed when the text area is empty.

- **bottomLeftDescription**: Specifies the description text displayed at the bottom left corner of the text area.

- **bottomRightDescription**: Specifies the description text displayed at the bottom right corner of the text area.

- **disable**: Specifies whether the text area is disabled.

- **destructive**: Specifies whether the text area is in a destructive state.

### Events

- **input**: Triggered when the value of the text area changes.

### Example Usage

```html
<template>
  <text-area
    v-model="inputValue"
    type="Primary"
    label="Description"
    placeholder="Enter your description"
    :destructive="hasError"
    :disable="isDisabled"
    @input="handleInput"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const inputValue = ref('')
  const hasError = ref(false)
  const isDisabled = ref(false)

  const handleInput = (value) => {
    // Handle input value
  }
</script>
```

## Check Box Component

### Introduction

The Check Box component allows users to select or deselect options. It provides features such as labels, disabling, and support for destructive states.

### Props

- **label**: Specifies the label for the check box.

- **disable**: Specifies whether the check box is disabled.

- **destructive**: Specifies whether the check box is in a destructive state.

### Events

- \*\*update

:modelValue\*\*: Triggered when the value of the check box changes.

### Example Usage

```html
<template>
  <check-box
    v-model="isChecked"
    label="Enable Feature"
    :destructive="isDestructive"
    :disable="isDisabled"
    @update:modelValue="handleUpdate"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const isChecked = ref(false)
  const isDestructive = ref(true)
  const isDisabled = ref(false)

  const handleUpdate = (value) => {
    // Handle check box value update
  }
</script>
```

## Toggle Button Component

### Introduction

The Toggle Button component allows users to switch between two states, typically representing "on" and "off" or "enabled" and "disabled".

### Props

- **label**: Specifies the label for the toggle button.

- **disable**: Specifies whether the toggle button is disabled.

- **toggleValue**: Specifies the current value of the toggle button.

### Events

- **update:toggleValue**: Triggered when the value of the toggle button changes.

### Example Usage

```html
<template>
  <toggle-button
    v-model="isEnabled"
    label="Enable Feature"
    :disable="isDisabled"
    @update:toggleValue="handleToggleChange"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const isEnabled = ref(false)
  const isDisabled = ref(false)

  const handleToggleChange = (value) => {
    // Handle toggle button value change
  }
</script>
```
