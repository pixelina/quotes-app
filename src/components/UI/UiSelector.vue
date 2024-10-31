<template>
    <div class="uiSelector">
        <Multiselect v-model="selectedValue" :searchable="true" label="name" valueProp="name"
                :options="list" />
    </div>
</template>

<script lang="ts" setup>
import Multiselect from '@vueform/multiselect';
const selectedValue = defineModel('value');

const { list } = defineProps({
    list: {
        type: Array
    }
})
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
.uiSelector {
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 200px;
    }

    @media screen and (min-width: 1200px) {
        width: 300px;
    }
}
</style>