<template>
    <div class="uiNotification" v-if="notificationStore.notification.isShown">
        <div class="uiNotification__status">
            <svg class="uiNotification__svg" width="24" height="20">
                <use href="@/assets/images/symbol-defs.svg#icon-error"></use>
            </svg>
        </div>
        <div class="uiNotification__info">
            <h5 class="uiNotification__title">Status: {{ notificationStore.notification.status }}</h5>
            <p class="uiNotification__description">{{ notificationStore.notification.message }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useNotificationStore } from '@/store/notificationStore';

const notificationStore = useNotificationStore()
</script>

<style lang="scss" scoped>
.uiNotification {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1000;
    display: flex;
    flex-flow: row;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;

    &__status {
        background-color: darkred;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__svg {
        fill: white;
    }

    &__info {
        width: 170px;
        height: 60px;
        padding: 10px;
    }

    &__title {
        font-size: large;
        margin-bottom: 5px;
    }

    &__description {
        font-size: medium;
    }
}
</style>