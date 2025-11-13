import React, { useState } from 'react'
import { useTodoStore } from "../store/todoStore.js"

const AddTodoPage = () => {

    const { todos, addTodo,  } = useTodoStore();

    const [value, setValue] = useState("")
    const handleAdd = (e) => {
        e.preventDefault();
        if (!value.trim()) return
        addTodo({
            id: Date.now(),
            text: value
        });

        setValue("")

    }

    return (
        <div>

            <div >
                <label htmlFor="">Todo</label>
                <input type="text" placeholder='Enter your todo'
                    className='m-2 bg-stone-950 text-stone-200 rounded-2xl px-2 py-1.5 outline-none'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleAdd} className='bg-blue-500 px-3 py-1.5 rounded-2xl text-lg text-stone-200 cursor-pointer'>Add</button>
            </div>


            <div className='mt-5 '>
                {todos.map( (todo) =>(
                    <div key={todo.id} className='text-stone-950 p-2 '>
                        <p>
                        {todo.text}

                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AddTodoPage