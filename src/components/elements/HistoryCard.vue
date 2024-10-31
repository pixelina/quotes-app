<template>
    <div class="historyCard">
        <span class="historyCard__date">{{ quote?.date }}</span>
        <q class="historyCard__quote">{{ quote?.content }}</q>
        <cite class="historyCard__author">{{ quote?.author }}</cite>
    </div>
</template>

<script lang="ts" setup>
import { Quote } from '@/interfaces/interfaces';
import { PropType } from 'vue';

const { quote } = defineProps({
    quote: {
        type: Object as PropType<Quote>
    }
});

</script>

<style lang="scss" scoped>
.historyCard {
    width: 100%;
    padding: 20px;
    background-color: $light-color;
    border-radius: 5px;
    border: 1px solid $dark-color;
    display: flex;
    flex-flow: column;

    &__date {
        margin-bottom: 15px;
    }

    &__quote {
        margin-bottom: 8px;
    }
}
</style>