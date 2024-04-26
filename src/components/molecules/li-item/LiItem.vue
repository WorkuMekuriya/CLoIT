<template>
    <q-item v-if="isVisible">
        <div class="circle-button" :style="{ backgroundColor: isButtonClicked ? 'white' : 'transparent' }"
            @click="handleButtonClick"></div>
        <div class="main-text">{{ label }}</div>
        <div class="price-text">{{ price }}</div>
        <div class="circle-button-icon" @click="handleIconClick">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="white" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </q-item>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true,
            isButtonClicked: false,
        };
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        price: {
            type: String,
            default: '',
        },
    },
    methods: {
        // Handle the icon click event
        handleIconClick() {
            this.isVisible = false; // Hide the component
        },

        // Handle the circle button click event
        handleButtonClick() {
            this.isButtonClicked = !this.isButtonClicked; // Change the background color of the circle button to white
        }
    }
};
</script>

<style lang="scss" scoped>
@import 'LiItem.style.scss';
</style>