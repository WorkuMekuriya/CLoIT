<template>
  <div class="new-service">
    <BreadCrumbHeader class="bread-crumb-header text-bluegray-900"  :step="step" />
    <component :is="getStepComponent" />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
const step = ref(1)
import BreadCrumbHeader from '../../../../organisms/portal-product/portal-product-service-application/new-service/BreadCrumbHeader.vue'
import NewService1 from '../new-service/steps/1/NewService1.vue'
import NewService2 from '../new-service/steps/2/NewService2.vue'
import NewService3 from '../new-service/steps/3/NewService3.vue'
import NewService4 from '../new-service/steps/4/NewService4.vue'
import NewService5 from '../new-service/steps/5/NewService5.vue'

const getStepComponent = computed(() => {
    if(step.value == 1)
      return NewService1
    else if (step.value == 2)
      return NewService2
     else if (step.value == 3)
      return NewService3
       else if (step.value == 4)
      return NewService4
      else if (step.value == 5)
      return NewService5
  return NewService1
})
</script>
<style lang="scss" scoped>
@import 'NewService.style.scss';
</style>
