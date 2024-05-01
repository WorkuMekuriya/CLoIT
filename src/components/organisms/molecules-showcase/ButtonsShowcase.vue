<template>
  <div>
    <h1 class="heading-3 text-limegreen-900 text-center q-mb-md">Buttons</h1>
    <template v-for="(buttonGroup, index) in buttonGroups" :key="index">
      <div>
        <p class="text-center heading-3 q-py-md">{{ buttonGroup.title }}</p>
        <div class="flex justify-between q-mx-xl">
          <template
            v-for="(button, buttonIndex) in buttonGroup.buttons"
            :key="buttonIndex"
          >
            <component
              :is="button.component"
              v-bind="button.props"
              class="q-mb-md"
            />
          </template>
        </div>
      </div>
    </template>
    <template v-for="(buttonGroup, index) in standardButtonGroups" :key="index">
      <div>
        <p class="text-center heading-3 q-py-md">{{ buttonGroup.title }}</p>
        <div class="flex justify-between q-mx-xl">
          <!-- Iterate through the buttons in the group -->
          <template
            v-for="(button, buttonIndex) in buttonGroup.buttons"
            :key="buttonIndex"
          >
            <!-- Render button with outlined: false -->
            <StandardButton
              v-if="!button.props.outlined"
              v-bind="button.props"
              class="q-mb-md"
            />
          </template>
        </div>
        <div class="flex justify-between q-mx-xl">
          <!-- Iterate through the buttons in the group -->
          <template
            v-for="(button, buttonIndex) in buttonGroup.buttons"
            :key="buttonIndex"
          >
            <!-- Render button with outlined: true -->
            <StandardButton
              v-if="button.props.outlined"
              v-bind="button.props"
              class="q-mb-md"
            />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import RoundedButton from '../../molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
import CircularButton from '../../molecules/buttons/conditionally-styled-buttons/ConditionalStyledCircularButton.vue'
import StandardButton from '../../molecules/buttons/standard-buttons/StandardButtons.vue'
import { ref } from 'vue'

const showAlert = ref(true)

