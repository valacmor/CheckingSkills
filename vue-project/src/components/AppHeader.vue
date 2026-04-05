<script setup lang="ts">

defineProps<{
  currentColor: string
}>()
</script>

<template>
  <div class="main_header_body" :style="{ backgroundColor: currentColor }">
    <header class="main_header">
      <h1 class="h1_header">Finances calculator</h1>
    </header>

    <nav>
      <router-link to="/" class="navigation_button_primary">Главная</router-link>
      <router-link to="/stats" class="navigation_button">Статистика</router-link>
      <router-link to="/settings" class="navigation_button">Настройки</router-link>
    </nav>
  </div>
  
</template>

<style scoped>
.main_header_body {
  min-height: 20dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.main_header {
  background-color: var(--color-primary);
  width: 600px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.h1_header {
  color: var(--color-background);
  font-size: 30px;
}

.navigation_button{
  color: var(--color-surface);
  background-color: var(--color-navigation);
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  border: none;
  padding: 4px 8px 4px 8px;
  margin: 0px 5px 0px 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.navigation_button:hover{
  background-color: var(--color-select);
  transition: 0.6s;
}

.navigation_button_primary{
  color: var(--color-surface);
  background-color: var(--color-success);
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  border-style: none;
  padding: 4px 8px 4px 8px;
  margin: 0px 5px 0px 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.navigation_button_primary:hover{
  background-color: var(--color-select);
  transition: 0.6s;
}
</style>