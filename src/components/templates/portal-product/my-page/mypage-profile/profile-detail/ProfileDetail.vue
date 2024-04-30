<template>
    <div class="profile-container">
        <div>My Profile</div>
        <div class="title">My Profile</div>
        <div class="profile-content">
            <div class="image-holder"></div>
            <div style="width: 44px; height: 44px; background-color: blue; position: relative; bottom: 44px; left: 42px;
            border-radius: 100%; display: flex; justify-content: center; align-items: center;">
                <q-icon name="edit_note" size="sm" color="white" />
            </div>
            <div class="name">Sakura Widiastuti</div>
            <div class="organization">{Organization}</div>
            <div class="profile-options">
                <div v-for="(button, index) in profileRoutes" :key="index" class="button-container">
                    <StandardButton type="BlueGray" outlined leftIcon="" rightIcon="north_east" :label="button.label"
                        buttonWidth="380px" @click="moveToStep(index + 1)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import StandardButton from 'src/components/molecules/buttons/standard-buttons/StandardButtons.vue';

const profileRoutes = [
    { label: 'Edit my profile', route: '/edit-profile' },
    { label: 'Edit organization', route: '/edit-organization' },
    { label: 'Reset password', route: '/reset-password' },
    { label: '1:1 문의내역', route: '/inquiry-history' }
];

const emits = defineEmits(['nextStep']);

const moveToStep = (index) => {
    emits('nextStep', index);
}
</script>

<style scoped lang="scss">
@import 'ProfileDetail.style.scss'
</style>
