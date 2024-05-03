<template>
  <div class="q-mb-xl">
    <h1 class="heading-3 text-limegreen-900 text-center">Tag</h1>
    <template v-for="(tagGroup, index) in tagGroups" :key="index">
      <div>
        <p class="text-center display-1 q-py-md">{{ tagGroup.title }}</p>
        <div class="flex justify-around q-mx-xl q-mb-lg">
          <template v-for="(tag, tagIndex) in tagGroup.tags" :key="tagIndex">
            <component :is="tag.component" v-bind="tag.props" />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import Tag from 'components/molecules/form-components/tag-component/TagComponent.vue'

const tagGroups = [
  {
    title: 'Tag-sm & Tag-Tonal-sm',
    tags: [
      {
        component: Tag,
        props: { type: 'TagSkeleton', dot: false, size: 'sm' },
      },
      {
        component: Tag,
        props: { type: 'TagBlueTonal', label: 'Label', dot: true, size: 'sm' },
      },
      {
        component: Tag,
        props: {
          type: 'TagRedTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'left',
          dot: false,
          size: 'sm',
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagGreenTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: false,
          size: 'sm',
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagYellowTonal',
          label: 'Label',
          dot: true,
          icon: 'east',
          iconPosition: 'right',
          size: 'sm',
        },
      },
      {
        component: Tag,
        props: { type: 'TagDisabled', label: 'Label', dot: false, size: 'sm' },
      },
    ],
  },
  {
    title: 'Tag Blue & Tag Blue Tonal',
    tags: [
      { component: Tag, props: { type: 'TagBlue', dot: false } },
      { component: Tag, props: { type: 'TagBlue', label: 'Label', dot: true } },
      {
        component: Tag,
        props: {
          type: 'TagBlue',
          label: 'Label',
          icon: 'east',
          iconPosition: 'left',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagBlueTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagBlueTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: true,
        },
      },
      {
        component: Tag,
        props: { type: 'TagBlueTonal', label: 'Label', dot: false },
      },
    ],
  },
  {
    title: 'Tag Red & Tag Red Tonal',
    tags: [
      { component: Tag, props: { type: 'TagRed', dot: false } },
      { component: Tag, props: { type: 'TagRed', label: 'Label', dot: true } },
      {
        component: Tag,
        props: {
          type: 'TagRed',
          label: 'Label',
          icon: 'east',
          iconPosition: 'left',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagRedTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagRedTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: true,
        },
      },
      {
        component: Tag,
        props: { type: 'TagRedTonal', label: 'Label', dot: false },
      },
    ],
  },
  {
    title: 'Tag Green & Tag Green Tonal',
    tags: [
      { component: Tag, props: { type: 'TagGreen', dot: false } },
      {
        component: Tag,
        props: { type: 'TagGreen', label: 'Label', dot: true },
      },
      {
        component: Tag,
        props: {
          type: 'TagGreen',
          label: 'Label',
          icon: 'east',
          iconPosition: 'left',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagGreenTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagGreenTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: true,
        },
      },
      {
        component: Tag,
        props: { type: 'TagGreenTonal', label: 'Label', dot: false },
      },
    ],
  },
  {
    title: 'Tag Yellow & Tag Yellow Tonal',
    tags: [
      { component: Tag, props: { type: 'TagYellow', dot: false } },
      {
        component: Tag,
        props: { type: 'TagYellow', label: 'Label', dot: true },
      },
      {
        component: Tag,
        props: {
          type: 'TagYellow',
          label: 'Label',
          icon: 'east',
          iconPosition: 'left',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagYellowTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagYellowTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: true,
        },
      },
      {
        component: Tag,
        props: { type: 'TagYellowTonal', label: 'Label', dot: false },
      },
    ],
  },
  {
    title: 'Tag Disabled',
    tags: [
      { component: Tag, props: { type: 'TagDisabled', dot: false } },
      {
        component: Tag,
        props: { type: 'TagDisabled', label: 'Label', dot: true },
      },
      {
        component: Tag,
        props: {
          type: 'TagDisabled',
          label: 'Label',
          icon: 'east',
          iconPosition: 'left',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagDisabledTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: false,
        },
      },
      {
        component: Tag,
        props: {
          type: 'TagDisabledTonal',
          label: 'Label',
          icon: 'east',
          iconPosition: 'right',
          dot: true,
        },
      },
      {
        component: Tag,
        props: { type: 'TagDisabledTonal', label: 'Label', dot: false },
      },
    ],
  },
  {
    title: 'Tag Skeleton',
    tags: [{ component: Tag, props: { type: 'TagSkeleton', dot: false } }],
  },
]
</script>

<style lang="scss" scoped>
.textfield {
  width: 300px;
}
</style>
