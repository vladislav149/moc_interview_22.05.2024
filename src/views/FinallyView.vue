<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const data = ref(null)
const numberOfPost = ref(80)
const isLoading = ref(false)
const hasError = ref(false)

async function getData() {
  try {
    isLoading.value = true
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${numberOfPost.value}`)
    if (response.status !== 200) throw new Error('ошибка')

    data.value = await response.json()
  } catch (error) {
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}

function getNextPage() {
  numberOfPost.value++
}

onMounted(getData)

const interval = setInterval(() => {
  getNextPage()
  getData()
}, 1000)

onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <h2>О finally</h2>
  <h3>
    Тут каждую секунду вызываются функции и как видишь есть переменная isLoading которая отвечает за
    показ текста "Загрузка...". Она становить в блоке try в true, а в блоке finally мы её сбрасываем
    в false, чтобы она сбросилась в любом случае. Даже если будет ошибка, то нам не следует выводить
    "Загрузка...". Это такой типичный код, который ты встретишь очень-очень часто.
  </h3>
  <p>Когда номер страницы будет больше 100 ты увидишь ошибки</p>

  <h4>номер страницы - {{ numberOfPost }}</h4>

  <div v-if="isLoading">Загрузка...</div>
  <div v-else-if="hasError">Ошибка получения данных</div>
  <div v-else>
    {{ data }}
  </div>
</template>
