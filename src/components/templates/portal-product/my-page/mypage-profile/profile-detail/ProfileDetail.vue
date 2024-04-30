<template>
    <div class="profile-container">
        <div>My Profile</div>
        <div class="title">My Profile</div>
        <div class="profile-content">
            <div class="image-holder"></div>
            <div style="width: 44px; height: 44px; background-color: #253BFF; position: relative; bottom: 44px; left: 42px;
            border-radius: 100%; display: flex; justify-content: center; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M9.16699 3.33417H3.33366C2.89163 3.33417 2.46771 3.50977 2.15515 3.82233C1.84259 4.13489 1.66699 4.55881 1.66699 5.00084V16.6675C1.66699 17.1095 1.84259 17.5335 2.15515 17.846C2.46771 18.1586 2.89163 18.3342 3.33366 18.3342H15.0003C15.4424 18.3342 15.8663 18.1586 16.1788 17.846C16.4914 17.5335 16.667 17.1095 16.667 16.6675V10.8342M15.417 2.08417C15.7485 1.75265 16.1982 1.56641 16.667 1.56641C17.1358 1.56641 17.5855 1.75265 17.917 2.08417C18.2485 2.41569 18.4348 2.86533 18.4348 3.33417C18.4348 3.80301 18.2485 4.25265 17.917 4.58417L10.0003 12.5008L6.66699 13.3342L7.50033 10.0008L15.417 2.08417Z"
                        stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="name">Sakura Widiastuti</div>
            <div class="organization">{Organization}</div>
            <div class="profile-options">
                <div v-for="(button, index) in profileRoutes" :key="index" class="button-container">
                    <div class="profile-action-button" @click="moveToStep(index + 1)">
                        <div>{{ button.label }}</div>
                        <q-icon class="link-icon cursor-pointer" name="north_east" />
                    </div>
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
