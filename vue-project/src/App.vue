<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useFinanceStore } from './store/useFinanceStore'

const colors = ['#0891b2', '#111827']
const currentIndex = ref(0)
const store = useFinanceStore();

const toggleColor = () => {
  currentIndex.value = currentIndex.value === 0 ? 1 : 0
  localStorage.setItem('currentIndex', JSON.stringify(currentIndex.value))
}

const currentColor = computed(() => colors[currentIndex.value])

onMounted(() => {
  store.loadFromStorage()  
})
</script>

<template>
  <AppHeader :currentColor="currentColor" />

  <router-view />
  
  <AppFooter @toggle-theme="toggleColor" />
</template>

<style>
</style>