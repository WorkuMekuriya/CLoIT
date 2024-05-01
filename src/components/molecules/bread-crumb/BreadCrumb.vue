<template>
  <div class="">
    <q-breadcrumbs class="bread-crumb">
      <q-breadcrumbs-el
        v-for="(component, index) in components"
        :key="index"
        :label="component.label"
        :class="[hasStep(index), hideIconOnFirstStep(index)]"
        :icon="component.icon"
      ></q-breadcrumbs-el>
    </q-breadcrumbs>
  </div>
</template>
<script setup>
const props = defineProps({
  components: {
    type: Array,
    default: () => [
      { label: 'Terms & Conditions', name: '', icon: '' },
      { label: 'Select service', name: '', icon: 'chevron_right' },
      { label: 'Select Options ', name: '', icon: 'chevron_right' },
      { label: 'Your Information', name: '', icon: 'chevron_right' },
      { label: 'Checkout', name: '', icon: 'chevron_right' },
    ],
  },
  step: {
    type: Number,
    default: 1,
  },
})
const hasStep = (index) => {
  if (index < props.step - 1) {
    return 'passed-step'
  }
  if (index + 1 == props.step) {
    return 'active-step'
  } else return 'non-active-step'
}
const hideIconOnFirstStep = (index) => {
  if (index === 0) {
    return 'hide-icon-on-the-first'
  }
}
</script>
<style lang="scss" scoped>
@import 'BreadCrumb.style.scss';
</style>
