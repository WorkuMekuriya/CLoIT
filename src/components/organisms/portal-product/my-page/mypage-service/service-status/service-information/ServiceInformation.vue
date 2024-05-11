<template>
  <div class="service-information">
    <p class="header-text">서비스정보</p>
    <SimpleTable
      :columns="tableProps.columns"
      :tableData="tableProps.tableData"
      :tableStyles="tableProps.tableStyles"
      :columnStyles="tableProps.columnStyles"
    />
    <div class="row date-container">
      <div class="col-6">
        <p class="date-title">규모</p>
        <p class="date">{{ scale }}</p>
      </div>
      <div class="col-6">
        <p class="date-title">Games</p>
        <p class="date">{{ games }}</p>
      </div>
      <div class="col-6 q-mt-md">
        <p class="date-title">접속주소</p>
        <p class="date">cloit.com/{{ subDomain }}</p>
      </div>
    </div>
    <LinkButton
      v-if="hasAddProductOrChageOptionsButton"
      buttonHeight="76px"
      labelTypology="heading-6"
      textColor="text-white"
      backgroundColor="bg-bluegray-900"
      iconWidth="52px"
      iconHeight="52px"
      iconColor="text-bluegray-900"
      iconBackgroundColor="bg-limegreen-400"
      label="상품추가 혹은 옵션변경"
      class="link-button"
    />
  </div>
</template>

<script setup>
import LinkButton from '../../../../../../molecules/buttons/link-button/LinkButton.vue'
import SimpleTable from 'components/molecules/simple-table/SimpleTable.vue'
import { defineProps } from 'vue'

const props = defineProps({
  tableProps: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  scale: {
    type: String,
    default: '50 People',
  },
  games: {
    type: String,
    default: 'Up to 10 games',
  },
  subDomain: {
    type: String,
    default: '입력한Sub-Domain',
  },
  hasAddProductOrChageOptionsButton: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped>
@import 'ServiceInformation.style.scss';
</style>
