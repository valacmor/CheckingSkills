<script setup lang="ts">
import { useFinanceStore } from '@/store/useFinanceStore';


const store = useFinanceStore();
</script>


<template>
  <div class="main_body">
    <div class="div_balance_buttons">
      <h2 class="balanceText">Добавление / Убавление баланса</h2>
      <div><input class="cash_input" type="number" v-model="store.inputAmount"/></div>
      <button class="balance_button" @click="store.AddCash()">Add</button>
      <button class="expense_button" @click="store.AddExpense()">Delete</button>

      <h2 class="balanceText">Установление бюджета</h2>
      <div>
        <span><input class="cash_input" type="number" v-model="store.budgetLimit"/></span>
        <span class="default_text">(при 20% остатка будет уведомление)</span>
      </div>
      <div>
        <span :class="{ 'budget_warning': store.isBudgetWarning, 'budget_normal': !store.isBudgetWarning}">
          Осталось от бюджета: {{ store.budgetLeft }}
        </span>
      </div>
      <div class="balance_title">
        <h2 class="balanceText">Баланс: {{store.balance}} $</h2>
        <select class="transcations_type_select" v-model="store.filterType">
          <option value="all">Всё</option>
          <option value="income">Пополнения</option>
          <option value="expense">Траты</option>
        </select>
      </div>
    </div>
    
    <div class="transactions_history">
        <ul>
          <li v-for="transaction in store.recentTransactions" :key="transaction.id">
            <span :class="{'income_style': transaction.type === 'income', 
            'expense_style': transaction.type === 'expense'}">
      {{ transaction.description }} {{ transaction.amount }} $
            </span>
            <button class="transaction_delete_button" @click="store.deleteTransaction(transaction.id)">Удалить</button>
          </li>
        </ul>
    </div>
    <div class="pagination-wrapper">
      <button class="pagination_button" @click="store.pagination(-1)"><</button>
      <button class="pagination_button" @click="store.pagination(1)">></button>
    </div>
  </div>
</template>




<style scoped>

.main_body{
  min-height: 80dvh;
  background-color: var(--color-text);
  padding: 10px;
}

.pagination_button{
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

.pagination_button:hover{
  background-color: var(--color-select);
  transition: 0.6s;
}

.pagination-wrapper{
  display: flex;
  justify-content: center;
  margin: 5px 0px 5px 0;
}

.div_balance_buttons{
  padding-left: 50px;
  padding-top: 50px;
}

.balance_button{
  color: var(--color-background);
  background-color: var(--color-primary);
  height: 60px;
  width: 120px;
  margin: 0px 5px 0px 0px;
  text-shadow: 30px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: -5px -5px 5px -5px rgba(11, 67, 119, 0.6);
}

.expense_button{
  color: var(--color-background);
  background-color: var(--color-error);
  height: 60px;
  width: 120px;
  margin: 0px 5px 0px 5px;
  text-shadow: 30px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: -5px -5px 5px -5px rgba(136, 20, 20, 0.6);
}

.cash_input{
  color: var(--color-text);
  background-color: var(--color-surface);
  height: 25px;
  width: 120px;
  margin: 10px 0px 10px 0px;
  text-shadow: 30px;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: -5px -5px 5px -5px rgba(0, 132, 255, 0.6);
}

.budget_normal{
  color: var(--color-surface);
  font-size: 17px;
  margin: 0px 0px 0px 10px
}

.budget_warning{
  color: var(--color-error);
  font-size: 17px;
  margin: 0px 0px 0px 10px
}

.balanceText{
  color: var(--color-surface);
  margin: 5px 0px 0px 0px;
  padding: 0px 5px 0px 5px;
}

.transactions_history{
  color: var(--color-text);
  background-color: var(--color-surface);
  font-size: 20px;
  border-radius: 3px;
  padding: 20px;
  margin: 10px 30px 3px 30px;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.income_style{
  color: var(--color-success);
}

.expense_style{
  color: var(--color-error)
}


.default_text{
  color: var(--color-success);
  font-size: 20px;
  margin: 0px 0px 0px 10px;
}


.transaction_delete_button{
  color: var(--color-surface);
  font-size: 14px;
  background: -webkit-linear-gradient(45deg, rgb(171, 39, 39) 20%, rgb(164, 135, 184));
  margin: 5px 0px 5px 0px;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.transcations_type_select{
  color: var(--color-surface);
  background-color: var(--color-primary);
  border-radius: 5px;
}
.balance_title{
  display: flex;
  justify-content: space-between;
}
</style>