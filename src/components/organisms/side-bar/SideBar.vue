<template>
  <div class="sidebar-container">
    <div>
      <div class="sidebar-header-container">
        <CLoITLogo v-if="!isMobileView" theme="white" />
        <q-icon
          :name="isMobileView ? 'list' : 'menu_open'"
          size="sm"
          color="white"
          class="responsive-icon"
          @click="toggleMenu"
        />
      </div>
      <div
        v-for="(parentMenu, index) in menus"
        :key="index"
        class="sidebar-menu-container"
      >
        <div class="sidebar-menu-items">
          <div
            v-if="parentMenu.children.length === 0 || !isMobileView"
            class="sidebar-parent-menu-items"
            :style="{
              backgroundColor: isSelectedParent(parentMenu) ? '#9FF443' : '',
            }"
            @click="selectMenu(parentMenu)"
          >
            <q-icon
              :name="parentMenu.parentIcon"
              size="24px"
              :color="isSelectedParent(parentMenu) ? 'black' : 'white'"
            />
            <div
              v-if="!isMobileView"
              class="sidebar-menu-group-text"
              :style="{ color: isSelectedParent(parentMenu) ? '#000' : '' }"
            >
              {{ parentMenu.parentLabel }}
            </div>
          </div>
          <div
            v-if="parentMenu.children.length > 0"
            class="child-menu-container"
            :style="{ backgroundColor: parentMenu.background }"
          >
            <div
              v-for="(childMenu, childIndex) in parentMenu.children"
              :key="childIndex"
              class="sidebar-parent-menu-items"
              :style="{
                backgroundColor: isSelectedMenu(childMenu) ? '#9FF443' : '',
              }"
              @click="selectMenu(parentMenu, childMenu)"
            >
              <q-icon
                :name="childMenu.icon"
                size="24px"
                :color="isSelectedMenu(childMenu) ? 'black' : 'white'"
              />
              <div
                v-if="!isMobileView"
                class="sidebar-menu-group-text"
                :style="{ color: isSelectedMenu(childMenu) ? '#000' : '' }"
              >
                {{ childMenu.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isFooterVisible && !isMobileView"
      class="sidebar-footer-container"
      :style="{
        backgroundImage:
          'url(\'data:image/svg+xml;utf8,' +
          encodeURIComponent(svgCode) +
          '\')',
      }"
    >
      <div class="sidebar-footer-item">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
            fill="black"
            fill-opacity="0.1"
          />
          <path
            d="M32.5045 30.3941L34.7112 22.0632L30.0426 24.7367L26 18.6084L21.9574 24.7367L17.2888 22.0632L19.4955 30.3941H32.5045Z"
            stroke="#101828"
            stroke-miterlimit="10"
          />
          <path
            d="M20.1072 32.9561H31.8929"
            stroke="#101828"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
      <div class="sidebar-footer-text">
        <div class="footer-title">{{ footerTitle }}</div>
        <div class="footer-subtitle">{{ footerSubTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CLoITLogo from 'components/atoms/Icons/alert-icons/CLoITLogo.vue'
import { ref, defineProps, defineEmits } from 'vue'

const isMobileView = ref(false)
const selectedParentMenu = ref(null)
const selectedChildMenu = ref(null)

const props = defineProps({
  isFooterVisible: {
    type: Boolean,
    default: false,
  },
  footerTitle: {
    type: String,
    default: 'Upgrade to Pro',
  },
  footerSubTitle: {
    type: String,
    default: 'Make more events',
  },
  menus: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['menu'])

const toggleMenu = () => {
  isMobileView.value = !isMobileView.value
}

// Function to handle menu selection
const selectMenu = (parentMenu, childMenu = null) => {
  if (childMenu) {
    // If child menu is provided, select the child menu
    selectedChildMenu.value = childMenu
    selectedParentMenu.value = parentMenu // Update the parent menu as well
    // Emit the menu event with the selected child menu
    emit('menu', childMenu)
  } else {
    // If no child menu is provided, select the parent menu
    selectedParentMenu.value = parentMenu
    selectedChildMenu.value = null // Clear any selected child menu
    // Emit the menu event with the selected parent menu
    emit('menu', parentMenu)
  }
}

// Function to check if a child menu is the selected one
const isSelectedMenu = (childMenu) => selectedChildMenu.value === childMenu

// Function to check if a parent menu is the selected one
const isSelectedParent = (parentMenu) => {
  if (parentMenu.children.length === 0) {
    return selectedParentMenu.value === parentMenu
  }
}

const svgCode = `
<svg width="208" height="120" viewBox="0 0 208 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_65_12687" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="208" height="120">
        <rect width="208" height="120" rx="24" fill="#B0F644"/>
    </mask>
    <g mask="url(#mask0_65_12687)">
        <path opacity="0.1" d="M233.381 165.074L276.977 70.3449L215.776 92.5247L180.305 11.0805L119.395 75.7434L69.2912 34.1838L78.3051 138.074L233.381 165.074Z" fill="#101828"/>
    </g>
</svg>
`
</script>

<style scoped lang="scss">
@import 'SideBar.style.scss';
</style>
