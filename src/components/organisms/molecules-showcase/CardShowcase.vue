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
</template>

<script setup>
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
                isSelected: false,
                size: 'lg'
            }
        },
        {
            component: Card,
            props: {
                title: 'Portal & Help Desk',
                description: '어쩌구저쩌구가 포함되어있습니다.',
                price: '$ {}',
                subscription: 'USD/mo',
                isSelected: true,
                size: 'lg'
            }
        },]
    },

    {
        cards: [{
            component: Card,
            props: {
                title: 'Portal & Help Desk',
                description: '{Description}',
                price: '1',
                isSelected: false,
                size: 'md'
            }
        },
        {
            component: Card,
            props: {
                title: 'Portal & Help Desk',
                description: '{Description}',
                price: '1',
                isSelected: true,
                size: 'md'
            }
        },]
    },


    {
        cards: [{
            component: Card,
            props: {
                title: 'Organization',
                isSelected: false,
                size: 'sm'
            }
        },
        {
            component: Card,
            props: {
                title: 'Individual',
                isSelected: true,
                size: 'sm'
            }
        },]
    }
]
</script>

<style lang="scss" scoped>
.textfield {
    width: 300px;
}
</style>