// {
//   id: number,
//   type: "income" | "expense",
//   amount: number,
//   category: string,
//   date: string,
//   note?: string
// }  


import {create} from "zustand"

export const  useExpenseStore = create( (set, get)=>({
    transactions:[],
      
    addTransaction: (txn)=>
        set( (state) =>({
            transactions:[...state.transactions, txn]
        })),


    deleteTransaction: (id)=> 
        set( (state) => ({
            transactions:[state.transactions.filter( (t) => t.id !== id)]
        })),

    // derived states

    getTotalIncome:()=>
        get().transactions    
          .filter((t)=> t.category ==="income")    
        .reduce( (acc, curr) => acc +curr.amount, 0),


    getTotalExpense: ()=>
        get().transactions
          .filter((t)=> t.category ==="expense")
          .reduce( (acc, curr)=> acc + curr.amount, 0),
}))