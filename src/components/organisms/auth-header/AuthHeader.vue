<template>
  <div class="header cursor-pointer" @click="navigateTo('/')">
    <CLoITLogo />
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
<style scoped>
.header {
  position: absolute;
  padding-left: 120px;
  padding-top: 54px;
  background-color: #f9fafb;
}
</style>
