import { defineStore } from 'pinia'
import { ref, computed} from 'vue'
import type { Transaction } from '@/types/finance';

export const useFinanceStore = defineStore('finance', () => {


    const balance = ref(0);
    const inputAmount = ref(0);
    const transactions = ref<Transaction[]>([]);
    const budgetLimit = ref(0);
    const filterType = ref<'all' | 'income' | 'expense'>('all');
    const pageCounter = ref(0);
    

    function AddCash(){
        if(inputAmount.value > 0){
        balance.value += inputAmount.value;
        transactions.value.push({
            id: Date.now(), 
            description: 'Пополнение', 
            amount: inputAmount.value,
            type: 'income' 
        })
        inputAmount.value = 0;
        saveToStorage();
  }
}

    function AddExpense(){
    if(inputAmount.value <= balance.value && inputAmount.value > 0){
        balance.value -= inputAmount.value;
        transactions.value.push({
        id: Date.now(),
        description: 'Расход',
        amount: inputAmount.value,
        type: 'expense'
        })
        inputAmount.value = 0;
        saveToStorage();
    }
    else alert('Недостаточно средств')
    }

    function deleteTransaction(id: number): void{
    transactions.value = transactions.value.filter(t => t.id !== id);

    saveToStorage();
    }

    const totalIncome = computed((): number => {
    return transactions.value
        .filter(t => t.type === 'income')     
        .reduce((sum, t) => sum + t.amount, 0) 
    })

    const totalExpense = computed((): number => {
    return transactions.value
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)
    })


    const budgetLeft = computed((): number =>{
    return budgetLimit.value - totalExpense.value;
    })

    const isBudgetWarning = computed((): boolean => {
    return budgetLeft.value < (budgetLimit.value * 0.2)
    })

    function saveToStorage() {
    localStorage.setItem('balance', JSON.stringify(balance.value))
    localStorage.setItem('transactions', JSON.stringify(transactions.value))
  }

    function loadFromStorage() {
    const savedBalance = localStorage.getItem('balance')
    const savedTransactions = localStorage.getItem('transactions')
    
    if (savedBalance) balance.value = JSON.parse(savedBalance)
    if (savedTransactions) transactions.value = JSON.parse(savedTransactions)
  }

    const filteredTransactions = computed(() => {
      if(filterType.value === 'all') return transactions.value;
      return transactions.value.filter(t => t.type === filterType.value);
    })

    const recentTransactions = computed(() => {
      const allReversed = filteredTransactions.value.slice().reverse();
      const start = pageCounter.value * 5;
      const end = start + 5;
      return allReversed.slice(start,end)
    })


    const pagination = (delta: number) => {
      const newPage = pageCounter.value + delta;
      const totalPages = Math.ceil(filteredTransactions.value.length / 5);
      if (newPage >= 0 && newPage < totalPages) {
        pageCounter.value = newPage;
      } 
    }


  return {
    // state
    balance,
    inputAmount,
    transactions,
    budgetLimit,
    filterType,
    pageCounter,
    // getters
    totalIncome,
    totalExpense,
    isBudgetWarning,
    budgetLeft,
    recentTransactions,
    // actions
    AddCash,
    AddExpense,
    deleteTransaction,
    loadFromStorage,
    pagination
  }
})