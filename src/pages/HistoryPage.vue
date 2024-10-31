<template>
    <UiContainer class="historyPage">
        <div v-if="history.length">
            <ul class="historyPage__list">
                <li class="historyPage__item" :key="quote._id" v-for="quote in reverseHistory">
                    <HistoryCard :quote="quote" />
                </li>
            </ul>
        </div>
        <div v-else>History is empty</div>
    </UiContainer>
</template>

<script lang="ts" setup>
import HistoryCard from '@/components/elements/HistoryCard.vue';
import UiContainer from '@/components/UI/UiContainer.vue';
import { Quote } from '@/interfaces/interfaces';
import { computed, ref } from 'vue';

const history = ref<Array<Quote>>([])
const reverseHistory = computed(() => {
    return [...history.value].reverse()
})

const run = (): void => {
    const historyItem = localStorage.getItem('history');

    if (historyItem && historyItem !== 'undefined') {
        const parsedHistory = JSON.parse(historyItem);
        if (Array.isArray(parsedHistory)) {
            history.value = parsedHistory;
        }
    }
}

//autorun
run();
</script>

<style lang="scss" scoped>
.historyPage {
    &__list {
        display: flex;
        flex-flow: column;
        gap: 15px;
    }
}
</style>