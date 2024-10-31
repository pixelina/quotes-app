<template>
    <UiContainer class="homePage">
        <div class="homePage__card" v-if="quote">
            <q class="homePage__quote" @click="copyQuote">{{ quote.content }}</q>
            <div class="homePage__bottom">
                <UiButton class="homePage__shareButton" @click="shareOnX">Share on X</UiButton>
                <cite class="homePage__author">{{ quote.author }}</cite>
            </div>
        </div>
        <div class="homePage__error" v-else>Not Found</div>
        <UiSelector class="homePage__selector" :list="authorsList" v-model:value="selectedAuthor" />
        <UiButton class="homePage__button" @click="showNewQuote">Show new quote</UiButton>
    </UiContainer>
</template>

<script lang="ts" setup>
import UiButton from '@/components/UI/UiButton.vue';
import UiContainer from '@/components/UI/UiContainer.vue';
import UiSelector from '@/components/UI/UiSelector.vue';
import { Author, Quote } from '@/interfaces/interfaces';
import { useQuotesStore } from '@/store/quotesStore';

import { ref } from 'vue';

const quotesStore = useQuotesStore()
const quote = ref<Quote | undefined>({})
const authorsList = ref<Array<Author>>([])
const selectedAuthor = ref<string>('')

const run = async (): Promise<void> => {
    quote.value = await quotesStore.getRandomQuote();

    setHistory(quote.value);

    let currentPage = 1;
    let totalPages = 1;
    do {
        let authorsData = await quotesStore.getAuthors(currentPage);
        authorsList.value = [...authorsList.value, ...(authorsData?.results || [])];
        totalPages = authorsData?.totalPages ?? totalPages;
        currentPage = currentPage + 1;
    } while (currentPage <= totalPages);
}

const showNewQuote = async (): Promise<void> => {
    quote.value = await quotesStore.getRandomQuote(selectedAuthor.value);
    setHistory(quote.value);
    selectedAuthor.value = '';
}

const copyQuote = async (event: MouseEvent): Promise<void> => {
    const target = event.target as HTMLElement | null;

    if (target && target.innerText) {
        const text = target.innerText;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                alert("Text copied to clipboard!");
            } catch (error) {
                console.error("Failed to copy text: ", error);
            }
        } else {
            alert("Clipboard API not supported in this browser.");
        }
    } else {
        console.error("Failed to copy: target element is null or has no innerText.");
    }
}

const setHistory = (quote: Quote | undefined) => {
    let history = [];
    const historyItem = localStorage.getItem('history');

    if (historyItem && historyItem !== 'undefined') {
        const parsedHistory = JSON.parse(historyItem);
        if (Array.isArray(parsedHistory)) {
            history = parsedHistory;
        }
        localStorage.setItem('history', JSON.stringify([...history, { ...quote, date: new Date().toLocaleString() }]))
    }
    else {
        localStorage.setItem('history', JSON.stringify([{ ...quote, date: new Date().toLocaleString() }]))
    }
}


const shareOnX = (): void => {
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.value?.content} — ${quote.value?.author}`)}`;

    window.open(xUrl, '_blank');
};


//autorun
run();
</script>

<style lang="scss" scoped>
.homePage {
    &__card {
        width: 100%;
        border-radius: 5px;
        padding: 15px;
        background-color: $light-color;
        font-size: 30px;
        margin-bottom: 40px;
        display: flex;
        flex-flow: column;
        gap: 30px;
    }

    &__error {
        text-align: center;
        margin-bottom: 40px;
    }

    &__quote {
        cursor: pointer;
    }

    &__author {
        font-size: 20px;
        text-align: right;
    }

    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__shareButton {
        width: 30%;
    }

    &__selector {
        margin: 0 auto 20px;
    }

    &__button {
        margin: auto;
    }

    @media screen and (min-width: 1200px) {
        &__shareButton {
            width: 200px;
        }
    }
}
</style>