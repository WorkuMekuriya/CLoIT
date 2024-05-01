<template>
    <div class="breadcrumb">
        <div class="help-center">My Profile</div>
        <div class="breadcrumb-separator"> 〉</div>
        <span class="breadcrumb-item">Inquiry</span>
    </div>
    <div class="inquiry-container">
        <div class="header-container">
            <div class="header-title">Inquiry</div>
            <div class="add-icon-container" @click="newInquiry">
                <q-icon name="add" size="sm" color="white" />
            </div>
        </div>
        <div class="inquiries-container">
            <div v-for="(inquiry, index) in inquiries" :key="index" class="inquiry-card" @click="inquiryDetail">
                <div style="display: flex; align-items: center;">
                    <Tag :type="inquiry.tagType" :label="inquiry.tag" :dot="false" size="md" />
                    <div class="inquiry-label">{{ inquiry.label }}</div>
                </div>
                <div class="header-container">
                    <div class="inquiry-date">{{ inquiry.date }}</div>
                    <q-icon class="link-icon" name="north_east" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Tag from 'src/components/molecules/form-components/tag/Tag.vue';
import CircularButton from 'src/components/molecules/buttons/conditionally-styled-buttons/ConditionalStyledCircularButton.vue';

// Emit event to parent when the user wants to navigate to the next step.
const emit = defineEmits(['nextInquiry']);

// Define method to emit the 'nextInquiry' event when CircularButton is clicked.
const inquiryDetail = () => {
    emit('nextInquiry', 2); // Provide the desired step index (2) when emitting.
};

// Define method to emit the 'newInquiry' event when the add icon is clicked.
const newInquiry = () => {
    emit('nextInquiry', 1); // Provide the desired step index (1) when emitting.
};

const inquiries = ref([
    { label: 'I want a refund', date: 'YYYY-MM-DD', tag: '신청함', tagType: 'TagSkeletonTonal' },
    { label: 'Cannot validate AD card', date: 'YYYY-MM-DD', tag: '답변완료', tagType: 'TagBlue' },
    { label: 'Cannot validate AD card', date: 'YYYY-MM-DD', tag: '답변완료', tagType: 'TagBlue' },
    { label: 'Cannot validate AD card', date: 'YYYY-MM-DD', tag: '답변완료', tagType: 'TagBlue' },
    { label: 'Cannot validate AD card', date: 'YYYY-MM-DD', tag: '답변완료', tagType: 'TagBlue' },
]);
</script>

<style scoped lang="scss">
@import 'Inquiry.style.scss';
</style>
