<template>
    <h1>{{ message }}</h1>

    <h1>number {{ number }}</h1>
    <button @click="handleChageMessage">Click me</button>
    <button @click="handleNumner">number += 1</button>
    <button @click="handleNumner1">number += 1</button>

</template>


<script setup>

import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'


let message = ref('Trang đơn hàng')
let number = ref(1)

onBeforeMount(() => {
    console.log('onBeforeMount....')
})

onMounted(() => {
    console.log('onMounted...')
})

onBeforeUnmount(() => {
    console.log('onBeforeUnmount...')
})

onUnmounted(() => {
    console.log('onUnmounted...')
})

const handleChageMessage = () => {
    message.value = "Trang dang nhap"
}

const handleNumner = () => {
    number.value += 1
}

const handleNumner1 = () => {
    number.value -= 1
}



</script>