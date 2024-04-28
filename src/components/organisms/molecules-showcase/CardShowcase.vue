<template>
    <div class="q-mb-xl">
        <h1 class="heading-3 text-limegreen-900 text-center">Card</h1>
        <template v-for="(cardGroup, index) in cardGroups" :key="index">
            <div class="flex justify-around  q-mx-xl q-mb-xl">
                <template v-for="(card, cardIndex) in cardGroup.cards" :key="cardIndex">
                    <component :is="card.component" v-bind="card.props" />
                </template>
            </div>
        </template>
    </div>
    <div class="q-mb-xl">
        <h1 class="heading-3 text-limegreen-900 text-center">Multi Select Card</h1>
        <div class="flex justify-center q-mx-xl q-mb-xl">
            <Card v-for="(card, index) in infoCard" :key="index" :title="card.title" size="sm"
                :selected="selectedIndex == index" :style="{ marginRight: '16px' }" @click="toggleSelect(index)" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '../../molecules/card/Card.vue'

const cardGroups = [
    {
        cards: [{
            component: Card,
            props: {
                title: 'Portal & Help Desk',
                description: '어쩌구저쩌구가 포함되어있습니다.',
                price: '$ {}',
                subscription: 'USD/mo',
                size: 'lg'
            }
        }]
    },

    {
        cards: [{
            component: Card,
            props: {
                title: 'Portal & Help Desk',
                description: '{Description}',
                price: '1',
                size: 'md'
            }
        }]
    },

    {
        cards: [{
            component: Card,
            props: {
                title: 'Organization',
                size: 'sm'
            }
        }]
    }
]

const infoCard = ref([
    {
        title: 'Individual',
        size: 'sm'
    },
    {
        title: 'Organization',
        size: 'lg'
    }
]);

// Define a reactive property to track the selected index
const selectedIndex = ref(null);

// Function to handle card selection
function toggleSelect(index) {
    selectedIndex.value = index;
}

</script>

<style lang="scss" scoped>
.textfield {
    width: 300px;
}
</style>