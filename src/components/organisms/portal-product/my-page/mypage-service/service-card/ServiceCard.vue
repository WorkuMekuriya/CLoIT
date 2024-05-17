<template>
  <div class="service-card">
    <div class="flex justify-between no-wrap">
      <div>
        <div class="flex items-center service-head-content">
          <p class="service-text">{{ serviceText }}{{ serviceNumber }}</p>
          <Tag class="first-tag" size="md" :type="tagType" :label="tagLabel" />
        </div>
        <div class="flex date-container">
          <p class="date">{{ startDate }}</p>
          ~
          <p class="date">{{ endDate }}</p>
        </div>
      </div>
      <q-icon
        class="link-icon cursor-pointer"
        name="north_east"
        @click="navigateToPage(to)"
      ></q-icon>
    </div>
    <div class="services-container flex">
      <Tag
        :label="service"
        size="md"
        type="TagSkeleton"
        v-for="(service, index) in services"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Tag from 'components/molecules/form-components/tag-component/TagComponent.vue'
const router = useRouter()

defineProps({
  serviceText: {
    type: String,
    default: 'Service',
  },
  serviceNumber: {
    type: String,
    default: '{N}',
  },
  tagLabel: {
    type: String,
    default: '신청함',
  },
  tagType: {
    type: String,
    default: '',
  },
  startDate: {
    type: String,
    default: '24-03-25',
  },
  endDate: {
    type: String,
    default: '2024-06-25',
  },
  services: {
    type: Array,
    default: () => ['Portal & Help Desk', 'Accredation', 'Sports Entries'],
  },
  to: {
    type: String,
    default: '',
  },
})

const navigateToPage = (to) => {
  router.push({
    name: 'portal-products-my-page-services-detail',
    query: { status: to },
  })
}
</script>

<style lang="scss" scoped>
@import 'ServiceCard.style.scss';
</style>
