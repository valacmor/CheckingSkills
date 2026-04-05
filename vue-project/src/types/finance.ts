export type TransactionType = 'income' | 'expense';

export interface Transaction{
    id: number,
    description: string,
    amount: number,
    type: TransactionType;
}

export interface FinanceState{
    balance: number;
    inputAmount: number;
    transactions: Transaction[];
    budgetLimit: number;
    filterType: 'all' | 'income' | 'expense';
}

export interface FinanceStats{
    totalIncome: number;
    totalExpense: number;
    budgetLeft: number;
}

