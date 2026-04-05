<script setup lang="ts">
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const props = defineProps<{
  income: number
  expense: number
}>()

const chartData = computed(() => ({
  labels: ['Доходы', 'Расходы'],
  datasets: [
    {
      data: [props.income, props.expense],
      backgroundColor: ['#10b981', '#ef4444'], //green & red
      borderWidth: 1
    }
  ]
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const
    }
  }
}
</script>

<template>
  <div class="chart-container">
    <h3>Соотношение доходов и расходов</h3>
    <Pie :data="chartData" :options="chartOptions"/>
  </div>
</template>

<style scoped>
.chart-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--color-surface);
  border-radius: 10px;
}
</style>