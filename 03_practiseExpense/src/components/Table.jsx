import React from 'react'
import { useExpenseStore } from '../store/useExpensStore'

const Table = () => {

    const {transactions} =  useExpenseStore();
  return (
    <div>
            {/* table */}
            <div className="mt-4 overflow-x-auto">
                <table className="min-w-[500px] border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2 text-left">Amount</th>
                            <th className="border px-4 py-2 text-left">Type</th>
                            <th className="border px-4 py-2 text-left">Category</th>
                            <th className="border px-4 py-2 text-left">Date</th>
                            <th className="border px-4 py-2 text-left">Note</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map(({ id, amount,type,  category, date, note }) => (
                            <tr key={id} className="bg-gray-50">
                                <td className="border px-4 py-2">{amount}</td>
                                <td className="border px-4 py-2">{type}</td>
                                <td className="border px-4 py-2">{category}</td>
                                <td className="border px-4 py-2">{date}</td>
                                <td className="border px-4 py-2">{note || "—"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Table