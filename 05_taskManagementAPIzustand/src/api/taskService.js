import { api } from "./axois";

export const fetchTasks = async ()=>{
    const res =  await api.get("/tasks");
    return  res.data;

}
export const addTaskAPI = async( task)=>{
    const res = await api.post("/tasks", task);
    return res.data
}

export const deleteTask = async ( id)=>{
     await api.delete(`tasks/${id}`);
    return id
}