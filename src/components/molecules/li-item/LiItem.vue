<template>
    <q-item v-if="isVisible" class="q-item-container">
        <div v-if="showLeftButton" class="circle-button"
            :style="{ backgroundColor: isButtonClicked ? 'black' : 'transparent' }" @click="handleButtonClick"></div>
        <div class="main-text">{{ label }}</div>
        <div class="price-text">{{ price }}</div>
        <div class="circle-button-icon" @click="handleIconClick">
            <q-icon :name="rightIcon" size="xs" />
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
        showLeftButton: {
            type: Boolean,
            default: true,
        },
        label: {
            type: String,
            default: '',
        },
        price: {
            type: String,
            default: '',
        },
        rightIcon: {
            type: String,
            default: 'close',
        },
    },
    methods: {
        // Handle the icon click event
        handleIconClick() {
            if (this.rightIcon == 'close') {
                this.isVisible = false;
            } else {
                this.$emit('handleRightIcon')
            }
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