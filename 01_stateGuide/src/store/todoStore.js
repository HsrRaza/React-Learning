import {create} from "zustand"

export const  useTodoStore = create((set) => ({
    todos:[],
    addTodo: (todo) => 
        set( (state)=> ({
            todos:[...state.todos, todo]
        })),

    deleteTodo: ( id) => 
        set( (state) => ({
            todos:state.todos.filter( (t)=>t.id !== id),
        })),
        
}))