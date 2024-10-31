<template>
    <button class="uiButton">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.uiButton {
    width: 100%;
    height: 50px;
    background-color: $dark-color;
    color: $light-color;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto Regular';
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: $light-color;
        color: $dark-color;
    }

    @media screen and (min-width: 768px) {
        width: 200px;
    }

    @media screen and (min-width: 1200px) {
        width: 300px;
    }
}
</style>