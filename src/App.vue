<template>
  <div>
    <AppHeader />

    <main>
      <RouterView></RouterView>
    </main>

    <footer></footer>
    <UiNotification />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from './components/elements/AppHeader.vue';
import UiNotification from './components/UI/UiNotification.vue';

</script>

<style lang="scss">
@import '@/assets/scss/base/_modern-normalize';
@import '@/assets/scss/base/_default-settings';

main {
  margin: 30px auto;
}
</style>