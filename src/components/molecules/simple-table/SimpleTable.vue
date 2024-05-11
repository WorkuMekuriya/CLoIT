<template>
  <q-markup-table class="simple-table" :class="tableStyles.customTableClass">
    <thead>
      <tr>
        <th
          v-for="(column, index) in props.columns"
          :key="index"
          :style="{
            width: columnStyles[index] ? columnStyles[index].width : 'auto',
          }"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in props.tableData" :key="rowIndex">
        <td
          v-for="(column, colIndex) in props.columns"
          :key="colIndex"
          :style="{
            width: columnStyles[colIndex]
              ? columnStyles[colIndex].width
              : 'auto',

            textAlign: columnStyles[colIndex]
              ? columnStyles[colIndex].textAlign
              : 'left',
          }"
        >
          <div>
            <template v-if="column.type == 'tag'">
              <TagComponent
                :size="row.status?.size"
                :type="row.status?.type"
                :label="row.status?.label"
              />
            </template>
            <template v-else-if="column.type == 'icon'">
              <q-icon
                :name="row.download?.name"
                :size="row.download?.size"
                :class="row.download?.color"
              ></q-icon>
            </template>
            <template v-else>
              {{ row[column.key] }}
            </template>
          </div>
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script setup>
import { defineProps } from 'vue'
import TagComponent from '../form-components/tag-component/TagComponent.vue'

const props = defineProps({
  columns: {
    type: Array,
    required: true,
    default: () => [
      { label: 'Payment ID', key: 'paymentID', type: 'text' },
      { label: '예정된 결제일', key: 'expectedPaymentDate', type: 'text' },
      { label: '실제 결제일', key: 'actualPaymentDate', type: 'text' },
      { label: '결제수단', key: 'paymentMethod', type: 'text' },
      { label: '결제방식', key: 'paymentType', type: 'text' },
      {
        label: 'Status',
        key: 'status',
        type: 'tag',
      },
      { label: 'Amount', key: 'amount', type: 'text' },
    ],
  },
  tableData: {
    type: Array,
    required: true,
    default: () => [
      {
        paymentID: 'Portal & Help',
        expectedPaymentDate: '-',
        actualPaymentDate: '2024-04-01',
        paymentMethod: 'Bank Transfer',
        paymentType: '분납',
        status: { type: 'TagRedTonal', label: '입금필요', size: 'sm' },
        amount: '12.000',
      },
      {
        paymentID: 'Accreditation',
        expectedPaymentDate: '-',
        actualPaymentDate: '2024-04-01',
        paymentMethod: 'Credit Card',
        paymentType: '분납',
        status: { type: 'TagBlueTonal', label: '결제됨', size: 'sm' },
        amount: '12.000',
      },
    ],
  },
  tableStyles: {
    type: Object,
    default: () => ({
      customTableClass: '',
      // Add more styles here if needed
    }),
  },
  columnStyles: {
    type: Array,
    required: true,
    default: () => [
      //Default width and alignment for cols
      { width: 'auto', textAlign: 'left' },
    ],
  },
})
</script>
<style scoped lang="scss">
@import 'SimpleTable.style.scss';
</style>
