<template>
    <div style="padding-left: 136px; padding-right: 136px;">
        <div>My Profile Reset Password</div>
        <div style="font-weight: 800; font-size: 32px;">Reset Password</div>
        <div style="display: flex; margin-top: 60px;">
            <RoundedButton type='Primary' :isLoading=false label='Reset Password' leftIcon='' :rightIcon=false
                :buttonDisabled=false buttonWidth="186px" @click="backStep" />

        </div>
    </div>
</template>
<script setup>
import RoundedButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyleRoundedButton.vue'
const profileRoutes = []
const emits = defineEmits(['nextStep']) // Define the 'clicked' event

// Method to emit the 'clicked' event
const backStep = () => {
    emits('nextStep', 0);
}

</script>

<style lang="scss" scoped></style>