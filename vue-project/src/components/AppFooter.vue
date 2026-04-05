<script setup lang="ts">
defineEmits(['toggle-theme'])
</script>

<template>
  <footer class="app-footer">
    <button @click="$emit('toggle-theme')">Темная/Светлая тема</button>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 20px;
  text-align: center;
}

button {
  background-color: var(--color-primary);
  color: var(--color-background);
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>