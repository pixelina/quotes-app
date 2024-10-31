<template>
    <header class="appHeader">
        <UiContainer class="appHeader__container">
            <nav class="appHeader__navigation">
                <ul class="appHeader__pages">
                    <li class="appHeader__item">
                        <router-link to="/" exact-active-class="appHeader__page--active"
                            class="appHeader__page">Home</router-link>
                    </li>
                    <li class="appHeader__item">
                        <router-link to="/history" exact-active-class="appHeader__page--active"
                            class="appHeader__page">History</router-link>
                    </li>
                </ul>
            </nav>
        </UiContainer>
    </header>
</template>

<script lang="ts" setup>
import UiContainer from '../UI/UiContainer.vue';

</script>

<style lang="scss" scoped>
.appHeader {
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
    background-color: $main-color;

    &__container {
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
    }

    &__pages {
        display: flex;
        flex-flow: row;
        gap: 10px;
        align-items: center;
        margin: auto;
    }

    &__page {
        font-size: 15px;
        color: $dark-color;

        &--active {
            text-decoration: underline;
        }
    }

}
</style>