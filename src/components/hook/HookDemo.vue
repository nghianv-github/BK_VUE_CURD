
<!--
beforeCreate:
    -Hook này được gọi trước khi Vue instance được tạo ra.
        Tại đây,data và events của component chưa được khởi tạo.
    -Thích hợp để thực hiện các tác vụ trước khi data và events được khởi tạo.
-->


<template>
    <div class="container">
        <p>{{ message }}</p>

        <button @click="handleClickMe">click me</button>

        <h1>Two way binding {{ email }}</h1>
        <input v-model="email">

        <h1>Demo v-for</h1>
        <ul>
            <li @click="handleIsActive(index)" v-for="(item, index) in userBaoKim" v-bind:key="index" :class="{
                'is-active': isActive === index
            }">{{ item }}</li>
        </ul>


        <router-link to="/admin/product">page product</router-link>
    </div>
</template>

<script setup>

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

import {productStoreConfig} from '@/stores/modules/productStoreConfig/index.js'


const productStore = productStoreConfig()
productStore.products = [
    1, 2, 3
];

console.log('productStoreConfig', productStore.getProducts)


let message = ref(0);

let email = ref('')

let userBaoKim = [
    'Tung',
    'Thuan',
    'Tuan'
];

let isActive = ref(null);

const handleIsActive = index => {
    isActive.value = index;
}

onBeforeMount(() => {
    console.log('onBeforeMount')
})
onMounted(() => {
    console.log('onMounted')
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate', message.value)
})
onUpdated(() => {
    console.log('onUpdated', message.value)
})
onBeforeUnmount(() => {
    delete message.value
    console.log('onBeforeUnmount')
})
onUnmounted(() => {
    console.log('onUnmounted')
})

const handleClickMe = () => {
    message.value++
}

</script>

<style scoped>
.is-active{
    color: red;
}

</style>