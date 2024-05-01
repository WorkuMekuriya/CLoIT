<template>
  <div class="breadcrum-container">
    <div class="breadcrum-label-container">
      <div class="breadcrum-dot" />
      <div class="breadcrum-label">{{ primaryLable }}</div>
      <q-icon name="chevron_right" size="sm" />
    </div>
    <div class="breadcrum-sublabel">{{ secondaryLable }}</div>
    <div class="breadcrum-stylish">{{ tertiaryLabel }}</div>
  </div>
</template>

<script>
export default {
  props: {
    primaryLable: {
      type: String,
      default: '',
    },
    secondaryLable: {
      type: String,
      default: '',
    },
    tertiaryLabel: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Breadcrumb.style.scss';
</style>
