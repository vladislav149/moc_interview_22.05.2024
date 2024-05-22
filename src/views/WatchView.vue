<script setup lang="ts">
import { ref, watch } from 'vue'

const data = ref(null)
const numberOfPost = ref(1)

async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${numberOfPost.value}`)
  data.value = await response.json()
}

function getNextPage() {
  numberOfPost.value++
}

watch(numberOfPost, getData)
</script>

<template>
  <h1>
    Как ты можешь заметить watch не сработал сразу и я указал, что нужно следить за изменениями
    numberOfPost
  </h1>
  <button @click="getNextPage">следующая страница</button>
  {{ data }}
</template>
