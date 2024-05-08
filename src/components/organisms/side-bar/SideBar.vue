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
      <div class="sidebar-menu">
        <div
          v-for="(parentMenu, index) in menus"
          :key="index"
          class="sidebar-menu-container"
        >
          <div class="sidebar-menu-items">
            <div
              v-if="
                !isSelectedParent(parentMenu) && parentMenu.parentLabel !== ''
              "
              class="sidebar-parent-menu-items"
              :style="{
                justifyContent: isMobileView ? 'center' : '',
              }"
              @click="selectMenu(parentMenu)"
            >
              <q-icon
                v-if="parentMenu.parentIcon"
                :name="parentMenu.parentIcon"
                size="24px"
                :color="'white'"
              />
              <svg
                v-else
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
                  stroke="#667085"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                v-if="!isMobileView"
                class="sidebar-menu-group-text"
                :style="{ color: isSelectedParent(parentMenu) ? 'white' : '' }"
              >
                {{ parentMenu.parentLabel }}
              </div>
            </div>
            <div
              v-if="isSelectedParent(parentMenu)"
              class="child-menu-container"
              :style="{ backgroundColor: parentMenu.background }"
            >
              <div class="sidebar-parent-menu-items">
                <q-icon
                  v-if="parentMenu.parentIcon"
                  :name="parentMenu.parentIcon"
                  size="24px"
                  :color="'white'"
                />
                <svg
                  v-else
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
                    fill="white"
                  />
                </svg>

                <div v-if="!isMobileView" class="sidebar-menu-group-text">
                  {{ parentMenu.parentLabel }}
                </div>
              </div>
              <div
                v-for="(childMenu, childIndex) in parentMenu.children"
                :key="childIndex"
                class="sidebar-parent-menu-items"
                :style="{
                  backgroundColor: isSelectedMenu(childMenu) ? '#9FF443' : '',
                  justifyContent: isMobileView ? 'center' : '',
                }"
                @click="selectMenu(parentMenu, childMenu)"
              >
                <q-icon
                  v-if="childMenu.icon"
                  :name="childMenu.icon"
                  size="24px"
                  :color="isSelectedMenu(childMenu) ? 'black' : 'white'"
                />
                <div v-else class="items-center">
                  <svg
                    v-if="isSelectedMenu(childMenu)"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.65625"
                      y="3.66992"
                      width="6.69214"
                      height="6.69336"
                      rx="1"
                      fill="#101828"
                    />
                    <rect
                      x="3.65625"
                      y="13.6523"
                      width="6.69214"
                      height="6.69336"
                      rx="1"
                      fill="#101828"
                    />
                    <rect
                      x="13.6543"
                      y="13.6523"
                      width="6.69214"
                      height="6.69336"
                      rx="1"
                      fill="#101828"
                    />
                    <circle
                      cx="16.9875"
                      cy="7.04102"
                      r="3.69067"
                      fill="#101828"
                    />
                  </svg>
                  <svg
                    v-else
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.65625"
                      y="3.66992"
                      width="6.69214"
                      height="6.69336"
                      rx="1"
                      stroke="#667085"
                    />
                    <rect
                      x="3.65625"
                      y="13.6523"
                      width="6.69214"
                      height="6.69336"
                      rx="1"
                      stroke="#667085"
                    />
                    <rect
                      x="13.6543"
                      y="13.6523"
                      width="6.69214"
                      height="6.69336"
                      rx="1"
                      stroke="#667085"
                    />
                    <circle
                      cx="16.9875"
                      cy="7.04102"
                      r="3.69067"
                      stroke="#667085"
                    />
                  </svg>
                </div>
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
import CLoITLogo from 'components/atoms/Icons/CLoITLogo.vue'
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

const emit = defineEmits(['selectedMenu'])

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
    emit('selectedMenu', childMenu)
  } else {
    // If no child menu is provided, select the parent menu
    selectedParentMenu.value = parentMenu
    selectedChildMenu.value = parentMenu.children[0] // Clear any selected child menu
    // Emit the menu event with the selected parent menu
    emit('selectedMenu', parentMenu.children[0] || parentMenu)
  }
}

// Function to check if a child menu is the selected one
const isSelectedMenu = (childMenu) => selectedChildMenu.value === childMenu

// Function to check if a parent menu is the selected one
const isSelectedParent = (parentMenu) => selectedParentMenu.value === parentMenu

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
