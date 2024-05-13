<template>
  <div class="header cursor-pointer" @click="navigateTo('/')">
    <div class="app-container">
      <CLoITLogo />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import CLoITLogo from 'components/atoms/Icons/alert-icons/CLoITLogo.vue'
const router = useRouter()
const navigateTo = (routeName) => {
  router.push({ name: routeName })
}
</script>
<style scoped lang="scss">
.header {
  background-color: #f9fafb;
  height: 136px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: 68px;
  }
}
</style>
