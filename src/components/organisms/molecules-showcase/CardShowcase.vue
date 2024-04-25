<template>
    <div class="q-mb-xl">
        <h1 class="heading-3 text-limegreen-900 text-center">Card</h1>
        <template v-for="(cardGroup, index) in cardGroups" :key="index">
            <div>
                <div class="flex justify-around q-mx-xl q-mb-lg">
                    <template v-for="(card, cardIndex) in cardGroup.cards" :key="cardIndex">
                        <component :is="card.component" v-bind="card.props" />
                    </template>
                </div>
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
                type: 'Default',
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
                type: 'Selected',
                size: 'lg'
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