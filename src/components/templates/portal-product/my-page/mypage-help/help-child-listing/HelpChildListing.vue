<template>
    <div>
        <div class="breadcrumb">
            <div class="help-center">Help Center</div>
            <div class="breadcrumb-separator"> 〉</div>
            <span class="help-center">Getting Started</span>
            <div class="breadcrumb-separator">〉</div>
            <span class="breadcrumb-item">Overview</span>
        </div>
        <div class="header-container">
            <div class="header-title">Overview</div>
            <div>
                <TextField class="textfield" bottomLeftDescription="" placeholder="Search..." bottomRightDescription=""
                    iconLeft="search" label="" iconRight="" style="width: 321px;" />
            </div>
        </div>
        <div class="description-text">Lorem ipsum dolor sit amet
            consectetur. Leo interdum quam sit est enim. Morbi eget nibh cursus
            vitae tellus volutpat. Tempus massa vitae turpis non porttitor sed euismod at at. Fames in tortor vel at
            nullam. Sollicitudin sed semper eu nunc volutpat. Iaculis ornare elit feugiat tincidunt pharetra ut
            gravida sed nibh. Nec luctus fermentum metus morbi scelerisque sit cras at. Ante dictumst dictum sed
            nulla lobortis velit vitae eu consequat. Parturient consectetur egestas consectetur bibendum integer
            hendrerit cras. Cras sit risus ullamcorper quis praesent nunc in. Purus lectus eleifend adipiscing
            egestas eget rutrum. Leo cras nulla euismod quis tortor feugiat tellus sit gravida.
            <br />
            Euismod commodo vitae elit aliquam malesuada euismod faucibus. Turpis pretium posuere a aenean purus
            feugiat. Senectus non quis commodo bibendum lectus mauris elementum vivamus blandit. Ut in purus dui
            eros malesuada ultrices posuere magna. Turpis quis tincidunt urna mus dapibus quis neque augue. Gravida
            quis ut bibendum vel mi sollicitudin. Neque convallis maecenas cursus sem est nibh. Lectus amet amet
            molestie vestibulum integer potenti gravida fames. Nunc libero maecenas dignissim ultrices viverra purus
            fames. Praesent vitae varius mauris consequat mi viverra gravida. Tempus in eget magna ornare molestie
            tristique.
        </div>
        <div class="grid-container">
            <div v-for="(item, index) in listOfImages" :key="index" class="overview-box"></div>
        </div>
    </div>
</template>

<script setup>
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue';
const listOfImages = [1, 2, 3]
const emits = defineEmits(['nextStep']);

const moveToStep = () => {
    emits('nextStep', 1);
}
</script>

<style lang="scss" scoped>
@import 'HelpChildListing.style.scss';
</style>
