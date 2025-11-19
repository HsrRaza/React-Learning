import React, { useState } from 'react'
import { useTaskStore } from '../store/taskStore'

const AddTask = () => {

    const [form, setForm] = useState({
      title:"",
      status:"todo",  
    });

    const addTask = useTaskStore((s) => s.addTask);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.title.trim()) return

       
        addTask({
            title:form.title,
            status:form.status
        })

        setForm({title:"", status:""})


    }
    return (
        <div className='sm:w-[500px] m-3 bg-white shadow-lg p-2 rounded-lg '>
            <form onSubmit={handleSubmit} className=''>
                

                <label className='mr-4' >Task</label >
                <input type="text"
                    value={form.title}
                    onChange={(e) => setForm({...form, title:e.target.value})}
                    placeholder='New Task'
                    className='bg-stone-300 p-1.5 rounded-lg m-1 text-black outline-none'
                    />
                <select name="status" id="" className='m-2 outline-none' value={form.status} onChange={(e)=> setForm({...form, status:e.target.value})}>
                    <option value="todo" >todo</option>
                    
                    <option value="progress">progress</option>
                    <option value="Done">Done</option>
                </select>

                <button className='px-3 py-1.5 bg-purple-500 rounded-lg mr-0 text-stone-200 hover:cursor-pointer hover:bg-purple-600'>Add</button>
                    
            </form>

        </div>
    )
}

export default AddTask