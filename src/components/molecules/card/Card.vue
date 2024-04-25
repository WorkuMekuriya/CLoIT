<template>
    <q-card :style="{
        width: size === 'lg' || size === 'md' ? '389px' : 'auto',
        padding: size === 'lg' || size === 'md' ? '12px' : '8px',
        backgroundColor: isSelected ? '#253BFF' : '#FFFFFF',
    }" style="border-radius: 24px;" class="card-container">
        <div class="card-header">
            <div class="header-title">
                <div class="card-title">{{ label }}</div>
                <div class="card-description">{{ description }}</div>
            </div>
            <q-checkbox v-model="isSelected" dense circle style="position: absolute; top: 12px; right: 12px;"
                @change="toggleCardType" />
        </div>
        <div class="card-content">
            <div class="footer-text">
                <div class="card-price">{{ price }}</div>
                <div class="card-price">{{ type }}</div>
            </div>
        </div>
    </q-card>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'Default',
        },
        size: {
            type: String,
            default: 'md',
            validator: (value) => ['sm', 'md', 'lg'].includes(value),
        },
        label: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        price: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            isSelected: false,
        };
    },
    methods: {
        toggleCardType() {
            // Toggle the card type based on the checkbox state
            if (this.isSelected) {
                this.type = 'Selected';
            } else {
                this.type = 'Default';
            }
        },
    },
};
</script>

<style scoped>
.card-content {
    display: flex;
    width: 389px;
    height: 240px;
    padding: 12px 12px 24px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
    border-radius: 36px;
    /* border: 1px solid var(--Blue-Gray-300, #D0D5DD); */
}

.card-component {
    border-radius: 24px;
    position: relative;
}

.header-title {
    display: flex;
    padding-top: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--8, 8px);
    flex: 1 0 0;
}

.card-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
    align-self: stretch;
}

.footer-text {
    display: flex;
    width: 351px;
    align-items: flex-end;
    gap: 16px;
}

.card-content {
    padding-top: 12px;
}

.card-title {
    font-weight: bold;
    margin-bottom: 8px;
}

.card-description {
    margin-bottom: 8px;
}

.card-price {
    font-weight: bold;
    color: #007BFF;
}
</style>