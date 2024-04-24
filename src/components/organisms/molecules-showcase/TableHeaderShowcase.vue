<template>
  <div class="q-mb-xl">
      <h1 class="heading-3 text-limegreen-900 text-center">Table Header</h1>
      <template v-for="(tableHeaderGroup, index) in tableHeaderGroups" :key="index">
        <div>
          <p class="text-center display-1 q-py-md">{{ tableHeaderGroup.title }}</p>
          <div class="flex justify-around q-mx-xl">
            <template v-for="(tableHeader, tableHeaderIndex) in tableHeaderGroup.tableHeaders" :key="tableHeaderIndex">
              <component
                :is="tableHeader.component"
                v-bind="tableHeader.props"
              />
            </template>
          </div>
        </div>
      </template>
    </div>
  </template>

<script setup>
import TableHeader from '../../molecules/table/header/TableHeader.vue'

const tableHeaderGroups = [
  {
    title: 'Default',
    tableHeaders: [
      { component: TableHeader, props: { state: 'Default', label: 'Organizatoin Name', helpIcon: false, arrow: 'down'} },
      { component: TableHeader, props: { state: 'Default', label: 'Organizatoin Name', helpIcon: false, arrow: 'up'} },
      { component: TableHeader, props: { state: 'Default', label: 'Organizatoin Name', helpIcon: true, arrow: 'up'} },
      { component: TableHeader, props: { state: 'Default', label: 'Organizatoin Name', helpIcon: true, arrow: 'down'} },
    ]
  },
  {
    title: 'Disabled',
    tableHeaders: [
      { component: TableHeader, props: { state: 'Disabled', label: 'Organizatoin Name', helpIcon: false, arrow: 'down'} },
      { component: TableHeader, props: { state: 'Disabled', label: 'Organizatoin Name', helpIcon: false, arrow: 'up'} },
      { component: TableHeader, props: { state: 'Disabled', label: 'Organizatoin Name', helpIcon: true, arrow: 'up'} },
      { component: TableHeader, props: { state: 'Disabled', label: 'Organizatoin Name', helpIcon: true, arrow: 'down'} },
    ]
  },
]
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
