<template>
    <div>
        <div class="flex-container">
            <div class="help-center-link">Help Center</div>
            <div class="separator">〉</div>
            <span class="getting-started-link">Getting Started</span>
        </div>
        <div class="header-container">
            <div class="header-title">Getting Started</div>
            <div>
                <TextField class="textfield" bottomLeftDescription="" placeholder="Search..." bottomRightDescription=""
                    iconLeft="search" label="" iconRight="" style="width: 321px;" />
            </div>
        </div>
        <div class="subtitle">기본적인 사용법을 익힐 수 있습니다.</div>
        <div v-for="(getStart, index) in getStartedList" :key="index" class="container-listing" @click="moveToStep">
            <div class="listing-title">{{ getStart }}</div>
            <q-icon class="link-icon cursor-pointer" name="north_east" size="12" />
        </div>
    </div>
</template>

<script setup>
import TextField from 'src/components/molecules/form-components/fields/textfield/TextField.vue';

const emits = defineEmits(['nextStep']);
const moveToStep = () => {
    emits('nextStep', 2);
}

const getStartedList = [
    'Overview', 'Event Info', 'Register', 'Locations', 'Scan & Attach Files to your registration', 'Update your profile', 'Organization', 'Overview', 'Overview', '추가서비스 신청', '옵션변경'
]
</script>

<style lang="scss" scoped>
@import 'HelpParentListing.style.scss';
</style>
