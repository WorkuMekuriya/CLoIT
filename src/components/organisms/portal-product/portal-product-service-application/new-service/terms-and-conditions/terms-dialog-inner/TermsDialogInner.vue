<template>
  <div class="terms-dialog-inner">
    <div class="content">
      <p class="title">{{  name }}</p>
      <p class="text">
          {{ detail }}
      </p>
    </div>
    <div class="action flex justify-center items-center">
      <ConditionalStyleRoundedButton type="Primary" label="Agree" buttonWidth="520px" />
    </div>
  </div>
</template>
<script setup>
import ConditionalStyleRoundedButton from '../../../../../../../components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue';
const props = defineProps({
  name: {
    type: String,
    default: "Privacy Policy"
  },
  detail: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur. Leo interdum quam sit est enim. Morbi eget nibh cursus vitae tellus volutpat. Tempus massa vitae turpis non porttitor sed euismod at at. Fames in tortor vel at nullam. Sollicitudin sed semper eu nunc volutpat. Iaculis ornare elit feugiat tincidunt pharetra ut gravida sed nibh. Nec luctus fermentum metus morbi scelerisque sit cras at. Ante dictumst dictum sed nulla lobortis velit vitae eu consequat. Parturient consectetur egestas consectetur bibendum integer hendrerit cras. Cras sit risus ullamcorper quis praesent nunc in. Purus lectus eleifend adipiscing egestas eget rutrum. Leo cras nulla euismod quis tortor feugiat tellus sit gravida.Euismod commodo vitae elit aliquam malesuada euismod faucibus. Turpis pretium posuere a aenean purus feugiat. Senectus non quis commodo bibendum lectus mauris elementum vivamus blandit. Ut in purus dui eros malesuada ultrices posuere magna. Turpis quis tincidunt urna mus dapibus quis neque augue. Gravida quis ut bibendum vel mi sollicitudin. Neque convallis maecenas cursus sem est nibh. Lectus amet amet molestie vestibulum integer potenti gravida fames. Nunc libero maecenas dignissim ultrices viverra purus fames. Praesent vitae varius mauris consequat mi viverra gravida. Tempus in eget magna ornare molestie tristique. Amet cras nullam sit neque aenean nam eleifend.Ante dictumst dictum sed nulla lobortis velit vitae eu consequat. Parturient consectetur egestas consectetur bibendum integer hendrerit cras. Cras sit risus ullamcorper quis praesent nunc in. Purus lectus eleifend adipiscing egestas eget rutrum. Leo cras nulla euismod quis tortor feugiat tellus sit gravida.Euismod commodo vitae elit aliquam malesuada euismod faucibus. Turpis pretium posuere a aenean purus feugiat. Senectus non quis commodo bibendum lectus mauris elementum vivamus blandit. Ut in purus dui eros malesuada ultrices posuere magna. Turpis quis tincidunt urna mus dapibus quis neque augue. Gravida quis ut bibendum vel mi sollicitudin. Neque convallis maecenas cursus sem est nibh. Ante dictumst dictum sed nulla lobortis velit vitae eu consequat. Parturient consectetur egestas consectetur bibendum integer hendrerit cras. Cras sit risus ullamcorper quis praesent nunc in. Purus lectus eleifend adipiscing egestas eget rutrum. Leo   egestas eget rutrum. Leo cras nulla euismod quis tortor feugiat tellus sit gravidaEuismod commodo vitae elit aliquam malesuada euismod faucibus. Turpis pretium posuere a aenean purus feugiat. Senectus non quis commodo bibendum lectus mauris elementum vivamus blandit. Ut in purus dui eros'
  },
})
</script>
<style lang="scss" scoped>
@import 'TermsDialogInner.style.scss';
</style>