const buttonGroups = [
  {
    title: 'Button Primary',
    buttons: [
      {
        component: RoundedButton,
        props: {
          type: 'Primary',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Primary',
          isLoading: false,
          label: 'Button',
          leftIcon: 'home',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Primary',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Primary',
          isLoading: true,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Primary',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
          size: 'sm',
        },
      },
      {
        component: CircularButton,
        props: { type: 'Primary', buttonDisabled: false },
      },
      {
        component: CircularButton,
        props: { type: 'Primary', buttonDisabled: false, size: 'sm' },
      },
    ],
  },
  {
    title: 'Button Secondary',
    buttons: [
      {
        component: RoundedButton,
        props: {
          type: 'Secondary',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Secondary',
          isLoading: false,
          label: 'Button',
          leftIcon: 'home',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Secondary',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Secondary',
          isLoading: true,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Secondary',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
          size: 'sm',
        },
      },
      {
        component: CircularButton,
        props: { type: 'Secondary', buttonDisabled: false },
      },
      {
        component: CircularButton,
        props: { type: 'Secondary', buttonDisabled: false, size: 'sm' },
      },
    ],
  },
  {
    title: 'Button Tertiary Lined',
    buttons: [
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryLined',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryLined',
          isLoading: false,
          label: 'Button',
          leftIcon: 'home',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryLined',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryLined',
          isLoading: true,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryLined',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
          size: 'sm',
        },
      },
      {
        component: CircularButton,
        props: { type: 'TertiaryLined', buttonDisabled: false },
      },
      {
        component: CircularButton,
        props: { type: 'TertiaryLined', buttonDisabled: false, size: 'sm' },
      },
    ],
  },
  {
    title: 'Button Tertiary White',
    buttons: [
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryWhite',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryWhite',
          isLoading: false,
          label: 'Button',
          leftIcon: 'home',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryWhite',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryWhite',
          isLoading: true,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryWhite',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
          size: 'sm',
        },
      },
      {
        component: CircularButton,
        props: { type: 'TertiaryWhite', buttonDisabled: false },
      },
      {
        component: CircularButton,
        props: { type: 'TertiaryWhite', buttonDisabled: false, size: 'sm' },
      },
    ],
  },
  {
    title: 'Button Tertiary Tonal',
    buttons: [
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryTonal',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryTonal',
          isLoading: false,
          label: 'Button',
          leftIcon: 'home',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryTonal',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryTonal',
          isLoading: true,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'TertiaryTonal',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
          size: 'sm',
        },
      },
      {
        component: CircularButton,
        props: { type: 'TertiaryTonal', buttonDisabled: false },
      },
      {
        component: CircularButton,
        props: { type: 'TertiaryTonal', buttonDisabled: false, size: 'sm' },
      },
    ],
  },
  {
    title: 'Button Destructive',
    buttons: [
      {
        component: RoundedButton,
        props: {
          type: 'Destructive',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Destructive',
          isLoading: false,
          label: 'Button',
          leftIcon: 'home',
          rightIcon: false,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Destructive',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Destructive',
          isLoading: true,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: false,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Destructive',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: false,
          size: 'sm',
        },
      },
      {
        component: CircularButton,
        props: { type: 'Destructive', buttonDisabled: false },
      },
      {
        component: CircularButton,
        props: { type: 'Destructive', buttonDisabled: false, size: 'sm' },
      },
    ],
  },
  {
    title: 'Button Disabled',
    buttons: [
      {
        component: RoundedButton,
        props: {
          type: 'Disabled',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: true,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Disabled',
          isLoading: false,
          label: 'Button',
          leftIcon: 'home',
          rightIcon: false,
          buttonDisabled: true,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Disabled',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: true,
          buttonDisabled: true,
        },
      },
      {
        component: RoundedButton,
        props: {
          type: 'Disabled',
          isLoading: false,
          label: 'Button',
          leftIcon: '',
          rightIcon: false,
          buttonDisabled: true,
          size: 'sm',
        },
      },
      {
        component: CircularButton,
        props: { type: 'Disabled', buttonDisabled: true },
      },
      {
        component: CircularButton,
        props: { type: 'Disabled', buttonDisabled: true, size: 'sm' },
      },
    ],
  },
]
const standardButtonGroups = [
  {
    title: 'Button Standard',
    buttons: [
      {
        props: {
          type: 'ArcticBlue',
          outlined: false,
          arrowDirection: 'Right',
          label: 'Button',
          leftIcon: '',
          rightIcon: 'home',
        },
      },
      {
        props: {
          type: 'ArcticBlue',
          outlined: false,
          arrowDirection: 'Left',
          label: 'Button',
          leftIcon: 'home',
          rightIcon: '',
        },
      },
      {
        props: {
          type: 'ArcticBlue',
          outlined: true,
          arrowDirection: 'Left',
          label: 'Button',
          leftIcon: 'home',
          rightIcon: '',
        },
      },
      {
        props: {
          type: 'ArcticBlue',
          outlined: true,
          arrowDirection: 'Right',
          label: 'Button',
          leftIcon: '',
          rightIcon: 'home',
        },
      },
      {
        props: {
          type: 'LimeGreen',
          outlined: false,
          arrowDirection: 'Right',
          label: 'Button',
          leftIcon: '',
          rightIcon: 'home',
        },
      },
      {
        props: {
          type: 'LimeGreen',
          outlined: false,
          arrowDirection: 'Left',
          label: 'Button',
          leftIcon: 'home',
          rightIcon: '',
        },
      },
      {
        props: {
          type: 'LimeGreen',
          outlined: true,
          arrowDirection: 'Left',
          label: 'Button',
          leftIcon: 'home',
          rightIcon: '',
        },
      },
      {
        props: {
          type: 'LimeGreen',
          outlined: true,
          arrowDirection: 'Right',
          label: 'Button',
          leftIcon: '',
          rightIcon: 'home',
        },
      },
      {
        props: {
          type: 'BlueGray',
          outlined: false,
          arrowDirection: 'Right',
          label: 'Button',
          leftIcon: '',
          rightIcon: 'home',
        },
      },
      {
        props: {
          type: 'BlueGray',
          outlined: false,
          arrowDirection: 'Left',
          label: 'Button',
          leftIcon: 'home',
          rightIcon: '',
        },
      },
      {
        props: {
          type: 'BlueGray',
          outlined: true,
          arrowDirection: 'Left',
          label: 'Button',
          leftIcon: 'home',
          rightIcon: '',
        },
      },
      {
        props: {
          type: 'BlueGray',
          outlined: true,
          arrowDirection: 'Right',
          label: 'Button',
          leftIcon: '',
          rightIcon: 'home',
        },
      },
    ],
  },
]
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
