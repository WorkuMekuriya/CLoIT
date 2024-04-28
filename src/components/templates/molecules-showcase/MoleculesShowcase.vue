<template>
  <q-page class="">
    <ButtonsShowcase />
    <AvatarShowcase />
    <FormComponents />
    <TabComponent />
    <TagComponent />
    <TableHeaderComponent />
    <CardShowcase />
    <OtherStuffShowcase />
    <SelectedServiceShowcase />
  </q-page>
</template>

<script setup>
import CardShowcase from '../../organisms/molecules-showcase/CardShowcase.vue';
import ButtonsShowcase from '../../organisms/molecules-showcase/ButtonsShowcase.vue';
import AvatarShowcase from '../../organisms/molecules-showcase/AvatarShowcase.vue'
import FormComponents from '../../organisms/molecules-showcase/FormComponentsShowcase.vue'
import TabComponent from '../../organisms/molecules-showcase/TabsShowcase.vue'
import TagComponent from '../../organisms/molecules-showcase/TagsShowcase.vue'
import TableHeaderComponent from '../../organisms/molecules-showcase/TableHeaderShowcase.vue'
import OtherStuffShowcase from 'src/components/organisms/molecules-showcase/OtherStuffShowcase.vue';
import SelectedServiceShowcase from '../../organisms/molecules-showcase/SelectedServiceShowcase.vue';
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
