import React, { useState } from 'react'
import { useExpenseStore } from '../store/useExpensStore';

const FormInput = () => {

    const { addTransaction } = useExpenseStore();

    const [form, setForm] = useState({
        amount: "",
        category: "",
        type: "",
        date: "",
        note: "",
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form);

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.amount || !form.category || !form.type) return

        addTransaction({
            id: Date.now(),
            type: form.type,
            amount: parseFloat(form.amount),
            category: form.category,
            date: form.date,
            note: form.note

        })
        setForm({ amount: "", date: "", category: "", type: "", note: "" })

    }
    return (
        <div>

            <div className='border w-[700px] border-gray-300 p-2'>

                <form action="" onSubmit={handleSubmit}>



                    <input type="number" name='amount' value={form.amount} onChange={handleChange} placeholder='amount'
                        className='border px-2 py-1.5 rounded w-30'
                    />
                    <input type="text" name='type' value={form.type} onChange={handleChange} placeholder='Type'
                        className='border  px-2 py-1.5 rounded w-30 m-1'
                    />
                    <select name="category" id="" className='border p-2 rounded m-2' onChange={handleChange} value={form.category}>
                        <option value="">Choose</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>



                    <input type="date" name='date' value={form.date} onChange={handleChange}
                        className='border  px-2 py-1.5 rounded w-30 m-1' />
                    <input type="text" name='note' value={form.note} onChange={handleChange} placeholder='Note (Optinal)'
                        className='border  px-2 py-1.5 rounded w-30 m-1' />

                    <button type='submit' className='px-4 py-1.5 border ml-3'>Add</button>

                </form>
            </div>
        </div>
    )
}

export default FormInput