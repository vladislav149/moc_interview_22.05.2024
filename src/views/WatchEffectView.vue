<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const data = ref(null)
const numberOfPost = ref(1)

async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${numberOfPost.value}`)
  data.value = await response.json()
}

function getNextPage() {
  numberOfPost.value++
}

watchEffect(getData)
</script>

<template>
  <h1>
    watchEffect срабатывает сразу же и плюс тут не надо указывать за какими данными следить, он сам
    видит, что внутри функции getData есть реактивная переменная numberOfPost и когда она изменяется
    тогда он вызывает функцию getData еще раз
  </h1>
  <button @click="getNextPage">следующая страница</button>
  {{ data }}
</template>
