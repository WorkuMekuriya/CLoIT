<template>
  <q-layout view="lhr lpr lfr">
    <div class="new-service">
      <BreadCrumbHeader
        class="bread-crumb-header text-bluegray-900"
        :step="step"
      />
      <component @nextStep="handleNextStep" :is="getStepComponent" />
      <FooterBar />
    </div>
  </q-layout>
</template>
<script setup>
import { ref, computed } from 'vue'
const step = ref(1)
import BreadCrumbHeader from '../../../../organisms/portal-product/portal-product-service-application/add-service/BreadCrumbHeader.vue'
import AddService1 from '../add-service/steps/1/AddService1.vue'
import AddService2 from '../add-service/steps/2/AddService2.vue'
import AddService3 from '../add-service/steps/3/AddService3.vue'
import FooterBar from '../../../../organisms/portal-product/footer/FooterBar.vue'

const getStepComponent = computed(() => {
  if (step.value == 1) return AddService1
  else if (step.value == 2) return AddService2
  else if (step.value == 3) return AddService3
  return AddService1
})
const handleNextStep = (index) => {
  console.log('Next step:', index)
  step.value = index
}
</script>
<style lang="scss" scoped>
@import 'AddService.style.scss';
</style>
