<template>
  <div class="billing-history">
    <p class="header-text">Billing History</p>
    <SimpleTable
      :columns="tableProps.columns"
      :tableData="tableProps.tableData"
      :tableStyles="tableProps.tableStyles"
      :columnStyles="tableProps.columnStyles"
    />
  </div>
</template>

<script setup>
import SimpleTable from 'src/components/molecules/simple-table/SimpleTable.vue'
const props = defineProps({
  tableProps: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
@import 'BillingHistory.style.scss';
</style>
