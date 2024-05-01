<template>
  <div>
    <h1 class="heading-3 text-limegreen-900 text-center q-mb-md q-container">
      Other Stuffs
    </h1>
    <div class="flex justify-center">
      <LiItem
        :showLeftButton="false"
        :rightIcon="'chevron_right'"
        :label="'Portal & Help Desk'"
        :price="'$ {}'"
        @handleRightIcon="console.log('Clicked')"
      />
    </div>
    <div class="flex justify-center q-mb-lg">
      <LiItem :label="'Portal & Help Desk'" :price="'$ {}'" />
    </div>
    <div class="flex justify-center q-mb-lg">
      <BreadCrumbHeader
        class="bread-crumb-header text-bluegray-900"
        :step="step"
      />
    </div>
    <div class="flex justify-center q-mb-md">
      <Breadcrumb
        :primaryLable="'Terms & Conditions'"
        :secondaryLable="'Terms & Conditions'"
        :tertiaryLabel="'Terms & Conditions'"
      />
    </div>
  </div>
</template>

<script setup>
import BreadCrumbHeader from '../../molecules/bread-crumb/BreadCrumb.vue'
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb.vue'
import LiItem from '../../molecules/li-item/LiItem.vue'
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
