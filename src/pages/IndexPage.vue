<template>
  <q-page class="">
    <h1 class="headline text-limegreen-900 text-center">CLoIT</h1>
    <RoundedButton type="Destructive" :isLoading="false" label="Button" :rightIcon="false" :buttonDisabled="false"/>
    <CircularButton type="TertiaryWhite" />
  </q-page>
</template>

<script setup>
import RoundedButton from '../components/molecules/buttons/ConditionalStyleRoundedButton.vue';
import CircularButton from '../components/molecules/buttons/ConditionalStyledCircularButton.vue';
</script>

<style lang="scss" scoped></style>
