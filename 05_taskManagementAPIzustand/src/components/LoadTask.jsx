/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useTaskStore } from '../store/taskStore'

const LoadTask = () => {


    const { loadTasks, tasks, loading } = useTaskStore()

    useEffect( ()=>{
        loadTasks();
    }, []);
    
    if(loading) return <p>Loading ...</p>
    return (


        < div >
        { tasks.map((t) =>(
            <p key={t.id}>
                {t.title}
            </p>
        )) }
    </div >
  )
}

export default LoadTask