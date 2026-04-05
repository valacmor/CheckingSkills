<script setup lang="ts">
import { useFinanceStore } from '@/store/useFinanceStore';
import BudgetChart from '@/components/BudgetChart.vue';
const store = useFinanceStore();


</script>

<template>
    <BudgetChart :income="store.totalIncome" :expense="store.totalExpense" />
    <div class="total_cash">
        <div class="total_div">Всего заработано: {{ store.totalIncome }}$ </div>
        <div class="total_div">Всего потрачено: {{ store.totalExpense }}$ </div>
        <div class="total_div">Осталось от бюджета: {{ store.budgetLeft }}$ </div>
    </div>
</template>

<style scoped>
.total_cash {
  background-color: var(--color-border);
  padding: 8px 0;
  margin: 30px auto; 
  border-radius: 3px;
  max-width: 300px;
}

.total_div{
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>