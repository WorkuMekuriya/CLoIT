<template>
  <div class="q-mb-xl">
    <h1 class="heading-3 text-limegreen-900 text-center">SideBars</h1>
    <div class="q-mt-xl flex justify-between">
      <SideBar isFooterVisible />
      <SideBar
        isFooterVisible
        footerTitle="Everything you need"
        footerSubTitle="클로잇의 상품을 둘러보세요."
      />
      <SideBar :menus="parentOnluMenus" />
      <SideBar isFooterVisible :menus="menus" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from 'src/components/organisms/side-bar/SideBar.vue'

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
    parentLabel: 'Systems',
    background: '#1D2939',
    children: [],
  },
  {
    parentLabel: 'Systems',
    background: '#1D2939',
    children: [
      {
        icon: '',
        label: 'Help',
      },
      {
        icon: '',
        label: 'System Code',
      },
      {
        icon: '',
        label: 'Properties',
      },
      {
        icon: '',
        label: 'Menus',
      },
      {
        icon: '',
        label: 'APIList',
      },
    ],
  },
  {
    parentLabel: 'Users & Group',
    background: '',
    children: [
      {
        icon: '',
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
