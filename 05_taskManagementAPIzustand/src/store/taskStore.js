import { create } from "zustand";
import { fetchTasks, addTaskAPI, deleteTask } from "../api/taskService";

export const useTaskStore = create((set) => ({
    tasks: [],
    loading: false,
    error: null,

    loadTasks: async () => {
        set({ loading: true, error: null });

        try {
            const data = await fetchTasks();
            set({ tasks: data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false })
        }
    },

    addTask: async (task) => {
        try {
            const newTask = await addTaskAPI(task);
            set((state) => ({ tasks: [...state.tasks, newTask] }))

        } catch (err) {
            set({ error: err.message, })
        }
    },

    deleteTask: async (id) => {
        try {
            await deleteTask(id)
            set((state) => ({
                tasks: state.tasks.filter((t) => t.id !== id),
            }));
        } catch (err) {
            set({ error: err.message })
        }
    }

}))