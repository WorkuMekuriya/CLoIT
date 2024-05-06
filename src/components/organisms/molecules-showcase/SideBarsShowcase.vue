<template>
  <div class="q-mb-xl">
    <h1 class="heading-3 text-limegreen-900 text-center">SideBars</h1>
    <div class="q-mt-xl flex justify-between">
      <SideBar />
      <SideBar isFooterVisible />
      <SideBar
        isFooterVisible
        footerTitle="Everything you need"
        footerSubTitle="클로잇의 상품을 둘러보세요."
      />
      <SideBar isFooterVisible :menus="parentOnluMenus" />
      <SideBar isFooterVisible :menus="menus" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from 'components/organisms/side-bar/SideBar.vue'

const parentOnluMenus = ref([
  {
    parentIcon: 'folder',
    parentLabel: 'Systems',
    background: '#1D2939',
    children: [],
  },
  {
    parentIcon: 'people',
    parentLabel: 'Users',
    background: '#1D2939',
    children: [],
  },
  {
    parentIcon: 'settings',
    parentLabel: 'Settings',
    background: '#1D2939',
    children: [],
  },
])
const menus = ref([
  {
    parentIcon: 'folder',
    parentLabel: 'Systems',
    background: '#1D2939',
    children: [],
  },
  {
    parentIcon: 'folder',
    parentLabel: 'Systems',
    background: '#1D2939',
    children: [
      {
        icon: 'help',
        label: 'Help',
      },
      {
        icon: 'folder',
        label: 'System Code',
      },
      {
        icon: 'help',
        label: 'Properties',
      },
      {
        icon: 'folder',
        label: 'Menus',
      },
      {
        icon: 'folder',
        label: 'APIList',
      },
    ],
  },
  {
    parentIcon: 'people',
    parentLabel: 'Users & Group',
    background: '',
    children: [
      {
        icon: 'help',
        label: 'Help',
      },
      {
        icon: '',
        label: 'About',
      },
    ],
  },
])
</script>
