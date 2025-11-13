import { create } from "zustand";

export const  useExpenseStore = create((set) => ({
    transactions: [],

    addTransaction: (txn)=>
        set((state) => ({
            transactions:[...state.transactions, txn],
        })),

    deleteTransaction: (id)=> 
        set( (state) => ({
            transactions: state.transactions.filter( (t) => t.id !== id),
        }))
}))