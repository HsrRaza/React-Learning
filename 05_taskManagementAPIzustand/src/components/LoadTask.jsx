/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useTaskStore } from '../store/taskStore'
import { MdDelete } from "react-icons/md";

const LoadTask = () => {


    const { loadTasks, tasks, loading } = useTaskStore()
    const deleteTask = useTaskStore( (s)=>s.deleteTask)

    useEffect( ()=>{
        loadTasks();
    }, []);
    
    if(loading) return <p>Loading ...</p>
    return (


        < div className=' sm:w-[500px] m-3 bg-white shadow-lg p-2 rounded-lg' >
            <h2 className=' text-md p-2'>Tasks management in Zustand</h2>
        { tasks.map((t) =>(
            <div key={t.id} className='text-sm flex  justify-between p-2 gap-2'>
                <p className='w-50'>{t.title}</p>
                <p>{t.status}</p>

                <button onClick={()=> deleteTask(t.id)}><MdDelete className='text-lg hover:cursor-pointer hover:text-purple-400'/></button>
            </div>
            
        )) }
    </div >
  )
}

export default LoadTask